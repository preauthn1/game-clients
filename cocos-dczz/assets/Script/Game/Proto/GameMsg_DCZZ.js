/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
var $protobuf=protobuf;

// Common aliases
var $Reader=$protobuf.Reader, $Writer=$protobuf.Writer, $util=$protobuf.util;

// Exported root namespace
var $root=$protobuf.roots["default"] || ($protobuf.roots["default"]={});

$root.GameMsg_DCZZ=(function () {

    /**
     * Namespace GameMsg_DCZZ.
     * @exports GameMsg_DCZZ
     * @namespace
     */
    var GameMsg_DCZZ={};

    GameMsg_DCZZ.TestGameChat=(function () {

        /**
         * Properties of a TestGameChat.
         * @memberof GameMsg_DCZZ
         * @interface ITestGameChat
         * @property {string} Message TestGameChat Message
         */

        /**
         * Constructs a new TestGameChat.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a TestGameChat.
         * @implements ITestGameChat
         * @constructor
         * @param {GameMsg_DCZZ.ITestGameChat=} [properties] Properties to set
         */
        function TestGameChat(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * TestGameChat Message.
         * @member {string} Message
         * @memberof GameMsg_DCZZ.TestGameChat
         * @instance
         */
        TestGameChat.prototype.Message="";

        /**
         * Creates a new TestGameChat instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.TestGameChat
         * @static
         * @param {GameMsg_DCZZ.ITestGameChat=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.TestGameChat} TestGameChat instance
         */
        TestGameChat.create=function create(properties) {
            return new TestGameChat(properties);
        };

        /**
         * Encodes the specified TestGameChat message. Does not implicitly {@link GameMsg_DCZZ.TestGameChat.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.TestGameChat
         * @static
         * @param {GameMsg_DCZZ.ITestGameChat} message TestGameChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameChat.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified TestGameChat message, length delimited. Does not implicitly {@link GameMsg_DCZZ.TestGameChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.TestGameChat
         * @static
         * @param {GameMsg_DCZZ.ITestGameChat} message TestGameChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameChat.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameChat message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.TestGameChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.TestGameChat} TestGameChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameChat.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.TestGameChat();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.Message=reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("Message"))
                throw $util.ProtocolError("missing required 'Message'", { instance : message });
            return message;
        };

        /**
         * Decodes a TestGameChat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.TestGameChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.TestGameChat} TestGameChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameChat.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestGameChat message.
         * @function verify
         * @memberof GameMsg_DCZZ.TestGameChat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestGameChat.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Message))
                return "Message: string expected";
            return null;
        };

        /**
         * Creates a TestGameChat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.TestGameChat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.TestGameChat} TestGameChat
         */
        TestGameChat.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.TestGameChat)
                return object;
            var message=new $root.GameMsg_DCZZ.TestGameChat();
            if (object.Message != null)
                message.Message=String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a TestGameChat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.TestGameChat
         * @static
         * @param {GameMsg_DCZZ.TestGameChat} message TestGameChat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestGameChat.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults)
                object.Message="";
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message=message.Message;
            return object;
        };

        /**
         * Converts this TestGameChat to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.TestGameChat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameChat.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameChat;
    })();

    GameMsg_DCZZ.TestGameScore=(function () {

        /**
         * Properties of a TestGameScore.
         * @memberof GameMsg_DCZZ
         * @interface ITestGameScore
         * @property {number} Score TestGameScore Score
         */

        /**
         * Constructs a new TestGameScore.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a TestGameScore.
         * @implements ITestGameScore
         * @constructor
         * @param {GameMsg_DCZZ.ITestGameScore=} [properties] Properties to set
         */
        function TestGameScore(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * TestGameScore Score.
         * @member {number} Score
         * @memberof GameMsg_DCZZ.TestGameScore
         * @instance
         */
        TestGameScore.prototype.Score=0;

        /**
         * Creates a new TestGameScore instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.TestGameScore
         * @static
         * @param {GameMsg_DCZZ.ITestGameScore=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.TestGameScore} TestGameScore instance
         */
        TestGameScore.create=function create(properties) {
            return new TestGameScore(properties);
        };

        /**
         * Encodes the specified TestGameScore message. Does not implicitly {@link GameMsg_DCZZ.TestGameScore.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.TestGameScore
         * @static
         * @param {GameMsg_DCZZ.ITestGameScore} message TestGameScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameScore.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Score);
            return writer;
        };

        /**
         * Encodes the specified TestGameScore message, length delimited. Does not implicitly {@link GameMsg_DCZZ.TestGameScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.TestGameScore
         * @static
         * @param {GameMsg_DCZZ.ITestGameScore} message TestGameScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameScore.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameScore message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.TestGameScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.TestGameScore} TestGameScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameScore.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.TestGameScore();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.Score=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("Score"))
                throw $util.ProtocolError("missing required 'Score'", { instance : message });
            return message;
        };

        /**
         * Decodes a TestGameScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.TestGameScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.TestGameScore} TestGameScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameScore.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestGameScore message.
         * @function verify
         * @memberof GameMsg_DCZZ.TestGameScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestGameScore.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Score))
                return "Score: integer expected";
            return null;
        };

        /**
         * Creates a TestGameScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.TestGameScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.TestGameScore} TestGameScore
         */
        TestGameScore.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.TestGameScore)
                return object;
            var message=new $root.GameMsg_DCZZ.TestGameScore();
            if (object.Score != null)
                message.Score=object.Score | 0;
            return message;
        };

        /**
         * Creates a plain object from a TestGameScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.TestGameScore
         * @static
         * @param {GameMsg_DCZZ.TestGameScore} message TestGameScore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestGameScore.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults)
                object.Score=0;
            if (message.Score != null && message.hasOwnProperty("Score"))
                object.Score=message.Score;
            return object;
        };

        /**
         * Converts this TestGameScore to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.TestGameScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameScore.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameScore;
    })();

    GameMsg_DCZZ.TestGameEnd=(function () {

        /**
         * Properties of a TestGameEnd.
         * @memberof GameMsg_DCZZ
         * @interface ITestGameEnd
         */

        /**
         * Constructs a new TestGameEnd.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a TestGameEnd.
         * @implements ITestGameEnd
         * @constructor
         * @param {GameMsg_DCZZ.ITestGameEnd=} [properties] Properties to set
         */
        function TestGameEnd(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * Creates a new TestGameEnd instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.TestGameEnd
         * @static
         * @param {GameMsg_DCZZ.ITestGameEnd=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.TestGameEnd} TestGameEnd instance
         */
        TestGameEnd.create=function create(properties) {
            return new TestGameEnd(properties);
        };

        /**
         * Encodes the specified TestGameEnd message. Does not implicitly {@link GameMsg_DCZZ.TestGameEnd.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.TestGameEnd
         * @static
         * @param {GameMsg_DCZZ.ITestGameEnd} message TestGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameEnd.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            return writer;
        };

        /**
         * Encodes the specified TestGameEnd message, length delimited. Does not implicitly {@link GameMsg_DCZZ.TestGameEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.TestGameEnd
         * @static
         * @param {GameMsg_DCZZ.ITestGameEnd} message TestGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameEnd.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameEnd message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.TestGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.TestGameEnd} TestGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameEnd.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.TestGameEnd();
            while (reader.pos<end) {
                var tag=reader.uint32();
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
         * @memberof GameMsg_DCZZ.TestGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.TestGameEnd} TestGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameEnd.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestGameEnd message.
         * @function verify
         * @memberof GameMsg_DCZZ.TestGameEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestGameEnd.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a TestGameEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.TestGameEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.TestGameEnd} TestGameEnd
         */
        TestGameEnd.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.TestGameEnd)
                return object;
            return new $root.GameMsg_DCZZ.TestGameEnd();
        };

        /**
         * Creates a plain object from a TestGameEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.TestGameEnd
         * @static
         * @param {GameMsg_DCZZ.TestGameEnd} message TestGameEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestGameEnd.toObject=function toObject() {
            return {};
        };

        /**
         * Converts this TestGameEnd to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.TestGameEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameEnd.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameEnd;
    })();

    GameMsg_DCZZ.UserEnter=(function () {

        /**
         * Properties of a UserEnter.
         * @memberof GameMsg_DCZZ
         * @interface IUserEnter
         * @property {GameMsg_DCZZ.IGameUser} User UserEnter User
         */

        /**
         * Constructs a new UserEnter.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a UserEnter.
         * @implements IUserEnter
         * @constructor
         * @param {GameMsg_DCZZ.IUserEnter=} [properties] Properties to set
         */
        function UserEnter(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * UserEnter User.
         * @member {GameMsg_DCZZ.IGameUser} User
         * @memberof GameMsg_DCZZ.UserEnter
         * @instance
         */
        UserEnter.prototype.User=null;

        /**
         * Creates a new UserEnter instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.UserEnter
         * @static
         * @param {GameMsg_DCZZ.IUserEnter=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.UserEnter} UserEnter instance
         */
        UserEnter.create=function create(properties) {
            return new UserEnter(properties);
        };

        /**
         * Encodes the specified UserEnter message. Does not implicitly {@link GameMsg_DCZZ.UserEnter.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.UserEnter
         * @static
         * @param {GameMsg_DCZZ.IUserEnter} message UserEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEnter.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            $root.GameMsg_DCZZ.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserEnter message, length delimited. Does not implicitly {@link GameMsg_DCZZ.UserEnter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.UserEnter
         * @static
         * @param {GameMsg_DCZZ.IUserEnter} message UserEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEnter.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserEnter message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.UserEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.UserEnter} UserEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEnter.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.UserEnter();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.User=$root.GameMsg_DCZZ.GameUser.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("User"))
                throw $util.ProtocolError("missing required 'User'", { instance : message });
            return message;
        };

        /**
         * Decodes a UserEnter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.UserEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.UserEnter} UserEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEnter.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserEnter message.
         * @function verify
         * @memberof GameMsg_DCZZ.UserEnter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserEnter.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error=$root.GameMsg_DCZZ.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserEnter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.UserEnter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.UserEnter} UserEnter
         */
        UserEnter.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.UserEnter)
                return object;
            var message=new $root.GameMsg_DCZZ.UserEnter();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg_DCZZ.UserEnter.User: object expected");
                message.User=$root.GameMsg_DCZZ.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserEnter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.UserEnter
         * @static
         * @param {GameMsg_DCZZ.UserEnter} message UserEnter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserEnter.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults)
                object.User=null;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User=$root.GameMsg_DCZZ.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserEnter to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.UserEnter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserEnter.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserEnter;
    })();

    GameMsg_DCZZ.UserLeave=(function () {

        /**
         * Properties of a UserLeave.
         * @memberof GameMsg_DCZZ
         * @interface IUserLeave
         * @property {GameMsg_DCZZ.IGameUser} User UserLeave User
         */

        /**
         * Constructs a new UserLeave.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a UserLeave.
         * @implements IUserLeave
         * @constructor
         * @param {GameMsg_DCZZ.IUserLeave=} [properties] Properties to set
         */
        function UserLeave(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * UserLeave User.
         * @member {GameMsg_DCZZ.IGameUser} User
         * @memberof GameMsg_DCZZ.UserLeave
         * @instance
         */
        UserLeave.prototype.User=null;

        /**
         * Creates a new UserLeave instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.UserLeave
         * @static
         * @param {GameMsg_DCZZ.IUserLeave=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.UserLeave} UserLeave instance
         */
        UserLeave.create=function create(properties) {
            return new UserLeave(properties);
        };

        /**
         * Encodes the specified UserLeave message. Does not implicitly {@link GameMsg_DCZZ.UserLeave.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.UserLeave
         * @static
         * @param {GameMsg_DCZZ.IUserLeave} message UserLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLeave.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            $root.GameMsg_DCZZ.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserLeave message, length delimited. Does not implicitly {@link GameMsg_DCZZ.UserLeave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.UserLeave
         * @static
         * @param {GameMsg_DCZZ.IUserLeave} message UserLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLeave.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLeave message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.UserLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.UserLeave} UserLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLeave.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.UserLeave();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.User=$root.GameMsg_DCZZ.GameUser.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("User"))
                throw $util.ProtocolError("missing required 'User'", { instance : message });
            return message;
        };

        /**
         * Decodes a UserLeave message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.UserLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.UserLeave} UserLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLeave.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLeave message.
         * @function verify
         * @memberof GameMsg_DCZZ.UserLeave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLeave.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error=$root.GameMsg_DCZZ.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserLeave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.UserLeave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.UserLeave} UserLeave
         */
        UserLeave.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.UserLeave)
                return object;
            var message=new $root.GameMsg_DCZZ.UserLeave();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg_DCZZ.UserLeave.User: object expected");
                message.User=$root.GameMsg_DCZZ.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserLeave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.UserLeave
         * @static
         * @param {GameMsg_DCZZ.UserLeave} message UserLeave
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLeave.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults)
                object.User=null;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User=$root.GameMsg_DCZZ.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserLeave to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.UserLeave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLeave.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLeave;
    })();

    GameMsg_DCZZ.UserStateChange=(function () {

        /**
         * Properties of a UserStateChange.
         * @memberof GameMsg_DCZZ
         * @interface IUserStateChange
         * @property {GameMsg_DCZZ.IGameUser} User UserStateChange User
         */

        /**
         * Constructs a new UserStateChange.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a UserStateChange.
         * @implements IUserStateChange
         * @constructor
         * @param {GameMsg_DCZZ.IUserStateChange=} [properties] Properties to set
         */
        function UserStateChange(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * UserStateChange User.
         * @member {GameMsg_DCZZ.IGameUser} User
         * @memberof GameMsg_DCZZ.UserStateChange
         * @instance
         */
        UserStateChange.prototype.User=null;

        /**
         * Creates a new UserStateChange instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.UserStateChange
         * @static
         * @param {GameMsg_DCZZ.IUserStateChange=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.UserStateChange} UserStateChange instance
         */
        UserStateChange.create=function create(properties) {
            return new UserStateChange(properties);
        };

        /**
         * Encodes the specified UserStateChange message. Does not implicitly {@link GameMsg_DCZZ.UserStateChange.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.UserStateChange
         * @static
         * @param {GameMsg_DCZZ.IUserStateChange} message UserStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStateChange.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            $root.GameMsg_DCZZ.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserStateChange message, length delimited. Does not implicitly {@link GameMsg_DCZZ.UserStateChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.UserStateChange
         * @static
         * @param {GameMsg_DCZZ.IUserStateChange} message UserStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStateChange.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserStateChange message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.UserStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.UserStateChange} UserStateChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStateChange.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.UserStateChange();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.User=$root.GameMsg_DCZZ.GameUser.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("User"))
                throw $util.ProtocolError("missing required 'User'", { instance : message });
            return message;
        };

        /**
         * Decodes a UserStateChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.UserStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.UserStateChange} UserStateChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStateChange.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserStateChange message.
         * @function verify
         * @memberof GameMsg_DCZZ.UserStateChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserStateChange.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error=$root.GameMsg_DCZZ.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserStateChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.UserStateChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.UserStateChange} UserStateChange
         */
        UserStateChange.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.UserStateChange)
                return object;
            var message=new $root.GameMsg_DCZZ.UserStateChange();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg_DCZZ.UserStateChange.User: object expected");
                message.User=$root.GameMsg_DCZZ.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserStateChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.UserStateChange
         * @static
         * @param {GameMsg_DCZZ.UserStateChange} message UserStateChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserStateChange.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults)
                object.User=null;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User=$root.GameMsg_DCZZ.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserStateChange to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.UserStateChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserStateChange.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserStateChange;
    })();

    GameMsg_DCZZ.GameUser=(function () {

        /**
         * Properties of a GameUser.
         * @memberof GameMsg_DCZZ
         * @interface IGameUser
         * @property {number} UserID GameUser UserID
         * @property {string} NickName GameUser NickName
         * @property {number} Sex GameUser Sex
         * @property {number} FaceID GameUser FaceID
         * @property {number|Long} Score GameUser Score
         * @property {number} WinCount GameUser WinCount
         * @property {number} LoseCount GameUser LoseCount
         * @property {number} DrawCount GameUser DrawCount
         * @property {number} StateValue GameUser StateValue
         * @property {number} TableNo GameUser TableNo
         * @property {number} SeatNo GameUser SeatNo
         * @property {number|null} [LastWinLose] GameUser LastWinLose
         */

        /**
         * Constructs a new GameUser.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a GameUser.
         * @implements IGameUser
         * @constructor
         * @param {GameMsg_DCZZ.IGameUser=} [properties] Properties to set
         */
        function GameUser(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * GameUser UserID.
         * @member {number} UserID
         * @memberof GameMsg_DCZZ.GameUser
         * @instance
         */
        GameUser.prototype.UserID=0;

        /**
         * GameUser NickName.
         * @member {string} NickName
         * @memberof GameMsg_DCZZ.GameUser
         * @instance
         */
        GameUser.prototype.NickName="";

        /**
         * GameUser Sex.
         * @member {number} Sex
         * @memberof GameMsg_DCZZ.GameUser
         * @instance
         */
        GameUser.prototype.Sex=0;

        /**
         * GameUser FaceID.
         * @member {number} FaceID
         * @memberof GameMsg_DCZZ.GameUser
         * @instance
         */
        GameUser.prototype.FaceID=0;

        /**
         * GameUser Score.
         * @member {number|Long} Score
         * @memberof GameMsg_DCZZ.GameUser
         * @instance
         */
        GameUser.prototype.Score=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * GameUser WinCount.
         * @member {number} WinCount
         * @memberof GameMsg_DCZZ.GameUser
         * @instance
         */
        GameUser.prototype.WinCount=0;

        /**
         * GameUser LoseCount.
         * @member {number} LoseCount
         * @memberof GameMsg_DCZZ.GameUser
         * @instance
         */
        GameUser.prototype.LoseCount=0;

        /**
         * GameUser DrawCount.
         * @member {number} DrawCount
         * @memberof GameMsg_DCZZ.GameUser
         * @instance
         */
        GameUser.prototype.DrawCount=0;

        /**
         * GameUser StateValue.
         * @member {number} StateValue
         * @memberof GameMsg_DCZZ.GameUser
         * @instance
         */
        GameUser.prototype.StateValue=0;

        /**
         * GameUser TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_DCZZ.GameUser
         * @instance
         */
        GameUser.prototype.TableNo=0;

        /**
         * GameUser SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DCZZ.GameUser
         * @instance
         */
        GameUser.prototype.SeatNo=0;

        /**
         * GameUser LastWinLose.
         * @member {number} LastWinLose
         * @memberof GameMsg_DCZZ.GameUser
         * @instance
         */
        GameUser.prototype.LastWinLose=0;

        /**
         * Creates a new GameUser instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.GameUser
         * @static
         * @param {GameMsg_DCZZ.IGameUser=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.GameUser} GameUser instance
         */
        GameUser.create=function create(properties) {
            return new GameUser(properties);
        };

        /**
         * Encodes the specified GameUser message. Does not implicitly {@link GameMsg_DCZZ.GameUser.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.GameUser
         * @static
         * @param {GameMsg_DCZZ.IGameUser} message GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameUser.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
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
            return writer;
        };

        /**
         * Encodes the specified GameUser message, length delimited. Does not implicitly {@link GameMsg_DCZZ.GameUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.GameUser
         * @static
         * @param {GameMsg_DCZZ.IGameUser} message GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameUser.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameUser message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.GameUser} GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameUser.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.GameUser();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.NickName=reader.string();
                        break;
                    case 3:
                        message.Sex=reader.int32();
                        break;
                    case 4:
                        message.FaceID=reader.int32();
                        break;
                    case 5:
                        message.Score=reader.int64();
                        break;
                    case 6:
                        message.WinCount=reader.int32();
                        break;
                    case 7:
                        message.LoseCount=reader.int32();
                        break;
                    case 8:
                        message.DrawCount=reader.int32();
                        break;
                    case 9:
                        message.StateValue=reader.int32();
                        break;
                    case 10:
                        message.TableNo=reader.int32();
                        break;
                    case 11:
                        message.SeatNo=reader.int32();
                        break;
                    case 12:
                        message.LastWinLose=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            if (!message.hasOwnProperty("NickName"))
                throw $util.ProtocolError("missing required 'NickName'", { instance : message });
            if (!message.hasOwnProperty("Sex"))
                throw $util.ProtocolError("missing required 'Sex'", { instance : message });
            if (!message.hasOwnProperty("FaceID"))
                throw $util.ProtocolError("missing required 'FaceID'", { instance : message });
            if (!message.hasOwnProperty("Score"))
                throw $util.ProtocolError("missing required 'Score'", { instance : message });
            if (!message.hasOwnProperty("WinCount"))
                throw $util.ProtocolError("missing required 'WinCount'", { instance : message });
            if (!message.hasOwnProperty("LoseCount"))
                throw $util.ProtocolError("missing required 'LoseCount'", { instance : message });
            if (!message.hasOwnProperty("DrawCount"))
                throw $util.ProtocolError("missing required 'DrawCount'", { instance : message });
            if (!message.hasOwnProperty("StateValue"))
                throw $util.ProtocolError("missing required 'StateValue'", { instance : message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance : message });
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance : message });
            return message;
        };

        /**
         * Decodes a GameUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.GameUser} GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameUser.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameUser message.
         * @function verify
         * @memberof GameMsg_DCZZ.GameUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameUser.verify=function verify(message) {
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
            return null;
        };

        /**
         * Creates a GameUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.GameUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.GameUser} GameUser
         */
        GameUser.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.GameUser)
                return object;
            var message=new $root.GameMsg_DCZZ.GameUser();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.NickName != null)
                message.NickName=String(object.NickName);
            if (object.Sex != null)
                message.Sex=object.Sex | 0;
            if (object.FaceID != null)
                message.FaceID=object.FaceID | 0;
            if (object.Score != null)
                if ($util.Long)
                    (message.Score=$util.Long.fromValue(object.Score)).unsigned=false;
                else if (typeof object.Score === "string")
                    message.Score=parseInt(object.Score, 10);
                else if (typeof object.Score === "number")
                    message.Score=object.Score;
                else if (typeof object.Score === "object")
                    message.Score=new $util.LongBits(object.Score.low >>> 0, object.Score.high >>> 0).toNumber();
            if (object.WinCount != null)
                message.WinCount=object.WinCount | 0;
            if (object.LoseCount != null)
                message.LoseCount=object.LoseCount | 0;
            if (object.DrawCount != null)
                message.DrawCount=object.DrawCount | 0;
            if (object.StateValue != null)
                message.StateValue=object.StateValue | 0;
            if (object.TableNo != null)
                message.TableNo=object.TableNo | 0;
            if (object.SeatNo != null)
                message.SeatNo=object.SeatNo | 0;
            if (object.LastWinLose != null)
                message.LastWinLose=object.LastWinLose | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.GameUser
         * @static
         * @param {GameMsg_DCZZ.GameUser} message GameUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameUser.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.UserID=0;
                object.NickName="";
                object.Sex=0;
                object.FaceID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Score=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Score=options.longs === String ? "0" : 0;
                object.WinCount=0;
                object.LoseCount=0;
                object.DrawCount=0;
                object.StateValue=0;
                object.TableNo=0;
                object.SeatNo=0;
                object.LastWinLose=0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                object.NickName=message.NickName;
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                object.Sex=message.Sex;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID=message.FaceID;
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (typeof message.Score === "number")
                    object.Score=options.longs === String ? String(message.Score) : message.Score;
                else
                    object.Score=options.longs === String ? $util.Long.prototype.toString.call(message.Score) : options.longs === Number ? new $util.LongBits(message.Score.low >>> 0, message.Score.high >>> 0).toNumber() : message.Score;
            if (message.WinCount != null && message.hasOwnProperty("WinCount"))
                object.WinCount=message.WinCount;
            if (message.LoseCount != null && message.hasOwnProperty("LoseCount"))
                object.LoseCount=message.LoseCount;
            if (message.DrawCount != null && message.hasOwnProperty("DrawCount"))
                object.DrawCount=message.DrawCount;
            if (message.StateValue != null && message.hasOwnProperty("StateValue"))
                object.StateValue=message.StateValue;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo=message.TableNo;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo=message.SeatNo;
            if (message.LastWinLose != null && message.hasOwnProperty("LastWinLose"))
                object.LastWinLose=message.LastWinLose;
            return object;
        };

        /**
         * Converts this GameUser to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.GameUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameUser.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameUser;
    })();

    GameMsg_DCZZ.GamePoker=(function () {

        /**
         * Properties of a GamePoker.
         * @memberof GameMsg_DCZZ
         * @interface IGamePoker
         * @property {Array.<GameMsg_DCZZ.IUserPoker>|null} [Poker] GamePoker Poker
         */

        /**
         * Constructs a new GamePoker.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a GamePoker.
         * @implements IGamePoker
         * @constructor
         * @param {GameMsg_DCZZ.IGamePoker=} [properties] Properties to set
         */
        function GamePoker(properties) {
            this.Poker=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * GamePoker Poker.
         * @member {Array.<GameMsg_DCZZ.IUserPoker>} Poker
         * @memberof GameMsg_DCZZ.GamePoker
         * @instance
         */
        GamePoker.prototype.Poker=$util.emptyArray;

        /**
         * Creates a new GamePoker instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.GamePoker
         * @static
         * @param {GameMsg_DCZZ.IGamePoker=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.GamePoker} GamePoker instance
         */
        GamePoker.create=function create(properties) {
            return new GamePoker(properties);
        };

        /**
         * Encodes the specified GamePoker message. Does not implicitly {@link GameMsg_DCZZ.GamePoker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.GamePoker
         * @static
         * @param {GameMsg_DCZZ.IGamePoker} message GamePoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePoker.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.Poker != null && message.Poker.length)
                for (var i=0; i<message.Poker.length; ++ i)
                    $root.GameMsg_DCZZ.UserPoker.encode(message.Poker[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GamePoker message, length delimited. Does not implicitly {@link GameMsg_DCZZ.GamePoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.GamePoker
         * @static
         * @param {GameMsg_DCZZ.IGamePoker} message GamePoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePoker.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GamePoker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.GamePoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.GamePoker} GamePoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePoker.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.GamePoker();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.Poker && message.Poker.length))
                            message.Poker=[];
                        message.Poker.push($root.GameMsg_DCZZ.UserPoker.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_DCZZ.GamePoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.GamePoker} GamePoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePoker.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GamePoker message.
         * @function verify
         * @memberof GameMsg_DCZZ.GamePoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GamePoker.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Poker != null && message.hasOwnProperty("Poker")) {
                if (!Array.isArray(message.Poker))
                    return "Poker: array expected";
                for (var i=0; i<message.Poker.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.UserPoker.verify(message.Poker[i]);
                    if (error)
                        return "Poker." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GamePoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.GamePoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.GamePoker} GamePoker
         */
        GamePoker.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.GamePoker)
                return object;
            var message=new $root.GameMsg_DCZZ.GamePoker();
            if (object.Poker) {
                if (!Array.isArray(object.Poker))
                    throw TypeError(".GameMsg_DCZZ.GamePoker.Poker: array expected");
                message.Poker=[];
                for (var i=0; i<object.Poker.length; ++ i) {
                    if (typeof object.Poker[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.GamePoker.Poker: object expected");
                    message.Poker[i]=$root.GameMsg_DCZZ.UserPoker.fromObject(object.Poker[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GamePoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.GamePoker
         * @static
         * @param {GameMsg_DCZZ.GamePoker} message GamePoker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GamePoker.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.Poker=[];
            if (message.Poker && message.Poker.length) {
                object.Poker=[];
                for (var j=0; j<message.Poker.length; ++ j)
                    object.Poker[j]=$root.GameMsg_DCZZ.UserPoker.toObject(message.Poker[j], options);
            }
            return object;
        };

        /**
         * Converts this GamePoker to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.GamePoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GamePoker.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GamePoker;
    })();

    GameMsg_DCZZ.UserPoker=(function () {

        /**
         * Properties of a UserPoker.
         * @memberof GameMsg_DCZZ
         * @interface IUserPoker
         * @property {number} UserID UserPoker UserID
         * @property {number} SeatNo UserPoker SeatNo
         * @property {Array.<GameMsg_DCZZ.IPokerCard>|null} [Cards] UserPoker Cards
         */

        /**
         * Constructs a new UserPoker.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a UserPoker.
         * @implements IUserPoker
         * @constructor
         * @param {GameMsg_DCZZ.IUserPoker=} [properties] Properties to set
         */
        function UserPoker(properties) {
            this.Cards=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * UserPoker UserID.
         * @member {number} UserID
         * @memberof GameMsg_DCZZ.UserPoker
         * @instance
         */
        UserPoker.prototype.UserID=0;

        /**
         * UserPoker SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DCZZ.UserPoker
         * @instance
         */
        UserPoker.prototype.SeatNo=0;

        /**
         * UserPoker Cards.
         * @member {Array.<GameMsg_DCZZ.IPokerCard>} Cards
         * @memberof GameMsg_DCZZ.UserPoker
         * @instance
         */
        UserPoker.prototype.Cards=$util.emptyArray;

        /**
         * Creates a new UserPoker instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.UserPoker
         * @static
         * @param {GameMsg_DCZZ.IUserPoker=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.UserPoker} UserPoker instance
         */
        UserPoker.create=function create(properties) {
            return new UserPoker(properties);
        };

        /**
         * Encodes the specified UserPoker message. Does not implicitly {@link GameMsg_DCZZ.UserPoker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.UserPoker
         * @static
         * @param {GameMsg_DCZZ.IUserPoker} message UserPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPoker.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SeatNo);
            if (message.Cards != null && message.Cards.length)
                for (var i=0; i<message.Cards.length; ++ i)
                    $root.GameMsg_DCZZ.PokerCard.encode(message.Cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserPoker message, length delimited. Does not implicitly {@link GameMsg_DCZZ.UserPoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.UserPoker
         * @static
         * @param {GameMsg_DCZZ.IUserPoker} message UserPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPoker.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserPoker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.UserPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.UserPoker} UserPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPoker.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.UserPoker();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.SeatNo=reader.int32();
                        break;
                    case 3:
                        if (!(message.Cards && message.Cards.length))
                            message.Cards=[];
                        message.Cards.push($root.GameMsg_DCZZ.PokerCard.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance : message });
            return message;
        };

        /**
         * Decodes a UserPoker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.UserPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.UserPoker} UserPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPoker.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserPoker message.
         * @function verify
         * @memberof GameMsg_DCZZ.UserPoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPoker.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i=0; i<message.Cards.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.PokerCard.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserPoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.UserPoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.UserPoker} UserPoker
         */
        UserPoker.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.UserPoker)
                return object;
            var message=new $root.GameMsg_DCZZ.UserPoker();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.SeatNo != null)
                message.SeatNo=object.SeatNo | 0;
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".GameMsg_DCZZ.UserPoker.Cards: array expected");
                message.Cards=[];
                for (var i=0; i<object.Cards.length; ++ i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.UserPoker.Cards: object expected");
                    message.Cards[i]=$root.GameMsg_DCZZ.PokerCard.fromObject(object.Cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserPoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.UserPoker
         * @static
         * @param {GameMsg_DCZZ.UserPoker} message UserPoker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserPoker.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.Cards=[];
            if (options.defaults) {
                object.UserID=0;
                object.SeatNo=0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo=message.SeatNo;
            if (message.Cards && message.Cards.length) {
                object.Cards=[];
                for (var j=0; j<message.Cards.length; ++ j)
                    object.Cards[j]=$root.GameMsg_DCZZ.PokerCard.toObject(message.Cards[j], options);
            }
            return object;
        };

        /**
         * Converts this UserPoker to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.UserPoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPoker.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserPoker;
    })();

    GameMsg_DCZZ.PokerCard=(function () {

        /**
         * Properties of a PokerCard.
         * @memberof GameMsg_DCZZ
         * @interface IPokerCard
         * @property {number} Color PokerCard Color
         * @property {number} CardNumber PokerCard CardNumber
         */

        /**
         * Constructs a new PokerCard.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a PokerCard.
         * @implements IPokerCard
         * @constructor
         * @param {GameMsg_DCZZ.IPokerCard=} [properties] Properties to set
         */
        function PokerCard(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * PokerCard Color.
         * @member {number} Color
         * @memberof GameMsg_DCZZ.PokerCard
         * @instance
         */
        PokerCard.prototype.Color=0;

        /**
         * PokerCard CardNumber.
         * @member {number} CardNumber
         * @memberof GameMsg_DCZZ.PokerCard
         * @instance
         */
        PokerCard.prototype.CardNumber=0;

        /**
         * Creates a new PokerCard instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.PokerCard
         * @static
         * @param {GameMsg_DCZZ.IPokerCard=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.PokerCard} PokerCard instance
         */
        PokerCard.create=function create(properties) {
            return new PokerCard(properties);
        };

        /**
         * Encodes the specified PokerCard message. Does not implicitly {@link GameMsg_DCZZ.PokerCard.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.PokerCard
         * @static
         * @param {GameMsg_DCZZ.IPokerCard} message PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokerCard.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Color);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CardNumber);
            return writer;
        };

        /**
         * Encodes the specified PokerCard message, length delimited. Does not implicitly {@link GameMsg_DCZZ.PokerCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.PokerCard
         * @static
         * @param {GameMsg_DCZZ.IPokerCard} message PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokerCard.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PokerCard message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.PokerCard} PokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokerCard.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.PokerCard();
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
            if (!message.hasOwnProperty("Color"))
                throw $util.ProtocolError("missing required 'Color'", { instance : message });
            if (!message.hasOwnProperty("CardNumber"))
                throw $util.ProtocolError("missing required 'CardNumber'", { instance : message });
            return message;
        };

        /**
         * Decodes a PokerCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.PokerCard} PokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokerCard.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PokerCard message.
         * @function verify
         * @memberof GameMsg_DCZZ.PokerCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PokerCard.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Color))
                return "Color: integer expected";
            if (!$util.isInteger(message.CardNumber))
                return "CardNumber: integer expected";
            return null;
        };

        /**
         * Creates a PokerCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.PokerCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.PokerCard} PokerCard
         */
        PokerCard.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.PokerCard)
                return object;
            var message=new $root.GameMsg_DCZZ.PokerCard();
            if (object.Color != null)
                message.Color=object.Color | 0;
            if (object.CardNumber != null)
                message.CardNumber=object.CardNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from a PokerCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.PokerCard
         * @static
         * @param {GameMsg_DCZZ.PokerCard} message PokerCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PokerCard.toObject=function toObject(message, options) {
            if (!options)
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
         * Converts this PokerCard to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.PokerCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PokerCard.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PokerCard;
    })();

    GameMsg_DCZZ.UserActionCommited=(function () {

        /**
         * Properties of a UserActionCommited.
         * @memberof GameMsg_DCZZ
         * @interface IUserActionCommited
         * @property {string} ActionName UserActionCommited ActionName
         */

        /**
         * Constructs a new UserActionCommited.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a UserActionCommited.
         * @implements IUserActionCommited
         * @constructor
         * @param {GameMsg_DCZZ.IUserActionCommited=} [properties] Properties to set
         */
        function UserActionCommited(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * UserActionCommited ActionName.
         * @member {string} ActionName
         * @memberof GameMsg_DCZZ.UserActionCommited
         * @instance
         */
        UserActionCommited.prototype.ActionName="";

        /**
         * Creates a new UserActionCommited instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.UserActionCommited
         * @static
         * @param {GameMsg_DCZZ.IUserActionCommited=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.UserActionCommited} UserActionCommited instance
         */
        UserActionCommited.create=function create(properties) {
            return new UserActionCommited(properties);
        };

        /**
         * Encodes the specified UserActionCommited message. Does not implicitly {@link GameMsg_DCZZ.UserActionCommited.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.UserActionCommited
         * @static
         * @param {GameMsg_DCZZ.IUserActionCommited} message UserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserActionCommited.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified UserActionCommited message, length delimited. Does not implicitly {@link GameMsg_DCZZ.UserActionCommited.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.UserActionCommited
         * @static
         * @param {GameMsg_DCZZ.IUserActionCommited} message UserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserActionCommited.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserActionCommited message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.UserActionCommited} UserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserActionCommited.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.UserActionCommited();
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
            if (!message.hasOwnProperty("ActionName"))
                throw $util.ProtocolError("missing required 'ActionName'", { instance : message });
            return message;
        };

        /**
         * Decodes a UserActionCommited message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.UserActionCommited} UserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserActionCommited.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserActionCommited message.
         * @function verify
         * @memberof GameMsg_DCZZ.UserActionCommited
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserActionCommited.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ActionName))
                return "ActionName: string expected";
            return null;
        };

        /**
         * Creates a UserActionCommited message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.UserActionCommited
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.UserActionCommited} UserActionCommited
         */
        UserActionCommited.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.UserActionCommited)
                return object;
            var message=new $root.GameMsg_DCZZ.UserActionCommited();
            if (object.ActionName != null)
                message.ActionName=String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from a UserActionCommited message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.UserActionCommited
         * @static
         * @param {GameMsg_DCZZ.UserActionCommited} message UserActionCommited
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserActionCommited.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults)
                object.ActionName="";
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                object.ActionName=message.ActionName;
            return object;
        };

        /**
         * Converts this UserActionCommited to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.UserActionCommited
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserActionCommited.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserActionCommited;
    })();

    GameMsg_DCZZ.AllUserActionCommited=(function () {

        /**
         * Properties of an AllUserActionCommited.
         * @memberof GameMsg_DCZZ
         * @interface IAllUserActionCommited
         * @property {string} ActionName AllUserActionCommited ActionName
         */

        /**
         * Constructs a new AllUserActionCommited.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents an AllUserActionCommited.
         * @implements IAllUserActionCommited
         * @constructor
         * @param {GameMsg_DCZZ.IAllUserActionCommited=} [properties] Properties to set
         */
        function AllUserActionCommited(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * AllUserActionCommited ActionName.
         * @member {string} ActionName
         * @memberof GameMsg_DCZZ.AllUserActionCommited
         * @instance
         */
        AllUserActionCommited.prototype.ActionName="";

        /**
         * Creates a new AllUserActionCommited instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.AllUserActionCommited
         * @static
         * @param {GameMsg_DCZZ.IAllUserActionCommited=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.AllUserActionCommited} AllUserActionCommited instance
         */
        AllUserActionCommited.create=function create(properties) {
            return new AllUserActionCommited(properties);
        };

        /**
         * Encodes the specified AllUserActionCommited message. Does not implicitly {@link GameMsg_DCZZ.AllUserActionCommited.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.AllUserActionCommited
         * @static
         * @param {GameMsg_DCZZ.IAllUserActionCommited} message AllUserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllUserActionCommited.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified AllUserActionCommited message, length delimited. Does not implicitly {@link GameMsg_DCZZ.AllUserActionCommited.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.AllUserActionCommited
         * @static
         * @param {GameMsg_DCZZ.IAllUserActionCommited} message AllUserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllUserActionCommited.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllUserActionCommited message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.AllUserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.AllUserActionCommited} AllUserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllUserActionCommited.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.AllUserActionCommited();
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
            if (!message.hasOwnProperty("ActionName"))
                throw $util.ProtocolError("missing required 'ActionName'", { instance : message });
            return message;
        };

        /**
         * Decodes an AllUserActionCommited message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.AllUserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.AllUserActionCommited} AllUserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllUserActionCommited.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AllUserActionCommited message.
         * @function verify
         * @memberof GameMsg_DCZZ.AllUserActionCommited
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AllUserActionCommited.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ActionName))
                return "ActionName: string expected";
            return null;
        };

        /**
         * Creates an AllUserActionCommited message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.AllUserActionCommited
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.AllUserActionCommited} AllUserActionCommited
         */
        AllUserActionCommited.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.AllUserActionCommited)
                return object;
            var message=new $root.GameMsg_DCZZ.AllUserActionCommited();
            if (object.ActionName != null)
                message.ActionName=String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from an AllUserActionCommited message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.AllUserActionCommited
         * @static
         * @param {GameMsg_DCZZ.AllUserActionCommited} message AllUserActionCommited
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AllUserActionCommited.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults)
                object.ActionName="";
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                object.ActionName=message.ActionName;
            return object;
        };

        /**
         * Converts this AllUserActionCommited to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.AllUserActionCommited
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllUserActionCommited.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AllUserActionCommited;
    })();

    GameMsg_DCZZ.LookOnUserNotify=(function () {

        /**
         * Properties of a LookOnUserNotify.
         * @memberof GameMsg_DCZZ
         * @interface ILookOnUserNotify
         * @property {Array.<number>|null} [UserID] LookOnUserNotify UserID
         */

        /**
         * Constructs a new LookOnUserNotify.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a LookOnUserNotify.
         * @implements ILookOnUserNotify
         * @constructor
         * @param {GameMsg_DCZZ.ILookOnUserNotify=} [properties] Properties to set
         */
        function LookOnUserNotify(properties) {
            this.UserID=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * LookOnUserNotify UserID.
         * @member {Array.<number>} UserID
         * @memberof GameMsg_DCZZ.LookOnUserNotify
         * @instance
         */
        LookOnUserNotify.prototype.UserID=$util.emptyArray;

        /**
         * Creates a new LookOnUserNotify instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.LookOnUserNotify
         * @static
         * @param {GameMsg_DCZZ.ILookOnUserNotify=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.LookOnUserNotify} LookOnUserNotify instance
         */
        LookOnUserNotify.create=function create(properties) {
            return new LookOnUserNotify(properties);
        };

        /**
         * Encodes the specified LookOnUserNotify message. Does not implicitly {@link GameMsg_DCZZ.LookOnUserNotify.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.LookOnUserNotify
         * @static
         * @param {GameMsg_DCZZ.ILookOnUserNotify} message LookOnUserNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LookOnUserNotify.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.UserID != null && message.UserID.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i=0; i<message.UserID.length; ++ i)
                    writer.int32(message.UserID[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified LookOnUserNotify message, length delimited. Does not implicitly {@link GameMsg_DCZZ.LookOnUserNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.LookOnUserNotify
         * @static
         * @param {GameMsg_DCZZ.ILookOnUserNotify} message LookOnUserNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LookOnUserNotify.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LookOnUserNotify message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.LookOnUserNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.LookOnUserNotify} LookOnUserNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LookOnUserNotify.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.LookOnUserNotify();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.UserID && message.UserID.length))
                            message.UserID=[];
                        if ((tag & 7) === 2) {
                            var end2=reader.uint32() + reader.pos;
                            while (reader.pos<end2)
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
         * @memberof GameMsg_DCZZ.LookOnUserNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.LookOnUserNotify} LookOnUserNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LookOnUserNotify.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LookOnUserNotify message.
         * @function verify
         * @memberof GameMsg_DCZZ.LookOnUserNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LookOnUserNotify.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID")) {
                if (!Array.isArray(message.UserID))
                    return "UserID: array expected";
                for (var i=0; i<message.UserID.length; ++ i)
                    if (!$util.isInteger(message.UserID[i]))
                        return "UserID: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a LookOnUserNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.LookOnUserNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.LookOnUserNotify} LookOnUserNotify
         */
        LookOnUserNotify.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.LookOnUserNotify)
                return object;
            var message=new $root.GameMsg_DCZZ.LookOnUserNotify();
            if (object.UserID) {
                if (!Array.isArray(object.UserID))
                    throw TypeError(".GameMsg_DCZZ.LookOnUserNotify.UserID: array expected");
                message.UserID=[];
                for (var i=0; i<object.UserID.length; ++ i)
                    message.UserID[i]=object.UserID[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a LookOnUserNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.LookOnUserNotify
         * @static
         * @param {GameMsg_DCZZ.LookOnUserNotify} message LookOnUserNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LookOnUserNotify.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.UserID=[];
            if (message.UserID && message.UserID.length) {
                object.UserID=[];
                for (var j=0; j<message.UserID.length; ++ j)
                    object.UserID[j]=message.UserID[j];
            }
            return object;
        };

        /**
         * Converts this LookOnUserNotify to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.LookOnUserNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LookOnUserNotify.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LookOnUserNotify;
    })();

    GameMsg_DCZZ.UserLuckScore=(function () {

        /**
         * Properties of a UserLuckScore.
         * @memberof GameMsg_DCZZ
         * @interface IUserLuckScore
         * @property {number} UserID UserLuckScore UserID
         * @property {number|Long} Score UserLuckScore Score
         */

        /**
         * Constructs a new UserLuckScore.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a UserLuckScore.
         * @implements IUserLuckScore
         * @constructor
         * @param {GameMsg_DCZZ.IUserLuckScore=} [properties] Properties to set
         */
        function UserLuckScore(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * UserLuckScore UserID.
         * @member {number} UserID
         * @memberof GameMsg_DCZZ.UserLuckScore
         * @instance
         */
        UserLuckScore.prototype.UserID=0;

        /**
         * UserLuckScore Score.
         * @member {number|Long} Score
         * @memberof GameMsg_DCZZ.UserLuckScore
         * @instance
         */
        UserLuckScore.prototype.Score=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new UserLuckScore instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.UserLuckScore
         * @static
         * @param {GameMsg_DCZZ.IUserLuckScore=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.UserLuckScore} UserLuckScore instance
         */
        UserLuckScore.create=function create(properties) {
            return new UserLuckScore(properties);
        };

        /**
         * Encodes the specified UserLuckScore message. Does not implicitly {@link GameMsg_DCZZ.UserLuckScore.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.UserLuckScore
         * @static
         * @param {GameMsg_DCZZ.IUserLuckScore} message UserLuckScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScore.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Score);
            return writer;
        };

        /**
         * Encodes the specified UserLuckScore message, length delimited. Does not implicitly {@link GameMsg_DCZZ.UserLuckScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.UserLuckScore
         * @static
         * @param {GameMsg_DCZZ.IUserLuckScore} message UserLuckScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScore.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLuckScore message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.UserLuckScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.UserLuckScore} UserLuckScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScore.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.UserLuckScore();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.Score=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            if (!message.hasOwnProperty("Score"))
                throw $util.ProtocolError("missing required 'Score'", { instance : message });
            return message;
        };

        /**
         * Decodes a UserLuckScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.UserLuckScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.UserLuckScore} UserLuckScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScore.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLuckScore message.
         * @function verify
         * @memberof GameMsg_DCZZ.UserLuckScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLuckScore.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.Score) && !(message.Score && $util.isInteger(message.Score.low) && $util.isInteger(message.Score.high)))
                return "Score: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserLuckScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.UserLuckScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.UserLuckScore} UserLuckScore
         */
        UserLuckScore.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.UserLuckScore)
                return object;
            var message=new $root.GameMsg_DCZZ.UserLuckScore();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.Score != null)
                if ($util.Long)
                    (message.Score=$util.Long.fromValue(object.Score)).unsigned=false;
                else if (typeof object.Score === "string")
                    message.Score=parseInt(object.Score, 10);
                else if (typeof object.Score === "number")
                    message.Score=object.Score;
                else if (typeof object.Score === "object")
                    message.Score=new $util.LongBits(object.Score.low >>> 0, object.Score.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserLuckScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.UserLuckScore
         * @static
         * @param {GameMsg_DCZZ.UserLuckScore} message UserLuckScore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLuckScore.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.UserID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Score=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Score=options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (typeof message.Score === "number")
                    object.Score=options.longs === String ? String(message.Score) : message.Score;
                else
                    object.Score=options.longs === String ? $util.Long.prototype.toString.call(message.Score) : options.longs === Number ? new $util.LongBits(message.Score.low >>> 0, message.Score.high >>> 0).toNumber() : message.Score;
            return object;
        };

        /**
         * Converts this UserLuckScore to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.UserLuckScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLuckScore.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLuckScore;
    })();

    GameMsg_DCZZ.UserLuckScoreRet=(function () {

        /**
         * Properties of a UserLuckScoreRet.
         * @memberof GameMsg_DCZZ
         * @interface IUserLuckScoreRet
         * @property {number} UserID UserLuckScoreRet UserID
         * @property {string} Value UserLuckScoreRet Value
         */

        /**
         * Constructs a new UserLuckScoreRet.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a UserLuckScoreRet.
         * @implements IUserLuckScoreRet
         * @constructor
         * @param {GameMsg_DCZZ.IUserLuckScoreRet=} [properties] Properties to set
         */
        function UserLuckScoreRet(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * UserLuckScoreRet UserID.
         * @member {number} UserID
         * @memberof GameMsg_DCZZ.UserLuckScoreRet
         * @instance
         */
        UserLuckScoreRet.prototype.UserID=0;

        /**
         * UserLuckScoreRet Value.
         * @member {string} Value
         * @memberof GameMsg_DCZZ.UserLuckScoreRet
         * @instance
         */
        UserLuckScoreRet.prototype.Value="";

        /**
         * Creates a new UserLuckScoreRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.UserLuckScoreRet
         * @static
         * @param {GameMsg_DCZZ.IUserLuckScoreRet=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.UserLuckScoreRet} UserLuckScoreRet instance
         */
        UserLuckScoreRet.create=function create(properties) {
            return new UserLuckScoreRet(properties);
        };

        /**
         * Encodes the specified UserLuckScoreRet message. Does not implicitly {@link GameMsg_DCZZ.UserLuckScoreRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.UserLuckScoreRet
         * @static
         * @param {GameMsg_DCZZ.IUserLuckScoreRet} message UserLuckScoreRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScoreRet.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Value);
            return writer;
        };

        /**
         * Encodes the specified UserLuckScoreRet message, length delimited. Does not implicitly {@link GameMsg_DCZZ.UserLuckScoreRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.UserLuckScoreRet
         * @static
         * @param {GameMsg_DCZZ.IUserLuckScoreRet} message UserLuckScoreRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScoreRet.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLuckScoreRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.UserLuckScoreRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.UserLuckScoreRet} UserLuckScoreRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScoreRet.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.UserLuckScoreRet();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.Value=reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            if (!message.hasOwnProperty("Value"))
                throw $util.ProtocolError("missing required 'Value'", { instance : message });
            return message;
        };

        /**
         * Decodes a UserLuckScoreRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.UserLuckScoreRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.UserLuckScoreRet} UserLuckScoreRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScoreRet.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLuckScoreRet message.
         * @function verify
         * @memberof GameMsg_DCZZ.UserLuckScoreRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLuckScoreRet.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isString(message.Value))
                return "Value: string expected";
            return null;
        };

        /**
         * Creates a UserLuckScoreRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.UserLuckScoreRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.UserLuckScoreRet} UserLuckScoreRet
         */
        UserLuckScoreRet.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.UserLuckScoreRet)
                return object;
            var message=new $root.GameMsg_DCZZ.UserLuckScoreRet();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.Value != null)
                message.Value=String(object.Value);
            return message;
        };

        /**
         * Creates a plain object from a UserLuckScoreRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.UserLuckScoreRet
         * @static
         * @param {GameMsg_DCZZ.UserLuckScoreRet} message UserLuckScoreRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLuckScoreRet.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.UserID=0;
                object.Value="";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.Value != null && message.hasOwnProperty("Value"))
                object.Value=message.Value;
            return object;
        };

        /**
         * Converts this UserLuckScoreRet to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.UserLuckScoreRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLuckScoreRet.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLuckScoreRet;
    })();

    GameMsg_DCZZ.GameBeginCountDown=(function () {

        /**
         * Properties of a GameBeginCountDown.
         * @memberof GameMsg_DCZZ
         * @interface IGameBeginCountDown
         * @property {number} Time GameBeginCountDown Time
         */

        /**
         * Constructs a new GameBeginCountDown.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a GameBeginCountDown.
         * @implements IGameBeginCountDown
         * @constructor
         * @param {GameMsg_DCZZ.IGameBeginCountDown=} [properties] Properties to set
         */
        function GameBeginCountDown(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * GameBeginCountDown Time.
         * @member {number} Time
         * @memberof GameMsg_DCZZ.GameBeginCountDown
         * @instance
         */
        GameBeginCountDown.prototype.Time=0;

        /**
         * Creates a new GameBeginCountDown instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.GameBeginCountDown
         * @static
         * @param {GameMsg_DCZZ.IGameBeginCountDown=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.GameBeginCountDown} GameBeginCountDown instance
         */
        GameBeginCountDown.create=function create(properties) {
            return new GameBeginCountDown(properties);
        };

        /**
         * Encodes the specified GameBeginCountDown message. Does not implicitly {@link GameMsg_DCZZ.GameBeginCountDown.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.GameBeginCountDown
         * @static
         * @param {GameMsg_DCZZ.IGameBeginCountDown} message GameBeginCountDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBeginCountDown.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Time);
            return writer;
        };

        /**
         * Encodes the specified GameBeginCountDown message, length delimited. Does not implicitly {@link GameMsg_DCZZ.GameBeginCountDown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.GameBeginCountDown
         * @static
         * @param {GameMsg_DCZZ.IGameBeginCountDown} message GameBeginCountDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBeginCountDown.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameBeginCountDown message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.GameBeginCountDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.GameBeginCountDown} GameBeginCountDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBeginCountDown.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.GameBeginCountDown();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.Time=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("Time"))
                throw $util.ProtocolError("missing required 'Time'", { instance : message });
            return message;
        };

        /**
         * Decodes a GameBeginCountDown message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.GameBeginCountDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.GameBeginCountDown} GameBeginCountDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBeginCountDown.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameBeginCountDown message.
         * @function verify
         * @memberof GameMsg_DCZZ.GameBeginCountDown
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameBeginCountDown.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Time))
                return "Time: integer expected";
            return null;
        };

        /**
         * Creates a GameBeginCountDown message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.GameBeginCountDown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.GameBeginCountDown} GameBeginCountDown
         */
        GameBeginCountDown.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.GameBeginCountDown)
                return object;
            var message=new $root.GameMsg_DCZZ.GameBeginCountDown();
            if (object.Time != null)
                message.Time=object.Time | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameBeginCountDown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.GameBeginCountDown
         * @static
         * @param {GameMsg_DCZZ.GameBeginCountDown} message GameBeginCountDown
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameBeginCountDown.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults)
                object.Time=0;
            if (message.Time != null && message.hasOwnProperty("Time"))
                object.Time=message.Time;
            return object;
        };

        /**
         * Converts this GameBeginCountDown to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.GameBeginCountDown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameBeginCountDown.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBeginCountDown;
    })();

    GameMsg_DCZZ.SuperToolAddChangeLog=(function () {

        /**
         * Properties of a SuperToolAddChangeLog.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolAddChangeLog
         * @property {number} GameID SuperToolAddChangeLog GameID
         * @property {number} TableNo SuperToolAddChangeLog TableNo
         * @property {number} Type SuperToolAddChangeLog Type
         * @property {string} Result SuperToolAddChangeLog Result
         * @property {string} Operator SuperToolAddChangeLog Operator
         */

        /**
         * Constructs a new SuperToolAddChangeLog.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolAddChangeLog.
         * @implements ISuperToolAddChangeLog
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolAddChangeLog=} [properties] Properties to set
         */
        function SuperToolAddChangeLog(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolAddChangeLog GameID.
         * @member {number} GameID
         * @memberof GameMsg_DCZZ.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.GameID=0;

        /**
         * SuperToolAddChangeLog TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_DCZZ.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.TableNo=0;

        /**
         * SuperToolAddChangeLog Type.
         * @member {number} Type
         * @memberof GameMsg_DCZZ.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Type=0;

        /**
         * SuperToolAddChangeLog Result.
         * @member {string} Result
         * @memberof GameMsg_DCZZ.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Result="";

        /**
         * SuperToolAddChangeLog Operator.
         * @member {string} Operator
         * @memberof GameMsg_DCZZ.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Operator="";

        /**
         * Creates a new SuperToolAddChangeLog instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolAddChangeLog
         * @static
         * @param {GameMsg_DCZZ.ISuperToolAddChangeLog=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolAddChangeLog} SuperToolAddChangeLog instance
         */
        SuperToolAddChangeLog.create=function create(properties) {
            return new SuperToolAddChangeLog(properties);
        };

        /**
         * Encodes the specified SuperToolAddChangeLog message. Does not implicitly {@link GameMsg_DCZZ.SuperToolAddChangeLog.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolAddChangeLog
         * @static
         * @param {GameMsg_DCZZ.ISuperToolAddChangeLog} message SuperToolAddChangeLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddChangeLog.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Type);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.Result);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.Operator);
            return writer;
        };

        /**
         * Encodes the specified SuperToolAddChangeLog message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolAddChangeLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolAddChangeLog
         * @static
         * @param {GameMsg_DCZZ.ISuperToolAddChangeLog} message SuperToolAddChangeLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddChangeLog.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddChangeLog message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolAddChangeLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolAddChangeLog} SuperToolAddChangeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddChangeLog.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolAddChangeLog();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.GameID=reader.int32();
                        break;
                    case 3:
                        message.TableNo=reader.int32();
                        break;
                    case 4:
                        message.Type=reader.int32();
                        break;
                    case 5:
                        message.Result=reader.string();
                        break;
                    case 6:
                        message.Operator=reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance : message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance : message });
            if (!message.hasOwnProperty("Type"))
                throw $util.ProtocolError("missing required 'Type'", { instance : message });
            if (!message.hasOwnProperty("Result"))
                throw $util.ProtocolError("missing required 'Result'", { instance : message });
            if (!message.hasOwnProperty("Operator"))
                throw $util.ProtocolError("missing required 'Operator'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperToolAddChangeLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolAddChangeLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolAddChangeLog} SuperToolAddChangeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddChangeLog.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolAddChangeLog message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolAddChangeLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAddChangeLog.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            if (!$util.isInteger(message.Type))
                return "Type: integer expected";
            if (!$util.isString(message.Result))
                return "Result: string expected";
            if (!$util.isString(message.Operator))
                return "Operator: string expected";
            return null;
        };

        /**
         * Creates a SuperToolAddChangeLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolAddChangeLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolAddChangeLog} SuperToolAddChangeLog
         */
        SuperToolAddChangeLog.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolAddChangeLog)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolAddChangeLog();
            if (object.GameID != null)
                message.GameID=object.GameID | 0;
            if (object.TableNo != null)
                message.TableNo=object.TableNo | 0;
            if (object.Type != null)
                message.Type=object.Type | 0;
            if (object.Result != null)
                message.Result=String(object.Result);
            if (object.Operator != null)
                message.Operator=String(object.Operator);
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAddChangeLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolAddChangeLog
         * @static
         * @param {GameMsg_DCZZ.SuperToolAddChangeLog} message SuperToolAddChangeLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolAddChangeLog.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.GameID=0;
                object.TableNo=0;
                object.Type=0;
                object.Result="";
                object.Operator="";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID=message.GameID;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo=message.TableNo;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type=message.Type;
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result=message.Result;
            if (message.Operator != null && message.hasOwnProperty("Operator"))
                object.Operator=message.Operator;
            return object;
        };

        /**
         * Converts this SuperToolAddChangeLog to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolAddChangeLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddChangeLog.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddChangeLog;
    })();

    GameMsg_DCZZ.SuperToolAddAssignReward=(function () {

        /**
         * Properties of a SuperToolAddAssignReward.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolAddAssignReward
         * @property {number} GameID SuperToolAddAssignReward GameID
         * @property {number} FlagID SuperToolAddAssignReward FlagID
         * @property {number} TableNo SuperToolAddAssignReward TableNo
         * @property {string} Result SuperToolAddAssignReward Result
         * @property {string} Operator SuperToolAddAssignReward Operator
         * @property {Array.<GameMsg_DCZZ.ISuperToolAddAssignRewardDetail>|null} [DetailList] SuperToolAddAssignReward DetailList
         */

        /**
         * Constructs a new SuperToolAddAssignReward.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolAddAssignReward.
         * @implements ISuperToolAddAssignReward
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolAddAssignReward=} [properties] Properties to set
         */
        function SuperToolAddAssignReward(properties) {
            this.DetailList=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolAddAssignReward GameID.
         * @member {number} GameID
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.GameID=0;

        /**
         * SuperToolAddAssignReward FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.FlagID=0;

        /**
         * SuperToolAddAssignReward TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.TableNo=0;

        /**
         * SuperToolAddAssignReward Result.
         * @member {string} Result
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.Result="";

        /**
         * SuperToolAddAssignReward Operator.
         * @member {string} Operator
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.Operator="";

        /**
         * SuperToolAddAssignReward DetailList.
         * @member {Array.<GameMsg_DCZZ.ISuperToolAddAssignRewardDetail>} DetailList
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.DetailList=$util.emptyArray;

        /**
         * Creates a new SuperToolAddAssignReward instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @static
         * @param {GameMsg_DCZZ.ISuperToolAddAssignReward=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolAddAssignReward} SuperToolAddAssignReward instance
         */
        SuperToolAddAssignReward.create=function create(properties) {
            return new SuperToolAddAssignReward(properties);
        };

        /**
         * Encodes the specified SuperToolAddAssignReward message. Does not implicitly {@link GameMsg_DCZZ.SuperToolAddAssignReward.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @static
         * @param {GameMsg_DCZZ.ISuperToolAddAssignReward} message SuperToolAddAssignReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignReward.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Result);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.Operator);
            if (message.DetailList != null && message.DetailList.length)
                for (var i=0; i<message.DetailList.length; ++ i)
                    $root.GameMsg_DCZZ.SuperToolAddAssignRewardDetail.encode(message.DetailList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolAddAssignReward message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolAddAssignReward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @static
         * @param {GameMsg_DCZZ.ISuperToolAddAssignReward} message SuperToolAddAssignReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignReward.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddAssignReward message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolAddAssignReward} SuperToolAddAssignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignReward.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolAddAssignReward();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.GameID=reader.int32();
                        break;
                    case 2:
                        message.FlagID=reader.int32();
                        break;
                    case 3:
                        message.TableNo=reader.int32();
                        break;
                    case 4:
                        message.Result=reader.string();
                        break;
                    case 5:
                        message.Operator=reader.string();
                        break;
                    case 6:
                        if (!(message.DetailList && message.DetailList.length))
                            message.DetailList=[];
                        message.DetailList.push($root.GameMsg_DCZZ.SuperToolAddAssignRewardDetail.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance : message });
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance : message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance : message });
            if (!message.hasOwnProperty("Result"))
                throw $util.ProtocolError("missing required 'Result'", { instance : message });
            if (!message.hasOwnProperty("Operator"))
                throw $util.ProtocolError("missing required 'Operator'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperToolAddAssignReward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolAddAssignReward} SuperToolAddAssignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignReward.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolAddAssignReward message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAddAssignReward.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            if (!$util.isString(message.Result))
                return "Result: string expected";
            if (!$util.isString(message.Operator))
                return "Operator: string expected";
            if (message.DetailList != null && message.hasOwnProperty("DetailList")) {
                if (!Array.isArray(message.DetailList))
                    return "DetailList: array expected";
                for (var i=0; i<message.DetailList.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.SuperToolAddAssignRewardDetail.verify(message.DetailList[i]);
                    if (error)
                        return "DetailList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolAddAssignReward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolAddAssignReward} SuperToolAddAssignReward
         */
        SuperToolAddAssignReward.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolAddAssignReward)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolAddAssignReward();
            if (object.GameID != null)
                message.GameID=object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID=object.FlagID | 0;
            if (object.TableNo != null)
                message.TableNo=object.TableNo | 0;
            if (object.Result != null)
                message.Result=String(object.Result);
            if (object.Operator != null)
                message.Operator=String(object.Operator);
            if (object.DetailList) {
                if (!Array.isArray(object.DetailList))
                    throw TypeError(".GameMsg_DCZZ.SuperToolAddAssignReward.DetailList: array expected");
                message.DetailList=[];
                for (var i=0; i<object.DetailList.length; ++ i) {
                    if (typeof object.DetailList[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.SuperToolAddAssignReward.DetailList: object expected");
                    message.DetailList[i]=$root.GameMsg_DCZZ.SuperToolAddAssignRewardDetail.fromObject(object.DetailList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAddAssignReward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @static
         * @param {GameMsg_DCZZ.SuperToolAddAssignReward} message SuperToolAddAssignReward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolAddAssignReward.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.DetailList=[];
            if (options.defaults) {
                object.GameID=0;
                object.FlagID=0;
                object.TableNo=0;
                object.Result="";
                object.Operator="";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID=message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID=message.FlagID;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo=message.TableNo;
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result=message.Result;
            if (message.Operator != null && message.hasOwnProperty("Operator"))
                object.Operator=message.Operator;
            if (message.DetailList && message.DetailList.length) {
                object.DetailList=[];
                for (var j=0; j<message.DetailList.length; ++ j)
                    object.DetailList[j]=$root.GameMsg_DCZZ.SuperToolAddAssignRewardDetail.toObject(message.DetailList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolAddAssignReward to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolAddAssignReward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddAssignReward.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddAssignReward;
    })();

    GameMsg_DCZZ.SuperToolGetAssignRewardDetail=(function () {

        /**
         * Properties of a SuperToolGetAssignRewardDetail.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolGetAssignRewardDetail
         * @property {number} GameID SuperToolGetAssignRewardDetail GameID
         * @property {number} FlagID SuperToolGetAssignRewardDetail FlagID
         * @property {number} TableNo SuperToolGetAssignRewardDetail TableNo
         */

        /**
         * Constructs a new SuperToolGetAssignRewardDetail.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolGetAssignRewardDetail.
         * @implements ISuperToolGetAssignRewardDetail
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolGetAssignRewardDetail=} [properties] Properties to set
         */
        function SuperToolGetAssignRewardDetail(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolGetAssignRewardDetail GameID.
         * @member {number} GameID
         * @memberof GameMsg_DCZZ.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.GameID=0;

        /**
         * SuperToolGetAssignRewardDetail FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_DCZZ.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.FlagID=0;

        /**
         * SuperToolGetAssignRewardDetail TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_DCZZ.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.TableNo=0;

        /**
         * Creates a new SuperToolGetAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolGetAssignRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail instance
         */
        SuperToolGetAssignRewardDetail.create=function create(properties) {
            return new SuperToolGetAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolGetAssignRewardDetail message. Does not implicitly {@link GameMsg_DCZZ.SuperToolGetAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetAssignRewardDetail.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            return writer;
        };

        /**
         * Encodes the specified SuperToolGetAssignRewardDetail message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolGetAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetAssignRewardDetail.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolGetAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolGetAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetAssignRewardDetail.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolGetAssignRewardDetail();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.GameID=reader.int32();
                        break;
                    case 2:
                        message.FlagID=reader.int32();
                        break;
                    case 3:
                        message.TableNo=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance : message });
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance : message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperToolGetAssignRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolGetAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetAssignRewardDetail.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolGetAssignRewardDetail message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolGetAssignRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolGetAssignRewardDetail.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolGetAssignRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolGetAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         */
        SuperToolGetAssignRewardDetail.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolGetAssignRewardDetail)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolGetAssignRewardDetail();
            if (object.GameID != null)
                message.GameID=object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID=object.FlagID | 0;
            if (object.TableNo != null)
                message.TableNo=object.TableNo | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolGetAssignRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg_DCZZ.SuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolGetAssignRewardDetail.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.GameID=0;
                object.FlagID=0;
                object.TableNo=0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID=message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID=message.FlagID;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo=message.TableNo;
            return object;
        };

        /**
         * Converts this SuperToolGetAssignRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolGetAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolGetAssignRewardDetail.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolGetAssignRewardDetail;
    })();

    GameMsg_DCZZ.SuperToolAddAssignRewardDetail=(function () {

        /**
         * Properties of a SuperToolAddAssignRewardDetail.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolAddAssignRewardDetail
         * @property {number} Idx SuperToolAddAssignRewardDetail Idx
         * @property {string} Description SuperToolAddAssignRewardDetail Description
         * @property {string} Reward SuperToolAddAssignRewardDetail Reward
         * @property {number} Status SuperToolAddAssignRewardDetail Status
         */

        /**
         * Constructs a new SuperToolAddAssignRewardDetail.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolAddAssignRewardDetail.
         * @implements ISuperToolAddAssignRewardDetail
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolAddAssignRewardDetail=} [properties] Properties to set
         */
        function SuperToolAddAssignRewardDetail(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolAddAssignRewardDetail Idx.
         * @member {number} Idx
         * @memberof GameMsg_DCZZ.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Idx=0;

        /**
         * SuperToolAddAssignRewardDetail Description.
         * @member {string} Description
         * @memberof GameMsg_DCZZ.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Description="";

        /**
         * SuperToolAddAssignRewardDetail Reward.
         * @member {string} Reward
         * @memberof GameMsg_DCZZ.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Reward="";

        /**
         * SuperToolAddAssignRewardDetail Status.
         * @member {number} Status
         * @memberof GameMsg_DCZZ.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Status=0;

        /**
         * Creates a new SuperToolAddAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolAddAssignRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail instance
         */
        SuperToolAddAssignRewardDetail.create=function create(properties) {
            return new SuperToolAddAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolAddAssignRewardDetail message. Does not implicitly {@link GameMsg_DCZZ.SuperToolAddAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignRewardDetail.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Idx);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Description);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Reward);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified SuperToolAddAssignRewardDetail message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolAddAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignRewardDetail.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolAddAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignRewardDetail.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolAddAssignRewardDetail();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.Idx=reader.int32();
                        break;
                    case 2:
                        message.Description=reader.string();
                        break;
                    case 3:
                        message.Reward=reader.string();
                        break;
                    case 4:
                        message.Status=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("Idx"))
                throw $util.ProtocolError("missing required 'Idx'", { instance : message });
            if (!message.hasOwnProperty("Description"))
                throw $util.ProtocolError("missing required 'Description'", { instance : message });
            if (!message.hasOwnProperty("Reward"))
                throw $util.ProtocolError("missing required 'Reward'", { instance : message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperToolAddAssignRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolAddAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignRewardDetail.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolAddAssignRewardDetail message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolAddAssignRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAddAssignRewardDetail.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Idx))
                return "Idx: integer expected";
            if (!$util.isString(message.Description))
                return "Description: string expected";
            if (!$util.isString(message.Reward))
                return "Reward: string expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolAddAssignRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolAddAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         */
        SuperToolAddAssignRewardDetail.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolAddAssignRewardDetail)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolAddAssignRewardDetail();
            if (object.Idx != null)
                message.Idx=object.Idx | 0;
            if (object.Description != null)
                message.Description=String(object.Description);
            if (object.Reward != null)
                message.Reward=String(object.Reward);
            if (object.Status != null)
                message.Status=object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAddAssignRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg_DCZZ.SuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolAddAssignRewardDetail.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.Idx=0;
                object.Description="";
                object.Reward="";
                object.Status=0;
            }
            if (message.Idx != null && message.hasOwnProperty("Idx"))
                object.Idx=message.Idx;
            if (message.Description != null && message.hasOwnProperty("Description"))
                object.Description=message.Description;
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                object.Reward=message.Reward;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status=message.Status;
            return object;
        };

        /**
         * Converts this SuperToolAddAssignRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolAddAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddAssignRewardDetail.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddAssignRewardDetail;
    })();

    GameMsg_DCZZ.SuperToolAssignRewardDetail=(function () {

        /**
         * Properties of a SuperToolAssignRewardDetail.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolAssignRewardDetail
         * @property {number} LogID SuperToolAssignRewardDetail LogID
         * @property {number} Idx SuperToolAssignRewardDetail Idx
         * @property {string} Description SuperToolAssignRewardDetail Description
         * @property {string} Reward SuperToolAssignRewardDetail Reward
         * @property {number} Status SuperToolAssignRewardDetail Status
         */

        /**
         * Constructs a new SuperToolAssignRewardDetail.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolAssignRewardDetail.
         * @implements ISuperToolAssignRewardDetail
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolAssignRewardDetail=} [properties] Properties to set
         */
        function SuperToolAssignRewardDetail(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolAssignRewardDetail LogID.
         * @member {number} LogID
         * @memberof GameMsg_DCZZ.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.LogID=0;

        /**
         * SuperToolAssignRewardDetail Idx.
         * @member {number} Idx
         * @memberof GameMsg_DCZZ.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Idx=0;

        /**
         * SuperToolAssignRewardDetail Description.
         * @member {string} Description
         * @memberof GameMsg_DCZZ.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Description="";

        /**
         * SuperToolAssignRewardDetail Reward.
         * @member {string} Reward
         * @memberof GameMsg_DCZZ.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Reward="";

        /**
         * SuperToolAssignRewardDetail Status.
         * @member {number} Status
         * @memberof GameMsg_DCZZ.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Status=0;

        /**
         * Creates a new SuperToolAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolAssignRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail instance
         */
        SuperToolAssignRewardDetail.create=function create(properties) {
            return new SuperToolAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolAssignRewardDetail message. Does not implicitly {@link GameMsg_DCZZ.SuperToolAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolAssignRewardDetail} message SuperToolAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAssignRewardDetail.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.LogID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Idx);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Description);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Reward);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified SuperToolAssignRewardDetail message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolAssignRewardDetail} message SuperToolAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAssignRewardDetail.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAssignRewardDetail.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolAssignRewardDetail();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.LogID=reader.int32();
                        break;
                    case 2:
                        message.Idx=reader.int32();
                        break;
                    case 3:
                        message.Description=reader.string();
                        break;
                    case 4:
                        message.Reward=reader.string();
                        break;
                    case 5:
                        message.Status=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("LogID"))
                throw $util.ProtocolError("missing required 'LogID'", { instance : message });
            if (!message.hasOwnProperty("Idx"))
                throw $util.ProtocolError("missing required 'Idx'", { instance : message });
            if (!message.hasOwnProperty("Description"))
                throw $util.ProtocolError("missing required 'Description'", { instance : message });
            if (!message.hasOwnProperty("Reward"))
                throw $util.ProtocolError("missing required 'Reward'", { instance : message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperToolAssignRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAssignRewardDetail.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolAssignRewardDetail message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolAssignRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAssignRewardDetail.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.LogID))
                return "LogID: integer expected";
            if (!$util.isInteger(message.Idx))
                return "Idx: integer expected";
            if (!$util.isString(message.Description))
                return "Description: string expected";
            if (!$util.isString(message.Reward))
                return "Reward: string expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolAssignRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         */
        SuperToolAssignRewardDetail.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolAssignRewardDetail)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolAssignRewardDetail();
            if (object.LogID != null)
                message.LogID=object.LogID | 0;
            if (object.Idx != null)
                message.Idx=object.Idx | 0;
            if (object.Description != null)
                message.Description=String(object.Description);
            if (object.Reward != null)
                message.Reward=String(object.Reward);
            if (object.Status != null)
                message.Status=object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAssignRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg_DCZZ.SuperToolAssignRewardDetail} message SuperToolAssignRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolAssignRewardDetail.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.LogID=0;
                object.Idx=0;
                object.Description="";
                object.Reward="";
                object.Status=0;
            }
            if (message.LogID != null && message.hasOwnProperty("LogID"))
                object.LogID=message.LogID;
            if (message.Idx != null && message.hasOwnProperty("Idx"))
                object.Idx=message.Idx;
            if (message.Description != null && message.hasOwnProperty("Description"))
                object.Description=message.Description;
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                object.Reward=message.Reward;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status=message.Status;
            return object;
        };

        /**
         * Converts this SuperToolAssignRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAssignRewardDetail.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAssignRewardDetail;
    })();

    GameMsg_DCZZ.SuperToolGetVipUserRequest=(function () {

        /**
         * Properties of a SuperToolGetVipUserRequest.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolGetVipUserRequest
         * @property {number} GameID SuperToolGetVipUserRequest GameID
         */

        /**
         * Constructs a new SuperToolGetVipUserRequest.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolGetVipUserRequest.
         * @implements ISuperToolGetVipUserRequest
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolGetVipUserRequest=} [properties] Properties to set
         */
        function SuperToolGetVipUserRequest(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolGetVipUserRequest GameID.
         * @member {number} GameID
         * @memberof GameMsg_DCZZ.SuperToolGetVipUserRequest
         * @instance
         */
        SuperToolGetVipUserRequest.prototype.GameID=0;

        /**
         * Creates a new SuperToolGetVipUserRequest instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg_DCZZ.ISuperToolGetVipUserRequest=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest instance
         */
        SuperToolGetVipUserRequest.create=function create(properties) {
            return new SuperToolGetVipUserRequest(properties);
        };

        /**
         * Encodes the specified SuperToolGetVipUserRequest message. Does not implicitly {@link GameMsg_DCZZ.SuperToolGetVipUserRequest.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg_DCZZ.ISuperToolGetVipUserRequest} message SuperToolGetVipUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetVipUserRequest.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            return writer;
        };

        /**
         * Encodes the specified SuperToolGetVipUserRequest message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolGetVipUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg_DCZZ.ISuperToolGetVipUserRequest} message SuperToolGetVipUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetVipUserRequest.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolGetVipUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolGetVipUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetVipUserRequest.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolGetVipUserRequest();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.GameID=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperToolGetVipUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolGetVipUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetVipUserRequest.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolGetVipUserRequest message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolGetVipUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolGetVipUserRequest.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolGetVipUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolGetVipUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         */
        SuperToolGetVipUserRequest.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolGetVipUserRequest)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolGetVipUserRequest();
            if (object.GameID != null)
                message.GameID=object.GameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolGetVipUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg_DCZZ.SuperToolGetVipUserRequest} message SuperToolGetVipUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolGetVipUserRequest.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults)
                object.GameID=0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID=message.GameID;
            return object;
        };

        /**
         * Converts this SuperToolGetVipUserRequest to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolGetVipUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolGetVipUserRequest.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolGetVipUserRequest;
    })();

    GameMsg_DCZZ.SuperToolVipUserDataList=(function () {

        /**
         * Properties of a SuperToolVipUserDataList.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolVipUserDataList
         * @property {Array.<GameMsg_DCZZ.ISuperToolVipUserData>|null} [DataList] SuperToolVipUserDataList DataList
         */

        /**
         * Constructs a new SuperToolVipUserDataList.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolVipUserDataList.
         * @implements ISuperToolVipUserDataList
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolVipUserDataList=} [properties] Properties to set
         */
        function SuperToolVipUserDataList(properties) {
            this.DataList=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolVipUserDataList DataList.
         * @member {Array.<GameMsg_DCZZ.ISuperToolVipUserData>} DataList
         * @memberof GameMsg_DCZZ.SuperToolVipUserDataList
         * @instance
         */
        SuperToolVipUserDataList.prototype.DataList=$util.emptyArray;

        /**
         * Creates a new SuperToolVipUserDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolVipUserDataList
         * @static
         * @param {GameMsg_DCZZ.ISuperToolVipUserDataList=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolVipUserDataList} SuperToolVipUserDataList instance
         */
        SuperToolVipUserDataList.create=function create(properties) {
            return new SuperToolVipUserDataList(properties);
        };

        /**
         * Encodes the specified SuperToolVipUserDataList message. Does not implicitly {@link GameMsg_DCZZ.SuperToolVipUserDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolVipUserDataList
         * @static
         * @param {GameMsg_DCZZ.ISuperToolVipUserDataList} message SuperToolVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserDataList.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.DataList != null && message.DataList.length)
                for (var i=0; i<message.DataList.length; ++ i)
                    $root.GameMsg_DCZZ.SuperToolVipUserData.encode(message.DataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolVipUserDataList message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolVipUserDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolVipUserDataList
         * @static
         * @param {GameMsg_DCZZ.ISuperToolVipUserDataList} message SuperToolVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserDataList.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolVipUserDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolVipUserDataList} SuperToolVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserDataList.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolVipUserDataList();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.DataList && message.DataList.length))
                            message.DataList=[];
                        message.DataList.push($root.GameMsg_DCZZ.SuperToolVipUserData.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_DCZZ.SuperToolVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolVipUserDataList} SuperToolVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserDataList.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolVipUserDataList message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolVipUserDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolVipUserDataList.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DataList != null && message.hasOwnProperty("DataList")) {
                if (!Array.isArray(message.DataList))
                    return "DataList: array expected";
                for (var i=0; i<message.DataList.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.SuperToolVipUserData.verify(message.DataList[i]);
                    if (error)
                        return "DataList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolVipUserDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolVipUserDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolVipUserDataList} SuperToolVipUserDataList
         */
        SuperToolVipUserDataList.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolVipUserDataList)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolVipUserDataList();
            if (object.DataList) {
                if (!Array.isArray(object.DataList))
                    throw TypeError(".GameMsg_DCZZ.SuperToolVipUserDataList.DataList: array expected");
                message.DataList=[];
                for (var i=0; i<object.DataList.length; ++ i) {
                    if (typeof object.DataList[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.SuperToolVipUserDataList.DataList: object expected");
                    message.DataList[i]=$root.GameMsg_DCZZ.SuperToolVipUserData.fromObject(object.DataList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolVipUserDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolVipUserDataList
         * @static
         * @param {GameMsg_DCZZ.SuperToolVipUserDataList} message SuperToolVipUserDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolVipUserDataList.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.DataList=[];
            if (message.DataList && message.DataList.length) {
                object.DataList=[];
                for (var j=0; j<message.DataList.length; ++ j)
                    object.DataList[j]=$root.GameMsg_DCZZ.SuperToolVipUserData.toObject(message.DataList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolVipUserDataList to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolVipUserDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolVipUserDataList.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolVipUserDataList;
    })();

    GameMsg_DCZZ.SuperToolVipUserData=(function () {

        /**
         * Properties of a SuperToolVipUserData.
         * @memberof GameMsg_DCZZ
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
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolVipUserData.
         * @implements ISuperToolVipUserData
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolVipUserData=} [properties] Properties to set
         */
        function SuperToolVipUserData(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolVipUserData UserID.
         * @member {number} UserID
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.UserID=0;

        /**
         * SuperToolVipUserData AssignAmount.
         * @member {number|Long} AssignAmount
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.AssignAmount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperToolVipUserData AssignRate.
         * @member {number} AssignRate
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.AssignRate=0;

        /**
         * SuperToolVipUserData CompleteAmount.
         * @member {number|Long} CompleteAmount
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.CompleteAmount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperToolVipUserData Complete.
         * @member {number} Complete
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.Complete=0;

        /**
         * SuperToolVipUserData Status.
         * @member {number} Status
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.Status=0;

        /**
         * SuperToolVipUserData TotalAll.
         * @member {number} TotalAll
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TotalAll=0;

        /**
         * SuperToolVipUserData TotalUserWinLose.
         * @member {number} TotalUserWinLose
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TotalUserWinLose=0;

        /**
         * SuperToolVipUserData TodayUserWinLose.
         * @member {number} TodayUserWinLose
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TodayUserWinLose=0;

        /**
         * Creates a new SuperToolVipUserData instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @static
         * @param {GameMsg_DCZZ.ISuperToolVipUserData=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolVipUserData} SuperToolVipUserData instance
         */
        SuperToolVipUserData.create=function create(properties) {
            return new SuperToolVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolVipUserData message. Does not implicitly {@link GameMsg_DCZZ.SuperToolVipUserData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @static
         * @param {GameMsg_DCZZ.ISuperToolVipUserData} message SuperToolVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserData.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
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
         * Encodes the specified SuperToolVipUserData message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @static
         * @param {GameMsg_DCZZ.ISuperToolVipUserData} message SuperToolVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserData.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolVipUserData} SuperToolVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserData.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolVipUserData();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.AssignAmount=reader.int64();
                        break;
                    case 3:
                        message.AssignRate=reader.int32();
                        break;
                    case 4:
                        message.CompleteAmount=reader.int64();
                        break;
                    case 5:
                        message.Complete=reader.int32();
                        break;
                    case 6:
                        message.Status=reader.int32();
                        break;
                    case 7:
                        message.TotalAll=reader.int32();
                        break;
                    case 8:
                        message.TotalUserWinLose=reader.int32();
                        break;
                    case 9:
                        message.TodayUserWinLose=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            if (!message.hasOwnProperty("AssignAmount"))
                throw $util.ProtocolError("missing required 'AssignAmount'", { instance : message });
            if (!message.hasOwnProperty("AssignRate"))
                throw $util.ProtocolError("missing required 'AssignRate'", { instance : message });
            if (!message.hasOwnProperty("CompleteAmount"))
                throw $util.ProtocolError("missing required 'CompleteAmount'", { instance : message });
            if (!message.hasOwnProperty("Complete"))
                throw $util.ProtocolError("missing required 'Complete'", { instance : message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance : message });
            if (!message.hasOwnProperty("TotalAll"))
                throw $util.ProtocolError("missing required 'TotalAll'", { instance : message });
            if (!message.hasOwnProperty("TotalUserWinLose"))
                throw $util.ProtocolError("missing required 'TotalUserWinLose'", { instance : message });
            if (!message.hasOwnProperty("TodayUserWinLose"))
                throw $util.ProtocolError("missing required 'TodayUserWinLose'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperToolVipUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolVipUserData} SuperToolVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserData.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolVipUserData message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolVipUserData.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.AssignAmount) && !(message.AssignAmount && $util.isInteger(message.AssignAmount.low) && $util.isInteger(message.AssignAmount.high)))
                return "AssignAmount: integer|Long expected";
            if (!$util.isInteger(message.AssignRate))
                return "AssignRate: integer expected";
            if (!$util.isInteger(message.CompleteAmount) && !(message.CompleteAmount && $util.isInteger(message.CompleteAmount.low) && $util.isInteger(message.CompleteAmount.high)))
                return "CompleteAmount: integer|Long expected";
            if (!$util.isInteger(message.Complete))
                return "Complete: integer expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            if (!$util.isInteger(message.TotalAll))
                return "TotalAll: integer expected";
            if (!$util.isInteger(message.TotalUserWinLose))
                return "TotalUserWinLose: integer expected";
            if (!$util.isInteger(message.TodayUserWinLose))
                return "TodayUserWinLose: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolVipUserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolVipUserData} SuperToolVipUserData
         */
        SuperToolVipUserData.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolVipUserData)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolVipUserData();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.AssignAmount != null)
                if ($util.Long)
                    (message.AssignAmount=$util.Long.fromValue(object.AssignAmount)).unsigned=false;
                else if (typeof object.AssignAmount === "string")
                    message.AssignAmount=parseInt(object.AssignAmount, 10);
                else if (typeof object.AssignAmount === "number")
                    message.AssignAmount=object.AssignAmount;
                else if (typeof object.AssignAmount === "object")
                    message.AssignAmount=new $util.LongBits(object.AssignAmount.low >>> 0, object.AssignAmount.high >>> 0).toNumber();
            if (object.AssignRate != null)
                message.AssignRate=object.AssignRate | 0;
            if (object.CompleteAmount != null)
                if ($util.Long)
                    (message.CompleteAmount=$util.Long.fromValue(object.CompleteAmount)).unsigned=false;
                else if (typeof object.CompleteAmount === "string")
                    message.CompleteAmount=parseInt(object.CompleteAmount, 10);
                else if (typeof object.CompleteAmount === "number")
                    message.CompleteAmount=object.CompleteAmount;
                else if (typeof object.CompleteAmount === "object")
                    message.CompleteAmount=new $util.LongBits(object.CompleteAmount.low >>> 0, object.CompleteAmount.high >>> 0).toNumber();
            if (object.Complete != null)
                message.Complete=object.Complete | 0;
            if (object.Status != null)
                message.Status=object.Status | 0;
            if (object.TotalAll != null)
                message.TotalAll=object.TotalAll | 0;
            if (object.TotalUserWinLose != null)
                message.TotalUserWinLose=object.TotalUserWinLose | 0;
            if (object.TodayUserWinLose != null)
                message.TodayUserWinLose=object.TodayUserWinLose | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolVipUserData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @static
         * @param {GameMsg_DCZZ.SuperToolVipUserData} message SuperToolVipUserData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolVipUserData.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.UserID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.AssignAmount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AssignAmount=options.longs === String ? "0" : 0;
                object.AssignRate=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.CompleteAmount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CompleteAmount=options.longs === String ? "0" : 0;
                object.Complete=0;
                object.Status=0;
                object.TotalAll=0;
                object.TotalUserWinLose=0;
                object.TodayUserWinLose=0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.AssignAmount != null && message.hasOwnProperty("AssignAmount"))
                if (typeof message.AssignAmount === "number")
                    object.AssignAmount=options.longs === String ? String(message.AssignAmount) : message.AssignAmount;
                else
                    object.AssignAmount=options.longs === String ? $util.Long.prototype.toString.call(message.AssignAmount) : options.longs === Number ? new $util.LongBits(message.AssignAmount.low >>> 0, message.AssignAmount.high >>> 0).toNumber() : message.AssignAmount;
            if (message.AssignRate != null && message.hasOwnProperty("AssignRate"))
                object.AssignRate=message.AssignRate;
            if (message.CompleteAmount != null && message.hasOwnProperty("CompleteAmount"))
                if (typeof message.CompleteAmount === "number")
                    object.CompleteAmount=options.longs === String ? String(message.CompleteAmount) : message.CompleteAmount;
                else
                    object.CompleteAmount=options.longs === String ? $util.Long.prototype.toString.call(message.CompleteAmount) : options.longs === Number ? new $util.LongBits(message.CompleteAmount.low >>> 0, message.CompleteAmount.high >>> 0).toNumber() : message.CompleteAmount;
            if (message.Complete != null && message.hasOwnProperty("Complete"))
                object.Complete=message.Complete;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status=message.Status;
            if (message.TotalAll != null && message.hasOwnProperty("TotalAll"))
                object.TotalAll=message.TotalAll;
            if (message.TotalUserWinLose != null && message.hasOwnProperty("TotalUserWinLose"))
                object.TotalUserWinLose=message.TotalUserWinLose;
            if (message.TodayUserWinLose != null && message.hasOwnProperty("TodayUserWinLose"))
                object.TodayUserWinLose=message.TodayUserWinLose;
            return object;
        };

        /**
         * Converts this SuperToolVipUserData to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolVipUserData.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolVipUserData;
    })();

    GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail=(function () {

        /**
         * Properties of a SuperToolFishGetSystemRewardDetail.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolFishGetSystemRewardDetail
         * @property {Array.<GameMsg_DCZZ.IFishSystemRewardDataList>|null} [FishRewardList] SuperToolFishGetSystemRewardDetail FishRewardList
         */

        /**
         * Constructs a new SuperToolFishGetSystemRewardDetail.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolFishGetSystemRewardDetail.
         * @implements ISuperToolFishGetSystemRewardDetail
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolFishGetSystemRewardDetail=} [properties] Properties to set
         */
        function SuperToolFishGetSystemRewardDetail(properties) {
            this.FishRewardList=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolFishGetSystemRewardDetail FishRewardList.
         * @member {Array.<GameMsg_DCZZ.IFishSystemRewardDataList>} FishRewardList
         * @memberof GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail
         * @instance
         */
        SuperToolFishGetSystemRewardDetail.prototype.FishRewardList=$util.emptyArray;

        /**
         * Creates a new SuperToolFishGetSystemRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishGetSystemRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail instance
         */
        SuperToolFishGetSystemRewardDetail.create=function create(properties) {
            return new SuperToolFishGetSystemRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishGetSystemRewardDetail message. Does not implicitly {@link GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetSystemRewardDetail.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i=0; i<message.FishRewardList.length; ++ i)
                    $root.GameMsg_DCZZ.FishSystemRewardDataList.encode(message.FishRewardList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishGetSystemRewardDetail message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetSystemRewardDetail.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishGetSystemRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetSystemRewardDetail.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.FishRewardList && message.FishRewardList.length))
                            message.FishRewardList=[];
                        message.FishRewardList.push($root.GameMsg_DCZZ.FishSystemRewardDataList.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetSystemRewardDetail.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishGetSystemRewardDetail message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishGetSystemRewardDetail.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FishRewardList != null && message.hasOwnProperty("FishRewardList")) {
                if (!Array.isArray(message.FishRewardList))
                    return "FishRewardList: array expected";
                for (var i=0; i<message.FishRewardList.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.FishSystemRewardDataList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishGetSystemRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         */
        SuperToolFishGetSystemRewardDetail.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail();
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail.FishRewardList: array expected");
                message.FishRewardList=[];
                for (var i=0; i<object.FishRewardList.length; ++ i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail.FishRewardList: object expected");
                    message.FishRewardList[i]=$root.GameMsg_DCZZ.FishSystemRewardDataList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishGetSystemRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishGetSystemRewardDetail.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.FishRewardList=[];
            if (message.FishRewardList && message.FishRewardList.length) {
                object.FishRewardList=[];
                for (var j=0; j<message.FishRewardList.length; ++ j)
                    object.FishRewardList[j]=$root.GameMsg_DCZZ.FishSystemRewardDataList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishGetSystemRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolFishGetSystemRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishGetSystemRewardDetail.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishGetSystemRewardDetail;
    })();

    GameMsg_DCZZ.FishSystemRewardDataList=(function () {

        /**
         * Properties of a FishSystemRewardDataList.
         * @memberof GameMsg_DCZZ
         * @interface IFishSystemRewardDataList
         * @property {number} FishID FishSystemRewardDataList FishID
         * @property {number|Long} Amount FishSystemRewardDataList Amount
         * @property {number|Long} FinishAmount FishSystemRewardDataList FinishAmount
         * @property {number} Rate FishSystemRewardDataList Rate
         * @property {number} Status FishSystemRewardDataList Status
         */

        /**
         * Constructs a new FishSystemRewardDataList.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a FishSystemRewardDataList.
         * @implements IFishSystemRewardDataList
         * @constructor
         * @param {GameMsg_DCZZ.IFishSystemRewardDataList=} [properties] Properties to set
         */
        function FishSystemRewardDataList(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FishSystemRewardDataList FishID.
         * @member {number} FishID
         * @memberof GameMsg_DCZZ.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.FishID=0;

        /**
         * FishSystemRewardDataList Amount.
         * @member {number|Long} Amount
         * @memberof GameMsg_DCZZ.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Amount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FishSystemRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg_DCZZ.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.FinishAmount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FishSystemRewardDataList Rate.
         * @member {number} Rate
         * @memberof GameMsg_DCZZ.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Rate=0;

        /**
         * FishSystemRewardDataList Status.
         * @member {number} Status
         * @memberof GameMsg_DCZZ.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Status=0;

        /**
         * Creates a new FishSystemRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.FishSystemRewardDataList
         * @static
         * @param {GameMsg_DCZZ.IFishSystemRewardDataList=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.FishSystemRewardDataList} FishSystemRewardDataList instance
         */
        FishSystemRewardDataList.create=function create(properties) {
            return new FishSystemRewardDataList(properties);
        };

        /**
         * Encodes the specified FishSystemRewardDataList message. Does not implicitly {@link GameMsg_DCZZ.FishSystemRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.FishSystemRewardDataList
         * @static
         * @param {GameMsg_DCZZ.IFishSystemRewardDataList} message FishSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSystemRewardDataList.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FishID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Amount);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.FinishAmount);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Rate);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified FishSystemRewardDataList message, length delimited. Does not implicitly {@link GameMsg_DCZZ.FishSystemRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.FishSystemRewardDataList
         * @static
         * @param {GameMsg_DCZZ.IFishSystemRewardDataList} message FishSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSystemRewardDataList.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishSystemRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.FishSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.FishSystemRewardDataList} FishSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSystemRewardDataList.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.FishSystemRewardDataList();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.FishID=reader.int32();
                        break;
                    case 2:
                        message.Amount=reader.int64();
                        break;
                    case 3:
                        message.FinishAmount=reader.int64();
                        break;
                    case 4:
                        message.Rate=reader.int32();
                        break;
                    case 5:
                        message.Status=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("FishID"))
                throw $util.ProtocolError("missing required 'FishID'", { instance : message });
            if (!message.hasOwnProperty("Amount"))
                throw $util.ProtocolError("missing required 'Amount'", { instance : message });
            if (!message.hasOwnProperty("FinishAmount"))
                throw $util.ProtocolError("missing required 'FinishAmount'", { instance : message });
            if (!message.hasOwnProperty("Rate"))
                throw $util.ProtocolError("missing required 'Rate'", { instance : message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance : message });
            return message;
        };

        /**
         * Decodes a FishSystemRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.FishSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.FishSystemRewardDataList} FishSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSystemRewardDataList.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishSystemRewardDataList message.
         * @function verify
         * @memberof GameMsg_DCZZ.FishSystemRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishSystemRewardDataList.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FishID))
                return "FishID: integer expected";
            if (!$util.isInteger(message.Amount) && !(message.Amount && $util.isInteger(message.Amount.low) && $util.isInteger(message.Amount.high)))
                return "Amount: integer|Long expected";
            if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                return "FinishAmount: integer|Long expected";
            if (!$util.isInteger(message.Rate))
                return "Rate: integer expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            return null;
        };

        /**
         * Creates a FishSystemRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.FishSystemRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.FishSystemRewardDataList} FishSystemRewardDataList
         */
        FishSystemRewardDataList.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.FishSystemRewardDataList)
                return object;
            var message=new $root.GameMsg_DCZZ.FishSystemRewardDataList();
            if (object.FishID != null)
                message.FishID=object.FishID | 0;
            if (object.Amount != null)
                if ($util.Long)
                    (message.Amount=$util.Long.fromValue(object.Amount)).unsigned=false;
                else if (typeof object.Amount === "string")
                    message.Amount=parseInt(object.Amount, 10);
                else if (typeof object.Amount === "number")
                    message.Amount=object.Amount;
                else if (typeof object.Amount === "object")
                    message.Amount=new $util.LongBits(object.Amount.low >>> 0, object.Amount.high >>> 0).toNumber();
            if (object.FinishAmount != null)
                if ($util.Long)
                    (message.FinishAmount=$util.Long.fromValue(object.FinishAmount)).unsigned=false;
                else if (typeof object.FinishAmount === "string")
                    message.FinishAmount=parseInt(object.FinishAmount, 10);
                else if (typeof object.FinishAmount === "number")
                    message.FinishAmount=object.FinishAmount;
                else if (typeof object.FinishAmount === "object")
                    message.FinishAmount=new $util.LongBits(object.FinishAmount.low >>> 0, object.FinishAmount.high >>> 0).toNumber();
            if (object.Rate != null)
                message.Rate=object.Rate | 0;
            if (object.Status != null)
                message.Status=object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from a FishSystemRewardDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.FishSystemRewardDataList
         * @static
         * @param {GameMsg_DCZZ.FishSystemRewardDataList} message FishSystemRewardDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishSystemRewardDataList.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.FishID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Amount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Amount=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.FinishAmount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishAmount=options.longs === String ? "0" : 0;
                object.Rate=0;
                object.Status=0;
            }
            if (message.FishID != null && message.hasOwnProperty("FishID"))
                object.FishID=message.FishID;
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (typeof message.Amount === "number")
                    object.Amount=options.longs === String ? String(message.Amount) : message.Amount;
                else
                    object.Amount=options.longs === String ? $util.Long.prototype.toString.call(message.Amount) : options.longs === Number ? new $util.LongBits(message.Amount.low >>> 0, message.Amount.high >>> 0).toNumber() : message.Amount;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount=options.longs === String ? String(message.FinishAmount) : message.FinishAmount;
                else
                    object.FinishAmount=options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) : options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() : message.FinishAmount;
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                object.Rate=message.Rate;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status=message.Status;
            return object;
        };

        /**
         * Converts this FishSystemRewardDataList to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.FishSystemRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishSystemRewardDataList.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishSystemRewardDataList;
    })();

    GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail=(function () {

        /**
         * Properties of a SuperToolFishGetVIPUserRewardDetail.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolFishGetVIPUserRewardDetail
         * @property {Array.<GameMsg_DCZZ.IFishVIPUserRewardDataList>|null} [FishVIPUserList] SuperToolFishGetVIPUserRewardDetail FishVIPUserList
         */

        /**
         * Constructs a new SuperToolFishGetVIPUserRewardDetail.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolFishGetVIPUserRewardDetail.
         * @implements ISuperToolFishGetVIPUserRewardDetail
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolFishGetVIPUserRewardDetail=} [properties] Properties to set
         */
        function SuperToolFishGetVIPUserRewardDetail(properties) {
            this.FishVIPUserList=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolFishGetVIPUserRewardDetail FishVIPUserList.
         * @member {Array.<GameMsg_DCZZ.IFishVIPUserRewardDataList>} FishVIPUserList
         * @memberof GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail
         * @instance
         */
        SuperToolFishGetVIPUserRewardDetail.prototype.FishVIPUserList=$util.emptyArray;

        /**
         * Creates a new SuperToolFishGetVIPUserRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishGetVIPUserRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail instance
         */
        SuperToolFishGetVIPUserRewardDetail.create=function create(properties) {
            return new SuperToolFishGetVIPUserRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishGetVIPUserRewardDetail message. Does not implicitly {@link GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetVIPUserRewardDetail.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.FishVIPUserList != null && message.FishVIPUserList.length)
                for (var i=0; i<message.FishVIPUserList.length; ++ i)
                    $root.GameMsg_DCZZ.FishVIPUserRewardDataList.encode(message.FishVIPUserList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishGetVIPUserRewardDetail message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetVIPUserRewardDetail.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishGetVIPUserRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetVIPUserRewardDetail.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.FishVIPUserList && message.FishVIPUserList.length))
                            message.FishVIPUserList=[];
                        message.FishVIPUserList.push($root.GameMsg_DCZZ.FishVIPUserRewardDataList.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetVIPUserRewardDetail.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishGetVIPUserRewardDetail message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishGetVIPUserRewardDetail.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FishVIPUserList != null && message.hasOwnProperty("FishVIPUserList")) {
                if (!Array.isArray(message.FishVIPUserList))
                    return "FishVIPUserList: array expected";
                for (var i=0; i<message.FishVIPUserList.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.FishVIPUserRewardDataList.verify(message.FishVIPUserList[i]);
                    if (error)
                        return "FishVIPUserList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishGetVIPUserRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         */
        SuperToolFishGetVIPUserRewardDetail.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail();
            if (object.FishVIPUserList) {
                if (!Array.isArray(object.FishVIPUserList))
                    throw TypeError(".GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail.FishVIPUserList: array expected");
                message.FishVIPUserList=[];
                for (var i=0; i<object.FishVIPUserList.length; ++ i) {
                    if (typeof object.FishVIPUserList[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail.FishVIPUserList: object expected");
                    message.FishVIPUserList[i]=$root.GameMsg_DCZZ.FishVIPUserRewardDataList.fromObject(object.FishVIPUserList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishGetVIPUserRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishGetVIPUserRewardDetail.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.FishVIPUserList=[];
            if (message.FishVIPUserList && message.FishVIPUserList.length) {
                object.FishVIPUserList=[];
                for (var j=0; j<message.FishVIPUserList.length; ++ j)
                    object.FishVIPUserList[j]=$root.GameMsg_DCZZ.FishVIPUserRewardDataList.toObject(message.FishVIPUserList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishGetVIPUserRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolFishGetVIPUserRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishGetVIPUserRewardDetail.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishGetVIPUserRewardDetail;
    })();

    GameMsg_DCZZ.FishVIPUserRewardDataList=(function () {

        /**
         * Properties of a FishVIPUserRewardDataList.
         * @memberof GameMsg_DCZZ
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
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a FishVIPUserRewardDataList.
         * @implements IFishVIPUserRewardDataList
         * @constructor
         * @param {GameMsg_DCZZ.IFishVIPUserRewardDataList=} [properties] Properties to set
         */
        function FishVIPUserRewardDataList(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FishVIPUserRewardDataList UserID.
         * @member {number} UserID
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.UserID=0;

        /**
         * FishVIPUserRewardDataList AssignAmount.
         * @member {number|Long} AssignAmount
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.AssignAmount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FishVIPUserRewardDataList Rate.
         * @member {number} Rate
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.Rate=0;

        /**
         * FishVIPUserRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.FinishAmount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FishVIPUserRewardDataList Status.
         * @member {number} Status
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.Status=0;

        /**
         * FishVIPUserRewardDataList SumAssignAmount.
         * @member {number|Long} SumAssignAmount
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.SumAssignAmount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new FishVIPUserRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg_DCZZ.IFishVIPUserRewardDataList=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.FishVIPUserRewardDataList} FishVIPUserRewardDataList instance
         */
        FishVIPUserRewardDataList.create=function create(properties) {
            return new FishVIPUserRewardDataList(properties);
        };

        /**
         * Encodes the specified FishVIPUserRewardDataList message. Does not implicitly {@link GameMsg_DCZZ.FishVIPUserRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg_DCZZ.IFishVIPUserRewardDataList} message FishVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishVIPUserRewardDataList.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.AssignAmount);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Rate);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.FinishAmount);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Status);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.SumAssignAmount);
            return writer;
        };

        /**
         * Encodes the specified FishVIPUserRewardDataList message, length delimited. Does not implicitly {@link GameMsg_DCZZ.FishVIPUserRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg_DCZZ.IFishVIPUserRewardDataList} message FishVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishVIPUserRewardDataList.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishVIPUserRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishVIPUserRewardDataList.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.FishVIPUserRewardDataList();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.AssignAmount=reader.int64();
                        break;
                    case 3:
                        message.Rate=reader.int32();
                        break;
                    case 4:
                        message.FinishAmount=reader.int64();
                        break;
                    case 5:
                        message.Status=reader.int32();
                        break;
                    case 6:
                        message.SumAssignAmount=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            if (!message.hasOwnProperty("AssignAmount"))
                throw $util.ProtocolError("missing required 'AssignAmount'", { instance : message });
            if (!message.hasOwnProperty("Rate"))
                throw $util.ProtocolError("missing required 'Rate'", { instance : message });
            if (!message.hasOwnProperty("FinishAmount"))
                throw $util.ProtocolError("missing required 'FinishAmount'", { instance : message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance : message });
            if (!message.hasOwnProperty("SumAssignAmount"))
                throw $util.ProtocolError("missing required 'SumAssignAmount'", { instance : message });
            return message;
        };

        /**
         * Decodes a FishVIPUserRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishVIPUserRewardDataList.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishVIPUserRewardDataList message.
         * @function verify
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishVIPUserRewardDataList.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.AssignAmount) && !(message.AssignAmount && $util.isInteger(message.AssignAmount.low) && $util.isInteger(message.AssignAmount.high)))
                return "AssignAmount: integer|Long expected";
            if (!$util.isInteger(message.Rate))
                return "Rate: integer expected";
            if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                return "FinishAmount: integer|Long expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            if (!$util.isInteger(message.SumAssignAmount) && !(message.SumAssignAmount && $util.isInteger(message.SumAssignAmount.low) && $util.isInteger(message.SumAssignAmount.high)))
                return "SumAssignAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a FishVIPUserRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         */
        FishVIPUserRewardDataList.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.FishVIPUserRewardDataList)
                return object;
            var message=new $root.GameMsg_DCZZ.FishVIPUserRewardDataList();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.AssignAmount != null)
                if ($util.Long)
                    (message.AssignAmount=$util.Long.fromValue(object.AssignAmount)).unsigned=false;
                else if (typeof object.AssignAmount === "string")
                    message.AssignAmount=parseInt(object.AssignAmount, 10);
                else if (typeof object.AssignAmount === "number")
                    message.AssignAmount=object.AssignAmount;
                else if (typeof object.AssignAmount === "object")
                    message.AssignAmount=new $util.LongBits(object.AssignAmount.low >>> 0, object.AssignAmount.high >>> 0).toNumber();
            if (object.Rate != null)
                message.Rate=object.Rate | 0;
            if (object.FinishAmount != null)
                if ($util.Long)
                    (message.FinishAmount=$util.Long.fromValue(object.FinishAmount)).unsigned=false;
                else if (typeof object.FinishAmount === "string")
                    message.FinishAmount=parseInt(object.FinishAmount, 10);
                else if (typeof object.FinishAmount === "number")
                    message.FinishAmount=object.FinishAmount;
                else if (typeof object.FinishAmount === "object")
                    message.FinishAmount=new $util.LongBits(object.FinishAmount.low >>> 0, object.FinishAmount.high >>> 0).toNumber();
            if (object.Status != null)
                message.Status=object.Status | 0;
            if (object.SumAssignAmount != null)
                if ($util.Long)
                    (message.SumAssignAmount=$util.Long.fromValue(object.SumAssignAmount)).unsigned=false;
                else if (typeof object.SumAssignAmount === "string")
                    message.SumAssignAmount=parseInt(object.SumAssignAmount, 10);
                else if (typeof object.SumAssignAmount === "number")
                    message.SumAssignAmount=object.SumAssignAmount;
                else if (typeof object.SumAssignAmount === "object")
                    message.SumAssignAmount=new $util.LongBits(object.SumAssignAmount.low >>> 0, object.SumAssignAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FishVIPUserRewardDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg_DCZZ.FishVIPUserRewardDataList} message FishVIPUserRewardDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishVIPUserRewardDataList.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.UserID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.AssignAmount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AssignAmount=options.longs === String ? "0" : 0;
                object.Rate=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.FinishAmount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishAmount=options.longs === String ? "0" : 0;
                object.Status=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.SumAssignAmount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumAssignAmount=options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.AssignAmount != null && message.hasOwnProperty("AssignAmount"))
                if (typeof message.AssignAmount === "number")
                    object.AssignAmount=options.longs === String ? String(message.AssignAmount) : message.AssignAmount;
                else
                    object.AssignAmount=options.longs === String ? $util.Long.prototype.toString.call(message.AssignAmount) : options.longs === Number ? new $util.LongBits(message.AssignAmount.low >>> 0, message.AssignAmount.high >>> 0).toNumber() : message.AssignAmount;
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                object.Rate=message.Rate;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount=options.longs === String ? String(message.FinishAmount) : message.FinishAmount;
                else
                    object.FinishAmount=options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) : options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() : message.FinishAmount;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status=message.Status;
            if (message.SumAssignAmount != null && message.hasOwnProperty("SumAssignAmount"))
                if (typeof message.SumAssignAmount === "number")
                    object.SumAssignAmount=options.longs === String ? String(message.SumAssignAmount) : message.SumAssignAmount;
                else
                    object.SumAssignAmount=options.longs === String ? $util.Long.prototype.toString.call(message.SumAssignAmount) : options.longs === Number ? new $util.LongBits(message.SumAssignAmount.low >>> 0, message.SumAssignAmount.high >>> 0).toNumber() : message.SumAssignAmount;
            return object;
        };

        /**
         * Converts this FishVIPUserRewardDataList to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.FishVIPUserRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishVIPUserRewardDataList.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishVIPUserRewardDataList;
    })();

    GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail=(function () {

        /**
         * Properties of a SuperToolFishUpdSystemRewardDetail.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolFishUpdSystemRewardDetail
         * @property {number} FlagID SuperToolFishUpdSystemRewardDetail FlagID
         * @property {Array.<GameMsg_DCZZ.ISuperToolFishUpdSystemRewardDataList>|null} [FishRewardList] SuperToolFishUpdSystemRewardDetail FishRewardList
         */

        /**
         * Constructs a new SuperToolFishUpdSystemRewardDetail.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolFishUpdSystemRewardDetail.
         * @implements ISuperToolFishUpdSystemRewardDetail
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolFishUpdSystemRewardDetail=} [properties] Properties to set
         */
        function SuperToolFishUpdSystemRewardDetail(properties) {
            this.FishRewardList=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolFishUpdSystemRewardDetail FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail
         * @instance
         */
        SuperToolFishUpdSystemRewardDetail.prototype.FlagID=0;

        /**
         * SuperToolFishUpdSystemRewardDetail FishRewardList.
         * @member {Array.<GameMsg_DCZZ.ISuperToolFishUpdSystemRewardDataList>} FishRewardList
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail
         * @instance
         */
        SuperToolFishUpdSystemRewardDetail.prototype.FishRewardList=$util.emptyArray;

        /**
         * Creates a new SuperToolFishUpdSystemRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishUpdSystemRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail instance
         */
        SuperToolFishUpdSystemRewardDetail.create=function create(properties) {
            return new SuperToolFishUpdSystemRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDetail message. Does not implicitly {@link GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDetail.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i=0; i<message.FishRewardList.length; ++ i)
                    $root.GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList.encode(message.FishRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDetail message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDetail.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDetail.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.FlagID=reader.int32();
                        break;
                    case 2:
                        if (!(message.FishRewardList && message.FishRewardList.length))
                            message.FishRewardList=[];
                        message.FishRewardList.push($root.GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDetail.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishUpdSystemRewardDetail message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishUpdSystemRewardDetail.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (message.FishRewardList != null && message.hasOwnProperty("FishRewardList")) {
                if (!Array.isArray(message.FishRewardList))
                    return "FishRewardList: array expected";
                for (var i=0; i<message.FishRewardList.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishUpdSystemRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         */
        SuperToolFishUpdSystemRewardDetail.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail();
            if (object.FlagID != null)
                message.FlagID=object.FlagID | 0;
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail.FishRewardList: array expected");
                message.FishRewardList=[];
                for (var i=0; i<object.FishRewardList.length; ++ i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail.FishRewardList: object expected");
                    message.FishRewardList[i]=$root.GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishUpdSystemRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishUpdSystemRewardDetail.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.FishRewardList=[];
            if (options.defaults)
                object.FlagID=0;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID=message.FlagID;
            if (message.FishRewardList && message.FishRewardList.length) {
                object.FishRewardList=[];
                for (var j=0; j<message.FishRewardList.length; ++ j)
                    object.FishRewardList[j]=$root.GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishUpdSystemRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdSystemRewardDetail.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdSystemRewardDetail;
    })();

    GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList=(function () {

        /**
         * Properties of a SuperToolFishUpdSystemRewardDataList.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolFishUpdSystemRewardDataList
         * @property {number} FishID SuperToolFishUpdSystemRewardDataList FishID
         * @property {number|Long} FinishAmount SuperToolFishUpdSystemRewardDataList FinishAmount
         */

        /**
         * Constructs a new SuperToolFishUpdSystemRewardDataList.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolFishUpdSystemRewardDataList.
         * @implements ISuperToolFishUpdSystemRewardDataList
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolFishUpdSystemRewardDataList=} [properties] Properties to set
         */
        function SuperToolFishUpdSystemRewardDataList(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolFishUpdSystemRewardDataList FishID.
         * @member {number} FishID
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList
         * @instance
         */
        SuperToolFishUpdSystemRewardDataList.prototype.FishID=0;

        /**
         * SuperToolFishUpdSystemRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList
         * @instance
         */
        SuperToolFishUpdSystemRewardDataList.prototype.FinishAmount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new SuperToolFishUpdSystemRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishUpdSystemRewardDataList=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList instance
         */
        SuperToolFishUpdSystemRewardDataList.create=function create(properties) {
            return new SuperToolFishUpdSystemRewardDataList(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDataList message. Does not implicitly {@link GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDataList.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FishID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.FinishAmount);
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDataList message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDataList.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDataList.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.FishID=reader.int32();
                        break;
                    case 2:
                        message.FinishAmount=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("FishID"))
                throw $util.ProtocolError("missing required 'FishID'", { instance : message });
            if (!message.hasOwnProperty("FinishAmount"))
                throw $util.ProtocolError("missing required 'FinishAmount'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDataList.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishUpdSystemRewardDataList message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishUpdSystemRewardDataList.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FishID))
                return "FishID: integer expected";
            if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                return "FinishAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolFishUpdSystemRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         */
        SuperToolFishUpdSystemRewardDataList.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList();
            if (object.FishID != null)
                message.FishID=object.FishID | 0;
            if (object.FinishAmount != null)
                if ($util.Long)
                    (message.FinishAmount=$util.Long.fromValue(object.FinishAmount)).unsigned=false;
                else if (typeof object.FinishAmount === "string")
                    message.FinishAmount=parseInt(object.FinishAmount, 10);
                else if (typeof object.FinishAmount === "number")
                    message.FinishAmount=object.FinishAmount;
                else if (typeof object.FinishAmount === "object")
                    message.FinishAmount=new $util.LongBits(object.FinishAmount.low >>> 0, object.FinishAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishUpdSystemRewardDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishUpdSystemRewardDataList.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.FishID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.FinishAmount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishAmount=options.longs === String ? "0" : 0;
            }
            if (message.FishID != null && message.hasOwnProperty("FishID"))
                object.FishID=message.FishID;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount=options.longs === String ? String(message.FinishAmount) : message.FinishAmount;
                else
                    object.FinishAmount=options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) : options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() : message.FinishAmount;
            return object;
        };

        /**
         * Converts this SuperToolFishUpdSystemRewardDataList to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolFishUpdSystemRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdSystemRewardDataList.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdSystemRewardDataList;
    })();

    GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail=(function () {

        /**
         * Properties of a SuperToolfishUpdVIPUserRewardDetail.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolfishUpdVIPUserRewardDetail
         * @property {number} GameID SuperToolfishUpdVIPUserRewardDetail GameID
         * @property {Array.<GameMsg_DCZZ.ISuperToolFishUpdVIPUserRewardDataList>|null} [FishUserRewardList] SuperToolfishUpdVIPUserRewardDetail FishUserRewardList
         */

        /**
         * Constructs a new SuperToolfishUpdVIPUserRewardDetail.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolfishUpdVIPUserRewardDetail.
         * @implements ISuperToolfishUpdVIPUserRewardDetail
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolfishUpdVIPUserRewardDetail=} [properties] Properties to set
         */
        function SuperToolfishUpdVIPUserRewardDetail(properties) {
            this.FishUserRewardList=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolfishUpdVIPUserRewardDetail GameID.
         * @member {number} GameID
         * @memberof GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.GameID=0;

        /**
         * SuperToolfishUpdVIPUserRewardDetail FishUserRewardList.
         * @member {Array.<GameMsg_DCZZ.ISuperToolFishUpdVIPUserRewardDataList>} FishUserRewardList
         * @memberof GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.FishUserRewardList=$util.emptyArray;

        /**
         * Creates a new SuperToolfishUpdVIPUserRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolfishUpdVIPUserRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail instance
         */
        SuperToolfishUpdVIPUserRewardDetail.create=function create(properties) {
            return new SuperToolfishUpdVIPUserRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolfishUpdVIPUserRewardDetail message. Does not implicitly {@link GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolfishUpdVIPUserRewardDetail.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.FishUserRewardList != null && message.FishUserRewardList.length)
                for (var i=0; i<message.FishUserRewardList.length; ++ i)
                    $root.GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList.encode(message.FishUserRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolfishUpdVIPUserRewardDetail message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg_DCZZ.ISuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolfishUpdVIPUserRewardDetail.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolfishUpdVIPUserRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolfishUpdVIPUserRewardDetail.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.GameID=reader.int32();
                        break;
                    case 2:
                        if (!(message.FishUserRewardList && message.FishUserRewardList.length))
                            message.FishUserRewardList=[];
                        message.FishUserRewardList.push($root.GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperToolfishUpdVIPUserRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolfishUpdVIPUserRewardDetail.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolfishUpdVIPUserRewardDetail message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolfishUpdVIPUserRewardDetail.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (message.FishUserRewardList != null && message.hasOwnProperty("FishUserRewardList")) {
                if (!Array.isArray(message.FishUserRewardList))
                    return "FishUserRewardList: array expected";
                for (var i=0; i<message.FishUserRewardList.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList.verify(message.FishUserRewardList[i]);
                    if (error)
                        return "FishUserRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolfishUpdVIPUserRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         */
        SuperToolfishUpdVIPUserRewardDetail.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail();
            if (object.GameID != null)
                message.GameID=object.GameID | 0;
            if (object.FishUserRewardList) {
                if (!Array.isArray(object.FishUserRewardList))
                    throw TypeError(".GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail.FishUserRewardList: array expected");
                message.FishUserRewardList=[];
                for (var i=0; i<object.FishUserRewardList.length; ++ i) {
                    if (typeof object.FishUserRewardList[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail.FishUserRewardList: object expected");
                    message.FishUserRewardList[i]=$root.GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList.fromObject(object.FishUserRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolfishUpdVIPUserRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolfishUpdVIPUserRewardDetail.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.FishUserRewardList=[];
            if (options.defaults)
                object.GameID=0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID=message.GameID;
            if (message.FishUserRewardList && message.FishUserRewardList.length) {
                object.FishUserRewardList=[];
                for (var j=0; j<message.FishUserRewardList.length; ++ j)
                    object.FishUserRewardList[j]=$root.GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList.toObject(message.FishUserRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolfishUpdVIPUserRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolfishUpdVIPUserRewardDetail;
    })();

    GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList=(function () {

        /**
         * Properties of a SuperToolFishUpdVIPUserRewardDataList.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolFishUpdVIPUserRewardDataList
         * @property {number} UserID SuperToolFishUpdVIPUserRewardDataList UserID
         * @property {number|Long} FinishAmount SuperToolFishUpdVIPUserRewardDataList FinishAmount
         */

        /**
         * Constructs a new SuperToolFishUpdVIPUserRewardDataList.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolFishUpdVIPUserRewardDataList.
         * @implements ISuperToolFishUpdVIPUserRewardDataList
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolFishUpdVIPUserRewardDataList=} [properties] Properties to set
         */
        function SuperToolFishUpdVIPUserRewardDataList(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolFishUpdVIPUserRewardDataList UserID.
         * @member {number} UserID
         * @memberof GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.UserID=0;

        /**
         * SuperToolFishUpdVIPUserRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.FinishAmount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new SuperToolFishUpdVIPUserRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishUpdVIPUserRewardDataList=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList instance
         */
        SuperToolFishUpdVIPUserRewardDataList.create=function create(properties) {
            return new SuperToolFishUpdVIPUserRewardDataList(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdVIPUserRewardDataList message. Does not implicitly {@link GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdVIPUserRewardDataList.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.FinishAmount);
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishUpdVIPUserRewardDataList message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg_DCZZ.ISuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdVIPUserRewardDataList.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdVIPUserRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdVIPUserRewardDataList.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.FinishAmount=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            if (!message.hasOwnProperty("FinishAmount"))
                throw $util.ProtocolError("missing required 'FinishAmount'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperToolFishUpdVIPUserRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdVIPUserRewardDataList.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishUpdVIPUserRewardDataList message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishUpdVIPUserRewardDataList.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                return "FinishAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolFishUpdVIPUserRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         */
        SuperToolFishUpdVIPUserRewardDataList.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.FinishAmount != null)
                if ($util.Long)
                    (message.FinishAmount=$util.Long.fromValue(object.FinishAmount)).unsigned=false;
                else if (typeof object.FinishAmount === "string")
                    message.FinishAmount=parseInt(object.FinishAmount, 10);
                else if (typeof object.FinishAmount === "number")
                    message.FinishAmount=object.FinishAmount;
                else if (typeof object.FinishAmount === "object")
                    message.FinishAmount=new $util.LongBits(object.FinishAmount.low >>> 0, object.FinishAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishUpdVIPUserRewardDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishUpdVIPUserRewardDataList.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.UserID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.FinishAmount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishAmount=options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount=options.longs === String ? String(message.FinishAmount) : message.FinishAmount;
                else
                    object.FinishAmount=options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) : options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() : message.FinishAmount;
            return object;
        };

        /**
         * Converts this SuperToolFishUpdVIPUserRewardDataList to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdVIPUserRewardDataList;
    })();

    GameMsg_DCZZ.SuperToolZjhVipUserDataList=(function () {

        /**
         * Properties of a SuperToolZjhVipUserDataList.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolZjhVipUserDataList
         * @property {Array.<GameMsg_DCZZ.ISuperToolZjhVipUserData>|null} [DataList] SuperToolZjhVipUserDataList DataList
         */

        /**
         * Constructs a new SuperToolZjhVipUserDataList.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolZjhVipUserDataList.
         * @implements ISuperToolZjhVipUserDataList
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolZjhVipUserDataList=} [properties] Properties to set
         */
        function SuperToolZjhVipUserDataList(properties) {
            this.DataList=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolZjhVipUserDataList DataList.
         * @member {Array.<GameMsg_DCZZ.ISuperToolZjhVipUserData>} DataList
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserDataList
         * @instance
         */
        SuperToolZjhVipUserDataList.prototype.DataList=$util.emptyArray;

        /**
         * Creates a new SuperToolZjhVipUserDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg_DCZZ.ISuperToolZjhVipUserDataList=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList instance
         */
        SuperToolZjhVipUserDataList.create=function create(properties) {
            return new SuperToolZjhVipUserDataList(properties);
        };

        /**
         * Encodes the specified SuperToolZjhVipUserDataList message. Does not implicitly {@link GameMsg_DCZZ.SuperToolZjhVipUserDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg_DCZZ.ISuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserDataList.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.DataList != null && message.DataList.length)
                for (var i=0; i<message.DataList.length; ++ i)
                    $root.GameMsg_DCZZ.SuperToolZjhVipUserData.encode(message.DataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolZjhVipUserDataList message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolZjhVipUserDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg_DCZZ.ISuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserDataList.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhVipUserDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserDataList.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolZjhVipUserDataList();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.DataList && message.DataList.length))
                            message.DataList=[];
                        message.DataList.push($root.GameMsg_DCZZ.SuperToolZjhVipUserData.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserDataList.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolZjhVipUserDataList message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolZjhVipUserDataList.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DataList != null && message.hasOwnProperty("DataList")) {
                if (!Array.isArray(message.DataList))
                    return "DataList: array expected";
                for (var i=0; i<message.DataList.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.SuperToolZjhVipUserData.verify(message.DataList[i]);
                    if (error)
                        return "DataList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolZjhVipUserDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         */
        SuperToolZjhVipUserDataList.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolZjhVipUserDataList)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolZjhVipUserDataList();
            if (object.DataList) {
                if (!Array.isArray(object.DataList))
                    throw TypeError(".GameMsg_DCZZ.SuperToolZjhVipUserDataList.DataList: array expected");
                message.DataList=[];
                for (var i=0; i<object.DataList.length; ++ i) {
                    if (typeof object.DataList[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.SuperToolZjhVipUserDataList.DataList: object expected");
                    message.DataList[i]=$root.GameMsg_DCZZ.SuperToolZjhVipUserData.fromObject(object.DataList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolZjhVipUserDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg_DCZZ.SuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolZjhVipUserDataList.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.DataList=[];
            if (message.DataList && message.DataList.length) {
                object.DataList=[];
                for (var j=0; j<message.DataList.length; ++ j)
                    object.DataList[j]=$root.GameMsg_DCZZ.SuperToolZjhVipUserData.toObject(message.DataList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolZjhVipUserDataList to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhVipUserDataList.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhVipUserDataList;
    })();

    GameMsg_DCZZ.SuperToolZjhVipUserData=(function () {

        /**
         * Properties of a SuperToolZjhVipUserData.
         * @memberof GameMsg_DCZZ
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
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolZjhVipUserData.
         * @implements ISuperToolZjhVipUserData
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolZjhVipUserData=} [properties] Properties to set
         */
        function SuperToolZjhVipUserData(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolZjhVipUserData UserID.
         * @member {number} UserID
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.UserID=0;

        /**
         * SuperToolZjhVipUserData NextType.
         * @member {number|Long} NextType
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextType=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperToolZjhVipUserData NextWinLose.
         * @member {number|Long} NextWinLose
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextWinLose=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperToolZjhVipUserData NextWinLoseNum.
         * @member {number|Long} NextWinLoseNum
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextWinLoseNum=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperToolZjhVipUserData Finish.
         * @member {number|Long} Finish
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.Finish=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperToolZjhVipUserData FinishNextWinLoseNum.
         * @member {number|Long} FinishNextWinLoseNum
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.FinishNextWinLoseNum=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperToolZjhVipUserData NextTable.
         * @member {number} NextTable
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextTable=0;

        /**
         * SuperToolZjhVipUserData Status.
         * @member {number} Status
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.Status=0;

        /**
         * SuperToolZjhVipUserData TodaySumcharge.
         * @member {number|Long} TodaySumcharge
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodaySumcharge=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperToolZjhVipUserData TodaySumConvert.
         * @member {number|Long} TodaySumConvert
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodaySumConvert=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperToolZjhVipUserData TodayUserWinLose.
         * @member {number|Long} TodayUserWinLose
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodayUserWinLose=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new SuperToolZjhVipUserData instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg_DCZZ.ISuperToolZjhVipUserData=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolZjhVipUserData} SuperToolZjhVipUserData instance
         */
        SuperToolZjhVipUserData.create=function create(properties) {
            return new SuperToolZjhVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolZjhVipUserData message. Does not implicitly {@link GameMsg_DCZZ.SuperToolZjhVipUserData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg_DCZZ.ISuperToolZjhVipUserData} message SuperToolZjhVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserData.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
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
         * Encodes the specified SuperToolZjhVipUserData message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolZjhVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg_DCZZ.ISuperToolZjhVipUserData} message SuperToolZjhVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserData.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserData.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolZjhVipUserData();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.NextType=reader.int64();
                        break;
                    case 3:
                        message.NextWinLose=reader.int64();
                        break;
                    case 4:
                        message.NextWinLoseNum=reader.int64();
                        break;
                    case 5:
                        message.Finish=reader.int64();
                        break;
                    case 6:
                        message.FinishNextWinLoseNum=reader.int64();
                        break;
                    case 7:
                        message.NextTable=reader.int32();
                        break;
                    case 8:
                        message.Status=reader.int32();
                        break;
                    case 9:
                        message.TodaySumcharge=reader.int64();
                        break;
                    case 10:
                        message.TodaySumConvert=reader.int64();
                        break;
                    case 11:
                        message.TodayUserWinLose=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            if (!message.hasOwnProperty("NextType"))
                throw $util.ProtocolError("missing required 'NextType'", { instance : message });
            if (!message.hasOwnProperty("NextWinLose"))
                throw $util.ProtocolError("missing required 'NextWinLose'", { instance : message });
            if (!message.hasOwnProperty("NextWinLoseNum"))
                throw $util.ProtocolError("missing required 'NextWinLoseNum'", { instance : message });
            if (!message.hasOwnProperty("Finish"))
                throw $util.ProtocolError("missing required 'Finish'", { instance : message });
            if (!message.hasOwnProperty("FinishNextWinLoseNum"))
                throw $util.ProtocolError("missing required 'FinishNextWinLoseNum'", { instance : message });
            if (!message.hasOwnProperty("NextTable"))
                throw $util.ProtocolError("missing required 'NextTable'", { instance : message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance : message });
            if (!message.hasOwnProperty("TodaySumcharge"))
                throw $util.ProtocolError("missing required 'TodaySumcharge'", { instance : message });
            if (!message.hasOwnProperty("TodaySumConvert"))
                throw $util.ProtocolError("missing required 'TodaySumConvert'", { instance : message });
            if (!message.hasOwnProperty("TodayUserWinLose"))
                throw $util.ProtocolError("missing required 'TodayUserWinLose'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperToolZjhVipUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserData.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolZjhVipUserData message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolZjhVipUserData.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.NextType) && !(message.NextType && $util.isInteger(message.NextType.low) && $util.isInteger(message.NextType.high)))
                return "NextType: integer|Long expected";
            if (!$util.isInteger(message.NextWinLose) && !(message.NextWinLose && $util.isInteger(message.NextWinLose.low) && $util.isInteger(message.NextWinLose.high)))
                return "NextWinLose: integer|Long expected";
            if (!$util.isInteger(message.NextWinLoseNum) && !(message.NextWinLoseNum && $util.isInteger(message.NextWinLoseNum.low) && $util.isInteger(message.NextWinLoseNum.high)))
                return "NextWinLoseNum: integer|Long expected";
            if (!$util.isInteger(message.Finish) && !(message.Finish && $util.isInteger(message.Finish.low) && $util.isInteger(message.Finish.high)))
                return "Finish: integer|Long expected";
            if (!$util.isInteger(message.FinishNextWinLoseNum) && !(message.FinishNextWinLoseNum && $util.isInteger(message.FinishNextWinLoseNum.low) && $util.isInteger(message.FinishNextWinLoseNum.high)))
                return "FinishNextWinLoseNum: integer|Long expected";
            if (!$util.isInteger(message.NextTable))
                return "NextTable: integer expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            if (!$util.isInteger(message.TodaySumcharge) && !(message.TodaySumcharge && $util.isInteger(message.TodaySumcharge.low) && $util.isInteger(message.TodaySumcharge.high)))
                return "TodaySumcharge: integer|Long expected";
            if (!$util.isInteger(message.TodaySumConvert) && !(message.TodaySumConvert && $util.isInteger(message.TodaySumConvert.low) && $util.isInteger(message.TodaySumConvert.high)))
                return "TodaySumConvert: integer|Long expected";
            if (!$util.isInteger(message.TodayUserWinLose) && !(message.TodayUserWinLose && $util.isInteger(message.TodayUserWinLose.low) && $util.isInteger(message.TodayUserWinLose.high)))
                return "TodayUserWinLose: integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolZjhVipUserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         */
        SuperToolZjhVipUserData.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolZjhVipUserData)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolZjhVipUserData();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.NextType != null)
                if ($util.Long)
                    (message.NextType=$util.Long.fromValue(object.NextType)).unsigned=false;
                else if (typeof object.NextType === "string")
                    message.NextType=parseInt(object.NextType, 10);
                else if (typeof object.NextType === "number")
                    message.NextType=object.NextType;
                else if (typeof object.NextType === "object")
                    message.NextType=new $util.LongBits(object.NextType.low >>> 0, object.NextType.high >>> 0).toNumber();
            if (object.NextWinLose != null)
                if ($util.Long)
                    (message.NextWinLose=$util.Long.fromValue(object.NextWinLose)).unsigned=false;
                else if (typeof object.NextWinLose === "string")
                    message.NextWinLose=parseInt(object.NextWinLose, 10);
                else if (typeof object.NextWinLose === "number")
                    message.NextWinLose=object.NextWinLose;
                else if (typeof object.NextWinLose === "object")
                    message.NextWinLose=new $util.LongBits(object.NextWinLose.low >>> 0, object.NextWinLose.high >>> 0).toNumber();
            if (object.NextWinLoseNum != null)
                if ($util.Long)
                    (message.NextWinLoseNum=$util.Long.fromValue(object.NextWinLoseNum)).unsigned=false;
                else if (typeof object.NextWinLoseNum === "string")
                    message.NextWinLoseNum=parseInt(object.NextWinLoseNum, 10);
                else if (typeof object.NextWinLoseNum === "number")
                    message.NextWinLoseNum=object.NextWinLoseNum;
                else if (typeof object.NextWinLoseNum === "object")
                    message.NextWinLoseNum=new $util.LongBits(object.NextWinLoseNum.low >>> 0, object.NextWinLoseNum.high >>> 0).toNumber();
            if (object.Finish != null)
                if ($util.Long)
                    (message.Finish=$util.Long.fromValue(object.Finish)).unsigned=false;
                else if (typeof object.Finish === "string")
                    message.Finish=parseInt(object.Finish, 10);
                else if (typeof object.Finish === "number")
                    message.Finish=object.Finish;
                else if (typeof object.Finish === "object")
                    message.Finish=new $util.LongBits(object.Finish.low >>> 0, object.Finish.high >>> 0).toNumber();
            if (object.FinishNextWinLoseNum != null)
                if ($util.Long)
                    (message.FinishNextWinLoseNum=$util.Long.fromValue(object.FinishNextWinLoseNum)).unsigned=false;
                else if (typeof object.FinishNextWinLoseNum === "string")
                    message.FinishNextWinLoseNum=parseInt(object.FinishNextWinLoseNum, 10);
                else if (typeof object.FinishNextWinLoseNum === "number")
                    message.FinishNextWinLoseNum=object.FinishNextWinLoseNum;
                else if (typeof object.FinishNextWinLoseNum === "object")
                    message.FinishNextWinLoseNum=new $util.LongBits(object.FinishNextWinLoseNum.low >>> 0, object.FinishNextWinLoseNum.high >>> 0).toNumber();
            if (object.NextTable != null)
                message.NextTable=object.NextTable | 0;
            if (object.Status != null)
                message.Status=object.Status | 0;
            if (object.TodaySumcharge != null)
                if ($util.Long)
                    (message.TodaySumcharge=$util.Long.fromValue(object.TodaySumcharge)).unsigned=false;
                else if (typeof object.TodaySumcharge === "string")
                    message.TodaySumcharge=parseInt(object.TodaySumcharge, 10);
                else if (typeof object.TodaySumcharge === "number")
                    message.TodaySumcharge=object.TodaySumcharge;
                else if (typeof object.TodaySumcharge === "object")
                    message.TodaySumcharge=new $util.LongBits(object.TodaySumcharge.low >>> 0, object.TodaySumcharge.high >>> 0).toNumber();
            if (object.TodaySumConvert != null)
                if ($util.Long)
                    (message.TodaySumConvert=$util.Long.fromValue(object.TodaySumConvert)).unsigned=false;
                else if (typeof object.TodaySumConvert === "string")
                    message.TodaySumConvert=parseInt(object.TodaySumConvert, 10);
                else if (typeof object.TodaySumConvert === "number")
                    message.TodaySumConvert=object.TodaySumConvert;
                else if (typeof object.TodaySumConvert === "object")
                    message.TodaySumConvert=new $util.LongBits(object.TodaySumConvert.low >>> 0, object.TodaySumConvert.high >>> 0).toNumber();
            if (object.TodayUserWinLose != null)
                if ($util.Long)
                    (message.TodayUserWinLose=$util.Long.fromValue(object.TodayUserWinLose)).unsigned=false;
                else if (typeof object.TodayUserWinLose === "string")
                    message.TodayUserWinLose=parseInt(object.TodayUserWinLose, 10);
                else if (typeof object.TodayUserWinLose === "number")
                    message.TodayUserWinLose=object.TodayUserWinLose;
                else if (typeof object.TodayUserWinLose === "object")
                    message.TodayUserWinLose=new $util.LongBits(object.TodayUserWinLose.low >>> 0, object.TodayUserWinLose.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SuperToolZjhVipUserData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg_DCZZ.SuperToolZjhVipUserData} message SuperToolZjhVipUserData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolZjhVipUserData.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.UserID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.NextType=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NextType=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.NextWinLose=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NextWinLose=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.NextWinLoseNum=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NextWinLoseNum=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Finish=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Finish=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.FinishNextWinLoseNum=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishNextWinLoseNum=options.longs === String ? "0" : 0;
                object.NextTable=0;
                object.Status=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.TodaySumcharge=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TodaySumcharge=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.TodaySumConvert=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TodaySumConvert=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.TodayUserWinLose=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TodayUserWinLose=options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                if (typeof message.NextType === "number")
                    object.NextType=options.longs === String ? String(message.NextType) : message.NextType;
                else
                    object.NextType=options.longs === String ? $util.Long.prototype.toString.call(message.NextType) : options.longs === Number ? new $util.LongBits(message.NextType.low >>> 0, message.NextType.high >>> 0).toNumber() : message.NextType;
            if (message.NextWinLose != null && message.hasOwnProperty("NextWinLose"))
                if (typeof message.NextWinLose === "number")
                    object.NextWinLose=options.longs === String ? String(message.NextWinLose) : message.NextWinLose;
                else
                    object.NextWinLose=options.longs === String ? $util.Long.prototype.toString.call(message.NextWinLose) : options.longs === Number ? new $util.LongBits(message.NextWinLose.low >>> 0, message.NextWinLose.high >>> 0).toNumber() : message.NextWinLose;
            if (message.NextWinLoseNum != null && message.hasOwnProperty("NextWinLoseNum"))
                if (typeof message.NextWinLoseNum === "number")
                    object.NextWinLoseNum=options.longs === String ? String(message.NextWinLoseNum) : message.NextWinLoseNum;
                else
                    object.NextWinLoseNum=options.longs === String ? $util.Long.prototype.toString.call(message.NextWinLoseNum) : options.longs === Number ? new $util.LongBits(message.NextWinLoseNum.low >>> 0, message.NextWinLoseNum.high >>> 0).toNumber() : message.NextWinLoseNum;
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                if (typeof message.Finish === "number")
                    object.Finish=options.longs === String ? String(message.Finish) : message.Finish;
                else
                    object.Finish=options.longs === String ? $util.Long.prototype.toString.call(message.Finish) : options.longs === Number ? new $util.LongBits(message.Finish.low >>> 0, message.Finish.high >>> 0).toNumber() : message.Finish;
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                if (typeof message.FinishNextWinLoseNum === "number")
                    object.FinishNextWinLoseNum=options.longs === String ? String(message.FinishNextWinLoseNum) : message.FinishNextWinLoseNum;
                else
                    object.FinishNextWinLoseNum=options.longs === String ? $util.Long.prototype.toString.call(message.FinishNextWinLoseNum) : options.longs === Number ? new $util.LongBits(message.FinishNextWinLoseNum.low >>> 0, message.FinishNextWinLoseNum.high >>> 0).toNumber() : message.FinishNextWinLoseNum;
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                object.NextTable=message.NextTable;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status=message.Status;
            if (message.TodaySumcharge != null && message.hasOwnProperty("TodaySumcharge"))
                if (typeof message.TodaySumcharge === "number")
                    object.TodaySumcharge=options.longs === String ? String(message.TodaySumcharge) : message.TodaySumcharge;
                else
                    object.TodaySumcharge=options.longs === String ? $util.Long.prototype.toString.call(message.TodaySumcharge) : options.longs === Number ? new $util.LongBits(message.TodaySumcharge.low >>> 0, message.TodaySumcharge.high >>> 0).toNumber() : message.TodaySumcharge;
            if (message.TodaySumConvert != null && message.hasOwnProperty("TodaySumConvert"))
                if (typeof message.TodaySumConvert === "number")
                    object.TodaySumConvert=options.longs === String ? String(message.TodaySumConvert) : message.TodaySumConvert;
                else
                    object.TodaySumConvert=options.longs === String ? $util.Long.prototype.toString.call(message.TodaySumConvert) : options.longs === Number ? new $util.LongBits(message.TodaySumConvert.low >>> 0, message.TodaySumConvert.high >>> 0).toNumber() : message.TodaySumConvert;
            if (message.TodayUserWinLose != null && message.hasOwnProperty("TodayUserWinLose"))
                if (typeof message.TodayUserWinLose === "number")
                    object.TodayUserWinLose=options.longs === String ? String(message.TodayUserWinLose) : message.TodayUserWinLose;
                else
                    object.TodayUserWinLose=options.longs === String ? $util.Long.prototype.toString.call(message.TodayUserWinLose) : options.longs === Number ? new $util.LongBits(message.TodayUserWinLose.low >>> 0, message.TodayUserWinLose.high >>> 0).toNumber() : message.TodayUserWinLose;
            return object;
        };

        /**
         * Converts this SuperToolZjhVipUserData to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolZjhVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhVipUserData.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhVipUserData;
    })();

    GameMsg_DCZZ.SuperToolZjhUpdVipUserData=(function () {

        /**
         * Properties of a SuperToolZjhUpdVipUserData.
         * @memberof GameMsg_DCZZ
         * @interface ISuperToolZjhUpdVipUserData
         * @property {number} UserID SuperToolZjhUpdVipUserData UserID
         * @property {number|Long|null} [Finish] SuperToolZjhUpdVipUserData Finish
         * @property {number|Long|null} [FinishNextWinLoseNum] SuperToolZjhUpdVipUserData FinishNextWinLoseNum
         * @property {number|null} [NextTable] SuperToolZjhUpdVipUserData NextTable
         * @property {number|Long|null} [NextType] SuperToolZjhUpdVipUserData NextType
         */

        /**
         * Constructs a new SuperToolZjhUpdVipUserData.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperToolZjhUpdVipUserData.
         * @implements ISuperToolZjhUpdVipUserData
         * @constructor
         * @param {GameMsg_DCZZ.ISuperToolZjhUpdVipUserData=} [properties] Properties to set
         */
        function SuperToolZjhUpdVipUserData(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperToolZjhUpdVipUserData UserID.
         * @member {number} UserID
         * @memberof GameMsg_DCZZ.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.UserID=0;

        /**
         * SuperToolZjhUpdVipUserData Finish.
         * @member {number|Long} Finish
         * @memberof GameMsg_DCZZ.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.Finish=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperToolZjhUpdVipUserData FinishNextWinLoseNum.
         * @member {number|Long} FinishNextWinLoseNum
         * @memberof GameMsg_DCZZ.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.FinishNextWinLoseNum=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperToolZjhUpdVipUserData NextTable.
         * @member {number} NextTable
         * @memberof GameMsg_DCZZ.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.NextTable=0;

        /**
         * SuperToolZjhUpdVipUserData NextType.
         * @member {number|Long} NextType
         * @memberof GameMsg_DCZZ.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.NextType=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new SuperToolZjhUpdVipUserData instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg_DCZZ.ISuperToolZjhUpdVipUserData=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData instance
         */
        SuperToolZjhUpdVipUserData.create=function create(properties) {
            return new SuperToolZjhUpdVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolZjhUpdVipUserData message. Does not implicitly {@link GameMsg_DCZZ.SuperToolZjhUpdVipUserData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg_DCZZ.ISuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhUpdVipUserData.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.Finish != null && Object.hasOwnProperty.call(message, "Finish"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Finish);
            if (message.FinishNextWinLoseNum != null && Object.hasOwnProperty.call(message, "FinishNextWinLoseNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.FinishNextWinLoseNum);
            if (message.NextTable != null && Object.hasOwnProperty.call(message, "NextTable"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.NextTable);
            if (message.NextType != null && Object.hasOwnProperty.call(message, "NextType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.NextType);
            return writer;
        };

        /**
         * Encodes the specified SuperToolZjhUpdVipUserData message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperToolZjhUpdVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg_DCZZ.ISuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhUpdVipUserData.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhUpdVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperToolZjhUpdVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhUpdVipUserData.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperToolZjhUpdVipUserData();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.Finish=reader.int64();
                        break;
                    case 3:
                        message.FinishNextWinLoseNum=reader.int64();
                        break;
                    case 4:
                        message.NextTable=reader.int32();
                        break;
                    case 5:
                        message.NextType=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperToolZjhUpdVipUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperToolZjhUpdVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhUpdVipUserData.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolZjhUpdVipUserData message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperToolZjhUpdVipUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolZjhUpdVipUserData.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                if (!$util.isInteger(message.Finish) && !(message.Finish && $util.isInteger(message.Finish.low) && $util.isInteger(message.Finish.high)))
                    return "Finish: integer|Long expected";
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                if (!$util.isInteger(message.FinishNextWinLoseNum) && !(message.FinishNextWinLoseNum && $util.isInteger(message.FinishNextWinLoseNum.low) && $util.isInteger(message.FinishNextWinLoseNum.high)))
                    return "FinishNextWinLoseNum: integer|Long expected";
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                if (!$util.isInteger(message.NextTable))
                    return "NextTable: integer expected";
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                if (!$util.isInteger(message.NextType) && !(message.NextType && $util.isInteger(message.NextType.low) && $util.isInteger(message.NextType.high)))
                    return "NextType: integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolZjhUpdVipUserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperToolZjhUpdVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         */
        SuperToolZjhUpdVipUserData.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperToolZjhUpdVipUserData)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperToolZjhUpdVipUserData();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.Finish != null)
                if ($util.Long)
                    (message.Finish=$util.Long.fromValue(object.Finish)).unsigned=false;
                else if (typeof object.Finish === "string")
                    message.Finish=parseInt(object.Finish, 10);
                else if (typeof object.Finish === "number")
                    message.Finish=object.Finish;
                else if (typeof object.Finish === "object")
                    message.Finish=new $util.LongBits(object.Finish.low >>> 0, object.Finish.high >>> 0).toNumber();
            if (object.FinishNextWinLoseNum != null)
                if ($util.Long)
                    (message.FinishNextWinLoseNum=$util.Long.fromValue(object.FinishNextWinLoseNum)).unsigned=false;
                else if (typeof object.FinishNextWinLoseNum === "string")
                    message.FinishNextWinLoseNum=parseInt(object.FinishNextWinLoseNum, 10);
                else if (typeof object.FinishNextWinLoseNum === "number")
                    message.FinishNextWinLoseNum=object.FinishNextWinLoseNum;
                else if (typeof object.FinishNextWinLoseNum === "object")
                    message.FinishNextWinLoseNum=new $util.LongBits(object.FinishNextWinLoseNum.low >>> 0, object.FinishNextWinLoseNum.high >>> 0).toNumber();
            if (object.NextTable != null)
                message.NextTable=object.NextTable | 0;
            if (object.NextType != null)
                if ($util.Long)
                    (message.NextType=$util.Long.fromValue(object.NextType)).unsigned=false;
                else if (typeof object.NextType === "string")
                    message.NextType=parseInt(object.NextType, 10);
                else if (typeof object.NextType === "number")
                    message.NextType=object.NextType;
                else if (typeof object.NextType === "object")
                    message.NextType=new $util.LongBits(object.NextType.low >>> 0, object.NextType.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SuperToolZjhUpdVipUserData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg_DCZZ.SuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolZjhUpdVipUserData.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.UserID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Finish=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Finish=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.FinishNextWinLoseNum=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishNextWinLoseNum=options.longs === String ? "0" : 0;
                object.NextTable=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.NextType=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NextType=options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                if (typeof message.Finish === "number")
                    object.Finish=options.longs === String ? String(message.Finish) : message.Finish;
                else
                    object.Finish=options.longs === String ? $util.Long.prototype.toString.call(message.Finish) : options.longs === Number ? new $util.LongBits(message.Finish.low >>> 0, message.Finish.high >>> 0).toNumber() : message.Finish;
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                if (typeof message.FinishNextWinLoseNum === "number")
                    object.FinishNextWinLoseNum=options.longs === String ? String(message.FinishNextWinLoseNum) : message.FinishNextWinLoseNum;
                else
                    object.FinishNextWinLoseNum=options.longs === String ? $util.Long.prototype.toString.call(message.FinishNextWinLoseNum) : options.longs === Number ? new $util.LongBits(message.FinishNextWinLoseNum.low >>> 0, message.FinishNextWinLoseNum.high >>> 0).toNumber() : message.FinishNextWinLoseNum;
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                object.NextTable=message.NextTable;
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                if (typeof message.NextType === "number")
                    object.NextType=options.longs === String ? String(message.NextType) : message.NextType;
                else
                    object.NextType=options.longs === String ? $util.Long.prototype.toString.call(message.NextType) : options.longs === Number ? new $util.LongBits(message.NextType.low >>> 0, message.NextType.high >>> 0).toNumber() : message.NextType;
            return object;
        };

        /**
         * Converts this SuperToolZjhUpdVipUserData to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperToolZjhUpdVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhUpdVipUserData.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhUpdVipUserData;
    })();

    GameMsg_DCZZ.FishSysPoolData=(function () {

        /**
         * Properties of a FishSysPoolData.
         * @memberof GameMsg_DCZZ
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
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a FishSysPoolData.
         * @implements IFishSysPoolData
         * @constructor
         * @param {GameMsg_DCZZ.IFishSysPoolData=} [properties] Properties to set
         */
        function FishSysPoolData(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FishSysPoolData FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.FlagID=0;

        /**
         * FishSysPoolData SumBetMoney.
         * @member {number|Long} SumBetMoney
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SumBetMoney=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FishSysPoolData SumBullet.
         * @member {number|Long} SumBullet
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SumBullet=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FishSysPoolData SysSumWinLoss.
         * @member {number|Long} SysSumWinLoss
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SysSumWinLoss=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FishSysPoolData AfterAdjustSyspoolWinLoss.
         * @member {number|Long} AfterAdjustSyspoolWinLoss
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.AfterAdjustSyspoolWinLoss=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FishSysPoolData PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.PoolAmount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new FishSysPoolData instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @static
         * @param {GameMsg_DCZZ.IFishSysPoolData=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.FishSysPoolData} FishSysPoolData instance
         */
        FishSysPoolData.create=function create(properties) {
            return new FishSysPoolData(properties);
        };

        /**
         * Encodes the specified FishSysPoolData message. Does not implicitly {@link GameMsg_DCZZ.FishSysPoolData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @static
         * @param {GameMsg_DCZZ.IFishSysPoolData} message FishSysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSysPoolData.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SumBetMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.SumBullet);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.SysSumWinLoss);
            if (message.AfterAdjustSyspoolWinLoss != null && Object.hasOwnProperty.call(message, "AfterAdjustSyspoolWinLoss"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.AfterAdjustSyspoolWinLoss);
            if (message.PoolAmount != null && Object.hasOwnProperty.call(message, "PoolAmount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.PoolAmount);
            return writer;
        };

        /**
         * Encodes the specified FishSysPoolData message, length delimited. Does not implicitly {@link GameMsg_DCZZ.FishSysPoolData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @static
         * @param {GameMsg_DCZZ.IFishSysPoolData} message FishSysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSysPoolData.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishSysPoolData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.FishSysPoolData} FishSysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSysPoolData.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.FishSysPoolData();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.FlagID=reader.int32();
                        break;
                    case 2:
                        message.SumBetMoney=reader.int64();
                        break;
                    case 3:
                        message.SumBullet=reader.int64();
                        break;
                    case 4:
                        message.SysSumWinLoss=reader.int64();
                        break;
                    case 5:
                        message.AfterAdjustSyspoolWinLoss=reader.int64();
                        break;
                    case 6:
                        message.PoolAmount=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance : message });
            if (!message.hasOwnProperty("SumBetMoney"))
                throw $util.ProtocolError("missing required 'SumBetMoney'", { instance : message });
            if (!message.hasOwnProperty("SumBullet"))
                throw $util.ProtocolError("missing required 'SumBullet'", { instance : message });
            if (!message.hasOwnProperty("SysSumWinLoss"))
                throw $util.ProtocolError("missing required 'SysSumWinLoss'", { instance : message });
            return message;
        };

        /**
         * Decodes a FishSysPoolData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.FishSysPoolData} FishSysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSysPoolData.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishSysPoolData message.
         * @function verify
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishSysPoolData.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.SumBetMoney) && !(message.SumBetMoney && $util.isInteger(message.SumBetMoney.low) && $util.isInteger(message.SumBetMoney.high)))
                return "SumBetMoney: integer|Long expected";
            if (!$util.isInteger(message.SumBullet) && !(message.SumBullet && $util.isInteger(message.SumBullet.low) && $util.isInteger(message.SumBullet.high)))
                return "SumBullet: integer|Long expected";
            if (!$util.isInteger(message.SysSumWinLoss) && !(message.SysSumWinLoss && $util.isInteger(message.SysSumWinLoss.low) && $util.isInteger(message.SysSumWinLoss.high)))
                return "SysSumWinLoss: integer|Long expected";
            if (message.AfterAdjustSyspoolWinLoss != null && message.hasOwnProperty("AfterAdjustSyspoolWinLoss"))
                if (!$util.isInteger(message.AfterAdjustSyspoolWinLoss) && !(message.AfterAdjustSyspoolWinLoss && $util.isInteger(message.AfterAdjustSyspoolWinLoss.low) && $util.isInteger(message.AfterAdjustSyspoolWinLoss.high)))
                    return "AfterAdjustSyspoolWinLoss: integer|Long expected";
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (!$util.isInteger(message.PoolAmount) && !(message.PoolAmount && $util.isInteger(message.PoolAmount.low) && $util.isInteger(message.PoolAmount.high)))
                    return "PoolAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a FishSysPoolData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.FishSysPoolData} FishSysPoolData
         */
        FishSysPoolData.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.FishSysPoolData)
                return object;
            var message=new $root.GameMsg_DCZZ.FishSysPoolData();
            if (object.FlagID != null)
                message.FlagID=object.FlagID | 0;
            if (object.SumBetMoney != null)
                if ($util.Long)
                    (message.SumBetMoney=$util.Long.fromValue(object.SumBetMoney)).unsigned=false;
                else if (typeof object.SumBetMoney === "string")
                    message.SumBetMoney=parseInt(object.SumBetMoney, 10);
                else if (typeof object.SumBetMoney === "number")
                    message.SumBetMoney=object.SumBetMoney;
                else if (typeof object.SumBetMoney === "object")
                    message.SumBetMoney=new $util.LongBits(object.SumBetMoney.low >>> 0, object.SumBetMoney.high >>> 0).toNumber();
            if (object.SumBullet != null)
                if ($util.Long)
                    (message.SumBullet=$util.Long.fromValue(object.SumBullet)).unsigned=false;
                else if (typeof object.SumBullet === "string")
                    message.SumBullet=parseInt(object.SumBullet, 10);
                else if (typeof object.SumBullet === "number")
                    message.SumBullet=object.SumBullet;
                else if (typeof object.SumBullet === "object")
                    message.SumBullet=new $util.LongBits(object.SumBullet.low >>> 0, object.SumBullet.high >>> 0).toNumber();
            if (object.SysSumWinLoss != null)
                if ($util.Long)
                    (message.SysSumWinLoss=$util.Long.fromValue(object.SysSumWinLoss)).unsigned=false;
                else if (typeof object.SysSumWinLoss === "string")
                    message.SysSumWinLoss=parseInt(object.SysSumWinLoss, 10);
                else if (typeof object.SysSumWinLoss === "number")
                    message.SysSumWinLoss=object.SysSumWinLoss;
                else if (typeof object.SysSumWinLoss === "object")
                    message.SysSumWinLoss=new $util.LongBits(object.SysSumWinLoss.low >>> 0, object.SysSumWinLoss.high >>> 0).toNumber();
            if (object.AfterAdjustSyspoolWinLoss != null)
                if ($util.Long)
                    (message.AfterAdjustSyspoolWinLoss=$util.Long.fromValue(object.AfterAdjustSyspoolWinLoss)).unsigned=false;
                else if (typeof object.AfterAdjustSyspoolWinLoss === "string")
                    message.AfterAdjustSyspoolWinLoss=parseInt(object.AfterAdjustSyspoolWinLoss, 10);
                else if (typeof object.AfterAdjustSyspoolWinLoss === "number")
                    message.AfterAdjustSyspoolWinLoss=object.AfterAdjustSyspoolWinLoss;
                else if (typeof object.AfterAdjustSyspoolWinLoss === "object")
                    message.AfterAdjustSyspoolWinLoss=new $util.LongBits(object.AfterAdjustSyspoolWinLoss.low >>> 0, object.AfterAdjustSyspoolWinLoss.high >>> 0).toNumber();
            if (object.PoolAmount != null)
                if ($util.Long)
                    (message.PoolAmount=$util.Long.fromValue(object.PoolAmount)).unsigned=false;
                else if (typeof object.PoolAmount === "string")
                    message.PoolAmount=parseInt(object.PoolAmount, 10);
                else if (typeof object.PoolAmount === "number")
                    message.PoolAmount=object.PoolAmount;
                else if (typeof object.PoolAmount === "object")
                    message.PoolAmount=new $util.LongBits(object.PoolAmount.low >>> 0, object.PoolAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FishSysPoolData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @static
         * @param {GameMsg_DCZZ.FishSysPoolData} message FishSysPoolData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishSysPoolData.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.FlagID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.SumBetMoney=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumBetMoney=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.SumBullet=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumBullet=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.SysSumWinLoss=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SysSumWinLoss=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.AfterAdjustSyspoolWinLoss=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AfterAdjustSyspoolWinLoss=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.PoolAmount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolAmount=options.longs === String ? "0" : 0;
            }
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID=message.FlagID;
            if (message.SumBetMoney != null && message.hasOwnProperty("SumBetMoney"))
                if (typeof message.SumBetMoney === "number")
                    object.SumBetMoney=options.longs === String ? String(message.SumBetMoney) : message.SumBetMoney;
                else
                    object.SumBetMoney=options.longs === String ? $util.Long.prototype.toString.call(message.SumBetMoney) : options.longs === Number ? new $util.LongBits(message.SumBetMoney.low >>> 0, message.SumBetMoney.high >>> 0).toNumber() : message.SumBetMoney;
            if (message.SumBullet != null && message.hasOwnProperty("SumBullet"))
                if (typeof message.SumBullet === "number")
                    object.SumBullet=options.longs === String ? String(message.SumBullet) : message.SumBullet;
                else
                    object.SumBullet=options.longs === String ? $util.Long.prototype.toString.call(message.SumBullet) : options.longs === Number ? new $util.LongBits(message.SumBullet.low >>> 0, message.SumBullet.high >>> 0).toNumber() : message.SumBullet;
            if (message.SysSumWinLoss != null && message.hasOwnProperty("SysSumWinLoss"))
                if (typeof message.SysSumWinLoss === "number")
                    object.SysSumWinLoss=options.longs === String ? String(message.SysSumWinLoss) : message.SysSumWinLoss;
                else
                    object.SysSumWinLoss=options.longs === String ? $util.Long.prototype.toString.call(message.SysSumWinLoss) : options.longs === Number ? new $util.LongBits(message.SysSumWinLoss.low >>> 0, message.SysSumWinLoss.high >>> 0).toNumber() : message.SysSumWinLoss;
            if (message.AfterAdjustSyspoolWinLoss != null && message.hasOwnProperty("AfterAdjustSyspoolWinLoss"))
                if (typeof message.AfterAdjustSyspoolWinLoss === "number")
                    object.AfterAdjustSyspoolWinLoss=options.longs === String ? String(message.AfterAdjustSyspoolWinLoss) : message.AfterAdjustSyspoolWinLoss;
                else
                    object.AfterAdjustSyspoolWinLoss=options.longs === String ? $util.Long.prototype.toString.call(message.AfterAdjustSyspoolWinLoss) : options.longs === Number ? new $util.LongBits(message.AfterAdjustSyspoolWinLoss.low >>> 0, message.AfterAdjustSyspoolWinLoss.high >>> 0).toNumber() : message.AfterAdjustSyspoolWinLoss;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount=options.longs === String ? String(message.PoolAmount) : message.PoolAmount;
                else
                    object.PoolAmount=options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) : options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() : message.PoolAmount;
            return object;
        };

        /**
         * Converts this FishSysPoolData to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.FishSysPoolData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishSysPoolData.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishSysPoolData;
    })();

    GameMsg_DCZZ.FishPlayerPoolDetail=(function () {

        /**
         * Properties of a FishPlayerPoolDetail.
         * @memberof GameMsg_DCZZ
         * @interface IFishPlayerPoolDetail
         * @property {number|null} [FlagID] FishPlayerPoolDetail FlagID
         * @property {Array.<GameMsg_DCZZ.IFishPlayerPoolDetailList>|null} [FishRewardList] FishPlayerPoolDetail FishRewardList
         */

        /**
         * Constructs a new FishPlayerPoolDetail.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a FishPlayerPoolDetail.
         * @implements IFishPlayerPoolDetail
         * @constructor
         * @param {GameMsg_DCZZ.IFishPlayerPoolDetail=} [properties] Properties to set
         */
        function FishPlayerPoolDetail(properties) {
            this.FishRewardList=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FishPlayerPoolDetail FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetail
         * @instance
         */
        FishPlayerPoolDetail.prototype.FlagID=0;

        /**
         * FishPlayerPoolDetail FishRewardList.
         * @member {Array.<GameMsg_DCZZ.IFishPlayerPoolDetailList>} FishRewardList
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetail
         * @instance
         */
        FishPlayerPoolDetail.prototype.FishRewardList=$util.emptyArray;

        /**
         * Creates a new FishPlayerPoolDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetail
         * @static
         * @param {GameMsg_DCZZ.IFishPlayerPoolDetail=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.FishPlayerPoolDetail} FishPlayerPoolDetail instance
         */
        FishPlayerPoolDetail.create=function create(properties) {
            return new FishPlayerPoolDetail(properties);
        };

        /**
         * Encodes the specified FishPlayerPoolDetail message. Does not implicitly {@link GameMsg_DCZZ.FishPlayerPoolDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetail
         * @static
         * @param {GameMsg_DCZZ.IFishPlayerPoolDetail} message FishPlayerPoolDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetail.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.FlagID != null && Object.hasOwnProperty.call(message, "FlagID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i=0; i<message.FishRewardList.length; ++ i)
                    $root.GameMsg_DCZZ.FishPlayerPoolDetailList.encode(message.FishRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FishPlayerPoolDetail message, length delimited. Does not implicitly {@link GameMsg_DCZZ.FishPlayerPoolDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetail
         * @static
         * @param {GameMsg_DCZZ.IFishPlayerPoolDetail} message FishPlayerPoolDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetail.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishPlayerPoolDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.FishPlayerPoolDetail} FishPlayerPoolDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetail.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.FishPlayerPoolDetail();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.FlagID=reader.int32();
                        break;
                    case 2:
                        if (!(message.FishRewardList && message.FishRewardList.length))
                            message.FishRewardList=[];
                        message.FishRewardList.push($root.GameMsg_DCZZ.FishPlayerPoolDetailList.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.FishPlayerPoolDetail} FishPlayerPoolDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetail.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishPlayerPoolDetail message.
         * @function verify
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishPlayerPoolDetail.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                if (!$util.isInteger(message.FlagID))
                    return "FlagID: integer expected";
            if (message.FishRewardList != null && message.hasOwnProperty("FishRewardList")) {
                if (!Array.isArray(message.FishRewardList))
                    return "FishRewardList: array expected";
                for (var i=0; i<message.FishRewardList.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.FishPlayerPoolDetailList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FishPlayerPoolDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.FishPlayerPoolDetail} FishPlayerPoolDetail
         */
        FishPlayerPoolDetail.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.FishPlayerPoolDetail)
                return object;
            var message=new $root.GameMsg_DCZZ.FishPlayerPoolDetail();
            if (object.FlagID != null)
                message.FlagID=object.FlagID | 0;
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".GameMsg_DCZZ.FishPlayerPoolDetail.FishRewardList: array expected");
                message.FishRewardList=[];
                for (var i=0; i<object.FishRewardList.length; ++ i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.FishPlayerPoolDetail.FishRewardList: object expected");
                    message.FishRewardList[i]=$root.GameMsg_DCZZ.FishPlayerPoolDetailList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FishPlayerPoolDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetail
         * @static
         * @param {GameMsg_DCZZ.FishPlayerPoolDetail} message FishPlayerPoolDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishPlayerPoolDetail.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.FishRewardList=[];
            if (options.defaults)
                object.FlagID=0;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID=message.FlagID;
            if (message.FishRewardList && message.FishRewardList.length) {
                object.FishRewardList=[];
                for (var j=0; j<message.FishRewardList.length; ++ j)
                    object.FishRewardList[j]=$root.GameMsg_DCZZ.FishPlayerPoolDetailList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this FishPlayerPoolDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishPlayerPoolDetail.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishPlayerPoolDetail;
    })();

    GameMsg_DCZZ.FishPlayerPoolDetailList=(function () {

        /**
         * Properties of a FishPlayerPoolDetailList.
         * @memberof GameMsg_DCZZ
         * @interface IFishPlayerPoolDetailList
         * @property {number} UserID FishPlayerPoolDetailList UserID
         * @property {number|Long} HitMoney FishPlayerPoolDetailList HitMoney
         * @property {number|Long} SpendMoney FishPlayerPoolDetailList SpendMoney
         */

        /**
         * Constructs a new FishPlayerPoolDetailList.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a FishPlayerPoolDetailList.
         * @implements IFishPlayerPoolDetailList
         * @constructor
         * @param {GameMsg_DCZZ.IFishPlayerPoolDetailList=} [properties] Properties to set
         */
        function FishPlayerPoolDetailList(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FishPlayerPoolDetailList UserID.
         * @member {number} UserID
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.UserID=0;

        /**
         * FishPlayerPoolDetailList HitMoney.
         * @member {number|Long} HitMoney
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.HitMoney=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FishPlayerPoolDetailList SpendMoney.
         * @member {number|Long} SpendMoney
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.SpendMoney=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new FishPlayerPoolDetailList instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg_DCZZ.IFishPlayerPoolDetailList=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.FishPlayerPoolDetailList} FishPlayerPoolDetailList instance
         */
        FishPlayerPoolDetailList.create=function create(properties) {
            return new FishPlayerPoolDetailList(properties);
        };

        /**
         * Encodes the specified FishPlayerPoolDetailList message. Does not implicitly {@link GameMsg_DCZZ.FishPlayerPoolDetailList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg_DCZZ.IFishPlayerPoolDetailList} message FishPlayerPoolDetailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetailList.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.HitMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.SpendMoney);
            return writer;
        };

        /**
         * Encodes the specified FishPlayerPoolDetailList message, length delimited. Does not implicitly {@link GameMsg_DCZZ.FishPlayerPoolDetailList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg_DCZZ.IFishPlayerPoolDetailList} message FishPlayerPoolDetailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetailList.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishPlayerPoolDetailList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetailList.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.FishPlayerPoolDetailList();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.HitMoney=reader.int64();
                        break;
                    case 3:
                        message.SpendMoney=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            if (!message.hasOwnProperty("HitMoney"))
                throw $util.ProtocolError("missing required 'HitMoney'", { instance : message });
            if (!message.hasOwnProperty("SpendMoney"))
                throw $util.ProtocolError("missing required 'SpendMoney'", { instance : message });
            return message;
        };

        /**
         * Decodes a FishPlayerPoolDetailList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetailList.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishPlayerPoolDetailList message.
         * @function verify
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetailList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishPlayerPoolDetailList.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.HitMoney) && !(message.HitMoney && $util.isInteger(message.HitMoney.low) && $util.isInteger(message.HitMoney.high)))
                return "HitMoney: integer|Long expected";
            if (!$util.isInteger(message.SpendMoney) && !(message.SpendMoney && $util.isInteger(message.SpendMoney.low) && $util.isInteger(message.SpendMoney.high)))
                return "SpendMoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a FishPlayerPoolDetailList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetailList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         */
        FishPlayerPoolDetailList.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.FishPlayerPoolDetailList)
                return object;
            var message=new $root.GameMsg_DCZZ.FishPlayerPoolDetailList();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.HitMoney != null)
                if ($util.Long)
                    (message.HitMoney=$util.Long.fromValue(object.HitMoney)).unsigned=false;
                else if (typeof object.HitMoney === "string")
                    message.HitMoney=parseInt(object.HitMoney, 10);
                else if (typeof object.HitMoney === "number")
                    message.HitMoney=object.HitMoney;
                else if (typeof object.HitMoney === "object")
                    message.HitMoney=new $util.LongBits(object.HitMoney.low >>> 0, object.HitMoney.high >>> 0).toNumber();
            if (object.SpendMoney != null)
                if ($util.Long)
                    (message.SpendMoney=$util.Long.fromValue(object.SpendMoney)).unsigned=false;
                else if (typeof object.SpendMoney === "string")
                    message.SpendMoney=parseInt(object.SpendMoney, 10);
                else if (typeof object.SpendMoney === "number")
                    message.SpendMoney=object.SpendMoney;
                else if (typeof object.SpendMoney === "object")
                    message.SpendMoney=new $util.LongBits(object.SpendMoney.low >>> 0, object.SpendMoney.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FishPlayerPoolDetailList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg_DCZZ.FishPlayerPoolDetailList} message FishPlayerPoolDetailList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishPlayerPoolDetailList.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.UserID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.HitMoney=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HitMoney=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.SpendMoney=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SpendMoney=options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.HitMoney != null && message.hasOwnProperty("HitMoney"))
                if (typeof message.HitMoney === "number")
                    object.HitMoney=options.longs === String ? String(message.HitMoney) : message.HitMoney;
                else
                    object.HitMoney=options.longs === String ? $util.Long.prototype.toString.call(message.HitMoney) : options.longs === Number ? new $util.LongBits(message.HitMoney.low >>> 0, message.HitMoney.high >>> 0).toNumber() : message.HitMoney;
            if (message.SpendMoney != null && message.hasOwnProperty("SpendMoney"))
                if (typeof message.SpendMoney === "number")
                    object.SpendMoney=options.longs === String ? String(message.SpendMoney) : message.SpendMoney;
                else
                    object.SpendMoney=options.longs === String ? $util.Long.prototype.toString.call(message.SpendMoney) : options.longs === Number ? new $util.LongBits(message.SpendMoney.low >>> 0, message.SpendMoney.high >>> 0).toNumber() : message.SpendMoney;
            return object;
        };

        /**
         * Converts this FishPlayerPoolDetailList to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.FishPlayerPoolDetailList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishPlayerPoolDetailList.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishPlayerPoolDetailList;
    })();

    GameMsg_DCZZ.FindFishBeginnerOfferByUserID=(function () {

        /**
         * Properties of a FindFishBeginnerOfferByUserID.
         * @memberof GameMsg_DCZZ
         * @interface IFindFishBeginnerOfferByUserID
         * @property {number} UserID FindFishBeginnerOfferByUserID UserID
         * @property {number|null} [NewPlayerAdjustSyspool] FindFishBeginnerOfferByUserID NewPlayerAdjustSyspool
         */

        /**
         * Constructs a new FindFishBeginnerOfferByUserID.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a FindFishBeginnerOfferByUserID.
         * @implements IFindFishBeginnerOfferByUserID
         * @constructor
         * @param {GameMsg_DCZZ.IFindFishBeginnerOfferByUserID=} [properties] Properties to set
         */
        function FindFishBeginnerOfferByUserID(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FindFishBeginnerOfferByUserID UserID.
         * @member {number} UserID
         * @memberof GameMsg_DCZZ.FindFishBeginnerOfferByUserID
         * @instance
         */
        FindFishBeginnerOfferByUserID.prototype.UserID=0;

        /**
         * FindFishBeginnerOfferByUserID NewPlayerAdjustSyspool.
         * @member {number} NewPlayerAdjustSyspool
         * @memberof GameMsg_DCZZ.FindFishBeginnerOfferByUserID
         * @instance
         */
        FindFishBeginnerOfferByUserID.prototype.NewPlayerAdjustSyspool=0;

        /**
         * Creates a new FindFishBeginnerOfferByUserID instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg_DCZZ.IFindFishBeginnerOfferByUserID=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID instance
         */
        FindFishBeginnerOfferByUserID.create=function create(properties) {
            return new FindFishBeginnerOfferByUserID(properties);
        };

        /**
         * Encodes the specified FindFishBeginnerOfferByUserID message. Does not implicitly {@link GameMsg_DCZZ.FindFishBeginnerOfferByUserID.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg_DCZZ.IFindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindFishBeginnerOfferByUserID.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.NewPlayerAdjustSyspool != null && Object.hasOwnProperty.call(message, "NewPlayerAdjustSyspool"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.NewPlayerAdjustSyspool);
            return writer;
        };

        /**
         * Encodes the specified FindFishBeginnerOfferByUserID message, length delimited. Does not implicitly {@link GameMsg_DCZZ.FindFishBeginnerOfferByUserID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg_DCZZ.IFindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindFishBeginnerOfferByUserID.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindFishBeginnerOfferByUserID message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.FindFishBeginnerOfferByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindFishBeginnerOfferByUserID.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.FindFishBeginnerOfferByUserID();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.NewPlayerAdjustSyspool=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            return message;
        };

        /**
         * Decodes a FindFishBeginnerOfferByUserID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.FindFishBeginnerOfferByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindFishBeginnerOfferByUserID.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindFishBeginnerOfferByUserID message.
         * @function verify
         * @memberof GameMsg_DCZZ.FindFishBeginnerOfferByUserID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindFishBeginnerOfferByUserID.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                if (!$util.isInteger(message.NewPlayerAdjustSyspool))
                    return "NewPlayerAdjustSyspool: integer expected";
            return null;
        };

        /**
         * Creates a FindFishBeginnerOfferByUserID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.FindFishBeginnerOfferByUserID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         */
        FindFishBeginnerOfferByUserID.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.FindFishBeginnerOfferByUserID)
                return object;
            var message=new $root.GameMsg_DCZZ.FindFishBeginnerOfferByUserID();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.NewPlayerAdjustSyspool != null)
                message.NewPlayerAdjustSyspool=object.NewPlayerAdjustSyspool | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindFishBeginnerOfferByUserID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg_DCZZ.FindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindFishBeginnerOfferByUserID.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.UserID=0;
                object.NewPlayerAdjustSyspool=0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                object.NewPlayerAdjustSyspool=message.NewPlayerAdjustSyspool;
            return object;
        };

        /**
         * Converts this FindFishBeginnerOfferByUserID to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.FindFishBeginnerOfferByUserID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindFishBeginnerOfferByUserID.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FindFishBeginnerOfferByUserID;
    })();

    GameMsg_DCZZ.FishBeginnerOfferDetail=(function () {

        /**
         * Properties of a FishBeginnerOfferDetail.
         * @memberof GameMsg_DCZZ
         * @interface IFishBeginnerOfferDetail
         * @property {Array.<GameMsg_DCZZ.IFishBeginnerOffer>|null} [NewPlayerList] FishBeginnerOfferDetail NewPlayerList
         * @property {number|null} [NewPlayerAdjustSyspool] FishBeginnerOfferDetail NewPlayerAdjustSyspool
         */

        /**
         * Constructs a new FishBeginnerOfferDetail.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a FishBeginnerOfferDetail.
         * @implements IFishBeginnerOfferDetail
         * @constructor
         * @param {GameMsg_DCZZ.IFishBeginnerOfferDetail=} [properties] Properties to set
         */
        function FishBeginnerOfferDetail(properties) {
            this.NewPlayerList=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FishBeginnerOfferDetail NewPlayerList.
         * @member {Array.<GameMsg_DCZZ.IFishBeginnerOffer>} NewPlayerList
         * @memberof GameMsg_DCZZ.FishBeginnerOfferDetail
         * @instance
         */
        FishBeginnerOfferDetail.prototype.NewPlayerList=$util.emptyArray;

        /**
         * FishBeginnerOfferDetail NewPlayerAdjustSyspool.
         * @member {number} NewPlayerAdjustSyspool
         * @memberof GameMsg_DCZZ.FishBeginnerOfferDetail
         * @instance
         */
        FishBeginnerOfferDetail.prototype.NewPlayerAdjustSyspool=0;

        /**
         * Creates a new FishBeginnerOfferDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg_DCZZ.IFishBeginnerOfferDetail=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.FishBeginnerOfferDetail} FishBeginnerOfferDetail instance
         */
        FishBeginnerOfferDetail.create=function create(properties) {
            return new FishBeginnerOfferDetail(properties);
        };

        /**
         * Encodes the specified FishBeginnerOfferDetail message. Does not implicitly {@link GameMsg_DCZZ.FishBeginnerOfferDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg_DCZZ.IFishBeginnerOfferDetail} message FishBeginnerOfferDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOfferDetail.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.NewPlayerList != null && message.NewPlayerList.length)
                for (var i=0; i<message.NewPlayerList.length; ++ i)
                    $root.GameMsg_DCZZ.FishBeginnerOffer.encode(message.NewPlayerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.NewPlayerAdjustSyspool != null && Object.hasOwnProperty.call(message, "NewPlayerAdjustSyspool"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.NewPlayerAdjustSyspool);
            return writer;
        };

        /**
         * Encodes the specified FishBeginnerOfferDetail message, length delimited. Does not implicitly {@link GameMsg_DCZZ.FishBeginnerOfferDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg_DCZZ.IFishBeginnerOfferDetail} message FishBeginnerOfferDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOfferDetail.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishBeginnerOfferDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.FishBeginnerOfferDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOfferDetail.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.FishBeginnerOfferDetail();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.NewPlayerList && message.NewPlayerList.length))
                            message.NewPlayerList=[];
                        message.NewPlayerList.push($root.GameMsg_DCZZ.FishBeginnerOffer.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.NewPlayerAdjustSyspool=reader.int32();
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
         * @memberof GameMsg_DCZZ.FishBeginnerOfferDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOfferDetail.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishBeginnerOfferDetail message.
         * @function verify
         * @memberof GameMsg_DCZZ.FishBeginnerOfferDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishBeginnerOfferDetail.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.NewPlayerList != null && message.hasOwnProperty("NewPlayerList")) {
                if (!Array.isArray(message.NewPlayerList))
                    return "NewPlayerList: array expected";
                for (var i=0; i<message.NewPlayerList.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.FishBeginnerOffer.verify(message.NewPlayerList[i]);
                    if (error)
                        return "NewPlayerList." + error;
                }
            }
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                if (!$util.isInteger(message.NewPlayerAdjustSyspool))
                    return "NewPlayerAdjustSyspool: integer expected";
            return null;
        };

        /**
         * Creates a FishBeginnerOfferDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.FishBeginnerOfferDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         */
        FishBeginnerOfferDetail.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.FishBeginnerOfferDetail)
                return object;
            var message=new $root.GameMsg_DCZZ.FishBeginnerOfferDetail();
            if (object.NewPlayerList) {
                if (!Array.isArray(object.NewPlayerList))
                    throw TypeError(".GameMsg_DCZZ.FishBeginnerOfferDetail.NewPlayerList: array expected");
                message.NewPlayerList=[];
                for (var i=0; i<object.NewPlayerList.length; ++ i) {
                    if (typeof object.NewPlayerList[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.FishBeginnerOfferDetail.NewPlayerList: object expected");
                    message.NewPlayerList[i]=$root.GameMsg_DCZZ.FishBeginnerOffer.fromObject(object.NewPlayerList[i]);
                }
            }
            if (object.NewPlayerAdjustSyspool != null)
                message.NewPlayerAdjustSyspool=object.NewPlayerAdjustSyspool | 0;
            return message;
        };

        /**
         * Creates a plain object from a FishBeginnerOfferDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg_DCZZ.FishBeginnerOfferDetail} message FishBeginnerOfferDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishBeginnerOfferDetail.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.NewPlayerList=[];
            if (options.defaults)
                object.NewPlayerAdjustSyspool=0;
            if (message.NewPlayerList && message.NewPlayerList.length) {
                object.NewPlayerList=[];
                for (var j=0; j<message.NewPlayerList.length; ++ j)
                    object.NewPlayerList[j]=$root.GameMsg_DCZZ.FishBeginnerOffer.toObject(message.NewPlayerList[j], options);
            }
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                object.NewPlayerAdjustSyspool=message.NewPlayerAdjustSyspool;
            return object;
        };

        /**
         * Converts this FishBeginnerOfferDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.FishBeginnerOfferDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishBeginnerOfferDetail.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishBeginnerOfferDetail;
    })();

    GameMsg_DCZZ.FishBeginnerOffer=(function () {

        /**
         * Properties of a FishBeginnerOffer.
         * @memberof GameMsg_DCZZ
         * @interface IFishBeginnerOffer
         * @property {number} UserID FishBeginnerOffer UserID
         * @property {number} Bullet FishBeginnerOffer Bullet
         * @property {number} Score FishBeginnerOffer Score
         * @property {number} Status FishBeginnerOffer Status
         */

        /**
         * Constructs a new FishBeginnerOffer.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a FishBeginnerOffer.
         * @implements IFishBeginnerOffer
         * @constructor
         * @param {GameMsg_DCZZ.IFishBeginnerOffer=} [properties] Properties to set
         */
        function FishBeginnerOffer(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FishBeginnerOffer UserID.
         * @member {number} UserID
         * @memberof GameMsg_DCZZ.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.UserID=0;

        /**
         * FishBeginnerOffer Bullet.
         * @member {number} Bullet
         * @memberof GameMsg_DCZZ.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Bullet=0;

        /**
         * FishBeginnerOffer Score.
         * @member {number} Score
         * @memberof GameMsg_DCZZ.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Score=0;

        /**
         * FishBeginnerOffer Status.
         * @member {number} Status
         * @memberof GameMsg_DCZZ.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Status=0;

        /**
         * Creates a new FishBeginnerOffer instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.FishBeginnerOffer
         * @static
         * @param {GameMsg_DCZZ.IFishBeginnerOffer=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.FishBeginnerOffer} FishBeginnerOffer instance
         */
        FishBeginnerOffer.create=function create(properties) {
            return new FishBeginnerOffer(properties);
        };

        /**
         * Encodes the specified FishBeginnerOffer message. Does not implicitly {@link GameMsg_DCZZ.FishBeginnerOffer.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.FishBeginnerOffer
         * @static
         * @param {GameMsg_DCZZ.IFishBeginnerOffer} message FishBeginnerOffer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOffer.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Bullet);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Score);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified FishBeginnerOffer message, length delimited. Does not implicitly {@link GameMsg_DCZZ.FishBeginnerOffer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.FishBeginnerOffer
         * @static
         * @param {GameMsg_DCZZ.IFishBeginnerOffer} message FishBeginnerOffer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOffer.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishBeginnerOffer message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.FishBeginnerOffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.FishBeginnerOffer} FishBeginnerOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOffer.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.FishBeginnerOffer();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.Bullet=reader.int32();
                        break;
                    case 3:
                        message.Score=reader.int32();
                        break;
                    case 4:
                        message.Status=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            if (!message.hasOwnProperty("Bullet"))
                throw $util.ProtocolError("missing required 'Bullet'", { instance : message });
            if (!message.hasOwnProperty("Score"))
                throw $util.ProtocolError("missing required 'Score'", { instance : message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance : message });
            return message;
        };

        /**
         * Decodes a FishBeginnerOffer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.FishBeginnerOffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.FishBeginnerOffer} FishBeginnerOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOffer.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishBeginnerOffer message.
         * @function verify
         * @memberof GameMsg_DCZZ.FishBeginnerOffer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishBeginnerOffer.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.Bullet))
                return "Bullet: integer expected";
            if (!$util.isInteger(message.Score))
                return "Score: integer expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            return null;
        };

        /**
         * Creates a FishBeginnerOffer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.FishBeginnerOffer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.FishBeginnerOffer} FishBeginnerOffer
         */
        FishBeginnerOffer.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.FishBeginnerOffer)
                return object;
            var message=new $root.GameMsg_DCZZ.FishBeginnerOffer();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.Bullet != null)
                message.Bullet=object.Bullet | 0;
            if (object.Score != null)
                message.Score=object.Score | 0;
            if (object.Status != null)
                message.Status=object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from a FishBeginnerOffer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.FishBeginnerOffer
         * @static
         * @param {GameMsg_DCZZ.FishBeginnerOffer} message FishBeginnerOffer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishBeginnerOffer.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.UserID=0;
                object.Bullet=0;
                object.Score=0;
                object.Status=0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.Bullet != null && message.hasOwnProperty("Bullet"))
                object.Bullet=message.Bullet;
            if (message.Score != null && message.hasOwnProperty("Score"))
                object.Score=message.Score;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status=message.Status;
            return object;
        };

        /**
         * Converts this FishBeginnerOffer to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.FishBeginnerOffer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishBeginnerOffer.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishBeginnerOffer;
    })();

    GameMsg_DCZZ.Cd21SysPoolData=(function () {

        /**
         * Properties of a Cd21SysPoolData.
         * @memberof GameMsg_DCZZ
         * @interface ICd21SysPoolData
         * @property {number} FlagID Cd21SysPoolData FlagID
         * @property {number|Long} SumBetMoney Cd21SysPoolData SumBetMoney
         * @property {number|Long} SumBetCount Cd21SysPoolData SumBetCount
         * @property {number|Long} PoolAmount Cd21SysPoolData PoolAmount
         */

        /**
         * Constructs a new Cd21SysPoolData.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a Cd21SysPoolData.
         * @implements ICd21SysPoolData
         * @constructor
         * @param {GameMsg_DCZZ.ICd21SysPoolData=} [properties] Properties to set
         */
        function Cd21SysPoolData(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * Cd21SysPoolData FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_DCZZ.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.FlagID=0;

        /**
         * Cd21SysPoolData SumBetMoney.
         * @member {number|Long} SumBetMoney
         * @memberof GameMsg_DCZZ.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.SumBetMoney=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Cd21SysPoolData SumBetCount.
         * @member {number|Long} SumBetCount
         * @memberof GameMsg_DCZZ.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.SumBetCount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Cd21SysPoolData PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof GameMsg_DCZZ.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.PoolAmount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new Cd21SysPoolData instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.Cd21SysPoolData
         * @static
         * @param {GameMsg_DCZZ.ICd21SysPoolData=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.Cd21SysPoolData} Cd21SysPoolData instance
         */
        Cd21SysPoolData.create=function create(properties) {
            return new Cd21SysPoolData(properties);
        };

        /**
         * Encodes the specified Cd21SysPoolData message. Does not implicitly {@link GameMsg_DCZZ.Cd21SysPoolData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.Cd21SysPoolData
         * @static
         * @param {GameMsg_DCZZ.ICd21SysPoolData} message Cd21SysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cd21SysPoolData.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SumBetMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.SumBetCount);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.PoolAmount);
            return writer;
        };

        /**
         * Encodes the specified Cd21SysPoolData message, length delimited. Does not implicitly {@link GameMsg_DCZZ.Cd21SysPoolData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.Cd21SysPoolData
         * @static
         * @param {GameMsg_DCZZ.ICd21SysPoolData} message Cd21SysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cd21SysPoolData.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Cd21SysPoolData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.Cd21SysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.Cd21SysPoolData} Cd21SysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cd21SysPoolData.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.Cd21SysPoolData();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.FlagID=reader.int32();
                        break;
                    case 2:
                        message.SumBetMoney=reader.int64();
                        break;
                    case 3:
                        message.SumBetCount=reader.int64();
                        break;
                    case 4:
                        message.PoolAmount=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance : message });
            if (!message.hasOwnProperty("SumBetMoney"))
                throw $util.ProtocolError("missing required 'SumBetMoney'", { instance : message });
            if (!message.hasOwnProperty("SumBetCount"))
                throw $util.ProtocolError("missing required 'SumBetCount'", { instance : message });
            if (!message.hasOwnProperty("PoolAmount"))
                throw $util.ProtocolError("missing required 'PoolAmount'", { instance : message });
            return message;
        };

        /**
         * Decodes a Cd21SysPoolData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.Cd21SysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.Cd21SysPoolData} Cd21SysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cd21SysPoolData.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Cd21SysPoolData message.
         * @function verify
         * @memberof GameMsg_DCZZ.Cd21SysPoolData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Cd21SysPoolData.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.SumBetMoney) && !(message.SumBetMoney && $util.isInteger(message.SumBetMoney.low) && $util.isInteger(message.SumBetMoney.high)))
                return "SumBetMoney: integer|Long expected";
            if (!$util.isInteger(message.SumBetCount) && !(message.SumBetCount && $util.isInteger(message.SumBetCount.low) && $util.isInteger(message.SumBetCount.high)))
                return "SumBetCount: integer|Long expected";
            if (!$util.isInteger(message.PoolAmount) && !(message.PoolAmount && $util.isInteger(message.PoolAmount.low) && $util.isInteger(message.PoolAmount.high)))
                return "PoolAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a Cd21SysPoolData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.Cd21SysPoolData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.Cd21SysPoolData} Cd21SysPoolData
         */
        Cd21SysPoolData.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.Cd21SysPoolData)
                return object;
            var message=new $root.GameMsg_DCZZ.Cd21SysPoolData();
            if (object.FlagID != null)
                message.FlagID=object.FlagID | 0;
            if (object.SumBetMoney != null)
                if ($util.Long)
                    (message.SumBetMoney=$util.Long.fromValue(object.SumBetMoney)).unsigned=false;
                else if (typeof object.SumBetMoney === "string")
                    message.SumBetMoney=parseInt(object.SumBetMoney, 10);
                else if (typeof object.SumBetMoney === "number")
                    message.SumBetMoney=object.SumBetMoney;
                else if (typeof object.SumBetMoney === "object")
                    message.SumBetMoney=new $util.LongBits(object.SumBetMoney.low >>> 0, object.SumBetMoney.high >>> 0).toNumber();
            if (object.SumBetCount != null)
                if ($util.Long)
                    (message.SumBetCount=$util.Long.fromValue(object.SumBetCount)).unsigned=false;
                else if (typeof object.SumBetCount === "string")
                    message.SumBetCount=parseInt(object.SumBetCount, 10);
                else if (typeof object.SumBetCount === "number")
                    message.SumBetCount=object.SumBetCount;
                else if (typeof object.SumBetCount === "object")
                    message.SumBetCount=new $util.LongBits(object.SumBetCount.low >>> 0, object.SumBetCount.high >>> 0).toNumber();
            if (object.PoolAmount != null)
                if ($util.Long)
                    (message.PoolAmount=$util.Long.fromValue(object.PoolAmount)).unsigned=false;
                else if (typeof object.PoolAmount === "string")
                    message.PoolAmount=parseInt(object.PoolAmount, 10);
                else if (typeof object.PoolAmount === "number")
                    message.PoolAmount=object.PoolAmount;
                else if (typeof object.PoolAmount === "object")
                    message.PoolAmount=new $util.LongBits(object.PoolAmount.low >>> 0, object.PoolAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Cd21SysPoolData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.Cd21SysPoolData
         * @static
         * @param {GameMsg_DCZZ.Cd21SysPoolData} message Cd21SysPoolData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Cd21SysPoolData.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.FlagID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.SumBetMoney=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumBetMoney=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.SumBetCount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumBetCount=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.PoolAmount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolAmount=options.longs === String ? "0" : 0;
            }
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID=message.FlagID;
            if (message.SumBetMoney != null && message.hasOwnProperty("SumBetMoney"))
                if (typeof message.SumBetMoney === "number")
                    object.SumBetMoney=options.longs === String ? String(message.SumBetMoney) : message.SumBetMoney;
                else
                    object.SumBetMoney=options.longs === String ? $util.Long.prototype.toString.call(message.SumBetMoney) : options.longs === Number ? new $util.LongBits(message.SumBetMoney.low >>> 0, message.SumBetMoney.high >>> 0).toNumber() : message.SumBetMoney;
            if (message.SumBetCount != null && message.hasOwnProperty("SumBetCount"))
                if (typeof message.SumBetCount === "number")
                    object.SumBetCount=options.longs === String ? String(message.SumBetCount) : message.SumBetCount;
                else
                    object.SumBetCount=options.longs === String ? $util.Long.prototype.toString.call(message.SumBetCount) : options.longs === Number ? new $util.LongBits(message.SumBetCount.low >>> 0, message.SumBetCount.high >>> 0).toNumber() : message.SumBetCount;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount=options.longs === String ? String(message.PoolAmount) : message.PoolAmount;
                else
                    object.PoolAmount=options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) : options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() : message.PoolAmount;
            return object;
        };

        /**
         * Converts this Cd21SysPoolData to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.Cd21SysPoolData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Cd21SysPoolData.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Cd21SysPoolData;
    })();

    GameMsg_DCZZ.UserJackpotToBox=(function () {

        /**
         * Properties of a UserJackpotToBox.
         * @memberof GameMsg_DCZZ
         * @interface IUserJackpotToBox
         * @property {number} UserID UserJackpotToBox UserID
         * @property {number|Long} UpdateAmount UserJackpotToBox UpdateAmount
         */

        /**
         * Constructs a new UserJackpotToBox.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a UserJackpotToBox.
         * @implements IUserJackpotToBox
         * @constructor
         * @param {GameMsg_DCZZ.IUserJackpotToBox=} [properties] Properties to set
         */
        function UserJackpotToBox(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * UserJackpotToBox UserID.
         * @member {number} UserID
         * @memberof GameMsg_DCZZ.UserJackpotToBox
         * @instance
         */
        UserJackpotToBox.prototype.UserID=0;

        /**
         * UserJackpotToBox UpdateAmount.
         * @member {number|Long} UpdateAmount
         * @memberof GameMsg_DCZZ.UserJackpotToBox
         * @instance
         */
        UserJackpotToBox.prototype.UpdateAmount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new UserJackpotToBox instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.UserJackpotToBox
         * @static
         * @param {GameMsg_DCZZ.IUserJackpotToBox=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.UserJackpotToBox} UserJackpotToBox instance
         */
        UserJackpotToBox.create=function create(properties) {
            return new UserJackpotToBox(properties);
        };

        /**
         * Encodes the specified UserJackpotToBox message. Does not implicitly {@link GameMsg_DCZZ.UserJackpotToBox.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.UserJackpotToBox
         * @static
         * @param {GameMsg_DCZZ.IUserJackpotToBox} message UserJackpotToBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJackpotToBox.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.UpdateAmount);
            return writer;
        };

        /**
         * Encodes the specified UserJackpotToBox message, length delimited. Does not implicitly {@link GameMsg_DCZZ.UserJackpotToBox.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.UserJackpotToBox
         * @static
         * @param {GameMsg_DCZZ.IUserJackpotToBox} message UserJackpotToBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJackpotToBox.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserJackpotToBox message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.UserJackpotToBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.UserJackpotToBox} UserJackpotToBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJackpotToBox.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.UserJackpotToBox();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.UpdateAmount=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            if (!message.hasOwnProperty("UpdateAmount"))
                throw $util.ProtocolError("missing required 'UpdateAmount'", { instance : message });
            return message;
        };

        /**
         * Decodes a UserJackpotToBox message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.UserJackpotToBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.UserJackpotToBox} UserJackpotToBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJackpotToBox.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserJackpotToBox message.
         * @function verify
         * @memberof GameMsg_DCZZ.UserJackpotToBox
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserJackpotToBox.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.UpdateAmount) && !(message.UpdateAmount && $util.isInteger(message.UpdateAmount.low) && $util.isInteger(message.UpdateAmount.high)))
                return "UpdateAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserJackpotToBox message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.UserJackpotToBox
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.UserJackpotToBox} UserJackpotToBox
         */
        UserJackpotToBox.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.UserJackpotToBox)
                return object;
            var message=new $root.GameMsg_DCZZ.UserJackpotToBox();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.UpdateAmount != null)
                if ($util.Long)
                    (message.UpdateAmount=$util.Long.fromValue(object.UpdateAmount)).unsigned=false;
                else if (typeof object.UpdateAmount === "string")
                    message.UpdateAmount=parseInt(object.UpdateAmount, 10);
                else if (typeof object.UpdateAmount === "number")
                    message.UpdateAmount=object.UpdateAmount;
                else if (typeof object.UpdateAmount === "object")
                    message.UpdateAmount=new $util.LongBits(object.UpdateAmount.low >>> 0, object.UpdateAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserJackpotToBox message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.UserJackpotToBox
         * @static
         * @param {GameMsg_DCZZ.UserJackpotToBox} message UserJackpotToBox
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserJackpotToBox.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.UserID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.UpdateAmount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UpdateAmount=options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.UpdateAmount != null && message.hasOwnProperty("UpdateAmount"))
                if (typeof message.UpdateAmount === "number")
                    object.UpdateAmount=options.longs === String ? String(message.UpdateAmount) : message.UpdateAmount;
                else
                    object.UpdateAmount=options.longs === String ? $util.Long.prototype.toString.call(message.UpdateAmount) : options.longs === Number ? new $util.LongBits(message.UpdateAmount.low >>> 0, message.UpdateAmount.high >>> 0).toNumber() : message.UpdateAmount;
            return object;
        };

        /**
         * Converts this UserJackpotToBox to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.UserJackpotToBox
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserJackpotToBox.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserJackpotToBox;
    })();

    GameMsg_DCZZ.JackpotData=(function () {

        /**
         * Properties of a JackpotData.
         * @memberof GameMsg_DCZZ
         * @interface IJackpotData
         * @property {number} GameID JackpotData GameID
         * @property {number} FlagID JackpotData FlagID
         * @property {number} TableNo JackpotData TableNo
         * @property {number|Long} Contribution JackpotData Contribution
         * @property {number|Long} TotalContribution JackpotData TotalContribution
         * @property {number|Long} AwardTotal JackpotData AwardTotal
         * @property {number} Level JackpotData Level
         * @property {number|Long} JackpotPool JackpotData JackpotPool
         */

        /**
         * Constructs a new JackpotData.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a JackpotData.
         * @implements IJackpotData
         * @constructor
         * @param {GameMsg_DCZZ.IJackpotData=} [properties] Properties to set
         */
        function JackpotData(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * JackpotData GameID.
         * @member {number} GameID
         * @memberof GameMsg_DCZZ.JackpotData
         * @instance
         */
        JackpotData.prototype.GameID=0;

        /**
         * JackpotData FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_DCZZ.JackpotData
         * @instance
         */
        JackpotData.prototype.FlagID=0;

        /**
         * JackpotData TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_DCZZ.JackpotData
         * @instance
         */
        JackpotData.prototype.TableNo=0;

        /**
         * JackpotData Contribution.
         * @member {number|Long} Contribution
         * @memberof GameMsg_DCZZ.JackpotData
         * @instance
         */
        JackpotData.prototype.Contribution=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * JackpotData TotalContribution.
         * @member {number|Long} TotalContribution
         * @memberof GameMsg_DCZZ.JackpotData
         * @instance
         */
        JackpotData.prototype.TotalContribution=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * JackpotData AwardTotal.
         * @member {number|Long} AwardTotal
         * @memberof GameMsg_DCZZ.JackpotData
         * @instance
         */
        JackpotData.prototype.AwardTotal=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * JackpotData Level.
         * @member {number} Level
         * @memberof GameMsg_DCZZ.JackpotData
         * @instance
         */
        JackpotData.prototype.Level=0;

        /**
         * JackpotData JackpotPool.
         * @member {number|Long} JackpotPool
         * @memberof GameMsg_DCZZ.JackpotData
         * @instance
         */
        JackpotData.prototype.JackpotPool=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new JackpotData instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.JackpotData
         * @static
         * @param {GameMsg_DCZZ.IJackpotData=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.JackpotData} JackpotData instance
         */
        JackpotData.create=function create(properties) {
            return new JackpotData(properties);
        };

        /**
         * Encodes the specified JackpotData message. Does not implicitly {@link GameMsg_DCZZ.JackpotData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.JackpotData
         * @static
         * @param {GameMsg_DCZZ.IJackpotData} message JackpotData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotData.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Contribution);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.TotalContribution);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.AwardTotal);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Level);
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.JackpotPool);
            return writer;
        };

        /**
         * Encodes the specified JackpotData message, length delimited. Does not implicitly {@link GameMsg_DCZZ.JackpotData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.JackpotData
         * @static
         * @param {GameMsg_DCZZ.IJackpotData} message JackpotData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotData.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.JackpotData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.JackpotData} JackpotData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotData.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.JackpotData();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.GameID=reader.int32();
                        break;
                    case 2:
                        message.FlagID=reader.int32();
                        break;
                    case 3:
                        message.TableNo=reader.int32();
                        break;
                    case 4:
                        message.Contribution=reader.int64();
                        break;
                    case 5:
                        message.TotalContribution=reader.int64();
                        break;
                    case 6:
                        message.AwardTotal=reader.int64();
                        break;
                    case 7:
                        message.Level=reader.int32();
                        break;
                    case 8:
                        message.JackpotPool=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance : message });
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance : message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance : message });
            if (!message.hasOwnProperty("Contribution"))
                throw $util.ProtocolError("missing required 'Contribution'", { instance : message });
            if (!message.hasOwnProperty("TotalContribution"))
                throw $util.ProtocolError("missing required 'TotalContribution'", { instance : message });
            if (!message.hasOwnProperty("AwardTotal"))
                throw $util.ProtocolError("missing required 'AwardTotal'", { instance : message });
            if (!message.hasOwnProperty("Level"))
                throw $util.ProtocolError("missing required 'Level'", { instance : message });
            if (!message.hasOwnProperty("JackpotPool"))
                throw $util.ProtocolError("missing required 'JackpotPool'", { instance : message });
            return message;
        };

        /**
         * Decodes a JackpotData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.JackpotData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.JackpotData} JackpotData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotData.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotData message.
         * @function verify
         * @memberof GameMsg_DCZZ.JackpotData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotData.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            if (!$util.isInteger(message.Contribution) && !(message.Contribution && $util.isInteger(message.Contribution.low) && $util.isInteger(message.Contribution.high)))
                return "Contribution: integer|Long expected";
            if (!$util.isInteger(message.TotalContribution) && !(message.TotalContribution && $util.isInteger(message.TotalContribution.low) && $util.isInteger(message.TotalContribution.high)))
                return "TotalContribution: integer|Long expected";
            if (!$util.isInteger(message.AwardTotal) && !(message.AwardTotal && $util.isInteger(message.AwardTotal.low) && $util.isInteger(message.AwardTotal.high)))
                return "AwardTotal: integer|Long expected";
            if (!$util.isInteger(message.Level))
                return "Level: integer expected";
            if (!$util.isInteger(message.JackpotPool) && !(message.JackpotPool && $util.isInteger(message.JackpotPool.low) && $util.isInteger(message.JackpotPool.high)))
                return "JackpotPool: integer|Long expected";
            return null;
        };

        /**
         * Creates a JackpotData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.JackpotData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.JackpotData} JackpotData
         */
        JackpotData.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.JackpotData)
                return object;
            var message=new $root.GameMsg_DCZZ.JackpotData();
            if (object.GameID != null)
                message.GameID=object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID=object.FlagID | 0;
            if (object.TableNo != null)
                message.TableNo=object.TableNo | 0;
            if (object.Contribution != null)
                if ($util.Long)
                    (message.Contribution=$util.Long.fromValue(object.Contribution)).unsigned=false;
                else if (typeof object.Contribution === "string")
                    message.Contribution=parseInt(object.Contribution, 10);
                else if (typeof object.Contribution === "number")
                    message.Contribution=object.Contribution;
                else if (typeof object.Contribution === "object")
                    message.Contribution=new $util.LongBits(object.Contribution.low >>> 0, object.Contribution.high >>> 0).toNumber();
            if (object.TotalContribution != null)
                if ($util.Long)
                    (message.TotalContribution=$util.Long.fromValue(object.TotalContribution)).unsigned=false;
                else if (typeof object.TotalContribution === "string")
                    message.TotalContribution=parseInt(object.TotalContribution, 10);
                else if (typeof object.TotalContribution === "number")
                    message.TotalContribution=object.TotalContribution;
                else if (typeof object.TotalContribution === "object")
                    message.TotalContribution=new $util.LongBits(object.TotalContribution.low >>> 0, object.TotalContribution.high >>> 0).toNumber();
            if (object.AwardTotal != null)
                if ($util.Long)
                    (message.AwardTotal=$util.Long.fromValue(object.AwardTotal)).unsigned=false;
                else if (typeof object.AwardTotal === "string")
                    message.AwardTotal=parseInt(object.AwardTotal, 10);
                else if (typeof object.AwardTotal === "number")
                    message.AwardTotal=object.AwardTotal;
                else if (typeof object.AwardTotal === "object")
                    message.AwardTotal=new $util.LongBits(object.AwardTotal.low >>> 0, object.AwardTotal.high >>> 0).toNumber();
            if (object.Level != null)
                message.Level=object.Level | 0;
            if (object.JackpotPool != null)
                if ($util.Long)
                    (message.JackpotPool=$util.Long.fromValue(object.JackpotPool)).unsigned=false;
                else if (typeof object.JackpotPool === "string")
                    message.JackpotPool=parseInt(object.JackpotPool, 10);
                else if (typeof object.JackpotPool === "number")
                    message.JackpotPool=object.JackpotPool;
                else if (typeof object.JackpotPool === "object")
                    message.JackpotPool=new $util.LongBits(object.JackpotPool.low >>> 0, object.JackpotPool.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a JackpotData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.JackpotData
         * @static
         * @param {GameMsg_DCZZ.JackpotData} message JackpotData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotData.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.GameID=0;
                object.FlagID=0;
                object.TableNo=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Contribution=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Contribution=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.TotalContribution=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalContribution=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.AwardTotal=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AwardTotal=options.longs === String ? "0" : 0;
                object.Level=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.JackpotPool=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.JackpotPool=options.longs === String ? "0" : 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID=message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID=message.FlagID;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo=message.TableNo;
            if (message.Contribution != null && message.hasOwnProperty("Contribution"))
                if (typeof message.Contribution === "number")
                    object.Contribution=options.longs === String ? String(message.Contribution) : message.Contribution;
                else
                    object.Contribution=options.longs === String ? $util.Long.prototype.toString.call(message.Contribution) : options.longs === Number ? new $util.LongBits(message.Contribution.low >>> 0, message.Contribution.high >>> 0).toNumber() : message.Contribution;
            if (message.TotalContribution != null && message.hasOwnProperty("TotalContribution"))
                if (typeof message.TotalContribution === "number")
                    object.TotalContribution=options.longs === String ? String(message.TotalContribution) : message.TotalContribution;
                else
                    object.TotalContribution=options.longs === String ? $util.Long.prototype.toString.call(message.TotalContribution) : options.longs === Number ? new $util.LongBits(message.TotalContribution.low >>> 0, message.TotalContribution.high >>> 0).toNumber() : message.TotalContribution;
            if (message.AwardTotal != null && message.hasOwnProperty("AwardTotal"))
                if (typeof message.AwardTotal === "number")
                    object.AwardTotal=options.longs === String ? String(message.AwardTotal) : message.AwardTotal;
                else
                    object.AwardTotal=options.longs === String ? $util.Long.prototype.toString.call(message.AwardTotal) : options.longs === Number ? new $util.LongBits(message.AwardTotal.low >>> 0, message.AwardTotal.high >>> 0).toNumber() : message.AwardTotal;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level=message.Level;
            if (message.JackpotPool != null && message.hasOwnProperty("JackpotPool"))
                if (typeof message.JackpotPool === "number")
                    object.JackpotPool=options.longs === String ? String(message.JackpotPool) : message.JackpotPool;
                else
                    object.JackpotPool=options.longs === String ? $util.Long.prototype.toString.call(message.JackpotPool) : options.longs === Number ? new $util.LongBits(message.JackpotPool.low >>> 0, message.JackpotPool.high >>> 0).toNumber() : message.JackpotPool;
            return object;
        };

        /**
         * Converts this JackpotData to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.JackpotData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotData.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotData;
    })();

    GameMsg_DCZZ.JackpotAllData=(function () {

        /**
         * Properties of a JackpotAllData.
         * @memberof GameMsg_DCZZ
         * @interface IJackpotAllData
         * @property {Array.<GameMsg_DCZZ.IJackpotData>|null} [AllData] JackpotAllData AllData
         */

        /**
         * Constructs a new JackpotAllData.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a JackpotAllData.
         * @implements IJackpotAllData
         * @constructor
         * @param {GameMsg_DCZZ.IJackpotAllData=} [properties] Properties to set
         */
        function JackpotAllData(properties) {
            this.AllData=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * JackpotAllData AllData.
         * @member {Array.<GameMsg_DCZZ.IJackpotData>} AllData
         * @memberof GameMsg_DCZZ.JackpotAllData
         * @instance
         */
        JackpotAllData.prototype.AllData=$util.emptyArray;

        /**
         * Creates a new JackpotAllData instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.JackpotAllData
         * @static
         * @param {GameMsg_DCZZ.IJackpotAllData=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.JackpotAllData} JackpotAllData instance
         */
        JackpotAllData.create=function create(properties) {
            return new JackpotAllData(properties);
        };

        /**
         * Encodes the specified JackpotAllData message. Does not implicitly {@link GameMsg_DCZZ.JackpotAllData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.JackpotAllData
         * @static
         * @param {GameMsg_DCZZ.IJackpotAllData} message JackpotAllData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotAllData.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.AllData != null && message.AllData.length)
                for (var i=0; i<message.AllData.length; ++ i)
                    $root.GameMsg_DCZZ.JackpotData.encode(message.AllData[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JackpotAllData message, length delimited. Does not implicitly {@link GameMsg_DCZZ.JackpotAllData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.JackpotAllData
         * @static
         * @param {GameMsg_DCZZ.IJackpotAllData} message JackpotAllData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotAllData.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotAllData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.JackpotAllData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.JackpotAllData} JackpotAllData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotAllData.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.JackpotAllData();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.AllData && message.AllData.length))
                            message.AllData=[];
                        message.AllData.push($root.GameMsg_DCZZ.JackpotData.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotAllData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.JackpotAllData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.JackpotAllData} JackpotAllData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotAllData.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotAllData message.
         * @function verify
         * @memberof GameMsg_DCZZ.JackpotAllData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotAllData.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AllData != null && message.hasOwnProperty("AllData")) {
                if (!Array.isArray(message.AllData))
                    return "AllData: array expected";
                for (var i=0; i<message.AllData.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.JackpotData.verify(message.AllData[i]);
                    if (error)
                        return "AllData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JackpotAllData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.JackpotAllData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.JackpotAllData} JackpotAllData
         */
        JackpotAllData.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.JackpotAllData)
                return object;
            var message=new $root.GameMsg_DCZZ.JackpotAllData();
            if (object.AllData) {
                if (!Array.isArray(object.AllData))
                    throw TypeError(".GameMsg_DCZZ.JackpotAllData.AllData: array expected");
                message.AllData=[];
                for (var i=0; i<object.AllData.length; ++ i) {
                    if (typeof object.AllData[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.JackpotAllData.AllData: object expected");
                    message.AllData[i]=$root.GameMsg_DCZZ.JackpotData.fromObject(object.AllData[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JackpotAllData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.JackpotAllData
         * @static
         * @param {GameMsg_DCZZ.JackpotAllData} message JackpotAllData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotAllData.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.AllData=[];
            if (message.AllData && message.AllData.length) {
                object.AllData=[];
                for (var j=0; j<message.AllData.length; ++ j)
                    object.AllData[j]=$root.GameMsg_DCZZ.JackpotData.toObject(message.AllData[j], options);
            }
            return object;
        };

        /**
         * Converts this JackpotAllData to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.JackpotAllData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotAllData.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotAllData;
    })();

    GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose=(function () {

        /**
         * Properties of a SuperTool_Msg_GetSysPoolWinLose.
         * @memberof GameMsg_DCZZ
         * @interface ISuperTool_Msg_GetSysPoolWinLose
         * @property {number} GameID SuperTool_Msg_GetSysPoolWinLose GameID
         * @property {number} FlagID SuperTool_Msg_GetSysPoolWinLose FlagID
         */

        /**
         * Constructs a new SuperTool_Msg_GetSysPoolWinLose.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperTool_Msg_GetSysPoolWinLose.
         * @implements ISuperTool_Msg_GetSysPoolWinLose
         * @constructor
         * @param {GameMsg_DCZZ.ISuperTool_Msg_GetSysPoolWinLose=} [properties] Properties to set
         */
        function SuperTool_Msg_GetSysPoolWinLose(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperTool_Msg_GetSysPoolWinLose GameID.
         * @member {number} GameID
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLose.prototype.GameID=0;

        /**
         * SuperTool_Msg_GetSysPoolWinLose FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLose.prototype.FlagID=0;

        /**
         * Creates a new SuperTool_Msg_GetSysPoolWinLose instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {GameMsg_DCZZ.ISuperTool_Msg_GetSysPoolWinLose=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose} SuperTool_Msg_GetSysPoolWinLose instance
         */
        SuperTool_Msg_GetSysPoolWinLose.create=function create(properties) {
            return new SuperTool_Msg_GetSysPoolWinLose(properties);
        };

        /**
         * Encodes the specified SuperTool_Msg_GetSysPoolWinLose message. Does not implicitly {@link GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {GameMsg_DCZZ.ISuperTool_Msg_GetSysPoolWinLose} message SuperTool_Msg_GetSysPoolWinLose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_GetSysPoolWinLose.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            return writer;
        };

        /**
         * Encodes the specified SuperTool_Msg_GetSysPoolWinLose message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {GameMsg_DCZZ.ISuperTool_Msg_GetSysPoolWinLose} message SuperTool_Msg_GetSysPoolWinLose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_GetSysPoolWinLose.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperTool_Msg_GetSysPoolWinLose message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose} SuperTool_Msg_GetSysPoolWinLose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_GetSysPoolWinLose.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.GameID=reader.int32();
                        break;
                    case 2:
                        message.FlagID=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance : message });
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperTool_Msg_GetSysPoolWinLose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose} SuperTool_Msg_GetSysPoolWinLose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_GetSysPoolWinLose.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperTool_Msg_GetSysPoolWinLose message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperTool_Msg_GetSysPoolWinLose.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            return null;
        };

        /**
         * Creates a SuperTool_Msg_GetSysPoolWinLose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose} SuperTool_Msg_GetSysPoolWinLose
         */
        SuperTool_Msg_GetSysPoolWinLose.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose();
            if (object.GameID != null)
                message.GameID=object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID=object.FlagID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperTool_Msg_GetSysPoolWinLose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose} message SuperTool_Msg_GetSysPoolWinLose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperTool_Msg_GetSysPoolWinLose.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.GameID=0;
                object.FlagID=0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID=message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID=message.FlagID;
            return object;
        };

        /**
         * Converts this SuperTool_Msg_GetSysPoolWinLose to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperTool_Msg_GetSysPoolWinLose.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperTool_Msg_GetSysPoolWinLose;
    })();

    GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet=(function () {

        /**
         * Properties of a SuperTool_Msg_GetSysPoolWinLoseRet.
         * @memberof GameMsg_DCZZ
         * @interface ISuperTool_Msg_GetSysPoolWinLoseRet
         * @property {number} GameID SuperTool_Msg_GetSysPoolWinLoseRet GameID
         * @property {number} FlagID SuperTool_Msg_GetSysPoolWinLoseRet FlagID
         * @property {number|Long} PoolAmount SuperTool_Msg_GetSysPoolWinLoseRet PoolAmount
         * @property {number|Long} WinLine SuperTool_Msg_GetSysPoolWinLoseRet WinLine
         * @property {string} WinLoseData SuperTool_Msg_GetSysPoolWinLoseRet WinLoseData
         */

        /**
         * Constructs a new SuperTool_Msg_GetSysPoolWinLoseRet.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperTool_Msg_GetSysPoolWinLoseRet.
         * @implements ISuperTool_Msg_GetSysPoolWinLoseRet
         * @constructor
         * @param {GameMsg_DCZZ.ISuperTool_Msg_GetSysPoolWinLoseRet=} [properties] Properties to set
         */
        function SuperTool_Msg_GetSysPoolWinLoseRet(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet GameID.
         * @member {number} GameID
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.GameID=0;

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.FlagID=0;

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.PoolAmount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet WinLine.
         * @member {number|Long} WinLine
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.WinLine=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet WinLoseData.
         * @member {string} WinLoseData
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.WinLoseData="";

        /**
         * Creates a new SuperTool_Msg_GetSysPoolWinLoseRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {GameMsg_DCZZ.ISuperTool_Msg_GetSysPoolWinLoseRet=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet} SuperTool_Msg_GetSysPoolWinLoseRet instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.create=function create(properties) {
            return new SuperTool_Msg_GetSysPoolWinLoseRet(properties);
        };

        /**
         * Encodes the specified SuperTool_Msg_GetSysPoolWinLoseRet message. Does not implicitly {@link GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {GameMsg_DCZZ.ISuperTool_Msg_GetSysPoolWinLoseRet} message SuperTool_Msg_GetSysPoolWinLoseRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.PoolAmount);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.WinLine);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.WinLoseData);
            return writer;
        };

        /**
         * Encodes the specified SuperTool_Msg_GetSysPoolWinLoseRet message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {GameMsg_DCZZ.ISuperTool_Msg_GetSysPoolWinLoseRet} message SuperTool_Msg_GetSysPoolWinLoseRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperTool_Msg_GetSysPoolWinLoseRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet} SuperTool_Msg_GetSysPoolWinLoseRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.GameID=reader.int32();
                        break;
                    case 2:
                        message.FlagID=reader.int32();
                        break;
                    case 3:
                        message.PoolAmount=reader.int64();
                        break;
                    case 4:
                        message.WinLine=reader.int64();
                        break;
                    case 5:
                        message.WinLoseData=reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance : message });
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance : message });
            if (!message.hasOwnProperty("PoolAmount"))
                throw $util.ProtocolError("missing required 'PoolAmount'", { instance : message });
            if (!message.hasOwnProperty("WinLine"))
                throw $util.ProtocolError("missing required 'WinLine'", { instance : message });
            if (!message.hasOwnProperty("WinLoseData"))
                throw $util.ProtocolError("missing required 'WinLoseData'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperTool_Msg_GetSysPoolWinLoseRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet} SuperTool_Msg_GetSysPoolWinLoseRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperTool_Msg_GetSysPoolWinLoseRet message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.PoolAmount) && !(message.PoolAmount && $util.isInteger(message.PoolAmount.low) && $util.isInteger(message.PoolAmount.high)))
                return "PoolAmount: integer|Long expected";
            if (!$util.isInteger(message.WinLine) && !(message.WinLine && $util.isInteger(message.WinLine.low) && $util.isInteger(message.WinLine.high)))
                return "WinLine: integer|Long expected";
            if (!$util.isString(message.WinLoseData))
                return "WinLoseData: string expected";
            return null;
        };

        /**
         * Creates a SuperTool_Msg_GetSysPoolWinLoseRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet} SuperTool_Msg_GetSysPoolWinLoseRet
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet();
            if (object.GameID != null)
                message.GameID=object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID=object.FlagID | 0;
            if (object.PoolAmount != null)
                if ($util.Long)
                    (message.PoolAmount=$util.Long.fromValue(object.PoolAmount)).unsigned=false;
                else if (typeof object.PoolAmount === "string")
                    message.PoolAmount=parseInt(object.PoolAmount, 10);
                else if (typeof object.PoolAmount === "number")
                    message.PoolAmount=object.PoolAmount;
                else if (typeof object.PoolAmount === "object")
                    message.PoolAmount=new $util.LongBits(object.PoolAmount.low >>> 0, object.PoolAmount.high >>> 0).toNumber();
            if (object.WinLine != null)
                if ($util.Long)
                    (message.WinLine=$util.Long.fromValue(object.WinLine)).unsigned=false;
                else if (typeof object.WinLine === "string")
                    message.WinLine=parseInt(object.WinLine, 10);
                else if (typeof object.WinLine === "number")
                    message.WinLine=object.WinLine;
                else if (typeof object.WinLine === "object")
                    message.WinLine=new $util.LongBits(object.WinLine.low >>> 0, object.WinLine.high >>> 0).toNumber();
            if (object.WinLoseData != null)
                message.WinLoseData=String(object.WinLoseData);
            return message;
        };

        /**
         * Creates a plain object from a SuperTool_Msg_GetSysPoolWinLoseRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet} message SuperTool_Msg_GetSysPoolWinLoseRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.GameID=0;
                object.FlagID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.PoolAmount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolAmount=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.WinLine=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinLine=options.longs === String ? "0" : 0;
                object.WinLoseData="";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID=message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID=message.FlagID;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount=options.longs === String ? String(message.PoolAmount) : message.PoolAmount;
                else
                    object.PoolAmount=options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) : options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() : message.PoolAmount;
            if (message.WinLine != null && message.hasOwnProperty("WinLine"))
                if (typeof message.WinLine === "number")
                    object.WinLine=options.longs === String ? String(message.WinLine) : message.WinLine;
                else
                    object.WinLine=options.longs === String ? $util.Long.prototype.toString.call(message.WinLine) : options.longs === Number ? new $util.LongBits(message.WinLine.low >>> 0, message.WinLine.high >>> 0).toNumber() : message.WinLine;
            if (message.WinLoseData != null && message.hasOwnProperty("WinLoseData"))
                object.WinLoseData=message.WinLoseData;
            return object;
        };

        /**
         * Converts this SuperTool_Msg_GetSysPoolWinLoseRet to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperTool_Msg_GetSysPoolWinLoseRet;
    })();

    GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose=(function () {

        /**
         * Properties of a SuperTool_Msg_UpdateSysPoolWinLose.
         * @memberof GameMsg_DCZZ
         * @interface ISuperTool_Msg_UpdateSysPoolWinLose
         * @property {number} GameID SuperTool_Msg_UpdateSysPoolWinLose GameID
         * @property {number} FlagID SuperTool_Msg_UpdateSysPoolWinLose FlagID
         * @property {number|Long} PoolAmount SuperTool_Msg_UpdateSysPoolWinLose PoolAmount
         * @property {number|Long} WinLine SuperTool_Msg_UpdateSysPoolWinLose WinLine
         * @property {string} WinLoseData SuperTool_Msg_UpdateSysPoolWinLose WinLoseData
         */

        /**
         * Constructs a new SuperTool_Msg_UpdateSysPoolWinLose.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a SuperTool_Msg_UpdateSysPoolWinLose.
         * @implements ISuperTool_Msg_UpdateSysPoolWinLose
         * @constructor
         * @param {GameMsg_DCZZ.ISuperTool_Msg_UpdateSysPoolWinLose=} [properties] Properties to set
         */
        function SuperTool_Msg_UpdateSysPoolWinLose(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose GameID.
         * @member {number} GameID
         * @memberof GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.GameID=0;

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.FlagID=0;

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.PoolAmount=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose WinLine.
         * @member {number|Long} WinLine
         * @memberof GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.WinLine=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose WinLoseData.
         * @member {string} WinLoseData
         * @memberof GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.WinLoseData="";

        /**
         * Creates a new SuperTool_Msg_UpdateSysPoolWinLose instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {GameMsg_DCZZ.ISuperTool_Msg_UpdateSysPoolWinLose=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose} SuperTool_Msg_UpdateSysPoolWinLose instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.create=function create(properties) {
            return new SuperTool_Msg_UpdateSysPoolWinLose(properties);
        };

        /**
         * Encodes the specified SuperTool_Msg_UpdateSysPoolWinLose message. Does not implicitly {@link GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {GameMsg_DCZZ.ISuperTool_Msg_UpdateSysPoolWinLose} message SuperTool_Msg_UpdateSysPoolWinLose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_UpdateSysPoolWinLose.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.PoolAmount);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.WinLine);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.WinLoseData);
            return writer;
        };

        /**
         * Encodes the specified SuperTool_Msg_UpdateSysPoolWinLose message, length delimited. Does not implicitly {@link GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {GameMsg_DCZZ.ISuperTool_Msg_UpdateSysPoolWinLose} message SuperTool_Msg_UpdateSysPoolWinLose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_UpdateSysPoolWinLose.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperTool_Msg_UpdateSysPoolWinLose message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose} SuperTool_Msg_UpdateSysPoolWinLose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_UpdateSysPoolWinLose.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.GameID=reader.int32();
                        break;
                    case 2:
                        message.FlagID=reader.int32();
                        break;
                    case 3:
                        message.PoolAmount=reader.int64();
                        break;
                    case 4:
                        message.WinLine=reader.int64();
                        break;
                    case 5:
                        message.WinLoseData=reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance : message });
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance : message });
            if (!message.hasOwnProperty("PoolAmount"))
                throw $util.ProtocolError("missing required 'PoolAmount'", { instance : message });
            if (!message.hasOwnProperty("WinLine"))
                throw $util.ProtocolError("missing required 'WinLine'", { instance : message });
            if (!message.hasOwnProperty("WinLoseData"))
                throw $util.ProtocolError("missing required 'WinLoseData'", { instance : message });
            return message;
        };

        /**
         * Decodes a SuperTool_Msg_UpdateSysPoolWinLose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose} SuperTool_Msg_UpdateSysPoolWinLose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_UpdateSysPoolWinLose.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperTool_Msg_UpdateSysPoolWinLose message.
         * @function verify
         * @memberof GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperTool_Msg_UpdateSysPoolWinLose.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.PoolAmount) && !(message.PoolAmount && $util.isInteger(message.PoolAmount.low) && $util.isInteger(message.PoolAmount.high)))
                return "PoolAmount: integer|Long expected";
            if (!$util.isInteger(message.WinLine) && !(message.WinLine && $util.isInteger(message.WinLine.low) && $util.isInteger(message.WinLine.high)))
                return "WinLine: integer|Long expected";
            if (!$util.isString(message.WinLoseData))
                return "WinLoseData: string expected";
            return null;
        };

        /**
         * Creates a SuperTool_Msg_UpdateSysPoolWinLose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose} SuperTool_Msg_UpdateSysPoolWinLose
         */
        SuperTool_Msg_UpdateSysPoolWinLose.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose)
                return object;
            var message=new $root.GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose();
            if (object.GameID != null)
                message.GameID=object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID=object.FlagID | 0;
            if (object.PoolAmount != null)
                if ($util.Long)
                    (message.PoolAmount=$util.Long.fromValue(object.PoolAmount)).unsigned=false;
                else if (typeof object.PoolAmount === "string")
                    message.PoolAmount=parseInt(object.PoolAmount, 10);
                else if (typeof object.PoolAmount === "number")
                    message.PoolAmount=object.PoolAmount;
                else if (typeof object.PoolAmount === "object")
                    message.PoolAmount=new $util.LongBits(object.PoolAmount.low >>> 0, object.PoolAmount.high >>> 0).toNumber();
            if (object.WinLine != null)
                if ($util.Long)
                    (message.WinLine=$util.Long.fromValue(object.WinLine)).unsigned=false;
                else if (typeof object.WinLine === "string")
                    message.WinLine=parseInt(object.WinLine, 10);
                else if (typeof object.WinLine === "number")
                    message.WinLine=object.WinLine;
                else if (typeof object.WinLine === "object")
                    message.WinLine=new $util.LongBits(object.WinLine.low >>> 0, object.WinLine.high >>> 0).toNumber();
            if (object.WinLoseData != null)
                message.WinLoseData=String(object.WinLoseData);
            return message;
        };

        /**
         * Creates a plain object from a SuperTool_Msg_UpdateSysPoolWinLose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose} message SuperTool_Msg_UpdateSysPoolWinLose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperTool_Msg_UpdateSysPoolWinLose.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.GameID=0;
                object.FlagID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.PoolAmount=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolAmount=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.WinLine=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinLine=options.longs === String ? "0" : 0;
                object.WinLoseData="";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID=message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID=message.FlagID;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount=options.longs === String ? String(message.PoolAmount) : message.PoolAmount;
                else
                    object.PoolAmount=options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) : options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() : message.PoolAmount;
            if (message.WinLine != null && message.hasOwnProperty("WinLine"))
                if (typeof message.WinLine === "number")
                    object.WinLine=options.longs === String ? String(message.WinLine) : message.WinLine;
                else
                    object.WinLine=options.longs === String ? $util.Long.prototype.toString.call(message.WinLine) : options.longs === Number ? new $util.LongBits(message.WinLine.low >>> 0, message.WinLine.high >>> 0).toNumber() : message.WinLine;
            if (message.WinLoseData != null && message.hasOwnProperty("WinLoseData"))
                object.WinLoseData=message.WinLoseData;
            return object;
        };

        /**
         * Converts this SuperTool_Msg_UpdateSysPoolWinLose to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperTool_Msg_UpdateSysPoolWinLose;
    })();

    GameMsg_DCZZ.DCZZ_Msg_GameInfo=(function () {

        /**
         * Properties of a DCZZ_Msg_GameInfo.
         * @memberof GameMsg_DCZZ
         * @interface IDCZZ_Msg_GameInfo
         * @property {number} TimeRemain DCZZ_Msg_GameInfo TimeRemain
         * @property {Array.<string>|null} [PokerManual] DCZZ_Msg_GameInfo PokerManual
         * @property {Array.<number>|null} [ChipValue] DCZZ_Msg_GameInfo ChipValue
         * @property {Array.<GameMsg_DCZZ.IPokerCard>|null} [DealerCards] DCZZ_Msg_GameInfo DealerCards
         * @property {Array.<GameMsg_DCZZ.IDCZZ_Msg_UserInfo>|null} [AllUserInfo] DCZZ_Msg_GameInfo AllUserInfo
         * @property {number|Long} BetBaseLimit DCZZ_Msg_GameInfo BetBaseLimit
         * @property {number|Long} BetSideLimit DCZZ_Msg_GameInfo BetSideLimit
         */

        /**
         * Constructs a new DCZZ_Msg_GameInfo.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a DCZZ_Msg_GameInfo.
         * @implements IDCZZ_Msg_GameInfo
         * @constructor
         * @param {GameMsg_DCZZ.IDCZZ_Msg_GameInfo=} [properties] Properties to set
         */
        function DCZZ_Msg_GameInfo(properties) {
            this.PokerManual=[];
            this.ChipValue=[];
            this.DealerCards=[];
            this.AllUserInfo=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * DCZZ_Msg_GameInfo TimeRemain.
         * @member {number} TimeRemain
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @instance
         */
        DCZZ_Msg_GameInfo.prototype.TimeRemain=0;

        /**
         * DCZZ_Msg_GameInfo PokerManual.
         * @member {Array.<string>} PokerManual
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @instance
         */
        DCZZ_Msg_GameInfo.prototype.PokerManual=$util.emptyArray;

        /**
         * DCZZ_Msg_GameInfo ChipValue.
         * @member {Array.<number>} ChipValue
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @instance
         */
        DCZZ_Msg_GameInfo.prototype.ChipValue=$util.emptyArray;

        /**
         * DCZZ_Msg_GameInfo DealerCards.
         * @member {Array.<GameMsg_DCZZ.IPokerCard>} DealerCards
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @instance
         */
        DCZZ_Msg_GameInfo.prototype.DealerCards=$util.emptyArray;

        /**
         * DCZZ_Msg_GameInfo AllUserInfo.
         * @member {Array.<GameMsg_DCZZ.IDCZZ_Msg_UserInfo>} AllUserInfo
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @instance
         */
        DCZZ_Msg_GameInfo.prototype.AllUserInfo=$util.emptyArray;

        /**
         * DCZZ_Msg_GameInfo BetBaseLimit.
         * @member {number|Long} BetBaseLimit
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @instance
         */
        DCZZ_Msg_GameInfo.prototype.BetBaseLimit=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * DCZZ_Msg_GameInfo BetSideLimit.
         * @member {number|Long} BetSideLimit
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @instance
         */
        DCZZ_Msg_GameInfo.prototype.BetSideLimit=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new DCZZ_Msg_GameInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_GameInfo=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.DCZZ_Msg_GameInfo} DCZZ_Msg_GameInfo instance
         */
        DCZZ_Msg_GameInfo.create=function create(properties) {
            return new DCZZ_Msg_GameInfo(properties);
        };

        /**
         * Encodes the specified DCZZ_Msg_GameInfo message. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_GameInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_GameInfo} message DCZZ_Msg_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_GameInfo.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TimeRemain);
            if (message.PokerManual != null && message.PokerManual.length)
                for (var i=0; i<message.PokerManual.length; ++ i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.PokerManual[i]);
            if (message.ChipValue != null && message.ChipValue.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i=0; i<message.ChipValue.length; ++ i)
                    writer.int32(message.ChipValue[i]);
                writer.ldelim();
            }
            if (message.DealerCards != null && message.DealerCards.length)
                for (var i=0; i<message.DealerCards.length; ++ i)
                    $root.GameMsg_DCZZ.PokerCard.encode(message.DealerCards[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.AllUserInfo != null && message.AllUserInfo.length)
                for (var i=0; i<message.AllUserInfo.length; ++ i)
                    $root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.encode(message.AllUserInfo[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.BetBaseLimit);
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.BetSideLimit);
            return writer;
        };

        /**
         * Encodes the specified DCZZ_Msg_GameInfo message, length delimited. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_GameInfo} message DCZZ_Msg_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_GameInfo.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DCZZ_Msg_GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.DCZZ_Msg_GameInfo} DCZZ_Msg_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_GameInfo.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.DCZZ_Msg_GameInfo();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.TimeRemain=reader.int32();
                        break;
                    case 2:
                        if (!(message.PokerManual && message.PokerManual.length))
                            message.PokerManual=[];
                        message.PokerManual.push(reader.string());
                        break;
                    case 3:
                        if (!(message.ChipValue && message.ChipValue.length))
                            message.ChipValue=[];
                        if ((tag & 7) === 2) {
                            var end2=reader.uint32() + reader.pos;
                            while (reader.pos<end2)
                                message.ChipValue.push(reader.int32());
                        } else
                            message.ChipValue.push(reader.int32());
                        break;
                    case 4:
                        if (!(message.DealerCards && message.DealerCards.length))
                            message.DealerCards=[];
                        message.DealerCards.push($root.GameMsg_DCZZ.PokerCard.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.AllUserInfo && message.AllUserInfo.length))
                            message.AllUserInfo=[];
                        message.AllUserInfo.push($root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        message.BetBaseLimit=reader.int64();
                        break;
                    case 7:
                        message.BetSideLimit=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("TimeRemain"))
                throw $util.ProtocolError("missing required 'TimeRemain'", { instance : message });
            if (!message.hasOwnProperty("BetBaseLimit"))
                throw $util.ProtocolError("missing required 'BetBaseLimit'", { instance : message });
            if (!message.hasOwnProperty("BetSideLimit"))
                throw $util.ProtocolError("missing required 'BetSideLimit'", { instance : message });
            return message;
        };

        /**
         * Decodes a DCZZ_Msg_GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.DCZZ_Msg_GameInfo} DCZZ_Msg_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_GameInfo.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DCZZ_Msg_GameInfo message.
         * @function verify
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DCZZ_Msg_GameInfo.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.TimeRemain))
                return "TimeRemain: integer expected";
            if (message.PokerManual != null && message.hasOwnProperty("PokerManual")) {
                if (!Array.isArray(message.PokerManual))
                    return "PokerManual: array expected";
                for (var i=0; i<message.PokerManual.length; ++ i)
                    if (!$util.isString(message.PokerManual[i]))
                        return "PokerManual: string[] expected";
            }
            if (message.ChipValue != null && message.hasOwnProperty("ChipValue")) {
                if (!Array.isArray(message.ChipValue))
                    return "ChipValue: array expected";
                for (var i=0; i<message.ChipValue.length; ++ i)
                    if (!$util.isInteger(message.ChipValue[i]))
                        return "ChipValue: integer[] expected";
            }
            if (message.DealerCards != null && message.hasOwnProperty("DealerCards")) {
                if (!Array.isArray(message.DealerCards))
                    return "DealerCards: array expected";
                for (var i=0; i<message.DealerCards.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.PokerCard.verify(message.DealerCards[i]);
                    if (error)
                        return "DealerCards." + error;
                }
            }
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo")) {
                if (!Array.isArray(message.AllUserInfo))
                    return "AllUserInfo: array expected";
                for (var i=0; i<message.AllUserInfo.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.verify(message.AllUserInfo[i]);
                    if (error)
                        return "AllUserInfo." + error;
                }
            }
            if (!$util.isInteger(message.BetBaseLimit) && !(message.BetBaseLimit && $util.isInteger(message.BetBaseLimit.low) && $util.isInteger(message.BetBaseLimit.high)))
                return "BetBaseLimit: integer|Long expected";
            if (!$util.isInteger(message.BetSideLimit) && !(message.BetSideLimit && $util.isInteger(message.BetSideLimit.low) && $util.isInteger(message.BetSideLimit.high)))
                return "BetSideLimit: integer|Long expected";
            return null;
        };

        /**
         * Creates a DCZZ_Msg_GameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.DCZZ_Msg_GameInfo} DCZZ_Msg_GameInfo
         */
        DCZZ_Msg_GameInfo.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.DCZZ_Msg_GameInfo)
                return object;
            var message=new $root.GameMsg_DCZZ.DCZZ_Msg_GameInfo();
            if (object.TimeRemain != null)
                message.TimeRemain=object.TimeRemain | 0;
            if (object.PokerManual) {
                if (!Array.isArray(object.PokerManual))
                    throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_GameInfo.PokerManual: array expected");
                message.PokerManual=[];
                for (var i=0; i<object.PokerManual.length; ++ i)
                    message.PokerManual[i]=String(object.PokerManual[i]);
            }
            if (object.ChipValue) {
                if (!Array.isArray(object.ChipValue))
                    throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_GameInfo.ChipValue: array expected");
                message.ChipValue=[];
                for (var i=0; i<object.ChipValue.length; ++ i)
                    message.ChipValue[i]=object.ChipValue[i] | 0;
            }
            if (object.DealerCards) {
                if (!Array.isArray(object.DealerCards))
                    throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_GameInfo.DealerCards: array expected");
                message.DealerCards=[];
                for (var i=0; i<object.DealerCards.length; ++ i) {
                    if (typeof object.DealerCards[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_GameInfo.DealerCards: object expected");
                    message.DealerCards[i]=$root.GameMsg_DCZZ.PokerCard.fromObject(object.DealerCards[i]);
                }
            }
            if (object.AllUserInfo) {
                if (!Array.isArray(object.AllUserInfo))
                    throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_GameInfo.AllUserInfo: array expected");
                message.AllUserInfo=[];
                for (var i=0; i<object.AllUserInfo.length; ++ i) {
                    if (typeof object.AllUserInfo[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_GameInfo.AllUserInfo: object expected");
                    message.AllUserInfo[i]=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.fromObject(object.AllUserInfo[i]);
                }
            }
            if (object.BetBaseLimit != null)
                if ($util.Long)
                    (message.BetBaseLimit=$util.Long.fromValue(object.BetBaseLimit)).unsigned=false;
                else if (typeof object.BetBaseLimit === "string")
                    message.BetBaseLimit=parseInt(object.BetBaseLimit, 10);
                else if (typeof object.BetBaseLimit === "number")
                    message.BetBaseLimit=object.BetBaseLimit;
                else if (typeof object.BetBaseLimit === "object")
                    message.BetBaseLimit=new $util.LongBits(object.BetBaseLimit.low >>> 0, object.BetBaseLimit.high >>> 0).toNumber();
            if (object.BetSideLimit != null)
                if ($util.Long)
                    (message.BetSideLimit=$util.Long.fromValue(object.BetSideLimit)).unsigned=false;
                else if (typeof object.BetSideLimit === "string")
                    message.BetSideLimit=parseInt(object.BetSideLimit, 10);
                else if (typeof object.BetSideLimit === "number")
                    message.BetSideLimit=object.BetSideLimit;
                else if (typeof object.BetSideLimit === "object")
                    message.BetSideLimit=new $util.LongBits(object.BetSideLimit.low >>> 0, object.BetSideLimit.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DCZZ_Msg_GameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @static
         * @param {GameMsg_DCZZ.DCZZ_Msg_GameInfo} message DCZZ_Msg_GameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DCZZ_Msg_GameInfo.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults) {
                object.PokerManual=[];
                object.ChipValue=[];
                object.DealerCards=[];
                object.AllUserInfo=[];
            }
            if (options.defaults) {
                object.TimeRemain=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.BetBaseLimit=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetBaseLimit=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.BetSideLimit=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetSideLimit=options.longs === String ? "0" : 0;
            }
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                object.TimeRemain=message.TimeRemain;
            if (message.PokerManual && message.PokerManual.length) {
                object.PokerManual=[];
                for (var j=0; j<message.PokerManual.length; ++ j)
                    object.PokerManual[j]=message.PokerManual[j];
            }
            if (message.ChipValue && message.ChipValue.length) {
                object.ChipValue=[];
                for (var j=0; j<message.ChipValue.length; ++ j)
                    object.ChipValue[j]=message.ChipValue[j];
            }
            if (message.DealerCards && message.DealerCards.length) {
                object.DealerCards=[];
                for (var j=0; j<message.DealerCards.length; ++ j)
                    object.DealerCards[j]=$root.GameMsg_DCZZ.PokerCard.toObject(message.DealerCards[j], options);
            }
            if (message.AllUserInfo && message.AllUserInfo.length) {
                object.AllUserInfo=[];
                for (var j=0; j<message.AllUserInfo.length; ++ j)
                    object.AllUserInfo[j]=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.toObject(message.AllUserInfo[j], options);
            }
            if (message.BetBaseLimit != null && message.hasOwnProperty("BetBaseLimit"))
                if (typeof message.BetBaseLimit === "number")
                    object.BetBaseLimit=options.longs === String ? String(message.BetBaseLimit) : message.BetBaseLimit;
                else
                    object.BetBaseLimit=options.longs === String ? $util.Long.prototype.toString.call(message.BetBaseLimit) : options.longs === Number ? new $util.LongBits(message.BetBaseLimit.low >>> 0, message.BetBaseLimit.high >>> 0).toNumber() : message.BetBaseLimit;
            if (message.BetSideLimit != null && message.hasOwnProperty("BetSideLimit"))
                if (typeof message.BetSideLimit === "number")
                    object.BetSideLimit=options.longs === String ? String(message.BetSideLimit) : message.BetSideLimit;
                else
                    object.BetSideLimit=options.longs === String ? $util.Long.prototype.toString.call(message.BetSideLimit) : options.longs === Number ? new $util.LongBits(message.BetSideLimit.low >>> 0, message.BetSideLimit.high >>> 0).toNumber() : message.BetSideLimit;
            return object;
        };

        /**
         * Converts this DCZZ_Msg_GameInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.DCZZ_Msg_GameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DCZZ_Msg_GameInfo.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DCZZ_Msg_GameInfo;
    })();

    GameMsg_DCZZ.DCZZ_Msg_UserInfo=(function () {

        /**
         * Properties of a DCZZ_Msg_UserInfo.
         * @memberof GameMsg_DCZZ
         * @interface IDCZZ_Msg_UserInfo
         * @property {number} UserID DCZZ_Msg_UserInfo UserID
         * @property {number} SeatNo DCZZ_Msg_UserInfo SeatNo
         * @property {number} State DCZZ_Msg_UserInfo State
         * @property {number|Long} Money DCZZ_Msg_UserInfo Money
         * @property {Array.<GameMsg_DCZZ.IPokerCard>|null} [HandCards] DCZZ_Msg_UserInfo HandCards
         * @property {number|Long} Bet_Base DCZZ_Msg_UserInfo Bet_Base
         * @property {number|Long} Bet_Side DCZZ_Msg_UserInfo Bet_Side
         * @property {number|Long} Bet_Double DCZZ_Msg_UserInfo Bet_Double
         * @property {number|Long} TotalWinLose DCZZ_Msg_UserInfo TotalWinLose
         * @property {boolean} IsTied DCZZ_Msg_UserInfo IsTied
         * @property {boolean} GetTieAward DCZZ_Msg_UserInfo GetTieAward
         * @property {boolean} CanEnterWar DCZZ_Msg_UserInfo CanEnterWar
         * @property {boolean} IsFolded DCZZ_Msg_UserInfo IsFolded
         * @property {number|Long} FoldRecover DCZZ_Msg_UserInfo FoldRecover
         * @property {number} Winner DCZZ_Msg_UserInfo Winner
         */

        /**
         * Constructs a new DCZZ_Msg_UserInfo.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a DCZZ_Msg_UserInfo.
         * @implements IDCZZ_Msg_UserInfo
         * @constructor
         * @param {GameMsg_DCZZ.IDCZZ_Msg_UserInfo=} [properties] Properties to set
         */
        function DCZZ_Msg_UserInfo(properties) {
            this.HandCards=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * DCZZ_Msg_UserInfo UserID.
         * @member {number} UserID
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.UserID=0;

        /**
         * DCZZ_Msg_UserInfo SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.SeatNo=0;

        /**
         * DCZZ_Msg_UserInfo State.
         * @member {number} State
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.State=0;

        /**
         * DCZZ_Msg_UserInfo Money.
         * @member {number|Long} Money
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.Money=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * DCZZ_Msg_UserInfo HandCards.
         * @member {Array.<GameMsg_DCZZ.IPokerCard>} HandCards
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.HandCards=$util.emptyArray;

        /**
         * DCZZ_Msg_UserInfo Bet_Base.
         * @member {number|Long} Bet_Base
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.Bet_Base=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * DCZZ_Msg_UserInfo Bet_Side.
         * @member {number|Long} Bet_Side
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.Bet_Side=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * DCZZ_Msg_UserInfo Bet_Double.
         * @member {number|Long} Bet_Double
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.Bet_Double=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * DCZZ_Msg_UserInfo TotalWinLose.
         * @member {number|Long} TotalWinLose
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.TotalWinLose=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * DCZZ_Msg_UserInfo IsTied.
         * @member {boolean} IsTied
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.IsTied=false;

        /**
         * DCZZ_Msg_UserInfo GetTieAward.
         * @member {boolean} GetTieAward
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.GetTieAward=false;

        /**
         * DCZZ_Msg_UserInfo CanEnterWar.
         * @member {boolean} CanEnterWar
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.CanEnterWar=false;

        /**
         * DCZZ_Msg_UserInfo IsFolded.
         * @member {boolean} IsFolded
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.IsFolded=false;

        /**
         * DCZZ_Msg_UserInfo FoldRecover.
         * @member {number|Long} FoldRecover
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.FoldRecover=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * DCZZ_Msg_UserInfo Winner.
         * @member {number} Winner
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         */
        DCZZ_Msg_UserInfo.prototype.Winner=0;

        /**
         * Creates a new DCZZ_Msg_UserInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_UserInfo=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.DCZZ_Msg_UserInfo} DCZZ_Msg_UserInfo instance
         */
        DCZZ_Msg_UserInfo.create=function create(properties) {
            return new DCZZ_Msg_UserInfo(properties);
        };

        /**
         * Encodes the specified DCZZ_Msg_UserInfo message. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_UserInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_UserInfo} message DCZZ_Msg_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_UserInfo.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SeatNo);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.State);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Money);
            if (message.HandCards != null && message.HandCards.length)
                for (var i=0; i<message.HandCards.length; ++ i)
                    $root.GameMsg_DCZZ.PokerCard.encode(message.HandCards[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.Bet_Base);
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.Bet_Side);
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.Bet_Double);
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.TotalWinLose);
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.IsTied);
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.GetTieAward);
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.CanEnterWar);
            writer.uint32(/* id 13, wireType 0 =*/104).bool(message.IsFolded);
            writer.uint32(/* id 14, wireType 0 =*/112).int64(message.FoldRecover);
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.Winner);
            return writer;
        };

        /**
         * Encodes the specified DCZZ_Msg_UserInfo message, length delimited. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_UserInfo} message DCZZ_Msg_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_UserInfo.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DCZZ_Msg_UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.DCZZ_Msg_UserInfo} DCZZ_Msg_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_UserInfo.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.DCZZ_Msg_UserInfo();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.SeatNo=reader.int32();
                        break;
                    case 3:
                        message.State=reader.int32();
                        break;
                    case 4:
                        message.Money=reader.int64();
                        break;
                    case 5:
                        if (!(message.HandCards && message.HandCards.length))
                            message.HandCards=[];
                        message.HandCards.push($root.GameMsg_DCZZ.PokerCard.decode(reader, reader.uint32()));
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
                        message.TotalWinLose=reader.int64();
                        break;
                    case 10:
                        message.IsTied=reader.bool();
                        break;
                    case 11:
                        message.GetTieAward=reader.bool();
                        break;
                    case 12:
                        message.CanEnterWar=reader.bool();
                        break;
                    case 13:
                        message.IsFolded=reader.bool();
                        break;
                    case 14:
                        message.FoldRecover=reader.int64();
                        break;
                    case 15:
                        message.Winner=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance : message });
            if (!message.hasOwnProperty("State"))
                throw $util.ProtocolError("missing required 'State'", { instance : message });
            if (!message.hasOwnProperty("Money"))
                throw $util.ProtocolError("missing required 'Money'", { instance : message });
            if (!message.hasOwnProperty("Bet_Base"))
                throw $util.ProtocolError("missing required 'Bet_Base'", { instance : message });
            if (!message.hasOwnProperty("Bet_Side"))
                throw $util.ProtocolError("missing required 'Bet_Side'", { instance : message });
            if (!message.hasOwnProperty("Bet_Double"))
                throw $util.ProtocolError("missing required 'Bet_Double'", { instance : message });
            if (!message.hasOwnProperty("TotalWinLose"))
                throw $util.ProtocolError("missing required 'TotalWinLose'", { instance : message });
            if (!message.hasOwnProperty("IsTied"))
                throw $util.ProtocolError("missing required 'IsTied'", { instance : message });
            if (!message.hasOwnProperty("GetTieAward"))
                throw $util.ProtocolError("missing required 'GetTieAward'", { instance : message });
            if (!message.hasOwnProperty("CanEnterWar"))
                throw $util.ProtocolError("missing required 'CanEnterWar'", { instance : message });
            if (!message.hasOwnProperty("IsFolded"))
                throw $util.ProtocolError("missing required 'IsFolded'", { instance : message });
            if (!message.hasOwnProperty("FoldRecover"))
                throw $util.ProtocolError("missing required 'FoldRecover'", { instance : message });
            if (!message.hasOwnProperty("Winner"))
                throw $util.ProtocolError("missing required 'Winner'", { instance : message });
            return message;
        };

        /**
         * Decodes a DCZZ_Msg_UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.DCZZ_Msg_UserInfo} DCZZ_Msg_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_UserInfo.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DCZZ_Msg_UserInfo message.
         * @function verify
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DCZZ_Msg_UserInfo.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (!$util.isInteger(message.State))
                return "State: integer expected";
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            if (message.HandCards != null && message.hasOwnProperty("HandCards")) {
                if (!Array.isArray(message.HandCards))
                    return "HandCards: array expected";
                for (var i=0; i<message.HandCards.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.PokerCard.verify(message.HandCards[i]);
                    if (error)
                        return "HandCards." + error;
                }
            }
            if (!$util.isInteger(message.Bet_Base) && !(message.Bet_Base && $util.isInteger(message.Bet_Base.low) && $util.isInteger(message.Bet_Base.high)))
                return "Bet_Base: integer|Long expected";
            if (!$util.isInteger(message.Bet_Side) && !(message.Bet_Side && $util.isInteger(message.Bet_Side.low) && $util.isInteger(message.Bet_Side.high)))
                return "Bet_Side: integer|Long expected";
            if (!$util.isInteger(message.Bet_Double) && !(message.Bet_Double && $util.isInteger(message.Bet_Double.low) && $util.isInteger(message.Bet_Double.high)))
                return "Bet_Double: integer|Long expected";
            if (!$util.isInteger(message.TotalWinLose) && !(message.TotalWinLose && $util.isInteger(message.TotalWinLose.low) && $util.isInteger(message.TotalWinLose.high)))
                return "TotalWinLose: integer|Long expected";
            if (typeof message.IsTied !== "boolean")
                return "IsTied: boolean expected";
            if (typeof message.GetTieAward !== "boolean")
                return "GetTieAward: boolean expected";
            if (typeof message.CanEnterWar !== "boolean")
                return "CanEnterWar: boolean expected";
            if (typeof message.IsFolded !== "boolean")
                return "IsFolded: boolean expected";
            if (!$util.isInteger(message.FoldRecover) && !(message.FoldRecover && $util.isInteger(message.FoldRecover.low) && $util.isInteger(message.FoldRecover.high)))
                return "FoldRecover: integer|Long expected";
            if (!$util.isInteger(message.Winner))
                return "Winner: integer expected";
            return null;
        };

        /**
         * Creates a DCZZ_Msg_UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.DCZZ_Msg_UserInfo} DCZZ_Msg_UserInfo
         */
        DCZZ_Msg_UserInfo.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.DCZZ_Msg_UserInfo)
                return object;
            var message=new $root.GameMsg_DCZZ.DCZZ_Msg_UserInfo();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.SeatNo != null)
                message.SeatNo=object.SeatNo | 0;
            if (object.State != null)
                message.State=object.State | 0;
            if (object.Money != null)
                if ($util.Long)
                    (message.Money=$util.Long.fromValue(object.Money)).unsigned=false;
                else if (typeof object.Money === "string")
                    message.Money=parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money=object.Money;
                else if (typeof object.Money === "object")
                    message.Money=new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.HandCards) {
                if (!Array.isArray(object.HandCards))
                    throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_UserInfo.HandCards: array expected");
                message.HandCards=[];
                for (var i=0; i<object.HandCards.length; ++ i) {
                    if (typeof object.HandCards[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_UserInfo.HandCards: object expected");
                    message.HandCards[i]=$root.GameMsg_DCZZ.PokerCard.fromObject(object.HandCards[i]);
                }
            }
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
            if (object.TotalWinLose != null)
                if ($util.Long)
                    (message.TotalWinLose=$util.Long.fromValue(object.TotalWinLose)).unsigned=false;
                else if (typeof object.TotalWinLose === "string")
                    message.TotalWinLose=parseInt(object.TotalWinLose, 10);
                else if (typeof object.TotalWinLose === "number")
                    message.TotalWinLose=object.TotalWinLose;
                else if (typeof object.TotalWinLose === "object")
                    message.TotalWinLose=new $util.LongBits(object.TotalWinLose.low >>> 0, object.TotalWinLose.high >>> 0).toNumber();
            if (object.IsTied != null)
                message.IsTied=Boolean(object.IsTied);
            if (object.GetTieAward != null)
                message.GetTieAward=Boolean(object.GetTieAward);
            if (object.CanEnterWar != null)
                message.CanEnterWar=Boolean(object.CanEnterWar);
            if (object.IsFolded != null)
                message.IsFolded=Boolean(object.IsFolded);
            if (object.FoldRecover != null)
                if ($util.Long)
                    (message.FoldRecover=$util.Long.fromValue(object.FoldRecover)).unsigned=false;
                else if (typeof object.FoldRecover === "string")
                    message.FoldRecover=parseInt(object.FoldRecover, 10);
                else if (typeof object.FoldRecover === "number")
                    message.FoldRecover=object.FoldRecover;
                else if (typeof object.FoldRecover === "object")
                    message.FoldRecover=new $util.LongBits(object.FoldRecover.low >>> 0, object.FoldRecover.high >>> 0).toNumber();
            if (object.Winner != null)
                message.Winner=object.Winner | 0;
            return message;
        };

        /**
         * Creates a plain object from a DCZZ_Msg_UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @static
         * @param {GameMsg_DCZZ.DCZZ_Msg_UserInfo} message DCZZ_Msg_UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DCZZ_Msg_UserInfo.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.HandCards=[];
            if (options.defaults) {
                object.UserID=0;
                object.SeatNo=0;
                object.State=0;
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
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.TotalWinLose=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalWinLose=options.longs === String ? "0" : 0;
                object.IsTied=false;
                object.GetTieAward=false;
                object.CanEnterWar=false;
                object.IsFolded=false;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.FoldRecover=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FoldRecover=options.longs === String ? "0" : 0;
                object.Winner=0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo=message.SeatNo;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State=message.State;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money=options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money=options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.HandCards && message.HandCards.length) {
                object.HandCards=[];
                for (var j=0; j<message.HandCards.length; ++ j)
                    object.HandCards[j]=$root.GameMsg_DCZZ.PokerCard.toObject(message.HandCards[j], options);
            }
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
            if (message.TotalWinLose != null && message.hasOwnProperty("TotalWinLose"))
                if (typeof message.TotalWinLose === "number")
                    object.TotalWinLose=options.longs === String ? String(message.TotalWinLose) : message.TotalWinLose;
                else
                    object.TotalWinLose=options.longs === String ? $util.Long.prototype.toString.call(message.TotalWinLose) : options.longs === Number ? new $util.LongBits(message.TotalWinLose.low >>> 0, message.TotalWinLose.high >>> 0).toNumber() : message.TotalWinLose;
            if (message.IsTied != null && message.hasOwnProperty("IsTied"))
                object.IsTied=message.IsTied;
            if (message.GetTieAward != null && message.hasOwnProperty("GetTieAward"))
                object.GetTieAward=message.GetTieAward;
            if (message.CanEnterWar != null && message.hasOwnProperty("CanEnterWar"))
                object.CanEnterWar=message.CanEnterWar;
            if (message.IsFolded != null && message.hasOwnProperty("IsFolded"))
                object.IsFolded=message.IsFolded;
            if (message.FoldRecover != null && message.hasOwnProperty("FoldRecover"))
                if (typeof message.FoldRecover === "number")
                    object.FoldRecover=options.longs === String ? String(message.FoldRecover) : message.FoldRecover;
                else
                    object.FoldRecover=options.longs === String ? $util.Long.prototype.toString.call(message.FoldRecover) : options.longs === Number ? new $util.LongBits(message.FoldRecover.low >>> 0, message.FoldRecover.high >>> 0).toNumber() : message.FoldRecover;
            if (message.Winner != null && message.hasOwnProperty("Winner"))
                object.Winner=message.Winner;
            return object;
        };

        /**
         * Converts this DCZZ_Msg_UserInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.DCZZ_Msg_UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DCZZ_Msg_UserInfo.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DCZZ_Msg_UserInfo;
    })();

    GameMsg_DCZZ.DCZZ_Msg_AllUserInfo=(function () {

        /**
         * Properties of a DCZZ_Msg_AllUserInfo.
         * @memberof GameMsg_DCZZ
         * @interface IDCZZ_Msg_AllUserInfo
         * @property {Array.<GameMsg_DCZZ.IDCZZ_Msg_UserInfo>|null} [AllUserInfo] DCZZ_Msg_AllUserInfo AllUserInfo
         */

        /**
         * Constructs a new DCZZ_Msg_AllUserInfo.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a DCZZ_Msg_AllUserInfo.
         * @implements IDCZZ_Msg_AllUserInfo
         * @constructor
         * @param {GameMsg_DCZZ.IDCZZ_Msg_AllUserInfo=} [properties] Properties to set
         */
        function DCZZ_Msg_AllUserInfo(properties) {
            this.AllUserInfo=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * DCZZ_Msg_AllUserInfo AllUserInfo.
         * @member {Array.<GameMsg_DCZZ.IDCZZ_Msg_UserInfo>} AllUserInfo
         * @memberof GameMsg_DCZZ.DCZZ_Msg_AllUserInfo
         * @instance
         */
        DCZZ_Msg_AllUserInfo.prototype.AllUserInfo=$util.emptyArray;

        /**
         * Creates a new DCZZ_Msg_AllUserInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.DCZZ_Msg_AllUserInfo
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_AllUserInfo=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.DCZZ_Msg_AllUserInfo} DCZZ_Msg_AllUserInfo instance
         */
        DCZZ_Msg_AllUserInfo.create=function create(properties) {
            return new DCZZ_Msg_AllUserInfo(properties);
        };

        /**
         * Encodes the specified DCZZ_Msg_AllUserInfo message. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_AllUserInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_AllUserInfo
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_AllUserInfo} message DCZZ_Msg_AllUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_AllUserInfo.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.AllUserInfo != null && message.AllUserInfo.length)
                for (var i=0; i<message.AllUserInfo.length; ++ i)
                    $root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.encode(message.AllUserInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DCZZ_Msg_AllUserInfo message, length delimited. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_AllUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_AllUserInfo
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_AllUserInfo} message DCZZ_Msg_AllUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_AllUserInfo.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DCZZ_Msg_AllUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_AllUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.DCZZ_Msg_AllUserInfo} DCZZ_Msg_AllUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_AllUserInfo.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.DCZZ_Msg_AllUserInfo();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.AllUserInfo && message.AllUserInfo.length))
                            message.AllUserInfo=[];
                        message.AllUserInfo.push($root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a DCZZ_Msg_AllUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_AllUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.DCZZ_Msg_AllUserInfo} DCZZ_Msg_AllUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_AllUserInfo.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DCZZ_Msg_AllUserInfo message.
         * @function verify
         * @memberof GameMsg_DCZZ.DCZZ_Msg_AllUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DCZZ_Msg_AllUserInfo.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo")) {
                if (!Array.isArray(message.AllUserInfo))
                    return "AllUserInfo: array expected";
                for (var i=0; i<message.AllUserInfo.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.verify(message.AllUserInfo[i]);
                    if (error)
                        return "AllUserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DCZZ_Msg_AllUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_AllUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.DCZZ_Msg_AllUserInfo} DCZZ_Msg_AllUserInfo
         */
        DCZZ_Msg_AllUserInfo.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.DCZZ_Msg_AllUserInfo)
                return object;
            var message=new $root.GameMsg_DCZZ.DCZZ_Msg_AllUserInfo();
            if (object.AllUserInfo) {
                if (!Array.isArray(object.AllUserInfo))
                    throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_AllUserInfo.AllUserInfo: array expected");
                message.AllUserInfo=[];
                for (var i=0; i<object.AllUserInfo.length; ++ i) {
                    if (typeof object.AllUserInfo[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_AllUserInfo.AllUserInfo: object expected");
                    message.AllUserInfo[i]=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.fromObject(object.AllUserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DCZZ_Msg_AllUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_AllUserInfo
         * @static
         * @param {GameMsg_DCZZ.DCZZ_Msg_AllUserInfo} message DCZZ_Msg_AllUserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DCZZ_Msg_AllUserInfo.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.AllUserInfo=[];
            if (message.AllUserInfo && message.AllUserInfo.length) {
                object.AllUserInfo=[];
                for (var j=0; j<message.AllUserInfo.length; ++ j)
                    object.AllUserInfo[j]=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.toObject(message.AllUserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this DCZZ_Msg_AllUserInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.DCZZ_Msg_AllUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DCZZ_Msg_AllUserInfo.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DCZZ_Msg_AllUserInfo;
    })();

    GameMsg_DCZZ.DCZZ_Msg_WaitingStart=(function () {

        /**
         * Properties of a DCZZ_Msg_WaitingStart.
         * @memberof GameMsg_DCZZ
         * @interface IDCZZ_Msg_WaitingStart
         * @property {number} TimeRemain DCZZ_Msg_WaitingStart TimeRemain
         */

        /**
         * Constructs a new DCZZ_Msg_WaitingStart.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a DCZZ_Msg_WaitingStart.
         * @implements IDCZZ_Msg_WaitingStart
         * @constructor
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WaitingStart=} [properties] Properties to set
         */
        function DCZZ_Msg_WaitingStart(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * DCZZ_Msg_WaitingStart TimeRemain.
         * @member {number} TimeRemain
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WaitingStart
         * @instance
         */
        DCZZ_Msg_WaitingStart.prototype.TimeRemain=0;

        /**
         * Creates a new DCZZ_Msg_WaitingStart instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WaitingStart
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WaitingStart=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WaitingStart} DCZZ_Msg_WaitingStart instance
         */
        DCZZ_Msg_WaitingStart.create=function create(properties) {
            return new DCZZ_Msg_WaitingStart(properties);
        };

        /**
         * Encodes the specified DCZZ_Msg_WaitingStart message. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_WaitingStart.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WaitingStart
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WaitingStart} message DCZZ_Msg_WaitingStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_WaitingStart.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TimeRemain);
            return writer;
        };

        /**
         * Encodes the specified DCZZ_Msg_WaitingStart message, length delimited. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_WaitingStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WaitingStart
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WaitingStart} message DCZZ_Msg_WaitingStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_WaitingStart.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DCZZ_Msg_WaitingStart message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WaitingStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WaitingStart} DCZZ_Msg_WaitingStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_WaitingStart.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.DCZZ_Msg_WaitingStart();
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
            if (!message.hasOwnProperty("TimeRemain"))
                throw $util.ProtocolError("missing required 'TimeRemain'", { instance : message });
            return message;
        };

        /**
         * Decodes a DCZZ_Msg_WaitingStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WaitingStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WaitingStart} DCZZ_Msg_WaitingStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_WaitingStart.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DCZZ_Msg_WaitingStart message.
         * @function verify
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WaitingStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DCZZ_Msg_WaitingStart.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.TimeRemain))
                return "TimeRemain: integer expected";
            return null;
        };

        /**
         * Creates a DCZZ_Msg_WaitingStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WaitingStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WaitingStart} DCZZ_Msg_WaitingStart
         */
        DCZZ_Msg_WaitingStart.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.DCZZ_Msg_WaitingStart)
                return object;
            var message=new $root.GameMsg_DCZZ.DCZZ_Msg_WaitingStart();
            if (object.TimeRemain != null)
                message.TimeRemain=object.TimeRemain | 0;
            return message;
        };

        /**
         * Creates a plain object from a DCZZ_Msg_WaitingStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WaitingStart
         * @static
         * @param {GameMsg_DCZZ.DCZZ_Msg_WaitingStart} message DCZZ_Msg_WaitingStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DCZZ_Msg_WaitingStart.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults)
                object.TimeRemain=0;
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                object.TimeRemain=message.TimeRemain;
            return object;
        };

        /**
         * Converts this DCZZ_Msg_WaitingStart to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WaitingStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DCZZ_Msg_WaitingStart.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DCZZ_Msg_WaitingStart;
    })();

    GameMsg_DCZZ.DCZZ_Msg_StartBetting=(function () {

        /**
         * Properties of a DCZZ_Msg_StartBetting.
         * @memberof GameMsg_DCZZ
         * @interface IDCZZ_Msg_StartBetting
         * @property {number} TimeRemain DCZZ_Msg_StartBetting TimeRemain
         */

        /**
         * Constructs a new DCZZ_Msg_StartBetting.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a DCZZ_Msg_StartBetting.
         * @implements IDCZZ_Msg_StartBetting
         * @constructor
         * @param {GameMsg_DCZZ.IDCZZ_Msg_StartBetting=} [properties] Properties to set
         */
        function DCZZ_Msg_StartBetting(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * DCZZ_Msg_StartBetting TimeRemain.
         * @member {number} TimeRemain
         * @memberof GameMsg_DCZZ.DCZZ_Msg_StartBetting
         * @instance
         */
        DCZZ_Msg_StartBetting.prototype.TimeRemain=0;

        /**
         * Creates a new DCZZ_Msg_StartBetting instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.DCZZ_Msg_StartBetting
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_StartBetting=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.DCZZ_Msg_StartBetting} DCZZ_Msg_StartBetting instance
         */
        DCZZ_Msg_StartBetting.create=function create(properties) {
            return new DCZZ_Msg_StartBetting(properties);
        };

        /**
         * Encodes the specified DCZZ_Msg_StartBetting message. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_StartBetting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_StartBetting
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_StartBetting} message DCZZ_Msg_StartBetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_StartBetting.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TimeRemain);
            return writer;
        };

        /**
         * Encodes the specified DCZZ_Msg_StartBetting message, length delimited. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_StartBetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_StartBetting
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_StartBetting} message DCZZ_Msg_StartBetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_StartBetting.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DCZZ_Msg_StartBetting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_StartBetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.DCZZ_Msg_StartBetting} DCZZ_Msg_StartBetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_StartBetting.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.DCZZ_Msg_StartBetting();
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
            if (!message.hasOwnProperty("TimeRemain"))
                throw $util.ProtocolError("missing required 'TimeRemain'", { instance : message });
            return message;
        };

        /**
         * Decodes a DCZZ_Msg_StartBetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_StartBetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.DCZZ_Msg_StartBetting} DCZZ_Msg_StartBetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_StartBetting.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DCZZ_Msg_StartBetting message.
         * @function verify
         * @memberof GameMsg_DCZZ.DCZZ_Msg_StartBetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DCZZ_Msg_StartBetting.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.TimeRemain))
                return "TimeRemain: integer expected";
            return null;
        };

        /**
         * Creates a DCZZ_Msg_StartBetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_StartBetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.DCZZ_Msg_StartBetting} DCZZ_Msg_StartBetting
         */
        DCZZ_Msg_StartBetting.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.DCZZ_Msg_StartBetting)
                return object;
            var message=new $root.GameMsg_DCZZ.DCZZ_Msg_StartBetting();
            if (object.TimeRemain != null)
                message.TimeRemain=object.TimeRemain | 0;
            return message;
        };

        /**
         * Creates a plain object from a DCZZ_Msg_StartBetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_StartBetting
         * @static
         * @param {GameMsg_DCZZ.DCZZ_Msg_StartBetting} message DCZZ_Msg_StartBetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DCZZ_Msg_StartBetting.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults)
                object.TimeRemain=0;
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                object.TimeRemain=message.TimeRemain;
            return object;
        };

        /**
         * Converts this DCZZ_Msg_StartBetting to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.DCZZ_Msg_StartBetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DCZZ_Msg_StartBetting.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DCZZ_Msg_StartBetting;
    })();

    GameMsg_DCZZ.DCZZ_Msg_Bet=(function () {

        /**
         * Properties of a DCZZ_Msg_Bet.
         * @memberof GameMsg_DCZZ
         * @interface IDCZZ_Msg_Bet
         * @property {number} BetType DCZZ_Msg_Bet BetType
         * @property {number|Long} Bet DCZZ_Msg_Bet Bet
         */

        /**
         * Constructs a new DCZZ_Msg_Bet.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a DCZZ_Msg_Bet.
         * @implements IDCZZ_Msg_Bet
         * @constructor
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Bet=} [properties] Properties to set
         */
        function DCZZ_Msg_Bet(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * DCZZ_Msg_Bet BetType.
         * @member {number} BetType
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Bet
         * @instance
         */
        DCZZ_Msg_Bet.prototype.BetType=0;

        /**
         * DCZZ_Msg_Bet Bet.
         * @member {number|Long} Bet
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Bet
         * @instance
         */
        DCZZ_Msg_Bet.prototype.Bet=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new DCZZ_Msg_Bet instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Bet
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Bet=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Bet} DCZZ_Msg_Bet instance
         */
        DCZZ_Msg_Bet.create=function create(properties) {
            return new DCZZ_Msg_Bet(properties);
        };

        /**
         * Encodes the specified DCZZ_Msg_Bet message. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_Bet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Bet
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Bet} message DCZZ_Msg_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_Bet.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BetType);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Bet);
            return writer;
        };

        /**
         * Encodes the specified DCZZ_Msg_Bet message, length delimited. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_Bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Bet
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Bet} message DCZZ_Msg_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_Bet.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DCZZ_Msg_Bet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Bet} DCZZ_Msg_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_Bet.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.DCZZ_Msg_Bet();
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
            if (!message.hasOwnProperty("BetType"))
                throw $util.ProtocolError("missing required 'BetType'", { instance : message });
            if (!message.hasOwnProperty("Bet"))
                throw $util.ProtocolError("missing required 'Bet'", { instance : message });
            return message;
        };

        /**
         * Decodes a DCZZ_Msg_Bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Bet} DCZZ_Msg_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_Bet.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DCZZ_Msg_Bet message.
         * @function verify
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DCZZ_Msg_Bet.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.BetType))
                return "BetType: integer expected";
            if (!$util.isInteger(message.Bet) && !(message.Bet && $util.isInteger(message.Bet.low) && $util.isInteger(message.Bet.high)))
                return "Bet: integer|Long expected";
            return null;
        };

        /**
         * Creates a DCZZ_Msg_Bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Bet} DCZZ_Msg_Bet
         */
        DCZZ_Msg_Bet.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.DCZZ_Msg_Bet)
                return object;
            var message=new $root.GameMsg_DCZZ.DCZZ_Msg_Bet();
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
         * Creates a plain object from a DCZZ_Msg_Bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Bet
         * @static
         * @param {GameMsg_DCZZ.DCZZ_Msg_Bet} message DCZZ_Msg_Bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DCZZ_Msg_Bet.toObject=function toObject(message, options) {
            if (!options)
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
         * Converts this DCZZ_Msg_Bet to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DCZZ_Msg_Bet.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DCZZ_Msg_Bet;
    })();

    GameMsg_DCZZ.DCZZ_Msg_BetResult=(function () {

        /**
         * Properties of a DCZZ_Msg_BetResult.
         * @memberof GameMsg_DCZZ
         * @interface IDCZZ_Msg_BetResult
         * @property {number} SeatNo DCZZ_Msg_BetResult SeatNo
         * @property {number} BetType DCZZ_Msg_BetResult BetType
         * @property {number|Long} Bet DCZZ_Msg_BetResult Bet
         * @property {number|Long} MoneyRemain DCZZ_Msg_BetResult MoneyRemain
         * @property {number} Result DCZZ_Msg_BetResult Result
         */

        /**
         * Constructs a new DCZZ_Msg_BetResult.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a DCZZ_Msg_BetResult.
         * @implements IDCZZ_Msg_BetResult
         * @constructor
         * @param {GameMsg_DCZZ.IDCZZ_Msg_BetResult=} [properties] Properties to set
         */
        function DCZZ_Msg_BetResult(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * DCZZ_Msg_BetResult SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DCZZ.DCZZ_Msg_BetResult
         * @instance
         */
        DCZZ_Msg_BetResult.prototype.SeatNo=0;

        /**
         * DCZZ_Msg_BetResult BetType.
         * @member {number} BetType
         * @memberof GameMsg_DCZZ.DCZZ_Msg_BetResult
         * @instance
         */
        DCZZ_Msg_BetResult.prototype.BetType=0;

        /**
         * DCZZ_Msg_BetResult Bet.
         * @member {number|Long} Bet
         * @memberof GameMsg_DCZZ.DCZZ_Msg_BetResult
         * @instance
         */
        DCZZ_Msg_BetResult.prototype.Bet=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * DCZZ_Msg_BetResult MoneyRemain.
         * @member {number|Long} MoneyRemain
         * @memberof GameMsg_DCZZ.DCZZ_Msg_BetResult
         * @instance
         */
        DCZZ_Msg_BetResult.prototype.MoneyRemain=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * DCZZ_Msg_BetResult Result.
         * @member {number} Result
         * @memberof GameMsg_DCZZ.DCZZ_Msg_BetResult
         * @instance
         */
        DCZZ_Msg_BetResult.prototype.Result=0;

        /**
         * Creates a new DCZZ_Msg_BetResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.DCZZ_Msg_BetResult
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_BetResult=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.DCZZ_Msg_BetResult} DCZZ_Msg_BetResult instance
         */
        DCZZ_Msg_BetResult.create=function create(properties) {
            return new DCZZ_Msg_BetResult(properties);
        };

        /**
         * Encodes the specified DCZZ_Msg_BetResult message. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_BetResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_BetResult
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_BetResult} message DCZZ_Msg_BetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_BetResult.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BetType);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Bet);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.MoneyRemain);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Result);
            return writer;
        };

        /**
         * Encodes the specified DCZZ_Msg_BetResult message, length delimited. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_BetResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_BetResult
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_BetResult} message DCZZ_Msg_BetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_BetResult.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DCZZ_Msg_BetResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_BetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.DCZZ_Msg_BetResult} DCZZ_Msg_BetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_BetResult.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.DCZZ_Msg_BetResult();
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
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance : message });
            if (!message.hasOwnProperty("BetType"))
                throw $util.ProtocolError("missing required 'BetType'", { instance : message });
            if (!message.hasOwnProperty("Bet"))
                throw $util.ProtocolError("missing required 'Bet'", { instance : message });
            if (!message.hasOwnProperty("MoneyRemain"))
                throw $util.ProtocolError("missing required 'MoneyRemain'", { instance : message });
            if (!message.hasOwnProperty("Result"))
                throw $util.ProtocolError("missing required 'Result'", { instance : message });
            return message;
        };

        /**
         * Decodes a DCZZ_Msg_BetResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_BetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.DCZZ_Msg_BetResult} DCZZ_Msg_BetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_BetResult.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DCZZ_Msg_BetResult message.
         * @function verify
         * @memberof GameMsg_DCZZ.DCZZ_Msg_BetResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DCZZ_Msg_BetResult.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (!$util.isInteger(message.BetType))
                return "BetType: integer expected";
            if (!$util.isInteger(message.Bet) && !(message.Bet && $util.isInteger(message.Bet.low) && $util.isInteger(message.Bet.high)))
                return "Bet: integer|Long expected";
            if (!$util.isInteger(message.MoneyRemain) && !(message.MoneyRemain && $util.isInteger(message.MoneyRemain.low) && $util.isInteger(message.MoneyRemain.high)))
                return "MoneyRemain: integer|Long expected";
            if (!$util.isInteger(message.Result))
                return "Result: integer expected";
            return null;
        };

        /**
         * Creates a DCZZ_Msg_BetResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_BetResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.DCZZ_Msg_BetResult} DCZZ_Msg_BetResult
         */
        DCZZ_Msg_BetResult.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.DCZZ_Msg_BetResult)
                return object;
            var message=new $root.GameMsg_DCZZ.DCZZ_Msg_BetResult();
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
         * Creates a plain object from a DCZZ_Msg_BetResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_BetResult
         * @static
         * @param {GameMsg_DCZZ.DCZZ_Msg_BetResult} message DCZZ_Msg_BetResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DCZZ_Msg_BetResult.toObject=function toObject(message, options) {
            if (!options)
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
         * Converts this DCZZ_Msg_BetResult to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.DCZZ_Msg_BetResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DCZZ_Msg_BetResult.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DCZZ_Msg_BetResult;
    })();

    GameMsg_DCZZ.DCZZ_Msg_Deal_Normal=(function () {

        /**
         * Properties of a DCZZ_Msg_Deal_Normal.
         * @memberof GameMsg_DCZZ
         * @interface IDCZZ_Msg_Deal_Normal
         * @property {Array.<GameMsg_DCZZ.IPokerCard>|null} [DealerCards] DCZZ_Msg_Deal_Normal DealerCards
         * @property {Array.<GameMsg_DCZZ.IDCZZ_Msg_UserInfo>|null} [AllUserInfo] DCZZ_Msg_Deal_Normal AllUserInfo
         */

        /**
         * Constructs a new DCZZ_Msg_Deal_Normal.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a DCZZ_Msg_Deal_Normal.
         * @implements IDCZZ_Msg_Deal_Normal
         * @constructor
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Deal_Normal=} [properties] Properties to set
         */
        function DCZZ_Msg_Deal_Normal(properties) {
            this.DealerCards=[];
            this.AllUserInfo=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * DCZZ_Msg_Deal_Normal DealerCards.
         * @member {Array.<GameMsg_DCZZ.IPokerCard>} DealerCards
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_Normal
         * @instance
         */
        DCZZ_Msg_Deal_Normal.prototype.DealerCards=$util.emptyArray;

        /**
         * DCZZ_Msg_Deal_Normal AllUserInfo.
         * @member {Array.<GameMsg_DCZZ.IDCZZ_Msg_UserInfo>} AllUserInfo
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_Normal
         * @instance
         */
        DCZZ_Msg_Deal_Normal.prototype.AllUserInfo=$util.emptyArray;

        /**
         * Creates a new DCZZ_Msg_Deal_Normal instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_Normal
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Deal_Normal=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Deal_Normal} DCZZ_Msg_Deal_Normal instance
         */
        DCZZ_Msg_Deal_Normal.create=function create(properties) {
            return new DCZZ_Msg_Deal_Normal(properties);
        };

        /**
         * Encodes the specified DCZZ_Msg_Deal_Normal message. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_Deal_Normal.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_Normal
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Deal_Normal} message DCZZ_Msg_Deal_Normal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_Deal_Normal.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.DealerCards != null && message.DealerCards.length)
                for (var i=0; i<message.DealerCards.length; ++ i)
                    $root.GameMsg_DCZZ.PokerCard.encode(message.DealerCards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.AllUserInfo != null && message.AllUserInfo.length)
                for (var i=0; i<message.AllUserInfo.length; ++ i)
                    $root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.encode(message.AllUserInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DCZZ_Msg_Deal_Normal message, length delimited. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_Deal_Normal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_Normal
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Deal_Normal} message DCZZ_Msg_Deal_Normal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_Deal_Normal.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DCZZ_Msg_Deal_Normal message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_Normal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Deal_Normal} DCZZ_Msg_Deal_Normal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_Deal_Normal.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.DCZZ_Msg_Deal_Normal();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.DealerCards && message.DealerCards.length))
                            message.DealerCards=[];
                        message.DealerCards.push($root.GameMsg_DCZZ.PokerCard.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        if (!(message.AllUserInfo && message.AllUserInfo.length))
                            message.AllUserInfo=[];
                        message.AllUserInfo.push($root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a DCZZ_Msg_Deal_Normal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_Normal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Deal_Normal} DCZZ_Msg_Deal_Normal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_Deal_Normal.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DCZZ_Msg_Deal_Normal message.
         * @function verify
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_Normal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DCZZ_Msg_Deal_Normal.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DealerCards != null && message.hasOwnProperty("DealerCards")) {
                if (!Array.isArray(message.DealerCards))
                    return "DealerCards: array expected";
                for (var i=0; i<message.DealerCards.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.PokerCard.verify(message.DealerCards[i]);
                    if (error)
                        return "DealerCards." + error;
                }
            }
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo")) {
                if (!Array.isArray(message.AllUserInfo))
                    return "AllUserInfo: array expected";
                for (var i=0; i<message.AllUserInfo.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.verify(message.AllUserInfo[i]);
                    if (error)
                        return "AllUserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DCZZ_Msg_Deal_Normal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_Normal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Deal_Normal} DCZZ_Msg_Deal_Normal
         */
        DCZZ_Msg_Deal_Normal.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.DCZZ_Msg_Deal_Normal)
                return object;
            var message=new $root.GameMsg_DCZZ.DCZZ_Msg_Deal_Normal();
            if (object.DealerCards) {
                if (!Array.isArray(object.DealerCards))
                    throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_Deal_Normal.DealerCards: array expected");
                message.DealerCards=[];
                for (var i=0; i<object.DealerCards.length; ++ i) {
                    if (typeof object.DealerCards[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_Deal_Normal.DealerCards: object expected");
                    message.DealerCards[i]=$root.GameMsg_DCZZ.PokerCard.fromObject(object.DealerCards[i]);
                }
            }
            if (object.AllUserInfo) {
                if (!Array.isArray(object.AllUserInfo))
                    throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_Deal_Normal.AllUserInfo: array expected");
                message.AllUserInfo=[];
                for (var i=0; i<object.AllUserInfo.length; ++ i) {
                    if (typeof object.AllUserInfo[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_Deal_Normal.AllUserInfo: object expected");
                    message.AllUserInfo[i]=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.fromObject(object.AllUserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DCZZ_Msg_Deal_Normal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_Normal
         * @static
         * @param {GameMsg_DCZZ.DCZZ_Msg_Deal_Normal} message DCZZ_Msg_Deal_Normal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DCZZ_Msg_Deal_Normal.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults) {
                object.DealerCards=[];
                object.AllUserInfo=[];
            }
            if (message.DealerCards && message.DealerCards.length) {
                object.DealerCards=[];
                for (var j=0; j<message.DealerCards.length; ++ j)
                    object.DealerCards[j]=$root.GameMsg_DCZZ.PokerCard.toObject(message.DealerCards[j], options);
            }
            if (message.AllUserInfo && message.AllUserInfo.length) {
                object.AllUserInfo=[];
                for (var j=0; j<message.AllUserInfo.length; ++ j)
                    object.AllUserInfo[j]=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.toObject(message.AllUserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this DCZZ_Msg_Deal_Normal to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_Normal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DCZZ_Msg_Deal_Normal.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DCZZ_Msg_Deal_Normal;
    })();

    GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal=(function () {

        /**
         * Properties of a DCZZ_Msg_Settlement_Normal.
         * @memberof GameMsg_DCZZ
         * @interface IDCZZ_Msg_Settlement_Normal
         * @property {Array.<GameMsg_DCZZ.IDCZZ_Msg_UserInfo>|null} [AllUserInfo] DCZZ_Msg_Settlement_Normal AllUserInfo
         */

        /**
         * Constructs a new DCZZ_Msg_Settlement_Normal.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a DCZZ_Msg_Settlement_Normal.
         * @implements IDCZZ_Msg_Settlement_Normal
         * @constructor
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Settlement_Normal=} [properties] Properties to set
         */
        function DCZZ_Msg_Settlement_Normal(properties) {
            this.AllUserInfo=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * DCZZ_Msg_Settlement_Normal AllUserInfo.
         * @member {Array.<GameMsg_DCZZ.IDCZZ_Msg_UserInfo>} AllUserInfo
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal
         * @instance
         */
        DCZZ_Msg_Settlement_Normal.prototype.AllUserInfo=$util.emptyArray;

        /**
         * Creates a new DCZZ_Msg_Settlement_Normal instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Settlement_Normal=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal} DCZZ_Msg_Settlement_Normal instance
         */
        DCZZ_Msg_Settlement_Normal.create=function create(properties) {
            return new DCZZ_Msg_Settlement_Normal(properties);
        };

        /**
         * Encodes the specified DCZZ_Msg_Settlement_Normal message. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Settlement_Normal} message DCZZ_Msg_Settlement_Normal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_Settlement_Normal.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.AllUserInfo != null && message.AllUserInfo.length)
                for (var i=0; i<message.AllUserInfo.length; ++ i)
                    $root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.encode(message.AllUserInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DCZZ_Msg_Settlement_Normal message, length delimited. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Settlement_Normal} message DCZZ_Msg_Settlement_Normal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_Settlement_Normal.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DCZZ_Msg_Settlement_Normal message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal} DCZZ_Msg_Settlement_Normal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_Settlement_Normal.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.AllUserInfo && message.AllUserInfo.length))
                            message.AllUserInfo=[];
                        message.AllUserInfo.push($root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a DCZZ_Msg_Settlement_Normal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal} DCZZ_Msg_Settlement_Normal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_Settlement_Normal.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DCZZ_Msg_Settlement_Normal message.
         * @function verify
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DCZZ_Msg_Settlement_Normal.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo")) {
                if (!Array.isArray(message.AllUserInfo))
                    return "AllUserInfo: array expected";
                for (var i=0; i<message.AllUserInfo.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.verify(message.AllUserInfo[i]);
                    if (error)
                        return "AllUserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DCZZ_Msg_Settlement_Normal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal} DCZZ_Msg_Settlement_Normal
         */
        DCZZ_Msg_Settlement_Normal.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal)
                return object;
            var message=new $root.GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal();
            if (object.AllUserInfo) {
                if (!Array.isArray(object.AllUserInfo))
                    throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal.AllUserInfo: array expected");
                message.AllUserInfo=[];
                for (var i=0; i<object.AllUserInfo.length; ++ i) {
                    if (typeof object.AllUserInfo[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal.AllUserInfo: object expected");
                    message.AllUserInfo[i]=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.fromObject(object.AllUserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DCZZ_Msg_Settlement_Normal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal
         * @static
         * @param {GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal} message DCZZ_Msg_Settlement_Normal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DCZZ_Msg_Settlement_Normal.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.AllUserInfo=[];
            if (message.AllUserInfo && message.AllUserInfo.length) {
                object.AllUserInfo=[];
                for (var j=0; j<message.AllUserInfo.length; ++ j)
                    object.AllUserInfo[j]=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.toObject(message.AllUserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this DCZZ_Msg_Settlement_Normal to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_Normal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DCZZ_Msg_Settlement_Normal.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DCZZ_Msg_Settlement_Normal;
    })();

    GameMsg_DCZZ.DCZZ_Msg_WarPhase=(function () {

        /**
         * Properties of a DCZZ_Msg_WarPhase.
         * @memberof GameMsg_DCZZ
         * @interface IDCZZ_Msg_WarPhase
         * @property {Array.<GameMsg_DCZZ.IDCZZ_Msg_UserInfo>|null} [AllUserInfo] DCZZ_Msg_WarPhase AllUserInfo
         * @property {number} TimeRemain DCZZ_Msg_WarPhase TimeRemain
         */

        /**
         * Constructs a new DCZZ_Msg_WarPhase.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a DCZZ_Msg_WarPhase.
         * @implements IDCZZ_Msg_WarPhase
         * @constructor
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WarPhase=} [properties] Properties to set
         */
        function DCZZ_Msg_WarPhase(properties) {
            this.AllUserInfo=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * DCZZ_Msg_WarPhase AllUserInfo.
         * @member {Array.<GameMsg_DCZZ.IDCZZ_Msg_UserInfo>} AllUserInfo
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhase
         * @instance
         */
        DCZZ_Msg_WarPhase.prototype.AllUserInfo=$util.emptyArray;

        /**
         * DCZZ_Msg_WarPhase TimeRemain.
         * @member {number} TimeRemain
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhase
         * @instance
         */
        DCZZ_Msg_WarPhase.prototype.TimeRemain=0;

        /**
         * Creates a new DCZZ_Msg_WarPhase instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhase
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WarPhase=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WarPhase} DCZZ_Msg_WarPhase instance
         */
        DCZZ_Msg_WarPhase.create=function create(properties) {
            return new DCZZ_Msg_WarPhase(properties);
        };

        /**
         * Encodes the specified DCZZ_Msg_WarPhase message. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_WarPhase.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhase
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WarPhase} message DCZZ_Msg_WarPhase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_WarPhase.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.AllUserInfo != null && message.AllUserInfo.length)
                for (var i=0; i<message.AllUserInfo.length; ++ i)
                    $root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.encode(message.AllUserInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TimeRemain);
            return writer;
        };

        /**
         * Encodes the specified DCZZ_Msg_WarPhase message, length delimited. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_WarPhase.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhase
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WarPhase} message DCZZ_Msg_WarPhase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_WarPhase.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DCZZ_Msg_WarPhase message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WarPhase} DCZZ_Msg_WarPhase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_WarPhase.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.DCZZ_Msg_WarPhase();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.AllUserInfo && message.AllUserInfo.length))
                            message.AllUserInfo=[];
                        message.AllUserInfo.push($root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.TimeRemain=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("TimeRemain"))
                throw $util.ProtocolError("missing required 'TimeRemain'", { instance : message });
            return message;
        };

        /**
         * Decodes a DCZZ_Msg_WarPhase message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WarPhase} DCZZ_Msg_WarPhase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_WarPhase.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DCZZ_Msg_WarPhase message.
         * @function verify
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhase
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DCZZ_Msg_WarPhase.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo")) {
                if (!Array.isArray(message.AllUserInfo))
                    return "AllUserInfo: array expected";
                for (var i=0; i<message.AllUserInfo.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.verify(message.AllUserInfo[i]);
                    if (error)
                        return "AllUserInfo." + error;
                }
            }
            if (!$util.isInteger(message.TimeRemain))
                return "TimeRemain: integer expected";
            return null;
        };

        /**
         * Creates a DCZZ_Msg_WarPhase message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhase
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WarPhase} DCZZ_Msg_WarPhase
         */
        DCZZ_Msg_WarPhase.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.DCZZ_Msg_WarPhase)
                return object;
            var message=new $root.GameMsg_DCZZ.DCZZ_Msg_WarPhase();
            if (object.AllUserInfo) {
                if (!Array.isArray(object.AllUserInfo))
                    throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_WarPhase.AllUserInfo: array expected");
                message.AllUserInfo=[];
                for (var i=0; i<object.AllUserInfo.length; ++ i) {
                    if (typeof object.AllUserInfo[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_WarPhase.AllUserInfo: object expected");
                    message.AllUserInfo[i]=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.fromObject(object.AllUserInfo[i]);
                }
            }
            if (object.TimeRemain != null)
                message.TimeRemain=object.TimeRemain | 0;
            return message;
        };

        /**
         * Creates a plain object from a DCZZ_Msg_WarPhase message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhase
         * @static
         * @param {GameMsg_DCZZ.DCZZ_Msg_WarPhase} message DCZZ_Msg_WarPhase
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DCZZ_Msg_WarPhase.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.AllUserInfo=[];
            if (options.defaults)
                object.TimeRemain=0;
            if (message.AllUserInfo && message.AllUserInfo.length) {
                object.AllUserInfo=[];
                for (var j=0; j<message.AllUserInfo.length; ++ j)
                    object.AllUserInfo[j]=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.toObject(message.AllUserInfo[j], options);
            }
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                object.TimeRemain=message.TimeRemain;
            return object;
        };

        /**
         * Converts this DCZZ_Msg_WarPhase to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhase
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DCZZ_Msg_WarPhase.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DCZZ_Msg_WarPhase;
    })();

    GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection=(function () {

        /**
         * Properties of a DCZZ_Msg_WarPhaseSelection.
         * @memberof GameMsg_DCZZ
         * @interface IDCZZ_Msg_WarPhaseSelection
         * @property {number} Selection DCZZ_Msg_WarPhaseSelection Selection
         */

        /**
         * Constructs a new DCZZ_Msg_WarPhaseSelection.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a DCZZ_Msg_WarPhaseSelection.
         * @implements IDCZZ_Msg_WarPhaseSelection
         * @constructor
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WarPhaseSelection=} [properties] Properties to set
         */
        function DCZZ_Msg_WarPhaseSelection(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * DCZZ_Msg_WarPhaseSelection Selection.
         * @member {number} Selection
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection
         * @instance
         */
        DCZZ_Msg_WarPhaseSelection.prototype.Selection=0;

        /**
         * Creates a new DCZZ_Msg_WarPhaseSelection instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WarPhaseSelection=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection} DCZZ_Msg_WarPhaseSelection instance
         */
        DCZZ_Msg_WarPhaseSelection.create=function create(properties) {
            return new DCZZ_Msg_WarPhaseSelection(properties);
        };

        /**
         * Encodes the specified DCZZ_Msg_WarPhaseSelection message. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WarPhaseSelection} message DCZZ_Msg_WarPhaseSelection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_WarPhaseSelection.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Selection);
            return writer;
        };

        /**
         * Encodes the specified DCZZ_Msg_WarPhaseSelection message, length delimited. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WarPhaseSelection} message DCZZ_Msg_WarPhaseSelection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_WarPhaseSelection.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DCZZ_Msg_WarPhaseSelection message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection} DCZZ_Msg_WarPhaseSelection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_WarPhaseSelection.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.Selection=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("Selection"))
                throw $util.ProtocolError("missing required 'Selection'", { instance : message });
            return message;
        };

        /**
         * Decodes a DCZZ_Msg_WarPhaseSelection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection} DCZZ_Msg_WarPhaseSelection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_WarPhaseSelection.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DCZZ_Msg_WarPhaseSelection message.
         * @function verify
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DCZZ_Msg_WarPhaseSelection.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Selection))
                return "Selection: integer expected";
            return null;
        };

        /**
         * Creates a DCZZ_Msg_WarPhaseSelection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection} DCZZ_Msg_WarPhaseSelection
         */
        DCZZ_Msg_WarPhaseSelection.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection)
                return object;
            var message=new $root.GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection();
            if (object.Selection != null)
                message.Selection=object.Selection | 0;
            return message;
        };

        /**
         * Creates a plain object from a DCZZ_Msg_WarPhaseSelection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection
         * @static
         * @param {GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection} message DCZZ_Msg_WarPhaseSelection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DCZZ_Msg_WarPhaseSelection.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults)
                object.Selection=0;
            if (message.Selection != null && message.hasOwnProperty("Selection"))
                object.Selection=message.Selection;
            return object;
        };

        /**
         * Converts this DCZZ_Msg_WarPhaseSelection to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseSelection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DCZZ_Msg_WarPhaseSelection.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DCZZ_Msg_WarPhaseSelection;
    })();

    GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult=(function () {

        /**
         * Properties of a DCZZ_Msg_WarPhaseselectionResult.
         * @memberof GameMsg_DCZZ
         * @interface IDCZZ_Msg_WarPhaseselectionResult
         * @property {number} SeatNo DCZZ_Msg_WarPhaseselectionResult SeatNo
         * @property {number} Selection DCZZ_Msg_WarPhaseselectionResult Selection
         * @property {number|Long} MoneyRemain DCZZ_Msg_WarPhaseselectionResult MoneyRemain
         */

        /**
         * Constructs a new DCZZ_Msg_WarPhaseselectionResult.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a DCZZ_Msg_WarPhaseselectionResult.
         * @implements IDCZZ_Msg_WarPhaseselectionResult
         * @constructor
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WarPhaseselectionResult=} [properties] Properties to set
         */
        function DCZZ_Msg_WarPhaseselectionResult(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * DCZZ_Msg_WarPhaseselectionResult SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult
         * @instance
         */
        DCZZ_Msg_WarPhaseselectionResult.prototype.SeatNo=0;

        /**
         * DCZZ_Msg_WarPhaseselectionResult Selection.
         * @member {number} Selection
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult
         * @instance
         */
        DCZZ_Msg_WarPhaseselectionResult.prototype.Selection=0;

        /**
         * DCZZ_Msg_WarPhaseselectionResult MoneyRemain.
         * @member {number|Long} MoneyRemain
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult
         * @instance
         */
        DCZZ_Msg_WarPhaseselectionResult.prototype.MoneyRemain=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new DCZZ_Msg_WarPhaseselectionResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WarPhaseselectionResult=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult} DCZZ_Msg_WarPhaseselectionResult instance
         */
        DCZZ_Msg_WarPhaseselectionResult.create=function create(properties) {
            return new DCZZ_Msg_WarPhaseselectionResult(properties);
        };

        /**
         * Encodes the specified DCZZ_Msg_WarPhaseselectionResult message. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WarPhaseselectionResult} message DCZZ_Msg_WarPhaseselectionResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_WarPhaseselectionResult.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Selection);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.MoneyRemain);
            return writer;
        };

        /**
         * Encodes the specified DCZZ_Msg_WarPhaseselectionResult message, length delimited. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_WarPhaseselectionResult} message DCZZ_Msg_WarPhaseselectionResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_WarPhaseselectionResult.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DCZZ_Msg_WarPhaseselectionResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult} DCZZ_Msg_WarPhaseselectionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_WarPhaseselectionResult.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.SeatNo=reader.int32();
                        break;
                    case 2:
                        message.Selection=reader.int32();
                        break;
                    case 3:
                        message.MoneyRemain=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance : message });
            if (!message.hasOwnProperty("Selection"))
                throw $util.ProtocolError("missing required 'Selection'", { instance : message });
            if (!message.hasOwnProperty("MoneyRemain"))
                throw $util.ProtocolError("missing required 'MoneyRemain'", { instance : message });
            return message;
        };

        /**
         * Decodes a DCZZ_Msg_WarPhaseselectionResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult} DCZZ_Msg_WarPhaseselectionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_WarPhaseselectionResult.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DCZZ_Msg_WarPhaseselectionResult message.
         * @function verify
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DCZZ_Msg_WarPhaseselectionResult.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (!$util.isInteger(message.Selection))
                return "Selection: integer expected";
            if (!$util.isInteger(message.MoneyRemain) && !(message.MoneyRemain && $util.isInteger(message.MoneyRemain.low) && $util.isInteger(message.MoneyRemain.high)))
                return "MoneyRemain: integer|Long expected";
            return null;
        };

        /**
         * Creates a DCZZ_Msg_WarPhaseselectionResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult} DCZZ_Msg_WarPhaseselectionResult
         */
        DCZZ_Msg_WarPhaseselectionResult.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult)
                return object;
            var message=new $root.GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult();
            if (object.SeatNo != null)
                message.SeatNo=object.SeatNo | 0;
            if (object.Selection != null)
                message.Selection=object.Selection | 0;
            if (object.MoneyRemain != null)
                if ($util.Long)
                    (message.MoneyRemain=$util.Long.fromValue(object.MoneyRemain)).unsigned=false;
                else if (typeof object.MoneyRemain === "string")
                    message.MoneyRemain=parseInt(object.MoneyRemain, 10);
                else if (typeof object.MoneyRemain === "number")
                    message.MoneyRemain=object.MoneyRemain;
                else if (typeof object.MoneyRemain === "object")
                    message.MoneyRemain=new $util.LongBits(object.MoneyRemain.low >>> 0, object.MoneyRemain.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DCZZ_Msg_WarPhaseselectionResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult
         * @static
         * @param {GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult} message DCZZ_Msg_WarPhaseselectionResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DCZZ_Msg_WarPhaseselectionResult.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.defaults) {
                object.SeatNo=0;
                object.Selection=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.MoneyRemain=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MoneyRemain=options.longs === String ? "0" : 0;
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo=message.SeatNo;
            if (message.Selection != null && message.hasOwnProperty("Selection"))
                object.Selection=message.Selection;
            if (message.MoneyRemain != null && message.hasOwnProperty("MoneyRemain"))
                if (typeof message.MoneyRemain === "number")
                    object.MoneyRemain=options.longs === String ? String(message.MoneyRemain) : message.MoneyRemain;
                else
                    object.MoneyRemain=options.longs === String ? $util.Long.prototype.toString.call(message.MoneyRemain) : options.longs === Number ? new $util.LongBits(message.MoneyRemain.low >>> 0, message.MoneyRemain.high >>> 0).toNumber() : message.MoneyRemain;
            return object;
        };

        /**
         * Converts this DCZZ_Msg_WarPhaseselectionResult to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.DCZZ_Msg_WarPhaseselectionResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DCZZ_Msg_WarPhaseselectionResult.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DCZZ_Msg_WarPhaseselectionResult;
    })();

    GameMsg_DCZZ.DCZZ_Msg_Deal_War=(function () {

        /**
         * Properties of a DCZZ_Msg_Deal_War.
         * @memberof GameMsg_DCZZ
         * @interface IDCZZ_Msg_Deal_War
         * @property {Array.<GameMsg_DCZZ.IPokerCard>|null} [DealerCards] DCZZ_Msg_Deal_War DealerCards
         * @property {Array.<GameMsg_DCZZ.IDCZZ_Msg_UserInfo>|null} [AllUserInfo] DCZZ_Msg_Deal_War AllUserInfo
         */

        /**
         * Constructs a new DCZZ_Msg_Deal_War.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a DCZZ_Msg_Deal_War.
         * @implements IDCZZ_Msg_Deal_War
         * @constructor
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Deal_War=} [properties] Properties to set
         */
        function DCZZ_Msg_Deal_War(properties) {
            this.DealerCards=[];
            this.AllUserInfo=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * DCZZ_Msg_Deal_War DealerCards.
         * @member {Array.<GameMsg_DCZZ.IPokerCard>} DealerCards
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_War
         * @instance
         */
        DCZZ_Msg_Deal_War.prototype.DealerCards=$util.emptyArray;

        /**
         * DCZZ_Msg_Deal_War AllUserInfo.
         * @member {Array.<GameMsg_DCZZ.IDCZZ_Msg_UserInfo>} AllUserInfo
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_War
         * @instance
         */
        DCZZ_Msg_Deal_War.prototype.AllUserInfo=$util.emptyArray;

        /**
         * Creates a new DCZZ_Msg_Deal_War instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_War
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Deal_War=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Deal_War} DCZZ_Msg_Deal_War instance
         */
        DCZZ_Msg_Deal_War.create=function create(properties) {
            return new DCZZ_Msg_Deal_War(properties);
        };

        /**
         * Encodes the specified DCZZ_Msg_Deal_War message. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_Deal_War.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_War
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Deal_War} message DCZZ_Msg_Deal_War message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_Deal_War.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.DealerCards != null && message.DealerCards.length)
                for (var i=0; i<message.DealerCards.length; ++ i)
                    $root.GameMsg_DCZZ.PokerCard.encode(message.DealerCards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.AllUserInfo != null && message.AllUserInfo.length)
                for (var i=0; i<message.AllUserInfo.length; ++ i)
                    $root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.encode(message.AllUserInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DCZZ_Msg_Deal_War message, length delimited. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_Deal_War.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_War
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Deal_War} message DCZZ_Msg_Deal_War message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_Deal_War.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DCZZ_Msg_Deal_War message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_War
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Deal_War} DCZZ_Msg_Deal_War
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_Deal_War.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.DCZZ_Msg_Deal_War();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.DealerCards && message.DealerCards.length))
                            message.DealerCards=[];
                        message.DealerCards.push($root.GameMsg_DCZZ.PokerCard.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        if (!(message.AllUserInfo && message.AllUserInfo.length))
                            message.AllUserInfo=[];
                        message.AllUserInfo.push($root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a DCZZ_Msg_Deal_War message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_War
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Deal_War} DCZZ_Msg_Deal_War
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_Deal_War.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DCZZ_Msg_Deal_War message.
         * @function verify
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_War
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DCZZ_Msg_Deal_War.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DealerCards != null && message.hasOwnProperty("DealerCards")) {
                if (!Array.isArray(message.DealerCards))
                    return "DealerCards: array expected";
                for (var i=0; i<message.DealerCards.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.PokerCard.verify(message.DealerCards[i]);
                    if (error)
                        return "DealerCards." + error;
                }
            }
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo")) {
                if (!Array.isArray(message.AllUserInfo))
                    return "AllUserInfo: array expected";
                for (var i=0; i<message.AllUserInfo.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.verify(message.AllUserInfo[i]);
                    if (error)
                        return "AllUserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DCZZ_Msg_Deal_War message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_War
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Deal_War} DCZZ_Msg_Deal_War
         */
        DCZZ_Msg_Deal_War.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.DCZZ_Msg_Deal_War)
                return object;
            var message=new $root.GameMsg_DCZZ.DCZZ_Msg_Deal_War();
            if (object.DealerCards) {
                if (!Array.isArray(object.DealerCards))
                    throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_Deal_War.DealerCards: array expected");
                message.DealerCards=[];
                for (var i=0; i<object.DealerCards.length; ++ i) {
                    if (typeof object.DealerCards[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_Deal_War.DealerCards: object expected");
                    message.DealerCards[i]=$root.GameMsg_DCZZ.PokerCard.fromObject(object.DealerCards[i]);
                }
            }
            if (object.AllUserInfo) {
                if (!Array.isArray(object.AllUserInfo))
                    throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_Deal_War.AllUserInfo: array expected");
                message.AllUserInfo=[];
                for (var i=0; i<object.AllUserInfo.length; ++ i) {
                    if (typeof object.AllUserInfo[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_Deal_War.AllUserInfo: object expected");
                    message.AllUserInfo[i]=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.fromObject(object.AllUserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DCZZ_Msg_Deal_War message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_War
         * @static
         * @param {GameMsg_DCZZ.DCZZ_Msg_Deal_War} message DCZZ_Msg_Deal_War
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DCZZ_Msg_Deal_War.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults) {
                object.DealerCards=[];
                object.AllUserInfo=[];
            }
            if (message.DealerCards && message.DealerCards.length) {
                object.DealerCards=[];
                for (var j=0; j<message.DealerCards.length; ++ j)
                    object.DealerCards[j]=$root.GameMsg_DCZZ.PokerCard.toObject(message.DealerCards[j], options);
            }
            if (message.AllUserInfo && message.AllUserInfo.length) {
                object.AllUserInfo=[];
                for (var j=0; j<message.AllUserInfo.length; ++ j)
                    object.AllUserInfo[j]=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.toObject(message.AllUserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this DCZZ_Msg_Deal_War to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Deal_War
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DCZZ_Msg_Deal_War.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DCZZ_Msg_Deal_War;
    })();

    GameMsg_DCZZ.DCZZ_Msg_Settlement_War=(function () {

        /**
         * Properties of a DCZZ_Msg_Settlement_War.
         * @memberof GameMsg_DCZZ
         * @interface IDCZZ_Msg_Settlement_War
         * @property {Array.<GameMsg_DCZZ.IDCZZ_Msg_UserInfo>|null} [AllUserInfo] DCZZ_Msg_Settlement_War AllUserInfo
         */

        /**
         * Constructs a new DCZZ_Msg_Settlement_War.
         * @memberof GameMsg_DCZZ
         * @classdesc Represents a DCZZ_Msg_Settlement_War.
         * @implements IDCZZ_Msg_Settlement_War
         * @constructor
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Settlement_War=} [properties] Properties to set
         */
        function DCZZ_Msg_Settlement_War(properties) {
            this.AllUserInfo=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * DCZZ_Msg_Settlement_War AllUserInfo.
         * @member {Array.<GameMsg_DCZZ.IDCZZ_Msg_UserInfo>} AllUserInfo
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_War
         * @instance
         */
        DCZZ_Msg_Settlement_War.prototype.AllUserInfo=$util.emptyArray;

        /**
         * Creates a new DCZZ_Msg_Settlement_War instance using the specified properties.
         * @function create
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_War
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Settlement_War=} [properties] Properties to set
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Settlement_War} DCZZ_Msg_Settlement_War instance
         */
        DCZZ_Msg_Settlement_War.create=function create(properties) {
            return new DCZZ_Msg_Settlement_War(properties);
        };

        /**
         * Encodes the specified DCZZ_Msg_Settlement_War message. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_Settlement_War.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_War
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Settlement_War} message DCZZ_Msg_Settlement_War message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_Settlement_War.encode=function encode(message, writer) {
            if (!writer)
                writer=$Writer.create();
            if (message.AllUserInfo != null && message.AllUserInfo.length)
                for (var i=0; i<message.AllUserInfo.length; ++ i)
                    $root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.encode(message.AllUserInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DCZZ_Msg_Settlement_War message, length delimited. Does not implicitly {@link GameMsg_DCZZ.DCZZ_Msg_Settlement_War.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_War
         * @static
         * @param {GameMsg_DCZZ.IDCZZ_Msg_Settlement_War} message DCZZ_Msg_Settlement_War message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DCZZ_Msg_Settlement_War.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DCZZ_Msg_Settlement_War message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_War
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Settlement_War} DCZZ_Msg_Settlement_War
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_Settlement_War.decode=function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_DCZZ.DCZZ_Msg_Settlement_War();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.AllUserInfo && message.AllUserInfo.length))
                            message.AllUserInfo=[];
                        message.AllUserInfo.push($root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a DCZZ_Msg_Settlement_War message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_War
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Settlement_War} DCZZ_Msg_Settlement_War
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DCZZ_Msg_Settlement_War.decodeDelimited=function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DCZZ_Msg_Settlement_War message.
         * @function verify
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_War
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DCZZ_Msg_Settlement_War.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo")) {
                if (!Array.isArray(message.AllUserInfo))
                    return "AllUserInfo: array expected";
                for (var i=0; i<message.AllUserInfo.length; ++ i) {
                    var error=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.verify(message.AllUserInfo[i]);
                    if (error)
                        return "AllUserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DCZZ_Msg_Settlement_War message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_War
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DCZZ.DCZZ_Msg_Settlement_War} DCZZ_Msg_Settlement_War
         */
        DCZZ_Msg_Settlement_War.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_DCZZ.DCZZ_Msg_Settlement_War)
                return object;
            var message=new $root.GameMsg_DCZZ.DCZZ_Msg_Settlement_War();
            if (object.AllUserInfo) {
                if (!Array.isArray(object.AllUserInfo))
                    throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_Settlement_War.AllUserInfo: array expected");
                message.AllUserInfo=[];
                for (var i=0; i<object.AllUserInfo.length; ++ i) {
                    if (typeof object.AllUserInfo[i] !== "object")
                        throw TypeError(".GameMsg_DCZZ.DCZZ_Msg_Settlement_War.AllUserInfo: object expected");
                    message.AllUserInfo[i]=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.fromObject(object.AllUserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DCZZ_Msg_Settlement_War message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_War
         * @static
         * @param {GameMsg_DCZZ.DCZZ_Msg_Settlement_War} message DCZZ_Msg_Settlement_War
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DCZZ_Msg_Settlement_War.toObject=function toObject(message, options) {
            if (!options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.AllUserInfo=[];
            if (message.AllUserInfo && message.AllUserInfo.length) {
                object.AllUserInfo=[];
                for (var j=0; j<message.AllUserInfo.length; ++ j)
                    object.AllUserInfo[j]=$root.GameMsg_DCZZ.DCZZ_Msg_UserInfo.toObject(message.AllUserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this DCZZ_Msg_Settlement_War to JSON.
         * @function toJSON
         * @memberof GameMsg_DCZZ.DCZZ_Msg_Settlement_War
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DCZZ_Msg_Settlement_War.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DCZZ_Msg_Settlement_War;
    })();

    return GameMsg_DCZZ;
})();

module.exports=$root;
