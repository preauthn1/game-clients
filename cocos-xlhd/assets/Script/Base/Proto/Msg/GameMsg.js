/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg = (function() {

    /**
     * Namespace GameMsg.
     * @exports GameMsg
     * @namespace
     */
    var GameMsg = {};

    GameMsg.TestGameChat = (function() {

        /**
         * Properties of a TestGameChat.
         * @memberof GameMsg
         * @interface ITestGameChat
         * @property {string} Message TestGameChat Message
         */

        /**
         * Constructs a new TestGameChat.
         * @memberof GameMsg
         * @classdesc Represents a TestGameChat.
         * @implements ITestGameChat
         * @constructor
         * @param {GameMsg.ITestGameChat=} [properties] Properties to set
         */
        function TestGameChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestGameChat Message.
         * @member {string} Message
         * @memberof GameMsg.TestGameChat
         * @instance
         */
        TestGameChat.prototype.Message = "";

        /**
         * Creates a new TestGameChat instance using the specified properties.
         * @function create
         * @memberof GameMsg.TestGameChat
         * @static
         * @param {GameMsg.ITestGameChat=} [properties] Properties to set
         * @returns {GameMsg.TestGameChat} TestGameChat instance
         */
        TestGameChat.create = function create(properties) {
            return new TestGameChat(properties);
        };

        /**
         * Encodes the specified TestGameChat message. Does not implicitly {@link GameMsg.TestGameChat.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.TestGameChat
         * @static
         * @param {GameMsg.ITestGameChat} message TestGameChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified TestGameChat message, length delimited. Does not implicitly {@link GameMsg.TestGameChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.TestGameChat
         * @static
         * @param {GameMsg.ITestGameChat} message TestGameChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameChat message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.TestGameChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.TestGameChat} TestGameChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.TestGameChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Message"))
                throw $util.ProtocolError("missing required 'Message'", { instance:message });
            return message;
        };

        /**
         * Decodes a TestGameChat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.TestGameChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.TestGameChat} TestGameChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestGameChat message.
         * @function verify
         * @memberof GameMsg.TestGameChat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestGameChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Message))
                return "Message:string expected";
            return null;
        };

        /**
         * Creates a TestGameChat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.TestGameChat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.TestGameChat} TestGameChat
         */
        TestGameChat.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.TestGameChat)
                return object;
            var message = new $root.GameMsg.TestGameChat();
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a TestGameChat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.TestGameChat
         * @static
         * @param {GameMsg.TestGameChat} message TestGameChat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestGameChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Message = "";
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this TestGameChat to JSON.
         * @function toJSON
         * @memberof GameMsg.TestGameChat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameChat;
    })();

    GameMsg.TestGameScore = (function() {

        /**
         * Properties of a TestGameScore.
         * @memberof GameMsg
         * @interface ITestGameScore
         * @property {number} Score TestGameScore Score
         */

        /**
         * Constructs a new TestGameScore.
         * @memberof GameMsg
         * @classdesc Represents a TestGameScore.
         * @implements ITestGameScore
         * @constructor
         * @param {GameMsg.ITestGameScore=} [properties] Properties to set
         */
        function TestGameScore(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestGameScore Score.
         * @member {number} Score
         * @memberof GameMsg.TestGameScore
         * @instance
         */
        TestGameScore.prototype.Score = 0;

        /**
         * Creates a new TestGameScore instance using the specified properties.
         * @function create
         * @memberof GameMsg.TestGameScore
         * @static
         * @param {GameMsg.ITestGameScore=} [properties] Properties to set
         * @returns {GameMsg.TestGameScore} TestGameScore instance
         */
        TestGameScore.create = function create(properties) {
            return new TestGameScore(properties);
        };

        /**
         * Encodes the specified TestGameScore message. Does not implicitly {@link GameMsg.TestGameScore.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.TestGameScore
         * @static
         * @param {GameMsg.ITestGameScore} message TestGameScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Score);
            return writer;
        };

        /**
         * Encodes the specified TestGameScore message, length delimited. Does not implicitly {@link GameMsg.TestGameScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.TestGameScore
         * @static
         * @param {GameMsg.ITestGameScore} message TestGameScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameScore message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.TestGameScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.TestGameScore} TestGameScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.TestGameScore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Score = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Score"))
                throw $util.ProtocolError("missing required 'Score'", { instance:message });
            return message;
        };

        /**
         * Decodes a TestGameScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.TestGameScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.TestGameScore} TestGameScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameScore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestGameScore message.
         * @function verify
         * @memberof GameMsg.TestGameScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestGameScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Score))
                return "Score:integer expected";
            return null;
        };

        /**
         * Creates a TestGameScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.TestGameScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.TestGameScore} TestGameScore
         */
        TestGameScore.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.TestGameScore)
                return object;
            var message = new $root.GameMsg.TestGameScore();
            if (object.Score != null)
                message.Score = object.Score | 0;
            return message;
        };

        /**
         * Creates a plain object from a TestGameScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.TestGameScore
         * @static
         * @param {GameMsg.TestGameScore} message TestGameScore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestGameScore.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Score = 0;
            if (message.Score != null && message.hasOwnProperty("Score"))
                object.Score = message.Score;
            return object;
        };

        /**
         * Converts this TestGameScore to JSON.
         * @function toJSON
         * @memberof GameMsg.TestGameScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameScore;
    })();

    GameMsg.TestGameEnd = (function() {

        /**
         * Properties of a TestGameEnd.
         * @memberof GameMsg
         * @interface ITestGameEnd
         */

        /**
         * Constructs a new TestGameEnd.
         * @memberof GameMsg
         * @classdesc Represents a TestGameEnd.
         * @implements ITestGameEnd
         * @constructor
         * @param {GameMsg.ITestGameEnd=} [properties] Properties to set
         */
        function TestGameEnd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new TestGameEnd instance using the specified properties.
         * @function create
         * @memberof GameMsg.TestGameEnd
         * @static
         * @param {GameMsg.ITestGameEnd=} [properties] Properties to set
         * @returns {GameMsg.TestGameEnd} TestGameEnd instance
         */
        TestGameEnd.create = function create(properties) {
            return new TestGameEnd(properties);
        };

        /**
         * Encodes the specified TestGameEnd message. Does not implicitly {@link GameMsg.TestGameEnd.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.TestGameEnd
         * @static
         * @param {GameMsg.ITestGameEnd} message TestGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified TestGameEnd message, length delimited. Does not implicitly {@link GameMsg.TestGameEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.TestGameEnd
         * @static
         * @param {GameMsg.ITestGameEnd} message TestGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameEnd message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.TestGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.TestGameEnd} TestGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.TestGameEnd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TestGameEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.TestGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.TestGameEnd} TestGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestGameEnd message.
         * @function verify
         * @memberof GameMsg.TestGameEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestGameEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a TestGameEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.TestGameEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.TestGameEnd} TestGameEnd
         */
        TestGameEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.TestGameEnd)
                return object;
            return new $root.GameMsg.TestGameEnd();
        };

        /**
         * Creates a plain object from a TestGameEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.TestGameEnd
         * @static
         * @param {GameMsg.TestGameEnd} message TestGameEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestGameEnd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this TestGameEnd to JSON.
         * @function toJSON
         * @memberof GameMsg.TestGameEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameEnd;
    })();

    GameMsg.UserEnter = (function() {

        /**
         * Properties of a UserEnter.
         * @memberof GameMsg
         * @interface IUserEnter
         * @property {GameMsg.IGameUser} User UserEnter User
         */

        /**
         * Constructs a new UserEnter.
         * @memberof GameMsg
         * @classdesc Represents a UserEnter.
         * @implements IUserEnter
         * @constructor
         * @param {GameMsg.IUserEnter=} [properties] Properties to set
         */
        function UserEnter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserEnter User.
         * @member {GameMsg.IGameUser} User
         * @memberof GameMsg.UserEnter
         * @instance
         */
        UserEnter.prototype.User = null;

        /**
         * Creates a new UserEnter instance using the specified properties.
         * @function create
         * @memberof GameMsg.UserEnter
         * @static
         * @param {GameMsg.IUserEnter=} [properties] Properties to set
         * @returns {GameMsg.UserEnter} UserEnter instance
         */
        UserEnter.create = function create(properties) {
            return new UserEnter(properties);
        };

        /**
         * Encodes the specified UserEnter message. Does not implicitly {@link GameMsg.UserEnter.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.UserEnter
         * @static
         * @param {GameMsg.IUserEnter} message UserEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserEnter message, length delimited. Does not implicitly {@link GameMsg.UserEnter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.UserEnter
         * @static
         * @param {GameMsg.IUserEnter} message UserEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEnter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserEnter message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.UserEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.UserEnter} UserEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.UserEnter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.GameMsg.GameUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("User"))
                throw $util.ProtocolError("missing required 'User'", { instance:message });
            return message;
        };

        /**
         * Decodes a UserEnter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.UserEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.UserEnter} UserEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEnter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserEnter message.
         * @function verify
         * @memberof GameMsg.UserEnter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserEnter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserEnter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.UserEnter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.UserEnter} UserEnter
         */
        UserEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.UserEnter)
                return object;
            var message = new $root.GameMsg.UserEnter();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg.UserEnter.User:object expected");
                message.User = $root.GameMsg.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserEnter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.UserEnter
         * @static
         * @param {GameMsg.UserEnter} message UserEnter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserEnter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.User = null;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User = $root.GameMsg.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserEnter to JSON.
         * @function toJSON
         * @memberof GameMsg.UserEnter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserEnter;
    })();

    GameMsg.UserLeave = (function() {

        /**
         * Properties of a UserLeave.
         * @memberof GameMsg
         * @interface IUserLeave
         * @property {GameMsg.IGameUser} User UserLeave User
         */

        /**
         * Constructs a new UserLeave.
         * @memberof GameMsg
         * @classdesc Represents a UserLeave.
         * @implements IUserLeave
         * @constructor
         * @param {GameMsg.IUserLeave=} [properties] Properties to set
         */
        function UserLeave(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLeave User.
         * @member {GameMsg.IGameUser} User
         * @memberof GameMsg.UserLeave
         * @instance
         */
        UserLeave.prototype.User = null;

        /**
         * Creates a new UserLeave instance using the specified properties.
         * @function create
         * @memberof GameMsg.UserLeave
         * @static
         * @param {GameMsg.IUserLeave=} [properties] Properties to set
         * @returns {GameMsg.UserLeave} UserLeave instance
         */
        UserLeave.create = function create(properties) {
            return new UserLeave(properties);
        };

        /**
         * Encodes the specified UserLeave message. Does not implicitly {@link GameMsg.UserLeave.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.UserLeave
         * @static
         * @param {GameMsg.IUserLeave} message UserLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLeave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserLeave message, length delimited. Does not implicitly {@link GameMsg.UserLeave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.UserLeave
         * @static
         * @param {GameMsg.IUserLeave} message UserLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLeave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLeave message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.UserLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.UserLeave} UserLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLeave.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.UserLeave();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.GameMsg.GameUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("User"))
                throw $util.ProtocolError("missing required 'User'", { instance:message });
            return message;
        };

        /**
         * Decodes a UserLeave message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.UserLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.UserLeave} UserLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLeave.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLeave message.
         * @function verify
         * @memberof GameMsg.UserLeave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLeave.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserLeave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.UserLeave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.UserLeave} UserLeave
         */
        UserLeave.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.UserLeave)
                return object;
            var message = new $root.GameMsg.UserLeave();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg.UserLeave.User:object expected");
                message.User = $root.GameMsg.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserLeave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.UserLeave
         * @static
         * @param {GameMsg.UserLeave} message UserLeave
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLeave.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.User = null;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User = $root.GameMsg.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserLeave to JSON.
         * @function toJSON
         * @memberof GameMsg.UserLeave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLeave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLeave;
    })();

    GameMsg.UserStateChange = (function() {

        /**
         * Properties of a UserStateChange.
         * @memberof GameMsg
         * @interface IUserStateChange
         * @property {GameMsg.IGameUser} User UserStateChange User
         */

        /**
         * Constructs a new UserStateChange.
         * @memberof GameMsg
         * @classdesc Represents a UserStateChange.
         * @implements IUserStateChange
         * @constructor
         * @param {GameMsg.IUserStateChange=} [properties] Properties to set
         */
        function UserStateChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserStateChange User.
         * @member {GameMsg.IGameUser} User
         * @memberof GameMsg.UserStateChange
         * @instance
         */
        UserStateChange.prototype.User = null;

        /**
         * Creates a new UserStateChange instance using the specified properties.
         * @function create
         * @memberof GameMsg.UserStateChange
         * @static
         * @param {GameMsg.IUserStateChange=} [properties] Properties to set
         * @returns {GameMsg.UserStateChange} UserStateChange instance
         */
        UserStateChange.create = function create(properties) {
            return new UserStateChange(properties);
        };

        /**
         * Encodes the specified UserStateChange message. Does not implicitly {@link GameMsg.UserStateChange.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.UserStateChange
         * @static
         * @param {GameMsg.IUserStateChange} message UserStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStateChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserStateChange message, length delimited. Does not implicitly {@link GameMsg.UserStateChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.UserStateChange
         * @static
         * @param {GameMsg.IUserStateChange} message UserStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStateChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserStateChange message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.UserStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.UserStateChange} UserStateChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStateChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.UserStateChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.GameMsg.GameUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("User"))
                throw $util.ProtocolError("missing required 'User'", { instance:message });
            return message;
        };

        /**
         * Decodes a UserStateChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.UserStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.UserStateChange} UserStateChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStateChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserStateChange message.
         * @function verify
         * @memberof GameMsg.UserStateChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserStateChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserStateChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.UserStateChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.UserStateChange} UserStateChange
         */
        UserStateChange.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.UserStateChange)
                return object;
            var message = new $root.GameMsg.UserStateChange();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg.UserStateChange.User:object expected");
                message.User = $root.GameMsg.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserStateChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.UserStateChange
         * @static
         * @param {GameMsg.UserStateChange} message UserStateChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserStateChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.User = null;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User = $root.GameMsg.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserStateChange to JSON.
         * @function toJSON
         * @memberof GameMsg.UserStateChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserStateChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserStateChange;
    })();

    GameMsg.GameUser = (function() {

        /**
         * Constructs a new GameUser.
         * @memberof GameMsg
         * @classdesc Represents a GameUser.
         * @implements IGameUser
         * @constructor
         * @param {GameMsg.IGameUser=} [properties] Properties to set
         */
        function GameUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameUser UserID.
         * @member {number} UserID
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.UserID = 0;

        /**
         * GameUser NickName.
         * @member {string} NickName
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.NickName = "";

        /**
         * GameUser Sex.
         * @member {number} Sex
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.Sex = 0;

        /**
         * GameUser FaceID.
         * @member {number} FaceID
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.FaceID = 0;

        /**
         * GameUser Score.
         * @member {number|Long} Score
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * GameUser WinCount.
         * @member {number} WinCount
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.WinCount = 0;

        /**
         * GameUser LoseCount.
         * @member {number} LoseCount
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.LoseCount = 0;

        /**
         * GameUser DrawCount.
         * @member {number} DrawCount
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.DrawCount = 0;

        /**
         * GameUser StateValue.
         * @member {number} StateValue
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.StateValue = 0;

        /**
         * GameUser TableNo.
         * @member {number} TableNo
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.TableNo = 0;

        /**
         * GameUser SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.SeatNo = 0;

        /**
         * GameUser LastWinLose.
         * @member {number} LastWinLose
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.LastWinLose = 0;

        /**
         * GameUser Coupon.
         * @member {number|Long} Coupon
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.Coupon = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * GameUser UpdateCoupon.
         * @member {number|Long} UpdateCoupon
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.UpdateCoupon = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * GameUser AvatarFrameID.
         * @member {number} AvatarFrameID
         * @memberof GameMsg.GameUser
         * @instance
         */
        GameUser.prototype.AvatarFrameID = 0;

        /**
         * Creates a new GameUser instance using the specified properties.
         * @function create
         * @memberof GameMsg.GameUser
         * @static
         * @param {GameMsg.IGameUser=} [properties] Properties to set
         * @returns {GameMsg.GameUser} GameUser instance
         */
        GameUser.create = function create(properties) {
            return new GameUser(properties);
        };

        /**
         * Encodes the specified GameUser message. Does not implicitly {@link GameMsg.GameUser.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.GameUser
         * @static
         * @param {GameMsg.IGameUser} message GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameUser.encode = function encode(message, writer) {
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
            if (message.LastWinLose != null && message.hasOwnProperty("LastWinLose"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.LastWinLose);
            if (message.Coupon != null && message.hasOwnProperty("Coupon"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.Coupon);
            if (message.UpdateCoupon != null && message.hasOwnProperty("UpdateCoupon"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.UpdateCoupon);
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.AvatarFrameID);
            return writer;
        };

        /**
         * Encodes the specified GameUser message, length delimited. Does not implicitly {@link GameMsg.GameUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.GameUser
         * @static
         * @param {GameMsg.IGameUser} message GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameUser message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.GameUser} GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.GameUser();
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
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            if (!message.hasOwnProperty("NickName"))
                throw $util.ProtocolError("missing required 'NickName'", { instance:message });
            if (!message.hasOwnProperty("Sex"))
                throw $util.ProtocolError("missing required 'Sex'", { instance:message });
            if (!message.hasOwnProperty("FaceID"))
                throw $util.ProtocolError("missing required 'FaceID'", { instance:message });
            if (!message.hasOwnProperty("Score"))
                throw $util.ProtocolError("missing required 'Score'", { instance:message });
            if (!message.hasOwnProperty("WinCount"))
                throw $util.ProtocolError("missing required 'WinCount'", { instance:message });
            if (!message.hasOwnProperty("LoseCount"))
                throw $util.ProtocolError("missing required 'LoseCount'", { instance:message });
            if (!message.hasOwnProperty("DrawCount"))
                throw $util.ProtocolError("missing required 'DrawCount'", { instance:message });
            if (!message.hasOwnProperty("StateValue"))
                throw $util.ProtocolError("missing required 'StateValue'", { instance:message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance:message });
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance:message });
            return message;
        };

        /**
         * Decodes a GameUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.GameUser} GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameUser message.
         * @function verify
         * @memberof GameMsg.GameUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (!$util.isString(message.NickName))
                return "NickName:string expected";
            if (!$util.isInteger(message.Sex))
                return "Sex:integer expected";
            if (!$util.isInteger(message.FaceID))
                return "FaceID:integer expected";
            if (!$util.isInteger(message.Score) && !(message.Score && $util.isInteger(message.Score.low) && $util.isInteger(message.Score.high)))
                return "Score:integer|Long expected";
            if (!$util.isInteger(message.WinCount))
                return "WinCount:integer expected";
            if (!$util.isInteger(message.LoseCount))
                return "LoseCount:integer expected";
            if (!$util.isInteger(message.DrawCount))
                return "DrawCount:integer expected";
            if (!$util.isInteger(message.StateValue))
                return "StateValue:integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo:integer expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo:integer expected";
            if (message.LastWinLose != null && message.hasOwnProperty("LastWinLose"))
                if (!$util.isInteger(message.LastWinLose))
                    return "LastWinLose:integer expected";
            if (message.Coupon != null && message.hasOwnProperty("Coupon"))
                if (!$util.isInteger(message.Coupon) && !(message.Coupon && $util.isInteger(message.Coupon.low) && $util.isInteger(message.Coupon.high)))
                    return "Coupon:integer|Long expected";
            if (message.UpdateCoupon != null && message.hasOwnProperty("UpdateCoupon"))
                if (!$util.isInteger(message.UpdateCoupon) && !(message.UpdateCoupon && $util.isInteger(message.UpdateCoupon.low) && $util.isInteger(message.UpdateCoupon.high)))
                    return "UpdateCoupon:integer|Long expected";
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                if (!$util.isInteger(message.AvatarFrameID))
                    return "AvatarFrameID:integer expected";
            return null;
        };

        /**
         * Creates a GameUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.GameUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.GameUser} GameUser
         */
        GameUser.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.GameUser)
                return object;
            var message = new $root.GameMsg.GameUser();
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
         * Creates a plain object from a GameUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.GameUser
         * @static
         * @param {GameMsg.GameUser} message GameUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameUser.toObject = function toObject(message, options) {
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
                    object.Score = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.Score = options.longs === String ? "0" :0;
                object.WinCount = 0;
                object.LoseCount = 0;
                object.DrawCount = 0;
                object.StateValue = 0;
                object.TableNo = 0;
                object.SeatNo = 0;
                object.LastWinLose = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Coupon = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.Coupon = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UpdateCoupon = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.UpdateCoupon = options.longs === String ? "0" :0;
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
                    object.Score = options.longs === String ? String(message.Score) :message.Score;
                else
                    object.Score = options.longs === String ? $util.Long.prototype.toString.call(message.Score) :options.longs === Number ? new $util.LongBits(message.Score.low >>> 0, message.Score.high >>> 0).toNumber() :message.Score;
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
                    object.Coupon = options.longs === String ? String(message.Coupon) :message.Coupon;
                else
                    object.Coupon = options.longs === String ? $util.Long.prototype.toString.call(message.Coupon) :options.longs === Number ? new $util.LongBits(message.Coupon.low >>> 0, message.Coupon.high >>> 0).toNumber() :message.Coupon;
            if (message.UpdateCoupon != null && message.hasOwnProperty("UpdateCoupon"))
                if (typeof message.UpdateCoupon === "number")
                    object.UpdateCoupon = options.longs === String ? String(message.UpdateCoupon) :message.UpdateCoupon;
                else
                    object.UpdateCoupon = options.longs === String ? $util.Long.prototype.toString.call(message.UpdateCoupon) :options.longs === Number ? new $util.LongBits(message.UpdateCoupon.low >>> 0, message.UpdateCoupon.high >>> 0).toNumber() :message.UpdateCoupon;
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                object.AvatarFrameID = message.AvatarFrameID;
            return object;
        };

        /**
         * Converts this GameUser to JSON.
         * @function toJSON
         * @memberof GameMsg.GameUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameUser;
    })();

    GameMsg.GamePoker = (function() {

        /**
         * Properties of a GamePoker.
         * @memberof GameMsg
         * @interface IGamePoker
         * @property {Array.<GameMsg.IUserPoker>|null} [Poker] GamePoker Poker
         */

        /**
         * Constructs a new GamePoker.
         * @memberof GameMsg
         * @classdesc Represents a GamePoker.
         * @implements IGamePoker
         * @constructor
         * @param {GameMsg.IGamePoker=} [properties] Properties to set
         */
        function GamePoker(properties) {
            this.Poker = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GamePoker Poker.
         * @member {Array.<GameMsg.IUserPoker>} Poker
         * @memberof GameMsg.GamePoker
         * @instance
         */
        GamePoker.prototype.Poker = $util.emptyArray;

        /**
         * Creates a new GamePoker instance using the specified properties.
         * @function create
         * @memberof GameMsg.GamePoker
         * @static
         * @param {GameMsg.IGamePoker=} [properties] Properties to set
         * @returns {GameMsg.GamePoker} GamePoker instance
         */
        GamePoker.create = function create(properties) {
            return new GamePoker(properties);
        };

        /**
         * Encodes the specified GamePoker message. Does not implicitly {@link GameMsg.GamePoker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.GamePoker
         * @static
         * @param {GameMsg.IGamePoker} message GamePoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePoker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Poker != null && message.Poker.length)
                for (var i = 0; i < message.Poker.length; ++i)
                    $root.GameMsg.UserPoker.encode(message.Poker[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GamePoker message, length delimited. Does not implicitly {@link GameMsg.GamePoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.GamePoker
         * @static
         * @param {GameMsg.IGamePoker} message GamePoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GamePoker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.GamePoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.GamePoker} GamePoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.GamePoker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Poker && message.Poker.length))
                        message.Poker = [];
                    message.Poker.push($root.GameMsg.UserPoker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GamePoker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.GamePoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.GamePoker} GamePoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePoker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GamePoker message.
         * @function verify
         * @memberof GameMsg.GamePoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GamePoker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Poker != null && message.hasOwnProperty("Poker")) {
                if (!Array.isArray(message.Poker))
                    return "Poker:array expected";
                for (var i = 0; i < message.Poker.length; ++i) {
                    var error = $root.GameMsg.UserPoker.verify(message.Poker[i]);
                    if (error)
                        return "Poker." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GamePoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.GamePoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.GamePoker} GamePoker
         */
        GamePoker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.GamePoker)
                return object;
            var message = new $root.GameMsg.GamePoker();
            if (object.Poker) {
                if (!Array.isArray(object.Poker))
                    throw TypeError(".GameMsg.GamePoker.Poker:array expected");
                message.Poker = [];
                for (var i = 0; i < object.Poker.length; ++i) {
                    if (typeof object.Poker[i] !== "object")
                        throw TypeError(".GameMsg.GamePoker.Poker:object expected");
                    message.Poker[i] = $root.GameMsg.UserPoker.fromObject(object.Poker[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GamePoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.GamePoker
         * @static
         * @param {GameMsg.GamePoker} message GamePoker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GamePoker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Poker = [];
            if (message.Poker && message.Poker.length) {
                object.Poker = [];
                for (var j = 0; j < message.Poker.length; ++j)
                    object.Poker[j] = $root.GameMsg.UserPoker.toObject(message.Poker[j], options);
            }
            return object;
        };

        /**
         * Converts this GamePoker to JSON.
         * @function toJSON
         * @memberof GameMsg.GamePoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GamePoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GamePoker;
    })();

    GameMsg.UserPoker = (function() {

        /**
         * Properties of a UserPoker.
         * @memberof GameMsg
         * @interface IUserPoker
         * @property {number} UserID UserPoker UserID
         * @property {number} SeatNo UserPoker SeatNo
         * @property {Array.<GameMsg.IPokerCard>|null} [Cards] UserPoker Cards
         */

        /**
         * Constructs a new UserPoker.
         * @memberof GameMsg
         * @classdesc Represents a UserPoker.
         * @implements IUserPoker
         * @constructor
         * @param {GameMsg.IUserPoker=} [properties] Properties to set
         */
        function UserPoker(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserPoker UserID.
         * @member {number} UserID
         * @memberof GameMsg.UserPoker
         * @instance
         */
        UserPoker.prototype.UserID = 0;

        /**
         * UserPoker SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg.UserPoker
         * @instance
         */
        UserPoker.prototype.SeatNo = 0;

        /**
         * UserPoker Cards.
         * @member {Array.<GameMsg.IPokerCard>} Cards
         * @memberof GameMsg.UserPoker
         * @instance
         */
        UserPoker.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new UserPoker instance using the specified properties.
         * @function create
         * @memberof GameMsg.UserPoker
         * @static
         * @param {GameMsg.IUserPoker=} [properties] Properties to set
         * @returns {GameMsg.UserPoker} UserPoker instance
         */
        UserPoker.create = function create(properties) {
            return new UserPoker(properties);
        };

        /**
         * Encodes the specified UserPoker message. Does not implicitly {@link GameMsg.UserPoker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.UserPoker
         * @static
         * @param {GameMsg.IUserPoker} message UserPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPoker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SeatNo);
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.GameMsg.PokerCard.encode(message.Cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserPoker message, length delimited. Does not implicitly {@link GameMsg.UserPoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.UserPoker
         * @static
         * @param {GameMsg.IUserPoker} message UserPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserPoker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.UserPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.UserPoker} UserPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.UserPoker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.SeatNo = reader.int32();
                    break;
                case 3:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.GameMsg.PokerCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance:message });
            return message;
        };

        /**
         * Decodes a UserPoker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.UserPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.UserPoker} UserPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPoker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserPoker message.
         * @function verify
         * @memberof GameMsg.UserPoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPoker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo:integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards:array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.GameMsg.PokerCard.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserPoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.UserPoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.UserPoker} UserPoker
         */
        UserPoker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.UserPoker)
                return object;
            var message = new $root.GameMsg.UserPoker();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".GameMsg.UserPoker.Cards:array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg.UserPoker.Cards:object expected");
                    message.Cards[i] = $root.GameMsg.PokerCard.fromObject(object.Cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserPoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.UserPoker
         * @static
         * @param {GameMsg.UserPoker} message UserPoker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserPoker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Cards = [];
            if (options.defaults) {
                object.UserID = 0;
                object.SeatNo = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = $root.GameMsg.PokerCard.toObject(message.Cards[j], options);
            }
            return object;
        };

        /**
         * Converts this UserPoker to JSON.
         * @function toJSON
         * @memberof GameMsg.UserPoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserPoker;
    })();

    GameMsg.PokerCard = (function() {

        /**
         * Properties of a PokerCard.
         * @memberof GameMsg
         * @interface IPokerCard
         * @property {number} Color PokerCard Color
         * @property {number} CardNumber PokerCard CardNumber
         */

        /**
         * Constructs a new PokerCard.
         * @memberof GameMsg
         * @classdesc Represents a PokerCard.
         * @implements IPokerCard
         * @constructor
         * @param {GameMsg.IPokerCard=} [properties] Properties to set
         */
        function PokerCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PokerCard Color.
         * @member {number} Color
         * @memberof GameMsg.PokerCard
         * @instance
         */
        PokerCard.prototype.Color = 0;

        /**
         * PokerCard CardNumber.
         * @member {number} CardNumber
         * @memberof GameMsg.PokerCard
         * @instance
         */
        PokerCard.prototype.CardNumber = 0;

        /**
         * Creates a new PokerCard instance using the specified properties.
         * @function create
         * @memberof GameMsg.PokerCard
         * @static
         * @param {GameMsg.IPokerCard=} [properties] Properties to set
         * @returns {GameMsg.PokerCard} PokerCard instance
         */
        PokerCard.create = function create(properties) {
            return new PokerCard(properties);
        };

        /**
         * Encodes the specified PokerCard message. Does not implicitly {@link GameMsg.PokerCard.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.PokerCard
         * @static
         * @param {GameMsg.IPokerCard} message PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokerCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Color);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CardNumber);
            return writer;
        };

        /**
         * Encodes the specified PokerCard message, length delimited. Does not implicitly {@link GameMsg.PokerCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.PokerCard
         * @static
         * @param {GameMsg.IPokerCard} message PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokerCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PokerCard message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.PokerCard} PokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokerCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.PokerCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Color = reader.int32();
                    break;
                case 2:
                    message.CardNumber = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Color"))
                throw $util.ProtocolError("missing required 'Color'", { instance:message });
            if (!message.hasOwnProperty("CardNumber"))
                throw $util.ProtocolError("missing required 'CardNumber'", { instance:message });
            return message;
        };

        /**
         * Decodes a PokerCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.PokerCard} PokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokerCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PokerCard message.
         * @function verify
         * @memberof GameMsg.PokerCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PokerCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Color))
                return "Color:integer expected";
            if (!$util.isInteger(message.CardNumber))
                return "CardNumber:integer expected";
            return null;
        };

        /**
         * Creates a PokerCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.PokerCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.PokerCard} PokerCard
         */
        PokerCard.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.PokerCard)
                return object;
            var message = new $root.GameMsg.PokerCard();
            if (object.Color != null)
                message.Color = object.Color | 0;
            if (object.CardNumber != null)
                message.CardNumber = object.CardNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from a PokerCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.PokerCard
         * @static
         * @param {GameMsg.PokerCard} message PokerCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PokerCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Color = 0;
                object.CardNumber = 0;
            }
            if (message.Color != null && message.hasOwnProperty("Color"))
                object.Color = message.Color;
            if (message.CardNumber != null && message.hasOwnProperty("CardNumber"))
                object.CardNumber = message.CardNumber;
            return object;
        };

        /**
         * Converts this PokerCard to JSON.
         * @function toJSON
         * @memberof GameMsg.PokerCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PokerCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PokerCard;
    })();

    GameMsg.UserActionCommited = (function() {

        /**
         * Properties of a UserActionCommited.
         * @memberof GameMsg
         * @interface IUserActionCommited
         * @property {string} ActionName UserActionCommited ActionName
         */

        /**
         * Constructs a new UserActionCommited.
         * @memberof GameMsg
         * @classdesc Represents a UserActionCommited.
         * @implements IUserActionCommited
         * @constructor
         * @param {GameMsg.IUserActionCommited=} [properties] Properties to set
         */
        function UserActionCommited(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserActionCommited ActionName.
         * @member {string} ActionName
         * @memberof GameMsg.UserActionCommited
         * @instance
         */
        UserActionCommited.prototype.ActionName = "";

        /**
         * Creates a new UserActionCommited instance using the specified properties.
         * @function create
         * @memberof GameMsg.UserActionCommited
         * @static
         * @param {GameMsg.IUserActionCommited=} [properties] Properties to set
         * @returns {GameMsg.UserActionCommited} UserActionCommited instance
         */
        UserActionCommited.create = function create(properties) {
            return new UserActionCommited(properties);
        };

        /**
         * Encodes the specified UserActionCommited message. Does not implicitly {@link GameMsg.UserActionCommited.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.UserActionCommited
         * @static
         * @param {GameMsg.IUserActionCommited} message UserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserActionCommited.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified UserActionCommited message, length delimited. Does not implicitly {@link GameMsg.UserActionCommited.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.UserActionCommited
         * @static
         * @param {GameMsg.IUserActionCommited} message UserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserActionCommited.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserActionCommited message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.UserActionCommited} UserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserActionCommited.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.UserActionCommited();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ActionName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ActionName"))
                throw $util.ProtocolError("missing required 'ActionName'", { instance:message });
            return message;
        };

        /**
         * Decodes a UserActionCommited message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.UserActionCommited} UserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserActionCommited.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserActionCommited message.
         * @function verify
         * @memberof GameMsg.UserActionCommited
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserActionCommited.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ActionName))
                return "ActionName:string expected";
            return null;
        };

        /**
         * Creates a UserActionCommited message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.UserActionCommited
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.UserActionCommited} UserActionCommited
         */
        UserActionCommited.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.UserActionCommited)
                return object;
            var message = new $root.GameMsg.UserActionCommited();
            if (object.ActionName != null)
                message.ActionName = String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from a UserActionCommited message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.UserActionCommited
         * @static
         * @param {GameMsg.UserActionCommited} message UserActionCommited
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserActionCommited.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ActionName = "";
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                object.ActionName = message.ActionName;
            return object;
        };

        /**
         * Converts this UserActionCommited to JSON.
         * @function toJSON
         * @memberof GameMsg.UserActionCommited
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserActionCommited.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserActionCommited;
    })();

    GameMsg.AllUserActionCommited = (function() {

        /**
         * Properties of an AllUserActionCommited.
         * @memberof GameMsg
         * @interface IAllUserActionCommited
         * @property {string} ActionName AllUserActionCommited ActionName
         */

        /**
         * Constructs a new AllUserActionCommited.
         * @memberof GameMsg
         * @classdesc Represents an AllUserActionCommited.
         * @implements IAllUserActionCommited
         * @constructor
         * @param {GameMsg.IAllUserActionCommited=} [properties] Properties to set
         */
        function AllUserActionCommited(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AllUserActionCommited ActionName.
         * @member {string} ActionName
         * @memberof GameMsg.AllUserActionCommited
         * @instance
         */
        AllUserActionCommited.prototype.ActionName = "";

        /**
         * Creates a new AllUserActionCommited instance using the specified properties.
         * @function create
         * @memberof GameMsg.AllUserActionCommited
         * @static
         * @param {GameMsg.IAllUserActionCommited=} [properties] Properties to set
         * @returns {GameMsg.AllUserActionCommited} AllUserActionCommited instance
         */
        AllUserActionCommited.create = function create(properties) {
            return new AllUserActionCommited(properties);
        };

        /**
         * Encodes the specified AllUserActionCommited message. Does not implicitly {@link GameMsg.AllUserActionCommited.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.AllUserActionCommited
         * @static
         * @param {GameMsg.IAllUserActionCommited} message AllUserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllUserActionCommited.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified AllUserActionCommited message, length delimited. Does not implicitly {@link GameMsg.AllUserActionCommited.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.AllUserActionCommited
         * @static
         * @param {GameMsg.IAllUserActionCommited} message AllUserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllUserActionCommited.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllUserActionCommited message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.AllUserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.AllUserActionCommited} AllUserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllUserActionCommited.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.AllUserActionCommited();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ActionName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ActionName"))
                throw $util.ProtocolError("missing required 'ActionName'", { instance:message });
            return message;
        };

        /**
         * Decodes an AllUserActionCommited message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.AllUserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.AllUserActionCommited} AllUserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllUserActionCommited.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AllUserActionCommited message.
         * @function verify
         * @memberof GameMsg.AllUserActionCommited
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AllUserActionCommited.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ActionName))
                return "ActionName:string expected";
            return null;
        };

        /**
         * Creates an AllUserActionCommited message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.AllUserActionCommited
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.AllUserActionCommited} AllUserActionCommited
         */
        AllUserActionCommited.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.AllUserActionCommited)
                return object;
            var message = new $root.GameMsg.AllUserActionCommited();
            if (object.ActionName != null)
                message.ActionName = String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from an AllUserActionCommited message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.AllUserActionCommited
         * @static
         * @param {GameMsg.AllUserActionCommited} message AllUserActionCommited
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AllUserActionCommited.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ActionName = "";
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                object.ActionName = message.ActionName;
            return object;
        };

        /**
         * Converts this AllUserActionCommited to JSON.
         * @function toJSON
         * @memberof GameMsg.AllUserActionCommited
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllUserActionCommited.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AllUserActionCommited;
    })();

    GameMsg.LookOnUserNotify = (function() {

        /**
         * Properties of a LookOnUserNotify.
         * @memberof GameMsg
         * @interface ILookOnUserNotify
         * @property {Array.<number>|null} [UserID] LookOnUserNotify UserID
         */

        /**
         * Constructs a new LookOnUserNotify.
         * @memberof GameMsg
         * @classdesc Represents a LookOnUserNotify.
         * @implements ILookOnUserNotify
         * @constructor
         * @param {GameMsg.ILookOnUserNotify=} [properties] Properties to set
         */
        function LookOnUserNotify(properties) {
            this.UserID = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LookOnUserNotify UserID.
         * @member {Array.<number>} UserID
         * @memberof GameMsg.LookOnUserNotify
         * @instance
         */
        LookOnUserNotify.prototype.UserID = $util.emptyArray;

        /**
         * Creates a new LookOnUserNotify instance using the specified properties.
         * @function create
         * @memberof GameMsg.LookOnUserNotify
         * @static
         * @param {GameMsg.ILookOnUserNotify=} [properties] Properties to set
         * @returns {GameMsg.LookOnUserNotify} LookOnUserNotify instance
         */
        LookOnUserNotify.create = function create(properties) {
            return new LookOnUserNotify(properties);
        };

        /**
         * Encodes the specified LookOnUserNotify message. Does not implicitly {@link GameMsg.LookOnUserNotify.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.LookOnUserNotify
         * @static
         * @param {GameMsg.ILookOnUserNotify} message LookOnUserNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LookOnUserNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.UserID.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.UserID.length; ++i)
                    writer.int32(message.UserID[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified LookOnUserNotify message, length delimited. Does not implicitly {@link GameMsg.LookOnUserNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.LookOnUserNotify
         * @static
         * @param {GameMsg.ILookOnUserNotify} message LookOnUserNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LookOnUserNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LookOnUserNotify message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.LookOnUserNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.LookOnUserNotify} LookOnUserNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LookOnUserNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.LookOnUserNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserID && message.UserID.length))
                        message.UserID = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.UserID.push(reader.int32());
                    } else
                        message.UserID.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LookOnUserNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.LookOnUserNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.LookOnUserNotify} LookOnUserNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LookOnUserNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LookOnUserNotify message.
         * @function verify
         * @memberof GameMsg.LookOnUserNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LookOnUserNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID")) {
                if (!Array.isArray(message.UserID))
                    return "UserID:array expected";
                for (var i = 0; i < message.UserID.length; ++i)
                    if (!$util.isInteger(message.UserID[i]))
                        return "UserID:integer[] expected";
            }
            return null;
        };

        /**
         * Creates a LookOnUserNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.LookOnUserNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.LookOnUserNotify} LookOnUserNotify
         */
        LookOnUserNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.LookOnUserNotify)
                return object;
            var message = new $root.GameMsg.LookOnUserNotify();
            if (object.UserID) {
                if (!Array.isArray(object.UserID))
                    throw TypeError(".GameMsg.LookOnUserNotify.UserID:array expected");
                message.UserID = [];
                for (var i = 0; i < object.UserID.length; ++i)
                    message.UserID[i] = object.UserID[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a LookOnUserNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.LookOnUserNotify
         * @static
         * @param {GameMsg.LookOnUserNotify} message LookOnUserNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LookOnUserNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserID = [];
            if (message.UserID && message.UserID.length) {
                object.UserID = [];
                for (var j = 0; j < message.UserID.length; ++j)
                    object.UserID[j] = message.UserID[j];
            }
            return object;
        };

        /**
         * Converts this LookOnUserNotify to JSON.
         * @function toJSON
         * @memberof GameMsg.LookOnUserNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LookOnUserNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LookOnUserNotify;
    })();

    GameMsg.UserLuckScore = (function() {

        /**
         * Properties of a UserLuckScore.
         * @memberof GameMsg
         * @interface IUserLuckScore
         * @property {number} UserID UserLuckScore UserID
         * @property {number|Long} Score UserLuckScore Score
         */

        /**
         * Constructs a new UserLuckScore.
         * @memberof GameMsg
         * @classdesc Represents a UserLuckScore.
         * @implements IUserLuckScore
         * @constructor
         * @param {GameMsg.IUserLuckScore=} [properties] Properties to set
         */
        function UserLuckScore(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLuckScore UserID.
         * @member {number} UserID
         * @memberof GameMsg.UserLuckScore
         * @instance
         */
        UserLuckScore.prototype.UserID = 0;

        /**
         * UserLuckScore Score.
         * @member {number|Long} Score
         * @memberof GameMsg.UserLuckScore
         * @instance
         */
        UserLuckScore.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * Creates a new UserLuckScore instance using the specified properties.
         * @function create
         * @memberof GameMsg.UserLuckScore
         * @static
         * @param {GameMsg.IUserLuckScore=} [properties] Properties to set
         * @returns {GameMsg.UserLuckScore} UserLuckScore instance
         */
        UserLuckScore.create = function create(properties) {
            return new UserLuckScore(properties);
        };

        /**
         * Encodes the specified UserLuckScore message. Does not implicitly {@link GameMsg.UserLuckScore.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.UserLuckScore
         * @static
         * @param {GameMsg.IUserLuckScore} message UserLuckScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Score);
            return writer;
        };

        /**
         * Encodes the specified UserLuckScore message, length delimited. Does not implicitly {@link GameMsg.UserLuckScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.UserLuckScore
         * @static
         * @param {GameMsg.IUserLuckScore} message UserLuckScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLuckScore message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.UserLuckScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.UserLuckScore} UserLuckScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.UserLuckScore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Score = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            if (!message.hasOwnProperty("Score"))
                throw $util.ProtocolError("missing required 'Score'", { instance:message });
            return message;
        };

        /**
         * Decodes a UserLuckScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.UserLuckScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.UserLuckScore} UserLuckScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLuckScore message.
         * @function verify
         * @memberof GameMsg.UserLuckScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLuckScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (!$util.isInteger(message.Score) && !(message.Score && $util.isInteger(message.Score.low) && $util.isInteger(message.Score.high)))
                return "Score:integer|Long expected";
            return null;
        };

        /**
         * Creates a UserLuckScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.UserLuckScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.UserLuckScore} UserLuckScore
         */
        UserLuckScore.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.UserLuckScore)
                return object;
            var message = new $root.GameMsg.UserLuckScore();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
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
         * Creates a plain object from a UserLuckScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.UserLuckScore
         * @static
         * @param {GameMsg.UserLuckScore} message UserLuckScore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLuckScore.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Score = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.Score = options.longs === String ? "0" :0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (typeof message.Score === "number")
                    object.Score = options.longs === String ? String(message.Score) :message.Score;
                else
                    object.Score = options.longs === String ? $util.Long.prototype.toString.call(message.Score) :options.longs === Number ? new $util.LongBits(message.Score.low >>> 0, message.Score.high >>> 0).toNumber() :message.Score;
            return object;
        };

        /**
         * Converts this UserLuckScore to JSON.
         * @function toJSON
         * @memberof GameMsg.UserLuckScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLuckScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLuckScore;
    })();

    GameMsg.UserLuckScoreRet = (function() {

        /**
         * Properties of a UserLuckScoreRet.
         * @memberof GameMsg
         * @interface IUserLuckScoreRet
         * @property {number} UserID UserLuckScoreRet UserID
         * @property {string} Value UserLuckScoreRet Value
         */

        /**
         * Constructs a new UserLuckScoreRet.
         * @memberof GameMsg
         * @classdesc Represents a UserLuckScoreRet.
         * @implements IUserLuckScoreRet
         * @constructor
         * @param {GameMsg.IUserLuckScoreRet=} [properties] Properties to set
         */
        function UserLuckScoreRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLuckScoreRet UserID.
         * @member {number} UserID
         * @memberof GameMsg.UserLuckScoreRet
         * @instance
         */
        UserLuckScoreRet.prototype.UserID = 0;

        /**
         * UserLuckScoreRet Value.
         * @member {string} Value
         * @memberof GameMsg.UserLuckScoreRet
         * @instance
         */
        UserLuckScoreRet.prototype.Value = "";

        /**
         * Creates a new UserLuckScoreRet instance using the specified properties.
         * @function create
         * @memberof GameMsg.UserLuckScoreRet
         * @static
         * @param {GameMsg.IUserLuckScoreRet=} [properties] Properties to set
         * @returns {GameMsg.UserLuckScoreRet} UserLuckScoreRet instance
         */
        UserLuckScoreRet.create = function create(properties) {
            return new UserLuckScoreRet(properties);
        };

        /**
         * Encodes the specified UserLuckScoreRet message. Does not implicitly {@link GameMsg.UserLuckScoreRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.UserLuckScoreRet
         * @static
         * @param {GameMsg.IUserLuckScoreRet} message UserLuckScoreRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScoreRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Value);
            return writer;
        };

        /**
         * Encodes the specified UserLuckScoreRet message, length delimited. Does not implicitly {@link GameMsg.UserLuckScoreRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.UserLuckScoreRet
         * @static
         * @param {GameMsg.IUserLuckScoreRet} message UserLuckScoreRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScoreRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLuckScoreRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.UserLuckScoreRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.UserLuckScoreRet} UserLuckScoreRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScoreRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.UserLuckScoreRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            if (!message.hasOwnProperty("Value"))
                throw $util.ProtocolError("missing required 'Value'", { instance:message });
            return message;
        };

        /**
         * Decodes a UserLuckScoreRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.UserLuckScoreRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.UserLuckScoreRet} UserLuckScoreRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScoreRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLuckScoreRet message.
         * @function verify
         * @memberof GameMsg.UserLuckScoreRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLuckScoreRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (!$util.isString(message.Value))
                return "Value:string expected";
            return null;
        };

        /**
         * Creates a UserLuckScoreRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.UserLuckScoreRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.UserLuckScoreRet} UserLuckScoreRet
         */
        UserLuckScoreRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.UserLuckScoreRet)
                return object;
            var message = new $root.GameMsg.UserLuckScoreRet();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Value != null)
                message.Value = String(object.Value);
            return message;
        };

        /**
         * Creates a plain object from a UserLuckScoreRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.UserLuckScoreRet
         * @static
         * @param {GameMsg.UserLuckScoreRet} message UserLuckScoreRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLuckScoreRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.Value = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Value != null && message.hasOwnProperty("Value"))
                object.Value = message.Value;
            return object;
        };

        /**
         * Converts this UserLuckScoreRet to JSON.
         * @function toJSON
         * @memberof GameMsg.UserLuckScoreRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLuckScoreRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLuckScoreRet;
    })();

    GameMsg.GameBeginCountDown = (function() {

        /**
         * Properties of a GameBeginCountDown.
         * @memberof GameMsg
         * @interface IGameBeginCountDown
         * @property {number} Time GameBeginCountDown Time
         */

        /**
         * Constructs a new GameBeginCountDown.
         * @memberof GameMsg
         * @classdesc Represents a GameBeginCountDown.
         * @implements IGameBeginCountDown
         * @constructor
         * @param {GameMsg.IGameBeginCountDown=} [properties] Properties to set
         */
        function GameBeginCountDown(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameBeginCountDown Time.
         * @member {number} Time
         * @memberof GameMsg.GameBeginCountDown
         * @instance
         */
        GameBeginCountDown.prototype.Time = 0;

        /**
         * Creates a new GameBeginCountDown instance using the specified properties.
         * @function create
         * @memberof GameMsg.GameBeginCountDown
         * @static
         * @param {GameMsg.IGameBeginCountDown=} [properties] Properties to set
         * @returns {GameMsg.GameBeginCountDown} GameBeginCountDown instance
         */
        GameBeginCountDown.create = function create(properties) {
            return new GameBeginCountDown(properties);
        };

        /**
         * Encodes the specified GameBeginCountDown message. Does not implicitly {@link GameMsg.GameBeginCountDown.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.GameBeginCountDown
         * @static
         * @param {GameMsg.IGameBeginCountDown} message GameBeginCountDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBeginCountDown.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Time);
            return writer;
        };

        /**
         * Encodes the specified GameBeginCountDown message, length delimited. Does not implicitly {@link GameMsg.GameBeginCountDown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.GameBeginCountDown
         * @static
         * @param {GameMsg.IGameBeginCountDown} message GameBeginCountDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBeginCountDown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameBeginCountDown message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.GameBeginCountDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.GameBeginCountDown} GameBeginCountDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBeginCountDown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.GameBeginCountDown();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Time = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Time"))
                throw $util.ProtocolError("missing required 'Time'", { instance:message });
            return message;
        };

        /**
         * Decodes a GameBeginCountDown message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.GameBeginCountDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.GameBeginCountDown} GameBeginCountDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBeginCountDown.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameBeginCountDown message.
         * @function verify
         * @memberof GameMsg.GameBeginCountDown
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameBeginCountDown.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Time))
                return "Time:integer expected";
            return null;
        };

        /**
         * Creates a GameBeginCountDown message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.GameBeginCountDown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.GameBeginCountDown} GameBeginCountDown
         */
        GameBeginCountDown.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.GameBeginCountDown)
                return object;
            var message = new $root.GameMsg.GameBeginCountDown();
            if (object.Time != null)
                message.Time = object.Time | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameBeginCountDown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.GameBeginCountDown
         * @static
         * @param {GameMsg.GameBeginCountDown} message GameBeginCountDown
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameBeginCountDown.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Time = 0;
            if (message.Time != null && message.hasOwnProperty("Time"))
                object.Time = message.Time;
            return object;
        };

        /**
         * Converts this GameBeginCountDown to JSON.
         * @function toJSON
         * @memberof GameMsg.GameBeginCountDown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameBeginCountDown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBeginCountDown;
    })();

    GameMsg.SuperToolAddChangeLog = (function() {

        /**
         * Properties of a SuperToolAddChangeLog.
         * @memberof GameMsg
         * @interface ISuperToolAddChangeLog
         * @property {number} GameID SuperToolAddChangeLog GameID
         * @property {number} TableNo SuperToolAddChangeLog TableNo
         * @property {number} Type SuperToolAddChangeLog Type
         * @property {string} Result SuperToolAddChangeLog Result
         * @property {string} Operator SuperToolAddChangeLog Operator
         */

        /**
         * Constructs a new SuperToolAddChangeLog.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolAddChangeLog.
         * @implements ISuperToolAddChangeLog
         * @constructor
         * @param {GameMsg.ISuperToolAddChangeLog=} [properties] Properties to set
         */
        function SuperToolAddChangeLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolAddChangeLog GameID.
         * @member {number} GameID
         * @memberof GameMsg.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.GameID = 0;

        /**
         * SuperToolAddChangeLog TableNo.
         * @member {number} TableNo
         * @memberof GameMsg.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.TableNo = 0;

        /**
         * SuperToolAddChangeLog Type.
         * @member {number} Type
         * @memberof GameMsg.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Type = 0;

        /**
         * SuperToolAddChangeLog Result.
         * @member {string} Result
         * @memberof GameMsg.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Result = "";

        /**
         * SuperToolAddChangeLog Operator.
         * @member {string} Operator
         * @memberof GameMsg.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Operator = "";

        /**
         * Creates a new SuperToolAddChangeLog instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolAddChangeLog
         * @static
         * @param {GameMsg.ISuperToolAddChangeLog=} [properties] Properties to set
         * @returns {GameMsg.SuperToolAddChangeLog} SuperToolAddChangeLog instance
         */
        SuperToolAddChangeLog.create = function create(properties) {
            return new SuperToolAddChangeLog(properties);
        };

        /**
         * Encodes the specified SuperToolAddChangeLog message. Does not implicitly {@link GameMsg.SuperToolAddChangeLog.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolAddChangeLog
         * @static
         * @param {GameMsg.ISuperToolAddChangeLog} message SuperToolAddChangeLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddChangeLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Type);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.Result);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.Operator);
            return writer;
        };

        /**
         * Encodes the specified SuperToolAddChangeLog message, length delimited. Does not implicitly {@link GameMsg.SuperToolAddChangeLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolAddChangeLog
         * @static
         * @param {GameMsg.ISuperToolAddChangeLog} message SuperToolAddChangeLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddChangeLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddChangeLog message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolAddChangeLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolAddChangeLog} SuperToolAddChangeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddChangeLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolAddChangeLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 3:
                    message.TableNo = reader.int32();
                    break;
                case 4:
                    message.Type = reader.int32();
                    break;
                case 5:
                    message.Result = reader.string();
                    break;
                case 6:
                    message.Operator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance:message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance:message });
            if (!message.hasOwnProperty("Type"))
                throw $util.ProtocolError("missing required 'Type'", { instance:message });
            if (!message.hasOwnProperty("Result"))
                throw $util.ProtocolError("missing required 'Result'", { instance:message });
            if (!message.hasOwnProperty("Operator"))
                throw $util.ProtocolError("missing required 'Operator'", { instance:message });
            return message;
        };

        /**
         * Decodes a SuperToolAddChangeLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolAddChangeLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolAddChangeLog} SuperToolAddChangeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddChangeLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolAddChangeLog message.
         * @function verify
         * @memberof GameMsg.SuperToolAddChangeLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAddChangeLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID:integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo:integer expected";
            if (!$util.isInteger(message.Type))
                return "Type:integer expected";
            if (!$util.isString(message.Result))
                return "Result:string expected";
            if (!$util.isString(message.Operator))
                return "Operator:string expected";
            return null;
        };

        /**
         * Creates a SuperToolAddChangeLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolAddChangeLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolAddChangeLog} SuperToolAddChangeLog
         */
        SuperToolAddChangeLog.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolAddChangeLog)
                return object;
            var message = new $root.GameMsg.SuperToolAddChangeLog();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.Result != null)
                message.Result = String(object.Result);
            if (object.Operator != null)
                message.Operator = String(object.Operator);
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAddChangeLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolAddChangeLog
         * @static
         * @param {GameMsg.SuperToolAddChangeLog} message SuperToolAddChangeLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolAddChangeLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.TableNo = 0;
                object.Type = 0;
                object.Result = "";
                object.Operator = "";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result = message.Result;
            if (message.Operator != null && message.hasOwnProperty("Operator"))
                object.Operator = message.Operator;
            return object;
        };

        /**
         * Converts this SuperToolAddChangeLog to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolAddChangeLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddChangeLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddChangeLog;
    })();

    GameMsg.SuperToolAddAssignReward = (function() {

        /**
         * Properties of a SuperToolAddAssignReward.
         * @memberof GameMsg
         * @interface ISuperToolAddAssignReward
         * @property {number} GameID SuperToolAddAssignReward GameID
         * @property {number} FlagID SuperToolAddAssignReward FlagID
         * @property {number} TableNo SuperToolAddAssignReward TableNo
         * @property {string} Result SuperToolAddAssignReward Result
         * @property {string} Operator SuperToolAddAssignReward Operator
         * @property {Array.<GameMsg.ISuperToolAddAssignRewardDetail>|null} [DetailList] SuperToolAddAssignReward DetailList
         */

        /**
         * Constructs a new SuperToolAddAssignReward.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolAddAssignReward.
         * @implements ISuperToolAddAssignReward
         * @constructor
         * @param {GameMsg.ISuperToolAddAssignReward=} [properties] Properties to set
         */
        function SuperToolAddAssignReward(properties) {
            this.DetailList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolAddAssignReward GameID.
         * @member {number} GameID
         * @memberof GameMsg.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.GameID = 0;

        /**
         * SuperToolAddAssignReward FlagID.
         * @member {number} FlagID
         * @memberof GameMsg.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.FlagID = 0;

        /**
         * SuperToolAddAssignReward TableNo.
         * @member {number} TableNo
         * @memberof GameMsg.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.TableNo = 0;

        /**
         * SuperToolAddAssignReward Result.
         * @member {string} Result
         * @memberof GameMsg.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.Result = "";

        /**
         * SuperToolAddAssignReward Operator.
         * @member {string} Operator
         * @memberof GameMsg.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.Operator = "";

        /**
         * SuperToolAddAssignReward DetailList.
         * @member {Array.<GameMsg.ISuperToolAddAssignRewardDetail>} DetailList
         * @memberof GameMsg.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.DetailList = $util.emptyArray;

        /**
         * Creates a new SuperToolAddAssignReward instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolAddAssignReward
         * @static
         * @param {GameMsg.ISuperToolAddAssignReward=} [properties] Properties to set
         * @returns {GameMsg.SuperToolAddAssignReward} SuperToolAddAssignReward instance
         */
        SuperToolAddAssignReward.create = function create(properties) {
            return new SuperToolAddAssignReward(properties);
        };

        /**
         * Encodes the specified SuperToolAddAssignReward message. Does not implicitly {@link GameMsg.SuperToolAddAssignReward.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolAddAssignReward
         * @static
         * @param {GameMsg.ISuperToolAddAssignReward} message SuperToolAddAssignReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Result);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.Operator);
            if (message.DetailList != null && message.DetailList.length)
                for (var i = 0; i < message.DetailList.length; ++i)
                    $root.GameMsg.SuperToolAddAssignRewardDetail.encode(message.DetailList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolAddAssignReward message, length delimited. Does not implicitly {@link GameMsg.SuperToolAddAssignReward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolAddAssignReward
         * @static
         * @param {GameMsg.ISuperToolAddAssignReward} message SuperToolAddAssignReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddAssignReward message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolAddAssignReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolAddAssignReward} SuperToolAddAssignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolAddAssignReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.FlagID = reader.int32();
                    break;
                case 3:
                    message.TableNo = reader.int32();
                    break;
                case 4:
                    message.Result = reader.string();
                    break;
                case 5:
                    message.Operator = reader.string();
                    break;
                case 6:
                    if (!(message.DetailList && message.DetailList.length))
                        message.DetailList = [];
                    message.DetailList.push($root.GameMsg.SuperToolAddAssignRewardDetail.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance:message });
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance:message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance:message });
            if (!message.hasOwnProperty("Result"))
                throw $util.ProtocolError("missing required 'Result'", { instance:message });
            if (!message.hasOwnProperty("Operator"))
                throw $util.ProtocolError("missing required 'Operator'", { instance:message });
            return message;
        };

        /**
         * Decodes a SuperToolAddAssignReward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolAddAssignReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolAddAssignReward} SuperToolAddAssignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolAddAssignReward message.
         * @function verify
         * @memberof GameMsg.SuperToolAddAssignReward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAddAssignReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID:integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID:integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo:integer expected";
            if (!$util.isString(message.Result))
                return "Result:string expected";
            if (!$util.isString(message.Operator))
                return "Operator:string expected";
            if (message.DetailList != null && message.hasOwnProperty("DetailList")) {
                if (!Array.isArray(message.DetailList))
                    return "DetailList:array expected";
                for (var i = 0; i < message.DetailList.length; ++i) {
                    var error = $root.GameMsg.SuperToolAddAssignRewardDetail.verify(message.DetailList[i]);
                    if (error)
                        return "DetailList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolAddAssignReward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolAddAssignReward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolAddAssignReward} SuperToolAddAssignReward
         */
        SuperToolAddAssignReward.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolAddAssignReward)
                return object;
            var message = new $root.GameMsg.SuperToolAddAssignReward();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.Result != null)
                message.Result = String(object.Result);
            if (object.Operator != null)
                message.Operator = String(object.Operator);
            if (object.DetailList) {
                if (!Array.isArray(object.DetailList))
                    throw TypeError(".GameMsg.SuperToolAddAssignReward.DetailList:array expected");
                message.DetailList = [];
                for (var i = 0; i < object.DetailList.length; ++i) {
                    if (typeof object.DetailList[i] !== "object")
                        throw TypeError(".GameMsg.SuperToolAddAssignReward.DetailList:object expected");
                    message.DetailList[i] = $root.GameMsg.SuperToolAddAssignRewardDetail.fromObject(object.DetailList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAddAssignReward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolAddAssignReward
         * @static
         * @param {GameMsg.SuperToolAddAssignReward} message SuperToolAddAssignReward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolAddAssignReward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.DetailList = [];
            if (options.defaults) {
                object.GameID = 0;
                object.FlagID = 0;
                object.TableNo = 0;
                object.Result = "";
                object.Operator = "";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result = message.Result;
            if (message.Operator != null && message.hasOwnProperty("Operator"))
                object.Operator = message.Operator;
            if (message.DetailList && message.DetailList.length) {
                object.DetailList = [];
                for (var j = 0; j < message.DetailList.length; ++j)
                    object.DetailList[j] = $root.GameMsg.SuperToolAddAssignRewardDetail.toObject(message.DetailList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolAddAssignReward to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolAddAssignReward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddAssignReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddAssignReward;
    })();

    GameMsg.SuperToolGetAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolGetAssignRewardDetail.
         * @memberof GameMsg
         * @interface ISuperToolGetAssignRewardDetail
         * @property {number} GameID SuperToolGetAssignRewardDetail GameID
         * @property {number} FlagID SuperToolGetAssignRewardDetail FlagID
         * @property {number} TableNo SuperToolGetAssignRewardDetail TableNo
         */

        /**
         * Constructs a new SuperToolGetAssignRewardDetail.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolGetAssignRewardDetail.
         * @implements ISuperToolGetAssignRewardDetail
         * @constructor
         * @param {GameMsg.ISuperToolGetAssignRewardDetail=} [properties] Properties to set
         */
        function SuperToolGetAssignRewardDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolGetAssignRewardDetail GameID.
         * @member {number} GameID
         * @memberof GameMsg.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.GameID = 0;

        /**
         * SuperToolGetAssignRewardDetail FlagID.
         * @member {number} FlagID
         * @memberof GameMsg.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.FlagID = 0;

        /**
         * SuperToolGetAssignRewardDetail TableNo.
         * @member {number} TableNo
         * @memberof GameMsg.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.TableNo = 0;

        /**
         * Creates a new SuperToolGetAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg.ISuperToolGetAssignRewardDetail=} [properties] Properties to set
         * @returns {GameMsg.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail instance
         */
        SuperToolGetAssignRewardDetail.create = function create(properties) {
            return new SuperToolGetAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolGetAssignRewardDetail message. Does not implicitly {@link GameMsg.SuperToolGetAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg.ISuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetAssignRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            return writer;
        };

        /**
         * Encodes the specified SuperToolGetAssignRewardDetail message, length delimited. Does not implicitly {@link GameMsg.SuperToolGetAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg.ISuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolGetAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolGetAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolGetAssignRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.FlagID = reader.int32();
                    break;
                case 3:
                    message.TableNo = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance:message });
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance:message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance:message });
            return message;
        };

        /**
         * Decodes a SuperToolGetAssignRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolGetAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetAssignRewardDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolGetAssignRewardDetail message.
         * @function verify
         * @memberof GameMsg.SuperToolGetAssignRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolGetAssignRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID:integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID:integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo:integer expected";
            return null;
        };

        /**
         * Creates a SuperToolGetAssignRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolGetAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         */
        SuperToolGetAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolGetAssignRewardDetail)
                return object;
            var message = new $root.GameMsg.SuperToolGetAssignRewardDetail();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolGetAssignRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg.SuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolGetAssignRewardDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.FlagID = 0;
                object.TableNo = 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            return object;
        };

        /**
         * Converts this SuperToolGetAssignRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolGetAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolGetAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolGetAssignRewardDetail;
    })();

    GameMsg.SuperToolAddAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolAddAssignRewardDetail.
         * @memberof GameMsg
         * @interface ISuperToolAddAssignRewardDetail
         * @property {number} Idx SuperToolAddAssignRewardDetail Idx
         * @property {string} Description SuperToolAddAssignRewardDetail Description
         * @property {string} Reward SuperToolAddAssignRewardDetail Reward
         * @property {number} Status SuperToolAddAssignRewardDetail Status
         */

        /**
         * Constructs a new SuperToolAddAssignRewardDetail.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolAddAssignRewardDetail.
         * @implements ISuperToolAddAssignRewardDetail
         * @constructor
         * @param {GameMsg.ISuperToolAddAssignRewardDetail=} [properties] Properties to set
         */
        function SuperToolAddAssignRewardDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolAddAssignRewardDetail Idx.
         * @member {number} Idx
         * @memberof GameMsg.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Idx = 0;

        /**
         * SuperToolAddAssignRewardDetail Description.
         * @member {string} Description
         * @memberof GameMsg.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Description = "";

        /**
         * SuperToolAddAssignRewardDetail Reward.
         * @member {string} Reward
         * @memberof GameMsg.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Reward = "";

        /**
         * SuperToolAddAssignRewardDetail Status.
         * @member {number} Status
         * @memberof GameMsg.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Status = 0;

        /**
         * Creates a new SuperToolAddAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg.ISuperToolAddAssignRewardDetail=} [properties] Properties to set
         * @returns {GameMsg.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail instance
         */
        SuperToolAddAssignRewardDetail.create = function create(properties) {
            return new SuperToolAddAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolAddAssignRewardDetail message. Does not implicitly {@link GameMsg.SuperToolAddAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg.ISuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Idx);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Description);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Reward);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified SuperToolAddAssignRewardDetail message, length delimited. Does not implicitly {@link GameMsg.SuperToolAddAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg.ISuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolAddAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolAddAssignRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Idx = reader.int32();
                    break;
                case 2:
                    message.Description = reader.string();
                    break;
                case 3:
                    message.Reward = reader.string();
                    break;
                case 4:
                    message.Status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Idx"))
                throw $util.ProtocolError("missing required 'Idx'", { instance:message });
            if (!message.hasOwnProperty("Description"))
                throw $util.ProtocolError("missing required 'Description'", { instance:message });
            if (!message.hasOwnProperty("Reward"))
                throw $util.ProtocolError("missing required 'Reward'", { instance:message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance:message });
            return message;
        };

        /**
         * Decodes a SuperToolAddAssignRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolAddAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignRewardDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolAddAssignRewardDetail message.
         * @function verify
         * @memberof GameMsg.SuperToolAddAssignRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAddAssignRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Idx))
                return "Idx:integer expected";
            if (!$util.isString(message.Description))
                return "Description:string expected";
            if (!$util.isString(message.Reward))
                return "Reward:string expected";
            if (!$util.isInteger(message.Status))
                return "Status:integer expected";
            return null;
        };

        /**
         * Creates a SuperToolAddAssignRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolAddAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         */
        SuperToolAddAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolAddAssignRewardDetail)
                return object;
            var message = new $root.GameMsg.SuperToolAddAssignRewardDetail();
            if (object.Idx != null)
                message.Idx = object.Idx | 0;
            if (object.Description != null)
                message.Description = String(object.Description);
            if (object.Reward != null)
                message.Reward = String(object.Reward);
            if (object.Status != null)
                message.Status = object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAddAssignRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg.SuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolAddAssignRewardDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Idx = 0;
                object.Description = "";
                object.Reward = "";
                object.Status = 0;
            }
            if (message.Idx != null && message.hasOwnProperty("Idx"))
                object.Idx = message.Idx;
            if (message.Description != null && message.hasOwnProperty("Description"))
                object.Description = message.Description;
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                object.Reward = message.Reward;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this SuperToolAddAssignRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolAddAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddAssignRewardDetail;
    })();

    GameMsg.SuperToolAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolAssignRewardDetail.
         * @memberof GameMsg
         * @interface ISuperToolAssignRewardDetail
         * @property {number} LogID SuperToolAssignRewardDetail LogID
         * @property {number} Idx SuperToolAssignRewardDetail Idx
         * @property {string} Description SuperToolAssignRewardDetail Description
         * @property {string} Reward SuperToolAssignRewardDetail Reward
         * @property {number} Status SuperToolAssignRewardDetail Status
         */

        /**
         * Constructs a new SuperToolAssignRewardDetail.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolAssignRewardDetail.
         * @implements ISuperToolAssignRewardDetail
         * @constructor
         * @param {GameMsg.ISuperToolAssignRewardDetail=} [properties] Properties to set
         */
        function SuperToolAssignRewardDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolAssignRewardDetail LogID.
         * @member {number} LogID
         * @memberof GameMsg.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.LogID = 0;

        /**
         * SuperToolAssignRewardDetail Idx.
         * @member {number} Idx
         * @memberof GameMsg.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Idx = 0;

        /**
         * SuperToolAssignRewardDetail Description.
         * @member {string} Description
         * @memberof GameMsg.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Description = "";

        /**
         * SuperToolAssignRewardDetail Reward.
         * @member {string} Reward
         * @memberof GameMsg.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Reward = "";

        /**
         * SuperToolAssignRewardDetail Status.
         * @member {number} Status
         * @memberof GameMsg.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Status = 0;

        /**
         * Creates a new SuperToolAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg.ISuperToolAssignRewardDetail=} [properties] Properties to set
         * @returns {GameMsg.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail instance
         */
        SuperToolAssignRewardDetail.create = function create(properties) {
            return new SuperToolAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolAssignRewardDetail message. Does not implicitly {@link GameMsg.SuperToolAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg.ISuperToolAssignRewardDetail} message SuperToolAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAssignRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.LogID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Idx);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Description);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Reward);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified SuperToolAssignRewardDetail message, length delimited. Does not implicitly {@link GameMsg.SuperToolAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg.ISuperToolAssignRewardDetail} message SuperToolAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolAssignRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.LogID = reader.int32();
                    break;
                case 2:
                    message.Idx = reader.int32();
                    break;
                case 3:
                    message.Description = reader.string();
                    break;
                case 4:
                    message.Reward = reader.string();
                    break;
                case 5:
                    message.Status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("LogID"))
                throw $util.ProtocolError("missing required 'LogID'", { instance:message });
            if (!message.hasOwnProperty("Idx"))
                throw $util.ProtocolError("missing required 'Idx'", { instance:message });
            if (!message.hasOwnProperty("Description"))
                throw $util.ProtocolError("missing required 'Description'", { instance:message });
            if (!message.hasOwnProperty("Reward"))
                throw $util.ProtocolError("missing required 'Reward'", { instance:message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance:message });
            return message;
        };

        /**
         * Decodes a SuperToolAssignRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAssignRewardDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolAssignRewardDetail message.
         * @function verify
         * @memberof GameMsg.SuperToolAssignRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAssignRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.LogID))
                return "LogID:integer expected";
            if (!$util.isInteger(message.Idx))
                return "Idx:integer expected";
            if (!$util.isString(message.Description))
                return "Description:string expected";
            if (!$util.isString(message.Reward))
                return "Reward:string expected";
            if (!$util.isInteger(message.Status))
                return "Status:integer expected";
            return null;
        };

        /**
         * Creates a SuperToolAssignRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         */
        SuperToolAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolAssignRewardDetail)
                return object;
            var message = new $root.GameMsg.SuperToolAssignRewardDetail();
            if (object.LogID != null)
                message.LogID = object.LogID | 0;
            if (object.Idx != null)
                message.Idx = object.Idx | 0;
            if (object.Description != null)
                message.Description = String(object.Description);
            if (object.Reward != null)
                message.Reward = String(object.Reward);
            if (object.Status != null)
                message.Status = object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAssignRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg.SuperToolAssignRewardDetail} message SuperToolAssignRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolAssignRewardDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.LogID = 0;
                object.Idx = 0;
                object.Description = "";
                object.Reward = "";
                object.Status = 0;
            }
            if (message.LogID != null && message.hasOwnProperty("LogID"))
                object.LogID = message.LogID;
            if (message.Idx != null && message.hasOwnProperty("Idx"))
                object.Idx = message.Idx;
            if (message.Description != null && message.hasOwnProperty("Description"))
                object.Description = message.Description;
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                object.Reward = message.Reward;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this SuperToolAssignRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAssignRewardDetail;
    })();

    GameMsg.SuperToolGetVipUserRequest = (function() {

        /**
         * Properties of a SuperToolGetVipUserRequest.
         * @memberof GameMsg
         * @interface ISuperToolGetVipUserRequest
         * @property {number} GameID SuperToolGetVipUserRequest GameID
         */

        /**
         * Constructs a new SuperToolGetVipUserRequest.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolGetVipUserRequest.
         * @implements ISuperToolGetVipUserRequest
         * @constructor
         * @param {GameMsg.ISuperToolGetVipUserRequest=} [properties] Properties to set
         */
        function SuperToolGetVipUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolGetVipUserRequest GameID.
         * @member {number} GameID
         * @memberof GameMsg.SuperToolGetVipUserRequest
         * @instance
         */
        SuperToolGetVipUserRequest.prototype.GameID = 0;

        /**
         * Creates a new SuperToolGetVipUserRequest instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg.ISuperToolGetVipUserRequest=} [properties] Properties to set
         * @returns {GameMsg.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest instance
         */
        SuperToolGetVipUserRequest.create = function create(properties) {
            return new SuperToolGetVipUserRequest(properties);
        };

        /**
         * Encodes the specified SuperToolGetVipUserRequest message. Does not implicitly {@link GameMsg.SuperToolGetVipUserRequest.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg.ISuperToolGetVipUserRequest} message SuperToolGetVipUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetVipUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            return writer;
        };

        /**
         * Encodes the specified SuperToolGetVipUserRequest message, length delimited. Does not implicitly {@link GameMsg.SuperToolGetVipUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg.ISuperToolGetVipUserRequest} message SuperToolGetVipUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetVipUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolGetVipUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolGetVipUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetVipUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolGetVipUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance:message });
            return message;
        };

        /**
         * Decodes a SuperToolGetVipUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolGetVipUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetVipUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolGetVipUserRequest message.
         * @function verify
         * @memberof GameMsg.SuperToolGetVipUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolGetVipUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID:integer expected";
            return null;
        };

        /**
         * Creates a SuperToolGetVipUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolGetVipUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         */
        SuperToolGetVipUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolGetVipUserRequest)
                return object;
            var message = new $root.GameMsg.SuperToolGetVipUserRequest();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolGetVipUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg.SuperToolGetVipUserRequest} message SuperToolGetVipUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolGetVipUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.GameID = 0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            return object;
        };

        /**
         * Converts this SuperToolGetVipUserRequest to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolGetVipUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolGetVipUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolGetVipUserRequest;
    })();

    GameMsg.SuperToolVipUserDataList = (function() {

        /**
         * Properties of a SuperToolVipUserDataList.
         * @memberof GameMsg
         * @interface ISuperToolVipUserDataList
         * @property {Array.<GameMsg.ISuperToolVipUserData>|null} [DataList] SuperToolVipUserDataList DataList
         */

        /**
         * Constructs a new SuperToolVipUserDataList.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolVipUserDataList.
         * @implements ISuperToolVipUserDataList
         * @constructor
         * @param {GameMsg.ISuperToolVipUserDataList=} [properties] Properties to set
         */
        function SuperToolVipUserDataList(properties) {
            this.DataList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolVipUserDataList DataList.
         * @member {Array.<GameMsg.ISuperToolVipUserData>} DataList
         * @memberof GameMsg.SuperToolVipUserDataList
         * @instance
         */
        SuperToolVipUserDataList.prototype.DataList = $util.emptyArray;

        /**
         * Creates a new SuperToolVipUserDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolVipUserDataList
         * @static
         * @param {GameMsg.ISuperToolVipUserDataList=} [properties] Properties to set
         * @returns {GameMsg.SuperToolVipUserDataList} SuperToolVipUserDataList instance
         */
        SuperToolVipUserDataList.create = function create(properties) {
            return new SuperToolVipUserDataList(properties);
        };

        /**
         * Encodes the specified SuperToolVipUserDataList message. Does not implicitly {@link GameMsg.SuperToolVipUserDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolVipUserDataList
         * @static
         * @param {GameMsg.ISuperToolVipUserDataList} message SuperToolVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DataList != null && message.DataList.length)
                for (var i = 0; i < message.DataList.length; ++i)
                    $root.GameMsg.SuperToolVipUserData.encode(message.DataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolVipUserDataList message, length delimited. Does not implicitly {@link GameMsg.SuperToolVipUserDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolVipUserDataList
         * @static
         * @param {GameMsg.ISuperToolVipUserDataList} message SuperToolVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolVipUserDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolVipUserDataList} SuperToolVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolVipUserDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.DataList && message.DataList.length))
                        message.DataList = [];
                    message.DataList.push($root.GameMsg.SuperToolVipUserData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuperToolVipUserDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolVipUserDataList} SuperToolVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserDataList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolVipUserDataList message.
         * @function verify
         * @memberof GameMsg.SuperToolVipUserDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolVipUserDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DataList != null && message.hasOwnProperty("DataList")) {
                if (!Array.isArray(message.DataList))
                    return "DataList:array expected";
                for (var i = 0; i < message.DataList.length; ++i) {
                    var error = $root.GameMsg.SuperToolVipUserData.verify(message.DataList[i]);
                    if (error)
                        return "DataList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolVipUserDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolVipUserDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolVipUserDataList} SuperToolVipUserDataList
         */
        SuperToolVipUserDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolVipUserDataList)
                return object;
            var message = new $root.GameMsg.SuperToolVipUserDataList();
            if (object.DataList) {
                if (!Array.isArray(object.DataList))
                    throw TypeError(".GameMsg.SuperToolVipUserDataList.DataList:array expected");
                message.DataList = [];
                for (var i = 0; i < object.DataList.length; ++i) {
                    if (typeof object.DataList[i] !== "object")
                        throw TypeError(".GameMsg.SuperToolVipUserDataList.DataList:object expected");
                    message.DataList[i] = $root.GameMsg.SuperToolVipUserData.fromObject(object.DataList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolVipUserDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolVipUserDataList
         * @static
         * @param {GameMsg.SuperToolVipUserDataList} message SuperToolVipUserDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolVipUserDataList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.DataList = [];
            if (message.DataList && message.DataList.length) {
                object.DataList = [];
                for (var j = 0; j < message.DataList.length; ++j)
                    object.DataList[j] = $root.GameMsg.SuperToolVipUserData.toObject(message.DataList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolVipUserDataList to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolVipUserDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolVipUserDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolVipUserDataList;
    })();

    GameMsg.SuperToolVipUserData = (function() {

        /**
         * Properties of a SuperToolVipUserData.
         * @memberof GameMsg
         * @interface ISuperToolVipUserData
         * @property {number} UserID SuperToolVipUserData UserID
         * @property {number|Long} AssignAmount SuperToolVipUserData AssignAmount
         * @property {number} AssignRate SuperToolVipUserData AssignRate
         * @property {number|Long} CompleteAmount SuperToolVipUserData CompleteAmount
         * @property {number} Complete SuperToolVipUserData Complete
         * @property {number} Status SuperToolVipUserData Status
         * @property {number} TotalAll SuperToolVipUserData TotalAll
         * @property {number} TotalUserWinLose SuperToolVipUserData TotalUserWinLose
         * @property {number} TodayUserWinLose SuperToolVipUserData TodayUserWinLose
         */

        /**
         * Constructs a new SuperToolVipUserData.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolVipUserData.
         * @implements ISuperToolVipUserData
         * @constructor
         * @param {GameMsg.ISuperToolVipUserData=} [properties] Properties to set
         */
        function SuperToolVipUserData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolVipUserData UserID.
         * @member {number} UserID
         * @memberof GameMsg.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.UserID = 0;

        /**
         * SuperToolVipUserData AssignAmount.
         * @member {number|Long} AssignAmount
         * @memberof GameMsg.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.AssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * SuperToolVipUserData AssignRate.
         * @member {number} AssignRate
         * @memberof GameMsg.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.AssignRate = 0;

        /**
         * SuperToolVipUserData CompleteAmount.
         * @member {number|Long} CompleteAmount
         * @memberof GameMsg.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.CompleteAmount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * SuperToolVipUserData Complete.
         * @member {number} Complete
         * @memberof GameMsg.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.Complete = 0;

        /**
         * SuperToolVipUserData Status.
         * @member {number} Status
         * @memberof GameMsg.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.Status = 0;

        /**
         * SuperToolVipUserData TotalAll.
         * @member {number} TotalAll
         * @memberof GameMsg.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TotalAll = 0;

        /**
         * SuperToolVipUserData TotalUserWinLose.
         * @member {number} TotalUserWinLose
         * @memberof GameMsg.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TotalUserWinLose = 0;

        /**
         * SuperToolVipUserData TodayUserWinLose.
         * @member {number} TodayUserWinLose
         * @memberof GameMsg.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TodayUserWinLose = 0;

        /**
         * Creates a new SuperToolVipUserData instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolVipUserData
         * @static
         * @param {GameMsg.ISuperToolVipUserData=} [properties] Properties to set
         * @returns {GameMsg.SuperToolVipUserData} SuperToolVipUserData instance
         */
        SuperToolVipUserData.create = function create(properties) {
            return new SuperToolVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolVipUserData message. Does not implicitly {@link GameMsg.SuperToolVipUserData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolVipUserData
         * @static
         * @param {GameMsg.ISuperToolVipUserData} message SuperToolVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.AssignAmount);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.AssignRate);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.CompleteAmount);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Complete);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Status);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.TotalAll);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.TotalUserWinLose);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.TodayUserWinLose);
            return writer;
        };

        /**
         * Encodes the specified SuperToolVipUserData message, length delimited. Does not implicitly {@link GameMsg.SuperToolVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolVipUserData
         * @static
         * @param {GameMsg.ISuperToolVipUserData} message SuperToolVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolVipUserData} SuperToolVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolVipUserData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.AssignAmount = reader.int64();
                    break;
                case 3:
                    message.AssignRate = reader.int32();
                    break;
                case 4:
                    message.CompleteAmount = reader.int64();
                    break;
                case 5:
                    message.Complete = reader.int32();
                    break;
                case 6:
                    message.Status = reader.int32();
                    break;
                case 7:
                    message.TotalAll = reader.int32();
                    break;
                case 8:
                    message.TotalUserWinLose = reader.int32();
                    break;
                case 9:
                    message.TodayUserWinLose = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            if (!message.hasOwnProperty("AssignAmount"))
                throw $util.ProtocolError("missing required 'AssignAmount'", { instance:message });
            if (!message.hasOwnProperty("AssignRate"))
                throw $util.ProtocolError("missing required 'AssignRate'", { instance:message });
            if (!message.hasOwnProperty("CompleteAmount"))
                throw $util.ProtocolError("missing required 'CompleteAmount'", { instance:message });
            if (!message.hasOwnProperty("Complete"))
                throw $util.ProtocolError("missing required 'Complete'", { instance:message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance:message });
            if (!message.hasOwnProperty("TotalAll"))
                throw $util.ProtocolError("missing required 'TotalAll'", { instance:message });
            if (!message.hasOwnProperty("TotalUserWinLose"))
                throw $util.ProtocolError("missing required 'TotalUserWinLose'", { instance:message });
            if (!message.hasOwnProperty("TodayUserWinLose"))
                throw $util.ProtocolError("missing required 'TodayUserWinLose'", { instance:message });
            return message;
        };

        /**
         * Decodes a SuperToolVipUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolVipUserData} SuperToolVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolVipUserData message.
         * @function verify
         * @memberof GameMsg.SuperToolVipUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolVipUserData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (!$util.isInteger(message.AssignAmount) && !(message.AssignAmount && $util.isInteger(message.AssignAmount.low) && $util.isInteger(message.AssignAmount.high)))
                return "AssignAmount:integer|Long expected";
            if (!$util.isInteger(message.AssignRate))
                return "AssignRate:integer expected";
            if (!$util.isInteger(message.CompleteAmount) && !(message.CompleteAmount && $util.isInteger(message.CompleteAmount.low) && $util.isInteger(message.CompleteAmount.high)))
                return "CompleteAmount:integer|Long expected";
            if (!$util.isInteger(message.Complete))
                return "Complete:integer expected";
            if (!$util.isInteger(message.Status))
                return "Status:integer expected";
            if (!$util.isInteger(message.TotalAll))
                return "TotalAll:integer expected";
            if (!$util.isInteger(message.TotalUserWinLose))
                return "TotalUserWinLose:integer expected";
            if (!$util.isInteger(message.TodayUserWinLose))
                return "TodayUserWinLose:integer expected";
            return null;
        };

        /**
         * Creates a SuperToolVipUserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolVipUserData} SuperToolVipUserData
         */
        SuperToolVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolVipUserData)
                return object;
            var message = new $root.GameMsg.SuperToolVipUserData();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.AssignAmount != null)
                if ($util.Long)
                    (message.AssignAmount = $util.Long.fromValue(object.AssignAmount)).unsigned = false;
                else if (typeof object.AssignAmount === "string")
                    message.AssignAmount = parseInt(object.AssignAmount, 10);
                else if (typeof object.AssignAmount === "number")
                    message.AssignAmount = object.AssignAmount;
                else if (typeof object.AssignAmount === "object")
                    message.AssignAmount = new $util.LongBits(object.AssignAmount.low >>> 0, object.AssignAmount.high >>> 0).toNumber();
            if (object.AssignRate != null)
                message.AssignRate = object.AssignRate | 0;
            if (object.CompleteAmount != null)
                if ($util.Long)
                    (message.CompleteAmount = $util.Long.fromValue(object.CompleteAmount)).unsigned = false;
                else if (typeof object.CompleteAmount === "string")
                    message.CompleteAmount = parseInt(object.CompleteAmount, 10);
                else if (typeof object.CompleteAmount === "number")
                    message.CompleteAmount = object.CompleteAmount;
                else if (typeof object.CompleteAmount === "object")
                    message.CompleteAmount = new $util.LongBits(object.CompleteAmount.low >>> 0, object.CompleteAmount.high >>> 0).toNumber();
            if (object.Complete != null)
                message.Complete = object.Complete | 0;
            if (object.Status != null)
                message.Status = object.Status | 0;
            if (object.TotalAll != null)
                message.TotalAll = object.TotalAll | 0;
            if (object.TotalUserWinLose != null)
                message.TotalUserWinLose = object.TotalUserWinLose | 0;
            if (object.TodayUserWinLose != null)
                message.TodayUserWinLose = object.TodayUserWinLose | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolVipUserData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolVipUserData
         * @static
         * @param {GameMsg.SuperToolVipUserData} message SuperToolVipUserData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolVipUserData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AssignAmount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.AssignAmount = options.longs === String ? "0" :0;
                object.AssignRate = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CompleteAmount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.CompleteAmount = options.longs === String ? "0" :0;
                object.Complete = 0;
                object.Status = 0;
                object.TotalAll = 0;
                object.TotalUserWinLose = 0;
                object.TodayUserWinLose = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.AssignAmount != null && message.hasOwnProperty("AssignAmount"))
                if (typeof message.AssignAmount === "number")
                    object.AssignAmount = options.longs === String ? String(message.AssignAmount) :message.AssignAmount;
                else
                    object.AssignAmount = options.longs === String ? $util.Long.prototype.toString.call(message.AssignAmount) :options.longs === Number ? new $util.LongBits(message.AssignAmount.low >>> 0, message.AssignAmount.high >>> 0).toNumber() :message.AssignAmount;
            if (message.AssignRate != null && message.hasOwnProperty("AssignRate"))
                object.AssignRate = message.AssignRate;
            if (message.CompleteAmount != null && message.hasOwnProperty("CompleteAmount"))
                if (typeof message.CompleteAmount === "number")
                    object.CompleteAmount = options.longs === String ? String(message.CompleteAmount) :message.CompleteAmount;
                else
                    object.CompleteAmount = options.longs === String ? $util.Long.prototype.toString.call(message.CompleteAmount) :options.longs === Number ? new $util.LongBits(message.CompleteAmount.low >>> 0, message.CompleteAmount.high >>> 0).toNumber() :message.CompleteAmount;
            if (message.Complete != null && message.hasOwnProperty("Complete"))
                object.Complete = message.Complete;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.TotalAll != null && message.hasOwnProperty("TotalAll"))
                object.TotalAll = message.TotalAll;
            if (message.TotalUserWinLose != null && message.hasOwnProperty("TotalUserWinLose"))
                object.TotalUserWinLose = message.TotalUserWinLose;
            if (message.TodayUserWinLose != null && message.hasOwnProperty("TodayUserWinLose"))
                object.TodayUserWinLose = message.TodayUserWinLose;
            return object;
        };

        /**
         * Converts this SuperToolVipUserData to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolVipUserData;
    })();

    GameMsg.SuperToolFishGetSystemRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishGetSystemRewardDetail.
         * @memberof GameMsg
         * @interface ISuperToolFishGetSystemRewardDetail
         * @property {Array.<GameMsg.IFishSystemRewardDataList>|null} [FishRewardList] SuperToolFishGetSystemRewardDetail FishRewardList
         */

        /**
         * Constructs a new SuperToolFishGetSystemRewardDetail.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolFishGetSystemRewardDetail.
         * @implements ISuperToolFishGetSystemRewardDetail
         * @constructor
         * @param {GameMsg.ISuperToolFishGetSystemRewardDetail=} [properties] Properties to set
         */
        function SuperToolFishGetSystemRewardDetail(properties) {
            this.FishRewardList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolFishGetSystemRewardDetail FishRewardList.
         * @member {Array.<GameMsg.IFishSystemRewardDataList>} FishRewardList
         * @memberof GameMsg.SuperToolFishGetSystemRewardDetail
         * @instance
         */
        SuperToolFishGetSystemRewardDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishGetSystemRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg.ISuperToolFishGetSystemRewardDetail=} [properties] Properties to set
         * @returns {GameMsg.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail instance
         */
        SuperToolFishGetSystemRewardDetail.create = function create(properties) {
            return new SuperToolFishGetSystemRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishGetSystemRewardDetail message. Does not implicitly {@link GameMsg.SuperToolFishGetSystemRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg.ISuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetSystemRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i = 0; i < message.FishRewardList.length; ++i)
                    $root.GameMsg.FishSystemRewardDataList.encode(message.FishRewardList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishGetSystemRewardDetail message, length delimited. Does not implicitly {@link GameMsg.SuperToolFishGetSystemRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg.ISuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetSystemRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishGetSystemRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetSystemRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolFishGetSystemRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.GameMsg.FishSystemRewardDataList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuperToolFishGetSystemRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetSystemRewardDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishGetSystemRewardDetail message.
         * @function verify
         * @memberof GameMsg.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishGetSystemRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FishRewardList != null && message.hasOwnProperty("FishRewardList")) {
                if (!Array.isArray(message.FishRewardList))
                    return "FishRewardList:array expected";
                for (var i = 0; i < message.FishRewardList.length; ++i) {
                    var error = $root.GameMsg.FishSystemRewardDataList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishGetSystemRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         */
        SuperToolFishGetSystemRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolFishGetSystemRewardDetail)
                return object;
            var message = new $root.GameMsg.SuperToolFishGetSystemRewardDetail();
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".GameMsg.SuperToolFishGetSystemRewardDetail.FishRewardList:array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".GameMsg.SuperToolFishGetSystemRewardDetail.FishRewardList:object expected");
                    message.FishRewardList[i] = $root.GameMsg.FishSystemRewardDataList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishGetSystemRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg.SuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishGetSystemRewardDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.FishRewardList = [];
            if (message.FishRewardList && message.FishRewardList.length) {
                object.FishRewardList = [];
                for (var j = 0; j < message.FishRewardList.length; ++j)
                    object.FishRewardList[j] = $root.GameMsg.FishSystemRewardDataList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishGetSystemRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolFishGetSystemRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishGetSystemRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishGetSystemRewardDetail;
    })();

    GameMsg.FishSystemRewardDataList = (function() {

        /**
         * Properties of a FishSystemRewardDataList.
         * @memberof GameMsg
         * @interface IFishSystemRewardDataList
         * @property {number} FishID FishSystemRewardDataList FishID
         * @property {number|Long} Amount FishSystemRewardDataList Amount
         * @property {number|Long} FinishAmount FishSystemRewardDataList FinishAmount
         * @property {number} Rate FishSystemRewardDataList Rate
         * @property {number} Status FishSystemRewardDataList Status
         */

        /**
         * Constructs a new FishSystemRewardDataList.
         * @memberof GameMsg
         * @classdesc Represents a FishSystemRewardDataList.
         * @implements IFishSystemRewardDataList
         * @constructor
         * @param {GameMsg.IFishSystemRewardDataList=} [properties] Properties to set
         */
        function FishSystemRewardDataList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishSystemRewardDataList FishID.
         * @member {number} FishID
         * @memberof GameMsg.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.FishID = 0;

        /**
         * FishSystemRewardDataList Amount.
         * @member {number|Long} Amount
         * @memberof GameMsg.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Amount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * FishSystemRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * FishSystemRewardDataList Rate.
         * @member {number} Rate
         * @memberof GameMsg.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Rate = 0;

        /**
         * FishSystemRewardDataList Status.
         * @member {number} Status
         * @memberof GameMsg.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Status = 0;

        /**
         * Creates a new FishSystemRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg.FishSystemRewardDataList
         * @static
         * @param {GameMsg.IFishSystemRewardDataList=} [properties] Properties to set
         * @returns {GameMsg.FishSystemRewardDataList} FishSystemRewardDataList instance
         */
        FishSystemRewardDataList.create = function create(properties) {
            return new FishSystemRewardDataList(properties);
        };

        /**
         * Encodes the specified FishSystemRewardDataList message. Does not implicitly {@link GameMsg.FishSystemRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.FishSystemRewardDataList
         * @static
         * @param {GameMsg.IFishSystemRewardDataList} message FishSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSystemRewardDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FishID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Amount);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.FinishAmount);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Rate);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified FishSystemRewardDataList message, length delimited. Does not implicitly {@link GameMsg.FishSystemRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.FishSystemRewardDataList
         * @static
         * @param {GameMsg.IFishSystemRewardDataList} message FishSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSystemRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishSystemRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.FishSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.FishSystemRewardDataList} FishSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSystemRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.FishSystemRewardDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FishID = reader.int32();
                    break;
                case 2:
                    message.Amount = reader.int64();
                    break;
                case 3:
                    message.FinishAmount = reader.int64();
                    break;
                case 4:
                    message.Rate = reader.int32();
                    break;
                case 5:
                    message.Status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FishID"))
                throw $util.ProtocolError("missing required 'FishID'", { instance:message });
            if (!message.hasOwnProperty("Amount"))
                throw $util.ProtocolError("missing required 'Amount'", { instance:message });
            if (!message.hasOwnProperty("FinishAmount"))
                throw $util.ProtocolError("missing required 'FinishAmount'", { instance:message });
            if (!message.hasOwnProperty("Rate"))
                throw $util.ProtocolError("missing required 'Rate'", { instance:message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance:message });
            return message;
        };

        /**
         * Decodes a FishSystemRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.FishSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.FishSystemRewardDataList} FishSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSystemRewardDataList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishSystemRewardDataList message.
         * @function verify
         * @memberof GameMsg.FishSystemRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishSystemRewardDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FishID))
                return "FishID:integer expected";
            if (!$util.isInteger(message.Amount) && !(message.Amount && $util.isInteger(message.Amount.low) && $util.isInteger(message.Amount.high)))
                return "Amount:integer|Long expected";
            if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                return "FinishAmount:integer|Long expected";
            if (!$util.isInteger(message.Rate))
                return "Rate:integer expected";
            if (!$util.isInteger(message.Status))
                return "Status:integer expected";
            return null;
        };

        /**
         * Creates a FishSystemRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.FishSystemRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.FishSystemRewardDataList} FishSystemRewardDataList
         */
        FishSystemRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.FishSystemRewardDataList)
                return object;
            var message = new $root.GameMsg.FishSystemRewardDataList();
            if (object.FishID != null)
                message.FishID = object.FishID | 0;
            if (object.Amount != null)
                if ($util.Long)
                    (message.Amount = $util.Long.fromValue(object.Amount)).unsigned = false;
                else if (typeof object.Amount === "string")
                    message.Amount = parseInt(object.Amount, 10);
                else if (typeof object.Amount === "number")
                    message.Amount = object.Amount;
                else if (typeof object.Amount === "object")
                    message.Amount = new $util.LongBits(object.Amount.low >>> 0, object.Amount.high >>> 0).toNumber();
            if (object.FinishAmount != null)
                if ($util.Long)
                    (message.FinishAmount = $util.Long.fromValue(object.FinishAmount)).unsigned = false;
                else if (typeof object.FinishAmount === "string")
                    message.FinishAmount = parseInt(object.FinishAmount, 10);
                else if (typeof object.FinishAmount === "number")
                    message.FinishAmount = object.FinishAmount;
                else if (typeof object.FinishAmount === "object")
                    message.FinishAmount = new $util.LongBits(object.FinishAmount.low >>> 0, object.FinishAmount.high >>> 0).toNumber();
            if (object.Rate != null)
                message.Rate = object.Rate | 0;
            if (object.Status != null)
                message.Status = object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from a FishSystemRewardDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.FishSystemRewardDataList
         * @static
         * @param {GameMsg.FishSystemRewardDataList} message FishSystemRewardDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishSystemRewardDataList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.FishID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Amount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.Amount = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishAmount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.FinishAmount = options.longs === String ? "0" :0;
                object.Rate = 0;
                object.Status = 0;
            }
            if (message.FishID != null && message.hasOwnProperty("FishID"))
                object.FishID = message.FishID;
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (typeof message.Amount === "number")
                    object.Amount = options.longs === String ? String(message.Amount) :message.Amount;
                else
                    object.Amount = options.longs === String ? $util.Long.prototype.toString.call(message.Amount) :options.longs === Number ? new $util.LongBits(message.Amount.low >>> 0, message.Amount.high >>> 0).toNumber() :message.Amount;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount = options.longs === String ? String(message.FinishAmount) :message.FinishAmount;
                else
                    object.FinishAmount = options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) :options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() :message.FinishAmount;
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                object.Rate = message.Rate;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this FishSystemRewardDataList to JSON.
         * @function toJSON
         * @memberof GameMsg.FishSystemRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishSystemRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishSystemRewardDataList;
    })();

    GameMsg.SuperToolFishGetVIPUserRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishGetVIPUserRewardDetail.
         * @memberof GameMsg
         * @interface ISuperToolFishGetVIPUserRewardDetail
         * @property {Array.<GameMsg.IFishVIPUserRewardDataList>|null} [FishVIPUserList] SuperToolFishGetVIPUserRewardDetail FishVIPUserList
         */

        /**
         * Constructs a new SuperToolFishGetVIPUserRewardDetail.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolFishGetVIPUserRewardDetail.
         * @implements ISuperToolFishGetVIPUserRewardDetail
         * @constructor
         * @param {GameMsg.ISuperToolFishGetVIPUserRewardDetail=} [properties] Properties to set
         */
        function SuperToolFishGetVIPUserRewardDetail(properties) {
            this.FishVIPUserList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolFishGetVIPUserRewardDetail FishVIPUserList.
         * @member {Array.<GameMsg.IFishVIPUserRewardDataList>} FishVIPUserList
         * @memberof GameMsg.SuperToolFishGetVIPUserRewardDetail
         * @instance
         */
        SuperToolFishGetVIPUserRewardDetail.prototype.FishVIPUserList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishGetVIPUserRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg.ISuperToolFishGetVIPUserRewardDetail=} [properties] Properties to set
         * @returns {GameMsg.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail instance
         */
        SuperToolFishGetVIPUserRewardDetail.create = function create(properties) {
            return new SuperToolFishGetVIPUserRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishGetVIPUserRewardDetail message. Does not implicitly {@link GameMsg.SuperToolFishGetVIPUserRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg.ISuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetVIPUserRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FishVIPUserList != null && message.FishVIPUserList.length)
                for (var i = 0; i < message.FishVIPUserList.length; ++i)
                    $root.GameMsg.FishVIPUserRewardDataList.encode(message.FishVIPUserList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishGetVIPUserRewardDetail message, length delimited. Does not implicitly {@link GameMsg.SuperToolFishGetVIPUserRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg.ISuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetVIPUserRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishGetVIPUserRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetVIPUserRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolFishGetVIPUserRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.FishVIPUserList && message.FishVIPUserList.length))
                        message.FishVIPUserList = [];
                    message.FishVIPUserList.push($root.GameMsg.FishVIPUserRewardDataList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuperToolFishGetVIPUserRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetVIPUserRewardDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishGetVIPUserRewardDetail message.
         * @function verify
         * @memberof GameMsg.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishGetVIPUserRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FishVIPUserList != null && message.hasOwnProperty("FishVIPUserList")) {
                if (!Array.isArray(message.FishVIPUserList))
                    return "FishVIPUserList:array expected";
                for (var i = 0; i < message.FishVIPUserList.length; ++i) {
                    var error = $root.GameMsg.FishVIPUserRewardDataList.verify(message.FishVIPUserList[i]);
                    if (error)
                        return "FishVIPUserList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishGetVIPUserRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         */
        SuperToolFishGetVIPUserRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolFishGetVIPUserRewardDetail)
                return object;
            var message = new $root.GameMsg.SuperToolFishGetVIPUserRewardDetail();
            if (object.FishVIPUserList) {
                if (!Array.isArray(object.FishVIPUserList))
                    throw TypeError(".GameMsg.SuperToolFishGetVIPUserRewardDetail.FishVIPUserList:array expected");
                message.FishVIPUserList = [];
                for (var i = 0; i < object.FishVIPUserList.length; ++i) {
                    if (typeof object.FishVIPUserList[i] !== "object")
                        throw TypeError(".GameMsg.SuperToolFishGetVIPUserRewardDetail.FishVIPUserList:object expected");
                    message.FishVIPUserList[i] = $root.GameMsg.FishVIPUserRewardDataList.fromObject(object.FishVIPUserList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishGetVIPUserRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg.SuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishGetVIPUserRewardDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.FishVIPUserList = [];
            if (message.FishVIPUserList && message.FishVIPUserList.length) {
                object.FishVIPUserList = [];
                for (var j = 0; j < message.FishVIPUserList.length; ++j)
                    object.FishVIPUserList[j] = $root.GameMsg.FishVIPUserRewardDataList.toObject(message.FishVIPUserList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishGetVIPUserRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolFishGetVIPUserRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishGetVIPUserRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishGetVIPUserRewardDetail;
    })();

    GameMsg.FishVIPUserRewardDataList = (function() {

        /**
         * Properties of a FishVIPUserRewardDataList.
         * @memberof GameMsg
         * @interface IFishVIPUserRewardDataList
         * @property {number} UserID FishVIPUserRewardDataList UserID
         * @property {number|Long} AssignAmount FishVIPUserRewardDataList AssignAmount
         * @property {number} Rate FishVIPUserRewardDataList Rate
         * @property {number|Long} FinishAmount FishVIPUserRewardDataList FinishAmount
         * @property {number} Status FishVIPUserRewardDataList Status
         * @property {number|Long} SumAssignAmount FishVIPUserRewardDataList SumAssignAmount
         */

        /**
         * Constructs a new FishVIPUserRewardDataList.
         * @memberof GameMsg
         * @classdesc Represents a FishVIPUserRewardDataList.
         * @implements IFishVIPUserRewardDataList
         * @constructor
         * @param {GameMsg.IFishVIPUserRewardDataList=} [properties] Properties to set
         */
        function FishVIPUserRewardDataList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishVIPUserRewardDataList UserID.
         * @member {number} UserID
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.UserID = 0;

        /**
         * FishVIPUserRewardDataList AssignAmount.
         * @member {number|Long} AssignAmount
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.AssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * FishVIPUserRewardDataList Rate.
         * @member {number} Rate
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.Rate = 0;

        /**
         * FishVIPUserRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * FishVIPUserRewardDataList Status.
         * @member {number} Status
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.Status = 0;

        /**
         * FishVIPUserRewardDataList SumAssignAmount.
         * @member {number|Long} SumAssignAmount
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.SumAssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * Creates a new FishVIPUserRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg.IFishVIPUserRewardDataList=} [properties] Properties to set
         * @returns {GameMsg.FishVIPUserRewardDataList} FishVIPUserRewardDataList instance
         */
        FishVIPUserRewardDataList.create = function create(properties) {
            return new FishVIPUserRewardDataList(properties);
        };

        /**
         * Encodes the specified FishVIPUserRewardDataList message. Does not implicitly {@link GameMsg.FishVIPUserRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg.IFishVIPUserRewardDataList} message FishVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishVIPUserRewardDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.AssignAmount);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Rate);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.FinishAmount);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Status);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.SumAssignAmount);
            return writer;
        };

        /**
         * Encodes the specified FishVIPUserRewardDataList message, length delimited. Does not implicitly {@link GameMsg.FishVIPUserRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg.IFishVIPUserRewardDataList} message FishVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishVIPUserRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishVIPUserRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishVIPUserRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.FishVIPUserRewardDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.AssignAmount = reader.int64();
                    break;
                case 3:
                    message.Rate = reader.int32();
                    break;
                case 4:
                    message.FinishAmount = reader.int64();
                    break;
                case 5:
                    message.Status = reader.int32();
                    break;
                case 6:
                    message.SumAssignAmount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            if (!message.hasOwnProperty("AssignAmount"))
                throw $util.ProtocolError("missing required 'AssignAmount'", { instance:message });
            if (!message.hasOwnProperty("Rate"))
                throw $util.ProtocolError("missing required 'Rate'", { instance:message });
            if (!message.hasOwnProperty("FinishAmount"))
                throw $util.ProtocolError("missing required 'FinishAmount'", { instance:message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance:message });
            if (!message.hasOwnProperty("SumAssignAmount"))
                throw $util.ProtocolError("missing required 'SumAssignAmount'", { instance:message });
            return message;
        };

        /**
         * Decodes a FishVIPUserRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishVIPUserRewardDataList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishVIPUserRewardDataList message.
         * @function verify
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishVIPUserRewardDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (!$util.isInteger(message.AssignAmount) && !(message.AssignAmount && $util.isInteger(message.AssignAmount.low) && $util.isInteger(message.AssignAmount.high)))
                return "AssignAmount:integer|Long expected";
            if (!$util.isInteger(message.Rate))
                return "Rate:integer expected";
            if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                return "FinishAmount:integer|Long expected";
            if (!$util.isInteger(message.Status))
                return "Status:integer expected";
            if (!$util.isInteger(message.SumAssignAmount) && !(message.SumAssignAmount && $util.isInteger(message.SumAssignAmount.low) && $util.isInteger(message.SumAssignAmount.high)))
                return "SumAssignAmount:integer|Long expected";
            return null;
        };

        /**
         * Creates a FishVIPUserRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         */
        FishVIPUserRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.FishVIPUserRewardDataList)
                return object;
            var message = new $root.GameMsg.FishVIPUserRewardDataList();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.AssignAmount != null)
                if ($util.Long)
                    (message.AssignAmount = $util.Long.fromValue(object.AssignAmount)).unsigned = false;
                else if (typeof object.AssignAmount === "string")
                    message.AssignAmount = parseInt(object.AssignAmount, 10);
                else if (typeof object.AssignAmount === "number")
                    message.AssignAmount = object.AssignAmount;
                else if (typeof object.AssignAmount === "object")
                    message.AssignAmount = new $util.LongBits(object.AssignAmount.low >>> 0, object.AssignAmount.high >>> 0).toNumber();
            if (object.Rate != null)
                message.Rate = object.Rate | 0;
            if (object.FinishAmount != null)
                if ($util.Long)
                    (message.FinishAmount = $util.Long.fromValue(object.FinishAmount)).unsigned = false;
                else if (typeof object.FinishAmount === "string")
                    message.FinishAmount = parseInt(object.FinishAmount, 10);
                else if (typeof object.FinishAmount === "number")
                    message.FinishAmount = object.FinishAmount;
                else if (typeof object.FinishAmount === "object")
                    message.FinishAmount = new $util.LongBits(object.FinishAmount.low >>> 0, object.FinishAmount.high >>> 0).toNumber();
            if (object.Status != null)
                message.Status = object.Status | 0;
            if (object.SumAssignAmount != null)
                if ($util.Long)
                    (message.SumAssignAmount = $util.Long.fromValue(object.SumAssignAmount)).unsigned = false;
                else if (typeof object.SumAssignAmount === "string")
                    message.SumAssignAmount = parseInt(object.SumAssignAmount, 10);
                else if (typeof object.SumAssignAmount === "number")
                    message.SumAssignAmount = object.SumAssignAmount;
                else if (typeof object.SumAssignAmount === "object")
                    message.SumAssignAmount = new $util.LongBits(object.SumAssignAmount.low >>> 0, object.SumAssignAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FishVIPUserRewardDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg.FishVIPUserRewardDataList} message FishVIPUserRewardDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishVIPUserRewardDataList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AssignAmount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.AssignAmount = options.longs === String ? "0" :0;
                object.Rate = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishAmount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.FinishAmount = options.longs === String ? "0" :0;
                object.Status = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumAssignAmount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.SumAssignAmount = options.longs === String ? "0" :0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.AssignAmount != null && message.hasOwnProperty("AssignAmount"))
                if (typeof message.AssignAmount === "number")
                    object.AssignAmount = options.longs === String ? String(message.AssignAmount) :message.AssignAmount;
                else
                    object.AssignAmount = options.longs === String ? $util.Long.prototype.toString.call(message.AssignAmount) :options.longs === Number ? new $util.LongBits(message.AssignAmount.low >>> 0, message.AssignAmount.high >>> 0).toNumber() :message.AssignAmount;
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                object.Rate = message.Rate;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount = options.longs === String ? String(message.FinishAmount) :message.FinishAmount;
                else
                    object.FinishAmount = options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) :options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() :message.FinishAmount;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.SumAssignAmount != null && message.hasOwnProperty("SumAssignAmount"))
                if (typeof message.SumAssignAmount === "number")
                    object.SumAssignAmount = options.longs === String ? String(message.SumAssignAmount) :message.SumAssignAmount;
                else
                    object.SumAssignAmount = options.longs === String ? $util.Long.prototype.toString.call(message.SumAssignAmount) :options.longs === Number ? new $util.LongBits(message.SumAssignAmount.low >>> 0, message.SumAssignAmount.high >>> 0).toNumber() :message.SumAssignAmount;
            return object;
        };

        /**
         * Converts this FishVIPUserRewardDataList to JSON.
         * @function toJSON
         * @memberof GameMsg.FishVIPUserRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishVIPUserRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishVIPUserRewardDataList;
    })();

    GameMsg.SuperToolFishUpdSystemRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishUpdSystemRewardDetail.
         * @memberof GameMsg
         * @interface ISuperToolFishUpdSystemRewardDetail
         * @property {number} FlagID SuperToolFishUpdSystemRewardDetail FlagID
         * @property {Array.<GameMsg.ISuperToolFishUpdSystemRewardDataList>|null} [FishRewardList] SuperToolFishUpdSystemRewardDetail FishRewardList
         */

        /**
         * Constructs a new SuperToolFishUpdSystemRewardDetail.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolFishUpdSystemRewardDetail.
         * @implements ISuperToolFishUpdSystemRewardDetail
         * @constructor
         * @param {GameMsg.ISuperToolFishUpdSystemRewardDetail=} [properties] Properties to set
         */
        function SuperToolFishUpdSystemRewardDetail(properties) {
            this.FishRewardList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolFishUpdSystemRewardDetail FlagID.
         * @member {number} FlagID
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDetail
         * @instance
         */
        SuperToolFishUpdSystemRewardDetail.prototype.FlagID = 0;

        /**
         * SuperToolFishUpdSystemRewardDetail FishRewardList.
         * @member {Array.<GameMsg.ISuperToolFishUpdSystemRewardDataList>} FishRewardList
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDetail
         * @instance
         */
        SuperToolFishUpdSystemRewardDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishUpdSystemRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg.ISuperToolFishUpdSystemRewardDetail=} [properties] Properties to set
         * @returns {GameMsg.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail instance
         */
        SuperToolFishUpdSystemRewardDetail.create = function create(properties) {
            return new SuperToolFishUpdSystemRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDetail message. Does not implicitly {@link GameMsg.SuperToolFishUpdSystemRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg.ISuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i = 0; i < message.FishRewardList.length; ++i)
                    $root.GameMsg.SuperToolFishUpdSystemRewardDataList.encode(message.FishRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDetail message, length delimited. Does not implicitly {@link GameMsg.SuperToolFishUpdSystemRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg.ISuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolFishUpdSystemRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FlagID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.GameMsg.SuperToolFishUpdSystemRewardDataList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance:message });
            return message;
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishUpdSystemRewardDetail message.
         * @function verify
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishUpdSystemRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID:integer expected";
            if (message.FishRewardList != null && message.hasOwnProperty("FishRewardList")) {
                if (!Array.isArray(message.FishRewardList))
                    return "FishRewardList:array expected";
                for (var i = 0; i < message.FishRewardList.length; ++i) {
                    var error = $root.GameMsg.SuperToolFishUpdSystemRewardDataList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishUpdSystemRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         */
        SuperToolFishUpdSystemRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolFishUpdSystemRewardDetail)
                return object;
            var message = new $root.GameMsg.SuperToolFishUpdSystemRewardDetail();
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".GameMsg.SuperToolFishUpdSystemRewardDetail.FishRewardList:array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".GameMsg.SuperToolFishUpdSystemRewardDetail.FishRewardList:object expected");
                    message.FishRewardList[i] = $root.GameMsg.SuperToolFishUpdSystemRewardDataList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishUpdSystemRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg.SuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishUpdSystemRewardDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.FishRewardList = [];
            if (options.defaults)
                object.FlagID = 0;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.FishRewardList && message.FishRewardList.length) {
                object.FishRewardList = [];
                for (var j = 0; j < message.FishRewardList.length; ++j)
                    object.FishRewardList[j] = $root.GameMsg.SuperToolFishUpdSystemRewardDataList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishUpdSystemRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdSystemRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdSystemRewardDetail;
    })();

    GameMsg.SuperToolFishUpdSystemRewardDataList = (function() {

        /**
         * Properties of a SuperToolFishUpdSystemRewardDataList.
         * @memberof GameMsg
         * @interface ISuperToolFishUpdSystemRewardDataList
         * @property {number} FishID SuperToolFishUpdSystemRewardDataList FishID
         * @property {number|Long} FinishAmount SuperToolFishUpdSystemRewardDataList FinishAmount
         */

        /**
         * Constructs a new SuperToolFishUpdSystemRewardDataList.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolFishUpdSystemRewardDataList.
         * @implements ISuperToolFishUpdSystemRewardDataList
         * @constructor
         * @param {GameMsg.ISuperToolFishUpdSystemRewardDataList=} [properties] Properties to set
         */
        function SuperToolFishUpdSystemRewardDataList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolFishUpdSystemRewardDataList FishID.
         * @member {number} FishID
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDataList
         * @instance
         */
        SuperToolFishUpdSystemRewardDataList.prototype.FishID = 0;

        /**
         * SuperToolFishUpdSystemRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDataList
         * @instance
         */
        SuperToolFishUpdSystemRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * Creates a new SuperToolFishUpdSystemRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg.ISuperToolFishUpdSystemRewardDataList=} [properties] Properties to set
         * @returns {GameMsg.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList instance
         */
        SuperToolFishUpdSystemRewardDataList.create = function create(properties) {
            return new SuperToolFishUpdSystemRewardDataList(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDataList message. Does not implicitly {@link GameMsg.SuperToolFishUpdSystemRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg.ISuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FishID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.FinishAmount);
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDataList message, length delimited. Does not implicitly {@link GameMsg.SuperToolFishUpdSystemRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg.ISuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolFishUpdSystemRewardDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FishID = reader.int32();
                    break;
                case 2:
                    message.FinishAmount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FishID"))
                throw $util.ProtocolError("missing required 'FishID'", { instance:message });
            if (!message.hasOwnProperty("FinishAmount"))
                throw $util.ProtocolError("missing required 'FinishAmount'", { instance:message });
            return message;
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDataList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishUpdSystemRewardDataList message.
         * @function verify
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishUpdSystemRewardDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FishID))
                return "FishID:integer expected";
            if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                return "FinishAmount:integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolFishUpdSystemRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         */
        SuperToolFishUpdSystemRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolFishUpdSystemRewardDataList)
                return object;
            var message = new $root.GameMsg.SuperToolFishUpdSystemRewardDataList();
            if (object.FishID != null)
                message.FishID = object.FishID | 0;
            if (object.FinishAmount != null)
                if ($util.Long)
                    (message.FinishAmount = $util.Long.fromValue(object.FinishAmount)).unsigned = false;
                else if (typeof object.FinishAmount === "string")
                    message.FinishAmount = parseInt(object.FinishAmount, 10);
                else if (typeof object.FinishAmount === "number")
                    message.FinishAmount = object.FinishAmount;
                else if (typeof object.FinishAmount === "object")
                    message.FinishAmount = new $util.LongBits(object.FinishAmount.low >>> 0, object.FinishAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishUpdSystemRewardDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg.SuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishUpdSystemRewardDataList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.FishID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishAmount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.FinishAmount = options.longs === String ? "0" :0;
            }
            if (message.FishID != null && message.hasOwnProperty("FishID"))
                object.FishID = message.FishID;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount = options.longs === String ? String(message.FinishAmount) :message.FinishAmount;
                else
                    object.FinishAmount = options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) :options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() :message.FinishAmount;
            return object;
        };

        /**
         * Converts this SuperToolFishUpdSystemRewardDataList to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolFishUpdSystemRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdSystemRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdSystemRewardDataList;
    })();

    GameMsg.SuperToolfishUpdVIPUserRewardDetail = (function() {

        /**
         * Properties of a SuperToolfishUpdVIPUserRewardDetail.
         * @memberof GameMsg
         * @interface ISuperToolfishUpdVIPUserRewardDetail
         * @property {number} GameID SuperToolfishUpdVIPUserRewardDetail GameID
         * @property {Array.<GameMsg.ISuperToolFishUpdVIPUserRewardDataList>|null} [FishUserRewardList] SuperToolfishUpdVIPUserRewardDetail FishUserRewardList
         */

        /**
         * Constructs a new SuperToolfishUpdVIPUserRewardDetail.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolfishUpdVIPUserRewardDetail.
         * @implements ISuperToolfishUpdVIPUserRewardDetail
         * @constructor
         * @param {GameMsg.ISuperToolfishUpdVIPUserRewardDetail=} [properties] Properties to set
         */
        function SuperToolfishUpdVIPUserRewardDetail(properties) {
            this.FishUserRewardList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolfishUpdVIPUserRewardDetail GameID.
         * @member {number} GameID
         * @memberof GameMsg.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.GameID = 0;

        /**
         * SuperToolfishUpdVIPUserRewardDetail FishUserRewardList.
         * @member {Array.<GameMsg.ISuperToolFishUpdVIPUserRewardDataList>} FishUserRewardList
         * @memberof GameMsg.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.FishUserRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolfishUpdVIPUserRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg.ISuperToolfishUpdVIPUserRewardDetail=} [properties] Properties to set
         * @returns {GameMsg.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail instance
         */
        SuperToolfishUpdVIPUserRewardDetail.create = function create(properties) {
            return new SuperToolfishUpdVIPUserRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolfishUpdVIPUserRewardDetail message. Does not implicitly {@link GameMsg.SuperToolfishUpdVIPUserRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg.ISuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolfishUpdVIPUserRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.FishUserRewardList != null && message.FishUserRewardList.length)
                for (var i = 0; i < message.FishUserRewardList.length; ++i)
                    $root.GameMsg.SuperToolFishUpdVIPUserRewardDataList.encode(message.FishUserRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolfishUpdVIPUserRewardDetail message, length delimited. Does not implicitly {@link GameMsg.SuperToolfishUpdVIPUserRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg.ISuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolfishUpdVIPUserRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolfishUpdVIPUserRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolfishUpdVIPUserRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolfishUpdVIPUserRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishUserRewardList && message.FishUserRewardList.length))
                        message.FishUserRewardList = [];
                    message.FishUserRewardList.push($root.GameMsg.SuperToolFishUpdVIPUserRewardDataList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance:message });
            return message;
        };

        /**
         * Decodes a SuperToolfishUpdVIPUserRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolfishUpdVIPUserRewardDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolfishUpdVIPUserRewardDetail message.
         * @function verify
         * @memberof GameMsg.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolfishUpdVIPUserRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID:integer expected";
            if (message.FishUserRewardList != null && message.hasOwnProperty("FishUserRewardList")) {
                if (!Array.isArray(message.FishUserRewardList))
                    return "FishUserRewardList:array expected";
                for (var i = 0; i < message.FishUserRewardList.length; ++i) {
                    var error = $root.GameMsg.SuperToolFishUpdVIPUserRewardDataList.verify(message.FishUserRewardList[i]);
                    if (error)
                        return "FishUserRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolfishUpdVIPUserRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         */
        SuperToolfishUpdVIPUserRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolfishUpdVIPUserRewardDetail)
                return object;
            var message = new $root.GameMsg.SuperToolfishUpdVIPUserRewardDetail();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FishUserRewardList) {
                if (!Array.isArray(object.FishUserRewardList))
                    throw TypeError(".GameMsg.SuperToolfishUpdVIPUserRewardDetail.FishUserRewardList:array expected");
                message.FishUserRewardList = [];
                for (var i = 0; i < object.FishUserRewardList.length; ++i) {
                    if (typeof object.FishUserRewardList[i] !== "object")
                        throw TypeError(".GameMsg.SuperToolfishUpdVIPUserRewardDetail.FishUserRewardList:object expected");
                    message.FishUserRewardList[i] = $root.GameMsg.SuperToolFishUpdVIPUserRewardDataList.fromObject(object.FishUserRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolfishUpdVIPUserRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg.SuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolfishUpdVIPUserRewardDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.FishUserRewardList = [];
            if (options.defaults)
                object.GameID = 0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.FishUserRewardList && message.FishUserRewardList.length) {
                object.FishUserRewardList = [];
                for (var j = 0; j < message.FishUserRewardList.length; ++j)
                    object.FishUserRewardList[j] = $root.GameMsg.SuperToolFishUpdVIPUserRewardDataList.toObject(message.FishUserRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolfishUpdVIPUserRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolfishUpdVIPUserRewardDetail;
    })();

    GameMsg.SuperToolFishUpdVIPUserRewardDataList = (function() {

        /**
         * Properties of a SuperToolFishUpdVIPUserRewardDataList.
         * @memberof GameMsg
         * @interface ISuperToolFishUpdVIPUserRewardDataList
         * @property {number} UserID SuperToolFishUpdVIPUserRewardDataList UserID
         * @property {number|Long} FinishAmount SuperToolFishUpdVIPUserRewardDataList FinishAmount
         */

        /**
         * Constructs a new SuperToolFishUpdVIPUserRewardDataList.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolFishUpdVIPUserRewardDataList.
         * @implements ISuperToolFishUpdVIPUserRewardDataList
         * @constructor
         * @param {GameMsg.ISuperToolFishUpdVIPUserRewardDataList=} [properties] Properties to set
         */
        function SuperToolFishUpdVIPUserRewardDataList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolFishUpdVIPUserRewardDataList UserID.
         * @member {number} UserID
         * @memberof GameMsg.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.UserID = 0;

        /**
         * SuperToolFishUpdVIPUserRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * Creates a new SuperToolFishUpdVIPUserRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg.ISuperToolFishUpdVIPUserRewardDataList=} [properties] Properties to set
         * @returns {GameMsg.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList instance
         */
        SuperToolFishUpdVIPUserRewardDataList.create = function create(properties) {
            return new SuperToolFishUpdVIPUserRewardDataList(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdVIPUserRewardDataList message. Does not implicitly {@link GameMsg.SuperToolFishUpdVIPUserRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg.ISuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdVIPUserRewardDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.FinishAmount);
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishUpdVIPUserRewardDataList message, length delimited. Does not implicitly {@link GameMsg.SuperToolFishUpdVIPUserRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg.ISuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdVIPUserRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdVIPUserRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdVIPUserRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolFishUpdVIPUserRewardDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.FinishAmount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            if (!message.hasOwnProperty("FinishAmount"))
                throw $util.ProtocolError("missing required 'FinishAmount'", { instance:message });
            return message;
        };

        /**
         * Decodes a SuperToolFishUpdVIPUserRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdVIPUserRewardDataList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishUpdVIPUserRewardDataList message.
         * @function verify
         * @memberof GameMsg.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishUpdVIPUserRewardDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                return "FinishAmount:integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolFishUpdVIPUserRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         */
        SuperToolFishUpdVIPUserRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolFishUpdVIPUserRewardDataList)
                return object;
            var message = new $root.GameMsg.SuperToolFishUpdVIPUserRewardDataList();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.FinishAmount != null)
                if ($util.Long)
                    (message.FinishAmount = $util.Long.fromValue(object.FinishAmount)).unsigned = false;
                else if (typeof object.FinishAmount === "string")
                    message.FinishAmount = parseInt(object.FinishAmount, 10);
                else if (typeof object.FinishAmount === "number")
                    message.FinishAmount = object.FinishAmount;
                else if (typeof object.FinishAmount === "object")
                    message.FinishAmount = new $util.LongBits(object.FinishAmount.low >>> 0, object.FinishAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishUpdVIPUserRewardDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg.SuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishUpdVIPUserRewardDataList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishAmount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.FinishAmount = options.longs === String ? "0" :0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount = options.longs === String ? String(message.FinishAmount) :message.FinishAmount;
                else
                    object.FinishAmount = options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) :options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() :message.FinishAmount;
            return object;
        };

        /**
         * Converts this SuperToolFishUpdVIPUserRewardDataList to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdVIPUserRewardDataList;
    })();

    GameMsg.SuperToolZjhVipUserDataList = (function() {

        /**
         * Properties of a SuperToolZjhVipUserDataList.
         * @memberof GameMsg
         * @interface ISuperToolZjhVipUserDataList
         * @property {Array.<GameMsg.ISuperToolZjhVipUserData>|null} [DataList] SuperToolZjhVipUserDataList DataList
         */

        /**
         * Constructs a new SuperToolZjhVipUserDataList.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolZjhVipUserDataList.
         * @implements ISuperToolZjhVipUserDataList
         * @constructor
         * @param {GameMsg.ISuperToolZjhVipUserDataList=} [properties] Properties to set
         */
        function SuperToolZjhVipUserDataList(properties) {
            this.DataList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolZjhVipUserDataList DataList.
         * @member {Array.<GameMsg.ISuperToolZjhVipUserData>} DataList
         * @memberof GameMsg.SuperToolZjhVipUserDataList
         * @instance
         */
        SuperToolZjhVipUserDataList.prototype.DataList = $util.emptyArray;

        /**
         * Creates a new SuperToolZjhVipUserDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg.ISuperToolZjhVipUserDataList=} [properties] Properties to set
         * @returns {GameMsg.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList instance
         */
        SuperToolZjhVipUserDataList.create = function create(properties) {
            return new SuperToolZjhVipUserDataList(properties);
        };

        /**
         * Encodes the specified SuperToolZjhVipUserDataList message. Does not implicitly {@link GameMsg.SuperToolZjhVipUserDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg.ISuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DataList != null && message.DataList.length)
                for (var i = 0; i < message.DataList.length; ++i)
                    $root.GameMsg.SuperToolZjhVipUserData.encode(message.DataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolZjhVipUserDataList message, length delimited. Does not implicitly {@link GameMsg.SuperToolZjhVipUserDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg.ISuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhVipUserDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolZjhVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolZjhVipUserDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.DataList && message.DataList.length))
                        message.DataList = [];
                    message.DataList.push($root.GameMsg.SuperToolZjhVipUserData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuperToolZjhVipUserDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolZjhVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserDataList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolZjhVipUserDataList message.
         * @function verify
         * @memberof GameMsg.SuperToolZjhVipUserDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolZjhVipUserDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DataList != null && message.hasOwnProperty("DataList")) {
                if (!Array.isArray(message.DataList))
                    return "DataList:array expected";
                for (var i = 0; i < message.DataList.length; ++i) {
                    var error = $root.GameMsg.SuperToolZjhVipUserData.verify(message.DataList[i]);
                    if (error)
                        return "DataList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolZjhVipUserDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolZjhVipUserDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         */
        SuperToolZjhVipUserDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolZjhVipUserDataList)
                return object;
            var message = new $root.GameMsg.SuperToolZjhVipUserDataList();
            if (object.DataList) {
                if (!Array.isArray(object.DataList))
                    throw TypeError(".GameMsg.SuperToolZjhVipUserDataList.DataList:array expected");
                message.DataList = [];
                for (var i = 0; i < object.DataList.length; ++i) {
                    if (typeof object.DataList[i] !== "object")
                        throw TypeError(".GameMsg.SuperToolZjhVipUserDataList.DataList:object expected");
                    message.DataList[i] = $root.GameMsg.SuperToolZjhVipUserData.fromObject(object.DataList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolZjhVipUserDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg.SuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolZjhVipUserDataList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.DataList = [];
            if (message.DataList && message.DataList.length) {
                object.DataList = [];
                for (var j = 0; j < message.DataList.length; ++j)
                    object.DataList[j] = $root.GameMsg.SuperToolZjhVipUserData.toObject(message.DataList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolZjhVipUserDataList to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolZjhVipUserDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhVipUserDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhVipUserDataList;
    })();

    GameMsg.SuperToolZjhVipUserData = (function() {

        /**
         * Properties of a SuperToolZjhVipUserData.
         * @memberof GameMsg
         * @interface ISuperToolZjhVipUserData
         * @property {number} UserID SuperToolZjhVipUserData UserID
         * @property {number|Long} NextType SuperToolZjhVipUserData NextType
         * @property {number|Long} NextWinLose SuperToolZjhVipUserData NextWinLose
         * @property {number|Long} NextWinLoseNum SuperToolZjhVipUserData NextWinLoseNum
         * @property {number|Long} Finish SuperToolZjhVipUserData Finish
         * @property {number|Long} FinishNextWinLoseNum SuperToolZjhVipUserData FinishNextWinLoseNum
         * @property {number} NextTable SuperToolZjhVipUserData NextTable
         * @property {number} Status SuperToolZjhVipUserData Status
         * @property {number|Long} TodaySumcharge SuperToolZjhVipUserData TodaySumcharge
         * @property {number|Long} TodaySumConvert SuperToolZjhVipUserData TodaySumConvert
         * @property {number|Long} TodayUserWinLose SuperToolZjhVipUserData TodayUserWinLose
         */

        /**
         * Constructs a new SuperToolZjhVipUserData.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolZjhVipUserData.
         * @implements ISuperToolZjhVipUserData
         * @constructor
         * @param {GameMsg.ISuperToolZjhVipUserData=} [properties] Properties to set
         */
        function SuperToolZjhVipUserData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolZjhVipUserData UserID.
         * @member {number} UserID
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.UserID = 0;

        /**
         * SuperToolZjhVipUserData NextType.
         * @member {number|Long} NextType
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextType = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * SuperToolZjhVipUserData NextWinLose.
         * @member {number|Long} NextWinLose
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextWinLose = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * SuperToolZjhVipUserData NextWinLoseNum.
         * @member {number|Long} NextWinLoseNum
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * SuperToolZjhVipUserData Finish.
         * @member {number|Long} Finish
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.Finish = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * SuperToolZjhVipUserData FinishNextWinLoseNum.
         * @member {number|Long} FinishNextWinLoseNum
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.FinishNextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * SuperToolZjhVipUserData NextTable.
         * @member {number} NextTable
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextTable = 0;

        /**
         * SuperToolZjhVipUserData Status.
         * @member {number} Status
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.Status = 0;

        /**
         * SuperToolZjhVipUserData TodaySumcharge.
         * @member {number|Long} TodaySumcharge
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodaySumcharge = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * SuperToolZjhVipUserData TodaySumConvert.
         * @member {number|Long} TodaySumConvert
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodaySumConvert = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * SuperToolZjhVipUserData TodayUserWinLose.
         * @member {number|Long} TodayUserWinLose
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodayUserWinLose = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * Creates a new SuperToolZjhVipUserData instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg.ISuperToolZjhVipUserData=} [properties] Properties to set
         * @returns {GameMsg.SuperToolZjhVipUserData} SuperToolZjhVipUserData instance
         */
        SuperToolZjhVipUserData.create = function create(properties) {
            return new SuperToolZjhVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolZjhVipUserData message. Does not implicitly {@link GameMsg.SuperToolZjhVipUserData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg.ISuperToolZjhVipUserData} message SuperToolZjhVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.NextType);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.NextWinLose);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.NextWinLoseNum);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.Finish);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.FinishNextWinLoseNum);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.NextTable);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.Status);
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.TodaySumcharge);
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.TodaySumConvert);
            writer.uint32(/* id 11, wireType 0 =*/88).int64(message.TodayUserWinLose);
            return writer;
        };

        /**
         * Encodes the specified SuperToolZjhVipUserData message, length delimited. Does not implicitly {@link GameMsg.SuperToolZjhVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg.ISuperToolZjhVipUserData} message SuperToolZjhVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolZjhVipUserData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.NextType = reader.int64();
                    break;
                case 3:
                    message.NextWinLose = reader.int64();
                    break;
                case 4:
                    message.NextWinLoseNum = reader.int64();
                    break;
                case 5:
                    message.Finish = reader.int64();
                    break;
                case 6:
                    message.FinishNextWinLoseNum = reader.int64();
                    break;
                case 7:
                    message.NextTable = reader.int32();
                    break;
                case 8:
                    message.Status = reader.int32();
                    break;
                case 9:
                    message.TodaySumcharge = reader.int64();
                    break;
                case 10:
                    message.TodaySumConvert = reader.int64();
                    break;
                case 11:
                    message.TodayUserWinLose = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            if (!message.hasOwnProperty("NextType"))
                throw $util.ProtocolError("missing required 'NextType'", { instance:message });
            if (!message.hasOwnProperty("NextWinLose"))
                throw $util.ProtocolError("missing required 'NextWinLose'", { instance:message });
            if (!message.hasOwnProperty("NextWinLoseNum"))
                throw $util.ProtocolError("missing required 'NextWinLoseNum'", { instance:message });
            if (!message.hasOwnProperty("Finish"))
                throw $util.ProtocolError("missing required 'Finish'", { instance:message });
            if (!message.hasOwnProperty("FinishNextWinLoseNum"))
                throw $util.ProtocolError("missing required 'FinishNextWinLoseNum'", { instance:message });
            if (!message.hasOwnProperty("NextTable"))
                throw $util.ProtocolError("missing required 'NextTable'", { instance:message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance:message });
            if (!message.hasOwnProperty("TodaySumcharge"))
                throw $util.ProtocolError("missing required 'TodaySumcharge'", { instance:message });
            if (!message.hasOwnProperty("TodaySumConvert"))
                throw $util.ProtocolError("missing required 'TodaySumConvert'", { instance:message });
            if (!message.hasOwnProperty("TodayUserWinLose"))
                throw $util.ProtocolError("missing required 'TodayUserWinLose'", { instance:message });
            return message;
        };

        /**
         * Decodes a SuperToolZjhVipUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolZjhVipUserData message.
         * @function verify
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolZjhVipUserData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (!$util.isInteger(message.NextType) && !(message.NextType && $util.isInteger(message.NextType.low) && $util.isInteger(message.NextType.high)))
                return "NextType:integer|Long expected";
            if (!$util.isInteger(message.NextWinLose) && !(message.NextWinLose && $util.isInteger(message.NextWinLose.low) && $util.isInteger(message.NextWinLose.high)))
                return "NextWinLose:integer|Long expected";
            if (!$util.isInteger(message.NextWinLoseNum) && !(message.NextWinLoseNum && $util.isInteger(message.NextWinLoseNum.low) && $util.isInteger(message.NextWinLoseNum.high)))
                return "NextWinLoseNum:integer|Long expected";
            if (!$util.isInteger(message.Finish) && !(message.Finish && $util.isInteger(message.Finish.low) && $util.isInteger(message.Finish.high)))
                return "Finish:integer|Long expected";
            if (!$util.isInteger(message.FinishNextWinLoseNum) && !(message.FinishNextWinLoseNum && $util.isInteger(message.FinishNextWinLoseNum.low) && $util.isInteger(message.FinishNextWinLoseNum.high)))
                return "FinishNextWinLoseNum:integer|Long expected";
            if (!$util.isInteger(message.NextTable))
                return "NextTable:integer expected";
            if (!$util.isInteger(message.Status))
                return "Status:integer expected";
            if (!$util.isInteger(message.TodaySumcharge) && !(message.TodaySumcharge && $util.isInteger(message.TodaySumcharge.low) && $util.isInteger(message.TodaySumcharge.high)))
                return "TodaySumcharge:integer|Long expected";
            if (!$util.isInteger(message.TodaySumConvert) && !(message.TodaySumConvert && $util.isInteger(message.TodaySumConvert.low) && $util.isInteger(message.TodaySumConvert.high)))
                return "TodaySumConvert:integer|Long expected";
            if (!$util.isInteger(message.TodayUserWinLose) && !(message.TodayUserWinLose && $util.isInteger(message.TodayUserWinLose.low) && $util.isInteger(message.TodayUserWinLose.high)))
                return "TodayUserWinLose:integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolZjhVipUserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         */
        SuperToolZjhVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolZjhVipUserData)
                return object;
            var message = new $root.GameMsg.SuperToolZjhVipUserData();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.NextType != null)
                if ($util.Long)
                    (message.NextType = $util.Long.fromValue(object.NextType)).unsigned = false;
                else if (typeof object.NextType === "string")
                    message.NextType = parseInt(object.NextType, 10);
                else if (typeof object.NextType === "number")
                    message.NextType = object.NextType;
                else if (typeof object.NextType === "object")
                    message.NextType = new $util.LongBits(object.NextType.low >>> 0, object.NextType.high >>> 0).toNumber();
            if (object.NextWinLose != null)
                if ($util.Long)
                    (message.NextWinLose = $util.Long.fromValue(object.NextWinLose)).unsigned = false;
                else if (typeof object.NextWinLose === "string")
                    message.NextWinLose = parseInt(object.NextWinLose, 10);
                else if (typeof object.NextWinLose === "number")
                    message.NextWinLose = object.NextWinLose;
                else if (typeof object.NextWinLose === "object")
                    message.NextWinLose = new $util.LongBits(object.NextWinLose.low >>> 0, object.NextWinLose.high >>> 0).toNumber();
            if (object.NextWinLoseNum != null)
                if ($util.Long)
                    (message.NextWinLoseNum = $util.Long.fromValue(object.NextWinLoseNum)).unsigned = false;
                else if (typeof object.NextWinLoseNum === "string")
                    message.NextWinLoseNum = parseInt(object.NextWinLoseNum, 10);
                else if (typeof object.NextWinLoseNum === "number")
                    message.NextWinLoseNum = object.NextWinLoseNum;
                else if (typeof object.NextWinLoseNum === "object")
                    message.NextWinLoseNum = new $util.LongBits(object.NextWinLoseNum.low >>> 0, object.NextWinLoseNum.high >>> 0).toNumber();
            if (object.Finish != null)
                if ($util.Long)
                    (message.Finish = $util.Long.fromValue(object.Finish)).unsigned = false;
                else if (typeof object.Finish === "string")
                    message.Finish = parseInt(object.Finish, 10);
                else if (typeof object.Finish === "number")
                    message.Finish = object.Finish;
                else if (typeof object.Finish === "object")
                    message.Finish = new $util.LongBits(object.Finish.low >>> 0, object.Finish.high >>> 0).toNumber();
            if (object.FinishNextWinLoseNum != null)
                if ($util.Long)
                    (message.FinishNextWinLoseNum = $util.Long.fromValue(object.FinishNextWinLoseNum)).unsigned = false;
                else if (typeof object.FinishNextWinLoseNum === "string")
                    message.FinishNextWinLoseNum = parseInt(object.FinishNextWinLoseNum, 10);
                else if (typeof object.FinishNextWinLoseNum === "number")
                    message.FinishNextWinLoseNum = object.FinishNextWinLoseNum;
                else if (typeof object.FinishNextWinLoseNum === "object")
                    message.FinishNextWinLoseNum = new $util.LongBits(object.FinishNextWinLoseNum.low >>> 0, object.FinishNextWinLoseNum.high >>> 0).toNumber();
            if (object.NextTable != null)
                message.NextTable = object.NextTable | 0;
            if (object.Status != null)
                message.Status = object.Status | 0;
            if (object.TodaySumcharge != null)
                if ($util.Long)
                    (message.TodaySumcharge = $util.Long.fromValue(object.TodaySumcharge)).unsigned = false;
                else if (typeof object.TodaySumcharge === "string")
                    message.TodaySumcharge = parseInt(object.TodaySumcharge, 10);
                else if (typeof object.TodaySumcharge === "number")
                    message.TodaySumcharge = object.TodaySumcharge;
                else if (typeof object.TodaySumcharge === "object")
                    message.TodaySumcharge = new $util.LongBits(object.TodaySumcharge.low >>> 0, object.TodaySumcharge.high >>> 0).toNumber();
            if (object.TodaySumConvert != null)
                if ($util.Long)
                    (message.TodaySumConvert = $util.Long.fromValue(object.TodaySumConvert)).unsigned = false;
                else if (typeof object.TodaySumConvert === "string")
                    message.TodaySumConvert = parseInt(object.TodaySumConvert, 10);
                else if (typeof object.TodaySumConvert === "number")
                    message.TodaySumConvert = object.TodaySumConvert;
                else if (typeof object.TodaySumConvert === "object")
                    message.TodaySumConvert = new $util.LongBits(object.TodaySumConvert.low >>> 0, object.TodaySumConvert.high >>> 0).toNumber();
            if (object.TodayUserWinLose != null)
                if ($util.Long)
                    (message.TodayUserWinLose = $util.Long.fromValue(object.TodayUserWinLose)).unsigned = false;
                else if (typeof object.TodayUserWinLose === "string")
                    message.TodayUserWinLose = parseInt(object.TodayUserWinLose, 10);
                else if (typeof object.TodayUserWinLose === "number")
                    message.TodayUserWinLose = object.TodayUserWinLose;
                else if (typeof object.TodayUserWinLose === "object")
                    message.TodayUserWinLose = new $util.LongBits(object.TodayUserWinLose.low >>> 0, object.TodayUserWinLose.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SuperToolZjhVipUserData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg.SuperToolZjhVipUserData} message SuperToolZjhVipUserData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolZjhVipUserData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.NextType = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.NextType = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.NextWinLose = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.NextWinLose = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.NextWinLoseNum = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.NextWinLoseNum = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Finish = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.Finish = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishNextWinLoseNum = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.FinishNextWinLoseNum = options.longs === String ? "0" :0;
                object.NextTable = 0;
                object.Status = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TodaySumcharge = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.TodaySumcharge = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TodaySumConvert = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.TodaySumConvert = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TodayUserWinLose = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.TodayUserWinLose = options.longs === String ? "0" :0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                if (typeof message.NextType === "number")
                    object.NextType = options.longs === String ? String(message.NextType) :message.NextType;
                else
                    object.NextType = options.longs === String ? $util.Long.prototype.toString.call(message.NextType) :options.longs === Number ? new $util.LongBits(message.NextType.low >>> 0, message.NextType.high >>> 0).toNumber() :message.NextType;
            if (message.NextWinLose != null && message.hasOwnProperty("NextWinLose"))
                if (typeof message.NextWinLose === "number")
                    object.NextWinLose = options.longs === String ? String(message.NextWinLose) :message.NextWinLose;
                else
                    object.NextWinLose = options.longs === String ? $util.Long.prototype.toString.call(message.NextWinLose) :options.longs === Number ? new $util.LongBits(message.NextWinLose.low >>> 0, message.NextWinLose.high >>> 0).toNumber() :message.NextWinLose;
            if (message.NextWinLoseNum != null && message.hasOwnProperty("NextWinLoseNum"))
                if (typeof message.NextWinLoseNum === "number")
                    object.NextWinLoseNum = options.longs === String ? String(message.NextWinLoseNum) :message.NextWinLoseNum;
                else
                    object.NextWinLoseNum = options.longs === String ? $util.Long.prototype.toString.call(message.NextWinLoseNum) :options.longs === Number ? new $util.LongBits(message.NextWinLoseNum.low >>> 0, message.NextWinLoseNum.high >>> 0).toNumber() :message.NextWinLoseNum;
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                if (typeof message.Finish === "number")
                    object.Finish = options.longs === String ? String(message.Finish) :message.Finish;
                else
                    object.Finish = options.longs === String ? $util.Long.prototype.toString.call(message.Finish) :options.longs === Number ? new $util.LongBits(message.Finish.low >>> 0, message.Finish.high >>> 0).toNumber() :message.Finish;
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                if (typeof message.FinishNextWinLoseNum === "number")
                    object.FinishNextWinLoseNum = options.longs === String ? String(message.FinishNextWinLoseNum) :message.FinishNextWinLoseNum;
                else
                    object.FinishNextWinLoseNum = options.longs === String ? $util.Long.prototype.toString.call(message.FinishNextWinLoseNum) :options.longs === Number ? new $util.LongBits(message.FinishNextWinLoseNum.low >>> 0, message.FinishNextWinLoseNum.high >>> 0).toNumber() :message.FinishNextWinLoseNum;
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                object.NextTable = message.NextTable;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.TodaySumcharge != null && message.hasOwnProperty("TodaySumcharge"))
                if (typeof message.TodaySumcharge === "number")
                    object.TodaySumcharge = options.longs === String ? String(message.TodaySumcharge) :message.TodaySumcharge;
                else
                    object.TodaySumcharge = options.longs === String ? $util.Long.prototype.toString.call(message.TodaySumcharge) :options.longs === Number ? new $util.LongBits(message.TodaySumcharge.low >>> 0, message.TodaySumcharge.high >>> 0).toNumber() :message.TodaySumcharge;
            if (message.TodaySumConvert != null && message.hasOwnProperty("TodaySumConvert"))
                if (typeof message.TodaySumConvert === "number")
                    object.TodaySumConvert = options.longs === String ? String(message.TodaySumConvert) :message.TodaySumConvert;
                else
                    object.TodaySumConvert = options.longs === String ? $util.Long.prototype.toString.call(message.TodaySumConvert) :options.longs === Number ? new $util.LongBits(message.TodaySumConvert.low >>> 0, message.TodaySumConvert.high >>> 0).toNumber() :message.TodaySumConvert;
            if (message.TodayUserWinLose != null && message.hasOwnProperty("TodayUserWinLose"))
                if (typeof message.TodayUserWinLose === "number")
                    object.TodayUserWinLose = options.longs === String ? String(message.TodayUserWinLose) :message.TodayUserWinLose;
                else
                    object.TodayUserWinLose = options.longs === String ? $util.Long.prototype.toString.call(message.TodayUserWinLose) :options.longs === Number ? new $util.LongBits(message.TodayUserWinLose.low >>> 0, message.TodayUserWinLose.high >>> 0).toNumber() :message.TodayUserWinLose;
            return object;
        };

        /**
         * Converts this SuperToolZjhVipUserData to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolZjhVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhVipUserData;
    })();

    GameMsg.SuperToolZjhUpdVipUserData = (function() {

        /**
         * Properties of a SuperToolZjhUpdVipUserData.
         * @memberof GameMsg
         * @interface ISuperToolZjhUpdVipUserData
         * @property {number} UserID SuperToolZjhUpdVipUserData UserID
         * @property {number|Long|null} [Finish] SuperToolZjhUpdVipUserData Finish
         * @property {number|Long|null} [FinishNextWinLoseNum] SuperToolZjhUpdVipUserData FinishNextWinLoseNum
         * @property {number|null} [NextTable] SuperToolZjhUpdVipUserData NextTable
         * @property {number|Long|null} [NextType] SuperToolZjhUpdVipUserData NextType
         */

        /**
         * Constructs a new SuperToolZjhUpdVipUserData.
         * @memberof GameMsg
         * @classdesc Represents a SuperToolZjhUpdVipUserData.
         * @implements ISuperToolZjhUpdVipUserData
         * @constructor
         * @param {GameMsg.ISuperToolZjhUpdVipUserData=} [properties] Properties to set
         */
        function SuperToolZjhUpdVipUserData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolZjhUpdVipUserData UserID.
         * @member {number} UserID
         * @memberof GameMsg.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.UserID = 0;

        /**
         * SuperToolZjhUpdVipUserData Finish.
         * @member {number|Long} Finish
         * @memberof GameMsg.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.Finish = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * SuperToolZjhUpdVipUserData FinishNextWinLoseNum.
         * @member {number|Long} FinishNextWinLoseNum
         * @memberof GameMsg.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.FinishNextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * SuperToolZjhUpdVipUserData NextTable.
         * @member {number} NextTable
         * @memberof GameMsg.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.NextTable = 0;

        /**
         * SuperToolZjhUpdVipUserData NextType.
         * @member {number|Long} NextType
         * @memberof GameMsg.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.NextType = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * Creates a new SuperToolZjhUpdVipUserData instance using the specified properties.
         * @function create
         * @memberof GameMsg.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg.ISuperToolZjhUpdVipUserData=} [properties] Properties to set
         * @returns {GameMsg.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData instance
         */
        SuperToolZjhUpdVipUserData.create = function create(properties) {
            return new SuperToolZjhUpdVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolZjhUpdVipUserData message. Does not implicitly {@link GameMsg.SuperToolZjhUpdVipUserData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg.ISuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhUpdVipUserData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Finish);
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.FinishNextWinLoseNum);
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.NextTable);
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.NextType);
            return writer;
        };

        /**
         * Encodes the specified SuperToolZjhUpdVipUserData message, length delimited. Does not implicitly {@link GameMsg.SuperToolZjhUpdVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg.ISuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhUpdVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhUpdVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.SuperToolZjhUpdVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhUpdVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.SuperToolZjhUpdVipUserData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Finish = reader.int64();
                    break;
                case 3:
                    message.FinishNextWinLoseNum = reader.int64();
                    break;
                case 4:
                    message.NextTable = reader.int32();
                    break;
                case 5:
                    message.NextType = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            return message;
        };

        /**
         * Decodes a SuperToolZjhUpdVipUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.SuperToolZjhUpdVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhUpdVipUserData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolZjhUpdVipUserData message.
         * @function verify
         * @memberof GameMsg.SuperToolZjhUpdVipUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolZjhUpdVipUserData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                if (!$util.isInteger(message.Finish) && !(message.Finish && $util.isInteger(message.Finish.low) && $util.isInteger(message.Finish.high)))
                    return "Finish:integer|Long expected";
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                if (!$util.isInteger(message.FinishNextWinLoseNum) && !(message.FinishNextWinLoseNum && $util.isInteger(message.FinishNextWinLoseNum.low) && $util.isInteger(message.FinishNextWinLoseNum.high)))
                    return "FinishNextWinLoseNum:integer|Long expected";
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                if (!$util.isInteger(message.NextTable))
                    return "NextTable:integer expected";
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                if (!$util.isInteger(message.NextType) && !(message.NextType && $util.isInteger(message.NextType.low) && $util.isInteger(message.NextType.high)))
                    return "NextType:integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolZjhUpdVipUserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.SuperToolZjhUpdVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         */
        SuperToolZjhUpdVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.SuperToolZjhUpdVipUserData)
                return object;
            var message = new $root.GameMsg.SuperToolZjhUpdVipUserData();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Finish != null)
                if ($util.Long)
                    (message.Finish = $util.Long.fromValue(object.Finish)).unsigned = false;
                else if (typeof object.Finish === "string")
                    message.Finish = parseInt(object.Finish, 10);
                else if (typeof object.Finish === "number")
                    message.Finish = object.Finish;
                else if (typeof object.Finish === "object")
                    message.Finish = new $util.LongBits(object.Finish.low >>> 0, object.Finish.high >>> 0).toNumber();
            if (object.FinishNextWinLoseNum != null)
                if ($util.Long)
                    (message.FinishNextWinLoseNum = $util.Long.fromValue(object.FinishNextWinLoseNum)).unsigned = false;
                else if (typeof object.FinishNextWinLoseNum === "string")
                    message.FinishNextWinLoseNum = parseInt(object.FinishNextWinLoseNum, 10);
                else if (typeof object.FinishNextWinLoseNum === "number")
                    message.FinishNextWinLoseNum = object.FinishNextWinLoseNum;
                else if (typeof object.FinishNextWinLoseNum === "object")
                    message.FinishNextWinLoseNum = new $util.LongBits(object.FinishNextWinLoseNum.low >>> 0, object.FinishNextWinLoseNum.high >>> 0).toNumber();
            if (object.NextTable != null)
                message.NextTable = object.NextTable | 0;
            if (object.NextType != null)
                if ($util.Long)
                    (message.NextType = $util.Long.fromValue(object.NextType)).unsigned = false;
                else if (typeof object.NextType === "string")
                    message.NextType = parseInt(object.NextType, 10);
                else if (typeof object.NextType === "number")
                    message.NextType = object.NextType;
                else if (typeof object.NextType === "object")
                    message.NextType = new $util.LongBits(object.NextType.low >>> 0, object.NextType.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SuperToolZjhUpdVipUserData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg.SuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolZjhUpdVipUserData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Finish = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.Finish = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishNextWinLoseNum = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.FinishNextWinLoseNum = options.longs === String ? "0" :0;
                object.NextTable = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.NextType = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.NextType = options.longs === String ? "0" :0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                if (typeof message.Finish === "number")
                    object.Finish = options.longs === String ? String(message.Finish) :message.Finish;
                else
                    object.Finish = options.longs === String ? $util.Long.prototype.toString.call(message.Finish) :options.longs === Number ? new $util.LongBits(message.Finish.low >>> 0, message.Finish.high >>> 0).toNumber() :message.Finish;
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                if (typeof message.FinishNextWinLoseNum === "number")
                    object.FinishNextWinLoseNum = options.longs === String ? String(message.FinishNextWinLoseNum) :message.FinishNextWinLoseNum;
                else
                    object.FinishNextWinLoseNum = options.longs === String ? $util.Long.prototype.toString.call(message.FinishNextWinLoseNum) :options.longs === Number ? new $util.LongBits(message.FinishNextWinLoseNum.low >>> 0, message.FinishNextWinLoseNum.high >>> 0).toNumber() :message.FinishNextWinLoseNum;
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                object.NextTable = message.NextTable;
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                if (typeof message.NextType === "number")
                    object.NextType = options.longs === String ? String(message.NextType) :message.NextType;
                else
                    object.NextType = options.longs === String ? $util.Long.prototype.toString.call(message.NextType) :options.longs === Number ? new $util.LongBits(message.NextType.low >>> 0, message.NextType.high >>> 0).toNumber() :message.NextType;
            return object;
        };

        /**
         * Converts this SuperToolZjhUpdVipUserData to JSON.
         * @function toJSON
         * @memberof GameMsg.SuperToolZjhUpdVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhUpdVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhUpdVipUserData;
    })();

    GameMsg.FishSysPoolData = (function() {

        /**
         * Properties of a FishSysPoolData.
         * @memberof GameMsg
         * @interface IFishSysPoolData
         * @property {number} FlagID FishSysPoolData FlagID
         * @property {number|Long} SumBetMoney FishSysPoolData SumBetMoney
         * @property {number|Long} SumBullet FishSysPoolData SumBullet
         * @property {number|Long} SysSumWinLoss FishSysPoolData SysSumWinLoss
         * @property {number|Long|null} [AfterAdjustSyspoolWinLoss] FishSysPoolData AfterAdjustSyspoolWinLoss
         * @property {number|Long|null} [PoolAmount] FishSysPoolData PoolAmount
         */

        /**
         * Constructs a new FishSysPoolData.
         * @memberof GameMsg
         * @classdesc Represents a FishSysPoolData.
         * @implements IFishSysPoolData
         * @constructor
         * @param {GameMsg.IFishSysPoolData=} [properties] Properties to set
         */
        function FishSysPoolData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishSysPoolData FlagID.
         * @member {number} FlagID
         * @memberof GameMsg.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.FlagID = 0;

        /**
         * FishSysPoolData SumBetMoney.
         * @member {number|Long} SumBetMoney
         * @memberof GameMsg.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SumBetMoney = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * FishSysPoolData SumBullet.
         * @member {number|Long} SumBullet
         * @memberof GameMsg.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SumBullet = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * FishSysPoolData SysSumWinLoss.
         * @member {number|Long} SysSumWinLoss
         * @memberof GameMsg.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SysSumWinLoss = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * FishSysPoolData AfterAdjustSyspoolWinLoss.
         * @member {number|Long} AfterAdjustSyspoolWinLoss
         * @memberof GameMsg.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.AfterAdjustSyspoolWinLoss = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * FishSysPoolData PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof GameMsg.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * Creates a new FishSysPoolData instance using the specified properties.
         * @function create
         * @memberof GameMsg.FishSysPoolData
         * @static
         * @param {GameMsg.IFishSysPoolData=} [properties] Properties to set
         * @returns {GameMsg.FishSysPoolData} FishSysPoolData instance
         */
        FishSysPoolData.create = function create(properties) {
            return new FishSysPoolData(properties);
        };

        /**
         * Encodes the specified FishSysPoolData message. Does not implicitly {@link GameMsg.FishSysPoolData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.FishSysPoolData
         * @static
         * @param {GameMsg.IFishSysPoolData} message FishSysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSysPoolData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SumBetMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.SumBullet);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.SysSumWinLoss);
            if (message.AfterAdjustSyspoolWinLoss != null && message.hasOwnProperty("AfterAdjustSyspoolWinLoss"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.AfterAdjustSyspoolWinLoss);
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.PoolAmount);
            return writer;
        };

        /**
         * Encodes the specified FishSysPoolData message, length delimited. Does not implicitly {@link GameMsg.FishSysPoolData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.FishSysPoolData
         * @static
         * @param {GameMsg.IFishSysPoolData} message FishSysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSysPoolData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishSysPoolData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.FishSysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.FishSysPoolData} FishSysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSysPoolData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.FishSysPoolData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FlagID = reader.int32();
                    break;
                case 2:
                    message.SumBetMoney = reader.int64();
                    break;
                case 3:
                    message.SumBullet = reader.int64();
                    break;
                case 4:
                    message.SysSumWinLoss = reader.int64();
                    break;
                case 5:
                    message.AfterAdjustSyspoolWinLoss = reader.int64();
                    break;
                case 6:
                    message.PoolAmount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance:message });
            if (!message.hasOwnProperty("SumBetMoney"))
                throw $util.ProtocolError("missing required 'SumBetMoney'", { instance:message });
            if (!message.hasOwnProperty("SumBullet"))
                throw $util.ProtocolError("missing required 'SumBullet'", { instance:message });
            if (!message.hasOwnProperty("SysSumWinLoss"))
                throw $util.ProtocolError("missing required 'SysSumWinLoss'", { instance:message });
            return message;
        };

        /**
         * Decodes a FishSysPoolData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.FishSysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.FishSysPoolData} FishSysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSysPoolData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishSysPoolData message.
         * @function verify
         * @memberof GameMsg.FishSysPoolData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishSysPoolData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID:integer expected";
            if (!$util.isInteger(message.SumBetMoney) && !(message.SumBetMoney && $util.isInteger(message.SumBetMoney.low) && $util.isInteger(message.SumBetMoney.high)))
                return "SumBetMoney:integer|Long expected";
            if (!$util.isInteger(message.SumBullet) && !(message.SumBullet && $util.isInteger(message.SumBullet.low) && $util.isInteger(message.SumBullet.high)))
                return "SumBullet:integer|Long expected";
            if (!$util.isInteger(message.SysSumWinLoss) && !(message.SysSumWinLoss && $util.isInteger(message.SysSumWinLoss.low) && $util.isInteger(message.SysSumWinLoss.high)))
                return "SysSumWinLoss:integer|Long expected";
            if (message.AfterAdjustSyspoolWinLoss != null && message.hasOwnProperty("AfterAdjustSyspoolWinLoss"))
                if (!$util.isInteger(message.AfterAdjustSyspoolWinLoss) && !(message.AfterAdjustSyspoolWinLoss && $util.isInteger(message.AfterAdjustSyspoolWinLoss.low) && $util.isInteger(message.AfterAdjustSyspoolWinLoss.high)))
                    return "AfterAdjustSyspoolWinLoss:integer|Long expected";
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (!$util.isInteger(message.PoolAmount) && !(message.PoolAmount && $util.isInteger(message.PoolAmount.low) && $util.isInteger(message.PoolAmount.high)))
                    return "PoolAmount:integer|Long expected";
            return null;
        };

        /**
         * Creates a FishSysPoolData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.FishSysPoolData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.FishSysPoolData} FishSysPoolData
         */
        FishSysPoolData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.FishSysPoolData)
                return object;
            var message = new $root.GameMsg.FishSysPoolData();
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.SumBetMoney != null)
                if ($util.Long)
                    (message.SumBetMoney = $util.Long.fromValue(object.SumBetMoney)).unsigned = false;
                else if (typeof object.SumBetMoney === "string")
                    message.SumBetMoney = parseInt(object.SumBetMoney, 10);
                else if (typeof object.SumBetMoney === "number")
                    message.SumBetMoney = object.SumBetMoney;
                else if (typeof object.SumBetMoney === "object")
                    message.SumBetMoney = new $util.LongBits(object.SumBetMoney.low >>> 0, object.SumBetMoney.high >>> 0).toNumber();
            if (object.SumBullet != null)
                if ($util.Long)
                    (message.SumBullet = $util.Long.fromValue(object.SumBullet)).unsigned = false;
                else if (typeof object.SumBullet === "string")
                    message.SumBullet = parseInt(object.SumBullet, 10);
                else if (typeof object.SumBullet === "number")
                    message.SumBullet = object.SumBullet;
                else if (typeof object.SumBullet === "object")
                    message.SumBullet = new $util.LongBits(object.SumBullet.low >>> 0, object.SumBullet.high >>> 0).toNumber();
            if (object.SysSumWinLoss != null)
                if ($util.Long)
                    (message.SysSumWinLoss = $util.Long.fromValue(object.SysSumWinLoss)).unsigned = false;
                else if (typeof object.SysSumWinLoss === "string")
                    message.SysSumWinLoss = parseInt(object.SysSumWinLoss, 10);
                else if (typeof object.SysSumWinLoss === "number")
                    message.SysSumWinLoss = object.SysSumWinLoss;
                else if (typeof object.SysSumWinLoss === "object")
                    message.SysSumWinLoss = new $util.LongBits(object.SysSumWinLoss.low >>> 0, object.SysSumWinLoss.high >>> 0).toNumber();
            if (object.AfterAdjustSyspoolWinLoss != null)
                if ($util.Long)
                    (message.AfterAdjustSyspoolWinLoss = $util.Long.fromValue(object.AfterAdjustSyspoolWinLoss)).unsigned = false;
                else if (typeof object.AfterAdjustSyspoolWinLoss === "string")
                    message.AfterAdjustSyspoolWinLoss = parseInt(object.AfterAdjustSyspoolWinLoss, 10);
                else if (typeof object.AfterAdjustSyspoolWinLoss === "number")
                    message.AfterAdjustSyspoolWinLoss = object.AfterAdjustSyspoolWinLoss;
                else if (typeof object.AfterAdjustSyspoolWinLoss === "object")
                    message.AfterAdjustSyspoolWinLoss = new $util.LongBits(object.AfterAdjustSyspoolWinLoss.low >>> 0, object.AfterAdjustSyspoolWinLoss.high >>> 0).toNumber();
            if (object.PoolAmount != null)
                if ($util.Long)
                    (message.PoolAmount = $util.Long.fromValue(object.PoolAmount)).unsigned = false;
                else if (typeof object.PoolAmount === "string")
                    message.PoolAmount = parseInt(object.PoolAmount, 10);
                else if (typeof object.PoolAmount === "number")
                    message.PoolAmount = object.PoolAmount;
                else if (typeof object.PoolAmount === "object")
                    message.PoolAmount = new $util.LongBits(object.PoolAmount.low >>> 0, object.PoolAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FishSysPoolData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.FishSysPoolData
         * @static
         * @param {GameMsg.FishSysPoolData} message FishSysPoolData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishSysPoolData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.FlagID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumBetMoney = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.SumBetMoney = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumBullet = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.SumBullet = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SysSumWinLoss = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.SysSumWinLoss = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AfterAdjustSyspoolWinLoss = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.AfterAdjustSyspoolWinLoss = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PoolAmount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.PoolAmount = options.longs === String ? "0" :0;
            }
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.SumBetMoney != null && message.hasOwnProperty("SumBetMoney"))
                if (typeof message.SumBetMoney === "number")
                    object.SumBetMoney = options.longs === String ? String(message.SumBetMoney) :message.SumBetMoney;
                else
                    object.SumBetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.SumBetMoney) :options.longs === Number ? new $util.LongBits(message.SumBetMoney.low >>> 0, message.SumBetMoney.high >>> 0).toNumber() :message.SumBetMoney;
            if (message.SumBullet != null && message.hasOwnProperty("SumBullet"))
                if (typeof message.SumBullet === "number")
                    object.SumBullet = options.longs === String ? String(message.SumBullet) :message.SumBullet;
                else
                    object.SumBullet = options.longs === String ? $util.Long.prototype.toString.call(message.SumBullet) :options.longs === Number ? new $util.LongBits(message.SumBullet.low >>> 0, message.SumBullet.high >>> 0).toNumber() :message.SumBullet;
            if (message.SysSumWinLoss != null && message.hasOwnProperty("SysSumWinLoss"))
                if (typeof message.SysSumWinLoss === "number")
                    object.SysSumWinLoss = options.longs === String ? String(message.SysSumWinLoss) :message.SysSumWinLoss;
                else
                    object.SysSumWinLoss = options.longs === String ? $util.Long.prototype.toString.call(message.SysSumWinLoss) :options.longs === Number ? new $util.LongBits(message.SysSumWinLoss.low >>> 0, message.SysSumWinLoss.high >>> 0).toNumber() :message.SysSumWinLoss;
            if (message.AfterAdjustSyspoolWinLoss != null && message.hasOwnProperty("AfterAdjustSyspoolWinLoss"))
                if (typeof message.AfterAdjustSyspoolWinLoss === "number")
                    object.AfterAdjustSyspoolWinLoss = options.longs === String ? String(message.AfterAdjustSyspoolWinLoss) :message.AfterAdjustSyspoolWinLoss;
                else
                    object.AfterAdjustSyspoolWinLoss = options.longs === String ? $util.Long.prototype.toString.call(message.AfterAdjustSyspoolWinLoss) :options.longs === Number ? new $util.LongBits(message.AfterAdjustSyspoolWinLoss.low >>> 0, message.AfterAdjustSyspoolWinLoss.high >>> 0).toNumber() :message.AfterAdjustSyspoolWinLoss;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount = options.longs === String ? String(message.PoolAmount) :message.PoolAmount;
                else
                    object.PoolAmount = options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) :options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() :message.PoolAmount;
            return object;
        };

        /**
         * Converts this FishSysPoolData to JSON.
         * @function toJSON
         * @memberof GameMsg.FishSysPoolData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishSysPoolData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishSysPoolData;
    })();

    GameMsg.FishPlayerPoolDetail = (function() {

        /**
         * Properties of a FishPlayerPoolDetail.
         * @memberof GameMsg
         * @interface IFishPlayerPoolDetail
         * @property {number|null} [FlagID] FishPlayerPoolDetail FlagID
         * @property {Array.<GameMsg.IFishPlayerPoolDetailList>|null} [FishRewardList] FishPlayerPoolDetail FishRewardList
         */

        /**
         * Constructs a new FishPlayerPoolDetail.
         * @memberof GameMsg
         * @classdesc Represents a FishPlayerPoolDetail.
         * @implements IFishPlayerPoolDetail
         * @constructor
         * @param {GameMsg.IFishPlayerPoolDetail=} [properties] Properties to set
         */
        function FishPlayerPoolDetail(properties) {
            this.FishRewardList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishPlayerPoolDetail FlagID.
         * @member {number} FlagID
         * @memberof GameMsg.FishPlayerPoolDetail
         * @instance
         */
        FishPlayerPoolDetail.prototype.FlagID = 0;

        /**
         * FishPlayerPoolDetail FishRewardList.
         * @member {Array.<GameMsg.IFishPlayerPoolDetailList>} FishRewardList
         * @memberof GameMsg.FishPlayerPoolDetail
         * @instance
         */
        FishPlayerPoolDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new FishPlayerPoolDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg.FishPlayerPoolDetail
         * @static
         * @param {GameMsg.IFishPlayerPoolDetail=} [properties] Properties to set
         * @returns {GameMsg.FishPlayerPoolDetail} FishPlayerPoolDetail instance
         */
        FishPlayerPoolDetail.create = function create(properties) {
            return new FishPlayerPoolDetail(properties);
        };

        /**
         * Encodes the specified FishPlayerPoolDetail message. Does not implicitly {@link GameMsg.FishPlayerPoolDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.FishPlayerPoolDetail
         * @static
         * @param {GameMsg.IFishPlayerPoolDetail} message FishPlayerPoolDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i = 0; i < message.FishRewardList.length; ++i)
                    $root.GameMsg.FishPlayerPoolDetailList.encode(message.FishRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FishPlayerPoolDetail message, length delimited. Does not implicitly {@link GameMsg.FishPlayerPoolDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.FishPlayerPoolDetail
         * @static
         * @param {GameMsg.IFishPlayerPoolDetail} message FishPlayerPoolDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishPlayerPoolDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.FishPlayerPoolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.FishPlayerPoolDetail} FishPlayerPoolDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.FishPlayerPoolDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FlagID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.GameMsg.FishPlayerPoolDetailList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FishPlayerPoolDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.FishPlayerPoolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.FishPlayerPoolDetail} FishPlayerPoolDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishPlayerPoolDetail message.
         * @function verify
         * @memberof GameMsg.FishPlayerPoolDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishPlayerPoolDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                if (!$util.isInteger(message.FlagID))
                    return "FlagID:integer expected";
            if (message.FishRewardList != null && message.hasOwnProperty("FishRewardList")) {
                if (!Array.isArray(message.FishRewardList))
                    return "FishRewardList:array expected";
                for (var i = 0; i < message.FishRewardList.length; ++i) {
                    var error = $root.GameMsg.FishPlayerPoolDetailList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FishPlayerPoolDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.FishPlayerPoolDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.FishPlayerPoolDetail} FishPlayerPoolDetail
         */
        FishPlayerPoolDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.FishPlayerPoolDetail)
                return object;
            var message = new $root.GameMsg.FishPlayerPoolDetail();
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".GameMsg.FishPlayerPoolDetail.FishRewardList:array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".GameMsg.FishPlayerPoolDetail.FishRewardList:object expected");
                    message.FishRewardList[i] = $root.GameMsg.FishPlayerPoolDetailList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FishPlayerPoolDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.FishPlayerPoolDetail
         * @static
         * @param {GameMsg.FishPlayerPoolDetail} message FishPlayerPoolDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishPlayerPoolDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.FishRewardList = [];
            if (options.defaults)
                object.FlagID = 0;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.FishRewardList && message.FishRewardList.length) {
                object.FishRewardList = [];
                for (var j = 0; j < message.FishRewardList.length; ++j)
                    object.FishRewardList[j] = $root.GameMsg.FishPlayerPoolDetailList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this FishPlayerPoolDetail to JSON.
         * @function toJSON
         * @memberof GameMsg.FishPlayerPoolDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishPlayerPoolDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishPlayerPoolDetail;
    })();

    GameMsg.FishPlayerPoolDetailList = (function() {

        /**
         * Properties of a FishPlayerPoolDetailList.
         * @memberof GameMsg
         * @interface IFishPlayerPoolDetailList
         * @property {number} UserID FishPlayerPoolDetailList UserID
         * @property {number|Long} HitMoney FishPlayerPoolDetailList HitMoney
         * @property {number|Long} SpendMoney FishPlayerPoolDetailList SpendMoney
         */

        /**
         * Constructs a new FishPlayerPoolDetailList.
         * @memberof GameMsg
         * @classdesc Represents a FishPlayerPoolDetailList.
         * @implements IFishPlayerPoolDetailList
         * @constructor
         * @param {GameMsg.IFishPlayerPoolDetailList=} [properties] Properties to set
         */
        function FishPlayerPoolDetailList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishPlayerPoolDetailList UserID.
         * @member {number} UserID
         * @memberof GameMsg.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.UserID = 0;

        /**
         * FishPlayerPoolDetailList HitMoney.
         * @member {number|Long} HitMoney
         * @memberof GameMsg.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.HitMoney = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * FishPlayerPoolDetailList SpendMoney.
         * @member {number|Long} SpendMoney
         * @memberof GameMsg.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.SpendMoney = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * Creates a new FishPlayerPoolDetailList instance using the specified properties.
         * @function create
         * @memberof GameMsg.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg.IFishPlayerPoolDetailList=} [properties] Properties to set
         * @returns {GameMsg.FishPlayerPoolDetailList} FishPlayerPoolDetailList instance
         */
        FishPlayerPoolDetailList.create = function create(properties) {
            return new FishPlayerPoolDetailList(properties);
        };

        /**
         * Encodes the specified FishPlayerPoolDetailList message. Does not implicitly {@link GameMsg.FishPlayerPoolDetailList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg.IFishPlayerPoolDetailList} message FishPlayerPoolDetailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetailList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.HitMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.SpendMoney);
            return writer;
        };

        /**
         * Encodes the specified FishPlayerPoolDetailList message, length delimited. Does not implicitly {@link GameMsg.FishPlayerPoolDetailList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg.IFishPlayerPoolDetailList} message FishPlayerPoolDetailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetailList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishPlayerPoolDetailList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.FishPlayerPoolDetailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetailList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.FishPlayerPoolDetailList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.HitMoney = reader.int64();
                    break;
                case 3:
                    message.SpendMoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            if (!message.hasOwnProperty("HitMoney"))
                throw $util.ProtocolError("missing required 'HitMoney'", { instance:message });
            if (!message.hasOwnProperty("SpendMoney"))
                throw $util.ProtocolError("missing required 'SpendMoney'", { instance:message });
            return message;
        };

        /**
         * Decodes a FishPlayerPoolDetailList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.FishPlayerPoolDetailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetailList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishPlayerPoolDetailList message.
         * @function verify
         * @memberof GameMsg.FishPlayerPoolDetailList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishPlayerPoolDetailList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (!$util.isInteger(message.HitMoney) && !(message.HitMoney && $util.isInteger(message.HitMoney.low) && $util.isInteger(message.HitMoney.high)))
                return "HitMoney:integer|Long expected";
            if (!$util.isInteger(message.SpendMoney) && !(message.SpendMoney && $util.isInteger(message.SpendMoney.low) && $util.isInteger(message.SpendMoney.high)))
                return "SpendMoney:integer|Long expected";
            return null;
        };

        /**
         * Creates a FishPlayerPoolDetailList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.FishPlayerPoolDetailList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         */
        FishPlayerPoolDetailList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.FishPlayerPoolDetailList)
                return object;
            var message = new $root.GameMsg.FishPlayerPoolDetailList();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.HitMoney != null)
                if ($util.Long)
                    (message.HitMoney = $util.Long.fromValue(object.HitMoney)).unsigned = false;
                else if (typeof object.HitMoney === "string")
                    message.HitMoney = parseInt(object.HitMoney, 10);
                else if (typeof object.HitMoney === "number")
                    message.HitMoney = object.HitMoney;
                else if (typeof object.HitMoney === "object")
                    message.HitMoney = new $util.LongBits(object.HitMoney.low >>> 0, object.HitMoney.high >>> 0).toNumber();
            if (object.SpendMoney != null)
                if ($util.Long)
                    (message.SpendMoney = $util.Long.fromValue(object.SpendMoney)).unsigned = false;
                else if (typeof object.SpendMoney === "string")
                    message.SpendMoney = parseInt(object.SpendMoney, 10);
                else if (typeof object.SpendMoney === "number")
                    message.SpendMoney = object.SpendMoney;
                else if (typeof object.SpendMoney === "object")
                    message.SpendMoney = new $util.LongBits(object.SpendMoney.low >>> 0, object.SpendMoney.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FishPlayerPoolDetailList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg.FishPlayerPoolDetailList} message FishPlayerPoolDetailList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishPlayerPoolDetailList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.HitMoney = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.HitMoney = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SpendMoney = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.SpendMoney = options.longs === String ? "0" :0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.HitMoney != null && message.hasOwnProperty("HitMoney"))
                if (typeof message.HitMoney === "number")
                    object.HitMoney = options.longs === String ? String(message.HitMoney) :message.HitMoney;
                else
                    object.HitMoney = options.longs === String ? $util.Long.prototype.toString.call(message.HitMoney) :options.longs === Number ? new $util.LongBits(message.HitMoney.low >>> 0, message.HitMoney.high >>> 0).toNumber() :message.HitMoney;
            if (message.SpendMoney != null && message.hasOwnProperty("SpendMoney"))
                if (typeof message.SpendMoney === "number")
                    object.SpendMoney = options.longs === String ? String(message.SpendMoney) :message.SpendMoney;
                else
                    object.SpendMoney = options.longs === String ? $util.Long.prototype.toString.call(message.SpendMoney) :options.longs === Number ? new $util.LongBits(message.SpendMoney.low >>> 0, message.SpendMoney.high >>> 0).toNumber() :message.SpendMoney;
            return object;
        };

        /**
         * Converts this FishPlayerPoolDetailList to JSON.
         * @function toJSON
         * @memberof GameMsg.FishPlayerPoolDetailList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishPlayerPoolDetailList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishPlayerPoolDetailList;
    })();

    GameMsg.FindFishBeginnerOfferByUserID = (function() {

        /**
         * Properties of a FindFishBeginnerOfferByUserID.
         * @memberof GameMsg
         * @interface IFindFishBeginnerOfferByUserID
         * @property {number} UserID FindFishBeginnerOfferByUserID UserID
         * @property {number|null} [NewPlayerAdjustSyspool] FindFishBeginnerOfferByUserID NewPlayerAdjustSyspool
         */

        /**
         * Constructs a new FindFishBeginnerOfferByUserID.
         * @memberof GameMsg
         * @classdesc Represents a FindFishBeginnerOfferByUserID.
         * @implements IFindFishBeginnerOfferByUserID
         * @constructor
         * @param {GameMsg.IFindFishBeginnerOfferByUserID=} [properties] Properties to set
         */
        function FindFishBeginnerOfferByUserID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindFishBeginnerOfferByUserID UserID.
         * @member {number} UserID
         * @memberof GameMsg.FindFishBeginnerOfferByUserID
         * @instance
         */
        FindFishBeginnerOfferByUserID.prototype.UserID = 0;

        /**
         * FindFishBeginnerOfferByUserID NewPlayerAdjustSyspool.
         * @member {number} NewPlayerAdjustSyspool
         * @memberof GameMsg.FindFishBeginnerOfferByUserID
         * @instance
         */
        FindFishBeginnerOfferByUserID.prototype.NewPlayerAdjustSyspool = 0;

        /**
         * Creates a new FindFishBeginnerOfferByUserID instance using the specified properties.
         * @function create
         * @memberof GameMsg.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg.IFindFishBeginnerOfferByUserID=} [properties] Properties to set
         * @returns {GameMsg.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID instance
         */
        FindFishBeginnerOfferByUserID.create = function create(properties) {
            return new FindFishBeginnerOfferByUserID(properties);
        };

        /**
         * Encodes the specified FindFishBeginnerOfferByUserID message. Does not implicitly {@link GameMsg.FindFishBeginnerOfferByUserID.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg.IFindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindFishBeginnerOfferByUserID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.NewPlayerAdjustSyspool);
            return writer;
        };

        /**
         * Encodes the specified FindFishBeginnerOfferByUserID message, length delimited. Does not implicitly {@link GameMsg.FindFishBeginnerOfferByUserID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg.IFindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindFishBeginnerOfferByUserID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindFishBeginnerOfferByUserID message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.FindFishBeginnerOfferByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindFishBeginnerOfferByUserID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.FindFishBeginnerOfferByUserID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.NewPlayerAdjustSyspool = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            return message;
        };

        /**
         * Decodes a FindFishBeginnerOfferByUserID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.FindFishBeginnerOfferByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindFishBeginnerOfferByUserID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindFishBeginnerOfferByUserID message.
         * @function verify
         * @memberof GameMsg.FindFishBeginnerOfferByUserID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindFishBeginnerOfferByUserID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                if (!$util.isInteger(message.NewPlayerAdjustSyspool))
                    return "NewPlayerAdjustSyspool:integer expected";
            return null;
        };

        /**
         * Creates a FindFishBeginnerOfferByUserID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.FindFishBeginnerOfferByUserID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         */
        FindFishBeginnerOfferByUserID.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.FindFishBeginnerOfferByUserID)
                return object;
            var message = new $root.GameMsg.FindFishBeginnerOfferByUserID();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.NewPlayerAdjustSyspool != null)
                message.NewPlayerAdjustSyspool = object.NewPlayerAdjustSyspool | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindFishBeginnerOfferByUserID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg.FindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindFishBeginnerOfferByUserID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.NewPlayerAdjustSyspool = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                object.NewPlayerAdjustSyspool = message.NewPlayerAdjustSyspool;
            return object;
        };

        /**
         * Converts this FindFishBeginnerOfferByUserID to JSON.
         * @function toJSON
         * @memberof GameMsg.FindFishBeginnerOfferByUserID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindFishBeginnerOfferByUserID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FindFishBeginnerOfferByUserID;
    })();

    GameMsg.FishBeginnerOfferDetail = (function() {

        /**
         * Properties of a FishBeginnerOfferDetail.
         * @memberof GameMsg
         * @interface IFishBeginnerOfferDetail
         * @property {Array.<GameMsg.IFishBeginnerOffer>|null} [NewPlayerList] FishBeginnerOfferDetail NewPlayerList
         * @property {number|null} [NewPlayerAdjustSyspool] FishBeginnerOfferDetail NewPlayerAdjustSyspool
         */

        /**
         * Constructs a new FishBeginnerOfferDetail.
         * @memberof GameMsg
         * @classdesc Represents a FishBeginnerOfferDetail.
         * @implements IFishBeginnerOfferDetail
         * @constructor
         * @param {GameMsg.IFishBeginnerOfferDetail=} [properties] Properties to set
         */
        function FishBeginnerOfferDetail(properties) {
            this.NewPlayerList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishBeginnerOfferDetail NewPlayerList.
         * @member {Array.<GameMsg.IFishBeginnerOffer>} NewPlayerList
         * @memberof GameMsg.FishBeginnerOfferDetail
         * @instance
         */
        FishBeginnerOfferDetail.prototype.NewPlayerList = $util.emptyArray;

        /**
         * FishBeginnerOfferDetail NewPlayerAdjustSyspool.
         * @member {number} NewPlayerAdjustSyspool
         * @memberof GameMsg.FishBeginnerOfferDetail
         * @instance
         */
        FishBeginnerOfferDetail.prototype.NewPlayerAdjustSyspool = 0;

        /**
         * Creates a new FishBeginnerOfferDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg.IFishBeginnerOfferDetail=} [properties] Properties to set
         * @returns {GameMsg.FishBeginnerOfferDetail} FishBeginnerOfferDetail instance
         */
        FishBeginnerOfferDetail.create = function create(properties) {
            return new FishBeginnerOfferDetail(properties);
        };

        /**
         * Encodes the specified FishBeginnerOfferDetail message. Does not implicitly {@link GameMsg.FishBeginnerOfferDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg.IFishBeginnerOfferDetail} message FishBeginnerOfferDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOfferDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NewPlayerList != null && message.NewPlayerList.length)
                for (var i = 0; i < message.NewPlayerList.length; ++i)
                    $root.GameMsg.FishBeginnerOffer.encode(message.NewPlayerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.NewPlayerAdjustSyspool);
            return writer;
        };

        /**
         * Encodes the specified FishBeginnerOfferDetail message, length delimited. Does not implicitly {@link GameMsg.FishBeginnerOfferDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg.IFishBeginnerOfferDetail} message FishBeginnerOfferDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOfferDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishBeginnerOfferDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.FishBeginnerOfferDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOfferDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.FishBeginnerOfferDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.NewPlayerList && message.NewPlayerList.length))
                        message.NewPlayerList = [];
                    message.NewPlayerList.push($root.GameMsg.FishBeginnerOffer.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.NewPlayerAdjustSyspool = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FishBeginnerOfferDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.FishBeginnerOfferDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOfferDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishBeginnerOfferDetail message.
         * @function verify
         * @memberof GameMsg.FishBeginnerOfferDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishBeginnerOfferDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.NewPlayerList != null && message.hasOwnProperty("NewPlayerList")) {
                if (!Array.isArray(message.NewPlayerList))
                    return "NewPlayerList:array expected";
                for (var i = 0; i < message.NewPlayerList.length; ++i) {
                    var error = $root.GameMsg.FishBeginnerOffer.verify(message.NewPlayerList[i]);
                    if (error)
                        return "NewPlayerList." + error;
                }
            }
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                if (!$util.isInteger(message.NewPlayerAdjustSyspool))
                    return "NewPlayerAdjustSyspool:integer expected";
            return null;
        };

        /**
         * Creates a FishBeginnerOfferDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.FishBeginnerOfferDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         */
        FishBeginnerOfferDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.FishBeginnerOfferDetail)
                return object;
            var message = new $root.GameMsg.FishBeginnerOfferDetail();
            if (object.NewPlayerList) {
                if (!Array.isArray(object.NewPlayerList))
                    throw TypeError(".GameMsg.FishBeginnerOfferDetail.NewPlayerList:array expected");
                message.NewPlayerList = [];
                for (var i = 0; i < object.NewPlayerList.length; ++i) {
                    if (typeof object.NewPlayerList[i] !== "object")
                        throw TypeError(".GameMsg.FishBeginnerOfferDetail.NewPlayerList:object expected");
                    message.NewPlayerList[i] = $root.GameMsg.FishBeginnerOffer.fromObject(object.NewPlayerList[i]);
                }
            }
            if (object.NewPlayerAdjustSyspool != null)
                message.NewPlayerAdjustSyspool = object.NewPlayerAdjustSyspool | 0;
            return message;
        };

        /**
         * Creates a plain object from a FishBeginnerOfferDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg.FishBeginnerOfferDetail} message FishBeginnerOfferDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishBeginnerOfferDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.NewPlayerList = [];
            if (options.defaults)
                object.NewPlayerAdjustSyspool = 0;
            if (message.NewPlayerList && message.NewPlayerList.length) {
                object.NewPlayerList = [];
                for (var j = 0; j < message.NewPlayerList.length; ++j)
                    object.NewPlayerList[j] = $root.GameMsg.FishBeginnerOffer.toObject(message.NewPlayerList[j], options);
            }
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                object.NewPlayerAdjustSyspool = message.NewPlayerAdjustSyspool;
            return object;
        };

        /**
         * Converts this FishBeginnerOfferDetail to JSON.
         * @function toJSON
         * @memberof GameMsg.FishBeginnerOfferDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishBeginnerOfferDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishBeginnerOfferDetail;
    })();

    GameMsg.FishBeginnerOffer = (function() {

        /**
         * Properties of a FishBeginnerOffer.
         * @memberof GameMsg
         * @interface IFishBeginnerOffer
         * @property {number} UserID FishBeginnerOffer UserID
         * @property {number} Bullet FishBeginnerOffer Bullet
         * @property {number} Score FishBeginnerOffer Score
         * @property {number} Status FishBeginnerOffer Status
         */

        /**
         * Constructs a new FishBeginnerOffer.
         * @memberof GameMsg
         * @classdesc Represents a FishBeginnerOffer.
         * @implements IFishBeginnerOffer
         * @constructor
         * @param {GameMsg.IFishBeginnerOffer=} [properties] Properties to set
         */
        function FishBeginnerOffer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishBeginnerOffer UserID.
         * @member {number} UserID
         * @memberof GameMsg.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.UserID = 0;

        /**
         * FishBeginnerOffer Bullet.
         * @member {number} Bullet
         * @memberof GameMsg.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Bullet = 0;

        /**
         * FishBeginnerOffer Score.
         * @member {number} Score
         * @memberof GameMsg.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Score = 0;

        /**
         * FishBeginnerOffer Status.
         * @member {number} Status
         * @memberof GameMsg.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Status = 0;

        /**
         * Creates a new FishBeginnerOffer instance using the specified properties.
         * @function create
         * @memberof GameMsg.FishBeginnerOffer
         * @static
         * @param {GameMsg.IFishBeginnerOffer=} [properties] Properties to set
         * @returns {GameMsg.FishBeginnerOffer} FishBeginnerOffer instance
         */
        FishBeginnerOffer.create = function create(properties) {
            return new FishBeginnerOffer(properties);
        };

        /**
         * Encodes the specified FishBeginnerOffer message. Does not implicitly {@link GameMsg.FishBeginnerOffer.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.FishBeginnerOffer
         * @static
         * @param {GameMsg.IFishBeginnerOffer} message FishBeginnerOffer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOffer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Bullet);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Score);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified FishBeginnerOffer message, length delimited. Does not implicitly {@link GameMsg.FishBeginnerOffer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.FishBeginnerOffer
         * @static
         * @param {GameMsg.IFishBeginnerOffer} message FishBeginnerOffer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOffer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishBeginnerOffer message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.FishBeginnerOffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.FishBeginnerOffer} FishBeginnerOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOffer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.FishBeginnerOffer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Bullet = reader.int32();
                    break;
                case 3:
                    message.Score = reader.int32();
                    break;
                case 4:
                    message.Status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            if (!message.hasOwnProperty("Bullet"))
                throw $util.ProtocolError("missing required 'Bullet'", { instance:message });
            if (!message.hasOwnProperty("Score"))
                throw $util.ProtocolError("missing required 'Score'", { instance:message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance:message });
            return message;
        };

        /**
         * Decodes a FishBeginnerOffer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.FishBeginnerOffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.FishBeginnerOffer} FishBeginnerOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOffer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishBeginnerOffer message.
         * @function verify
         * @memberof GameMsg.FishBeginnerOffer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishBeginnerOffer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (!$util.isInteger(message.Bullet))
                return "Bullet:integer expected";
            if (!$util.isInteger(message.Score))
                return "Score:integer expected";
            if (!$util.isInteger(message.Status))
                return "Status:integer expected";
            return null;
        };

        /**
         * Creates a FishBeginnerOffer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.FishBeginnerOffer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.FishBeginnerOffer} FishBeginnerOffer
         */
        FishBeginnerOffer.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.FishBeginnerOffer)
                return object;
            var message = new $root.GameMsg.FishBeginnerOffer();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Bullet != null)
                message.Bullet = object.Bullet | 0;
            if (object.Score != null)
                message.Score = object.Score | 0;
            if (object.Status != null)
                message.Status = object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from a FishBeginnerOffer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.FishBeginnerOffer
         * @static
         * @param {GameMsg.FishBeginnerOffer} message FishBeginnerOffer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishBeginnerOffer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.Bullet = 0;
                object.Score = 0;
                object.Status = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Bullet != null && message.hasOwnProperty("Bullet"))
                object.Bullet = message.Bullet;
            if (message.Score != null && message.hasOwnProperty("Score"))
                object.Score = message.Score;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this FishBeginnerOffer to JSON.
         * @function toJSON
         * @memberof GameMsg.FishBeginnerOffer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishBeginnerOffer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishBeginnerOffer;
    })();

    GameMsg.Cd21SysPoolData = (function() {

        /**
         * Properties of a Cd21SysPoolData.
         * @memberof GameMsg
         * @interface ICd21SysPoolData
         * @property {number} FlagID Cd21SysPoolData FlagID
         * @property {number|Long} SumBetMoney Cd21SysPoolData SumBetMoney
         * @property {number|Long} SumBetCount Cd21SysPoolData SumBetCount
         * @property {number|Long} PoolAmount Cd21SysPoolData PoolAmount
         */

        /**
         * Constructs a new Cd21SysPoolData.
         * @memberof GameMsg
         * @classdesc Represents a Cd21SysPoolData.
         * @implements ICd21SysPoolData
         * @constructor
         * @param {GameMsg.ICd21SysPoolData=} [properties] Properties to set
         */
        function Cd21SysPoolData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cd21SysPoolData FlagID.
         * @member {number} FlagID
         * @memberof GameMsg.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.FlagID = 0;

        /**
         * Cd21SysPoolData SumBetMoney.
         * @member {number|Long} SumBetMoney
         * @memberof GameMsg.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.SumBetMoney = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * Cd21SysPoolData SumBetCount.
         * @member {number|Long} SumBetCount
         * @memberof GameMsg.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.SumBetCount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * Cd21SysPoolData PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof GameMsg.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * Creates a new Cd21SysPoolData instance using the specified properties.
         * @function create
         * @memberof GameMsg.Cd21SysPoolData
         * @static
         * @param {GameMsg.ICd21SysPoolData=} [properties] Properties to set
         * @returns {GameMsg.Cd21SysPoolData} Cd21SysPoolData instance
         */
        Cd21SysPoolData.create = function create(properties) {
            return new Cd21SysPoolData(properties);
        };

        /**
         * Encodes the specified Cd21SysPoolData message. Does not implicitly {@link GameMsg.Cd21SysPoolData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.Cd21SysPoolData
         * @static
         * @param {GameMsg.ICd21SysPoolData} message Cd21SysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cd21SysPoolData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SumBetMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.SumBetCount);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.PoolAmount);
            return writer;
        };

        /**
         * Encodes the specified Cd21SysPoolData message, length delimited. Does not implicitly {@link GameMsg.Cd21SysPoolData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.Cd21SysPoolData
         * @static
         * @param {GameMsg.ICd21SysPoolData} message Cd21SysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cd21SysPoolData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Cd21SysPoolData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.Cd21SysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.Cd21SysPoolData} Cd21SysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cd21SysPoolData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.Cd21SysPoolData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FlagID = reader.int32();
                    break;
                case 2:
                    message.SumBetMoney = reader.int64();
                    break;
                case 3:
                    message.SumBetCount = reader.int64();
                    break;
                case 4:
                    message.PoolAmount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance:message });
            if (!message.hasOwnProperty("SumBetMoney"))
                throw $util.ProtocolError("missing required 'SumBetMoney'", { instance:message });
            if (!message.hasOwnProperty("SumBetCount"))
                throw $util.ProtocolError("missing required 'SumBetCount'", { instance:message });
            if (!message.hasOwnProperty("PoolAmount"))
                throw $util.ProtocolError("missing required 'PoolAmount'", { instance:message });
            return message;
        };

        /**
         * Decodes a Cd21SysPoolData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.Cd21SysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.Cd21SysPoolData} Cd21SysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cd21SysPoolData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Cd21SysPoolData message.
         * @function verify
         * @memberof GameMsg.Cd21SysPoolData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Cd21SysPoolData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID:integer expected";
            if (!$util.isInteger(message.SumBetMoney) && !(message.SumBetMoney && $util.isInteger(message.SumBetMoney.low) && $util.isInteger(message.SumBetMoney.high)))
                return "SumBetMoney:integer|Long expected";
            if (!$util.isInteger(message.SumBetCount) && !(message.SumBetCount && $util.isInteger(message.SumBetCount.low) && $util.isInteger(message.SumBetCount.high)))
                return "SumBetCount:integer|Long expected";
            if (!$util.isInteger(message.PoolAmount) && !(message.PoolAmount && $util.isInteger(message.PoolAmount.low) && $util.isInteger(message.PoolAmount.high)))
                return "PoolAmount:integer|Long expected";
            return null;
        };

        /**
         * Creates a Cd21SysPoolData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.Cd21SysPoolData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.Cd21SysPoolData} Cd21SysPoolData
         */
        Cd21SysPoolData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.Cd21SysPoolData)
                return object;
            var message = new $root.GameMsg.Cd21SysPoolData();
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.SumBetMoney != null)
                if ($util.Long)
                    (message.SumBetMoney = $util.Long.fromValue(object.SumBetMoney)).unsigned = false;
                else if (typeof object.SumBetMoney === "string")
                    message.SumBetMoney = parseInt(object.SumBetMoney, 10);
                else if (typeof object.SumBetMoney === "number")
                    message.SumBetMoney = object.SumBetMoney;
                else if (typeof object.SumBetMoney === "object")
                    message.SumBetMoney = new $util.LongBits(object.SumBetMoney.low >>> 0, object.SumBetMoney.high >>> 0).toNumber();
            if (object.SumBetCount != null)
                if ($util.Long)
                    (message.SumBetCount = $util.Long.fromValue(object.SumBetCount)).unsigned = false;
                else if (typeof object.SumBetCount === "string")
                    message.SumBetCount = parseInt(object.SumBetCount, 10);
                else if (typeof object.SumBetCount === "number")
                    message.SumBetCount = object.SumBetCount;
                else if (typeof object.SumBetCount === "object")
                    message.SumBetCount = new $util.LongBits(object.SumBetCount.low >>> 0, object.SumBetCount.high >>> 0).toNumber();
            if (object.PoolAmount != null)
                if ($util.Long)
                    (message.PoolAmount = $util.Long.fromValue(object.PoolAmount)).unsigned = false;
                else if (typeof object.PoolAmount === "string")
                    message.PoolAmount = parseInt(object.PoolAmount, 10);
                else if (typeof object.PoolAmount === "number")
                    message.PoolAmount = object.PoolAmount;
                else if (typeof object.PoolAmount === "object")
                    message.PoolAmount = new $util.LongBits(object.PoolAmount.low >>> 0, object.PoolAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Cd21SysPoolData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.Cd21SysPoolData
         * @static
         * @param {GameMsg.Cd21SysPoolData} message Cd21SysPoolData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Cd21SysPoolData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.FlagID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumBetMoney = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.SumBetMoney = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumBetCount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.SumBetCount = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PoolAmount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.PoolAmount = options.longs === String ? "0" :0;
            }
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.SumBetMoney != null && message.hasOwnProperty("SumBetMoney"))
                if (typeof message.SumBetMoney === "number")
                    object.SumBetMoney = options.longs === String ? String(message.SumBetMoney) :message.SumBetMoney;
                else
                    object.SumBetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.SumBetMoney) :options.longs === Number ? new $util.LongBits(message.SumBetMoney.low >>> 0, message.SumBetMoney.high >>> 0).toNumber() :message.SumBetMoney;
            if (message.SumBetCount != null && message.hasOwnProperty("SumBetCount"))
                if (typeof message.SumBetCount === "number")
                    object.SumBetCount = options.longs === String ? String(message.SumBetCount) :message.SumBetCount;
                else
                    object.SumBetCount = options.longs === String ? $util.Long.prototype.toString.call(message.SumBetCount) :options.longs === Number ? new $util.LongBits(message.SumBetCount.low >>> 0, message.SumBetCount.high >>> 0).toNumber() :message.SumBetCount;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount = options.longs === String ? String(message.PoolAmount) :message.PoolAmount;
                else
                    object.PoolAmount = options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) :options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() :message.PoolAmount;
            return object;
        };

        /**
         * Converts this Cd21SysPoolData to JSON.
         * @function toJSON
         * @memberof GameMsg.Cd21SysPoolData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Cd21SysPoolData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Cd21SysPoolData;
    })();

    GameMsg.UserJackpotToBox = (function() {

        /**
         * Properties of a UserJackpotToBox.
         * @memberof GameMsg
         * @interface IUserJackpotToBox
         * @property {number} UserID UserJackpotToBox UserID
         * @property {number|Long} UpdateAmount UserJackpotToBox UpdateAmount
         */

        /**
         * Constructs a new UserJackpotToBox.
         * @memberof GameMsg
         * @classdesc Represents a UserJackpotToBox.
         * @implements IUserJackpotToBox
         * @constructor
         * @param {GameMsg.IUserJackpotToBox=} [properties] Properties to set
         */
        function UserJackpotToBox(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserJackpotToBox UserID.
         * @member {number} UserID
         * @memberof GameMsg.UserJackpotToBox
         * @instance
         */
        UserJackpotToBox.prototype.UserID = 0;

        /**
         * UserJackpotToBox UpdateAmount.
         * @member {number|Long} UpdateAmount
         * @memberof GameMsg.UserJackpotToBox
         * @instance
         */
        UserJackpotToBox.prototype.UpdateAmount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * Creates a new UserJackpotToBox instance using the specified properties.
         * @function create
         * @memberof GameMsg.UserJackpotToBox
         * @static
         * @param {GameMsg.IUserJackpotToBox=} [properties] Properties to set
         * @returns {GameMsg.UserJackpotToBox} UserJackpotToBox instance
         */
        UserJackpotToBox.create = function create(properties) {
            return new UserJackpotToBox(properties);
        };

        /**
         * Encodes the specified UserJackpotToBox message. Does not implicitly {@link GameMsg.UserJackpotToBox.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.UserJackpotToBox
         * @static
         * @param {GameMsg.IUserJackpotToBox} message UserJackpotToBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJackpotToBox.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.UpdateAmount);
            return writer;
        };

        /**
         * Encodes the specified UserJackpotToBox message, length delimited. Does not implicitly {@link GameMsg.UserJackpotToBox.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.UserJackpotToBox
         * @static
         * @param {GameMsg.IUserJackpotToBox} message UserJackpotToBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJackpotToBox.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserJackpotToBox message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.UserJackpotToBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.UserJackpotToBox} UserJackpotToBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJackpotToBox.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameMsg.UserJackpotToBox();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.UpdateAmount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            if (!message.hasOwnProperty("UpdateAmount"))
                throw $util.ProtocolError("missing required 'UpdateAmount'", { instance:message });
            return message;
        };

        /**
         * Decodes a UserJackpotToBox message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.UserJackpotToBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.UserJackpotToBox} UserJackpotToBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJackpotToBox.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserJackpotToBox message.
         * @function verify
         * @memberof GameMsg.UserJackpotToBox
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserJackpotToBox.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (!$util.isInteger(message.UpdateAmount) && !(message.UpdateAmount && $util.isInteger(message.UpdateAmount.low) && $util.isInteger(message.UpdateAmount.high)))
                return "UpdateAmount:integer|Long expected";
            return null;
        };

        /**
         * Creates a UserJackpotToBox message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.UserJackpotToBox
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.UserJackpotToBox} UserJackpotToBox
         */
        UserJackpotToBox.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.UserJackpotToBox)
                return object;
            var message = new $root.GameMsg.UserJackpotToBox();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.UpdateAmount != null)
                if ($util.Long)
                    (message.UpdateAmount = $util.Long.fromValue(object.UpdateAmount)).unsigned = false;
                else if (typeof object.UpdateAmount === "string")
                    message.UpdateAmount = parseInt(object.UpdateAmount, 10);
                else if (typeof object.UpdateAmount === "number")
                    message.UpdateAmount = object.UpdateAmount;
                else if (typeof object.UpdateAmount === "object")
                    message.UpdateAmount = new $util.LongBits(object.UpdateAmount.low >>> 0, object.UpdateAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserJackpotToBox message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.UserJackpotToBox
         * @static
         * @param {GameMsg.UserJackpotToBox} message UserJackpotToBox
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserJackpotToBox.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UpdateAmount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.UpdateAmount = options.longs === String ? "0" :0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.UpdateAmount != null && message.hasOwnProperty("UpdateAmount"))
                if (typeof message.UpdateAmount === "number")
                    object.UpdateAmount = options.longs === String ? String(message.UpdateAmount) :message.UpdateAmount;
                else
                    object.UpdateAmount = options.longs === String ? $util.Long.prototype.toString.call(message.UpdateAmount) :options.longs === Number ? new $util.LongBits(message.UpdateAmount.low >>> 0, message.UpdateAmount.high >>> 0).toNumber() :message.UpdateAmount;
            return object;
        };

        /**
         * Converts this UserJackpotToBox to JSON.
         * @function toJSON
         * @memberof GameMsg.UserJackpotToBox
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserJackpotToBox.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserJackpotToBox;
    })();

    return GameMsg;
})();

module.exports = $root;
