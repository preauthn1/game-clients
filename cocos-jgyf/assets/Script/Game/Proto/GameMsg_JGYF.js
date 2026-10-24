/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg_JGYF = (function() {

    /**
     * Namespace GameMsg_JGYF.
     * @exports GameMsg_JGYF
     * @namespace
     */
    var GameMsg_JGYF = {};

    GameMsg_JGYF.JGYF_MSG_UserEnter = (function() {

        /**
         * Properties of a JGYF_MSG_UserEnter.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_UserEnter
         * @property {GameMsg_JGYF.IJGYF_GameUser} User JGYF_MSG_UserEnter User
         */

        /**
         * Constructs a new JGYF_MSG_UserEnter.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_UserEnter.
         * @implements IJGYF_MSG_UserEnter
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_UserEnter=} [properties] Properties to set
         */
        function JGYF_MSG_UserEnter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_UserEnter User.
         * @member {GameMsg_JGYF.IJGYF_GameUser} User
         * @memberof GameMsg_JGYF.JGYF_MSG_UserEnter
         * @instance
         */
        JGYF_MSG_UserEnter.prototype.User = null;

        /**
         * Creates a new JGYF_MSG_UserEnter instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_UserEnter
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_UserEnter=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_UserEnter} JGYF_MSG_UserEnter instance
         */
        JGYF_MSG_UserEnter.create = function create(properties) {
            return new JGYF_MSG_UserEnter(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_UserEnter message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_UserEnter.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_UserEnter
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_UserEnter} message JGYF_MSG_UserEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_UserEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_JGYF.JGYF_GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_UserEnter message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_UserEnter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_UserEnter
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_UserEnter} message JGYF_MSG_UserEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_UserEnter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_UserEnter message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_UserEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_UserEnter} JGYF_MSG_UserEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_UserEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_UserEnter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.GameMsg_JGYF.JGYF_GameUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("User"))
                throw $util.ProtocolError("missing required 'User'", { instance: message });
            return message;
        };

        /**
         * Decodes a JGYF_MSG_UserEnter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_UserEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_UserEnter} JGYF_MSG_UserEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_UserEnter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_UserEnter message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_UserEnter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_UserEnter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_JGYF.JGYF_GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a JGYF_MSG_UserEnter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_UserEnter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_UserEnter} JGYF_MSG_UserEnter
         */
        JGYF_MSG_UserEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_UserEnter)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_UserEnter();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_UserEnter.User: object expected");
                message.User = $root.GameMsg_JGYF.JGYF_GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_UserEnter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_UserEnter
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_UserEnter} message JGYF_MSG_UserEnter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_UserEnter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.User = null;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User = $root.GameMsg_JGYF.JGYF_GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this JGYF_MSG_UserEnter to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_UserEnter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_UserEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_UserEnter;
    })();

    GameMsg_JGYF.JGYF_MSG_UserLeave = (function() {

        /**
         * Properties of a JGYF_MSG_UserLeave.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_UserLeave
         * @property {GameMsg_JGYF.IJGYF_GameUser} User JGYF_MSG_UserLeave User
         */

        /**
         * Constructs a new JGYF_MSG_UserLeave.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_UserLeave.
         * @implements IJGYF_MSG_UserLeave
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_UserLeave=} [properties] Properties to set
         */
        function JGYF_MSG_UserLeave(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_UserLeave User.
         * @member {GameMsg_JGYF.IJGYF_GameUser} User
         * @memberof GameMsg_JGYF.JGYF_MSG_UserLeave
         * @instance
         */
        JGYF_MSG_UserLeave.prototype.User = null;

        /**
         * Creates a new JGYF_MSG_UserLeave instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_UserLeave
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_UserLeave=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_UserLeave} JGYF_MSG_UserLeave instance
         */
        JGYF_MSG_UserLeave.create = function create(properties) {
            return new JGYF_MSG_UserLeave(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_UserLeave message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_UserLeave.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_UserLeave
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_UserLeave} message JGYF_MSG_UserLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_UserLeave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_JGYF.JGYF_GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_UserLeave message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_UserLeave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_UserLeave
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_UserLeave} message JGYF_MSG_UserLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_UserLeave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_UserLeave message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_UserLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_UserLeave} JGYF_MSG_UserLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_UserLeave.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_UserLeave();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.GameMsg_JGYF.JGYF_GameUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("User"))
                throw $util.ProtocolError("missing required 'User'", { instance: message });
            return message;
        };

        /**
         * Decodes a JGYF_MSG_UserLeave message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_UserLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_UserLeave} JGYF_MSG_UserLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_UserLeave.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_UserLeave message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_UserLeave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_UserLeave.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_JGYF.JGYF_GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a JGYF_MSG_UserLeave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_UserLeave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_UserLeave} JGYF_MSG_UserLeave
         */
        JGYF_MSG_UserLeave.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_UserLeave)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_UserLeave();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_UserLeave.User: object expected");
                message.User = $root.GameMsg_JGYF.JGYF_GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_UserLeave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_UserLeave
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_UserLeave} message JGYF_MSG_UserLeave
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_UserLeave.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.User = null;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User = $root.GameMsg_JGYF.JGYF_GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this JGYF_MSG_UserLeave to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_UserLeave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_UserLeave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_UserLeave;
    })();

    GameMsg_JGYF.JGYF_MSG_UserStateChange = (function() {

        /**
         * Properties of a JGYF_MSG_UserStateChange.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_UserStateChange
         * @property {GameMsg_JGYF.IJGYF_GameUser} User JGYF_MSG_UserStateChange User
         */

        /**
         * Constructs a new JGYF_MSG_UserStateChange.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_UserStateChange.
         * @implements IJGYF_MSG_UserStateChange
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_UserStateChange=} [properties] Properties to set
         */
        function JGYF_MSG_UserStateChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_UserStateChange User.
         * @member {GameMsg_JGYF.IJGYF_GameUser} User
         * @memberof GameMsg_JGYF.JGYF_MSG_UserStateChange
         * @instance
         */
        JGYF_MSG_UserStateChange.prototype.User = null;

        /**
         * Creates a new JGYF_MSG_UserStateChange instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_UserStateChange
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_UserStateChange=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_UserStateChange} JGYF_MSG_UserStateChange instance
         */
        JGYF_MSG_UserStateChange.create = function create(properties) {
            return new JGYF_MSG_UserStateChange(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_UserStateChange message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_UserStateChange.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_UserStateChange
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_UserStateChange} message JGYF_MSG_UserStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_UserStateChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_JGYF.JGYF_GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_UserStateChange message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_UserStateChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_UserStateChange
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_UserStateChange} message JGYF_MSG_UserStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_UserStateChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_UserStateChange message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_UserStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_UserStateChange} JGYF_MSG_UserStateChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_UserStateChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_UserStateChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.GameMsg_JGYF.JGYF_GameUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("User"))
                throw $util.ProtocolError("missing required 'User'", { instance: message });
            return message;
        };

        /**
         * Decodes a JGYF_MSG_UserStateChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_UserStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_UserStateChange} JGYF_MSG_UserStateChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_UserStateChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_UserStateChange message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_UserStateChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_UserStateChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_JGYF.JGYF_GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a JGYF_MSG_UserStateChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_UserStateChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_UserStateChange} JGYF_MSG_UserStateChange
         */
        JGYF_MSG_UserStateChange.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_UserStateChange)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_UserStateChange();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_UserStateChange.User: object expected");
                message.User = $root.GameMsg_JGYF.JGYF_GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_UserStateChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_UserStateChange
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_UserStateChange} message JGYF_MSG_UserStateChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_UserStateChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.User = null;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User = $root.GameMsg_JGYF.JGYF_GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this JGYF_MSG_UserStateChange to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_UserStateChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_UserStateChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_UserStateChange;
    })();

    GameMsg_JGYF.JGYF_GameUser = (function() {

        /**
         * Properties of a JGYF_GameUser.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_GameUser
         * @property {number} UserID JGYF_GameUser UserID
         * @property {string} NickName JGYF_GameUser NickName
         * @property {number} Sex JGYF_GameUser Sex
         * @property {number} FaceID JGYF_GameUser FaceID
         * @property {number|Long} Score JGYF_GameUser Score
         * @property {number} WinCount JGYF_GameUser WinCount
         * @property {number} LoseCount JGYF_GameUser LoseCount
         * @property {number} DrawCount JGYF_GameUser DrawCount
         * @property {number} StateValue JGYF_GameUser StateValue
         * @property {number} TableNo JGYF_GameUser TableNo
         * @property {number} SeatNo JGYF_GameUser SeatNo
         * @property {number|null} [LastWinLose] JGYF_GameUser LastWinLose
         * @property {number|Long|null} [Coupon] JGYF_GameUser Coupon
         * @property {number|Long|null} [UpdateCoupon] JGYF_GameUser UpdateCoupon
         * @property {number|null} [AvatarFrameID] JGYF_GameUser AvatarFrameID
         */

        /**
         * Constructs a new JGYF_GameUser.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_GameUser.
         * @implements IJGYF_GameUser
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_GameUser=} [properties] Properties to set
         */
        function JGYF_GameUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_GameUser UserID.
         * @member {number} UserID
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.UserID = 0;

        /**
         * JGYF_GameUser NickName.
         * @member {string} NickName
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.NickName = "";

        /**
         * JGYF_GameUser Sex.
         * @member {number} Sex
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.Sex = 0;

        /**
         * JGYF_GameUser FaceID.
         * @member {number} FaceID
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.FaceID = 0;

        /**
         * JGYF_GameUser Score.
         * @member {number|Long} Score
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_GameUser WinCount.
         * @member {number} WinCount
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.WinCount = 0;

        /**
         * JGYF_GameUser LoseCount.
         * @member {number} LoseCount
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.LoseCount = 0;

        /**
         * JGYF_GameUser DrawCount.
         * @member {number} DrawCount
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.DrawCount = 0;

        /**
         * JGYF_GameUser StateValue.
         * @member {number} StateValue
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.StateValue = 0;

        /**
         * JGYF_GameUser TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.TableNo = 0;

        /**
         * JGYF_GameUser SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.SeatNo = 0;

        /**
         * JGYF_GameUser LastWinLose.
         * @member {number} LastWinLose
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.LastWinLose = 0;

        /**
         * JGYF_GameUser Coupon.
         * @member {number|Long} Coupon
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.Coupon = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_GameUser UpdateCoupon.
         * @member {number|Long} UpdateCoupon
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.UpdateCoupon = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_GameUser AvatarFrameID.
         * @member {number} AvatarFrameID
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         */
        JGYF_GameUser.prototype.AvatarFrameID = 0;

        /**
         * Creates a new JGYF_GameUser instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @static
         * @param {GameMsg_JGYF.IJGYF_GameUser=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_GameUser} JGYF_GameUser instance
         */
        JGYF_GameUser.create = function create(properties) {
            return new JGYF_GameUser(properties);
        };

        /**
         * Encodes the specified JGYF_GameUser message. Does not implicitly {@link GameMsg_JGYF.JGYF_GameUser.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @static
         * @param {GameMsg_JGYF.IJGYF_GameUser} message JGYF_GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_GameUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.NickName);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Sex);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.FaceID);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.Score);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.WinCount);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.LoseCount);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.DrawCount);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.StateValue);
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.TableNo);
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.SeatNo);
            if (message.LastWinLose != null && Object.hasOwnProperty.call(message, "LastWinLose"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.LastWinLose);
            if (message.Coupon != null && Object.hasOwnProperty.call(message, "Coupon"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.Coupon);
            if (message.UpdateCoupon != null && Object.hasOwnProperty.call(message, "UpdateCoupon"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.UpdateCoupon);
            if (message.AvatarFrameID != null && Object.hasOwnProperty.call(message, "AvatarFrameID"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.AvatarFrameID);
            return writer;
        };

        /**
         * Encodes the specified JGYF_GameUser message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_GameUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @static
         * @param {GameMsg_JGYF.IJGYF_GameUser} message JGYF_GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_GameUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_GameUser message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_GameUser} JGYF_GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_GameUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_GameUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.NickName = reader.string();
                    break;
                case 3:
                    message.Sex = reader.int32();
                    break;
                case 4:
                    message.FaceID = reader.int32();
                    break;
                case 5:
                    message.Score = reader.int64();
                    break;
                case 6:
                    message.WinCount = reader.int32();
                    break;
                case 7:
                    message.LoseCount = reader.int32();
                    break;
                case 8:
                    message.DrawCount = reader.int32();
                    break;
                case 9:
                    message.StateValue = reader.int32();
                    break;
                case 10:
                    message.TableNo = reader.int32();
                    break;
                case 11:
                    message.SeatNo = reader.int32();
                    break;
                case 12:
                    message.LastWinLose = reader.int32();
                    break;
                case 13:
                    message.Coupon = reader.int64();
                    break;
                case 14:
                    message.UpdateCoupon = reader.int64();
                    break;
                case 15:
                    message.AvatarFrameID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("NickName"))
                throw $util.ProtocolError("missing required 'NickName'", { instance: message });
            if (!message.hasOwnProperty("Sex"))
                throw $util.ProtocolError("missing required 'Sex'", { instance: message });
            if (!message.hasOwnProperty("FaceID"))
                throw $util.ProtocolError("missing required 'FaceID'", { instance: message });
            if (!message.hasOwnProperty("Score"))
                throw $util.ProtocolError("missing required 'Score'", { instance: message });
            if (!message.hasOwnProperty("WinCount"))
                throw $util.ProtocolError("missing required 'WinCount'", { instance: message });
            if (!message.hasOwnProperty("LoseCount"))
                throw $util.ProtocolError("missing required 'LoseCount'", { instance: message });
            if (!message.hasOwnProperty("DrawCount"))
                throw $util.ProtocolError("missing required 'DrawCount'", { instance: message });
            if (!message.hasOwnProperty("StateValue"))
                throw $util.ProtocolError("missing required 'StateValue'", { instance: message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance: message });
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            return message;
        };

        /**
         * Decodes a JGYF_GameUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_GameUser} JGYF_GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_GameUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_GameUser message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_GameUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isString(message.NickName))
                return "NickName: string expected";
            if (!$util.isInteger(message.Sex))
                return "Sex: integer expected";
            if (!$util.isInteger(message.FaceID))
                return "FaceID: integer expected";
            if (!$util.isInteger(message.Score) && !(message.Score && $util.isInteger(message.Score.low) && $util.isInteger(message.Score.high)))
                return "Score: integer|Long expected";
            if (!$util.isInteger(message.WinCount))
                return "WinCount: integer expected";
            if (!$util.isInteger(message.LoseCount))
                return "LoseCount: integer expected";
            if (!$util.isInteger(message.DrawCount))
                return "DrawCount: integer expected";
            if (!$util.isInteger(message.StateValue))
                return "StateValue: integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (message.LastWinLose != null && message.hasOwnProperty("LastWinLose"))
                if (!$util.isInteger(message.LastWinLose))
                    return "LastWinLose: integer expected";
            if (message.Coupon != null && message.hasOwnProperty("Coupon"))
                if (!$util.isInteger(message.Coupon) && !(message.Coupon && $util.isInteger(message.Coupon.low) && $util.isInteger(message.Coupon.high)))
                    return "Coupon: integer|Long expected";
            if (message.UpdateCoupon != null && message.hasOwnProperty("UpdateCoupon"))
                if (!$util.isInteger(message.UpdateCoupon) && !(message.UpdateCoupon && $util.isInteger(message.UpdateCoupon.low) && $util.isInteger(message.UpdateCoupon.high)))
                    return "UpdateCoupon: integer|Long expected";
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                if (!$util.isInteger(message.AvatarFrameID))
                    return "AvatarFrameID: integer expected";
            return null;
        };

        /**
         * Creates a JGYF_GameUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_GameUser} JGYF_GameUser
         */
        JGYF_GameUser.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_GameUser)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_GameUser();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.NickName != null)
                message.NickName = String(object.NickName);
            if (object.Sex != null)
                message.Sex = object.Sex | 0;
            if (object.FaceID != null)
                message.FaceID = object.FaceID | 0;
            if (object.Score != null)
                if ($util.Long)
                    (message.Score = $util.Long.fromValue(object.Score)).unsigned = false;
                else if (typeof object.Score === "string")
                    message.Score = parseInt(object.Score, 10);
                else if (typeof object.Score === "number")
                    message.Score = object.Score;
                else if (typeof object.Score === "object")
                    message.Score = new $util.LongBits(object.Score.low >>> 0, object.Score.high >>> 0).toNumber();
            if (object.WinCount != null)
                message.WinCount = object.WinCount | 0;
            if (object.LoseCount != null)
                message.LoseCount = object.LoseCount | 0;
            if (object.DrawCount != null)
                message.DrawCount = object.DrawCount | 0;
            if (object.StateValue != null)
                message.StateValue = object.StateValue | 0;
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.LastWinLose != null)
                message.LastWinLose = object.LastWinLose | 0;
            if (object.Coupon != null)
                if ($util.Long)
                    (message.Coupon = $util.Long.fromValue(object.Coupon)).unsigned = false;
                else if (typeof object.Coupon === "string")
                    message.Coupon = parseInt(object.Coupon, 10);
                else if (typeof object.Coupon === "number")
                    message.Coupon = object.Coupon;
                else if (typeof object.Coupon === "object")
                    message.Coupon = new $util.LongBits(object.Coupon.low >>> 0, object.Coupon.high >>> 0).toNumber();
            if (object.UpdateCoupon != null)
                if ($util.Long)
                    (message.UpdateCoupon = $util.Long.fromValue(object.UpdateCoupon)).unsigned = false;
                else if (typeof object.UpdateCoupon === "string")
                    message.UpdateCoupon = parseInt(object.UpdateCoupon, 10);
                else if (typeof object.UpdateCoupon === "number")
                    message.UpdateCoupon = object.UpdateCoupon;
                else if (typeof object.UpdateCoupon === "object")
                    message.UpdateCoupon = new $util.LongBits(object.UpdateCoupon.low >>> 0, object.UpdateCoupon.high >>> 0).toNumber();
            if (object.AvatarFrameID != null)
                message.AvatarFrameID = object.AvatarFrameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a JGYF_GameUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @static
         * @param {GameMsg_JGYF.JGYF_GameUser} message JGYF_GameUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_GameUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.NickName = "";
                object.Sex = 0;
                object.FaceID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Score = options.longs === String ? "0" : 0;
                object.WinCount = 0;
                object.LoseCount = 0;
                object.DrawCount = 0;
                object.StateValue = 0;
                object.TableNo = 0;
                object.SeatNo = 0;
                object.LastWinLose = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Coupon = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Coupon = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UpdateCoupon = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UpdateCoupon = options.longs === String ? "0" : 0;
                object.AvatarFrameID = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                object.NickName = message.NickName;
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                object.Sex = message.Sex;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (typeof message.Score === "number")
                    object.Score = options.longs === String ? String(message.Score) : message.Score;
                else
                    object.Score = options.longs === String ? $util.Long.prototype.toString.call(message.Score) : options.longs === Number ? new $util.LongBits(message.Score.low >>> 0, message.Score.high >>> 0).toNumber() : message.Score;
            if (message.WinCount != null && message.hasOwnProperty("WinCount"))
                object.WinCount = message.WinCount;
            if (message.LoseCount != null && message.hasOwnProperty("LoseCount"))
                object.LoseCount = message.LoseCount;
            if (message.DrawCount != null && message.hasOwnProperty("DrawCount"))
                object.DrawCount = message.DrawCount;
            if (message.StateValue != null && message.hasOwnProperty("StateValue"))
                object.StateValue = message.StateValue;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.LastWinLose != null && message.hasOwnProperty("LastWinLose"))
                object.LastWinLose = message.LastWinLose;
            if (message.Coupon != null && message.hasOwnProperty("Coupon"))
                if (typeof message.Coupon === "number")
                    object.Coupon = options.longs === String ? String(message.Coupon) : message.Coupon;
                else
                    object.Coupon = options.longs === String ? $util.Long.prototype.toString.call(message.Coupon) : options.longs === Number ? new $util.LongBits(message.Coupon.low >>> 0, message.Coupon.high >>> 0).toNumber() : message.Coupon;
            if (message.UpdateCoupon != null && message.hasOwnProperty("UpdateCoupon"))
                if (typeof message.UpdateCoupon === "number")
                    object.UpdateCoupon = options.longs === String ? String(message.UpdateCoupon) : message.UpdateCoupon;
                else
                    object.UpdateCoupon = options.longs === String ? $util.Long.prototype.toString.call(message.UpdateCoupon) : options.longs === Number ? new $util.LongBits(message.UpdateCoupon.low >>> 0, message.UpdateCoupon.high >>> 0).toNumber() : message.UpdateCoupon;
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                object.AvatarFrameID = message.AvatarFrameID;
            return object;
        };

        /**
         * Converts this JGYF_GameUser to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_GameUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_GameUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_GameUser;
    })();

    GameMsg_JGYF.JGYF_MSG_ReelSetting = (function() {

        /**
         * Properties of a JGYF_MSG_ReelSetting.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_ReelSetting
         * @property {Array.<GameMsg_JGYF.IJGYF_GameReels>|null} [GameReels] JGYF_MSG_ReelSetting GameReels
         */

        /**
         * Constructs a new JGYF_MSG_ReelSetting.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_ReelSetting.
         * @implements IJGYF_MSG_ReelSetting
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_ReelSetting=} [properties] Properties to set
         */
        function JGYF_MSG_ReelSetting(properties) {
            this.GameReels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_ReelSetting GameReels.
         * @member {Array.<GameMsg_JGYF.IJGYF_GameReels>} GameReels
         * @memberof GameMsg_JGYF.JGYF_MSG_ReelSetting
         * @instance
         */
        JGYF_MSG_ReelSetting.prototype.GameReels = $util.emptyArray;

        /**
         * Creates a new JGYF_MSG_ReelSetting instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_ReelSetting
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_ReelSetting=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_ReelSetting} JGYF_MSG_ReelSetting instance
         */
        JGYF_MSG_ReelSetting.create = function create(properties) {
            return new JGYF_MSG_ReelSetting(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_ReelSetting message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_ReelSetting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_ReelSetting
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_ReelSetting} message JGYF_MSG_ReelSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_ReelSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameReels != null && message.GameReels.length)
                for (var i = 0; i < message.GameReels.length; ++i)
                    $root.GameMsg_JGYF.JGYF_GameReels.encode(message.GameReels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_ReelSetting message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_ReelSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_ReelSetting
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_ReelSetting} message JGYF_MSG_ReelSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_ReelSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_ReelSetting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_ReelSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_ReelSetting} JGYF_MSG_ReelSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_ReelSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_ReelSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.GameReels && message.GameReels.length))
                        message.GameReels = [];
                    message.GameReels.push($root.GameMsg_JGYF.JGYF_GameReels.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_MSG_ReelSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_ReelSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_ReelSetting} JGYF_MSG_ReelSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_ReelSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_ReelSetting message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_ReelSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_ReelSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameReels != null && message.hasOwnProperty("GameReels")) {
                if (!Array.isArray(message.GameReels))
                    return "GameReels: array expected";
                for (var i = 0; i < message.GameReels.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_GameReels.verify(message.GameReels[i]);
                    if (error)
                        return "GameReels." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JGYF_MSG_ReelSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_ReelSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_ReelSetting} JGYF_MSG_ReelSetting
         */
        JGYF_MSG_ReelSetting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_ReelSetting)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_ReelSetting();
            if (object.GameReels) {
                if (!Array.isArray(object.GameReels))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_ReelSetting.GameReels: array expected");
                message.GameReels = [];
                for (var i = 0; i < object.GameReels.length; ++i) {
                    if (typeof object.GameReels[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_ReelSetting.GameReels: object expected");
                    message.GameReels[i] = $root.GameMsg_JGYF.JGYF_GameReels.fromObject(object.GameReels[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_ReelSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_ReelSetting
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_ReelSetting} message JGYF_MSG_ReelSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_ReelSetting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.GameReels = [];
            if (message.GameReels && message.GameReels.length) {
                object.GameReels = [];
                for (var j = 0; j < message.GameReels.length; ++j)
                    object.GameReels[j] = $root.GameMsg_JGYF.JGYF_GameReels.toObject(message.GameReels[j], options);
            }
            return object;
        };

        /**
         * Converts this JGYF_MSG_ReelSetting to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_ReelSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_ReelSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_ReelSetting;
    })();

    GameMsg_JGYF.JGYF_MSG_Setting = (function() {

        /**
         * Properties of a JGYF_MSG_Setting.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_Setting
         * @property {number|null} [PayLineMode] JGYF_MSG_Setting PayLineMode
         * @property {number|null} [TotalPayLine] JGYF_MSG_Setting TotalPayLine
         * @property {number|Long|null} [MinCarryMoney] JGYF_MSG_Setting MinCarryMoney
         * @property {number|null} [RowCounts] JGYF_MSG_Setting RowCounts
         * @property {Array.<number>|null} [BetMoneys] JGYF_MSG_Setting BetMoneys
         * @property {Array.<number>|null} [BetRates] JGYF_MSG_Setting BetRates
         * @property {Array.<number>|null} [BigWinStep] JGYF_MSG_Setting BigWinStep
         * @property {Array.<GameMsg_JGYF.IJGYF_SymbolPayTable>|null} [SymbolPayTable] JGYF_MSG_Setting SymbolPayTable
         * @property {Array.<GameMsg_JGYF.IJGYF_ReelSetting>|null} [ReelSetting] JGYF_MSG_Setting ReelSetting
         * @property {Array.<GameMsg_JGYF.IJGYF_FreeGameInfo>|null} [FreeGames] JGYF_MSG_Setting FreeGames
         * @property {Array.<GameMsg_JGYF.IJGYF_PayLine>|null} [PayLines] JGYF_MSG_Setting PayLines
         * @property {Array.<GameMsg_JGYF.IJGYF_UnitPrefix>|null} [UnitPrefix] JGYF_MSG_Setting UnitPrefix
         * @property {Array.<GameMsg_JGYF.IJGYF_Description>|null} [Descriptions] JGYF_MSG_Setting Descriptions
         * @property {Array.<GameMsg_JGYF.IJGYF_GoldBallInfo>|null} [GoldBallSetting] JGYF_MSG_Setting GoldBallSetting
         * @property {Array.<GameMsg_JGYF.IJGYF_JackpotInfo>|null} [Jackpots] JGYF_MSG_Setting Jackpots
         */

        /**
         * Constructs a new JGYF_MSG_Setting.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_Setting.
         * @implements IJGYF_MSG_Setting
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_Setting=} [properties] Properties to set
         */
        function JGYF_MSG_Setting(properties) {
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
         * JGYF_MSG_Setting PayLineMode.
         * @member {number} PayLineMode
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.PayLineMode = 0;

        /**
         * JGYF_MSG_Setting TotalPayLine.
         * @member {number} TotalPayLine
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.TotalPayLine = 0;

        /**
         * JGYF_MSG_Setting MinCarryMoney.
         * @member {number|Long} MinCarryMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.MinCarryMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_Setting RowCounts.
         * @member {number} RowCounts
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.RowCounts = 0;

        /**
         * JGYF_MSG_Setting BetMoneys.
         * @member {Array.<number>} BetMoneys
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.BetMoneys = $util.emptyArray;

        /**
         * JGYF_MSG_Setting BetRates.
         * @member {Array.<number>} BetRates
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.BetRates = $util.emptyArray;

        /**
         * JGYF_MSG_Setting BigWinStep.
         * @member {Array.<number>} BigWinStep
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.BigWinStep = $util.emptyArray;

        /**
         * JGYF_MSG_Setting SymbolPayTable.
         * @member {Array.<GameMsg_JGYF.IJGYF_SymbolPayTable>} SymbolPayTable
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.SymbolPayTable = $util.emptyArray;

        /**
         * JGYF_MSG_Setting ReelSetting.
         * @member {Array.<GameMsg_JGYF.IJGYF_ReelSetting>} ReelSetting
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.ReelSetting = $util.emptyArray;

        /**
         * JGYF_MSG_Setting FreeGames.
         * @member {Array.<GameMsg_JGYF.IJGYF_FreeGameInfo>} FreeGames
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.FreeGames = $util.emptyArray;

        /**
         * JGYF_MSG_Setting PayLines.
         * @member {Array.<GameMsg_JGYF.IJGYF_PayLine>} PayLines
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.PayLines = $util.emptyArray;

        /**
         * JGYF_MSG_Setting UnitPrefix.
         * @member {Array.<GameMsg_JGYF.IJGYF_UnitPrefix>} UnitPrefix
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.UnitPrefix = $util.emptyArray;

        /**
         * JGYF_MSG_Setting Descriptions.
         * @member {Array.<GameMsg_JGYF.IJGYF_Description>} Descriptions
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.Descriptions = $util.emptyArray;

        /**
         * JGYF_MSG_Setting GoldBallSetting.
         * @member {Array.<GameMsg_JGYF.IJGYF_GoldBallInfo>} GoldBallSetting
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.GoldBallSetting = $util.emptyArray;

        /**
         * JGYF_MSG_Setting Jackpots.
         * @member {Array.<GameMsg_JGYF.IJGYF_JackpotInfo>} Jackpots
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         */
        JGYF_MSG_Setting.prototype.Jackpots = $util.emptyArray;

        /**
         * Creates a new JGYF_MSG_Setting instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_Setting=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_Setting} JGYF_MSG_Setting instance
         */
        JGYF_MSG_Setting.create = function create(properties) {
            return new JGYF_MSG_Setting(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_Setting message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_Setting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_Setting} message JGYF_MSG_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_Setting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PayLineMode != null && Object.hasOwnProperty.call(message, "PayLineMode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PayLineMode);
            if (message.TotalPayLine != null && Object.hasOwnProperty.call(message, "TotalPayLine"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TotalPayLine);
            if (message.MinCarryMoney != null && Object.hasOwnProperty.call(message, "MinCarryMoney"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.MinCarryMoney);
            if (message.RowCounts != null && Object.hasOwnProperty.call(message, "RowCounts"))
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
                    $root.GameMsg_JGYF.JGYF_SymbolPayTable.encode(message.SymbolPayTable[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.ReelSetting != null && message.ReelSetting.length)
                for (var i = 0; i < message.ReelSetting.length; ++i)
                    $root.GameMsg_JGYF.JGYF_ReelSetting.encode(message.ReelSetting[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.FreeGames != null && message.FreeGames.length)
                for (var i = 0; i < message.FreeGames.length; ++i)
                    $root.GameMsg_JGYF.JGYF_FreeGameInfo.encode(message.FreeGames[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.PayLines != null && message.PayLines.length)
                for (var i = 0; i < message.PayLines.length; ++i)
                    $root.GameMsg_JGYF.JGYF_PayLine.encode(message.PayLines[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.UnitPrefix != null && message.UnitPrefix.length)
                for (var i = 0; i < message.UnitPrefix.length; ++i)
                    $root.GameMsg_JGYF.JGYF_UnitPrefix.encode(message.UnitPrefix[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.Descriptions != null && message.Descriptions.length)
                for (var i = 0; i < message.Descriptions.length; ++i)
                    $root.GameMsg_JGYF.JGYF_Description.encode(message.Descriptions[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.GoldBallSetting != null && message.GoldBallSetting.length)
                for (var i = 0; i < message.GoldBallSetting.length; ++i)
                    $root.GameMsg_JGYF.JGYF_GoldBallInfo.encode(message.GoldBallSetting[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.Jackpots != null && message.Jackpots.length)
                for (var i = 0; i < message.Jackpots.length; ++i)
                    $root.GameMsg_JGYF.JGYF_JackpotInfo.encode(message.Jackpots[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_Setting message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_Setting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_Setting} message JGYF_MSG_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_Setting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_Setting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_Setting} JGYF_MSG_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_Setting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_Setting();
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
                    message.SymbolPayTable.push($root.GameMsg_JGYF.JGYF_SymbolPayTable.decode(reader, reader.uint32()));
                    break;
                case 9:
                    if (!(message.ReelSetting && message.ReelSetting.length))
                        message.ReelSetting = [];
                    message.ReelSetting.push($root.GameMsg_JGYF.JGYF_ReelSetting.decode(reader, reader.uint32()));
                    break;
                case 10:
                    if (!(message.FreeGames && message.FreeGames.length))
                        message.FreeGames = [];
                    message.FreeGames.push($root.GameMsg_JGYF.JGYF_FreeGameInfo.decode(reader, reader.uint32()));
                    break;
                case 11:
                    if (!(message.PayLines && message.PayLines.length))
                        message.PayLines = [];
                    message.PayLines.push($root.GameMsg_JGYF.JGYF_PayLine.decode(reader, reader.uint32()));
                    break;
                case 12:
                    if (!(message.UnitPrefix && message.UnitPrefix.length))
                        message.UnitPrefix = [];
                    message.UnitPrefix.push($root.GameMsg_JGYF.JGYF_UnitPrefix.decode(reader, reader.uint32()));
                    break;
                case 13:
                    if (!(message.Descriptions && message.Descriptions.length))
                        message.Descriptions = [];
                    message.Descriptions.push($root.GameMsg_JGYF.JGYF_Description.decode(reader, reader.uint32()));
                    break;
                case 14:
                    if (!(message.GoldBallSetting && message.GoldBallSetting.length))
                        message.GoldBallSetting = [];
                    message.GoldBallSetting.push($root.GameMsg_JGYF.JGYF_GoldBallInfo.decode(reader, reader.uint32()));
                    break;
                case 15:
                    if (!(message.Jackpots && message.Jackpots.length))
                        message.Jackpots = [];
                    message.Jackpots.push($root.GameMsg_JGYF.JGYF_JackpotInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_MSG_Setting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_Setting} JGYF_MSG_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_Setting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_Setting message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_Setting.verify = function verify(message) {
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
                    var error = $root.GameMsg_JGYF.JGYF_SymbolPayTable.verify(message.SymbolPayTable[i]);
                    if (error)
                        return "SymbolPayTable." + error;
                }
            }
            if (message.ReelSetting != null && message.hasOwnProperty("ReelSetting")) {
                if (!Array.isArray(message.ReelSetting))
                    return "ReelSetting: array expected";
                for (var i = 0; i < message.ReelSetting.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_ReelSetting.verify(message.ReelSetting[i]);
                    if (error)
                        return "ReelSetting." + error;
                }
            }
            if (message.FreeGames != null && message.hasOwnProperty("FreeGames")) {
                if (!Array.isArray(message.FreeGames))
                    return "FreeGames: array expected";
                for (var i = 0; i < message.FreeGames.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_FreeGameInfo.verify(message.FreeGames[i]);
                    if (error)
                        return "FreeGames." + error;
                }
            }
            if (message.PayLines != null && message.hasOwnProperty("PayLines")) {
                if (!Array.isArray(message.PayLines))
                    return "PayLines: array expected";
                for (var i = 0; i < message.PayLines.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_PayLine.verify(message.PayLines[i]);
                    if (error)
                        return "PayLines." + error;
                }
            }
            if (message.UnitPrefix != null && message.hasOwnProperty("UnitPrefix")) {
                if (!Array.isArray(message.UnitPrefix))
                    return "UnitPrefix: array expected";
                for (var i = 0; i < message.UnitPrefix.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_UnitPrefix.verify(message.UnitPrefix[i]);
                    if (error)
                        return "UnitPrefix." + error;
                }
            }
            if (message.Descriptions != null && message.hasOwnProperty("Descriptions")) {
                if (!Array.isArray(message.Descriptions))
                    return "Descriptions: array expected";
                for (var i = 0; i < message.Descriptions.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_Description.verify(message.Descriptions[i]);
                    if (error)
                        return "Descriptions." + error;
                }
            }
            if (message.GoldBallSetting != null && message.hasOwnProperty("GoldBallSetting")) {
                if (!Array.isArray(message.GoldBallSetting))
                    return "GoldBallSetting: array expected";
                for (var i = 0; i < message.GoldBallSetting.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_GoldBallInfo.verify(message.GoldBallSetting[i]);
                    if (error)
                        return "GoldBallSetting." + error;
                }
            }
            if (message.Jackpots != null && message.hasOwnProperty("Jackpots")) {
                if (!Array.isArray(message.Jackpots))
                    return "Jackpots: array expected";
                for (var i = 0; i < message.Jackpots.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_JackpotInfo.verify(message.Jackpots[i]);
                    if (error)
                        return "Jackpots." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JGYF_MSG_Setting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_Setting} JGYF_MSG_Setting
         */
        JGYF_MSG_Setting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_Setting)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_Setting();
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
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.BetMoneys: array expected");
                message.BetMoneys = [];
                for (var i = 0; i < object.BetMoneys.length; ++i)
                    message.BetMoneys[i] = object.BetMoneys[i] | 0;
            }
            if (object.BetRates) {
                if (!Array.isArray(object.BetRates))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.BetRates: array expected");
                message.BetRates = [];
                for (var i = 0; i < object.BetRates.length; ++i)
                    message.BetRates[i] = object.BetRates[i] | 0;
            }
            if (object.BigWinStep) {
                if (!Array.isArray(object.BigWinStep))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.BigWinStep: array expected");
                message.BigWinStep = [];
                for (var i = 0; i < object.BigWinStep.length; ++i)
                    message.BigWinStep[i] = object.BigWinStep[i] | 0;
            }
            if (object.SymbolPayTable) {
                if (!Array.isArray(object.SymbolPayTable))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.SymbolPayTable: array expected");
                message.SymbolPayTable = [];
                for (var i = 0; i < object.SymbolPayTable.length; ++i) {
                    if (typeof object.SymbolPayTable[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.SymbolPayTable: object expected");
                    message.SymbolPayTable[i] = $root.GameMsg_JGYF.JGYF_SymbolPayTable.fromObject(object.SymbolPayTable[i]);
                }
            }
            if (object.ReelSetting) {
                if (!Array.isArray(object.ReelSetting))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.ReelSetting: array expected");
                message.ReelSetting = [];
                for (var i = 0; i < object.ReelSetting.length; ++i) {
                    if (typeof object.ReelSetting[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.ReelSetting: object expected");
                    message.ReelSetting[i] = $root.GameMsg_JGYF.JGYF_ReelSetting.fromObject(object.ReelSetting[i]);
                }
            }
            if (object.FreeGames) {
                if (!Array.isArray(object.FreeGames))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.FreeGames: array expected");
                message.FreeGames = [];
                for (var i = 0; i < object.FreeGames.length; ++i) {
                    if (typeof object.FreeGames[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.FreeGames: object expected");
                    message.FreeGames[i] = $root.GameMsg_JGYF.JGYF_FreeGameInfo.fromObject(object.FreeGames[i]);
                }
            }
            if (object.PayLines) {
                if (!Array.isArray(object.PayLines))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.PayLines: array expected");
                message.PayLines = [];
                for (var i = 0; i < object.PayLines.length; ++i) {
                    if (typeof object.PayLines[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.PayLines: object expected");
                    message.PayLines[i] = $root.GameMsg_JGYF.JGYF_PayLine.fromObject(object.PayLines[i]);
                }
            }
            if (object.UnitPrefix) {
                if (!Array.isArray(object.UnitPrefix))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.UnitPrefix: array expected");
                message.UnitPrefix = [];
                for (var i = 0; i < object.UnitPrefix.length; ++i) {
                    if (typeof object.UnitPrefix[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.UnitPrefix: object expected");
                    message.UnitPrefix[i] = $root.GameMsg_JGYF.JGYF_UnitPrefix.fromObject(object.UnitPrefix[i]);
                }
            }
            if (object.Descriptions) {
                if (!Array.isArray(object.Descriptions))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.Descriptions: array expected");
                message.Descriptions = [];
                for (var i = 0; i < object.Descriptions.length; ++i) {
                    if (typeof object.Descriptions[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.Descriptions: object expected");
                    message.Descriptions[i] = $root.GameMsg_JGYF.JGYF_Description.fromObject(object.Descriptions[i]);
                }
            }
            if (object.GoldBallSetting) {
                if (!Array.isArray(object.GoldBallSetting))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.GoldBallSetting: array expected");
                message.GoldBallSetting = [];
                for (var i = 0; i < object.GoldBallSetting.length; ++i) {
                    if (typeof object.GoldBallSetting[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.GoldBallSetting: object expected");
                    message.GoldBallSetting[i] = $root.GameMsg_JGYF.JGYF_GoldBallInfo.fromObject(object.GoldBallSetting[i]);
                }
            }
            if (object.Jackpots) {
                if (!Array.isArray(object.Jackpots))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.Jackpots: array expected");
                message.Jackpots = [];
                for (var i = 0; i < object.Jackpots.length; ++i) {
                    if (typeof object.Jackpots[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_Setting.Jackpots: object expected");
                    message.Jackpots[i] = $root.GameMsg_JGYF.JGYF_JackpotInfo.fromObject(object.Jackpots[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_Setting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_Setting} message JGYF_MSG_Setting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_Setting.toObject = function toObject(message, options) {
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
                    object.SymbolPayTable[j] = $root.GameMsg_JGYF.JGYF_SymbolPayTable.toObject(message.SymbolPayTable[j], options);
            }
            if (message.ReelSetting && message.ReelSetting.length) {
                object.ReelSetting = [];
                for (var j = 0; j < message.ReelSetting.length; ++j)
                    object.ReelSetting[j] = $root.GameMsg_JGYF.JGYF_ReelSetting.toObject(message.ReelSetting[j], options);
            }
            if (message.FreeGames && message.FreeGames.length) {
                object.FreeGames = [];
                for (var j = 0; j < message.FreeGames.length; ++j)
                    object.FreeGames[j] = $root.GameMsg_JGYF.JGYF_FreeGameInfo.toObject(message.FreeGames[j], options);
            }
            if (message.PayLines && message.PayLines.length) {
                object.PayLines = [];
                for (var j = 0; j < message.PayLines.length; ++j)
                    object.PayLines[j] = $root.GameMsg_JGYF.JGYF_PayLine.toObject(message.PayLines[j], options);
            }
            if (message.UnitPrefix && message.UnitPrefix.length) {
                object.UnitPrefix = [];
                for (var j = 0; j < message.UnitPrefix.length; ++j)
                    object.UnitPrefix[j] = $root.GameMsg_JGYF.JGYF_UnitPrefix.toObject(message.UnitPrefix[j], options);
            }
            if (message.Descriptions && message.Descriptions.length) {
                object.Descriptions = [];
                for (var j = 0; j < message.Descriptions.length; ++j)
                    object.Descriptions[j] = $root.GameMsg_JGYF.JGYF_Description.toObject(message.Descriptions[j], options);
            }
            if (message.GoldBallSetting && message.GoldBallSetting.length) {
                object.GoldBallSetting = [];
                for (var j = 0; j < message.GoldBallSetting.length; ++j)
                    object.GoldBallSetting[j] = $root.GameMsg_JGYF.JGYF_GoldBallInfo.toObject(message.GoldBallSetting[j], options);
            }
            if (message.Jackpots && message.Jackpots.length) {
                object.Jackpots = [];
                for (var j = 0; j < message.Jackpots.length; ++j)
                    object.Jackpots[j] = $root.GameMsg_JGYF.JGYF_JackpotInfo.toObject(message.Jackpots[j], options);
            }
            return object;
        };

        /**
         * Converts this JGYF_MSG_Setting to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_Setting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_Setting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_Setting;
    })();

    GameMsg_JGYF.JGYF_MSG_Status = (function() {

        /**
         * Properties of a JGYF_MSG_Status.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_Status
         * @property {number|null} [State] JGYF_MSG_Status State
         */

        /**
         * Constructs a new JGYF_MSG_Status.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_Status.
         * @implements IJGYF_MSG_Status
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_Status=} [properties] Properties to set
         */
        function JGYF_MSG_Status(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_Status State.
         * @member {number} State
         * @memberof GameMsg_JGYF.JGYF_MSG_Status
         * @instance
         */
        JGYF_MSG_Status.prototype.State = 0;

        /**
         * Creates a new JGYF_MSG_Status instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_Status
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_Status=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_Status} JGYF_MSG_Status instance
         */
        JGYF_MSG_Status.create = function create(properties) {
            return new JGYF_MSG_Status(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_Status message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_Status.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_Status
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_Status} message JGYF_MSG_Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_Status.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_Status message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_Status.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_Status
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_Status} message JGYF_MSG_Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_Status.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_Status message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_Status} JGYF_MSG_Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_Status.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_Status();
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
         * Decodes a JGYF_MSG_Status message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_Status} JGYF_MSG_Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_Status.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_Status message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_Status
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_Status.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            return null;
        };

        /**
         * Creates a JGYF_MSG_Status message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_Status
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_Status} JGYF_MSG_Status
         */
        JGYF_MSG_Status.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_Status)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_Status();
            if (object.State != null)
                message.State = object.State | 0;
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_Status message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_Status
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_Status} message JGYF_MSG_Status
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_Status.toObject = function toObject(message, options) {
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
         * Converts this JGYF_MSG_Status to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_Status
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_Status.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_Status;
    })();

    GameMsg_JGYF.JGYF_MSG_BetStatus = (function() {

        /**
         * Properties of a JGYF_MSG_BetStatus.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_BetStatus
         * @property {number|null} [Ret] JGYF_MSG_BetStatus Ret
         * @property {number|Long|null} [Money] JGYF_MSG_BetStatus Money
         */

        /**
         * Constructs a new JGYF_MSG_BetStatus.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_BetStatus.
         * @implements IJGYF_MSG_BetStatus
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_BetStatus=} [properties] Properties to set
         */
        function JGYF_MSG_BetStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_BetStatus Ret.
         * @member {number} Ret
         * @memberof GameMsg_JGYF.JGYF_MSG_BetStatus
         * @instance
         */
        JGYF_MSG_BetStatus.prototype.Ret = 0;

        /**
         * JGYF_MSG_BetStatus Money.
         * @member {number|Long} Money
         * @memberof GameMsg_JGYF.JGYF_MSG_BetStatus
         * @instance
         */
        JGYF_MSG_BetStatus.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JGYF_MSG_BetStatus instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_BetStatus
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_BetStatus=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_BetStatus} JGYF_MSG_BetStatus instance
         */
        JGYF_MSG_BetStatus.create = function create(properties) {
            return new JGYF_MSG_BetStatus(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_BetStatus message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_BetStatus.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_BetStatus
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_BetStatus} message JGYF_MSG_BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_BetStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_BetStatus message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_BetStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_BetStatus
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_BetStatus} message JGYF_MSG_BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_BetStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_BetStatus message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_BetStatus} JGYF_MSG_BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_BetStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_BetStatus();
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
         * Decodes a JGYF_MSG_BetStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_BetStatus} JGYF_MSG_BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_BetStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_BetStatus message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_BetStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_BetStatus.verify = function verify(message) {
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
         * Creates a JGYF_MSG_BetStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_BetStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_BetStatus} JGYF_MSG_BetStatus
         */
        JGYF_MSG_BetStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_BetStatus)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_BetStatus();
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
         * Creates a plain object from a JGYF_MSG_BetStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_BetStatus
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_BetStatus} message JGYF_MSG_BetStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_BetStatus.toObject = function toObject(message, options) {
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
         * Converts this JGYF_MSG_BetStatus to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_BetStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_BetStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_BetStatus;
    })();

    GameMsg_JGYF.JGYF_MSG_GameResult = (function() {

        /**
         * Properties of a JGYF_MSG_GameResult.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_GameResult
         * @property {number|Long|null} [BetMoney] JGYF_MSG_GameResult BetMoney
         * @property {number|Long|null} [WinMoney] JGYF_MSG_GameResult WinMoney
         * @property {number|Long|null} [FinalMoney] JGYF_MSG_GameResult FinalMoney
         * @property {number|Long|null} [JackpotMoney] JGYF_MSG_GameResult JackpotMoney
         * @property {Array.<GameMsg_JGYF.IJGYF_ReelResult>|null} [ReelResult] JGYF_MSG_GameResult ReelResult
         * @property {Array.<GameMsg_JGYF.IJGYF_PayGroup>|null} [PayGroups] JGYF_MSG_GameResult PayGroups
         * @property {number|Long|null} [FreeGameWinMoney] JGYF_MSG_GameResult FreeGameWinMoney
         * @property {GameMsg_JGYF.IJGYF_FreeGameExtAward|null} [FreeGameExtAward] JGYF_MSG_GameResult FreeGameExtAward
         * @property {GameMsg_JGYF.IJGYF_BackgroundInfo|null} [BackgroundInfo] JGYF_MSG_GameResult BackgroundInfo
         */

        /**
         * Constructs a new JGYF_MSG_GameResult.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_GameResult.
         * @implements IJGYF_MSG_GameResult
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_GameResult=} [properties] Properties to set
         */
        function JGYF_MSG_GameResult(properties) {
            this.ReelResult = [];
            this.PayGroups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_GameResult BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @instance
         */
        JGYF_MSG_GameResult.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_GameResult WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @instance
         */
        JGYF_MSG_GameResult.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_GameResult FinalMoney.
         * @member {number|Long} FinalMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @instance
         */
        JGYF_MSG_GameResult.prototype.FinalMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_GameResult JackpotMoney.
         * @member {number|Long} JackpotMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @instance
         */
        JGYF_MSG_GameResult.prototype.JackpotMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_GameResult ReelResult.
         * @member {Array.<GameMsg_JGYF.IJGYF_ReelResult>} ReelResult
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @instance
         */
        JGYF_MSG_GameResult.prototype.ReelResult = $util.emptyArray;

        /**
         * JGYF_MSG_GameResult PayGroups.
         * @member {Array.<GameMsg_JGYF.IJGYF_PayGroup>} PayGroups
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @instance
         */
        JGYF_MSG_GameResult.prototype.PayGroups = $util.emptyArray;

        /**
         * JGYF_MSG_GameResult FreeGameWinMoney.
         * @member {number|Long} FreeGameWinMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @instance
         */
        JGYF_MSG_GameResult.prototype.FreeGameWinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_GameResult FreeGameExtAward.
         * @member {GameMsg_JGYF.IJGYF_FreeGameExtAward|null|undefined} FreeGameExtAward
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @instance
         */
        JGYF_MSG_GameResult.prototype.FreeGameExtAward = null;

        /**
         * JGYF_MSG_GameResult BackgroundInfo.
         * @member {GameMsg_JGYF.IJGYF_BackgroundInfo|null|undefined} BackgroundInfo
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @instance
         */
        JGYF_MSG_GameResult.prototype.BackgroundInfo = null;

        /**
         * Creates a new JGYF_MSG_GameResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_GameResult=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_GameResult} JGYF_MSG_GameResult instance
         */
        JGYF_MSG_GameResult.create = function create(properties) {
            return new JGYF_MSG_GameResult(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_GameResult message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_GameResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_GameResult} message JGYF_MSG_GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_GameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetMoney != null && Object.hasOwnProperty.call(message, "BetMoney"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.BetMoney);
            if (message.WinMoney != null && Object.hasOwnProperty.call(message, "WinMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.WinMoney);
            if (message.FinalMoney != null && Object.hasOwnProperty.call(message, "FinalMoney"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.FinalMoney);
            if (message.JackpotMoney != null && Object.hasOwnProperty.call(message, "JackpotMoney"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.JackpotMoney);
            if (message.ReelResult != null && message.ReelResult.length)
                for (var i = 0; i < message.ReelResult.length; ++i)
                    $root.GameMsg_JGYF.JGYF_ReelResult.encode(message.ReelResult[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.PayGroups != null && message.PayGroups.length)
                for (var i = 0; i < message.PayGroups.length; ++i)
                    $root.GameMsg_JGYF.JGYF_PayGroup.encode(message.PayGroups[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.FreeGameWinMoney != null && Object.hasOwnProperty.call(message, "FreeGameWinMoney"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.FreeGameWinMoney);
            if (message.FreeGameExtAward != null && Object.hasOwnProperty.call(message, "FreeGameExtAward"))
                $root.GameMsg_JGYF.JGYF_FreeGameExtAward.encode(message.FreeGameExtAward, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.BackgroundInfo != null && Object.hasOwnProperty.call(message, "BackgroundInfo"))
                $root.GameMsg_JGYF.JGYF_BackgroundInfo.encode(message.BackgroundInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_GameResult message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_GameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_GameResult} message JGYF_MSG_GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_GameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_GameResult} JGYF_MSG_GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_GameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_GameResult();
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
                    message.ReelResult.push($root.GameMsg_JGYF.JGYF_ReelResult.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.PayGroups && message.PayGroups.length))
                        message.PayGroups = [];
                    message.PayGroups.push($root.GameMsg_JGYF.JGYF_PayGroup.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.FreeGameWinMoney = reader.int64();
                    break;
                case 8:
                    message.FreeGameExtAward = $root.GameMsg_JGYF.JGYF_FreeGameExtAward.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.BackgroundInfo = $root.GameMsg_JGYF.JGYF_BackgroundInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_MSG_GameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_GameResult} JGYF_MSG_GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_GameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_GameResult message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_GameResult.verify = function verify(message) {
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
                    var error = $root.GameMsg_JGYF.JGYF_ReelResult.verify(message.ReelResult[i]);
                    if (error)
                        return "ReelResult." + error;
                }
            }
            if (message.PayGroups != null && message.hasOwnProperty("PayGroups")) {
                if (!Array.isArray(message.PayGroups))
                    return "PayGroups: array expected";
                for (var i = 0; i < message.PayGroups.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_PayGroup.verify(message.PayGroups[i]);
                    if (error)
                        return "PayGroups." + error;
                }
            }
            if (message.FreeGameWinMoney != null && message.hasOwnProperty("FreeGameWinMoney"))
                if (!$util.isInteger(message.FreeGameWinMoney) && !(message.FreeGameWinMoney && $util.isInteger(message.FreeGameWinMoney.low) && $util.isInteger(message.FreeGameWinMoney.high)))
                    return "FreeGameWinMoney: integer|Long expected";
            if (message.FreeGameExtAward != null && message.hasOwnProperty("FreeGameExtAward")) {
                var error = $root.GameMsg_JGYF.JGYF_FreeGameExtAward.verify(message.FreeGameExtAward);
                if (error)
                    return "FreeGameExtAward." + error;
            }
            if (message.BackgroundInfo != null && message.hasOwnProperty("BackgroundInfo")) {
                var error = $root.GameMsg_JGYF.JGYF_BackgroundInfo.verify(message.BackgroundInfo);
                if (error)
                    return "BackgroundInfo." + error;
            }
            return null;
        };

        /**
         * Creates a JGYF_MSG_GameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_GameResult} JGYF_MSG_GameResult
         */
        JGYF_MSG_GameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_GameResult)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_GameResult();
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
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_GameResult.ReelResult: array expected");
                message.ReelResult = [];
                for (var i = 0; i < object.ReelResult.length; ++i) {
                    if (typeof object.ReelResult[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_GameResult.ReelResult: object expected");
                    message.ReelResult[i] = $root.GameMsg_JGYF.JGYF_ReelResult.fromObject(object.ReelResult[i]);
                }
            }
            if (object.PayGroups) {
                if (!Array.isArray(object.PayGroups))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_GameResult.PayGroups: array expected");
                message.PayGroups = [];
                for (var i = 0; i < object.PayGroups.length; ++i) {
                    if (typeof object.PayGroups[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_GameResult.PayGroups: object expected");
                    message.PayGroups[i] = $root.GameMsg_JGYF.JGYF_PayGroup.fromObject(object.PayGroups[i]);
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
            if (object.FreeGameExtAward != null) {
                if (typeof object.FreeGameExtAward !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_GameResult.FreeGameExtAward: object expected");
                message.FreeGameExtAward = $root.GameMsg_JGYF.JGYF_FreeGameExtAward.fromObject(object.FreeGameExtAward);
            }
            if (object.BackgroundInfo != null) {
                if (typeof object.BackgroundInfo !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_GameResult.BackgroundInfo: object expected");
                message.BackgroundInfo = $root.GameMsg_JGYF.JGYF_BackgroundInfo.fromObject(object.BackgroundInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_GameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_GameResult} message JGYF_MSG_GameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_GameResult.toObject = function toObject(message, options) {
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
                object.FreeGameExtAward = null;
                object.BackgroundInfo = null;
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
                    object.ReelResult[j] = $root.GameMsg_JGYF.JGYF_ReelResult.toObject(message.ReelResult[j], options);
            }
            if (message.PayGroups && message.PayGroups.length) {
                object.PayGroups = [];
                for (var j = 0; j < message.PayGroups.length; ++j)
                    object.PayGroups[j] = $root.GameMsg_JGYF.JGYF_PayGroup.toObject(message.PayGroups[j], options);
            }
            if (message.FreeGameWinMoney != null && message.hasOwnProperty("FreeGameWinMoney"))
                if (typeof message.FreeGameWinMoney === "number")
                    object.FreeGameWinMoney = options.longs === String ? String(message.FreeGameWinMoney) : message.FreeGameWinMoney;
                else
                    object.FreeGameWinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.FreeGameWinMoney) : options.longs === Number ? new $util.LongBits(message.FreeGameWinMoney.low >>> 0, message.FreeGameWinMoney.high >>> 0).toNumber() : message.FreeGameWinMoney;
            if (message.FreeGameExtAward != null && message.hasOwnProperty("FreeGameExtAward"))
                object.FreeGameExtAward = $root.GameMsg_JGYF.JGYF_FreeGameExtAward.toObject(message.FreeGameExtAward, options);
            if (message.BackgroundInfo != null && message.hasOwnProperty("BackgroundInfo"))
                object.BackgroundInfo = $root.GameMsg_JGYF.JGYF_BackgroundInfo.toObject(message.BackgroundInfo, options);
            return object;
        };

        /**
         * Converts this JGYF_MSG_GameResult to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_GameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_GameResult;
    })();

    GameMsg_JGYF.JGYF_MSG_LeftFreeGameData = (function() {

        /**
         * Properties of a JGYF_MSG_LeftFreeGameData.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_LeftFreeGameData
         * @property {number|null} [Count] JGYF_MSG_LeftFreeGameData Count
         * @property {number|Long|null} [BetMoney] JGYF_MSG_LeftFreeGameData BetMoney
         * @property {number|Long|null} [BetRate] JGYF_MSG_LeftFreeGameData BetRate
         * @property {number|null} [ID] JGYF_MSG_LeftFreeGameData ID
         * @property {GameMsg_JGYF.IJGYF_FreeGameExtAward|null} [FreeGameExtAward] JGYF_MSG_LeftFreeGameData FreeGameExtAward
         */

        /**
         * Constructs a new JGYF_MSG_LeftFreeGameData.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_LeftFreeGameData.
         * @implements IJGYF_MSG_LeftFreeGameData
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_LeftFreeGameData=} [properties] Properties to set
         */
        function JGYF_MSG_LeftFreeGameData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_LeftFreeGameData Count.
         * @member {number} Count
         * @memberof GameMsg_JGYF.JGYF_MSG_LeftFreeGameData
         * @instance
         */
        JGYF_MSG_LeftFreeGameData.prototype.Count = 0;

        /**
         * JGYF_MSG_LeftFreeGameData BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_LeftFreeGameData
         * @instance
         */
        JGYF_MSG_LeftFreeGameData.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_LeftFreeGameData BetRate.
         * @member {number|Long} BetRate
         * @memberof GameMsg_JGYF.JGYF_MSG_LeftFreeGameData
         * @instance
         */
        JGYF_MSG_LeftFreeGameData.prototype.BetRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_LeftFreeGameData ID.
         * @member {number} ID
         * @memberof GameMsg_JGYF.JGYF_MSG_LeftFreeGameData
         * @instance
         */
        JGYF_MSG_LeftFreeGameData.prototype.ID = 0;

        /**
         * JGYF_MSG_LeftFreeGameData FreeGameExtAward.
         * @member {GameMsg_JGYF.IJGYF_FreeGameExtAward|null|undefined} FreeGameExtAward
         * @memberof GameMsg_JGYF.JGYF_MSG_LeftFreeGameData
         * @instance
         */
        JGYF_MSG_LeftFreeGameData.prototype.FreeGameExtAward = null;

        /**
         * Creates a new JGYF_MSG_LeftFreeGameData instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_LeftFreeGameData
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_LeftFreeGameData=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_LeftFreeGameData} JGYF_MSG_LeftFreeGameData instance
         */
        JGYF_MSG_LeftFreeGameData.create = function create(properties) {
            return new JGYF_MSG_LeftFreeGameData(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_LeftFreeGameData message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_LeftFreeGameData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_LeftFreeGameData
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_LeftFreeGameData} message JGYF_MSG_LeftFreeGameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_LeftFreeGameData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Count);
            if (message.BetMoney != null && Object.hasOwnProperty.call(message, "BetMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.BetMoney);
            if (message.BetRate != null && Object.hasOwnProperty.call(message, "BetRate"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.BetRate);
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ID);
            if (message.FreeGameExtAward != null && Object.hasOwnProperty.call(message, "FreeGameExtAward"))
                $root.GameMsg_JGYF.JGYF_FreeGameExtAward.encode(message.FreeGameExtAward, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_LeftFreeGameData message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_LeftFreeGameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_LeftFreeGameData
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_LeftFreeGameData} message JGYF_MSG_LeftFreeGameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_LeftFreeGameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_LeftFreeGameData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_LeftFreeGameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_LeftFreeGameData} JGYF_MSG_LeftFreeGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_LeftFreeGameData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_LeftFreeGameData();
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
                case 5:
                    message.FreeGameExtAward = $root.GameMsg_JGYF.JGYF_FreeGameExtAward.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_MSG_LeftFreeGameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_LeftFreeGameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_LeftFreeGameData} JGYF_MSG_LeftFreeGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_LeftFreeGameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_LeftFreeGameData message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_LeftFreeGameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_LeftFreeGameData.verify = function verify(message) {
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
            if (message.FreeGameExtAward != null && message.hasOwnProperty("FreeGameExtAward")) {
                var error = $root.GameMsg_JGYF.JGYF_FreeGameExtAward.verify(message.FreeGameExtAward);
                if (error)
                    return "FreeGameExtAward." + error;
            }
            return null;
        };

        /**
         * Creates a JGYF_MSG_LeftFreeGameData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_LeftFreeGameData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_LeftFreeGameData} JGYF_MSG_LeftFreeGameData
         */
        JGYF_MSG_LeftFreeGameData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_LeftFreeGameData)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_LeftFreeGameData();
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
            if (object.FreeGameExtAward != null) {
                if (typeof object.FreeGameExtAward !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_LeftFreeGameData.FreeGameExtAward: object expected");
                message.FreeGameExtAward = $root.GameMsg_JGYF.JGYF_FreeGameExtAward.fromObject(object.FreeGameExtAward);
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_LeftFreeGameData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_LeftFreeGameData
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_LeftFreeGameData} message JGYF_MSG_LeftFreeGameData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_LeftFreeGameData.toObject = function toObject(message, options) {
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
                object.FreeGameExtAward = null;
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
            if (message.FreeGameExtAward != null && message.hasOwnProperty("FreeGameExtAward"))
                object.FreeGameExtAward = $root.GameMsg_JGYF.JGYF_FreeGameExtAward.toObject(message.FreeGameExtAward, options);
            return object;
        };

        /**
         * Converts this JGYF_MSG_LeftFreeGameData to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_LeftFreeGameData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_LeftFreeGameData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_LeftFreeGameData;
    })();

    GameMsg_JGYF.JGYF_MSG_Spin = (function() {

        /**
         * Properties of a JGYF_MSG_Spin.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_Spin
         * @property {number|Long|null} [Money] JGYF_MSG_Spin Money
         * @property {number|null} [Rate] JGYF_MSG_Spin Rate
         * @property {number|null} [ID] JGYF_MSG_Spin ID
         */

        /**
         * Constructs a new JGYF_MSG_Spin.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_Spin.
         * @implements IJGYF_MSG_Spin
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_Spin=} [properties] Properties to set
         */
        function JGYF_MSG_Spin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_Spin Money.
         * @member {number|Long} Money
         * @memberof GameMsg_JGYF.JGYF_MSG_Spin
         * @instance
         */
        JGYF_MSG_Spin.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_Spin Rate.
         * @member {number} Rate
         * @memberof GameMsg_JGYF.JGYF_MSG_Spin
         * @instance
         */
        JGYF_MSG_Spin.prototype.Rate = 0;

        /**
         * JGYF_MSG_Spin ID.
         * @member {number} ID
         * @memberof GameMsg_JGYF.JGYF_MSG_Spin
         * @instance
         */
        JGYF_MSG_Spin.prototype.ID = 0;

        /**
         * Creates a new JGYF_MSG_Spin instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_Spin
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_Spin=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_Spin} JGYF_MSG_Spin instance
         */
        JGYF_MSG_Spin.create = function create(properties) {
            return new JGYF_MSG_Spin(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_Spin message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_Spin.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_Spin
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_Spin} message JGYF_MSG_Spin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_Spin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Money);
            if (message.Rate != null && Object.hasOwnProperty.call(message, "Rate"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Rate);
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ID);
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_Spin message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_Spin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_Spin
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_Spin} message JGYF_MSG_Spin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_Spin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_Spin message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_Spin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_Spin} JGYF_MSG_Spin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_Spin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_Spin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Money = reader.int64();
                    break;
                case 2:
                    message.Rate = reader.int32();
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
         * Decodes a JGYF_MSG_Spin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_Spin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_Spin} JGYF_MSG_Spin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_Spin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_Spin message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_Spin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_Spin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                if (!$util.isInteger(message.Rate))
                    return "Rate: integer expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            return null;
        };

        /**
         * Creates a JGYF_MSG_Spin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_Spin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_Spin} JGYF_MSG_Spin
         */
        JGYF_MSG_Spin.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_Spin)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_Spin();
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
            if (object.ID != null)
                message.ID = object.ID | 0;
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_Spin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_Spin
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_Spin} message JGYF_MSG_Spin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_Spin.toObject = function toObject(message, options) {
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
                object.ID = 0;
            }
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                object.Rate = message.Rate;
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            return object;
        };

        /**
         * Converts this JGYF_MSG_Spin to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_Spin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_Spin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_Spin;
    })();

    GameMsg_JGYF.JGYF_MSG_GetJackpot = (function() {

        /**
         * Properties of a JGYF_MSG_GetJackpot.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_GetJackpot
         * @property {Array.<number>|null} [ID] JGYF_MSG_GetJackpot ID
         */

        /**
         * Constructs a new JGYF_MSG_GetJackpot.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_GetJackpot.
         * @implements IJGYF_MSG_GetJackpot
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_GetJackpot=} [properties] Properties to set
         */
        function JGYF_MSG_GetJackpot(properties) {
            this.ID = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_GetJackpot ID.
         * @member {Array.<number>} ID
         * @memberof GameMsg_JGYF.JGYF_MSG_GetJackpot
         * @instance
         */
        JGYF_MSG_GetJackpot.prototype.ID = $util.emptyArray;

        /**
         * Creates a new JGYF_MSG_GetJackpot instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_GetJackpot
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_GetJackpot=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_GetJackpot} JGYF_MSG_GetJackpot instance
         */
        JGYF_MSG_GetJackpot.create = function create(properties) {
            return new JGYF_MSG_GetJackpot(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_GetJackpot message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_GetJackpot.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_GetJackpot
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_GetJackpot} message JGYF_MSG_GetJackpot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_GetJackpot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.ID.length)
                for (var i = 0; i < message.ID.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID[i]);
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_GetJackpot message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_GetJackpot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_GetJackpot
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_GetJackpot} message JGYF_MSG_GetJackpot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_GetJackpot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_GetJackpot message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_GetJackpot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_GetJackpot} JGYF_MSG_GetJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_GetJackpot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_GetJackpot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ID && message.ID.length))
                        message.ID = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ID.push(reader.int32());
                    } else
                        message.ID.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_MSG_GetJackpot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_GetJackpot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_GetJackpot} JGYF_MSG_GetJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_GetJackpot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_GetJackpot message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_GetJackpot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_GetJackpot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID")) {
                if (!Array.isArray(message.ID))
                    return "ID: array expected";
                for (var i = 0; i < message.ID.length; ++i)
                    if (!$util.isInteger(message.ID[i]))
                        return "ID: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a JGYF_MSG_GetJackpot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_GetJackpot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_GetJackpot} JGYF_MSG_GetJackpot
         */
        JGYF_MSG_GetJackpot.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_GetJackpot)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_GetJackpot();
            if (object.ID) {
                if (!Array.isArray(object.ID))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_GetJackpot.ID: array expected");
                message.ID = [];
                for (var i = 0; i < object.ID.length; ++i)
                    message.ID[i] = object.ID[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_GetJackpot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_GetJackpot
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_GetJackpot} message JGYF_MSG_GetJackpot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_GetJackpot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ID = [];
            if (message.ID && message.ID.length) {
                object.ID = [];
                for (var j = 0; j < message.ID.length; ++j)
                    object.ID[j] = message.ID[j];
            }
            return object;
        };

        /**
         * Converts this JGYF_MSG_GetJackpot to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_GetJackpot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_GetJackpot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_GetJackpot;
    })();

    GameMsg_JGYF.JGYF_MSG_JackpotPool = (function() {

        /**
         * Properties of a JGYF_MSG_JackpotPool.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_JackpotPool
         * @property {Array.<GameMsg_JGYF.IJGYF_JackpotInfo>|null} [Jackpots] JGYF_MSG_JackpotPool Jackpots
         */

        /**
         * Constructs a new JGYF_MSG_JackpotPool.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_JackpotPool.
         * @implements IJGYF_MSG_JackpotPool
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_JackpotPool=} [properties] Properties to set
         */
        function JGYF_MSG_JackpotPool(properties) {
            this.Jackpots = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_JackpotPool Jackpots.
         * @member {Array.<GameMsg_JGYF.IJGYF_JackpotInfo>} Jackpots
         * @memberof GameMsg_JGYF.JGYF_MSG_JackpotPool
         * @instance
         */
        JGYF_MSG_JackpotPool.prototype.Jackpots = $util.emptyArray;

        /**
         * Creates a new JGYF_MSG_JackpotPool instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_JackpotPool
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_JackpotPool=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_JackpotPool} JGYF_MSG_JackpotPool instance
         */
        JGYF_MSG_JackpotPool.create = function create(properties) {
            return new JGYF_MSG_JackpotPool(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_JackpotPool message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_JackpotPool.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_JackpotPool
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_JackpotPool} message JGYF_MSG_JackpotPool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_JackpotPool.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Jackpots != null && message.Jackpots.length)
                for (var i = 0; i < message.Jackpots.length; ++i)
                    $root.GameMsg_JGYF.JGYF_JackpotInfo.encode(message.Jackpots[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_JackpotPool message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_JackpotPool.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_JackpotPool
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_JackpotPool} message JGYF_MSG_JackpotPool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_JackpotPool.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_JackpotPool message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_JackpotPool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_JackpotPool} JGYF_MSG_JackpotPool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_JackpotPool.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_JackpotPool();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Jackpots && message.Jackpots.length))
                        message.Jackpots = [];
                    message.Jackpots.push($root.GameMsg_JGYF.JGYF_JackpotInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_MSG_JackpotPool message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_JackpotPool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_JackpotPool} JGYF_MSG_JackpotPool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_JackpotPool.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_JackpotPool message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_JackpotPool
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_JackpotPool.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Jackpots != null && message.hasOwnProperty("Jackpots")) {
                if (!Array.isArray(message.Jackpots))
                    return "Jackpots: array expected";
                for (var i = 0; i < message.Jackpots.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_JackpotInfo.verify(message.Jackpots[i]);
                    if (error)
                        return "Jackpots." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JGYF_MSG_JackpotPool message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_JackpotPool
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_JackpotPool} JGYF_MSG_JackpotPool
         */
        JGYF_MSG_JackpotPool.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_JackpotPool)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_JackpotPool();
            if (object.Jackpots) {
                if (!Array.isArray(object.Jackpots))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_JackpotPool.Jackpots: array expected");
                message.Jackpots = [];
                for (var i = 0; i < object.Jackpots.length; ++i) {
                    if (typeof object.Jackpots[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_JackpotPool.Jackpots: object expected");
                    message.Jackpots[i] = $root.GameMsg_JGYF.JGYF_JackpotInfo.fromObject(object.Jackpots[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_JackpotPool message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_JackpotPool
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_JackpotPool} message JGYF_MSG_JackpotPool
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_JackpotPool.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Jackpots = [];
            if (message.Jackpots && message.Jackpots.length) {
                object.Jackpots = [];
                for (var j = 0; j < message.Jackpots.length; ++j)
                    object.Jackpots[j] = $root.GameMsg_JGYF.JGYF_JackpotInfo.toObject(message.Jackpots[j], options);
            }
            return object;
        };

        /**
         * Converts this JGYF_MSG_JackpotPool to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_JackpotPool
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_JackpotPool.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_JackpotPool;
    })();

    GameMsg_JGYF.JGYF_MSG_GameLogRead = (function() {

        /**
         * Properties of a JGYF_MSG_GameLogRead.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_GameLogRead
         * @property {number|null} [UserID] JGYF_MSG_GameLogRead UserID
         * @property {number|null} [GameID] JGYF_MSG_GameLogRead GameID
         * @property {string|null} [StartTime] JGYF_MSG_GameLogRead StartTime
         * @property {string|null} [EndTime] JGYF_MSG_GameLogRead EndTime
         * @property {number|null} [PageIndex] JGYF_MSG_GameLogRead PageIndex
         * @property {number|null} [PageSize] JGYF_MSG_GameLogRead PageSize
         */

        /**
         * Constructs a new JGYF_MSG_GameLogRead.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_GameLogRead.
         * @implements IJGYF_MSG_GameLogRead
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_GameLogRead=} [properties] Properties to set
         */
        function JGYF_MSG_GameLogRead(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_GameLogRead UserID.
         * @member {number} UserID
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @instance
         */
        JGYF_MSG_GameLogRead.prototype.UserID = 0;

        /**
         * JGYF_MSG_GameLogRead GameID.
         * @member {number} GameID
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @instance
         */
        JGYF_MSG_GameLogRead.prototype.GameID = 0;

        /**
         * JGYF_MSG_GameLogRead StartTime.
         * @member {string} StartTime
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @instance
         */
        JGYF_MSG_GameLogRead.prototype.StartTime = "";

        /**
         * JGYF_MSG_GameLogRead EndTime.
         * @member {string} EndTime
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @instance
         */
        JGYF_MSG_GameLogRead.prototype.EndTime = "";

        /**
         * JGYF_MSG_GameLogRead PageIndex.
         * @member {number} PageIndex
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @instance
         */
        JGYF_MSG_GameLogRead.prototype.PageIndex = 0;

        /**
         * JGYF_MSG_GameLogRead PageSize.
         * @member {number} PageSize
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @instance
         */
        JGYF_MSG_GameLogRead.prototype.PageSize = 0;

        /**
         * Creates a new JGYF_MSG_GameLogRead instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_GameLogRead=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_GameLogRead} JGYF_MSG_GameLogRead instance
         */
        JGYF_MSG_GameLogRead.create = function create(properties) {
            return new JGYF_MSG_GameLogRead(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_GameLogRead message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_GameLogRead.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_GameLogRead} message JGYF_MSG_GameLogRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_GameLogRead.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            if (message.StartTime != null && Object.hasOwnProperty.call(message, "StartTime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.StartTime);
            if (message.EndTime != null && Object.hasOwnProperty.call(message, "EndTime"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.EndTime);
            if (message.PageIndex != null && Object.hasOwnProperty.call(message, "PageIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.PageIndex);
            if (message.PageSize != null && Object.hasOwnProperty.call(message, "PageSize"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.PageSize);
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_GameLogRead message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_GameLogRead.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_GameLogRead} message JGYF_MSG_GameLogRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_GameLogRead.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_GameLogRead message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_GameLogRead} JGYF_MSG_GameLogRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_GameLogRead.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_GameLogRead();
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
         * Decodes a JGYF_MSG_GameLogRead message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_GameLogRead} JGYF_MSG_GameLogRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_GameLogRead.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_GameLogRead message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_GameLogRead.verify = function verify(message) {
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
         * Creates a JGYF_MSG_GameLogRead message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_GameLogRead} JGYF_MSG_GameLogRead
         */
        JGYF_MSG_GameLogRead.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_GameLogRead)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_GameLogRead();
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
         * Creates a plain object from a JGYF_MSG_GameLogRead message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_GameLogRead} message JGYF_MSG_GameLogRead
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_GameLogRead.toObject = function toObject(message, options) {
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
         * Converts this JGYF_MSG_GameLogRead to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRead
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_GameLogRead.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_GameLogRead;
    })();

    GameMsg_JGYF.JGYF_MSG_GameLogRecord = (function() {

        /**
         * Properties of a JGYF_MSG_GameLogRecord.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_GameLogRecord
         * @property {number|null} [UserID] JGYF_MSG_GameLogRecord UserID
         * @property {number|null} [GameID] JGYF_MSG_GameLogRecord GameID
         * @property {number|null} [PageCount] JGYF_MSG_GameLogRecord PageCount
         * @property {Array.<GameMsg_JGYF.IJGYF_GameLog>|null} [Logs] JGYF_MSG_GameLogRecord Logs
         */

        /**
         * Constructs a new JGYF_MSG_GameLogRecord.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_GameLogRecord.
         * @implements IJGYF_MSG_GameLogRecord
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_GameLogRecord=} [properties] Properties to set
         */
        function JGYF_MSG_GameLogRecord(properties) {
            this.Logs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_GameLogRecord UserID.
         * @member {number} UserID
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRecord
         * @instance
         */
        JGYF_MSG_GameLogRecord.prototype.UserID = 0;

        /**
         * JGYF_MSG_GameLogRecord GameID.
         * @member {number} GameID
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRecord
         * @instance
         */
        JGYF_MSG_GameLogRecord.prototype.GameID = 0;

        /**
         * JGYF_MSG_GameLogRecord PageCount.
         * @member {number} PageCount
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRecord
         * @instance
         */
        JGYF_MSG_GameLogRecord.prototype.PageCount = 0;

        /**
         * JGYF_MSG_GameLogRecord Logs.
         * @member {Array.<GameMsg_JGYF.IJGYF_GameLog>} Logs
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRecord
         * @instance
         */
        JGYF_MSG_GameLogRecord.prototype.Logs = $util.emptyArray;

        /**
         * Creates a new JGYF_MSG_GameLogRecord instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRecord
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_GameLogRecord=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_GameLogRecord} JGYF_MSG_GameLogRecord instance
         */
        JGYF_MSG_GameLogRecord.create = function create(properties) {
            return new JGYF_MSG_GameLogRecord(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_GameLogRecord message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_GameLogRecord.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRecord
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_GameLogRecord} message JGYF_MSG_GameLogRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_GameLogRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            if (message.PageCount != null && Object.hasOwnProperty.call(message, "PageCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.PageCount);
            if (message.Logs != null && message.Logs.length)
                for (var i = 0; i < message.Logs.length; ++i)
                    $root.GameMsg_JGYF.JGYF_GameLog.encode(message.Logs[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_GameLogRecord message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_GameLogRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRecord
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_GameLogRecord} message JGYF_MSG_GameLogRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_GameLogRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_GameLogRecord message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_GameLogRecord} JGYF_MSG_GameLogRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_GameLogRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_GameLogRecord();
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
                    message.Logs.push($root.GameMsg_JGYF.JGYF_GameLog.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_MSG_GameLogRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_GameLogRecord} JGYF_MSG_GameLogRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_GameLogRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_GameLogRecord message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_GameLogRecord.verify = function verify(message) {
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
                    var error = $root.GameMsg_JGYF.JGYF_GameLog.verify(message.Logs[i]);
                    if (error)
                        return "Logs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JGYF_MSG_GameLogRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_GameLogRecord} JGYF_MSG_GameLogRecord
         */
        JGYF_MSG_GameLogRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_GameLogRecord)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_GameLogRecord();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.PageCount != null)
                message.PageCount = object.PageCount | 0;
            if (object.Logs) {
                if (!Array.isArray(object.Logs))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_GameLogRecord.Logs: array expected");
                message.Logs = [];
                for (var i = 0; i < object.Logs.length; ++i) {
                    if (typeof object.Logs[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_GameLogRecord.Logs: object expected");
                    message.Logs[i] = $root.GameMsg_JGYF.JGYF_GameLog.fromObject(object.Logs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_GameLogRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRecord
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_GameLogRecord} message JGYF_MSG_GameLogRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_GameLogRecord.toObject = function toObject(message, options) {
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
                    object.Logs[j] = $root.GameMsg_JGYF.JGYF_GameLog.toObject(message.Logs[j], options);
            }
            return object;
        };

        /**
         * Converts this JGYF_MSG_GameLogRecord to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_GameLogRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_GameLogRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_GameLogRecord;
    })();

    GameMsg_JGYF.JGYF_MSG_LightningPrepare = (function() {

        /**
         * Properties of a JGYF_MSG_LightningPrepare.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_LightningPrepare
         * @property {number|null} [LightningStep] JGYF_MSG_LightningPrepare LightningStep
         * @property {Array.<GameMsg_JGYF.IJGYF_ReelSetting>|null} [ReelSetting] JGYF_MSG_LightningPrepare ReelSetting
         * @property {Array.<GameMsg_JGYF.IJGYF_LightningLock>|null} [LockSymbols] JGYF_MSG_LightningPrepare LockSymbols
         * @property {number|null} [Count] JGYF_MSG_LightningPrepare Count
         * @property {boolean|null} [IsFreeGame] JGYF_MSG_LightningPrepare IsFreeGame
         * @property {Array.<GameMsg_JGYF.IJGYF_ReelResult>|null} [ReelResult] JGYF_MSG_LightningPrepare ReelResult
         * @property {Array.<GameMsg_JGYF.IJGYF_LightningPayout>|null} [PastPayGroups] JGYF_MSG_LightningPrepare PastPayGroups
         * @property {number|Long|null} [BetMoney] JGYF_MSG_LightningPrepare BetMoney
         * @property {number|Long|null} [BetRate] JGYF_MSG_LightningPrepare BetRate
         */

        /**
         * Constructs a new JGYF_MSG_LightningPrepare.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_LightningPrepare.
         * @implements IJGYF_MSG_LightningPrepare
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_LightningPrepare=} [properties] Properties to set
         */
        function JGYF_MSG_LightningPrepare(properties) {
            this.ReelSetting = [];
            this.LockSymbols = [];
            this.ReelResult = [];
            this.PastPayGroups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_LightningPrepare LightningStep.
         * @member {number} LightningStep
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @instance
         */
        JGYF_MSG_LightningPrepare.prototype.LightningStep = 0;

        /**
         * JGYF_MSG_LightningPrepare ReelSetting.
         * @member {Array.<GameMsg_JGYF.IJGYF_ReelSetting>} ReelSetting
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @instance
         */
        JGYF_MSG_LightningPrepare.prototype.ReelSetting = $util.emptyArray;

        /**
         * JGYF_MSG_LightningPrepare LockSymbols.
         * @member {Array.<GameMsg_JGYF.IJGYF_LightningLock>} LockSymbols
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @instance
         */
        JGYF_MSG_LightningPrepare.prototype.LockSymbols = $util.emptyArray;

        /**
         * JGYF_MSG_LightningPrepare Count.
         * @member {number} Count
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @instance
         */
        JGYF_MSG_LightningPrepare.prototype.Count = 0;

        /**
         * JGYF_MSG_LightningPrepare IsFreeGame.
         * @member {boolean} IsFreeGame
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @instance
         */
        JGYF_MSG_LightningPrepare.prototype.IsFreeGame = false;

        /**
         * JGYF_MSG_LightningPrepare ReelResult.
         * @member {Array.<GameMsg_JGYF.IJGYF_ReelResult>} ReelResult
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @instance
         */
        JGYF_MSG_LightningPrepare.prototype.ReelResult = $util.emptyArray;

        /**
         * JGYF_MSG_LightningPrepare PastPayGroups.
         * @member {Array.<GameMsg_JGYF.IJGYF_LightningPayout>} PastPayGroups
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @instance
         */
        JGYF_MSG_LightningPrepare.prototype.PastPayGroups = $util.emptyArray;

        /**
         * JGYF_MSG_LightningPrepare BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @instance
         */
        JGYF_MSG_LightningPrepare.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_LightningPrepare BetRate.
         * @member {number|Long} BetRate
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @instance
         */
        JGYF_MSG_LightningPrepare.prototype.BetRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JGYF_MSG_LightningPrepare instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_LightningPrepare=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_LightningPrepare} JGYF_MSG_LightningPrepare instance
         */
        JGYF_MSG_LightningPrepare.create = function create(properties) {
            return new JGYF_MSG_LightningPrepare(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_LightningPrepare message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_LightningPrepare.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_LightningPrepare} message JGYF_MSG_LightningPrepare message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_LightningPrepare.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LightningStep != null && Object.hasOwnProperty.call(message, "LightningStep"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.LightningStep);
            if (message.ReelSetting != null && message.ReelSetting.length)
                for (var i = 0; i < message.ReelSetting.length; ++i)
                    $root.GameMsg_JGYF.JGYF_ReelSetting.encode(message.ReelSetting[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.LockSymbols != null && message.LockSymbols.length)
                for (var i = 0; i < message.LockSymbols.length; ++i)
                    $root.GameMsg_JGYF.JGYF_LightningLock.encode(message.LockSymbols[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Count);
            if (message.IsFreeGame != null && Object.hasOwnProperty.call(message, "IsFreeGame"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.IsFreeGame);
            if (message.ReelResult != null && message.ReelResult.length)
                for (var i = 0; i < message.ReelResult.length; ++i)
                    $root.GameMsg_JGYF.JGYF_ReelResult.encode(message.ReelResult[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.PastPayGroups != null && message.PastPayGroups.length)
                for (var i = 0; i < message.PastPayGroups.length; ++i)
                    $root.GameMsg_JGYF.JGYF_LightningPayout.encode(message.PastPayGroups[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.BetMoney != null && Object.hasOwnProperty.call(message, "BetMoney"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.BetMoney);
            if (message.BetRate != null && Object.hasOwnProperty.call(message, "BetRate"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.BetRate);
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_LightningPrepare message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_LightningPrepare.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_LightningPrepare} message JGYF_MSG_LightningPrepare message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_LightningPrepare.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_LightningPrepare message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_LightningPrepare} JGYF_MSG_LightningPrepare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_LightningPrepare.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_LightningPrepare();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.LightningStep = reader.int32();
                    break;
                case 2:
                    if (!(message.ReelSetting && message.ReelSetting.length))
                        message.ReelSetting = [];
                    message.ReelSetting.push($root.GameMsg_JGYF.JGYF_ReelSetting.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.LockSymbols && message.LockSymbols.length))
                        message.LockSymbols = [];
                    message.LockSymbols.push($root.GameMsg_JGYF.JGYF_LightningLock.decode(reader, reader.uint32()));
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
                    message.ReelResult.push($root.GameMsg_JGYF.JGYF_ReelResult.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.PastPayGroups && message.PastPayGroups.length))
                        message.PastPayGroups = [];
                    message.PastPayGroups.push($root.GameMsg_JGYF.JGYF_LightningPayout.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.BetMoney = reader.int64();
                    break;
                case 9:
                    message.BetRate = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_MSG_LightningPrepare message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_LightningPrepare} JGYF_MSG_LightningPrepare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_LightningPrepare.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_LightningPrepare message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_LightningPrepare.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.LightningStep != null && message.hasOwnProperty("LightningStep"))
                if (!$util.isInteger(message.LightningStep))
                    return "LightningStep: integer expected";
            if (message.ReelSetting != null && message.hasOwnProperty("ReelSetting")) {
                if (!Array.isArray(message.ReelSetting))
                    return "ReelSetting: array expected";
                for (var i = 0; i < message.ReelSetting.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_ReelSetting.verify(message.ReelSetting[i]);
                    if (error)
                        return "ReelSetting." + error;
                }
            }
            if (message.LockSymbols != null && message.hasOwnProperty("LockSymbols")) {
                if (!Array.isArray(message.LockSymbols))
                    return "LockSymbols: array expected";
                for (var i = 0; i < message.LockSymbols.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_LightningLock.verify(message.LockSymbols[i]);
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
                    var error = $root.GameMsg_JGYF.JGYF_ReelResult.verify(message.ReelResult[i]);
                    if (error)
                        return "ReelResult." + error;
                }
            }
            if (message.PastPayGroups != null && message.hasOwnProperty("PastPayGroups")) {
                if (!Array.isArray(message.PastPayGroups))
                    return "PastPayGroups: array expected";
                for (var i = 0; i < message.PastPayGroups.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_LightningPayout.verify(message.PastPayGroups[i]);
                    if (error)
                        return "PastPayGroups." + error;
                }
            }
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (!$util.isInteger(message.BetMoney) && !(message.BetMoney && $util.isInteger(message.BetMoney.low) && $util.isInteger(message.BetMoney.high)))
                    return "BetMoney: integer|Long expected";
            if (message.BetRate != null && message.hasOwnProperty("BetRate"))
                if (!$util.isInteger(message.BetRate) && !(message.BetRate && $util.isInteger(message.BetRate.low) && $util.isInteger(message.BetRate.high)))
                    return "BetRate: integer|Long expected";
            return null;
        };

        /**
         * Creates a JGYF_MSG_LightningPrepare message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_LightningPrepare} JGYF_MSG_LightningPrepare
         */
        JGYF_MSG_LightningPrepare.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_LightningPrepare)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_LightningPrepare();
            if (object.LightningStep != null)
                message.LightningStep = object.LightningStep | 0;
            if (object.ReelSetting) {
                if (!Array.isArray(object.ReelSetting))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_LightningPrepare.ReelSetting: array expected");
                message.ReelSetting = [];
                for (var i = 0; i < object.ReelSetting.length; ++i) {
                    if (typeof object.ReelSetting[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_LightningPrepare.ReelSetting: object expected");
                    message.ReelSetting[i] = $root.GameMsg_JGYF.JGYF_ReelSetting.fromObject(object.ReelSetting[i]);
                }
            }
            if (object.LockSymbols) {
                if (!Array.isArray(object.LockSymbols))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_LightningPrepare.LockSymbols: array expected");
                message.LockSymbols = [];
                for (var i = 0; i < object.LockSymbols.length; ++i) {
                    if (typeof object.LockSymbols[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_LightningPrepare.LockSymbols: object expected");
                    message.LockSymbols[i] = $root.GameMsg_JGYF.JGYF_LightningLock.fromObject(object.LockSymbols[i]);
                }
            }
            if (object.Count != null)
                message.Count = object.Count | 0;
            if (object.IsFreeGame != null)
                message.IsFreeGame = Boolean(object.IsFreeGame);
            if (object.ReelResult) {
                if (!Array.isArray(object.ReelResult))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_LightningPrepare.ReelResult: array expected");
                message.ReelResult = [];
                for (var i = 0; i < object.ReelResult.length; ++i) {
                    if (typeof object.ReelResult[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_LightningPrepare.ReelResult: object expected");
                    message.ReelResult[i] = $root.GameMsg_JGYF.JGYF_ReelResult.fromObject(object.ReelResult[i]);
                }
            }
            if (object.PastPayGroups) {
                if (!Array.isArray(object.PastPayGroups))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_LightningPrepare.PastPayGroups: array expected");
                message.PastPayGroups = [];
                for (var i = 0; i < object.PastPayGroups.length; ++i) {
                    if (typeof object.PastPayGroups[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_LightningPrepare.PastPayGroups: object expected");
                    message.PastPayGroups[i] = $root.GameMsg_JGYF.JGYF_LightningPayout.fromObject(object.PastPayGroups[i]);
                }
            }
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
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_LightningPrepare message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_LightningPrepare} message JGYF_MSG_LightningPrepare
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_LightningPrepare.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.ReelSetting = [];
                object.LockSymbols = [];
                object.ReelResult = [];
                object.PastPayGroups = [];
            }
            if (options.defaults) {
                object.LightningStep = 0;
                object.Count = 0;
                object.IsFreeGame = false;
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
            }
            if (message.LightningStep != null && message.hasOwnProperty("LightningStep"))
                object.LightningStep = message.LightningStep;
            if (message.ReelSetting && message.ReelSetting.length) {
                object.ReelSetting = [];
                for (var j = 0; j < message.ReelSetting.length; ++j)
                    object.ReelSetting[j] = $root.GameMsg_JGYF.JGYF_ReelSetting.toObject(message.ReelSetting[j], options);
            }
            if (message.LockSymbols && message.LockSymbols.length) {
                object.LockSymbols = [];
                for (var j = 0; j < message.LockSymbols.length; ++j)
                    object.LockSymbols[j] = $root.GameMsg_JGYF.JGYF_LightningLock.toObject(message.LockSymbols[j], options);
            }
            if (message.Count != null && message.hasOwnProperty("Count"))
                object.Count = message.Count;
            if (message.IsFreeGame != null && message.hasOwnProperty("IsFreeGame"))
                object.IsFreeGame = message.IsFreeGame;
            if (message.ReelResult && message.ReelResult.length) {
                object.ReelResult = [];
                for (var j = 0; j < message.ReelResult.length; ++j)
                    object.ReelResult[j] = $root.GameMsg_JGYF.JGYF_ReelResult.toObject(message.ReelResult[j], options);
            }
            if (message.PastPayGroups && message.PastPayGroups.length) {
                object.PastPayGroups = [];
                for (var j = 0; j < message.PastPayGroups.length; ++j)
                    object.PastPayGroups[j] = $root.GameMsg_JGYF.JGYF_LightningPayout.toObject(message.PastPayGroups[j], options);
            }
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
            return object;
        };

        /**
         * Converts this JGYF_MSG_LightningPrepare to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningPrepare
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_LightningPrepare.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_LightningPrepare;
    })();

    GameMsg_JGYF.JGYF_MSG_LightningResult = (function() {

        /**
         * Properties of a JGYF_MSG_LightningResult.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_LightningResult
         * @property {number|Long|null} [BetMoney] JGYF_MSG_LightningResult BetMoney
         * @property {number|Long|null} [WinMoney] JGYF_MSG_LightningResult WinMoney
         * @property {number|Long|null} [FinalMoney] JGYF_MSG_LightningResult FinalMoney
         * @property {number|Long|null} [JackpotMoney] JGYF_MSG_LightningResult JackpotMoney
         * @property {Array.<GameMsg_JGYF.IJGYF_ReelResult>|null} [ReelResult] JGYF_MSG_LightningResult ReelResult
         * @property {Array.<GameMsg_JGYF.IJGYF_LightningPayout>|null} [PayGroups] JGYF_MSG_LightningResult PayGroups
         * @property {number|Long|null} [FreeGameWinMoney] JGYF_MSG_LightningResult FreeGameWinMoney
         * @property {number|null} [LightningStep] JGYF_MSG_LightningResult LightningStep
         * @property {number|null} [Count] JGYF_MSG_LightningResult Count
         */

        /**
         * Constructs a new JGYF_MSG_LightningResult.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_LightningResult.
         * @implements IJGYF_MSG_LightningResult
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_LightningResult=} [properties] Properties to set
         */
        function JGYF_MSG_LightningResult(properties) {
            this.ReelResult = [];
            this.PayGroups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_LightningResult BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @instance
         */
        JGYF_MSG_LightningResult.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_LightningResult WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @instance
         */
        JGYF_MSG_LightningResult.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_LightningResult FinalMoney.
         * @member {number|Long} FinalMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @instance
         */
        JGYF_MSG_LightningResult.prototype.FinalMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_LightningResult JackpotMoney.
         * @member {number|Long} JackpotMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @instance
         */
        JGYF_MSG_LightningResult.prototype.JackpotMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_LightningResult ReelResult.
         * @member {Array.<GameMsg_JGYF.IJGYF_ReelResult>} ReelResult
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @instance
         */
        JGYF_MSG_LightningResult.prototype.ReelResult = $util.emptyArray;

        /**
         * JGYF_MSG_LightningResult PayGroups.
         * @member {Array.<GameMsg_JGYF.IJGYF_LightningPayout>} PayGroups
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @instance
         */
        JGYF_MSG_LightningResult.prototype.PayGroups = $util.emptyArray;

        /**
         * JGYF_MSG_LightningResult FreeGameWinMoney.
         * @member {number|Long} FreeGameWinMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @instance
         */
        JGYF_MSG_LightningResult.prototype.FreeGameWinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_LightningResult LightningStep.
         * @member {number} LightningStep
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @instance
         */
        JGYF_MSG_LightningResult.prototype.LightningStep = 0;

        /**
         * JGYF_MSG_LightningResult Count.
         * @member {number} Count
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @instance
         */
        JGYF_MSG_LightningResult.prototype.Count = 0;

        /**
         * Creates a new JGYF_MSG_LightningResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_LightningResult=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_LightningResult} JGYF_MSG_LightningResult instance
         */
        JGYF_MSG_LightningResult.create = function create(properties) {
            return new JGYF_MSG_LightningResult(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_LightningResult message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_LightningResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_LightningResult} message JGYF_MSG_LightningResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_LightningResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetMoney != null && Object.hasOwnProperty.call(message, "BetMoney"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.BetMoney);
            if (message.WinMoney != null && Object.hasOwnProperty.call(message, "WinMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.WinMoney);
            if (message.FinalMoney != null && Object.hasOwnProperty.call(message, "FinalMoney"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.FinalMoney);
            if (message.JackpotMoney != null && Object.hasOwnProperty.call(message, "JackpotMoney"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.JackpotMoney);
            if (message.ReelResult != null && message.ReelResult.length)
                for (var i = 0; i < message.ReelResult.length; ++i)
                    $root.GameMsg_JGYF.JGYF_ReelResult.encode(message.ReelResult[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.PayGroups != null && message.PayGroups.length)
                for (var i = 0; i < message.PayGroups.length; ++i)
                    $root.GameMsg_JGYF.JGYF_LightningPayout.encode(message.PayGroups[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.FreeGameWinMoney != null && Object.hasOwnProperty.call(message, "FreeGameWinMoney"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.FreeGameWinMoney);
            if (message.LightningStep != null && Object.hasOwnProperty.call(message, "LightningStep"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.LightningStep);
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.Count);
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_LightningResult message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_LightningResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_LightningResult} message JGYF_MSG_LightningResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_LightningResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_LightningResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_LightningResult} JGYF_MSG_LightningResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_LightningResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_LightningResult();
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
                    message.ReelResult.push($root.GameMsg_JGYF.JGYF_ReelResult.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.PayGroups && message.PayGroups.length))
                        message.PayGroups = [];
                    message.PayGroups.push($root.GameMsg_JGYF.JGYF_LightningPayout.decode(reader, reader.uint32()));
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
         * Decodes a JGYF_MSG_LightningResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_LightningResult} JGYF_MSG_LightningResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_LightningResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_LightningResult message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_LightningResult.verify = function verify(message) {
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
                    var error = $root.GameMsg_JGYF.JGYF_ReelResult.verify(message.ReelResult[i]);
                    if (error)
                        return "ReelResult." + error;
                }
            }
            if (message.PayGroups != null && message.hasOwnProperty("PayGroups")) {
                if (!Array.isArray(message.PayGroups))
                    return "PayGroups: array expected";
                for (var i = 0; i < message.PayGroups.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_LightningPayout.verify(message.PayGroups[i]);
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
         * Creates a JGYF_MSG_LightningResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_LightningResult} JGYF_MSG_LightningResult
         */
        JGYF_MSG_LightningResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_LightningResult)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_LightningResult();
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
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_LightningResult.ReelResult: array expected");
                message.ReelResult = [];
                for (var i = 0; i < object.ReelResult.length; ++i) {
                    if (typeof object.ReelResult[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_LightningResult.ReelResult: object expected");
                    message.ReelResult[i] = $root.GameMsg_JGYF.JGYF_ReelResult.fromObject(object.ReelResult[i]);
                }
            }
            if (object.PayGroups) {
                if (!Array.isArray(object.PayGroups))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_LightningResult.PayGroups: array expected");
                message.PayGroups = [];
                for (var i = 0; i < object.PayGroups.length; ++i) {
                    if (typeof object.PayGroups[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_LightningResult.PayGroups: object expected");
                    message.PayGroups[i] = $root.GameMsg_JGYF.JGYF_LightningPayout.fromObject(object.PayGroups[i]);
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
         * Creates a plain object from a JGYF_MSG_LightningResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_LightningResult} message JGYF_MSG_LightningResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_LightningResult.toObject = function toObject(message, options) {
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
                    object.ReelResult[j] = $root.GameMsg_JGYF.JGYF_ReelResult.toObject(message.ReelResult[j], options);
            }
            if (message.PayGroups && message.PayGroups.length) {
                object.PayGroups = [];
                for (var j = 0; j < message.PayGroups.length; ++j)
                    object.PayGroups[j] = $root.GameMsg_JGYF.JGYF_LightningPayout.toObject(message.PayGroups[j], options);
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
         * Converts this JGYF_MSG_LightningResult to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_LightningResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_LightningResult;
    })();

    GameMsg_JGYF.JGYF_MSG_LightningShow = (function() {

        /**
         * Properties of a JGYF_MSG_LightningShow.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_LightningShow
         * @property {number|null} [LightningStep] JGYF_MSG_LightningShow LightningStep
         */

        /**
         * Constructs a new JGYF_MSG_LightningShow.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_LightningShow.
         * @implements IJGYF_MSG_LightningShow
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_LightningShow=} [properties] Properties to set
         */
        function JGYF_MSG_LightningShow(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_LightningShow LightningStep.
         * @member {number} LightningStep
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningShow
         * @instance
         */
        JGYF_MSG_LightningShow.prototype.LightningStep = 0;

        /**
         * Creates a new JGYF_MSG_LightningShow instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningShow
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_LightningShow=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_LightningShow} JGYF_MSG_LightningShow instance
         */
        JGYF_MSG_LightningShow.create = function create(properties) {
            return new JGYF_MSG_LightningShow(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_LightningShow message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_LightningShow.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningShow
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_LightningShow} message JGYF_MSG_LightningShow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_LightningShow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LightningStep != null && Object.hasOwnProperty.call(message, "LightningStep"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.LightningStep);
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_LightningShow message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_LightningShow.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningShow
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_LightningShow} message JGYF_MSG_LightningShow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_LightningShow.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_LightningShow message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningShow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_LightningShow} JGYF_MSG_LightningShow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_LightningShow.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_LightningShow();
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
         * Decodes a JGYF_MSG_LightningShow message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningShow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_LightningShow} JGYF_MSG_LightningShow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_LightningShow.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_LightningShow message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningShow
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_LightningShow.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.LightningStep != null && message.hasOwnProperty("LightningStep"))
                if (!$util.isInteger(message.LightningStep))
                    return "LightningStep: integer expected";
            return null;
        };

        /**
         * Creates a JGYF_MSG_LightningShow message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningShow
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_LightningShow} JGYF_MSG_LightningShow
         */
        JGYF_MSG_LightningShow.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_LightningShow)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_LightningShow();
            if (object.LightningStep != null)
                message.LightningStep = object.LightningStep | 0;
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_LightningShow message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningShow
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_LightningShow} message JGYF_MSG_LightningShow
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_LightningShow.toObject = function toObject(message, options) {
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
         * Converts this JGYF_MSG_LightningShow to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_LightningShow
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_LightningShow.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_LightningShow;
    })();

    GameMsg_JGYF.JGYF_MSG_StepGameResult = (function() {

        /**
         * Properties of a JGYF_MSG_StepGameResult.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_StepGameResult
         * @property {number|Long} BetMoney JGYF_MSG_StepGameResult BetMoney
         * @property {number|Long} WinMoney JGYF_MSG_StepGameResult WinMoney
         * @property {number|Long} FinalMoney JGYF_MSG_StepGameResult FinalMoney
         * @property {Array.<GameMsg_JGYF.IJGYF_StepGameResult>|null} [SlotResult] JGYF_MSG_StepGameResult SlotResult
         */

        /**
         * Constructs a new JGYF_MSG_StepGameResult.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_StepGameResult.
         * @implements IJGYF_MSG_StepGameResult
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_StepGameResult=} [properties] Properties to set
         */
        function JGYF_MSG_StepGameResult(properties) {
            this.SlotResult = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_StepGameResult BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_StepGameResult
         * @instance
         */
        JGYF_MSG_StepGameResult.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_StepGameResult WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_StepGameResult
         * @instance
         */
        JGYF_MSG_StepGameResult.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_StepGameResult FinalMoney.
         * @member {number|Long} FinalMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_StepGameResult
         * @instance
         */
        JGYF_MSG_StepGameResult.prototype.FinalMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_StepGameResult SlotResult.
         * @member {Array.<GameMsg_JGYF.IJGYF_StepGameResult>} SlotResult
         * @memberof GameMsg_JGYF.JGYF_MSG_StepGameResult
         * @instance
         */
        JGYF_MSG_StepGameResult.prototype.SlotResult = $util.emptyArray;

        /**
         * Creates a new JGYF_MSG_StepGameResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_StepGameResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_StepGameResult=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_StepGameResult} JGYF_MSG_StepGameResult instance
         */
        JGYF_MSG_StepGameResult.create = function create(properties) {
            return new JGYF_MSG_StepGameResult(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_StepGameResult message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_StepGameResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_StepGameResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_StepGameResult} message JGYF_MSG_StepGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_StepGameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.BetMoney);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.WinMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.FinalMoney);
            if (message.SlotResult != null && message.SlotResult.length)
                for (var i = 0; i < message.SlotResult.length; ++i)
                    $root.GameMsg_JGYF.JGYF_StepGameResult.encode(message.SlotResult[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_StepGameResult message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_StepGameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_StepGameResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_StepGameResult} message JGYF_MSG_StepGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_StepGameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_StepGameResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_StepGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_StepGameResult} JGYF_MSG_StepGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_StepGameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_StepGameResult();
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
                    message.SlotResult.push($root.GameMsg_JGYF.JGYF_StepGameResult.decode(reader, reader.uint32()));
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
         * Decodes a JGYF_MSG_StepGameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_StepGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_StepGameResult} JGYF_MSG_StepGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_StepGameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_StepGameResult message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_StepGameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_StepGameResult.verify = function verify(message) {
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
                    var error = $root.GameMsg_JGYF.JGYF_StepGameResult.verify(message.SlotResult[i]);
                    if (error)
                        return "SlotResult." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JGYF_MSG_StepGameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_StepGameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_StepGameResult} JGYF_MSG_StepGameResult
         */
        JGYF_MSG_StepGameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_StepGameResult)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_StepGameResult();
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
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_StepGameResult.SlotResult: array expected");
                message.SlotResult = [];
                for (var i = 0; i < object.SlotResult.length; ++i) {
                    if (typeof object.SlotResult[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_StepGameResult.SlotResult: object expected");
                    message.SlotResult[i] = $root.GameMsg_JGYF.JGYF_StepGameResult.fromObject(object.SlotResult[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_StepGameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_StepGameResult
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_StepGameResult} message JGYF_MSG_StepGameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_StepGameResult.toObject = function toObject(message, options) {
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
                    object.SlotResult[j] = $root.GameMsg_JGYF.JGYF_StepGameResult.toObject(message.SlotResult[j], options);
            }
            return object;
        };

        /**
         * Converts this JGYF_MSG_StepGameResult to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_StepGameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_StepGameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_StepGameResult;
    })();

    GameMsg_JGYF.JGYF_MSG_BonusGame = (function() {

        /**
         * Properties of a JGYF_MSG_BonusGame.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_BonusGame
         * @property {Array.<GameMsg_JGYF.IJGYF_BonusGameRecord>|null} [Records] JGYF_MSG_BonusGame Records
         * @property {number} Count JGYF_MSG_BonusGame Count
         * @property {number|Long} WinMoney JGYF_MSG_BonusGame WinMoney
         * @property {Array.<number>|null} [All] JGYF_MSG_BonusGame All
         * @property {number|Long|null} [BetMoney] JGYF_MSG_BonusGame BetMoney
         * @property {number|Long|null} [BetRate] JGYF_MSG_BonusGame BetRate
         * @property {string|null} [Type] JGYF_MSG_BonusGame Type
         * @property {Array.<GameMsg_JGYF.IJGYF_ReelPosition>|null} [Positions] JGYF_MSG_BonusGame Positions
         */

        /**
         * Constructs a new JGYF_MSG_BonusGame.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_BonusGame.
         * @implements IJGYF_MSG_BonusGame
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_BonusGame=} [properties] Properties to set
         */
        function JGYF_MSG_BonusGame(properties) {
            this.Records = [];
            this.All = [];
            this.Positions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_BonusGame Records.
         * @member {Array.<GameMsg_JGYF.IJGYF_BonusGameRecord>} Records
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @instance
         */
        JGYF_MSG_BonusGame.prototype.Records = $util.emptyArray;

        /**
         * JGYF_MSG_BonusGame Count.
         * @member {number} Count
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @instance
         */
        JGYF_MSG_BonusGame.prototype.Count = 0;

        /**
         * JGYF_MSG_BonusGame WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @instance
         */
        JGYF_MSG_BonusGame.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_BonusGame All.
         * @member {Array.<number>} All
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @instance
         */
        JGYF_MSG_BonusGame.prototype.All = $util.emptyArray;

        /**
         * JGYF_MSG_BonusGame BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @instance
         */
        JGYF_MSG_BonusGame.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_BonusGame BetRate.
         * @member {number|Long} BetRate
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @instance
         */
        JGYF_MSG_BonusGame.prototype.BetRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_BonusGame Type.
         * @member {string} Type
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @instance
         */
        JGYF_MSG_BonusGame.prototype.Type = "";

        /**
         * JGYF_MSG_BonusGame Positions.
         * @member {Array.<GameMsg_JGYF.IJGYF_ReelPosition>} Positions
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @instance
         */
        JGYF_MSG_BonusGame.prototype.Positions = $util.emptyArray;

        /**
         * Creates a new JGYF_MSG_BonusGame instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_BonusGame=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_BonusGame} JGYF_MSG_BonusGame instance
         */
        JGYF_MSG_BonusGame.create = function create(properties) {
            return new JGYF_MSG_BonusGame(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_BonusGame message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_BonusGame.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_BonusGame} message JGYF_MSG_BonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_BonusGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Records != null && message.Records.length)
                for (var i = 0; i < message.Records.length; ++i)
                    $root.GameMsg_JGYF.JGYF_BonusGameRecord.encode(message.Records[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.WinMoney);
            if (message.All != null && message.All.length)
                for (var i = 0; i < message.All.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.All[i]);
            if (message.BetMoney != null && Object.hasOwnProperty.call(message, "BetMoney"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.BetMoney);
            if (message.BetRate != null && Object.hasOwnProperty.call(message, "BetRate"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.BetRate);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.Type);
            if (message.Positions != null && message.Positions.length)
                for (var i = 0; i < message.Positions.length; ++i)
                    $root.GameMsg_JGYF.JGYF_ReelPosition.encode(message.Positions[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_BonusGame message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_BonusGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_BonusGame} message JGYF_MSG_BonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_BonusGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_BonusGame message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_BonusGame} JGYF_MSG_BonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_BonusGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_BonusGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Records && message.Records.length))
                        message.Records = [];
                    message.Records.push($root.GameMsg_JGYF.JGYF_BonusGameRecord.decode(reader, reader.uint32()));
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
                case 5:
                    message.BetMoney = reader.int64();
                    break;
                case 6:
                    message.BetRate = reader.int64();
                    break;
                case 7:
                    message.Type = reader.string();
                    break;
                case 8:
                    if (!(message.Positions && message.Positions.length))
                        message.Positions = [];
                    message.Positions.push($root.GameMsg_JGYF.JGYF_ReelPosition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Count"))
                throw $util.ProtocolError("missing required 'Count'", { instance: message });
            if (!message.hasOwnProperty("WinMoney"))
                throw $util.ProtocolError("missing required 'WinMoney'", { instance: message });
            return message;
        };

        /**
         * Decodes a JGYF_MSG_BonusGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_BonusGame} JGYF_MSG_BonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_BonusGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_BonusGame message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_BonusGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Records != null && message.hasOwnProperty("Records")) {
                if (!Array.isArray(message.Records))
                    return "Records: array expected";
                for (var i = 0; i < message.Records.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_BonusGameRecord.verify(message.Records[i]);
                    if (error)
                        return "Records." + error;
                }
            }
            if (!$util.isInteger(message.Count))
                return "Count: integer expected";
            if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                return "WinMoney: integer|Long expected";
            if (message.All != null && message.hasOwnProperty("All")) {
                if (!Array.isArray(message.All))
                    return "All: array expected";
                for (var i = 0; i < message.All.length; ++i)
                    if (!$util.isInteger(message.All[i]))
                        return "All: integer[] expected";
            }
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (!$util.isInteger(message.BetMoney) && !(message.BetMoney && $util.isInteger(message.BetMoney.low) && $util.isInteger(message.BetMoney.high)))
                    return "BetMoney: integer|Long expected";
            if (message.BetRate != null && message.hasOwnProperty("BetRate"))
                if (!$util.isInteger(message.BetRate) && !(message.BetRate && $util.isInteger(message.BetRate.low) && $util.isInteger(message.BetRate.high)))
                    return "BetRate: integer|Long expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            if (message.Positions != null && message.hasOwnProperty("Positions")) {
                if (!Array.isArray(message.Positions))
                    return "Positions: array expected";
                for (var i = 0; i < message.Positions.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_ReelPosition.verify(message.Positions[i]);
                    if (error)
                        return "Positions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JGYF_MSG_BonusGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_BonusGame} JGYF_MSG_BonusGame
         */
        JGYF_MSG_BonusGame.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_BonusGame)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_BonusGame();
            if (object.Records) {
                if (!Array.isArray(object.Records))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_BonusGame.Records: array expected");
                message.Records = [];
                for (var i = 0; i < object.Records.length; ++i) {
                    if (typeof object.Records[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_BonusGame.Records: object expected");
                    message.Records[i] = $root.GameMsg_JGYF.JGYF_BonusGameRecord.fromObject(object.Records[i]);
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
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_BonusGame.All: array expected");
                message.All = [];
                for (var i = 0; i < object.All.length; ++i)
                    message.All[i] = object.All[i] | 0;
            }
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
            if (object.Type != null)
                message.Type = String(object.Type);
            if (object.Positions) {
                if (!Array.isArray(object.Positions))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_BonusGame.Positions: array expected");
                message.Positions = [];
                for (var i = 0; i < object.Positions.length; ++i) {
                    if (typeof object.Positions[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_BonusGame.Positions: object expected");
                    message.Positions[i] = $root.GameMsg_JGYF.JGYF_ReelPosition.fromObject(object.Positions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_BonusGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_BonusGame} message JGYF_MSG_BonusGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_BonusGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Records = [];
                object.All = [];
                object.Positions = [];
            }
            if (options.defaults) {
                object.Count = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinMoney = options.longs === String ? "0" : 0;
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
                object.Type = "";
            }
            if (message.Records && message.Records.length) {
                object.Records = [];
                for (var j = 0; j < message.Records.length; ++j)
                    object.Records[j] = $root.GameMsg_JGYF.JGYF_BonusGameRecord.toObject(message.Records[j], options);
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
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Positions && message.Positions.length) {
                object.Positions = [];
                for (var j = 0; j < message.Positions.length; ++j)
                    object.Positions[j] = $root.GameMsg_JGYF.JGYF_ReelPosition.toObject(message.Positions[j], options);
            }
            return object;
        };

        /**
         * Converts this JGYF_MSG_BonusGame to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_BonusGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_BonusGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_BonusGame;
    })();

    GameMsg_JGYF.JGYF_MSG_PickBonus = (function() {

        /**
         * Properties of a JGYF_MSG_PickBonus.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_PickBonus
         * @property {GameMsg_JGYF.IJGYF_BonusGameRecord} Record JGYF_MSG_PickBonus Record
         * @property {string|null} [Type] JGYF_MSG_PickBonus Type
         */

        /**
         * Constructs a new JGYF_MSG_PickBonus.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_PickBonus.
         * @implements IJGYF_MSG_PickBonus
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_PickBonus=} [properties] Properties to set
         */
        function JGYF_MSG_PickBonus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_PickBonus Record.
         * @member {GameMsg_JGYF.IJGYF_BonusGameRecord} Record
         * @memberof GameMsg_JGYF.JGYF_MSG_PickBonus
         * @instance
         */
        JGYF_MSG_PickBonus.prototype.Record = null;

        /**
         * JGYF_MSG_PickBonus Type.
         * @member {string} Type
         * @memberof GameMsg_JGYF.JGYF_MSG_PickBonus
         * @instance
         */
        JGYF_MSG_PickBonus.prototype.Type = "";

        /**
         * Creates a new JGYF_MSG_PickBonus instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_PickBonus
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_PickBonus=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_PickBonus} JGYF_MSG_PickBonus instance
         */
        JGYF_MSG_PickBonus.create = function create(properties) {
            return new JGYF_MSG_PickBonus(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_PickBonus message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_PickBonus.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_PickBonus
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_PickBonus} message JGYF_MSG_PickBonus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_PickBonus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_JGYF.JGYF_BonusGameRecord.encode(message.Record, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Type);
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_PickBonus message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_PickBonus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_PickBonus
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_PickBonus} message JGYF_MSG_PickBonus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_PickBonus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_PickBonus message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_PickBonus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_PickBonus} JGYF_MSG_PickBonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_PickBonus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_PickBonus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Record = $root.GameMsg_JGYF.JGYF_BonusGameRecord.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Record"))
                throw $util.ProtocolError("missing required 'Record'", { instance: message });
            return message;
        };

        /**
         * Decodes a JGYF_MSG_PickBonus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_PickBonus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_PickBonus} JGYF_MSG_PickBonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_PickBonus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_PickBonus message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_PickBonus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_PickBonus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_JGYF.JGYF_BonusGameRecord.verify(message.Record);
                if (error)
                    return "Record." + error;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            return null;
        };

        /**
         * Creates a JGYF_MSG_PickBonus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_PickBonus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_PickBonus} JGYF_MSG_PickBonus
         */
        JGYF_MSG_PickBonus.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_PickBonus)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_PickBonus();
            if (object.Record != null) {
                if (typeof object.Record !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_PickBonus.Record: object expected");
                message.Record = $root.GameMsg_JGYF.JGYF_BonusGameRecord.fromObject(object.Record);
            }
            if (object.Type != null)
                message.Type = String(object.Type);
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_PickBonus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_PickBonus
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_PickBonus} message JGYF_MSG_PickBonus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_PickBonus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Record = null;
                object.Type = "";
            }
            if (message.Record != null && message.hasOwnProperty("Record"))
                object.Record = $root.GameMsg_JGYF.JGYF_BonusGameRecord.toObject(message.Record, options);
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            return object;
        };

        /**
         * Converts this JGYF_MSG_PickBonus to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_PickBonus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_PickBonus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_PickBonus;
    })();

    GameMsg_JGYF.JGYF_MSG_ChooseGame = (function() {

        /**
         * Properties of a JGYF_MSG_ChooseGame.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_ChooseGame
         * @property {GameMsg_JGYF.IJGYF_ChooseGameOption} Option JGYF_MSG_ChooseGame Option
         */

        /**
         * Constructs a new JGYF_MSG_ChooseGame.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_ChooseGame.
         * @implements IJGYF_MSG_ChooseGame
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_ChooseGame=} [properties] Properties to set
         */
        function JGYF_MSG_ChooseGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_ChooseGame Option.
         * @member {GameMsg_JGYF.IJGYF_ChooseGameOption} Option
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGame
         * @instance
         */
        JGYF_MSG_ChooseGame.prototype.Option = null;

        /**
         * Creates a new JGYF_MSG_ChooseGame instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGame
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_ChooseGame=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_ChooseGame} JGYF_MSG_ChooseGame instance
         */
        JGYF_MSG_ChooseGame.create = function create(properties) {
            return new JGYF_MSG_ChooseGame(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_ChooseGame message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_ChooseGame.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGame
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_ChooseGame} message JGYF_MSG_ChooseGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_ChooseGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_JGYF.JGYF_ChooseGameOption.encode(message.Option, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_ChooseGame message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_ChooseGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGame
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_ChooseGame} message JGYF_MSG_ChooseGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_ChooseGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_ChooseGame message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_ChooseGame} JGYF_MSG_ChooseGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_ChooseGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_ChooseGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Option = $root.GameMsg_JGYF.JGYF_ChooseGameOption.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Option"))
                throw $util.ProtocolError("missing required 'Option'", { instance: message });
            return message;
        };

        /**
         * Decodes a JGYF_MSG_ChooseGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_ChooseGame} JGYF_MSG_ChooseGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_ChooseGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_ChooseGame message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_ChooseGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_JGYF.JGYF_ChooseGameOption.verify(message.Option);
                if (error)
                    return "Option." + error;
            }
            return null;
        };

        /**
         * Creates a JGYF_MSG_ChooseGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_ChooseGame} JGYF_MSG_ChooseGame
         */
        JGYF_MSG_ChooseGame.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_ChooseGame)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_ChooseGame();
            if (object.Option != null) {
                if (typeof object.Option !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_ChooseGame.Option: object expected");
                message.Option = $root.GameMsg_JGYF.JGYF_ChooseGameOption.fromObject(object.Option);
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_ChooseGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGame
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_ChooseGame} message JGYF_MSG_ChooseGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_ChooseGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Option = null;
            if (message.Option != null && message.hasOwnProperty("Option"))
                object.Option = $root.GameMsg_JGYF.JGYF_ChooseGameOption.toObject(message.Option, options);
            return object;
        };

        /**
         * Converts this JGYF_MSG_ChooseGame to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_ChooseGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_ChooseGame;
    })();

    GameMsg_JGYF.JGYF_MSG_ChooseGameOptions = (function() {

        /**
         * Properties of a JGYF_MSG_ChooseGameOptions.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_ChooseGameOptions
         * @property {number} Times JGYF_MSG_ChooseGameOptions Times
         * @property {Array.<GameMsg_JGYF.IJGYF_ChooseGameOption>|null} [Options] JGYF_MSG_ChooseGameOptions Options
         * @property {string|null} [Data] JGYF_MSG_ChooseGameOptions Data
         * @property {Array.<GameMsg_JGYF.IJGYF_ReelResult>|null} [ReelResult] JGYF_MSG_ChooseGameOptions ReelResult
         * @property {number|Long|null} [BetMoney] JGYF_MSG_ChooseGameOptions BetMoney
         * @property {number|Long|null} [BetRate] JGYF_MSG_ChooseGameOptions BetRate
         */

        /**
         * Constructs a new JGYF_MSG_ChooseGameOptions.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_ChooseGameOptions.
         * @implements IJGYF_MSG_ChooseGameOptions
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_ChooseGameOptions=} [properties] Properties to set
         */
        function JGYF_MSG_ChooseGameOptions(properties) {
            this.Options = [];
            this.ReelResult = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_ChooseGameOptions Times.
         * @member {number} Times
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @instance
         */
        JGYF_MSG_ChooseGameOptions.prototype.Times = 0;

        /**
         * JGYF_MSG_ChooseGameOptions Options.
         * @member {Array.<GameMsg_JGYF.IJGYF_ChooseGameOption>} Options
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @instance
         */
        JGYF_MSG_ChooseGameOptions.prototype.Options = $util.emptyArray;

        /**
         * JGYF_MSG_ChooseGameOptions Data.
         * @member {string} Data
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @instance
         */
        JGYF_MSG_ChooseGameOptions.prototype.Data = "";

        /**
         * JGYF_MSG_ChooseGameOptions ReelResult.
         * @member {Array.<GameMsg_JGYF.IJGYF_ReelResult>} ReelResult
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @instance
         */
        JGYF_MSG_ChooseGameOptions.prototype.ReelResult = $util.emptyArray;

        /**
         * JGYF_MSG_ChooseGameOptions BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @instance
         */
        JGYF_MSG_ChooseGameOptions.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_MSG_ChooseGameOptions BetRate.
         * @member {number|Long} BetRate
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @instance
         */
        JGYF_MSG_ChooseGameOptions.prototype.BetRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JGYF_MSG_ChooseGameOptions instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_ChooseGameOptions=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_ChooseGameOptions} JGYF_MSG_ChooseGameOptions instance
         */
        JGYF_MSG_ChooseGameOptions.create = function create(properties) {
            return new JGYF_MSG_ChooseGameOptions(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_ChooseGameOptions message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_ChooseGameOptions.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_ChooseGameOptions} message JGYF_MSG_ChooseGameOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_ChooseGameOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Times);
            if (message.Options != null && message.Options.length)
                for (var i = 0; i < message.Options.length; ++i)
                    $root.GameMsg_JGYF.JGYF_ChooseGameOption.encode(message.Options[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Data);
            if (message.ReelResult != null && message.ReelResult.length)
                for (var i = 0; i < message.ReelResult.length; ++i)
                    $root.GameMsg_JGYF.JGYF_ReelResult.encode(message.ReelResult[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.BetMoney != null && Object.hasOwnProperty.call(message, "BetMoney"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.BetMoney);
            if (message.BetRate != null && Object.hasOwnProperty.call(message, "BetRate"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.BetRate);
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_ChooseGameOptions message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_ChooseGameOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_ChooseGameOptions} message JGYF_MSG_ChooseGameOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_ChooseGameOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_ChooseGameOptions message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_ChooseGameOptions} JGYF_MSG_ChooseGameOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_ChooseGameOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_ChooseGameOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = reader.int32();
                    break;
                case 2:
                    if (!(message.Options && message.Options.length))
                        message.Options = [];
                    message.Options.push($root.GameMsg_JGYF.JGYF_ChooseGameOption.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.Data = reader.string();
                    break;
                case 4:
                    if (!(message.ReelResult && message.ReelResult.length))
                        message.ReelResult = [];
                    message.ReelResult.push($root.GameMsg_JGYF.JGYF_ReelResult.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.BetMoney = reader.int64();
                    break;
                case 6:
                    message.BetRate = reader.int64();
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
         * Decodes a JGYF_MSG_ChooseGameOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_ChooseGameOptions} JGYF_MSG_ChooseGameOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_ChooseGameOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_ChooseGameOptions message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_ChooseGameOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Times))
                return "Times: integer expected";
            if (message.Options != null && message.hasOwnProperty("Options")) {
                if (!Array.isArray(message.Options))
                    return "Options: array expected";
                for (var i = 0; i < message.Options.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_ChooseGameOption.verify(message.Options[i]);
                    if (error)
                        return "Options." + error;
                }
            }
            if (message.Data != null && message.hasOwnProperty("Data"))
                if (!$util.isString(message.Data))
                    return "Data: string expected";
            if (message.ReelResult != null && message.hasOwnProperty("ReelResult")) {
                if (!Array.isArray(message.ReelResult))
                    return "ReelResult: array expected";
                for (var i = 0; i < message.ReelResult.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_ReelResult.verify(message.ReelResult[i]);
                    if (error)
                        return "ReelResult." + error;
                }
            }
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (!$util.isInteger(message.BetMoney) && !(message.BetMoney && $util.isInteger(message.BetMoney.low) && $util.isInteger(message.BetMoney.high)))
                    return "BetMoney: integer|Long expected";
            if (message.BetRate != null && message.hasOwnProperty("BetRate"))
                if (!$util.isInteger(message.BetRate) && !(message.BetRate && $util.isInteger(message.BetRate.low) && $util.isInteger(message.BetRate.high)))
                    return "BetRate: integer|Long expected";
            return null;
        };

        /**
         * Creates a JGYF_MSG_ChooseGameOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_ChooseGameOptions} JGYF_MSG_ChooseGameOptions
         */
        JGYF_MSG_ChooseGameOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_ChooseGameOptions)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_ChooseGameOptions();
            if (object.Times != null)
                message.Times = object.Times | 0;
            if (object.Options) {
                if (!Array.isArray(object.Options))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_ChooseGameOptions.Options: array expected");
                message.Options = [];
                for (var i = 0; i < object.Options.length; ++i) {
                    if (typeof object.Options[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_ChooseGameOptions.Options: object expected");
                    message.Options[i] = $root.GameMsg_JGYF.JGYF_ChooseGameOption.fromObject(object.Options[i]);
                }
            }
            if (object.Data != null)
                message.Data = String(object.Data);
            if (object.ReelResult) {
                if (!Array.isArray(object.ReelResult))
                    throw TypeError(".GameMsg_JGYF.JGYF_MSG_ChooseGameOptions.ReelResult: array expected");
                message.ReelResult = [];
                for (var i = 0; i < object.ReelResult.length; ++i) {
                    if (typeof object.ReelResult[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_MSG_ChooseGameOptions.ReelResult: object expected");
                    message.ReelResult[i] = $root.GameMsg_JGYF.JGYF_ReelResult.fromObject(object.ReelResult[i]);
                }
            }
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
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_ChooseGameOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_ChooseGameOptions} message JGYF_MSG_ChooseGameOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_ChooseGameOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Options = [];
                object.ReelResult = [];
            }
            if (options.defaults) {
                object.Times = 0;
                object.Data = "";
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
            }
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = message.Times;
            if (message.Options && message.Options.length) {
                object.Options = [];
                for (var j = 0; j < message.Options.length; ++j)
                    object.Options[j] = $root.GameMsg_JGYF.JGYF_ChooseGameOption.toObject(message.Options[j], options);
            }
            if (message.Data != null && message.hasOwnProperty("Data"))
                object.Data = message.Data;
            if (message.ReelResult && message.ReelResult.length) {
                object.ReelResult = [];
                for (var j = 0; j < message.ReelResult.length; ++j)
                    object.ReelResult[j] = $root.GameMsg_JGYF.JGYF_ReelResult.toObject(message.ReelResult[j], options);
            }
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
            return object;
        };

        /**
         * Converts this JGYF_MSG_ChooseGameOptions to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_ChooseGameOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_ChooseGameOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_ChooseGameOptions;
    })();

    GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes = (function() {

        /**
         * Properties of a JGYF_MSG_IncreaseGameTimes.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_MSG_IncreaseGameTimes
         * @property {string|null} [Type] JGYF_MSG_IncreaseGameTimes Type
         * @property {number|null} [Count] JGYF_MSG_IncreaseGameTimes Count
         * @property {number|null} [ID] JGYF_MSG_IncreaseGameTimes ID
         * @property {string|null} [Data] JGYF_MSG_IncreaseGameTimes Data
         */

        /**
         * Constructs a new JGYF_MSG_IncreaseGameTimes.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_MSG_IncreaseGameTimes.
         * @implements IJGYF_MSG_IncreaseGameTimes
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_MSG_IncreaseGameTimes=} [properties] Properties to set
         */
        function JGYF_MSG_IncreaseGameTimes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_MSG_IncreaseGameTimes Type.
         * @member {string} Type
         * @memberof GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes
         * @instance
         */
        JGYF_MSG_IncreaseGameTimes.prototype.Type = "";

        /**
         * JGYF_MSG_IncreaseGameTimes Count.
         * @member {number} Count
         * @memberof GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes
         * @instance
         */
        JGYF_MSG_IncreaseGameTimes.prototype.Count = 0;

        /**
         * JGYF_MSG_IncreaseGameTimes ID.
         * @member {number} ID
         * @memberof GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes
         * @instance
         */
        JGYF_MSG_IncreaseGameTimes.prototype.ID = 0;

        /**
         * JGYF_MSG_IncreaseGameTimes Data.
         * @member {string} Data
         * @memberof GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes
         * @instance
         */
        JGYF_MSG_IncreaseGameTimes.prototype.Data = "";

        /**
         * Creates a new JGYF_MSG_IncreaseGameTimes instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_IncreaseGameTimes=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes} JGYF_MSG_IncreaseGameTimes instance
         */
        JGYF_MSG_IncreaseGameTimes.create = function create(properties) {
            return new JGYF_MSG_IncreaseGameTimes(properties);
        };

        /**
         * Encodes the specified JGYF_MSG_IncreaseGameTimes message. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_IncreaseGameTimes} message JGYF_MSG_IncreaseGameTimes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_IncreaseGameTimes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Type);
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ID);
            if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Data);
            return writer;
        };

        /**
         * Encodes the specified JGYF_MSG_IncreaseGameTimes message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes
         * @static
         * @param {GameMsg_JGYF.IJGYF_MSG_IncreaseGameTimes} message JGYF_MSG_IncreaseGameTimes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_MSG_IncreaseGameTimes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_MSG_IncreaseGameTimes message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes} JGYF_MSG_IncreaseGameTimes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_IncreaseGameTimes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.string();
                    break;
                case 2:
                    message.Count = reader.int32();
                    break;
                case 3:
                    message.ID = reader.int32();
                    break;
                case 4:
                    message.Data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_MSG_IncreaseGameTimes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes} JGYF_MSG_IncreaseGameTimes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_MSG_IncreaseGameTimes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_MSG_IncreaseGameTimes message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_MSG_IncreaseGameTimes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count))
                    return "Count: integer expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.Data != null && message.hasOwnProperty("Data"))
                if (!$util.isString(message.Data))
                    return "Data: string expected";
            return null;
        };

        /**
         * Creates a JGYF_MSG_IncreaseGameTimes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes} JGYF_MSG_IncreaseGameTimes
         */
        JGYF_MSG_IncreaseGameTimes.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes();
            if (object.Type != null)
                message.Type = String(object.Type);
            if (object.Count != null)
                message.Count = object.Count | 0;
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.Data != null)
                message.Data = String(object.Data);
            return message;
        };

        /**
         * Creates a plain object from a JGYF_MSG_IncreaseGameTimes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes
         * @static
         * @param {GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes} message JGYF_MSG_IncreaseGameTimes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_MSG_IncreaseGameTimes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = "";
                object.Count = 0;
                object.ID = 0;
                object.Data = "";
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Count != null && message.hasOwnProperty("Count"))
                object.Count = message.Count;
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.Data != null && message.hasOwnProperty("Data"))
                object.Data = message.Data;
            return object;
        };

        /**
         * Converts this JGYF_MSG_IncreaseGameTimes to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_MSG_IncreaseGameTimes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_MSG_IncreaseGameTimes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_MSG_IncreaseGameTimes;
    })();

    GameMsg_JGYF.JGYF_ChooseGameOption = (function() {

        /**
         * Properties of a JGYF_ChooseGameOption.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_ChooseGameOption
         * @property {number|null} [ID] JGYF_ChooseGameOption ID
         * @property {string|null} [Type] JGYF_ChooseGameOption Type
         * @property {string|null} [Data] JGYF_ChooseGameOption Data
         */

        /**
         * Constructs a new JGYF_ChooseGameOption.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_ChooseGameOption.
         * @implements IJGYF_ChooseGameOption
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_ChooseGameOption=} [properties] Properties to set
         */
        function JGYF_ChooseGameOption(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_ChooseGameOption ID.
         * @member {number} ID
         * @memberof GameMsg_JGYF.JGYF_ChooseGameOption
         * @instance
         */
        JGYF_ChooseGameOption.prototype.ID = 0;

        /**
         * JGYF_ChooseGameOption Type.
         * @member {string} Type
         * @memberof GameMsg_JGYF.JGYF_ChooseGameOption
         * @instance
         */
        JGYF_ChooseGameOption.prototype.Type = "";

        /**
         * JGYF_ChooseGameOption Data.
         * @member {string} Data
         * @memberof GameMsg_JGYF.JGYF_ChooseGameOption
         * @instance
         */
        JGYF_ChooseGameOption.prototype.Data = "";

        /**
         * Creates a new JGYF_ChooseGameOption instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_ChooseGameOption
         * @static
         * @param {GameMsg_JGYF.IJGYF_ChooseGameOption=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_ChooseGameOption} JGYF_ChooseGameOption instance
         */
        JGYF_ChooseGameOption.create = function create(properties) {
            return new JGYF_ChooseGameOption(properties);
        };

        /**
         * Encodes the specified JGYF_ChooseGameOption message. Does not implicitly {@link GameMsg_JGYF.JGYF_ChooseGameOption.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_ChooseGameOption
         * @static
         * @param {GameMsg_JGYF.IJGYF_ChooseGameOption} message JGYF_ChooseGameOption message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_ChooseGameOption.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Type);
            if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Data);
            return writer;
        };

        /**
         * Encodes the specified JGYF_ChooseGameOption message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_ChooseGameOption.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_ChooseGameOption
         * @static
         * @param {GameMsg_JGYF.IJGYF_ChooseGameOption} message JGYF_ChooseGameOption message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_ChooseGameOption.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_ChooseGameOption message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_ChooseGameOption
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_ChooseGameOption} JGYF_ChooseGameOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_ChooseGameOption.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_ChooseGameOption();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.Type = reader.string();
                    break;
                case 3:
                    message.Data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_ChooseGameOption message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_ChooseGameOption
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_ChooseGameOption} JGYF_ChooseGameOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_ChooseGameOption.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_ChooseGameOption message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_ChooseGameOption
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_ChooseGameOption.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            if (message.Data != null && message.hasOwnProperty("Data"))
                if (!$util.isString(message.Data))
                    return "Data: string expected";
            return null;
        };

        /**
         * Creates a JGYF_ChooseGameOption message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_ChooseGameOption
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_ChooseGameOption} JGYF_ChooseGameOption
         */
        JGYF_ChooseGameOption.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_ChooseGameOption)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_ChooseGameOption();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.Type != null)
                message.Type = String(object.Type);
            if (object.Data != null)
                message.Data = String(object.Data);
            return message;
        };

        /**
         * Creates a plain object from a JGYF_ChooseGameOption message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_ChooseGameOption
         * @static
         * @param {GameMsg_JGYF.JGYF_ChooseGameOption} message JGYF_ChooseGameOption
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_ChooseGameOption.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.Type = "";
                object.Data = "";
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Data != null && message.hasOwnProperty("Data"))
                object.Data = message.Data;
            return object;
        };

        /**
         * Converts this JGYF_ChooseGameOption to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_ChooseGameOption
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_ChooseGameOption.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_ChooseGameOption;
    })();

    GameMsg_JGYF.JGYF_ReelSetting = (function() {

        /**
         * Properties of a JGYF_ReelSetting.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_ReelSetting
         * @property {number|null} [ReelID] JGYF_ReelSetting ReelID
         * @property {Array.<GameMsg_JGYF.IJGYF_Symbol>|null} [Symbols] JGYF_ReelSetting Symbols
         */

        /**
         * Constructs a new JGYF_ReelSetting.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_ReelSetting.
         * @implements IJGYF_ReelSetting
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_ReelSetting=} [properties] Properties to set
         */
        function JGYF_ReelSetting(properties) {
            this.Symbols = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_ReelSetting ReelID.
         * @member {number} ReelID
         * @memberof GameMsg_JGYF.JGYF_ReelSetting
         * @instance
         */
        JGYF_ReelSetting.prototype.ReelID = 0;

        /**
         * JGYF_ReelSetting Symbols.
         * @member {Array.<GameMsg_JGYF.IJGYF_Symbol>} Symbols
         * @memberof GameMsg_JGYF.JGYF_ReelSetting
         * @instance
         */
        JGYF_ReelSetting.prototype.Symbols = $util.emptyArray;

        /**
         * Creates a new JGYF_ReelSetting instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_ReelSetting
         * @static
         * @param {GameMsg_JGYF.IJGYF_ReelSetting=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_ReelSetting} JGYF_ReelSetting instance
         */
        JGYF_ReelSetting.create = function create(properties) {
            return new JGYF_ReelSetting(properties);
        };

        /**
         * Encodes the specified JGYF_ReelSetting message. Does not implicitly {@link GameMsg_JGYF.JGYF_ReelSetting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_ReelSetting
         * @static
         * @param {GameMsg_JGYF.IJGYF_ReelSetting} message JGYF_ReelSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_ReelSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ReelID != null && Object.hasOwnProperty.call(message, "ReelID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ReelID);
            if (message.Symbols != null && message.Symbols.length)
                for (var i = 0; i < message.Symbols.length; ++i)
                    $root.GameMsg_JGYF.JGYF_Symbol.encode(message.Symbols[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_ReelSetting message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_ReelSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_ReelSetting
         * @static
         * @param {GameMsg_JGYF.IJGYF_ReelSetting} message JGYF_ReelSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_ReelSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_ReelSetting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_ReelSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_ReelSetting} JGYF_ReelSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_ReelSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_ReelSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ReelID = reader.int32();
                    break;
                case 2:
                    if (!(message.Symbols && message.Symbols.length))
                        message.Symbols = [];
                    message.Symbols.push($root.GameMsg_JGYF.JGYF_Symbol.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_ReelSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_ReelSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_ReelSetting} JGYF_ReelSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_ReelSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_ReelSetting message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_ReelSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_ReelSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ReelID != null && message.hasOwnProperty("ReelID"))
                if (!$util.isInteger(message.ReelID))
                    return "ReelID: integer expected";
            if (message.Symbols != null && message.hasOwnProperty("Symbols")) {
                if (!Array.isArray(message.Symbols))
                    return "Symbols: array expected";
                for (var i = 0; i < message.Symbols.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_Symbol.verify(message.Symbols[i]);
                    if (error)
                        return "Symbols." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JGYF_ReelSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_ReelSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_ReelSetting} JGYF_ReelSetting
         */
        JGYF_ReelSetting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_ReelSetting)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_ReelSetting();
            if (object.ReelID != null)
                message.ReelID = object.ReelID | 0;
            if (object.Symbols) {
                if (!Array.isArray(object.Symbols))
                    throw TypeError(".GameMsg_JGYF.JGYF_ReelSetting.Symbols: array expected");
                message.Symbols = [];
                for (var i = 0; i < object.Symbols.length; ++i) {
                    if (typeof object.Symbols[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_ReelSetting.Symbols: object expected");
                    message.Symbols[i] = $root.GameMsg_JGYF.JGYF_Symbol.fromObject(object.Symbols[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_ReelSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_ReelSetting
         * @static
         * @param {GameMsg_JGYF.JGYF_ReelSetting} message JGYF_ReelSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_ReelSetting.toObject = function toObject(message, options) {
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
                    object.Symbols[j] = $root.GameMsg_JGYF.JGYF_Symbol.toObject(message.Symbols[j], options);
            }
            return object;
        };

        /**
         * Converts this JGYF_ReelSetting to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_ReelSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_ReelSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_ReelSetting;
    })();

    GameMsg_JGYF.JGYF_ReelPosition = (function() {

        /**
         * Properties of a JGYF_ReelPosition.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_ReelPosition
         * @property {number|null} [Reel] JGYF_ReelPosition Reel
         * @property {number|null} [Row] JGYF_ReelPosition Row
         */

        /**
         * Constructs a new JGYF_ReelPosition.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_ReelPosition.
         * @implements IJGYF_ReelPosition
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_ReelPosition=} [properties] Properties to set
         */
        function JGYF_ReelPosition(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_ReelPosition Reel.
         * @member {number} Reel
         * @memberof GameMsg_JGYF.JGYF_ReelPosition
         * @instance
         */
        JGYF_ReelPosition.prototype.Reel = 0;

        /**
         * JGYF_ReelPosition Row.
         * @member {number} Row
         * @memberof GameMsg_JGYF.JGYF_ReelPosition
         * @instance
         */
        JGYF_ReelPosition.prototype.Row = 0;

        /**
         * Creates a new JGYF_ReelPosition instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_ReelPosition
         * @static
         * @param {GameMsg_JGYF.IJGYF_ReelPosition=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_ReelPosition} JGYF_ReelPosition instance
         */
        JGYF_ReelPosition.create = function create(properties) {
            return new JGYF_ReelPosition(properties);
        };

        /**
         * Encodes the specified JGYF_ReelPosition message. Does not implicitly {@link GameMsg_JGYF.JGYF_ReelPosition.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_ReelPosition
         * @static
         * @param {GameMsg_JGYF.IJGYF_ReelPosition} message JGYF_ReelPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_ReelPosition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Reel != null && Object.hasOwnProperty.call(message, "Reel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Reel);
            if (message.Row != null && Object.hasOwnProperty.call(message, "Row"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Row);
            return writer;
        };

        /**
         * Encodes the specified JGYF_ReelPosition message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_ReelPosition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_ReelPosition
         * @static
         * @param {GameMsg_JGYF.IJGYF_ReelPosition} message JGYF_ReelPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_ReelPosition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_ReelPosition message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_ReelPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_ReelPosition} JGYF_ReelPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_ReelPosition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_ReelPosition();
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
         * Decodes a JGYF_ReelPosition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_ReelPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_ReelPosition} JGYF_ReelPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_ReelPosition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_ReelPosition message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_ReelPosition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_ReelPosition.verify = function verify(message) {
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
         * Creates a JGYF_ReelPosition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_ReelPosition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_ReelPosition} JGYF_ReelPosition
         */
        JGYF_ReelPosition.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_ReelPosition)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_ReelPosition();
            if (object.Reel != null)
                message.Reel = object.Reel | 0;
            if (object.Row != null)
                message.Row = object.Row | 0;
            return message;
        };

        /**
         * Creates a plain object from a JGYF_ReelPosition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_ReelPosition
         * @static
         * @param {GameMsg_JGYF.JGYF_ReelPosition} message JGYF_ReelPosition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_ReelPosition.toObject = function toObject(message, options) {
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
         * Converts this JGYF_ReelPosition to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_ReelPosition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_ReelPosition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_ReelPosition;
    })();

    GameMsg_JGYF.JGYF_ReelResult = (function() {

        /**
         * Properties of a JGYF_ReelResult.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_ReelResult
         * @property {GameMsg_JGYF.IJGYF_ReelPosition|null} [Position] JGYF_ReelResult Position
         * @property {GameMsg_JGYF.IJGYF_Symbol|null} [Symbol] JGYF_ReelResult Symbol
         * @property {boolean|null} [Blink] JGYF_ReelResult Blink
         * @property {number|Long|null} [Multi] JGYF_ReelResult Multi
         */

        /**
         * Constructs a new JGYF_ReelResult.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_ReelResult.
         * @implements IJGYF_ReelResult
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_ReelResult=} [properties] Properties to set
         */
        function JGYF_ReelResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_ReelResult Position.
         * @member {GameMsg_JGYF.IJGYF_ReelPosition|null|undefined} Position
         * @memberof GameMsg_JGYF.JGYF_ReelResult
         * @instance
         */
        JGYF_ReelResult.prototype.Position = null;

        /**
         * JGYF_ReelResult Symbol.
         * @member {GameMsg_JGYF.IJGYF_Symbol|null|undefined} Symbol
         * @memberof GameMsg_JGYF.JGYF_ReelResult
         * @instance
         */
        JGYF_ReelResult.prototype.Symbol = null;

        /**
         * JGYF_ReelResult Blink.
         * @member {boolean} Blink
         * @memberof GameMsg_JGYF.JGYF_ReelResult
         * @instance
         */
        JGYF_ReelResult.prototype.Blink = false;

        /**
         * JGYF_ReelResult Multi.
         * @member {number|Long} Multi
         * @memberof GameMsg_JGYF.JGYF_ReelResult
         * @instance
         */
        JGYF_ReelResult.prototype.Multi = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JGYF_ReelResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_ReelResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_ReelResult=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_ReelResult} JGYF_ReelResult instance
         */
        JGYF_ReelResult.create = function create(properties) {
            return new JGYF_ReelResult(properties);
        };

        /**
         * Encodes the specified JGYF_ReelResult message. Does not implicitly {@link GameMsg_JGYF.JGYF_ReelResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_ReelResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_ReelResult} message JGYF_ReelResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_ReelResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Position != null && Object.hasOwnProperty.call(message, "Position"))
                $root.GameMsg_JGYF.JGYF_ReelPosition.encode(message.Position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Symbol != null && Object.hasOwnProperty.call(message, "Symbol"))
                $root.GameMsg_JGYF.JGYF_Symbol.encode(message.Symbol, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.Blink != null && Object.hasOwnProperty.call(message, "Blink"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.Blink);
            if (message.Multi != null && Object.hasOwnProperty.call(message, "Multi"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Multi);
            return writer;
        };

        /**
         * Encodes the specified JGYF_ReelResult message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_ReelResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_ReelResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_ReelResult} message JGYF_ReelResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_ReelResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_ReelResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_ReelResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_ReelResult} JGYF_ReelResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_ReelResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_ReelResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Symbol = $root.GameMsg_JGYF.JGYF_Symbol.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.Blink = reader.bool();
                    break;
                case 4:
                    message.Multi = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_ReelResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_ReelResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_ReelResult} JGYF_ReelResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_ReelResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_ReelResult message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_ReelResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_ReelResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Position != null && message.hasOwnProperty("Position")) {
                var error = $root.GameMsg_JGYF.JGYF_ReelPosition.verify(message.Position);
                if (error)
                    return "Position." + error;
            }
            if (message.Symbol != null && message.hasOwnProperty("Symbol")) {
                var error = $root.GameMsg_JGYF.JGYF_Symbol.verify(message.Symbol);
                if (error)
                    return "Symbol." + error;
            }
            if (message.Blink != null && message.hasOwnProperty("Blink"))
                if (typeof message.Blink !== "boolean")
                    return "Blink: boolean expected";
            if (message.Multi != null && message.hasOwnProperty("Multi"))
                if (!$util.isInteger(message.Multi) && !(message.Multi && $util.isInteger(message.Multi.low) && $util.isInteger(message.Multi.high)))
                    return "Multi: integer|Long expected";
            return null;
        };

        /**
         * Creates a JGYF_ReelResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_ReelResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_ReelResult} JGYF_ReelResult
         */
        JGYF_ReelResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_ReelResult)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_ReelResult();
            if (object.Position != null) {
                if (typeof object.Position !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_ReelResult.Position: object expected");
                message.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.fromObject(object.Position);
            }
            if (object.Symbol != null) {
                if (typeof object.Symbol !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_ReelResult.Symbol: object expected");
                message.Symbol = $root.GameMsg_JGYF.JGYF_Symbol.fromObject(object.Symbol);
            }
            if (object.Blink != null)
                message.Blink = Boolean(object.Blink);
            if (object.Multi != null)
                if ($util.Long)
                    (message.Multi = $util.Long.fromValue(object.Multi)).unsigned = false;
                else if (typeof object.Multi === "string")
                    message.Multi = parseInt(object.Multi, 10);
                else if (typeof object.Multi === "number")
                    message.Multi = object.Multi;
                else if (typeof object.Multi === "object")
                    message.Multi = new $util.LongBits(object.Multi.low >>> 0, object.Multi.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a JGYF_ReelResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_ReelResult
         * @static
         * @param {GameMsg_JGYF.JGYF_ReelResult} message JGYF_ReelResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_ReelResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Position = null;
                object.Symbol = null;
                object.Blink = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Multi = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Multi = options.longs === String ? "0" : 0;
            }
            if (message.Position != null && message.hasOwnProperty("Position"))
                object.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.toObject(message.Position, options);
            if (message.Symbol != null && message.hasOwnProperty("Symbol"))
                object.Symbol = $root.GameMsg_JGYF.JGYF_Symbol.toObject(message.Symbol, options);
            if (message.Blink != null && message.hasOwnProperty("Blink"))
                object.Blink = message.Blink;
            if (message.Multi != null && message.hasOwnProperty("Multi"))
                if (typeof message.Multi === "number")
                    object.Multi = options.longs === String ? String(message.Multi) : message.Multi;
                else
                    object.Multi = options.longs === String ? $util.Long.prototype.toString.call(message.Multi) : options.longs === Number ? new $util.LongBits(message.Multi.low >>> 0, message.Multi.high >>> 0).toNumber() : message.Multi;
            return object;
        };

        /**
         * Converts this JGYF_ReelResult to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_ReelResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_ReelResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_ReelResult;
    })();

    GameMsg_JGYF.JGYF_BackgroundInfo = (function() {

        /**
         * Properties of a JGYF_BackgroundInfo.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_BackgroundInfo
         * @property {Array.<GameMsg_JGYF.IJGYF_BackgroundUnit>|null} [Result] JGYF_BackgroundInfo Result
         * @property {number|Long|null} [WinMoney] JGYF_BackgroundInfo WinMoney
         * @property {Array.<GameMsg_JGYF.IJGYF_ReelPosition>|null} [BlinkPositions] JGYF_BackgroundInfo BlinkPositions
         */

        /**
         * Constructs a new JGYF_BackgroundInfo.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_BackgroundInfo.
         * @implements IJGYF_BackgroundInfo
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_BackgroundInfo=} [properties] Properties to set
         */
        function JGYF_BackgroundInfo(properties) {
            this.Result = [];
            this.BlinkPositions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_BackgroundInfo Result.
         * @member {Array.<GameMsg_JGYF.IJGYF_BackgroundUnit>} Result
         * @memberof GameMsg_JGYF.JGYF_BackgroundInfo
         * @instance
         */
        JGYF_BackgroundInfo.prototype.Result = $util.emptyArray;

        /**
         * JGYF_BackgroundInfo WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_JGYF.JGYF_BackgroundInfo
         * @instance
         */
        JGYF_BackgroundInfo.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_BackgroundInfo BlinkPositions.
         * @member {Array.<GameMsg_JGYF.IJGYF_ReelPosition>} BlinkPositions
         * @memberof GameMsg_JGYF.JGYF_BackgroundInfo
         * @instance
         */
        JGYF_BackgroundInfo.prototype.BlinkPositions = $util.emptyArray;

        /**
         * Creates a new JGYF_BackgroundInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_BackgroundInfo
         * @static
         * @param {GameMsg_JGYF.IJGYF_BackgroundInfo=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_BackgroundInfo} JGYF_BackgroundInfo instance
         */
        JGYF_BackgroundInfo.create = function create(properties) {
            return new JGYF_BackgroundInfo(properties);
        };

        /**
         * Encodes the specified JGYF_BackgroundInfo message. Does not implicitly {@link GameMsg_JGYF.JGYF_BackgroundInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_BackgroundInfo
         * @static
         * @param {GameMsg_JGYF.IJGYF_BackgroundInfo} message JGYF_BackgroundInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_BackgroundInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Result != null && message.Result.length)
                for (var i = 0; i < message.Result.length; ++i)
                    $root.GameMsg_JGYF.JGYF_BackgroundUnit.encode(message.Result[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.WinMoney != null && Object.hasOwnProperty.call(message, "WinMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.WinMoney);
            if (message.BlinkPositions != null && message.BlinkPositions.length)
                for (var i = 0; i < message.BlinkPositions.length; ++i)
                    $root.GameMsg_JGYF.JGYF_ReelPosition.encode(message.BlinkPositions[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_BackgroundInfo message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_BackgroundInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_BackgroundInfo
         * @static
         * @param {GameMsg_JGYF.IJGYF_BackgroundInfo} message JGYF_BackgroundInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_BackgroundInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_BackgroundInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_BackgroundInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_BackgroundInfo} JGYF_BackgroundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_BackgroundInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_BackgroundInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Result && message.Result.length))
                        message.Result = [];
                    message.Result.push($root.GameMsg_JGYF.JGYF_BackgroundUnit.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.WinMoney = reader.int64();
                    break;
                case 3:
                    if (!(message.BlinkPositions && message.BlinkPositions.length))
                        message.BlinkPositions = [];
                    message.BlinkPositions.push($root.GameMsg_JGYF.JGYF_ReelPosition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_BackgroundInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_BackgroundInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_BackgroundInfo} JGYF_BackgroundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_BackgroundInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_BackgroundInfo message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_BackgroundInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_BackgroundInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Result != null && message.hasOwnProperty("Result")) {
                if (!Array.isArray(message.Result))
                    return "Result: array expected";
                for (var i = 0; i < message.Result.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_BackgroundUnit.verify(message.Result[i]);
                    if (error)
                        return "Result." + error;
                }
            }
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                    return "WinMoney: integer|Long expected";
            if (message.BlinkPositions != null && message.hasOwnProperty("BlinkPositions")) {
                if (!Array.isArray(message.BlinkPositions))
                    return "BlinkPositions: array expected";
                for (var i = 0; i < message.BlinkPositions.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_ReelPosition.verify(message.BlinkPositions[i]);
                    if (error)
                        return "BlinkPositions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JGYF_BackgroundInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_BackgroundInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_BackgroundInfo} JGYF_BackgroundInfo
         */
        JGYF_BackgroundInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_BackgroundInfo)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_BackgroundInfo();
            if (object.Result) {
                if (!Array.isArray(object.Result))
                    throw TypeError(".GameMsg_JGYF.JGYF_BackgroundInfo.Result: array expected");
                message.Result = [];
                for (var i = 0; i < object.Result.length; ++i) {
                    if (typeof object.Result[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_BackgroundInfo.Result: object expected");
                    message.Result[i] = $root.GameMsg_JGYF.JGYF_BackgroundUnit.fromObject(object.Result[i]);
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
            if (object.BlinkPositions) {
                if (!Array.isArray(object.BlinkPositions))
                    throw TypeError(".GameMsg_JGYF.JGYF_BackgroundInfo.BlinkPositions: array expected");
                message.BlinkPositions = [];
                for (var i = 0; i < object.BlinkPositions.length; ++i) {
                    if (typeof object.BlinkPositions[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_BackgroundInfo.BlinkPositions: object expected");
                    message.BlinkPositions[i] = $root.GameMsg_JGYF.JGYF_ReelPosition.fromObject(object.BlinkPositions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_BackgroundInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_BackgroundInfo
         * @static
         * @param {GameMsg_JGYF.JGYF_BackgroundInfo} message JGYF_BackgroundInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_BackgroundInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Result = [];
                object.BlinkPositions = [];
            }
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinMoney = options.longs === String ? "0" : 0;
            if (message.Result && message.Result.length) {
                object.Result = [];
                for (var j = 0; j < message.Result.length; ++j)
                    object.Result[j] = $root.GameMsg_JGYF.JGYF_BackgroundUnit.toObject(message.Result[j], options);
            }
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (typeof message.WinMoney === "number")
                    object.WinMoney = options.longs === String ? String(message.WinMoney) : message.WinMoney;
                else
                    object.WinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.WinMoney) : options.longs === Number ? new $util.LongBits(message.WinMoney.low >>> 0, message.WinMoney.high >>> 0).toNumber() : message.WinMoney;
            if (message.BlinkPositions && message.BlinkPositions.length) {
                object.BlinkPositions = [];
                for (var j = 0; j < message.BlinkPositions.length; ++j)
                    object.BlinkPositions[j] = $root.GameMsg_JGYF.JGYF_ReelPosition.toObject(message.BlinkPositions[j], options);
            }
            return object;
        };

        /**
         * Converts this JGYF_BackgroundInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_BackgroundInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_BackgroundInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_BackgroundInfo;
    })();

    GameMsg_JGYF.JGYF_BackgroundUnit = (function() {

        /**
         * Properties of a JGYF_BackgroundUnit.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_BackgroundUnit
         * @property {GameMsg_JGYF.IJGYF_ReelPosition|null} [Position] JGYF_BackgroundUnit Position
         * @property {string|null} [Type] JGYF_BackgroundUnit Type
         */

        /**
         * Constructs a new JGYF_BackgroundUnit.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_BackgroundUnit.
         * @implements IJGYF_BackgroundUnit
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_BackgroundUnit=} [properties] Properties to set
         */
        function JGYF_BackgroundUnit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_BackgroundUnit Position.
         * @member {GameMsg_JGYF.IJGYF_ReelPosition|null|undefined} Position
         * @memberof GameMsg_JGYF.JGYF_BackgroundUnit
         * @instance
         */
        JGYF_BackgroundUnit.prototype.Position = null;

        /**
         * JGYF_BackgroundUnit Type.
         * @member {string} Type
         * @memberof GameMsg_JGYF.JGYF_BackgroundUnit
         * @instance
         */
        JGYF_BackgroundUnit.prototype.Type = "";

        /**
         * Creates a new JGYF_BackgroundUnit instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_BackgroundUnit
         * @static
         * @param {GameMsg_JGYF.IJGYF_BackgroundUnit=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_BackgroundUnit} JGYF_BackgroundUnit instance
         */
        JGYF_BackgroundUnit.create = function create(properties) {
            return new JGYF_BackgroundUnit(properties);
        };

        /**
         * Encodes the specified JGYF_BackgroundUnit message. Does not implicitly {@link GameMsg_JGYF.JGYF_BackgroundUnit.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_BackgroundUnit
         * @static
         * @param {GameMsg_JGYF.IJGYF_BackgroundUnit} message JGYF_BackgroundUnit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_BackgroundUnit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Position != null && Object.hasOwnProperty.call(message, "Position"))
                $root.GameMsg_JGYF.JGYF_ReelPosition.encode(message.Position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Type);
            return writer;
        };

        /**
         * Encodes the specified JGYF_BackgroundUnit message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_BackgroundUnit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_BackgroundUnit
         * @static
         * @param {GameMsg_JGYF.IJGYF_BackgroundUnit} message JGYF_BackgroundUnit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_BackgroundUnit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_BackgroundUnit message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_BackgroundUnit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_BackgroundUnit} JGYF_BackgroundUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_BackgroundUnit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_BackgroundUnit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_BackgroundUnit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_BackgroundUnit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_BackgroundUnit} JGYF_BackgroundUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_BackgroundUnit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_BackgroundUnit message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_BackgroundUnit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_BackgroundUnit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Position != null && message.hasOwnProperty("Position")) {
                var error = $root.GameMsg_JGYF.JGYF_ReelPosition.verify(message.Position);
                if (error)
                    return "Position." + error;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            return null;
        };

        /**
         * Creates a JGYF_BackgroundUnit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_BackgroundUnit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_BackgroundUnit} JGYF_BackgroundUnit
         */
        JGYF_BackgroundUnit.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_BackgroundUnit)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_BackgroundUnit();
            if (object.Position != null) {
                if (typeof object.Position !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_BackgroundUnit.Position: object expected");
                message.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.fromObject(object.Position);
            }
            if (object.Type != null)
                message.Type = String(object.Type);
            return message;
        };

        /**
         * Creates a plain object from a JGYF_BackgroundUnit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_BackgroundUnit
         * @static
         * @param {GameMsg_JGYF.JGYF_BackgroundUnit} message JGYF_BackgroundUnit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_BackgroundUnit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Position = null;
                object.Type = "";
            }
            if (message.Position != null && message.hasOwnProperty("Position"))
                object.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.toObject(message.Position, options);
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            return object;
        };

        /**
         * Converts this JGYF_BackgroundUnit to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_BackgroundUnit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_BackgroundUnit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_BackgroundUnit;
    })();

    GameMsg_JGYF.JGYF_Symbol = (function() {

        /**
         * Properties of a JGYF_Symbol.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_Symbol
         * @property {number|null} [SymbolID] JGYF_Symbol SymbolID
         * @property {string|null} [SymbolName] JGYF_Symbol SymbolName
         * @property {GameMsg_JGYF.IJGYF_ReelPosition|null} [Position] JGYF_Symbol Position
         */

        /**
         * Constructs a new JGYF_Symbol.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_Symbol.
         * @implements IJGYF_Symbol
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_Symbol=} [properties] Properties to set
         */
        function JGYF_Symbol(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_Symbol SymbolID.
         * @member {number} SymbolID
         * @memberof GameMsg_JGYF.JGYF_Symbol
         * @instance
         */
        JGYF_Symbol.prototype.SymbolID = 0;

        /**
         * JGYF_Symbol SymbolName.
         * @member {string} SymbolName
         * @memberof GameMsg_JGYF.JGYF_Symbol
         * @instance
         */
        JGYF_Symbol.prototype.SymbolName = "";

        /**
         * JGYF_Symbol Position.
         * @member {GameMsg_JGYF.IJGYF_ReelPosition|null|undefined} Position
         * @memberof GameMsg_JGYF.JGYF_Symbol
         * @instance
         */
        JGYF_Symbol.prototype.Position = null;

        /**
         * Creates a new JGYF_Symbol instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_Symbol
         * @static
         * @param {GameMsg_JGYF.IJGYF_Symbol=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_Symbol} JGYF_Symbol instance
         */
        JGYF_Symbol.create = function create(properties) {
            return new JGYF_Symbol(properties);
        };

        /**
         * Encodes the specified JGYF_Symbol message. Does not implicitly {@link GameMsg_JGYF.JGYF_Symbol.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_Symbol
         * @static
         * @param {GameMsg_JGYF.IJGYF_Symbol} message JGYF_Symbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_Symbol.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SymbolID != null && Object.hasOwnProperty.call(message, "SymbolID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SymbolID);
            if (message.SymbolName != null && Object.hasOwnProperty.call(message, "SymbolName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.SymbolName);
            if (message.Position != null && Object.hasOwnProperty.call(message, "Position"))
                $root.GameMsg_JGYF.JGYF_ReelPosition.encode(message.Position, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_Symbol message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_Symbol.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_Symbol
         * @static
         * @param {GameMsg_JGYF.IJGYF_Symbol} message JGYF_Symbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_Symbol.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_Symbol message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_Symbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_Symbol} JGYF_Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_Symbol.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_Symbol();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SymbolID = reader.int32();
                    break;
                case 2:
                    message.SymbolName = reader.string();
                    break;
                case 3:
                    message.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_Symbol message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_Symbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_Symbol} JGYF_Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_Symbol.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_Symbol message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_Symbol
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_Symbol.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID"))
                if (!$util.isInteger(message.SymbolID))
                    return "SymbolID: integer expected";
            if (message.SymbolName != null && message.hasOwnProperty("SymbolName"))
                if (!$util.isString(message.SymbolName))
                    return "SymbolName: string expected";
            if (message.Position != null && message.hasOwnProperty("Position")) {
                var error = $root.GameMsg_JGYF.JGYF_ReelPosition.verify(message.Position);
                if (error)
                    return "Position." + error;
            }
            return null;
        };

        /**
         * Creates a JGYF_Symbol message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_Symbol
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_Symbol} JGYF_Symbol
         */
        JGYF_Symbol.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_Symbol)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_Symbol();
            if (object.SymbolID != null)
                message.SymbolID = object.SymbolID | 0;
            if (object.SymbolName != null)
                message.SymbolName = String(object.SymbolName);
            if (object.Position != null) {
                if (typeof object.Position !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_Symbol.Position: object expected");
                message.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.fromObject(object.Position);
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_Symbol message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_Symbol
         * @static
         * @param {GameMsg_JGYF.JGYF_Symbol} message JGYF_Symbol
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_Symbol.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SymbolID = 0;
                object.SymbolName = "";
                object.Position = null;
            }
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID"))
                object.SymbolID = message.SymbolID;
            if (message.SymbolName != null && message.hasOwnProperty("SymbolName"))
                object.SymbolName = message.SymbolName;
            if (message.Position != null && message.hasOwnProperty("Position"))
                object.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.toObject(message.Position, options);
            return object;
        };

        /**
         * Converts this JGYF_Symbol to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_Symbol
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_Symbol.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_Symbol;
    })();

    GameMsg_JGYF.JGYF_PayLine = (function() {

        /**
         * Properties of a JGYF_PayLine.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_PayLine
         * @property {number|null} [PayLineID] JGYF_PayLine PayLineID
         * @property {Array.<GameMsg_JGYF.IJGYF_ReelPosition>|null} [Positions] JGYF_PayLine Positions
         */

        /**
         * Constructs a new JGYF_PayLine.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_PayLine.
         * @implements IJGYF_PayLine
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_PayLine=} [properties] Properties to set
         */
        function JGYF_PayLine(properties) {
            this.Positions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_PayLine PayLineID.
         * @member {number} PayLineID
         * @memberof GameMsg_JGYF.JGYF_PayLine
         * @instance
         */
        JGYF_PayLine.prototype.PayLineID = 0;

        /**
         * JGYF_PayLine Positions.
         * @member {Array.<GameMsg_JGYF.IJGYF_ReelPosition>} Positions
         * @memberof GameMsg_JGYF.JGYF_PayLine
         * @instance
         */
        JGYF_PayLine.prototype.Positions = $util.emptyArray;

        /**
         * Creates a new JGYF_PayLine instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_PayLine
         * @static
         * @param {GameMsg_JGYF.IJGYF_PayLine=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_PayLine} JGYF_PayLine instance
         */
        JGYF_PayLine.create = function create(properties) {
            return new JGYF_PayLine(properties);
        };

        /**
         * Encodes the specified JGYF_PayLine message. Does not implicitly {@link GameMsg_JGYF.JGYF_PayLine.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_PayLine
         * @static
         * @param {GameMsg_JGYF.IJGYF_PayLine} message JGYF_PayLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_PayLine.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PayLineID != null && Object.hasOwnProperty.call(message, "PayLineID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PayLineID);
            if (message.Positions != null && message.Positions.length)
                for (var i = 0; i < message.Positions.length; ++i)
                    $root.GameMsg_JGYF.JGYF_ReelPosition.encode(message.Positions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_PayLine message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_PayLine.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_PayLine
         * @static
         * @param {GameMsg_JGYF.IJGYF_PayLine} message JGYF_PayLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_PayLine.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_PayLine message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_PayLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_PayLine} JGYF_PayLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_PayLine.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_PayLine();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PayLineID = reader.int32();
                    break;
                case 2:
                    if (!(message.Positions && message.Positions.length))
                        message.Positions = [];
                    message.Positions.push($root.GameMsg_JGYF.JGYF_ReelPosition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_PayLine message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_PayLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_PayLine} JGYF_PayLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_PayLine.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_PayLine message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_PayLine
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_PayLine.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PayLineID != null && message.hasOwnProperty("PayLineID"))
                if (!$util.isInteger(message.PayLineID))
                    return "PayLineID: integer expected";
            if (message.Positions != null && message.hasOwnProperty("Positions")) {
                if (!Array.isArray(message.Positions))
                    return "Positions: array expected";
                for (var i = 0; i < message.Positions.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_ReelPosition.verify(message.Positions[i]);
                    if (error)
                        return "Positions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JGYF_PayLine message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_PayLine
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_PayLine} JGYF_PayLine
         */
        JGYF_PayLine.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_PayLine)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_PayLine();
            if (object.PayLineID != null)
                message.PayLineID = object.PayLineID | 0;
            if (object.Positions) {
                if (!Array.isArray(object.Positions))
                    throw TypeError(".GameMsg_JGYF.JGYF_PayLine.Positions: array expected");
                message.Positions = [];
                for (var i = 0; i < object.Positions.length; ++i) {
                    if (typeof object.Positions[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_PayLine.Positions: object expected");
                    message.Positions[i] = $root.GameMsg_JGYF.JGYF_ReelPosition.fromObject(object.Positions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_PayLine message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_PayLine
         * @static
         * @param {GameMsg_JGYF.JGYF_PayLine} message JGYF_PayLine
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_PayLine.toObject = function toObject(message, options) {
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
                    object.Positions[j] = $root.GameMsg_JGYF.JGYF_ReelPosition.toObject(message.Positions[j], options);
            }
            return object;
        };

        /**
         * Converts this JGYF_PayLine to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_PayLine
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_PayLine.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_PayLine;
    })();

    GameMsg_JGYF.JGYF_PayGroup = (function() {

        /**
         * Properties of a JGYF_PayGroup.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_PayGroup
         * @property {GameMsg_JGYF.IJGYF_PayLine|null} [PayLines] JGYF_PayGroup PayLines
         * @property {number|Long|null} [WinMoney] JGYF_PayGroup WinMoney
         * @property {string|null} [LinkType] JGYF_PayGroup LinkType
         * @property {number|null} [Count] JGYF_PayGroup Count
         * @property {Array.<GameMsg_JGYF.IJGYF_ReelPosition>|null} [BlinkPositions] JGYF_PayGroup BlinkPositions
         * @property {number|null} [Way] JGYF_PayGroup Way
         * @property {number|null} [Multi] JGYF_PayGroup Multi
         */

        /**
         * Constructs a new JGYF_PayGroup.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_PayGroup.
         * @implements IJGYF_PayGroup
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_PayGroup=} [properties] Properties to set
         */
        function JGYF_PayGroup(properties) {
            this.BlinkPositions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_PayGroup PayLines.
         * @member {GameMsg_JGYF.IJGYF_PayLine|null|undefined} PayLines
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @instance
         */
        JGYF_PayGroup.prototype.PayLines = null;

        /**
         * JGYF_PayGroup WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @instance
         */
        JGYF_PayGroup.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_PayGroup LinkType.
         * @member {string} LinkType
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @instance
         */
        JGYF_PayGroup.prototype.LinkType = "";

        /**
         * JGYF_PayGroup Count.
         * @member {number} Count
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @instance
         */
        JGYF_PayGroup.prototype.Count = 0;

        /**
         * JGYF_PayGroup BlinkPositions.
         * @member {Array.<GameMsg_JGYF.IJGYF_ReelPosition>} BlinkPositions
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @instance
         */
        JGYF_PayGroup.prototype.BlinkPositions = $util.emptyArray;

        /**
         * JGYF_PayGroup Way.
         * @member {number} Way
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @instance
         */
        JGYF_PayGroup.prototype.Way = 0;

        /**
         * JGYF_PayGroup Multi.
         * @member {number} Multi
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @instance
         */
        JGYF_PayGroup.prototype.Multi = 0;

        /**
         * Creates a new JGYF_PayGroup instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @static
         * @param {GameMsg_JGYF.IJGYF_PayGroup=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_PayGroup} JGYF_PayGroup instance
         */
        JGYF_PayGroup.create = function create(properties) {
            return new JGYF_PayGroup(properties);
        };

        /**
         * Encodes the specified JGYF_PayGroup message. Does not implicitly {@link GameMsg_JGYF.JGYF_PayGroup.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @static
         * @param {GameMsg_JGYF.IJGYF_PayGroup} message JGYF_PayGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_PayGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PayLines != null && Object.hasOwnProperty.call(message, "PayLines"))
                $root.GameMsg_JGYF.JGYF_PayLine.encode(message.PayLines, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.WinMoney != null && Object.hasOwnProperty.call(message, "WinMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.WinMoney);
            if (message.LinkType != null && Object.hasOwnProperty.call(message, "LinkType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.LinkType);
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Count);
            if (message.BlinkPositions != null && message.BlinkPositions.length)
                for (var i = 0; i < message.BlinkPositions.length; ++i)
                    $root.GameMsg_JGYF.JGYF_ReelPosition.encode(message.BlinkPositions[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.Way != null && Object.hasOwnProperty.call(message, "Way"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Way);
            if (message.Multi != null && Object.hasOwnProperty.call(message, "Multi"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Multi);
            return writer;
        };

        /**
         * Encodes the specified JGYF_PayGroup message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_PayGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @static
         * @param {GameMsg_JGYF.IJGYF_PayGroup} message JGYF_PayGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_PayGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_PayGroup message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_PayGroup} JGYF_PayGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_PayGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_PayGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PayLines = $root.GameMsg_JGYF.JGYF_PayLine.decode(reader, reader.uint32());
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
                    message.BlinkPositions.push($root.GameMsg_JGYF.JGYF_ReelPosition.decode(reader, reader.uint32()));
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
         * Decodes a JGYF_PayGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_PayGroup} JGYF_PayGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_PayGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_PayGroup message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_PayGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PayLines != null && message.hasOwnProperty("PayLines")) {
                var error = $root.GameMsg_JGYF.JGYF_PayLine.verify(message.PayLines);
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
                    var error = $root.GameMsg_JGYF.JGYF_ReelPosition.verify(message.BlinkPositions[i]);
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
         * Creates a JGYF_PayGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_PayGroup} JGYF_PayGroup
         */
        JGYF_PayGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_PayGroup)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_PayGroup();
            if (object.PayLines != null) {
                if (typeof object.PayLines !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_PayGroup.PayLines: object expected");
                message.PayLines = $root.GameMsg_JGYF.JGYF_PayLine.fromObject(object.PayLines);
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
                    throw TypeError(".GameMsg_JGYF.JGYF_PayGroup.BlinkPositions: array expected");
                message.BlinkPositions = [];
                for (var i = 0; i < object.BlinkPositions.length; ++i) {
                    if (typeof object.BlinkPositions[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_PayGroup.BlinkPositions: object expected");
                    message.BlinkPositions[i] = $root.GameMsg_JGYF.JGYF_ReelPosition.fromObject(object.BlinkPositions[i]);
                }
            }
            if (object.Way != null)
                message.Way = object.Way | 0;
            if (object.Multi != null)
                message.Multi = object.Multi | 0;
            return message;
        };

        /**
         * Creates a plain object from a JGYF_PayGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @static
         * @param {GameMsg_JGYF.JGYF_PayGroup} message JGYF_PayGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_PayGroup.toObject = function toObject(message, options) {
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
                object.PayLines = $root.GameMsg_JGYF.JGYF_PayLine.toObject(message.PayLines, options);
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
                    object.BlinkPositions[j] = $root.GameMsg_JGYF.JGYF_ReelPosition.toObject(message.BlinkPositions[j], options);
            }
            if (message.Way != null && message.hasOwnProperty("Way"))
                object.Way = message.Way;
            if (message.Multi != null && message.hasOwnProperty("Multi"))
                object.Multi = message.Multi;
            return object;
        };

        /**
         * Converts this JGYF_PayGroup to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_PayGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_PayGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_PayGroup;
    })();

    GameMsg_JGYF.JGYF_SymbolPayTable = (function() {

        /**
         * Properties of a JGYF_SymbolPayTable.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_SymbolPayTable
         * @property {GameMsg_JGYF.IJGYF_Symbol|null} [Symbol] JGYF_SymbolPayTable Symbol
         * @property {number|null} [Count] JGYF_SymbolPayTable Count
         * @property {string|null} [Type] JGYF_SymbolPayTable Type
         * @property {number|null} [Payout] JGYF_SymbolPayTable Payout
         * @property {string|null} [Title] JGYF_SymbolPayTable Title
         * @property {string|null} [Desc] JGYF_SymbolPayTable Desc
         */

        /**
         * Constructs a new JGYF_SymbolPayTable.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_SymbolPayTable.
         * @implements IJGYF_SymbolPayTable
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_SymbolPayTable=} [properties] Properties to set
         */
        function JGYF_SymbolPayTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_SymbolPayTable Symbol.
         * @member {GameMsg_JGYF.IJGYF_Symbol|null|undefined} Symbol
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @instance
         */
        JGYF_SymbolPayTable.prototype.Symbol = null;

        /**
         * JGYF_SymbolPayTable Count.
         * @member {number} Count
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @instance
         */
        JGYF_SymbolPayTable.prototype.Count = 0;

        /**
         * JGYF_SymbolPayTable Type.
         * @member {string} Type
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @instance
         */
        JGYF_SymbolPayTable.prototype.Type = "";

        /**
         * JGYF_SymbolPayTable Payout.
         * @member {number} Payout
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @instance
         */
        JGYF_SymbolPayTable.prototype.Payout = 0;

        /**
         * JGYF_SymbolPayTable Title.
         * @member {string} Title
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @instance
         */
        JGYF_SymbolPayTable.prototype.Title = "";

        /**
         * JGYF_SymbolPayTable Desc.
         * @member {string} Desc
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @instance
         */
        JGYF_SymbolPayTable.prototype.Desc = "";

        /**
         * Creates a new JGYF_SymbolPayTable instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @static
         * @param {GameMsg_JGYF.IJGYF_SymbolPayTable=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_SymbolPayTable} JGYF_SymbolPayTable instance
         */
        JGYF_SymbolPayTable.create = function create(properties) {
            return new JGYF_SymbolPayTable(properties);
        };

        /**
         * Encodes the specified JGYF_SymbolPayTable message. Does not implicitly {@link GameMsg_JGYF.JGYF_SymbolPayTable.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @static
         * @param {GameMsg_JGYF.IJGYF_SymbolPayTable} message JGYF_SymbolPayTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_SymbolPayTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Symbol != null && Object.hasOwnProperty.call(message, "Symbol"))
                $root.GameMsg_JGYF.JGYF_Symbol.encode(message.Symbol, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Type);
            if (message.Payout != null && Object.hasOwnProperty.call(message, "Payout"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Payout);
            if (message.Title != null && Object.hasOwnProperty.call(message, "Title"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Title);
            if (message.Desc != null && Object.hasOwnProperty.call(message, "Desc"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Desc);
            return writer;
        };

        /**
         * Encodes the specified JGYF_SymbolPayTable message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_SymbolPayTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @static
         * @param {GameMsg_JGYF.IJGYF_SymbolPayTable} message JGYF_SymbolPayTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_SymbolPayTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_SymbolPayTable message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_SymbolPayTable} JGYF_SymbolPayTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_SymbolPayTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_SymbolPayTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Symbol = $root.GameMsg_JGYF.JGYF_Symbol.decode(reader, reader.uint32());
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
         * Decodes a JGYF_SymbolPayTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_SymbolPayTable} JGYF_SymbolPayTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_SymbolPayTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_SymbolPayTable message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_SymbolPayTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Symbol != null && message.hasOwnProperty("Symbol")) {
                var error = $root.GameMsg_JGYF.JGYF_Symbol.verify(message.Symbol);
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
         * Creates a JGYF_SymbolPayTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_SymbolPayTable} JGYF_SymbolPayTable
         */
        JGYF_SymbolPayTable.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_SymbolPayTable)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_SymbolPayTable();
            if (object.Symbol != null) {
                if (typeof object.Symbol !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_SymbolPayTable.Symbol: object expected");
                message.Symbol = $root.GameMsg_JGYF.JGYF_Symbol.fromObject(object.Symbol);
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
         * Creates a plain object from a JGYF_SymbolPayTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @static
         * @param {GameMsg_JGYF.JGYF_SymbolPayTable} message JGYF_SymbolPayTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_SymbolPayTable.toObject = function toObject(message, options) {
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
                object.Symbol = $root.GameMsg_JGYF.JGYF_Symbol.toObject(message.Symbol, options);
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
         * Converts this JGYF_SymbolPayTable to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_SymbolPayTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_SymbolPayTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_SymbolPayTable;
    })();

    GameMsg_JGYF.JGYF_HistoryLogData = (function() {

        /**
         * Properties of a JGYF_HistoryLogData.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_HistoryLogData
         * @property {number|null} [UserID] JGYF_HistoryLogData UserID
         * @property {number|null} [GameID] JGYF_HistoryLogData GameID
         * @property {number|null} [ServerID] JGYF_HistoryLogData ServerID
         * @property {number|Long|null} [CurrentAmount] JGYF_HistoryLogData CurrentAmount
         * @property {number|Long|null} [BetMoney] JGYF_HistoryLogData BetMoney
         * @property {number|Long|null} [WinMoney] JGYF_HistoryLogData WinMoney
         * @property {number|Long|null} [FinalScore] JGYF_HistoryLogData FinalScore
         * @property {number|null} [GameType] JGYF_HistoryLogData GameType
         * @property {number|null} [LogType] JGYF_HistoryLogData LogType
         * @property {string|null} [GameData] JGYF_HistoryLogData GameData
         * @property {number|Long|null} [CurrentCoupon] JGYF_HistoryLogData CurrentCoupon
         * @property {number|Long|null} [BetCoupon] JGYF_HistoryLogData BetCoupon
         * @property {number|Long|null} [FinalCoupon] JGYF_HistoryLogData FinalCoupon
         */

        /**
         * Constructs a new JGYF_HistoryLogData.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_HistoryLogData.
         * @implements IJGYF_HistoryLogData
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_HistoryLogData=} [properties] Properties to set
         */
        function JGYF_HistoryLogData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_HistoryLogData UserID.
         * @member {number} UserID
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @instance
         */
        JGYF_HistoryLogData.prototype.UserID = 0;

        /**
         * JGYF_HistoryLogData GameID.
         * @member {number} GameID
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @instance
         */
        JGYF_HistoryLogData.prototype.GameID = 0;

        /**
         * JGYF_HistoryLogData ServerID.
         * @member {number} ServerID
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @instance
         */
        JGYF_HistoryLogData.prototype.ServerID = 0;

        /**
         * JGYF_HistoryLogData CurrentAmount.
         * @member {number|Long} CurrentAmount
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @instance
         */
        JGYF_HistoryLogData.prototype.CurrentAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_HistoryLogData BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @instance
         */
        JGYF_HistoryLogData.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_HistoryLogData WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @instance
         */
        JGYF_HistoryLogData.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_HistoryLogData FinalScore.
         * @member {number|Long} FinalScore
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @instance
         */
        JGYF_HistoryLogData.prototype.FinalScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_HistoryLogData GameType.
         * @member {number} GameType
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @instance
         */
        JGYF_HistoryLogData.prototype.GameType = 0;

        /**
         * JGYF_HistoryLogData LogType.
         * @member {number} LogType
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @instance
         */
        JGYF_HistoryLogData.prototype.LogType = 0;

        /**
         * JGYF_HistoryLogData GameData.
         * @member {string} GameData
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @instance
         */
        JGYF_HistoryLogData.prototype.GameData = "";

        /**
         * JGYF_HistoryLogData CurrentCoupon.
         * @member {number|Long} CurrentCoupon
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @instance
         */
        JGYF_HistoryLogData.prototype.CurrentCoupon = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_HistoryLogData BetCoupon.
         * @member {number|Long} BetCoupon
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @instance
         */
        JGYF_HistoryLogData.prototype.BetCoupon = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_HistoryLogData FinalCoupon.
         * @member {number|Long} FinalCoupon
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @instance
         */
        JGYF_HistoryLogData.prototype.FinalCoupon = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JGYF_HistoryLogData instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @static
         * @param {GameMsg_JGYF.IJGYF_HistoryLogData=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_HistoryLogData} JGYF_HistoryLogData instance
         */
        JGYF_HistoryLogData.create = function create(properties) {
            return new JGYF_HistoryLogData(properties);
        };

        /**
         * Encodes the specified JGYF_HistoryLogData message. Does not implicitly {@link GameMsg_JGYF.JGYF_HistoryLogData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @static
         * @param {GameMsg_JGYF.IJGYF_HistoryLogData} message JGYF_HistoryLogData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_HistoryLogData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            if (message.ServerID != null && Object.hasOwnProperty.call(message, "ServerID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ServerID);
            if (message.CurrentAmount != null && Object.hasOwnProperty.call(message, "CurrentAmount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.CurrentAmount);
            if (message.BetMoney != null && Object.hasOwnProperty.call(message, "BetMoney"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.BetMoney);
            if (message.WinMoney != null && Object.hasOwnProperty.call(message, "WinMoney"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.WinMoney);
            if (message.FinalScore != null && Object.hasOwnProperty.call(message, "FinalScore"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.FinalScore);
            if (message.GameType != null && Object.hasOwnProperty.call(message, "GameType"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.GameType);
            if (message.LogType != null && Object.hasOwnProperty.call(message, "LogType"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.LogType);
            if (message.GameData != null && Object.hasOwnProperty.call(message, "GameData"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.GameData);
            if (message.CurrentCoupon != null && Object.hasOwnProperty.call(message, "CurrentCoupon"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.CurrentCoupon);
            if (message.BetCoupon != null && Object.hasOwnProperty.call(message, "BetCoupon"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.BetCoupon);
            if (message.FinalCoupon != null && Object.hasOwnProperty.call(message, "FinalCoupon"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.FinalCoupon);
            return writer;
        };

        /**
         * Encodes the specified JGYF_HistoryLogData message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_HistoryLogData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @static
         * @param {GameMsg_JGYF.IJGYF_HistoryLogData} message JGYF_HistoryLogData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_HistoryLogData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_HistoryLogData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_HistoryLogData} JGYF_HistoryLogData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_HistoryLogData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_HistoryLogData();
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
         * Decodes a JGYF_HistoryLogData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_HistoryLogData} JGYF_HistoryLogData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_HistoryLogData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_HistoryLogData message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_HistoryLogData.verify = function verify(message) {
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
         * Creates a JGYF_HistoryLogData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_HistoryLogData} JGYF_HistoryLogData
         */
        JGYF_HistoryLogData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_HistoryLogData)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_HistoryLogData();
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
         * Creates a plain object from a JGYF_HistoryLogData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @static
         * @param {GameMsg_JGYF.JGYF_HistoryLogData} message JGYF_HistoryLogData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_HistoryLogData.toObject = function toObject(message, options) {
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
         * Converts this JGYF_HistoryLogData to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_HistoryLogData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_HistoryLogData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_HistoryLogData;
    })();

    GameMsg_JGYF.JGYF_LoadHistoryData = (function() {

        /**
         * Properties of a JGYF_LoadHistoryData.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_LoadHistoryData
         * @property {number|null} [UserID] JGYF_LoadHistoryData UserID
         * @property {number|null} [GameID] JGYF_LoadHistoryData GameID
         * @property {string|null} [StartTime] JGYF_LoadHistoryData StartTime
         * @property {string|null} [EndTime] JGYF_LoadHistoryData EndTime
         * @property {number|null} [PageIndex] JGYF_LoadHistoryData PageIndex
         * @property {number|null} [PageSize] JGYF_LoadHistoryData PageSize
         */

        /**
         * Constructs a new JGYF_LoadHistoryData.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_LoadHistoryData.
         * @implements IJGYF_LoadHistoryData
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_LoadHistoryData=} [properties] Properties to set
         */
        function JGYF_LoadHistoryData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_LoadHistoryData UserID.
         * @member {number} UserID
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @instance
         */
        JGYF_LoadHistoryData.prototype.UserID = 0;

        /**
         * JGYF_LoadHistoryData GameID.
         * @member {number} GameID
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @instance
         */
        JGYF_LoadHistoryData.prototype.GameID = 0;

        /**
         * JGYF_LoadHistoryData StartTime.
         * @member {string} StartTime
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @instance
         */
        JGYF_LoadHistoryData.prototype.StartTime = "";

        /**
         * JGYF_LoadHistoryData EndTime.
         * @member {string} EndTime
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @instance
         */
        JGYF_LoadHistoryData.prototype.EndTime = "";

        /**
         * JGYF_LoadHistoryData PageIndex.
         * @member {number} PageIndex
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @instance
         */
        JGYF_LoadHistoryData.prototype.PageIndex = 0;

        /**
         * JGYF_LoadHistoryData PageSize.
         * @member {number} PageSize
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @instance
         */
        JGYF_LoadHistoryData.prototype.PageSize = 0;

        /**
         * Creates a new JGYF_LoadHistoryData instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @static
         * @param {GameMsg_JGYF.IJGYF_LoadHistoryData=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_LoadHistoryData} JGYF_LoadHistoryData instance
         */
        JGYF_LoadHistoryData.create = function create(properties) {
            return new JGYF_LoadHistoryData(properties);
        };

        /**
         * Encodes the specified JGYF_LoadHistoryData message. Does not implicitly {@link GameMsg_JGYF.JGYF_LoadHistoryData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @static
         * @param {GameMsg_JGYF.IJGYF_LoadHistoryData} message JGYF_LoadHistoryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_LoadHistoryData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            if (message.StartTime != null && Object.hasOwnProperty.call(message, "StartTime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.StartTime);
            if (message.EndTime != null && Object.hasOwnProperty.call(message, "EndTime"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.EndTime);
            if (message.PageIndex != null && Object.hasOwnProperty.call(message, "PageIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.PageIndex);
            if (message.PageSize != null && Object.hasOwnProperty.call(message, "PageSize"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.PageSize);
            return writer;
        };

        /**
         * Encodes the specified JGYF_LoadHistoryData message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_LoadHistoryData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @static
         * @param {GameMsg_JGYF.IJGYF_LoadHistoryData} message JGYF_LoadHistoryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_LoadHistoryData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_LoadHistoryData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_LoadHistoryData} JGYF_LoadHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_LoadHistoryData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_LoadHistoryData();
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
         * Decodes a JGYF_LoadHistoryData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_LoadHistoryData} JGYF_LoadHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_LoadHistoryData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_LoadHistoryData message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_LoadHistoryData.verify = function verify(message) {
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
         * Creates a JGYF_LoadHistoryData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_LoadHistoryData} JGYF_LoadHistoryData
         */
        JGYF_LoadHistoryData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_LoadHistoryData)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_LoadHistoryData();
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
         * Creates a plain object from a JGYF_LoadHistoryData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @static
         * @param {GameMsg_JGYF.JGYF_LoadHistoryData} message JGYF_LoadHistoryData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_LoadHistoryData.toObject = function toObject(message, options) {
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
         * Converts this JGYF_LoadHistoryData to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_LoadHistoryData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_LoadHistoryData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_LoadHistoryData;
    })();

    GameMsg_JGYF.JGYF_SendHistoryData = (function() {

        /**
         * Properties of a JGYF_SendHistoryData.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_SendHistoryData
         * @property {number|null} [UserID] JGYF_SendHistoryData UserID
         * @property {number|null} [GameID] JGYF_SendHistoryData GameID
         * @property {number|null} [PageCount] JGYF_SendHistoryData PageCount
         * @property {Array.<GameMsg_JGYF.IJGYF_SendHistoryLog>|null} [SendHistoryLog] JGYF_SendHistoryData SendHistoryLog
         */

        /**
         * Constructs a new JGYF_SendHistoryData.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_SendHistoryData.
         * @implements IJGYF_SendHistoryData
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_SendHistoryData=} [properties] Properties to set
         */
        function JGYF_SendHistoryData(properties) {
            this.SendHistoryLog = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_SendHistoryData UserID.
         * @member {number} UserID
         * @memberof GameMsg_JGYF.JGYF_SendHistoryData
         * @instance
         */
        JGYF_SendHistoryData.prototype.UserID = 0;

        /**
         * JGYF_SendHistoryData GameID.
         * @member {number} GameID
         * @memberof GameMsg_JGYF.JGYF_SendHistoryData
         * @instance
         */
        JGYF_SendHistoryData.prototype.GameID = 0;

        /**
         * JGYF_SendHistoryData PageCount.
         * @member {number} PageCount
         * @memberof GameMsg_JGYF.JGYF_SendHistoryData
         * @instance
         */
        JGYF_SendHistoryData.prototype.PageCount = 0;

        /**
         * JGYF_SendHistoryData SendHistoryLog.
         * @member {Array.<GameMsg_JGYF.IJGYF_SendHistoryLog>} SendHistoryLog
         * @memberof GameMsg_JGYF.JGYF_SendHistoryData
         * @instance
         */
        JGYF_SendHistoryData.prototype.SendHistoryLog = $util.emptyArray;

        /**
         * Creates a new JGYF_SendHistoryData instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_SendHistoryData
         * @static
         * @param {GameMsg_JGYF.IJGYF_SendHistoryData=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_SendHistoryData} JGYF_SendHistoryData instance
         */
        JGYF_SendHistoryData.create = function create(properties) {
            return new JGYF_SendHistoryData(properties);
        };

        /**
         * Encodes the specified JGYF_SendHistoryData message. Does not implicitly {@link GameMsg_JGYF.JGYF_SendHistoryData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_SendHistoryData
         * @static
         * @param {GameMsg_JGYF.IJGYF_SendHistoryData} message JGYF_SendHistoryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_SendHistoryData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            if (message.PageCount != null && Object.hasOwnProperty.call(message, "PageCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.PageCount);
            if (message.SendHistoryLog != null && message.SendHistoryLog.length)
                for (var i = 0; i < message.SendHistoryLog.length; ++i)
                    $root.GameMsg_JGYF.JGYF_SendHistoryLog.encode(message.SendHistoryLog[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_SendHistoryData message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_SendHistoryData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_SendHistoryData
         * @static
         * @param {GameMsg_JGYF.IJGYF_SendHistoryData} message JGYF_SendHistoryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_SendHistoryData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_SendHistoryData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_SendHistoryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_SendHistoryData} JGYF_SendHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_SendHistoryData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_SendHistoryData();
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
                    message.SendHistoryLog.push($root.GameMsg_JGYF.JGYF_SendHistoryLog.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_SendHistoryData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_SendHistoryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_SendHistoryData} JGYF_SendHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_SendHistoryData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_SendHistoryData message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_SendHistoryData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_SendHistoryData.verify = function verify(message) {
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
                    var error = $root.GameMsg_JGYF.JGYF_SendHistoryLog.verify(message.SendHistoryLog[i]);
                    if (error)
                        return "SendHistoryLog." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JGYF_SendHistoryData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_SendHistoryData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_SendHistoryData} JGYF_SendHistoryData
         */
        JGYF_SendHistoryData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_SendHistoryData)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_SendHistoryData();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.PageCount != null)
                message.PageCount = object.PageCount | 0;
            if (object.SendHistoryLog) {
                if (!Array.isArray(object.SendHistoryLog))
                    throw TypeError(".GameMsg_JGYF.JGYF_SendHistoryData.SendHistoryLog: array expected");
                message.SendHistoryLog = [];
                for (var i = 0; i < object.SendHistoryLog.length; ++i) {
                    if (typeof object.SendHistoryLog[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_SendHistoryData.SendHistoryLog: object expected");
                    message.SendHistoryLog[i] = $root.GameMsg_JGYF.JGYF_SendHistoryLog.fromObject(object.SendHistoryLog[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_SendHistoryData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_SendHistoryData
         * @static
         * @param {GameMsg_JGYF.JGYF_SendHistoryData} message JGYF_SendHistoryData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_SendHistoryData.toObject = function toObject(message, options) {
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
                    object.SendHistoryLog[j] = $root.GameMsg_JGYF.JGYF_SendHistoryLog.toObject(message.SendHistoryLog[j], options);
            }
            return object;
        };

        /**
         * Converts this JGYF_SendHistoryData to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_SendHistoryData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_SendHistoryData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_SendHistoryData;
    })();

    GameMsg_JGYF.JGYF_SendHistoryLog = (function() {

        /**
         * Properties of a JGYF_SendHistoryLog.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_SendHistoryLog
         * @property {number|null} [RowNum] JGYF_SendHistoryLog RowNum
         * @property {string|null} [CreateTime] JGYF_SendHistoryLog CreateTime
         * @property {number|Long|null} [OrderID] JGYF_SendHistoryLog OrderID
         * @property {number|Long|null} [BetMoney] JGYF_SendHistoryLog BetMoney
         * @property {number|Long|null} [Profit] JGYF_SendHistoryLog Profit
         */

        /**
         * Constructs a new JGYF_SendHistoryLog.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_SendHistoryLog.
         * @implements IJGYF_SendHistoryLog
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_SendHistoryLog=} [properties] Properties to set
         */
        function JGYF_SendHistoryLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_SendHistoryLog RowNum.
         * @member {number} RowNum
         * @memberof GameMsg_JGYF.JGYF_SendHistoryLog
         * @instance
         */
        JGYF_SendHistoryLog.prototype.RowNum = 0;

        /**
         * JGYF_SendHistoryLog CreateTime.
         * @member {string} CreateTime
         * @memberof GameMsg_JGYF.JGYF_SendHistoryLog
         * @instance
         */
        JGYF_SendHistoryLog.prototype.CreateTime = "";

        /**
         * JGYF_SendHistoryLog OrderID.
         * @member {number|Long} OrderID
         * @memberof GameMsg_JGYF.JGYF_SendHistoryLog
         * @instance
         */
        JGYF_SendHistoryLog.prototype.OrderID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_SendHistoryLog BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_JGYF.JGYF_SendHistoryLog
         * @instance
         */
        JGYF_SendHistoryLog.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_SendHistoryLog Profit.
         * @member {number|Long} Profit
         * @memberof GameMsg_JGYF.JGYF_SendHistoryLog
         * @instance
         */
        JGYF_SendHistoryLog.prototype.Profit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JGYF_SendHistoryLog instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_SendHistoryLog
         * @static
         * @param {GameMsg_JGYF.IJGYF_SendHistoryLog=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_SendHistoryLog} JGYF_SendHistoryLog instance
         */
        JGYF_SendHistoryLog.create = function create(properties) {
            return new JGYF_SendHistoryLog(properties);
        };

        /**
         * Encodes the specified JGYF_SendHistoryLog message. Does not implicitly {@link GameMsg_JGYF.JGYF_SendHistoryLog.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_SendHistoryLog
         * @static
         * @param {GameMsg_JGYF.IJGYF_SendHistoryLog} message JGYF_SendHistoryLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_SendHistoryLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RowNum != null && Object.hasOwnProperty.call(message, "RowNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RowNum);
            if (message.CreateTime != null && Object.hasOwnProperty.call(message, "CreateTime"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.CreateTime);
            if (message.OrderID != null && Object.hasOwnProperty.call(message, "OrderID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.OrderID);
            if (message.BetMoney != null && Object.hasOwnProperty.call(message, "BetMoney"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.BetMoney);
            if (message.Profit != null && Object.hasOwnProperty.call(message, "Profit"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.Profit);
            return writer;
        };

        /**
         * Encodes the specified JGYF_SendHistoryLog message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_SendHistoryLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_SendHistoryLog
         * @static
         * @param {GameMsg_JGYF.IJGYF_SendHistoryLog} message JGYF_SendHistoryLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_SendHistoryLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_SendHistoryLog message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_SendHistoryLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_SendHistoryLog} JGYF_SendHistoryLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_SendHistoryLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_SendHistoryLog();
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
         * Decodes a JGYF_SendHistoryLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_SendHistoryLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_SendHistoryLog} JGYF_SendHistoryLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_SendHistoryLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_SendHistoryLog message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_SendHistoryLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_SendHistoryLog.verify = function verify(message) {
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
         * Creates a JGYF_SendHistoryLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_SendHistoryLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_SendHistoryLog} JGYF_SendHistoryLog
         */
        JGYF_SendHistoryLog.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_SendHistoryLog)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_SendHistoryLog();
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
         * Creates a plain object from a JGYF_SendHistoryLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_SendHistoryLog
         * @static
         * @param {GameMsg_JGYF.JGYF_SendHistoryLog} message JGYF_SendHistoryLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_SendHistoryLog.toObject = function toObject(message, options) {
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
         * Converts this JGYF_SendHistoryLog to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_SendHistoryLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_SendHistoryLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_SendHistoryLog;
    })();

    GameMsg_JGYF.JGYF_GameLog = (function() {

        /**
         * Properties of a JGYF_GameLog.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_GameLog
         * @property {number|null} [RowNum] JGYF_GameLog RowNum
         * @property {string|null} [CreateTime] JGYF_GameLog CreateTime
         * @property {number|Long|null} [OrderID] JGYF_GameLog OrderID
         * @property {number|Long|null} [BetMoney] JGYF_GameLog BetMoney
         * @property {number|Long|null} [Profit] JGYF_GameLog Profit
         */

        /**
         * Constructs a new JGYF_GameLog.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_GameLog.
         * @implements IJGYF_GameLog
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_GameLog=} [properties] Properties to set
         */
        function JGYF_GameLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_GameLog RowNum.
         * @member {number} RowNum
         * @memberof GameMsg_JGYF.JGYF_GameLog
         * @instance
         */
        JGYF_GameLog.prototype.RowNum = 0;

        /**
         * JGYF_GameLog CreateTime.
         * @member {string} CreateTime
         * @memberof GameMsg_JGYF.JGYF_GameLog
         * @instance
         */
        JGYF_GameLog.prototype.CreateTime = "";

        /**
         * JGYF_GameLog OrderID.
         * @member {number|Long} OrderID
         * @memberof GameMsg_JGYF.JGYF_GameLog
         * @instance
         */
        JGYF_GameLog.prototype.OrderID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_GameLog BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_JGYF.JGYF_GameLog
         * @instance
         */
        JGYF_GameLog.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_GameLog Profit.
         * @member {number|Long} Profit
         * @memberof GameMsg_JGYF.JGYF_GameLog
         * @instance
         */
        JGYF_GameLog.prototype.Profit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JGYF_GameLog instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_GameLog
         * @static
         * @param {GameMsg_JGYF.IJGYF_GameLog=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_GameLog} JGYF_GameLog instance
         */
        JGYF_GameLog.create = function create(properties) {
            return new JGYF_GameLog(properties);
        };

        /**
         * Encodes the specified JGYF_GameLog message. Does not implicitly {@link GameMsg_JGYF.JGYF_GameLog.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_GameLog
         * @static
         * @param {GameMsg_JGYF.IJGYF_GameLog} message JGYF_GameLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_GameLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RowNum != null && Object.hasOwnProperty.call(message, "RowNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RowNum);
            if (message.CreateTime != null && Object.hasOwnProperty.call(message, "CreateTime"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.CreateTime);
            if (message.OrderID != null && Object.hasOwnProperty.call(message, "OrderID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.OrderID);
            if (message.BetMoney != null && Object.hasOwnProperty.call(message, "BetMoney"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.BetMoney);
            if (message.Profit != null && Object.hasOwnProperty.call(message, "Profit"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.Profit);
            return writer;
        };

        /**
         * Encodes the specified JGYF_GameLog message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_GameLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_GameLog
         * @static
         * @param {GameMsg_JGYF.IJGYF_GameLog} message JGYF_GameLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_GameLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_GameLog message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_GameLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_GameLog} JGYF_GameLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_GameLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_GameLog();
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
         * Decodes a JGYF_GameLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_GameLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_GameLog} JGYF_GameLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_GameLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_GameLog message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_GameLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_GameLog.verify = function verify(message) {
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
         * Creates a JGYF_GameLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_GameLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_GameLog} JGYF_GameLog
         */
        JGYF_GameLog.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_GameLog)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_GameLog();
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
         * Creates a plain object from a JGYF_GameLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_GameLog
         * @static
         * @param {GameMsg_JGYF.JGYF_GameLog} message JGYF_GameLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_GameLog.toObject = function toObject(message, options) {
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
         * Converts this JGYF_GameLog to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_GameLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_GameLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_GameLog;
    })();

    GameMsg_JGYF.JGYF_FreeGameInfo = (function() {

        /**
         * Properties of a JGYF_FreeGameInfo.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_FreeGameInfo
         * @property {number|null} [ID] JGYF_FreeGameInfo ID
         * @property {number|null} [Count] JGYF_FreeGameInfo Count
         * @property {Array.<GameMsg_JGYF.IJGYF_ReelSetting>|null} [ReelSetting] JGYF_FreeGameInfo ReelSetting
         * @property {string|null} [Data] JGYF_FreeGameInfo Data
         * @property {number|null} [ReelNum] JGYF_FreeGameInfo ReelNum
         * @property {number|null} [RowNum] JGYF_FreeGameInfo RowNum
         * @property {number|null} [TotalPayLine] JGYF_FreeGameInfo TotalPayLine
         */

        /**
         * Constructs a new JGYF_FreeGameInfo.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_FreeGameInfo.
         * @implements IJGYF_FreeGameInfo
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_FreeGameInfo=} [properties] Properties to set
         */
        function JGYF_FreeGameInfo(properties) {
            this.ReelSetting = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_FreeGameInfo ID.
         * @member {number} ID
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @instance
         */
        JGYF_FreeGameInfo.prototype.ID = 0;

        /**
         * JGYF_FreeGameInfo Count.
         * @member {number} Count
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @instance
         */
        JGYF_FreeGameInfo.prototype.Count = 0;

        /**
         * JGYF_FreeGameInfo ReelSetting.
         * @member {Array.<GameMsg_JGYF.IJGYF_ReelSetting>} ReelSetting
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @instance
         */
        JGYF_FreeGameInfo.prototype.ReelSetting = $util.emptyArray;

        /**
         * JGYF_FreeGameInfo Data.
         * @member {string} Data
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @instance
         */
        JGYF_FreeGameInfo.prototype.Data = "";

        /**
         * JGYF_FreeGameInfo ReelNum.
         * @member {number} ReelNum
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @instance
         */
        JGYF_FreeGameInfo.prototype.ReelNum = 0;

        /**
         * JGYF_FreeGameInfo RowNum.
         * @member {number} RowNum
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @instance
         */
        JGYF_FreeGameInfo.prototype.RowNum = 0;

        /**
         * JGYF_FreeGameInfo TotalPayLine.
         * @member {number} TotalPayLine
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @instance
         */
        JGYF_FreeGameInfo.prototype.TotalPayLine = 0;

        /**
         * Creates a new JGYF_FreeGameInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @static
         * @param {GameMsg_JGYF.IJGYF_FreeGameInfo=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_FreeGameInfo} JGYF_FreeGameInfo instance
         */
        JGYF_FreeGameInfo.create = function create(properties) {
            return new JGYF_FreeGameInfo(properties);
        };

        /**
         * Encodes the specified JGYF_FreeGameInfo message. Does not implicitly {@link GameMsg_JGYF.JGYF_FreeGameInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @static
         * @param {GameMsg_JGYF.IJGYF_FreeGameInfo} message JGYF_FreeGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_FreeGameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
            if (message.ReelSetting != null && message.ReelSetting.length)
                for (var i = 0; i < message.ReelSetting.length; ++i)
                    $root.GameMsg_JGYF.JGYF_ReelSetting.encode(message.ReelSetting[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Data);
            if (message.ReelNum != null && Object.hasOwnProperty.call(message, "ReelNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ReelNum);
            if (message.RowNum != null && Object.hasOwnProperty.call(message, "RowNum"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.RowNum);
            if (message.TotalPayLine != null && Object.hasOwnProperty.call(message, "TotalPayLine"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.TotalPayLine);
            return writer;
        };

        /**
         * Encodes the specified JGYF_FreeGameInfo message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_FreeGameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @static
         * @param {GameMsg_JGYF.IJGYF_FreeGameInfo} message JGYF_FreeGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_FreeGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_FreeGameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_FreeGameInfo} JGYF_FreeGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_FreeGameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_FreeGameInfo();
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
                    message.ReelSetting.push($root.GameMsg_JGYF.JGYF_ReelSetting.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.Data = reader.string();
                    break;
                case 5:
                    message.ReelNum = reader.int32();
                    break;
                case 6:
                    message.RowNum = reader.int32();
                    break;
                case 7:
                    message.TotalPayLine = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_FreeGameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_FreeGameInfo} JGYF_FreeGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_FreeGameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_FreeGameInfo message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_FreeGameInfo.verify = function verify(message) {
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
                    var error = $root.GameMsg_JGYF.JGYF_ReelSetting.verify(message.ReelSetting[i]);
                    if (error)
                        return "ReelSetting." + error;
                }
            }
            if (message.Data != null && message.hasOwnProperty("Data"))
                if (!$util.isString(message.Data))
                    return "Data: string expected";
            if (message.ReelNum != null && message.hasOwnProperty("ReelNum"))
                if (!$util.isInteger(message.ReelNum))
                    return "ReelNum: integer expected";
            if (message.RowNum != null && message.hasOwnProperty("RowNum"))
                if (!$util.isInteger(message.RowNum))
                    return "RowNum: integer expected";
            if (message.TotalPayLine != null && message.hasOwnProperty("TotalPayLine"))
                if (!$util.isInteger(message.TotalPayLine))
                    return "TotalPayLine: integer expected";
            return null;
        };

        /**
         * Creates a JGYF_FreeGameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_FreeGameInfo} JGYF_FreeGameInfo
         */
        JGYF_FreeGameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_FreeGameInfo)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_FreeGameInfo();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.Count != null)
                message.Count = object.Count | 0;
            if (object.ReelSetting) {
                if (!Array.isArray(object.ReelSetting))
                    throw TypeError(".GameMsg_JGYF.JGYF_FreeGameInfo.ReelSetting: array expected");
                message.ReelSetting = [];
                for (var i = 0; i < object.ReelSetting.length; ++i) {
                    if (typeof object.ReelSetting[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_FreeGameInfo.ReelSetting: object expected");
                    message.ReelSetting[i] = $root.GameMsg_JGYF.JGYF_ReelSetting.fromObject(object.ReelSetting[i]);
                }
            }
            if (object.Data != null)
                message.Data = String(object.Data);
            if (object.ReelNum != null)
                message.ReelNum = object.ReelNum | 0;
            if (object.RowNum != null)
                message.RowNum = object.RowNum | 0;
            if (object.TotalPayLine != null)
                message.TotalPayLine = object.TotalPayLine | 0;
            return message;
        };

        /**
         * Creates a plain object from a JGYF_FreeGameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @static
         * @param {GameMsg_JGYF.JGYF_FreeGameInfo} message JGYF_FreeGameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_FreeGameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ReelSetting = [];
            if (options.defaults) {
                object.ID = 0;
                object.Count = 0;
                object.Data = "";
                object.ReelNum = 0;
                object.RowNum = 0;
                object.TotalPayLine = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.Count != null && message.hasOwnProperty("Count"))
                object.Count = message.Count;
            if (message.ReelSetting && message.ReelSetting.length) {
                object.ReelSetting = [];
                for (var j = 0; j < message.ReelSetting.length; ++j)
                    object.ReelSetting[j] = $root.GameMsg_JGYF.JGYF_ReelSetting.toObject(message.ReelSetting[j], options);
            }
            if (message.Data != null && message.hasOwnProperty("Data"))
                object.Data = message.Data;
            if (message.ReelNum != null && message.hasOwnProperty("ReelNum"))
                object.ReelNum = message.ReelNum;
            if (message.RowNum != null && message.hasOwnProperty("RowNum"))
                object.RowNum = message.RowNum;
            if (message.TotalPayLine != null && message.hasOwnProperty("TotalPayLine"))
                object.TotalPayLine = message.TotalPayLine;
            return object;
        };

        /**
         * Converts this JGYF_FreeGameInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_FreeGameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_FreeGameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_FreeGameInfo;
    })();

    GameMsg_JGYF.JGYF_JackpotInfo = (function() {

        /**
         * Properties of a JGYF_JackpotInfo.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_JackpotInfo
         * @property {number|Long|null} [Money] JGYF_JackpotInfo Money
         * @property {string|null} [Name] JGYF_JackpotInfo Name
         * @property {number|null} [ID] JGYF_JackpotInfo ID
         * @property {boolean|null} [IsLink] JGYF_JackpotInfo IsLink
         */

        /**
         * Constructs a new JGYF_JackpotInfo.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_JackpotInfo.
         * @implements IJGYF_JackpotInfo
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_JackpotInfo=} [properties] Properties to set
         */
        function JGYF_JackpotInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_JackpotInfo Money.
         * @member {number|Long} Money
         * @memberof GameMsg_JGYF.JGYF_JackpotInfo
         * @instance
         */
        JGYF_JackpotInfo.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_JackpotInfo Name.
         * @member {string} Name
         * @memberof GameMsg_JGYF.JGYF_JackpotInfo
         * @instance
         */
        JGYF_JackpotInfo.prototype.Name = "";

        /**
         * JGYF_JackpotInfo ID.
         * @member {number} ID
         * @memberof GameMsg_JGYF.JGYF_JackpotInfo
         * @instance
         */
        JGYF_JackpotInfo.prototype.ID = 0;

        /**
         * JGYF_JackpotInfo IsLink.
         * @member {boolean} IsLink
         * @memberof GameMsg_JGYF.JGYF_JackpotInfo
         * @instance
         */
        JGYF_JackpotInfo.prototype.IsLink = false;

        /**
         * Creates a new JGYF_JackpotInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_JackpotInfo
         * @static
         * @param {GameMsg_JGYF.IJGYF_JackpotInfo=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_JackpotInfo} JGYF_JackpotInfo instance
         */
        JGYF_JackpotInfo.create = function create(properties) {
            return new JGYF_JackpotInfo(properties);
        };

        /**
         * Encodes the specified JGYF_JackpotInfo message. Does not implicitly {@link GameMsg_JGYF.JGYF_JackpotInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_JackpotInfo
         * @static
         * @param {GameMsg_JGYF.IJGYF_JackpotInfo} message JGYF_JackpotInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_JackpotInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Money);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ID);
            if (message.IsLink != null && Object.hasOwnProperty.call(message, "IsLink"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.IsLink);
            return writer;
        };

        /**
         * Encodes the specified JGYF_JackpotInfo message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_JackpotInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_JackpotInfo
         * @static
         * @param {GameMsg_JGYF.IJGYF_JackpotInfo} message JGYF_JackpotInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_JackpotInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_JackpotInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_JackpotInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_JackpotInfo} JGYF_JackpotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_JackpotInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_JackpotInfo();
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
                case 4:
                    message.IsLink = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_JackpotInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_JackpotInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_JackpotInfo} JGYF_JackpotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_JackpotInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_JackpotInfo message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_JackpotInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_JackpotInfo.verify = function verify(message) {
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
            if (message.IsLink != null && message.hasOwnProperty("IsLink"))
                if (typeof message.IsLink !== "boolean")
                    return "IsLink: boolean expected";
            return null;
        };

        /**
         * Creates a JGYF_JackpotInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_JackpotInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_JackpotInfo} JGYF_JackpotInfo
         */
        JGYF_JackpotInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_JackpotInfo)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_JackpotInfo();
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
            if (object.IsLink != null)
                message.IsLink = Boolean(object.IsLink);
            return message;
        };

        /**
         * Creates a plain object from a JGYF_JackpotInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_JackpotInfo
         * @static
         * @param {GameMsg_JGYF.JGYF_JackpotInfo} message JGYF_JackpotInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_JackpotInfo.toObject = function toObject(message, options) {
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
                object.IsLink = false;
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
            if (message.IsLink != null && message.hasOwnProperty("IsLink"))
                object.IsLink = message.IsLink;
            return object;
        };

        /**
         * Converts this JGYF_JackpotInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_JackpotInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_JackpotInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_JackpotInfo;
    })();

    GameMsg_JGYF.JGYF_UnitPrefix = (function() {

        /**
         * Properties of a JGYF_UnitPrefix.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_UnitPrefix
         * @property {string|null} [Name] JGYF_UnitPrefix Name
         * @property {number|Long|null} [Multiple] JGYF_UnitPrefix Multiple
         */

        /**
         * Constructs a new JGYF_UnitPrefix.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_UnitPrefix.
         * @implements IJGYF_UnitPrefix
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_UnitPrefix=} [properties] Properties to set
         */
        function JGYF_UnitPrefix(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_UnitPrefix Name.
         * @member {string} Name
         * @memberof GameMsg_JGYF.JGYF_UnitPrefix
         * @instance
         */
        JGYF_UnitPrefix.prototype.Name = "";

        /**
         * JGYF_UnitPrefix Multiple.
         * @member {number|Long} Multiple
         * @memberof GameMsg_JGYF.JGYF_UnitPrefix
         * @instance
         */
        JGYF_UnitPrefix.prototype.Multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JGYF_UnitPrefix instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_UnitPrefix
         * @static
         * @param {GameMsg_JGYF.IJGYF_UnitPrefix=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_UnitPrefix} JGYF_UnitPrefix instance
         */
        JGYF_UnitPrefix.create = function create(properties) {
            return new JGYF_UnitPrefix(properties);
        };

        /**
         * Encodes the specified JGYF_UnitPrefix message. Does not implicitly {@link GameMsg_JGYF.JGYF_UnitPrefix.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_UnitPrefix
         * @static
         * @param {GameMsg_JGYF.IJGYF_UnitPrefix} message JGYF_UnitPrefix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_UnitPrefix.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Multiple != null && Object.hasOwnProperty.call(message, "Multiple"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Multiple);
            return writer;
        };

        /**
         * Encodes the specified JGYF_UnitPrefix message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_UnitPrefix.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_UnitPrefix
         * @static
         * @param {GameMsg_JGYF.IJGYF_UnitPrefix} message JGYF_UnitPrefix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_UnitPrefix.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_UnitPrefix message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_UnitPrefix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_UnitPrefix} JGYF_UnitPrefix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_UnitPrefix.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_UnitPrefix();
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
         * Decodes a JGYF_UnitPrefix message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_UnitPrefix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_UnitPrefix} JGYF_UnitPrefix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_UnitPrefix.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_UnitPrefix message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_UnitPrefix
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_UnitPrefix.verify = function verify(message) {
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
         * Creates a JGYF_UnitPrefix message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_UnitPrefix
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_UnitPrefix} JGYF_UnitPrefix
         */
        JGYF_UnitPrefix.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_UnitPrefix)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_UnitPrefix();
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
         * Creates a plain object from a JGYF_UnitPrefix message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_UnitPrefix
         * @static
         * @param {GameMsg_JGYF.JGYF_UnitPrefix} message JGYF_UnitPrefix
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_UnitPrefix.toObject = function toObject(message, options) {
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
         * Converts this JGYF_UnitPrefix to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_UnitPrefix
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_UnitPrefix.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_UnitPrefix;
    })();

    GameMsg_JGYF.JGYF_Description = (function() {

        /**
         * Properties of a JGYF_Description.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_Description
         * @property {string|null} [Name] JGYF_Description Name
         * @property {string|null} [Desc] JGYF_Description Desc
         * @property {string|null} [Title] JGYF_Description Title
         */

        /**
         * Constructs a new JGYF_Description.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_Description.
         * @implements IJGYF_Description
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_Description=} [properties] Properties to set
         */
        function JGYF_Description(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_Description Name.
         * @member {string} Name
         * @memberof GameMsg_JGYF.JGYF_Description
         * @instance
         */
        JGYF_Description.prototype.Name = "";

        /**
         * JGYF_Description Desc.
         * @member {string} Desc
         * @memberof GameMsg_JGYF.JGYF_Description
         * @instance
         */
        JGYF_Description.prototype.Desc = "";

        /**
         * JGYF_Description Title.
         * @member {string} Title
         * @memberof GameMsg_JGYF.JGYF_Description
         * @instance
         */
        JGYF_Description.prototype.Title = "";

        /**
         * Creates a new JGYF_Description instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_Description
         * @static
         * @param {GameMsg_JGYF.IJGYF_Description=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_Description} JGYF_Description instance
         */
        JGYF_Description.create = function create(properties) {
            return new JGYF_Description(properties);
        };

        /**
         * Encodes the specified JGYF_Description message. Does not implicitly {@link GameMsg_JGYF.JGYF_Description.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_Description
         * @static
         * @param {GameMsg_JGYF.IJGYF_Description} message JGYF_Description message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_Description.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Desc != null && Object.hasOwnProperty.call(message, "Desc"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Desc);
            if (message.Title != null && Object.hasOwnProperty.call(message, "Title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Title);
            return writer;
        };

        /**
         * Encodes the specified JGYF_Description message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_Description.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_Description
         * @static
         * @param {GameMsg_JGYF.IJGYF_Description} message JGYF_Description message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_Description.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_Description message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_Description
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_Description} JGYF_Description
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_Description.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_Description();
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
         * Decodes a JGYF_Description message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_Description
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_Description} JGYF_Description
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_Description.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_Description message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_Description
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_Description.verify = function verify(message) {
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
         * Creates a JGYF_Description message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_Description
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_Description} JGYF_Description
         */
        JGYF_Description.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_Description)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_Description();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Desc != null)
                message.Desc = String(object.Desc);
            if (object.Title != null)
                message.Title = String(object.Title);
            return message;
        };

        /**
         * Creates a plain object from a JGYF_Description message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_Description
         * @static
         * @param {GameMsg_JGYF.JGYF_Description} message JGYF_Description
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_Description.toObject = function toObject(message, options) {
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
         * Converts this JGYF_Description to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_Description
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_Description.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_Description;
    })();

    GameMsg_JGYF.JGYF_GoldBallInfo = (function() {

        /**
         * Properties of a JGYF_GoldBallInfo.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_GoldBallInfo
         * @property {string|null} [Symbol] JGYF_GoldBallInfo Symbol
         * @property {string|null} [Type] JGYF_GoldBallInfo Type
         * @property {number|Long|null} [Value] JGYF_GoldBallInfo Value
         * @property {Array.<string>|null} [AccumulateSymbols] JGYF_GoldBallInfo AccumulateSymbols
         */

        /**
         * Constructs a new JGYF_GoldBallInfo.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_GoldBallInfo.
         * @implements IJGYF_GoldBallInfo
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_GoldBallInfo=} [properties] Properties to set
         */
        function JGYF_GoldBallInfo(properties) {
            this.AccumulateSymbols = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_GoldBallInfo Symbol.
         * @member {string} Symbol
         * @memberof GameMsg_JGYF.JGYF_GoldBallInfo
         * @instance
         */
        JGYF_GoldBallInfo.prototype.Symbol = "";

        /**
         * JGYF_GoldBallInfo Type.
         * @member {string} Type
         * @memberof GameMsg_JGYF.JGYF_GoldBallInfo
         * @instance
         */
        JGYF_GoldBallInfo.prototype.Type = "";

        /**
         * JGYF_GoldBallInfo Value.
         * @member {number|Long} Value
         * @memberof GameMsg_JGYF.JGYF_GoldBallInfo
         * @instance
         */
        JGYF_GoldBallInfo.prototype.Value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_GoldBallInfo AccumulateSymbols.
         * @member {Array.<string>} AccumulateSymbols
         * @memberof GameMsg_JGYF.JGYF_GoldBallInfo
         * @instance
         */
        JGYF_GoldBallInfo.prototype.AccumulateSymbols = $util.emptyArray;

        /**
         * Creates a new JGYF_GoldBallInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_GoldBallInfo
         * @static
         * @param {GameMsg_JGYF.IJGYF_GoldBallInfo=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_GoldBallInfo} JGYF_GoldBallInfo instance
         */
        JGYF_GoldBallInfo.create = function create(properties) {
            return new JGYF_GoldBallInfo(properties);
        };

        /**
         * Encodes the specified JGYF_GoldBallInfo message. Does not implicitly {@link GameMsg_JGYF.JGYF_GoldBallInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_GoldBallInfo
         * @static
         * @param {GameMsg_JGYF.IJGYF_GoldBallInfo} message JGYF_GoldBallInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_GoldBallInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Symbol != null && Object.hasOwnProperty.call(message, "Symbol"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Symbol);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Type);
            if (message.Value != null && Object.hasOwnProperty.call(message, "Value"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Value);
            if (message.AccumulateSymbols != null && message.AccumulateSymbols.length)
                for (var i = 0; i < message.AccumulateSymbols.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.AccumulateSymbols[i]);
            return writer;
        };

        /**
         * Encodes the specified JGYF_GoldBallInfo message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_GoldBallInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_GoldBallInfo
         * @static
         * @param {GameMsg_JGYF.IJGYF_GoldBallInfo} message JGYF_GoldBallInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_GoldBallInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_GoldBallInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_GoldBallInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_GoldBallInfo} JGYF_GoldBallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_GoldBallInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_GoldBallInfo();
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
                case 4:
                    if (!(message.AccumulateSymbols && message.AccumulateSymbols.length))
                        message.AccumulateSymbols = [];
                    message.AccumulateSymbols.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_GoldBallInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_GoldBallInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_GoldBallInfo} JGYF_GoldBallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_GoldBallInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_GoldBallInfo message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_GoldBallInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_GoldBallInfo.verify = function verify(message) {
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
            if (message.AccumulateSymbols != null && message.hasOwnProperty("AccumulateSymbols")) {
                if (!Array.isArray(message.AccumulateSymbols))
                    return "AccumulateSymbols: array expected";
                for (var i = 0; i < message.AccumulateSymbols.length; ++i)
                    if (!$util.isString(message.AccumulateSymbols[i]))
                        return "AccumulateSymbols: string[] expected";
            }
            return null;
        };

        /**
         * Creates a JGYF_GoldBallInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_GoldBallInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_GoldBallInfo} JGYF_GoldBallInfo
         */
        JGYF_GoldBallInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_GoldBallInfo)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_GoldBallInfo();
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
            if (object.AccumulateSymbols) {
                if (!Array.isArray(object.AccumulateSymbols))
                    throw TypeError(".GameMsg_JGYF.JGYF_GoldBallInfo.AccumulateSymbols: array expected");
                message.AccumulateSymbols = [];
                for (var i = 0; i < object.AccumulateSymbols.length; ++i)
                    message.AccumulateSymbols[i] = String(object.AccumulateSymbols[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_GoldBallInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_GoldBallInfo
         * @static
         * @param {GameMsg_JGYF.JGYF_GoldBallInfo} message JGYF_GoldBallInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_GoldBallInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AccumulateSymbols = [];
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
            if (message.AccumulateSymbols && message.AccumulateSymbols.length) {
                object.AccumulateSymbols = [];
                for (var j = 0; j < message.AccumulateSymbols.length; ++j)
                    object.AccumulateSymbols[j] = message.AccumulateSymbols[j];
            }
            return object;
        };

        /**
         * Converts this JGYF_GoldBallInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_GoldBallInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_GoldBallInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_GoldBallInfo;
    })();

    GameMsg_JGYF.JGYF_LightningPayout = (function() {

        /**
         * Properties of a JGYF_LightningPayout.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_LightningPayout
         * @property {string|null} [Type] JGYF_LightningPayout Type
         * @property {number|Long|null} [WinMoney] JGYF_LightningPayout WinMoney
         * @property {GameMsg_JGYF.IJGYF_ReelPosition|null} [Position] JGYF_LightningPayout Position
         * @property {string|null} [JackpotType] JGYF_LightningPayout JackpotType
         * @property {number|null} [SymbolID] JGYF_LightningPayout SymbolID
         */

        /**
         * Constructs a new JGYF_LightningPayout.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_LightningPayout.
         * @implements IJGYF_LightningPayout
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_LightningPayout=} [properties] Properties to set
         */
        function JGYF_LightningPayout(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_LightningPayout Type.
         * @member {string} Type
         * @memberof GameMsg_JGYF.JGYF_LightningPayout
         * @instance
         */
        JGYF_LightningPayout.prototype.Type = "";

        /**
         * JGYF_LightningPayout WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_JGYF.JGYF_LightningPayout
         * @instance
         */
        JGYF_LightningPayout.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_LightningPayout Position.
         * @member {GameMsg_JGYF.IJGYF_ReelPosition|null|undefined} Position
         * @memberof GameMsg_JGYF.JGYF_LightningPayout
         * @instance
         */
        JGYF_LightningPayout.prototype.Position = null;

        /**
         * JGYF_LightningPayout JackpotType.
         * @member {string} JackpotType
         * @memberof GameMsg_JGYF.JGYF_LightningPayout
         * @instance
         */
        JGYF_LightningPayout.prototype.JackpotType = "";

        /**
         * JGYF_LightningPayout SymbolID.
         * @member {number} SymbolID
         * @memberof GameMsg_JGYF.JGYF_LightningPayout
         * @instance
         */
        JGYF_LightningPayout.prototype.SymbolID = 0;

        /**
         * Creates a new JGYF_LightningPayout instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_LightningPayout
         * @static
         * @param {GameMsg_JGYF.IJGYF_LightningPayout=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_LightningPayout} JGYF_LightningPayout instance
         */
        JGYF_LightningPayout.create = function create(properties) {
            return new JGYF_LightningPayout(properties);
        };

        /**
         * Encodes the specified JGYF_LightningPayout message. Does not implicitly {@link GameMsg_JGYF.JGYF_LightningPayout.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_LightningPayout
         * @static
         * @param {GameMsg_JGYF.IJGYF_LightningPayout} message JGYF_LightningPayout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_LightningPayout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Type);
            if (message.WinMoney != null && Object.hasOwnProperty.call(message, "WinMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.WinMoney);
            if (message.Position != null && Object.hasOwnProperty.call(message, "Position"))
                $root.GameMsg_JGYF.JGYF_ReelPosition.encode(message.Position, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.JackpotType != null && Object.hasOwnProperty.call(message, "JackpotType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.JackpotType);
            if (message.SymbolID != null && Object.hasOwnProperty.call(message, "SymbolID"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.SymbolID);
            return writer;
        };

        /**
         * Encodes the specified JGYF_LightningPayout message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_LightningPayout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_LightningPayout
         * @static
         * @param {GameMsg_JGYF.IJGYF_LightningPayout} message JGYF_LightningPayout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_LightningPayout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_LightningPayout message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_LightningPayout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_LightningPayout} JGYF_LightningPayout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_LightningPayout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_LightningPayout();
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
                    message.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.JackpotType = reader.string();
                    break;
                case 5:
                    message.SymbolID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_LightningPayout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_LightningPayout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_LightningPayout} JGYF_LightningPayout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_LightningPayout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_LightningPayout message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_LightningPayout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_LightningPayout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                    return "WinMoney: integer|Long expected";
            if (message.Position != null && message.hasOwnProperty("Position")) {
                var error = $root.GameMsg_JGYF.JGYF_ReelPosition.verify(message.Position);
                if (error)
                    return "Position." + error;
            }
            if (message.JackpotType != null && message.hasOwnProperty("JackpotType"))
                if (!$util.isString(message.JackpotType))
                    return "JackpotType: string expected";
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID"))
                if (!$util.isInteger(message.SymbolID))
                    return "SymbolID: integer expected";
            return null;
        };

        /**
         * Creates a JGYF_LightningPayout message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_LightningPayout
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_LightningPayout} JGYF_LightningPayout
         */
        JGYF_LightningPayout.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_LightningPayout)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_LightningPayout();
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
                    throw TypeError(".GameMsg_JGYF.JGYF_LightningPayout.Position: object expected");
                message.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.fromObject(object.Position);
            }
            if (object.JackpotType != null)
                message.JackpotType = String(object.JackpotType);
            if (object.SymbolID != null)
                message.SymbolID = object.SymbolID | 0;
            return message;
        };

        /**
         * Creates a plain object from a JGYF_LightningPayout message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_LightningPayout
         * @static
         * @param {GameMsg_JGYF.JGYF_LightningPayout} message JGYF_LightningPayout
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_LightningPayout.toObject = function toObject(message, options) {
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
                object.SymbolID = 0;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (typeof message.WinMoney === "number")
                    object.WinMoney = options.longs === String ? String(message.WinMoney) : message.WinMoney;
                else
                    object.WinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.WinMoney) : options.longs === Number ? new $util.LongBits(message.WinMoney.low >>> 0, message.WinMoney.high >>> 0).toNumber() : message.WinMoney;
            if (message.Position != null && message.hasOwnProperty("Position"))
                object.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.toObject(message.Position, options);
            if (message.JackpotType != null && message.hasOwnProperty("JackpotType"))
                object.JackpotType = message.JackpotType;
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID"))
                object.SymbolID = message.SymbolID;
            return object;
        };

        /**
         * Converts this JGYF_LightningPayout to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_LightningPayout
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_LightningPayout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_LightningPayout;
    })();

    GameMsg_JGYF.JGYF_LightningLock = (function() {

        /**
         * Properties of a JGYF_LightningLock.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_LightningLock
         * @property {number|null} [SymbolID] JGYF_LightningLock SymbolID
         * @property {GameMsg_JGYF.IJGYF_ReelPosition|null} [Position] JGYF_LightningLock Position
         */

        /**
         * Constructs a new JGYF_LightningLock.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_LightningLock.
         * @implements IJGYF_LightningLock
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_LightningLock=} [properties] Properties to set
         */
        function JGYF_LightningLock(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_LightningLock SymbolID.
         * @member {number} SymbolID
         * @memberof GameMsg_JGYF.JGYF_LightningLock
         * @instance
         */
        JGYF_LightningLock.prototype.SymbolID = 0;

        /**
         * JGYF_LightningLock Position.
         * @member {GameMsg_JGYF.IJGYF_ReelPosition|null|undefined} Position
         * @memberof GameMsg_JGYF.JGYF_LightningLock
         * @instance
         */
        JGYF_LightningLock.prototype.Position = null;

        /**
         * Creates a new JGYF_LightningLock instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_LightningLock
         * @static
         * @param {GameMsg_JGYF.IJGYF_LightningLock=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_LightningLock} JGYF_LightningLock instance
         */
        JGYF_LightningLock.create = function create(properties) {
            return new JGYF_LightningLock(properties);
        };

        /**
         * Encodes the specified JGYF_LightningLock message. Does not implicitly {@link GameMsg_JGYF.JGYF_LightningLock.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_LightningLock
         * @static
         * @param {GameMsg_JGYF.IJGYF_LightningLock} message JGYF_LightningLock message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_LightningLock.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SymbolID != null && Object.hasOwnProperty.call(message, "SymbolID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SymbolID);
            if (message.Position != null && Object.hasOwnProperty.call(message, "Position"))
                $root.GameMsg_JGYF.JGYF_ReelPosition.encode(message.Position, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_LightningLock message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_LightningLock.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_LightningLock
         * @static
         * @param {GameMsg_JGYF.IJGYF_LightningLock} message JGYF_LightningLock message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_LightningLock.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_LightningLock message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_LightningLock
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_LightningLock} JGYF_LightningLock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_LightningLock.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_LightningLock();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SymbolID = reader.int32();
                    break;
                case 2:
                    message.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_LightningLock message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_LightningLock
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_LightningLock} JGYF_LightningLock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_LightningLock.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_LightningLock message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_LightningLock
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_LightningLock.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID"))
                if (!$util.isInteger(message.SymbolID))
                    return "SymbolID: integer expected";
            if (message.Position != null && message.hasOwnProperty("Position")) {
                var error = $root.GameMsg_JGYF.JGYF_ReelPosition.verify(message.Position);
                if (error)
                    return "Position." + error;
            }
            return null;
        };

        /**
         * Creates a JGYF_LightningLock message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_LightningLock
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_LightningLock} JGYF_LightningLock
         */
        JGYF_LightningLock.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_LightningLock)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_LightningLock();
            if (object.SymbolID != null)
                message.SymbolID = object.SymbolID | 0;
            if (object.Position != null) {
                if (typeof object.Position !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_LightningLock.Position: object expected");
                message.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.fromObject(object.Position);
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_LightningLock message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_LightningLock
         * @static
         * @param {GameMsg_JGYF.JGYF_LightningLock} message JGYF_LightningLock
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_LightningLock.toObject = function toObject(message, options) {
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
                object.Position = $root.GameMsg_JGYF.JGYF_ReelPosition.toObject(message.Position, options);
            return object;
        };

        /**
         * Converts this JGYF_LightningLock to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_LightningLock
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_LightningLock.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_LightningLock;
    })();

    GameMsg_JGYF.JGYF_StepGameResult = (function() {

        /**
         * Properties of a JGYF_StepGameResult.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_StepGameResult
         * @property {Array.<GameMsg_JGYF.IJGYF_ReelResult>|null} [InitResult] JGYF_StepGameResult InitResult
         * @property {boolean} IsRespin JGYF_StepGameResult IsRespin
         * @property {boolean} IsExpand JGYF_StepGameResult IsExpand
         * @property {Array.<number>|null} [ExpandReel] JGYF_StepGameResult ExpandReel
         * @property {string|null} [ExpandOrder] JGYF_StepGameResult ExpandOrder
         * @property {GameMsg_JGYF.IJGYF_MSG_GameResult} SlotResult JGYF_StepGameResult SlotResult
         */

        /**
         * Constructs a new JGYF_StepGameResult.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_StepGameResult.
         * @implements IJGYF_StepGameResult
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_StepGameResult=} [properties] Properties to set
         */
        function JGYF_StepGameResult(properties) {
            this.InitResult = [];
            this.ExpandReel = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_StepGameResult InitResult.
         * @member {Array.<GameMsg_JGYF.IJGYF_ReelResult>} InitResult
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @instance
         */
        JGYF_StepGameResult.prototype.InitResult = $util.emptyArray;

        /**
         * JGYF_StepGameResult IsRespin.
         * @member {boolean} IsRespin
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @instance
         */
        JGYF_StepGameResult.prototype.IsRespin = false;

        /**
         * JGYF_StepGameResult IsExpand.
         * @member {boolean} IsExpand
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @instance
         */
        JGYF_StepGameResult.prototype.IsExpand = false;

        /**
         * JGYF_StepGameResult ExpandReel.
         * @member {Array.<number>} ExpandReel
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @instance
         */
        JGYF_StepGameResult.prototype.ExpandReel = $util.emptyArray;

        /**
         * JGYF_StepGameResult ExpandOrder.
         * @member {string} ExpandOrder
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @instance
         */
        JGYF_StepGameResult.prototype.ExpandOrder = "";

        /**
         * JGYF_StepGameResult SlotResult.
         * @member {GameMsg_JGYF.IJGYF_MSG_GameResult} SlotResult
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @instance
         */
        JGYF_StepGameResult.prototype.SlotResult = null;

        /**
         * Creates a new JGYF_StepGameResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_StepGameResult=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_StepGameResult} JGYF_StepGameResult instance
         */
        JGYF_StepGameResult.create = function create(properties) {
            return new JGYF_StepGameResult(properties);
        };

        /**
         * Encodes the specified JGYF_StepGameResult message. Does not implicitly {@link GameMsg_JGYF.JGYF_StepGameResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_StepGameResult} message JGYF_StepGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_StepGameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.InitResult != null && message.InitResult.length)
                for (var i = 0; i < message.InitResult.length; ++i)
                    $root.GameMsg_JGYF.JGYF_ReelResult.encode(message.InitResult[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsRespin);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.IsExpand);
            if (message.ExpandReel != null && message.ExpandReel.length)
                for (var i = 0; i < message.ExpandReel.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ExpandReel[i]);
            if (message.ExpandOrder != null && Object.hasOwnProperty.call(message, "ExpandOrder"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.ExpandOrder);
            $root.GameMsg_JGYF.JGYF_MSG_GameResult.encode(message.SlotResult, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_StepGameResult message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_StepGameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @static
         * @param {GameMsg_JGYF.IJGYF_StepGameResult} message JGYF_StepGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_StepGameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_StepGameResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_StepGameResult} JGYF_StepGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_StepGameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_StepGameResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.InitResult && message.InitResult.length))
                        message.InitResult = [];
                    message.InitResult.push($root.GameMsg_JGYF.JGYF_ReelResult.decode(reader, reader.uint32()));
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
                    message.SlotResult = $root.GameMsg_JGYF.JGYF_MSG_GameResult.decode(reader, reader.uint32());
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
         * Decodes a JGYF_StepGameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_StepGameResult} JGYF_StepGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_StepGameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_StepGameResult message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_StepGameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.InitResult != null && message.hasOwnProperty("InitResult")) {
                if (!Array.isArray(message.InitResult))
                    return "InitResult: array expected";
                for (var i = 0; i < message.InitResult.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_ReelResult.verify(message.InitResult[i]);
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
                var error = $root.GameMsg_JGYF.JGYF_MSG_GameResult.verify(message.SlotResult);
                if (error)
                    return "SlotResult." + error;
            }
            return null;
        };

        /**
         * Creates a JGYF_StepGameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_StepGameResult} JGYF_StepGameResult
         */
        JGYF_StepGameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_StepGameResult)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_StepGameResult();
            if (object.InitResult) {
                if (!Array.isArray(object.InitResult))
                    throw TypeError(".GameMsg_JGYF.JGYF_StepGameResult.InitResult: array expected");
                message.InitResult = [];
                for (var i = 0; i < object.InitResult.length; ++i) {
                    if (typeof object.InitResult[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_StepGameResult.InitResult: object expected");
                    message.InitResult[i] = $root.GameMsg_JGYF.JGYF_ReelResult.fromObject(object.InitResult[i]);
                }
            }
            if (object.IsRespin != null)
                message.IsRespin = Boolean(object.IsRespin);
            if (object.IsExpand != null)
                message.IsExpand = Boolean(object.IsExpand);
            if (object.ExpandReel) {
                if (!Array.isArray(object.ExpandReel))
                    throw TypeError(".GameMsg_JGYF.JGYF_StepGameResult.ExpandReel: array expected");
                message.ExpandReel = [];
                for (var i = 0; i < object.ExpandReel.length; ++i)
                    message.ExpandReel[i] = object.ExpandReel[i] | 0;
            }
            if (object.ExpandOrder != null)
                message.ExpandOrder = String(object.ExpandOrder);
            if (object.SlotResult != null) {
                if (typeof object.SlotResult !== "object")
                    throw TypeError(".GameMsg_JGYF.JGYF_StepGameResult.SlotResult: object expected");
                message.SlotResult = $root.GameMsg_JGYF.JGYF_MSG_GameResult.fromObject(object.SlotResult);
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_StepGameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @static
         * @param {GameMsg_JGYF.JGYF_StepGameResult} message JGYF_StepGameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_StepGameResult.toObject = function toObject(message, options) {
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
                    object.InitResult[j] = $root.GameMsg_JGYF.JGYF_ReelResult.toObject(message.InitResult[j], options);
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
                object.SlotResult = $root.GameMsg_JGYF.JGYF_MSG_GameResult.toObject(message.SlotResult, options);
            return object;
        };

        /**
         * Converts this JGYF_StepGameResult to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_StepGameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_StepGameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_StepGameResult;
    })();

    GameMsg_JGYF.JGYF_BonusGameRecord = (function() {

        /**
         * Properties of a JGYF_BonusGameRecord.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_BonusGameRecord
         * @property {number} ID JGYF_BonusGameRecord ID
         * @property {number} Location JGYF_BonusGameRecord Location
         * @property {number|Long} RewareValue JGYF_BonusGameRecord RewareValue
         * @property {number|null} [BonusID] JGYF_BonusGameRecord BonusID
         */

        /**
         * Constructs a new JGYF_BonusGameRecord.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_BonusGameRecord.
         * @implements IJGYF_BonusGameRecord
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_BonusGameRecord=} [properties] Properties to set
         */
        function JGYF_BonusGameRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_BonusGameRecord ID.
         * @member {number} ID
         * @memberof GameMsg_JGYF.JGYF_BonusGameRecord
         * @instance
         */
        JGYF_BonusGameRecord.prototype.ID = 0;

        /**
         * JGYF_BonusGameRecord Location.
         * @member {number} Location
         * @memberof GameMsg_JGYF.JGYF_BonusGameRecord
         * @instance
         */
        JGYF_BonusGameRecord.prototype.Location = 0;

        /**
         * JGYF_BonusGameRecord RewareValue.
         * @member {number|Long} RewareValue
         * @memberof GameMsg_JGYF.JGYF_BonusGameRecord
         * @instance
         */
        JGYF_BonusGameRecord.prototype.RewareValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_BonusGameRecord BonusID.
         * @member {number} BonusID
         * @memberof GameMsg_JGYF.JGYF_BonusGameRecord
         * @instance
         */
        JGYF_BonusGameRecord.prototype.BonusID = 0;

        /**
         * Creates a new JGYF_BonusGameRecord instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_BonusGameRecord
         * @static
         * @param {GameMsg_JGYF.IJGYF_BonusGameRecord=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_BonusGameRecord} JGYF_BonusGameRecord instance
         */
        JGYF_BonusGameRecord.create = function create(properties) {
            return new JGYF_BonusGameRecord(properties);
        };

        /**
         * Encodes the specified JGYF_BonusGameRecord message. Does not implicitly {@link GameMsg_JGYF.JGYF_BonusGameRecord.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_BonusGameRecord
         * @static
         * @param {GameMsg_JGYF.IJGYF_BonusGameRecord} message JGYF_BonusGameRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_BonusGameRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Location);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.RewareValue);
            if (message.BonusID != null && Object.hasOwnProperty.call(message, "BonusID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.BonusID);
            return writer;
        };

        /**
         * Encodes the specified JGYF_BonusGameRecord message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_BonusGameRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_BonusGameRecord
         * @static
         * @param {GameMsg_JGYF.IJGYF_BonusGameRecord} message JGYF_BonusGameRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_BonusGameRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_BonusGameRecord message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_BonusGameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_BonusGameRecord} JGYF_BonusGameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_BonusGameRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_BonusGameRecord();
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
            if (!message.hasOwnProperty("ID"))
                throw $util.ProtocolError("missing required 'ID'", { instance: message });
            if (!message.hasOwnProperty("Location"))
                throw $util.ProtocolError("missing required 'Location'", { instance: message });
            if (!message.hasOwnProperty("RewareValue"))
                throw $util.ProtocolError("missing required 'RewareValue'", { instance: message });
            return message;
        };

        /**
         * Decodes a JGYF_BonusGameRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_BonusGameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_BonusGameRecord} JGYF_BonusGameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_BonusGameRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_BonusGameRecord message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_BonusGameRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_BonusGameRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ID))
                return "ID: integer expected";
            if (!$util.isInteger(message.Location))
                return "Location: integer expected";
            if (!$util.isInteger(message.RewareValue) && !(message.RewareValue && $util.isInteger(message.RewareValue.low) && $util.isInteger(message.RewareValue.high)))
                return "RewareValue: integer|Long expected";
            if (message.BonusID != null && message.hasOwnProperty("BonusID"))
                if (!$util.isInteger(message.BonusID))
                    return "BonusID: integer expected";
            return null;
        };

        /**
         * Creates a JGYF_BonusGameRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_BonusGameRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_BonusGameRecord} JGYF_BonusGameRecord
         */
        JGYF_BonusGameRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_BonusGameRecord)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_BonusGameRecord();
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
         * Creates a plain object from a JGYF_BonusGameRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_BonusGameRecord
         * @static
         * @param {GameMsg_JGYF.JGYF_BonusGameRecord} message JGYF_BonusGameRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_BonusGameRecord.toObject = function toObject(message, options) {
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
         * Converts this JGYF_BonusGameRecord to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_BonusGameRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_BonusGameRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_BonusGameRecord;
    })();

    GameMsg_JGYF.JGYF_FreeGameExtAward = (function() {

        /**
         * Properties of a JGYF_FreeGameExtAward.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_FreeGameExtAward
         * @property {number|null} [TotalCount] JGYF_FreeGameExtAward TotalCount
         * @property {number|Long|null} [TotalWinMoney] JGYF_FreeGameExtAward TotalWinMoney
         * @property {number|null} [Count] JGYF_FreeGameExtAward Count
         * @property {number|Long|null} [WinMoney] JGYF_FreeGameExtAward WinMoney
         * @property {number|Long|null} [EachCountMoney] JGYF_FreeGameExtAward EachCountMoney
         * @property {boolean|null} [IsFinished] JGYF_FreeGameExtAward IsFinished
         * @property {Array.<GameMsg_JGYF.IJGYF_Symbol>|null} [Symbols] JGYF_FreeGameExtAward Symbols
         */

        /**
         * Constructs a new JGYF_FreeGameExtAward.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_FreeGameExtAward.
         * @implements IJGYF_FreeGameExtAward
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_FreeGameExtAward=} [properties] Properties to set
         */
        function JGYF_FreeGameExtAward(properties) {
            this.Symbols = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_FreeGameExtAward TotalCount.
         * @member {number} TotalCount
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @instance
         */
        JGYF_FreeGameExtAward.prototype.TotalCount = 0;

        /**
         * JGYF_FreeGameExtAward TotalWinMoney.
         * @member {number|Long} TotalWinMoney
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @instance
         */
        JGYF_FreeGameExtAward.prototype.TotalWinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_FreeGameExtAward Count.
         * @member {number} Count
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @instance
         */
        JGYF_FreeGameExtAward.prototype.Count = 0;

        /**
         * JGYF_FreeGameExtAward WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @instance
         */
        JGYF_FreeGameExtAward.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_FreeGameExtAward EachCountMoney.
         * @member {number|Long} EachCountMoney
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @instance
         */
        JGYF_FreeGameExtAward.prototype.EachCountMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JGYF_FreeGameExtAward IsFinished.
         * @member {boolean} IsFinished
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @instance
         */
        JGYF_FreeGameExtAward.prototype.IsFinished = false;

        /**
         * JGYF_FreeGameExtAward Symbols.
         * @member {Array.<GameMsg_JGYF.IJGYF_Symbol>} Symbols
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @instance
         */
        JGYF_FreeGameExtAward.prototype.Symbols = $util.emptyArray;

        /**
         * Creates a new JGYF_FreeGameExtAward instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @static
         * @param {GameMsg_JGYF.IJGYF_FreeGameExtAward=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_FreeGameExtAward} JGYF_FreeGameExtAward instance
         */
        JGYF_FreeGameExtAward.create = function create(properties) {
            return new JGYF_FreeGameExtAward(properties);
        };

        /**
         * Encodes the specified JGYF_FreeGameExtAward message. Does not implicitly {@link GameMsg_JGYF.JGYF_FreeGameExtAward.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @static
         * @param {GameMsg_JGYF.IJGYF_FreeGameExtAward} message JGYF_FreeGameExtAward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_FreeGameExtAward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TotalCount != null && Object.hasOwnProperty.call(message, "TotalCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TotalCount);
            if (message.TotalWinMoney != null && Object.hasOwnProperty.call(message, "TotalWinMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.TotalWinMoney);
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Count);
            if (message.WinMoney != null && Object.hasOwnProperty.call(message, "WinMoney"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.WinMoney);
            if (message.EachCountMoney != null && Object.hasOwnProperty.call(message, "EachCountMoney"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.EachCountMoney);
            if (message.IsFinished != null && Object.hasOwnProperty.call(message, "IsFinished"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.IsFinished);
            if (message.Symbols != null && message.Symbols.length)
                for (var i = 0; i < message.Symbols.length; ++i)
                    $root.GameMsg_JGYF.JGYF_Symbol.encode(message.Symbols[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JGYF_FreeGameExtAward message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_FreeGameExtAward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @static
         * @param {GameMsg_JGYF.IJGYF_FreeGameExtAward} message JGYF_FreeGameExtAward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_FreeGameExtAward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_FreeGameExtAward message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_FreeGameExtAward} JGYF_FreeGameExtAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_FreeGameExtAward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_FreeGameExtAward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TotalCount = reader.int32();
                    break;
                case 2:
                    message.TotalWinMoney = reader.int64();
                    break;
                case 3:
                    message.Count = reader.int32();
                    break;
                case 4:
                    message.WinMoney = reader.int64();
                    break;
                case 5:
                    message.EachCountMoney = reader.int64();
                    break;
                case 6:
                    message.IsFinished = reader.bool();
                    break;
                case 7:
                    if (!(message.Symbols && message.Symbols.length))
                        message.Symbols = [];
                    message.Symbols.push($root.GameMsg_JGYF.JGYF_Symbol.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_FreeGameExtAward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_FreeGameExtAward} JGYF_FreeGameExtAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_FreeGameExtAward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_FreeGameExtAward message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_FreeGameExtAward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TotalCount != null && message.hasOwnProperty("TotalCount"))
                if (!$util.isInteger(message.TotalCount))
                    return "TotalCount: integer expected";
            if (message.TotalWinMoney != null && message.hasOwnProperty("TotalWinMoney"))
                if (!$util.isInteger(message.TotalWinMoney) && !(message.TotalWinMoney && $util.isInteger(message.TotalWinMoney.low) && $util.isInteger(message.TotalWinMoney.high)))
                    return "TotalWinMoney: integer|Long expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count))
                    return "Count: integer expected";
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                    return "WinMoney: integer|Long expected";
            if (message.EachCountMoney != null && message.hasOwnProperty("EachCountMoney"))
                if (!$util.isInteger(message.EachCountMoney) && !(message.EachCountMoney && $util.isInteger(message.EachCountMoney.low) && $util.isInteger(message.EachCountMoney.high)))
                    return "EachCountMoney: integer|Long expected";
            if (message.IsFinished != null && message.hasOwnProperty("IsFinished"))
                if (typeof message.IsFinished !== "boolean")
                    return "IsFinished: boolean expected";
            if (message.Symbols != null && message.hasOwnProperty("Symbols")) {
                if (!Array.isArray(message.Symbols))
                    return "Symbols: array expected";
                for (var i = 0; i < message.Symbols.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_Symbol.verify(message.Symbols[i]);
                    if (error)
                        return "Symbols." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JGYF_FreeGameExtAward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_FreeGameExtAward} JGYF_FreeGameExtAward
         */
        JGYF_FreeGameExtAward.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_FreeGameExtAward)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_FreeGameExtAward();
            if (object.TotalCount != null)
                message.TotalCount = object.TotalCount | 0;
            if (object.TotalWinMoney != null)
                if ($util.Long)
                    (message.TotalWinMoney = $util.Long.fromValue(object.TotalWinMoney)).unsigned = false;
                else if (typeof object.TotalWinMoney === "string")
                    message.TotalWinMoney = parseInt(object.TotalWinMoney, 10);
                else if (typeof object.TotalWinMoney === "number")
                    message.TotalWinMoney = object.TotalWinMoney;
                else if (typeof object.TotalWinMoney === "object")
                    message.TotalWinMoney = new $util.LongBits(object.TotalWinMoney.low >>> 0, object.TotalWinMoney.high >>> 0).toNumber();
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
            if (object.EachCountMoney != null)
                if ($util.Long)
                    (message.EachCountMoney = $util.Long.fromValue(object.EachCountMoney)).unsigned = false;
                else if (typeof object.EachCountMoney === "string")
                    message.EachCountMoney = parseInt(object.EachCountMoney, 10);
                else if (typeof object.EachCountMoney === "number")
                    message.EachCountMoney = object.EachCountMoney;
                else if (typeof object.EachCountMoney === "object")
                    message.EachCountMoney = new $util.LongBits(object.EachCountMoney.low >>> 0, object.EachCountMoney.high >>> 0).toNumber();
            if (object.IsFinished != null)
                message.IsFinished = Boolean(object.IsFinished);
            if (object.Symbols) {
                if (!Array.isArray(object.Symbols))
                    throw TypeError(".GameMsg_JGYF.JGYF_FreeGameExtAward.Symbols: array expected");
                message.Symbols = [];
                for (var i = 0; i < object.Symbols.length; ++i) {
                    if (typeof object.Symbols[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_FreeGameExtAward.Symbols: object expected");
                    message.Symbols[i] = $root.GameMsg_JGYF.JGYF_Symbol.fromObject(object.Symbols[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JGYF_FreeGameExtAward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @static
         * @param {GameMsg_JGYF.JGYF_FreeGameExtAward} message JGYF_FreeGameExtAward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_FreeGameExtAward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Symbols = [];
            if (options.defaults) {
                object.TotalCount = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalWinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalWinMoney = options.longs === String ? "0" : 0;
                object.Count = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.EachCountMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.EachCountMoney = options.longs === String ? "0" : 0;
                object.IsFinished = false;
            }
            if (message.TotalCount != null && message.hasOwnProperty("TotalCount"))
                object.TotalCount = message.TotalCount;
            if (message.TotalWinMoney != null && message.hasOwnProperty("TotalWinMoney"))
                if (typeof message.TotalWinMoney === "number")
                    object.TotalWinMoney = options.longs === String ? String(message.TotalWinMoney) : message.TotalWinMoney;
                else
                    object.TotalWinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.TotalWinMoney) : options.longs === Number ? new $util.LongBits(message.TotalWinMoney.low >>> 0, message.TotalWinMoney.high >>> 0).toNumber() : message.TotalWinMoney;
            if (message.Count != null && message.hasOwnProperty("Count"))
                object.Count = message.Count;
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (typeof message.WinMoney === "number")
                    object.WinMoney = options.longs === String ? String(message.WinMoney) : message.WinMoney;
                else
                    object.WinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.WinMoney) : options.longs === Number ? new $util.LongBits(message.WinMoney.low >>> 0, message.WinMoney.high >>> 0).toNumber() : message.WinMoney;
            if (message.EachCountMoney != null && message.hasOwnProperty("EachCountMoney"))
                if (typeof message.EachCountMoney === "number")
                    object.EachCountMoney = options.longs === String ? String(message.EachCountMoney) : message.EachCountMoney;
                else
                    object.EachCountMoney = options.longs === String ? $util.Long.prototype.toString.call(message.EachCountMoney) : options.longs === Number ? new $util.LongBits(message.EachCountMoney.low >>> 0, message.EachCountMoney.high >>> 0).toNumber() : message.EachCountMoney;
            if (message.IsFinished != null && message.hasOwnProperty("IsFinished"))
                object.IsFinished = message.IsFinished;
            if (message.Symbols && message.Symbols.length) {
                object.Symbols = [];
                for (var j = 0; j < message.Symbols.length; ++j)
                    object.Symbols[j] = $root.GameMsg_JGYF.JGYF_Symbol.toObject(message.Symbols[j], options);
            }
            return object;
        };

        /**
         * Converts this JGYF_FreeGameExtAward to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_FreeGameExtAward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_FreeGameExtAward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_FreeGameExtAward;
    })();

    GameMsg_JGYF.JGYF_GameReels = (function() {

        /**
         * Properties of a JGYF_GameReels.
         * @memberof GameMsg_JGYF
         * @interface IJGYF_GameReels
         * @property {string|null} [Name] JGYF_GameReels Name
         * @property {number|null} [ID] JGYF_GameReels ID
         * @property {Array.<GameMsg_JGYF.IJGYF_ReelSetting>|null} [ReelSetting] JGYF_GameReels ReelSetting
         * @property {string|null} [ConditionType] JGYF_GameReels ConditionType
         * @property {string|null} [ConditionValue] JGYF_GameReels ConditionValue
         */

        /**
         * Constructs a new JGYF_GameReels.
         * @memberof GameMsg_JGYF
         * @classdesc Represents a JGYF_GameReels.
         * @implements IJGYF_GameReels
         * @constructor
         * @param {GameMsg_JGYF.IJGYF_GameReels=} [properties] Properties to set
         */
        function JGYF_GameReels(properties) {
            this.ReelSetting = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JGYF_GameReels Name.
         * @member {string} Name
         * @memberof GameMsg_JGYF.JGYF_GameReels
         * @instance
         */
        JGYF_GameReels.prototype.Name = "";

        /**
         * JGYF_GameReels ID.
         * @member {number} ID
         * @memberof GameMsg_JGYF.JGYF_GameReels
         * @instance
         */
        JGYF_GameReels.prototype.ID = 0;

        /**
         * JGYF_GameReels ReelSetting.
         * @member {Array.<GameMsg_JGYF.IJGYF_ReelSetting>} ReelSetting
         * @memberof GameMsg_JGYF.JGYF_GameReels
         * @instance
         */
        JGYF_GameReels.prototype.ReelSetting = $util.emptyArray;

        /**
         * JGYF_GameReels ConditionType.
         * @member {string} ConditionType
         * @memberof GameMsg_JGYF.JGYF_GameReels
         * @instance
         */
        JGYF_GameReels.prototype.ConditionType = "";

        /**
         * JGYF_GameReels ConditionValue.
         * @member {string} ConditionValue
         * @memberof GameMsg_JGYF.JGYF_GameReels
         * @instance
         */
        JGYF_GameReels.prototype.ConditionValue = "";

        /**
         * Creates a new JGYF_GameReels instance using the specified properties.
         * @function create
         * @memberof GameMsg_JGYF.JGYF_GameReels
         * @static
         * @param {GameMsg_JGYF.IJGYF_GameReels=} [properties] Properties to set
         * @returns {GameMsg_JGYF.JGYF_GameReels} JGYF_GameReels instance
         */
        JGYF_GameReels.create = function create(properties) {
            return new JGYF_GameReels(properties);
        };

        /**
         * Encodes the specified JGYF_GameReels message. Does not implicitly {@link GameMsg_JGYF.JGYF_GameReels.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JGYF.JGYF_GameReels
         * @static
         * @param {GameMsg_JGYF.IJGYF_GameReels} message JGYF_GameReels message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_GameReels.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ID);
            if (message.ReelSetting != null && message.ReelSetting.length)
                for (var i = 0; i < message.ReelSetting.length; ++i)
                    $root.GameMsg_JGYF.JGYF_ReelSetting.encode(message.ReelSetting[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.ConditionType != null && Object.hasOwnProperty.call(message, "ConditionType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ConditionType);
            if (message.ConditionValue != null && Object.hasOwnProperty.call(message, "ConditionValue"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.ConditionValue);
            return writer;
        };

        /**
         * Encodes the specified JGYF_GameReels message, length delimited. Does not implicitly {@link GameMsg_JGYF.JGYF_GameReels.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JGYF.JGYF_GameReels
         * @static
         * @param {GameMsg_JGYF.IJGYF_GameReels} message JGYF_GameReels message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JGYF_GameReels.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JGYF_GameReels message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JGYF.JGYF_GameReels
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JGYF.JGYF_GameReels} JGYF_GameReels
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_GameReels.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JGYF.JGYF_GameReels();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.ID = reader.int32();
                    break;
                case 3:
                    if (!(message.ReelSetting && message.ReelSetting.length))
                        message.ReelSetting = [];
                    message.ReelSetting.push($root.GameMsg_JGYF.JGYF_ReelSetting.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.ConditionType = reader.string();
                    break;
                case 5:
                    message.ConditionValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JGYF_GameReels message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JGYF.JGYF_GameReels
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JGYF.JGYF_GameReels} JGYF_GameReels
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JGYF_GameReels.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JGYF_GameReels message.
         * @function verify
         * @memberof GameMsg_JGYF.JGYF_GameReels
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JGYF_GameReels.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.ReelSetting != null && message.hasOwnProperty("ReelSetting")) {
                if (!Array.isArray(message.ReelSetting))
                    return "ReelSetting: array expected";
                for (var i = 0; i < message.ReelSetting.length; ++i) {
                    var error = $root.GameMsg_JGYF.JGYF_ReelSetting.verify(message.ReelSetting[i]);
                    if (error)
                        return "ReelSetting." + error;
                }
            }
            if (message.ConditionType != null && message.hasOwnProperty("ConditionType"))
                if (!$util.isString(message.ConditionType))
                    return "ConditionType: string expected";
            if (message.ConditionValue != null && message.hasOwnProperty("ConditionValue"))
                if (!$util.isString(message.ConditionValue))
                    return "ConditionValue: string expected";
            return null;
        };

        /**
         * Creates a JGYF_GameReels message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JGYF.JGYF_GameReels
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JGYF.JGYF_GameReels} JGYF_GameReels
         */
        JGYF_GameReels.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JGYF.JGYF_GameReels)
                return object;
            var message = new $root.GameMsg_JGYF.JGYF_GameReels();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.ReelSetting) {
                if (!Array.isArray(object.ReelSetting))
                    throw TypeError(".GameMsg_JGYF.JGYF_GameReels.ReelSetting: array expected");
                message.ReelSetting = [];
                for (var i = 0; i < object.ReelSetting.length; ++i) {
                    if (typeof object.ReelSetting[i] !== "object")
                        throw TypeError(".GameMsg_JGYF.JGYF_GameReels.ReelSetting: object expected");
                    message.ReelSetting[i] = $root.GameMsg_JGYF.JGYF_ReelSetting.fromObject(object.ReelSetting[i]);
                }
            }
            if (object.ConditionType != null)
                message.ConditionType = String(object.ConditionType);
            if (object.ConditionValue != null)
                message.ConditionValue = String(object.ConditionValue);
            return message;
        };

        /**
         * Creates a plain object from a JGYF_GameReels message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JGYF.JGYF_GameReels
         * @static
         * @param {GameMsg_JGYF.JGYF_GameReels} message JGYF_GameReels
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JGYF_GameReels.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ReelSetting = [];
            if (options.defaults) {
                object.Name = "";
                object.ID = 0;
                object.ConditionType = "";
                object.ConditionValue = "";
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.ReelSetting && message.ReelSetting.length) {
                object.ReelSetting = [];
                for (var j = 0; j < message.ReelSetting.length; ++j)
                    object.ReelSetting[j] = $root.GameMsg_JGYF.JGYF_ReelSetting.toObject(message.ReelSetting[j], options);
            }
            if (message.ConditionType != null && message.hasOwnProperty("ConditionType"))
                object.ConditionType = message.ConditionType;
            if (message.ConditionValue != null && message.hasOwnProperty("ConditionValue"))
                object.ConditionValue = message.ConditionValue;
            return object;
        };

        /**
         * Converts this JGYF_GameReels to JSON.
         * @function toJSON
         * @memberof GameMsg_JGYF.JGYF_GameReels
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JGYF_GameReels.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JGYF_GameReels;
    })();

    return GameMsg_JGYF;
})();

module.exports = $root;
