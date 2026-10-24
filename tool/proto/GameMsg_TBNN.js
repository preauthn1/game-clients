/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tbnn = (function() {

    /**
     * Namespace tbnn.
     * @exports tbnn
     * @namespace
     */
    var tbnn = {};

    tbnn.TBNN_GameStep = (function() {

        /**
         * Properties of a TBNN_GameStep.
         * @memberof tbnn
         * @interface ITBNN_GameStep
         * @property {number|null} [Step] TBNN_GameStep Step
         */

        /**
         * Constructs a new TBNN_GameStep.
         * @memberof tbnn
         * @classdesc Represents a TBNN_GameStep.
         * @implements ITBNN_GameStep
         * @constructor
         * @param {tbnn.ITBNN_GameStep=} [properties] Properties to set
         */
        function TBNN_GameStep(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBNN_GameStep Step.
         * @member {number} Step
         * @memberof tbnn.TBNN_GameStep
         * @instance
         */
        TBNN_GameStep.prototype.Step = 0;

        /**
         * Creates a new TBNN_GameStep instance using the specified properties.
         * @function create
         * @memberof tbnn.TBNN_GameStep
         * @static
         * @param {tbnn.ITBNN_GameStep=} [properties] Properties to set
         * @returns {tbnn.TBNN_GameStep} TBNN_GameStep instance
         */
        TBNN_GameStep.create = function create(properties) {
            return new TBNN_GameStep(properties);
        };

        /**
         * Encodes the specified TBNN_GameStep message. Does not implicitly {@link tbnn.TBNN_GameStep.verify|verify} messages.
         * @function encode
         * @memberof tbnn.TBNN_GameStep
         * @static
         * @param {tbnn.ITBNN_GameStep} message TBNN_GameStep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_GameStep.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Step != null && message.hasOwnProperty("Step"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Step);
            return writer;
        };

        /**
         * Encodes the specified TBNN_GameStep message, length delimited. Does not implicitly {@link tbnn.TBNN_GameStep.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.TBNN_GameStep
         * @static
         * @param {tbnn.ITBNN_GameStep} message TBNN_GameStep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_GameStep.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBNN_GameStep message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.TBNN_GameStep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.TBNN_GameStep} TBNN_GameStep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_GameStep.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.TBNN_GameStep();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Step = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBNN_GameStep message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.TBNN_GameStep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.TBNN_GameStep} TBNN_GameStep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_GameStep.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBNN_GameStep message.
         * @function verify
         * @memberof tbnn.TBNN_GameStep
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBNN_GameStep.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Step != null && message.hasOwnProperty("Step"))
                if (!$util.isInteger(message.Step))
                    return "Step: integer expected";
            return null;
        };

        /**
         * Creates a TBNN_GameStep message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.TBNN_GameStep
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.TBNN_GameStep} TBNN_GameStep
         */
        TBNN_GameStep.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.TBNN_GameStep)
                return object;
            var message = new $root.tbnn.TBNN_GameStep();
            if (object.Step != null)
                message.Step = object.Step | 0;
            return message;
        };

        /**
         * Creates a plain object from a TBNN_GameStep message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.TBNN_GameStep
         * @static
         * @param {tbnn.TBNN_GameStep} message TBNN_GameStep
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBNN_GameStep.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Step = 0;
            if (message.Step != null && message.hasOwnProperty("Step"))
                object.Step = message.Step;
            return object;
        };

        /**
         * Converts this TBNN_GameStep to JSON.
         * @function toJSON
         * @memberof tbnn.TBNN_GameStep
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBNN_GameStep.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBNN_GameStep;
    })();

    tbnn.TBNN_UserBaseScore = (function() {

        /**
         * Properties of a TBNN_UserBaseScore.
         * @memberof tbnn
         * @interface ITBNN_UserBaseScore
         * @property {number|null} [BaseScore] TBNN_UserBaseScore BaseScore
         */

        /**
         * Constructs a new TBNN_UserBaseScore.
         * @memberof tbnn
         * @classdesc Represents a TBNN_UserBaseScore.
         * @implements ITBNN_UserBaseScore
         * @constructor
         * @param {tbnn.ITBNN_UserBaseScore=} [properties] Properties to set
         */
        function TBNN_UserBaseScore(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBNN_UserBaseScore BaseScore.
         * @member {number} BaseScore
         * @memberof tbnn.TBNN_UserBaseScore
         * @instance
         */
        TBNN_UserBaseScore.prototype.BaseScore = 0;

        /**
         * Creates a new TBNN_UserBaseScore instance using the specified properties.
         * @function create
         * @memberof tbnn.TBNN_UserBaseScore
         * @static
         * @param {tbnn.ITBNN_UserBaseScore=} [properties] Properties to set
         * @returns {tbnn.TBNN_UserBaseScore} TBNN_UserBaseScore instance
         */
        TBNN_UserBaseScore.create = function create(properties) {
            return new TBNN_UserBaseScore(properties);
        };

        /**
         * Encodes the specified TBNN_UserBaseScore message. Does not implicitly {@link tbnn.TBNN_UserBaseScore.verify|verify} messages.
         * @function encode
         * @memberof tbnn.TBNN_UserBaseScore
         * @static
         * @param {tbnn.ITBNN_UserBaseScore} message TBNN_UserBaseScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_UserBaseScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BaseScore);
            return writer;
        };

        /**
         * Encodes the specified TBNN_UserBaseScore message, length delimited. Does not implicitly {@link tbnn.TBNN_UserBaseScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.TBNN_UserBaseScore
         * @static
         * @param {tbnn.ITBNN_UserBaseScore} message TBNN_UserBaseScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_UserBaseScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBNN_UserBaseScore message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.TBNN_UserBaseScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.TBNN_UserBaseScore} TBNN_UserBaseScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_UserBaseScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.TBNN_UserBaseScore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BaseScore = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBNN_UserBaseScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.TBNN_UserBaseScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.TBNN_UserBaseScore} TBNN_UserBaseScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_UserBaseScore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBNN_UserBaseScore message.
         * @function verify
         * @memberof tbnn.TBNN_UserBaseScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBNN_UserBaseScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                if (!$util.isInteger(message.BaseScore))
                    return "BaseScore: integer expected";
            return null;
        };

        /**
         * Creates a TBNN_UserBaseScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.TBNN_UserBaseScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.TBNN_UserBaseScore} TBNN_UserBaseScore
         */
        TBNN_UserBaseScore.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.TBNN_UserBaseScore)
                return object;
            var message = new $root.tbnn.TBNN_UserBaseScore();
            if (object.BaseScore != null)
                message.BaseScore = object.BaseScore | 0;
            return message;
        };

        /**
         * Creates a plain object from a TBNN_UserBaseScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.TBNN_UserBaseScore
         * @static
         * @param {tbnn.TBNN_UserBaseScore} message TBNN_UserBaseScore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBNN_UserBaseScore.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.BaseScore = 0;
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                object.BaseScore = message.BaseScore;
            return object;
        };

        /**
         * Converts this TBNN_UserBaseScore to JSON.
         * @function toJSON
         * @memberof tbnn.TBNN_UserBaseScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBNN_UserBaseScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBNN_UserBaseScore;
    })();

    tbnn.TBNN_NotifyUserBaseScore = (function() {

        /**
         * Properties of a TBNN_NotifyUserBaseScore.
         * @memberof tbnn
         * @interface ITBNN_NotifyUserBaseScore
         * @property {number|null} [UserID] TBNN_NotifyUserBaseScore UserID
         * @property {number|null} [BaseScore] TBNN_NotifyUserBaseScore BaseScore
         */

        /**
         * Constructs a new TBNN_NotifyUserBaseScore.
         * @memberof tbnn
         * @classdesc Represents a TBNN_NotifyUserBaseScore.
         * @implements ITBNN_NotifyUserBaseScore
         * @constructor
         * @param {tbnn.ITBNN_NotifyUserBaseScore=} [properties] Properties to set
         */
        function TBNN_NotifyUserBaseScore(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBNN_NotifyUserBaseScore UserID.
         * @member {number} UserID
         * @memberof tbnn.TBNN_NotifyUserBaseScore
         * @instance
         */
        TBNN_NotifyUserBaseScore.prototype.UserID = 0;

        /**
         * TBNN_NotifyUserBaseScore BaseScore.
         * @member {number} BaseScore
         * @memberof tbnn.TBNN_NotifyUserBaseScore
         * @instance
         */
        TBNN_NotifyUserBaseScore.prototype.BaseScore = 0;

        /**
         * Creates a new TBNN_NotifyUserBaseScore instance using the specified properties.
         * @function create
         * @memberof tbnn.TBNN_NotifyUserBaseScore
         * @static
         * @param {tbnn.ITBNN_NotifyUserBaseScore=} [properties] Properties to set
         * @returns {tbnn.TBNN_NotifyUserBaseScore} TBNN_NotifyUserBaseScore instance
         */
        TBNN_NotifyUserBaseScore.create = function create(properties) {
            return new TBNN_NotifyUserBaseScore(properties);
        };

        /**
         * Encodes the specified TBNN_NotifyUserBaseScore message. Does not implicitly {@link tbnn.TBNN_NotifyUserBaseScore.verify|verify} messages.
         * @function encode
         * @memberof tbnn.TBNN_NotifyUserBaseScore
         * @static
         * @param {tbnn.ITBNN_NotifyUserBaseScore} message TBNN_NotifyUserBaseScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_NotifyUserBaseScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BaseScore);
            return writer;
        };

        /**
         * Encodes the specified TBNN_NotifyUserBaseScore message, length delimited. Does not implicitly {@link tbnn.TBNN_NotifyUserBaseScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.TBNN_NotifyUserBaseScore
         * @static
         * @param {tbnn.ITBNN_NotifyUserBaseScore} message TBNN_NotifyUserBaseScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_NotifyUserBaseScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBNN_NotifyUserBaseScore message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.TBNN_NotifyUserBaseScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.TBNN_NotifyUserBaseScore} TBNN_NotifyUserBaseScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_NotifyUserBaseScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.TBNN_NotifyUserBaseScore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.BaseScore = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBNN_NotifyUserBaseScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.TBNN_NotifyUserBaseScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.TBNN_NotifyUserBaseScore} TBNN_NotifyUserBaseScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_NotifyUserBaseScore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBNN_NotifyUserBaseScore message.
         * @function verify
         * @memberof tbnn.TBNN_NotifyUserBaseScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBNN_NotifyUserBaseScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                if (!$util.isInteger(message.BaseScore))
                    return "BaseScore: integer expected";
            return null;
        };

        /**
         * Creates a TBNN_NotifyUserBaseScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.TBNN_NotifyUserBaseScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.TBNN_NotifyUserBaseScore} TBNN_NotifyUserBaseScore
         */
        TBNN_NotifyUserBaseScore.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.TBNN_NotifyUserBaseScore)
                return object;
            var message = new $root.tbnn.TBNN_NotifyUserBaseScore();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.BaseScore != null)
                message.BaseScore = object.BaseScore | 0;
            return message;
        };

        /**
         * Creates a plain object from a TBNN_NotifyUserBaseScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.TBNN_NotifyUserBaseScore
         * @static
         * @param {tbnn.TBNN_NotifyUserBaseScore} message TBNN_NotifyUserBaseScore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBNN_NotifyUserBaseScore.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.BaseScore = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                object.BaseScore = message.BaseScore;
            return object;
        };

        /**
         * Converts this TBNN_NotifyUserBaseScore to JSON.
         * @function toJSON
         * @memberof tbnn.TBNN_NotifyUserBaseScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBNN_NotifyUserBaseScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBNN_NotifyUserBaseScore;
    })();

    tbnn.TBNN_NotifyGameBaseScore = (function() {

        /**
         * Properties of a TBNN_NotifyGameBaseScore.
         * @memberof tbnn
         * @interface ITBNN_NotifyGameBaseScore
         * @property {Array.<tbnn.ITBNN_NotifyUserBaseScore>|null} [GameBet] TBNN_NotifyGameBaseScore GameBet
         */

        /**
         * Constructs a new TBNN_NotifyGameBaseScore.
         * @memberof tbnn
         * @classdesc Represents a TBNN_NotifyGameBaseScore.
         * @implements ITBNN_NotifyGameBaseScore
         * @constructor
         * @param {tbnn.ITBNN_NotifyGameBaseScore=} [properties] Properties to set
         */
        function TBNN_NotifyGameBaseScore(properties) {
            this.GameBet = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBNN_NotifyGameBaseScore GameBet.
         * @member {Array.<tbnn.ITBNN_NotifyUserBaseScore>} GameBet
         * @memberof tbnn.TBNN_NotifyGameBaseScore
         * @instance
         */
        TBNN_NotifyGameBaseScore.prototype.GameBet = $util.emptyArray;

        /**
         * Creates a new TBNN_NotifyGameBaseScore instance using the specified properties.
         * @function create
         * @memberof tbnn.TBNN_NotifyGameBaseScore
         * @static
         * @param {tbnn.ITBNN_NotifyGameBaseScore=} [properties] Properties to set
         * @returns {tbnn.TBNN_NotifyGameBaseScore} TBNN_NotifyGameBaseScore instance
         */
        TBNN_NotifyGameBaseScore.create = function create(properties) {
            return new TBNN_NotifyGameBaseScore(properties);
        };

        /**
         * Encodes the specified TBNN_NotifyGameBaseScore message. Does not implicitly {@link tbnn.TBNN_NotifyGameBaseScore.verify|verify} messages.
         * @function encode
         * @memberof tbnn.TBNN_NotifyGameBaseScore
         * @static
         * @param {tbnn.ITBNN_NotifyGameBaseScore} message TBNN_NotifyGameBaseScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_NotifyGameBaseScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameBet != null && message.GameBet.length)
                for (var i = 0; i < message.GameBet.length; ++i)
                    $root.tbnn.TBNN_NotifyUserBaseScore.encode(message.GameBet[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBNN_NotifyGameBaseScore message, length delimited. Does not implicitly {@link tbnn.TBNN_NotifyGameBaseScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.TBNN_NotifyGameBaseScore
         * @static
         * @param {tbnn.ITBNN_NotifyGameBaseScore} message TBNN_NotifyGameBaseScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_NotifyGameBaseScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBNN_NotifyGameBaseScore message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.TBNN_NotifyGameBaseScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.TBNN_NotifyGameBaseScore} TBNN_NotifyGameBaseScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_NotifyGameBaseScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.TBNN_NotifyGameBaseScore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.GameBet && message.GameBet.length))
                        message.GameBet = [];
                    message.GameBet.push($root.tbnn.TBNN_NotifyUserBaseScore.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBNN_NotifyGameBaseScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.TBNN_NotifyGameBaseScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.TBNN_NotifyGameBaseScore} TBNN_NotifyGameBaseScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_NotifyGameBaseScore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBNN_NotifyGameBaseScore message.
         * @function verify
         * @memberof tbnn.TBNN_NotifyGameBaseScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBNN_NotifyGameBaseScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameBet != null && message.hasOwnProperty("GameBet")) {
                if (!Array.isArray(message.GameBet))
                    return "GameBet: array expected";
                for (var i = 0; i < message.GameBet.length; ++i) {
                    var error = $root.tbnn.TBNN_NotifyUserBaseScore.verify(message.GameBet[i]);
                    if (error)
                        return "GameBet." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBNN_NotifyGameBaseScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.TBNN_NotifyGameBaseScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.TBNN_NotifyGameBaseScore} TBNN_NotifyGameBaseScore
         */
        TBNN_NotifyGameBaseScore.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.TBNN_NotifyGameBaseScore)
                return object;
            var message = new $root.tbnn.TBNN_NotifyGameBaseScore();
            if (object.GameBet) {
                if (!Array.isArray(object.GameBet))
                    throw TypeError(".tbnn.TBNN_NotifyGameBaseScore.GameBet: array expected");
                message.GameBet = [];
                for (var i = 0; i < object.GameBet.length; ++i) {
                    if (typeof object.GameBet[i] !== "object")
                        throw TypeError(".tbnn.TBNN_NotifyGameBaseScore.GameBet: object expected");
                    message.GameBet[i] = $root.tbnn.TBNN_NotifyUserBaseScore.fromObject(object.GameBet[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBNN_NotifyGameBaseScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.TBNN_NotifyGameBaseScore
         * @static
         * @param {tbnn.TBNN_NotifyGameBaseScore} message TBNN_NotifyGameBaseScore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBNN_NotifyGameBaseScore.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.GameBet = [];
            if (message.GameBet && message.GameBet.length) {
                object.GameBet = [];
                for (var j = 0; j < message.GameBet.length; ++j)
                    object.GameBet[j] = $root.tbnn.TBNN_NotifyUserBaseScore.toObject(message.GameBet[j], options);
            }
            return object;
        };

        /**
         * Converts this TBNN_NotifyGameBaseScore to JSON.
         * @function toJSON
         * @memberof tbnn.TBNN_NotifyGameBaseScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBNN_NotifyGameBaseScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBNN_NotifyGameBaseScore;
    })();

    tbnn.TBNN_GameSetting = (function() {

        /**
         * Properties of a TBNN_GameSetting.
         * @memberof tbnn
         * @interface ITBNN_GameSetting
         * @property {number|null} [BaseScoreTimeout] TBNN_GameSetting BaseScoreTimeout
         * @property {number|null} [CardGroupTimeout] TBNN_GameSetting CardGroupTimeout
         * @property {number|null} [BaseScore] TBNN_GameSetting BaseScore
         * @property {number|null} [TableNo] TBNN_GameSetting TableNo
         * @property {number|null} [GameID] TBNN_GameSetting GameID
         * @property {number|null} [ReadyTimeout] TBNN_GameSetting ReadyTimeout
         * @property {Array.<number>|null} [BaseScoreTimes] TBNN_GameSetting BaseScoreTimes
         */

        /**
         * Constructs a new TBNN_GameSetting.
         * @memberof tbnn
         * @classdesc Represents a TBNN_GameSetting.
         * @implements ITBNN_GameSetting
         * @constructor
         * @param {tbnn.ITBNN_GameSetting=} [properties] Properties to set
         */
        function TBNN_GameSetting(properties) {
            this.BaseScoreTimes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBNN_GameSetting BaseScoreTimeout.
         * @member {number} BaseScoreTimeout
         * @memberof tbnn.TBNN_GameSetting
         * @instance
         */
        TBNN_GameSetting.prototype.BaseScoreTimeout = 0;

        /**
         * TBNN_GameSetting CardGroupTimeout.
         * @member {number} CardGroupTimeout
         * @memberof tbnn.TBNN_GameSetting
         * @instance
         */
        TBNN_GameSetting.prototype.CardGroupTimeout = 0;

        /**
         * TBNN_GameSetting BaseScore.
         * @member {number} BaseScore
         * @memberof tbnn.TBNN_GameSetting
         * @instance
         */
        TBNN_GameSetting.prototype.BaseScore = 0;

        /**
         * TBNN_GameSetting TableNo.
         * @member {number} TableNo
         * @memberof tbnn.TBNN_GameSetting
         * @instance
         */
        TBNN_GameSetting.prototype.TableNo = 0;

        /**
         * TBNN_GameSetting GameID.
         * @member {number} GameID
         * @memberof tbnn.TBNN_GameSetting
         * @instance
         */
        TBNN_GameSetting.prototype.GameID = 0;

        /**
         * TBNN_GameSetting ReadyTimeout.
         * @member {number} ReadyTimeout
         * @memberof tbnn.TBNN_GameSetting
         * @instance
         */
        TBNN_GameSetting.prototype.ReadyTimeout = 0;

        /**
         * TBNN_GameSetting BaseScoreTimes.
         * @member {Array.<number>} BaseScoreTimes
         * @memberof tbnn.TBNN_GameSetting
         * @instance
         */
        TBNN_GameSetting.prototype.BaseScoreTimes = $util.emptyArray;

        /**
         * Creates a new TBNN_GameSetting instance using the specified properties.
         * @function create
         * @memberof tbnn.TBNN_GameSetting
         * @static
         * @param {tbnn.ITBNN_GameSetting=} [properties] Properties to set
         * @returns {tbnn.TBNN_GameSetting} TBNN_GameSetting instance
         */
        TBNN_GameSetting.create = function create(properties) {
            return new TBNN_GameSetting(properties);
        };

        /**
         * Encodes the specified TBNN_GameSetting message. Does not implicitly {@link tbnn.TBNN_GameSetting.verify|verify} messages.
         * @function encode
         * @memberof tbnn.TBNN_GameSetting
         * @static
         * @param {tbnn.ITBNN_GameSetting} message TBNN_GameSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_GameSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BaseScoreTimeout != null && message.hasOwnProperty("BaseScoreTimeout"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BaseScoreTimeout);
            if (message.CardGroupTimeout != null && message.hasOwnProperty("CardGroupTimeout"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CardGroupTimeout);
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.BaseScore);
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.TableNo);
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.GameID);
            if (message.ReadyTimeout != null && message.hasOwnProperty("ReadyTimeout"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.ReadyTimeout);
            if (message.BaseScoreTimes != null && message.BaseScoreTimes.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.BaseScoreTimes.length; ++i)
                    writer.int32(message.BaseScoreTimes[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified TBNN_GameSetting message, length delimited. Does not implicitly {@link tbnn.TBNN_GameSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.TBNN_GameSetting
         * @static
         * @param {tbnn.ITBNN_GameSetting} message TBNN_GameSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_GameSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBNN_GameSetting message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.TBNN_GameSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.TBNN_GameSetting} TBNN_GameSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_GameSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.TBNN_GameSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BaseScoreTimeout = reader.int32();
                    break;
                case 2:
                    message.CardGroupTimeout = reader.int32();
                    break;
                case 3:
                    message.BaseScore = reader.int32();
                    break;
                case 4:
                    message.TableNo = reader.int32();
                    break;
                case 5:
                    message.GameID = reader.int32();
                    break;
                case 6:
                    message.ReadyTimeout = reader.int32();
                    break;
                case 7:
                    if (!(message.BaseScoreTimes && message.BaseScoreTimes.length))
                        message.BaseScoreTimes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BaseScoreTimes.push(reader.int32());
                    } else
                        message.BaseScoreTimes.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBNN_GameSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.TBNN_GameSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.TBNN_GameSetting} TBNN_GameSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_GameSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBNN_GameSetting message.
         * @function verify
         * @memberof tbnn.TBNN_GameSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBNN_GameSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BaseScoreTimeout != null && message.hasOwnProperty("BaseScoreTimeout"))
                if (!$util.isInteger(message.BaseScoreTimeout))
                    return "BaseScoreTimeout: integer expected";
            if (message.CardGroupTimeout != null && message.hasOwnProperty("CardGroupTimeout"))
                if (!$util.isInteger(message.CardGroupTimeout))
                    return "CardGroupTimeout: integer expected";
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                if (!$util.isInteger(message.BaseScore))
                    return "BaseScore: integer expected";
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                if (!$util.isInteger(message.TableNo))
                    return "TableNo: integer expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.ReadyTimeout != null && message.hasOwnProperty("ReadyTimeout"))
                if (!$util.isInteger(message.ReadyTimeout))
                    return "ReadyTimeout: integer expected";
            if (message.BaseScoreTimes != null && message.hasOwnProperty("BaseScoreTimes")) {
                if (!Array.isArray(message.BaseScoreTimes))
                    return "BaseScoreTimes: array expected";
                for (var i = 0; i < message.BaseScoreTimes.length; ++i)
                    if (!$util.isInteger(message.BaseScoreTimes[i]))
                        return "BaseScoreTimes: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a TBNN_GameSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.TBNN_GameSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.TBNN_GameSetting} TBNN_GameSetting
         */
        TBNN_GameSetting.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.TBNN_GameSetting)
                return object;
            var message = new $root.tbnn.TBNN_GameSetting();
            if (object.BaseScoreTimeout != null)
                message.BaseScoreTimeout = object.BaseScoreTimeout | 0;
            if (object.CardGroupTimeout != null)
                message.CardGroupTimeout = object.CardGroupTimeout | 0;
            if (object.BaseScore != null)
                message.BaseScore = object.BaseScore | 0;
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.ReadyTimeout != null)
                message.ReadyTimeout = object.ReadyTimeout | 0;
            if (object.BaseScoreTimes) {
                if (!Array.isArray(object.BaseScoreTimes))
                    throw TypeError(".tbnn.TBNN_GameSetting.BaseScoreTimes: array expected");
                message.BaseScoreTimes = [];
                for (var i = 0; i < object.BaseScoreTimes.length; ++i)
                    message.BaseScoreTimes[i] = object.BaseScoreTimes[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a TBNN_GameSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.TBNN_GameSetting
         * @static
         * @param {tbnn.TBNN_GameSetting} message TBNN_GameSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBNN_GameSetting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BaseScoreTimes = [];
            if (options.defaults) {
                object.BaseScoreTimeout = 0;
                object.CardGroupTimeout = 0;
                object.BaseScore = 0;
                object.TableNo = 0;
                object.GameID = 0;
                object.ReadyTimeout = 0;
            }
            if (message.BaseScoreTimeout != null && message.hasOwnProperty("BaseScoreTimeout"))
                object.BaseScoreTimeout = message.BaseScoreTimeout;
            if (message.CardGroupTimeout != null && message.hasOwnProperty("CardGroupTimeout"))
                object.CardGroupTimeout = message.CardGroupTimeout;
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                object.BaseScore = message.BaseScore;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.ReadyTimeout != null && message.hasOwnProperty("ReadyTimeout"))
                object.ReadyTimeout = message.ReadyTimeout;
            if (message.BaseScoreTimes && message.BaseScoreTimes.length) {
                object.BaseScoreTimes = [];
                for (var j = 0; j < message.BaseScoreTimes.length; ++j)
                    object.BaseScoreTimes[j] = message.BaseScoreTimes[j];
            }
            return object;
        };

        /**
         * Converts this TBNN_GameSetting to JSON.
         * @function toJSON
         * @memberof tbnn.TBNN_GameSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBNN_GameSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBNN_GameSetting;
    })();

    tbnn.TBNN_NotifyUserCardGroup = (function() {

        /**
         * Properties of a TBNN_NotifyUserCardGroup.
         * @memberof tbnn
         * @interface ITBNN_NotifyUserCardGroup
         * @property {number|null} [UserID] TBNN_NotifyUserCardGroup UserID
         */

        /**
         * Constructs a new TBNN_NotifyUserCardGroup.
         * @memberof tbnn
         * @classdesc Represents a TBNN_NotifyUserCardGroup.
         * @implements ITBNN_NotifyUserCardGroup
         * @constructor
         * @param {tbnn.ITBNN_NotifyUserCardGroup=} [properties] Properties to set
         */
        function TBNN_NotifyUserCardGroup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBNN_NotifyUserCardGroup UserID.
         * @member {number} UserID
         * @memberof tbnn.TBNN_NotifyUserCardGroup
         * @instance
         */
        TBNN_NotifyUserCardGroup.prototype.UserID = 0;

        /**
         * Creates a new TBNN_NotifyUserCardGroup instance using the specified properties.
         * @function create
         * @memberof tbnn.TBNN_NotifyUserCardGroup
         * @static
         * @param {tbnn.ITBNN_NotifyUserCardGroup=} [properties] Properties to set
         * @returns {tbnn.TBNN_NotifyUserCardGroup} TBNN_NotifyUserCardGroup instance
         */
        TBNN_NotifyUserCardGroup.create = function create(properties) {
            return new TBNN_NotifyUserCardGroup(properties);
        };

        /**
         * Encodes the specified TBNN_NotifyUserCardGroup message. Does not implicitly {@link tbnn.TBNN_NotifyUserCardGroup.verify|verify} messages.
         * @function encode
         * @memberof tbnn.TBNN_NotifyUserCardGroup
         * @static
         * @param {tbnn.ITBNN_NotifyUserCardGroup} message TBNN_NotifyUserCardGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_NotifyUserCardGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            return writer;
        };

        /**
         * Encodes the specified TBNN_NotifyUserCardGroup message, length delimited. Does not implicitly {@link tbnn.TBNN_NotifyUserCardGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.TBNN_NotifyUserCardGroup
         * @static
         * @param {tbnn.ITBNN_NotifyUserCardGroup} message TBNN_NotifyUserCardGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_NotifyUserCardGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBNN_NotifyUserCardGroup message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.TBNN_NotifyUserCardGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.TBNN_NotifyUserCardGroup} TBNN_NotifyUserCardGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_NotifyUserCardGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.TBNN_NotifyUserCardGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBNN_NotifyUserCardGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.TBNN_NotifyUserCardGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.TBNN_NotifyUserCardGroup} TBNN_NotifyUserCardGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_NotifyUserCardGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBNN_NotifyUserCardGroup message.
         * @function verify
         * @memberof tbnn.TBNN_NotifyUserCardGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBNN_NotifyUserCardGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            return null;
        };

        /**
         * Creates a TBNN_NotifyUserCardGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.TBNN_NotifyUserCardGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.TBNN_NotifyUserCardGroup} TBNN_NotifyUserCardGroup
         */
        TBNN_NotifyUserCardGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.TBNN_NotifyUserCardGroup)
                return object;
            var message = new $root.tbnn.TBNN_NotifyUserCardGroup();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            return message;
        };

        /**
         * Creates a plain object from a TBNN_NotifyUserCardGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.TBNN_NotifyUserCardGroup
         * @static
         * @param {tbnn.TBNN_NotifyUserCardGroup} message TBNN_NotifyUserCardGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBNN_NotifyUserCardGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.UserID = 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            return object;
        };

        /**
         * Converts this TBNN_NotifyUserCardGroup to JSON.
         * @function toJSON
         * @memberof tbnn.TBNN_NotifyUserCardGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBNN_NotifyUserCardGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBNN_NotifyUserCardGroup;
    })();

    tbnn.TBNN_UserBetRet = (function() {

        /**
         * Properties of a TBNN_UserBetRet.
         * @memberof tbnn
         * @interface ITBNN_UserBetRet
         * @property {number|null} [UserID] TBNN_UserBetRet UserID
         * @property {number|null} [NiuNiuRet] TBNN_UserBetRet NiuNiuRet
         * @property {number|null} [UserBetTimes] TBNN_UserBetRet UserBetTimes
         * @property {number|null} [NiuNiuBetTimes] TBNN_UserBetRet NiuNiuBetTimes
         * @property {number|null} [NiuNiuNumber] TBNN_UserBetRet NiuNiuNumber
         * @property {number|Long|null} [WinLose] TBNN_UserBetRet WinLose
         * @property {Array.<tbnn.IPokerCard>|null} [CardGroup] TBNN_UserBetRet CardGroup
         */

        /**
         * Constructs a new TBNN_UserBetRet.
         * @memberof tbnn
         * @classdesc Represents a TBNN_UserBetRet.
         * @implements ITBNN_UserBetRet
         * @constructor
         * @param {tbnn.ITBNN_UserBetRet=} [properties] Properties to set
         */
        function TBNN_UserBetRet(properties) {
            this.CardGroup = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBNN_UserBetRet UserID.
         * @member {number} UserID
         * @memberof tbnn.TBNN_UserBetRet
         * @instance
         */
        TBNN_UserBetRet.prototype.UserID = 0;

        /**
         * TBNN_UserBetRet NiuNiuRet.
         * @member {number} NiuNiuRet
         * @memberof tbnn.TBNN_UserBetRet
         * @instance
         */
        TBNN_UserBetRet.prototype.NiuNiuRet = 0;

        /**
         * TBNN_UserBetRet UserBetTimes.
         * @member {number} UserBetTimes
         * @memberof tbnn.TBNN_UserBetRet
         * @instance
         */
        TBNN_UserBetRet.prototype.UserBetTimes = 0;

        /**
         * TBNN_UserBetRet NiuNiuBetTimes.
         * @member {number} NiuNiuBetTimes
         * @memberof tbnn.TBNN_UserBetRet
         * @instance
         */
        TBNN_UserBetRet.prototype.NiuNiuBetTimes = 0;

        /**
         * TBNN_UserBetRet NiuNiuNumber.
         * @member {number} NiuNiuNumber
         * @memberof tbnn.TBNN_UserBetRet
         * @instance
         */
        TBNN_UserBetRet.prototype.NiuNiuNumber = 0;

        /**
         * TBNN_UserBetRet WinLose.
         * @member {number|Long} WinLose
         * @memberof tbnn.TBNN_UserBetRet
         * @instance
         */
        TBNN_UserBetRet.prototype.WinLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TBNN_UserBetRet CardGroup.
         * @member {Array.<tbnn.IPokerCard>} CardGroup
         * @memberof tbnn.TBNN_UserBetRet
         * @instance
         */
        TBNN_UserBetRet.prototype.CardGroup = $util.emptyArray;

        /**
         * Creates a new TBNN_UserBetRet instance using the specified properties.
         * @function create
         * @memberof tbnn.TBNN_UserBetRet
         * @static
         * @param {tbnn.ITBNN_UserBetRet=} [properties] Properties to set
         * @returns {tbnn.TBNN_UserBetRet} TBNN_UserBetRet instance
         */
        TBNN_UserBetRet.create = function create(properties) {
            return new TBNN_UserBetRet(properties);
        };

        /**
         * Encodes the specified TBNN_UserBetRet message. Does not implicitly {@link tbnn.TBNN_UserBetRet.verify|verify} messages.
         * @function encode
         * @memberof tbnn.TBNN_UserBetRet
         * @static
         * @param {tbnn.ITBNN_UserBetRet} message TBNN_UserBetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_UserBetRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.NiuNiuRet != null && message.hasOwnProperty("NiuNiuRet"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.NiuNiuRet);
            if (message.UserBetTimes != null && message.hasOwnProperty("UserBetTimes"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.UserBetTimes);
            if (message.NiuNiuBetTimes != null && message.hasOwnProperty("NiuNiuBetTimes"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.NiuNiuBetTimes);
            if (message.NiuNiuNumber != null && message.hasOwnProperty("NiuNiuNumber"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.NiuNiuNumber);
            if (message.WinLose != null && message.hasOwnProperty("WinLose"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.WinLose);
            if (message.CardGroup != null && message.CardGroup.length)
                for (var i = 0; i < message.CardGroup.length; ++i)
                    $root.tbnn.PokerCard.encode(message.CardGroup[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBNN_UserBetRet message, length delimited. Does not implicitly {@link tbnn.TBNN_UserBetRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.TBNN_UserBetRet
         * @static
         * @param {tbnn.ITBNN_UserBetRet} message TBNN_UserBetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_UserBetRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBNN_UserBetRet message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.TBNN_UserBetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.TBNN_UserBetRet} TBNN_UserBetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_UserBetRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.TBNN_UserBetRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.NiuNiuRet = reader.int32();
                    break;
                case 3:
                    message.UserBetTimes = reader.int32();
                    break;
                case 4:
                    message.NiuNiuBetTimes = reader.int32();
                    break;
                case 5:
                    message.NiuNiuNumber = reader.int32();
                    break;
                case 6:
                    message.WinLose = reader.int64();
                    break;
                case 7:
                    if (!(message.CardGroup && message.CardGroup.length))
                        message.CardGroup = [];
                    message.CardGroup.push($root.tbnn.PokerCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBNN_UserBetRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.TBNN_UserBetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.TBNN_UserBetRet} TBNN_UserBetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_UserBetRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBNN_UserBetRet message.
         * @function verify
         * @memberof tbnn.TBNN_UserBetRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBNN_UserBetRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.NiuNiuRet != null && message.hasOwnProperty("NiuNiuRet"))
                if (!$util.isInteger(message.NiuNiuRet))
                    return "NiuNiuRet: integer expected";
            if (message.UserBetTimes != null && message.hasOwnProperty("UserBetTimes"))
                if (!$util.isInteger(message.UserBetTimes))
                    return "UserBetTimes: integer expected";
            if (message.NiuNiuBetTimes != null && message.hasOwnProperty("NiuNiuBetTimes"))
                if (!$util.isInteger(message.NiuNiuBetTimes))
                    return "NiuNiuBetTimes: integer expected";
            if (message.NiuNiuNumber != null && message.hasOwnProperty("NiuNiuNumber"))
                if (!$util.isInteger(message.NiuNiuNumber))
                    return "NiuNiuNumber: integer expected";
            if (message.WinLose != null && message.hasOwnProperty("WinLose"))
                if (!$util.isInteger(message.WinLose) && !(message.WinLose && $util.isInteger(message.WinLose.low) && $util.isInteger(message.WinLose.high)))
                    return "WinLose: integer|Long expected";
            if (message.CardGroup != null && message.hasOwnProperty("CardGroup")) {
                if (!Array.isArray(message.CardGroup))
                    return "CardGroup: array expected";
                for (var i = 0; i < message.CardGroup.length; ++i) {
                    var error = $root.tbnn.PokerCard.verify(message.CardGroup[i]);
                    if (error)
                        return "CardGroup." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBNN_UserBetRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.TBNN_UserBetRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.TBNN_UserBetRet} TBNN_UserBetRet
         */
        TBNN_UserBetRet.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.TBNN_UserBetRet)
                return object;
            var message = new $root.tbnn.TBNN_UserBetRet();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.NiuNiuRet != null)
                message.NiuNiuRet = object.NiuNiuRet | 0;
            if (object.UserBetTimes != null)
                message.UserBetTimes = object.UserBetTimes | 0;
            if (object.NiuNiuBetTimes != null)
                message.NiuNiuBetTimes = object.NiuNiuBetTimes | 0;
            if (object.NiuNiuNumber != null)
                message.NiuNiuNumber = object.NiuNiuNumber | 0;
            if (object.WinLose != null)
                if ($util.Long)
                    (message.WinLose = $util.Long.fromValue(object.WinLose)).unsigned = false;
                else if (typeof object.WinLose === "string")
                    message.WinLose = parseInt(object.WinLose, 10);
                else if (typeof object.WinLose === "number")
                    message.WinLose = object.WinLose;
                else if (typeof object.WinLose === "object")
                    message.WinLose = new $util.LongBits(object.WinLose.low >>> 0, object.WinLose.high >>> 0).toNumber();
            if (object.CardGroup) {
                if (!Array.isArray(object.CardGroup))
                    throw TypeError(".tbnn.TBNN_UserBetRet.CardGroup: array expected");
                message.CardGroup = [];
                for (var i = 0; i < object.CardGroup.length; ++i) {
                    if (typeof object.CardGroup[i] !== "object")
                        throw TypeError(".tbnn.TBNN_UserBetRet.CardGroup: object expected");
                    message.CardGroup[i] = $root.tbnn.PokerCard.fromObject(object.CardGroup[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBNN_UserBetRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.TBNN_UserBetRet
         * @static
         * @param {tbnn.TBNN_UserBetRet} message TBNN_UserBetRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBNN_UserBetRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.CardGroup = [];
            if (options.defaults) {
                object.UserID = 0;
                object.NiuNiuRet = 0;
                object.UserBetTimes = 0;
                object.NiuNiuBetTimes = 0;
                object.NiuNiuNumber = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinLose = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinLose = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.NiuNiuRet != null && message.hasOwnProperty("NiuNiuRet"))
                object.NiuNiuRet = message.NiuNiuRet;
            if (message.UserBetTimes != null && message.hasOwnProperty("UserBetTimes"))
                object.UserBetTimes = message.UserBetTimes;
            if (message.NiuNiuBetTimes != null && message.hasOwnProperty("NiuNiuBetTimes"))
                object.NiuNiuBetTimes = message.NiuNiuBetTimes;
            if (message.NiuNiuNumber != null && message.hasOwnProperty("NiuNiuNumber"))
                object.NiuNiuNumber = message.NiuNiuNumber;
            if (message.WinLose != null && message.hasOwnProperty("WinLose"))
                if (typeof message.WinLose === "number")
                    object.WinLose = options.longs === String ? String(message.WinLose) : message.WinLose;
                else
                    object.WinLose = options.longs === String ? $util.Long.prototype.toString.call(message.WinLose) : options.longs === Number ? new $util.LongBits(message.WinLose.low >>> 0, message.WinLose.high >>> 0).toNumber() : message.WinLose;
            if (message.CardGroup && message.CardGroup.length) {
                object.CardGroup = [];
                for (var j = 0; j < message.CardGroup.length; ++j)
                    object.CardGroup[j] = $root.tbnn.PokerCard.toObject(message.CardGroup[j], options);
            }
            return object;
        };

        /**
         * Converts this TBNN_UserBetRet to JSON.
         * @function toJSON
         * @memberof tbnn.TBNN_UserBetRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBNN_UserBetRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBNN_UserBetRet;
    })();

    tbnn.TBNN_GameRet = (function() {

        /**
         * Properties of a TBNN_GameRet.
         * @memberof tbnn
         * @interface ITBNN_GameRet
         * @property {Array.<tbnn.ITBNN_UserBetRet>|null} [UserRet] TBNN_GameRet UserRet
         */

        /**
         * Constructs a new TBNN_GameRet.
         * @memberof tbnn
         * @classdesc Represents a TBNN_GameRet.
         * @implements ITBNN_GameRet
         * @constructor
         * @param {tbnn.ITBNN_GameRet=} [properties] Properties to set
         */
        function TBNN_GameRet(properties) {
            this.UserRet = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBNN_GameRet UserRet.
         * @member {Array.<tbnn.ITBNN_UserBetRet>} UserRet
         * @memberof tbnn.TBNN_GameRet
         * @instance
         */
        TBNN_GameRet.prototype.UserRet = $util.emptyArray;

        /**
         * Creates a new TBNN_GameRet instance using the specified properties.
         * @function create
         * @memberof tbnn.TBNN_GameRet
         * @static
         * @param {tbnn.ITBNN_GameRet=} [properties] Properties to set
         * @returns {tbnn.TBNN_GameRet} TBNN_GameRet instance
         */
        TBNN_GameRet.create = function create(properties) {
            return new TBNN_GameRet(properties);
        };

        /**
         * Encodes the specified TBNN_GameRet message. Does not implicitly {@link tbnn.TBNN_GameRet.verify|verify} messages.
         * @function encode
         * @memberof tbnn.TBNN_GameRet
         * @static
         * @param {tbnn.ITBNN_GameRet} message TBNN_GameRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_GameRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserRet != null && message.UserRet.length)
                for (var i = 0; i < message.UserRet.length; ++i)
                    $root.tbnn.TBNN_UserBetRet.encode(message.UserRet[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBNN_GameRet message, length delimited. Does not implicitly {@link tbnn.TBNN_GameRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.TBNN_GameRet
         * @static
         * @param {tbnn.ITBNN_GameRet} message TBNN_GameRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_GameRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBNN_GameRet message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.TBNN_GameRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.TBNN_GameRet} TBNN_GameRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_GameRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.TBNN_GameRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserRet && message.UserRet.length))
                        message.UserRet = [];
                    message.UserRet.push($root.tbnn.TBNN_UserBetRet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBNN_GameRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.TBNN_GameRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.TBNN_GameRet} TBNN_GameRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_GameRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBNN_GameRet message.
         * @function verify
         * @memberof tbnn.TBNN_GameRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBNN_GameRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserRet != null && message.hasOwnProperty("UserRet")) {
                if (!Array.isArray(message.UserRet))
                    return "UserRet: array expected";
                for (var i = 0; i < message.UserRet.length; ++i) {
                    var error = $root.tbnn.TBNN_UserBetRet.verify(message.UserRet[i]);
                    if (error)
                        return "UserRet." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBNN_GameRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.TBNN_GameRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.TBNN_GameRet} TBNN_GameRet
         */
        TBNN_GameRet.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.TBNN_GameRet)
                return object;
            var message = new $root.tbnn.TBNN_GameRet();
            if (object.UserRet) {
                if (!Array.isArray(object.UserRet))
                    throw TypeError(".tbnn.TBNN_GameRet.UserRet: array expected");
                message.UserRet = [];
                for (var i = 0; i < object.UserRet.length; ++i) {
                    if (typeof object.UserRet[i] !== "object")
                        throw TypeError(".tbnn.TBNN_GameRet.UserRet: object expected");
                    message.UserRet[i] = $root.tbnn.TBNN_UserBetRet.fromObject(object.UserRet[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBNN_GameRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.TBNN_GameRet
         * @static
         * @param {tbnn.TBNN_GameRet} message TBNN_GameRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBNN_GameRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserRet = [];
            if (message.UserRet && message.UserRet.length) {
                object.UserRet = [];
                for (var j = 0; j < message.UserRet.length; ++j)
                    object.UserRet[j] = $root.tbnn.TBNN_UserBetRet.toObject(message.UserRet[j], options);
            }
            return object;
        };

        /**
         * Converts this TBNN_GameRet to JSON.
         * @function toJSON
         * @memberof tbnn.TBNN_GameRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBNN_GameRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBNN_GameRet;
    })();

    tbnn.TBNN_GameScene = (function() {

        /**
         * Properties of a TBNN_GameScene.
         * @memberof tbnn
         * @interface ITBNN_GameScene
         * @property {number|null} [GameStep] TBNN_GameScene GameStep
         * @property {tbnn.IUserPoker|null} [UserPoker] TBNN_GameScene UserPoker
         * @property {tbnn.ITBNN_NotifyGameBaseScore|null} [GameBaseScore] TBNN_GameScene GameBaseScore
         * @property {number|null} [ElapsedSeconds] TBNN_GameScene ElapsedSeconds
         * @property {tbnn.ITBNN_GameRet|null} [GameRet] TBNN_GameScene GameRet
         * @property {Array.<number>|null} [FinishedGroupUsers] TBNN_GameScene FinishedGroupUsers
         * @property {Array.<number>|null} [BetTimes] TBNN_GameScene BetTimes
         */

        /**
         * Constructs a new TBNN_GameScene.
         * @memberof tbnn
         * @classdesc Represents a TBNN_GameScene.
         * @implements ITBNN_GameScene
         * @constructor
         * @param {tbnn.ITBNN_GameScene=} [properties] Properties to set
         */
        function TBNN_GameScene(properties) {
            this.FinishedGroupUsers = [];
            this.BetTimes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBNN_GameScene GameStep.
         * @member {number} GameStep
         * @memberof tbnn.TBNN_GameScene
         * @instance
         */
        TBNN_GameScene.prototype.GameStep = 0;

        /**
         * TBNN_GameScene UserPoker.
         * @member {tbnn.IUserPoker|null|undefined} UserPoker
         * @memberof tbnn.TBNN_GameScene
         * @instance
         */
        TBNN_GameScene.prototype.UserPoker = null;

        /**
         * TBNN_GameScene GameBaseScore.
         * @member {tbnn.ITBNN_NotifyGameBaseScore|null|undefined} GameBaseScore
         * @memberof tbnn.TBNN_GameScene
         * @instance
         */
        TBNN_GameScene.prototype.GameBaseScore = null;

        /**
         * TBNN_GameScene ElapsedSeconds.
         * @member {number} ElapsedSeconds
         * @memberof tbnn.TBNN_GameScene
         * @instance
         */
        TBNN_GameScene.prototype.ElapsedSeconds = 0;

        /**
         * TBNN_GameScene GameRet.
         * @member {tbnn.ITBNN_GameRet|null|undefined} GameRet
         * @memberof tbnn.TBNN_GameScene
         * @instance
         */
        TBNN_GameScene.prototype.GameRet = null;

        /**
         * TBNN_GameScene FinishedGroupUsers.
         * @member {Array.<number>} FinishedGroupUsers
         * @memberof tbnn.TBNN_GameScene
         * @instance
         */
        TBNN_GameScene.prototype.FinishedGroupUsers = $util.emptyArray;

        /**
         * TBNN_GameScene BetTimes.
         * @member {Array.<number>} BetTimes
         * @memberof tbnn.TBNN_GameScene
         * @instance
         */
        TBNN_GameScene.prototype.BetTimes = $util.emptyArray;

        /**
         * Creates a new TBNN_GameScene instance using the specified properties.
         * @function create
         * @memberof tbnn.TBNN_GameScene
         * @static
         * @param {tbnn.ITBNN_GameScene=} [properties] Properties to set
         * @returns {tbnn.TBNN_GameScene} TBNN_GameScene instance
         */
        TBNN_GameScene.create = function create(properties) {
            return new TBNN_GameScene(properties);
        };

        /**
         * Encodes the specified TBNN_GameScene message. Does not implicitly {@link tbnn.TBNN_GameScene.verify|verify} messages.
         * @function encode
         * @memberof tbnn.TBNN_GameScene
         * @static
         * @param {tbnn.ITBNN_GameScene} message TBNN_GameScene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_GameScene.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameStep != null && message.hasOwnProperty("GameStep"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameStep);
            if (message.UserPoker != null && message.hasOwnProperty("UserPoker"))
                $root.tbnn.UserPoker.encode(message.UserPoker, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.GameBaseScore != null && message.hasOwnProperty("GameBaseScore"))
                $root.tbnn.TBNN_NotifyGameBaseScore.encode(message.GameBaseScore, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.ElapsedSeconds != null && message.hasOwnProperty("ElapsedSeconds"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ElapsedSeconds);
            if (message.GameRet != null && message.hasOwnProperty("GameRet"))
                $root.tbnn.TBNN_GameRet.encode(message.GameRet, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.FinishedGroupUsers != null && message.FinishedGroupUsers.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.FinishedGroupUsers.length; ++i)
                    writer.int32(message.FinishedGroupUsers[i]);
                writer.ldelim();
            }
            if (message.BetTimes != null && message.BetTimes.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (var i = 0; i < message.BetTimes.length; ++i)
                    writer.int32(message.BetTimes[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified TBNN_GameScene message, length delimited. Does not implicitly {@link tbnn.TBNN_GameScene.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.TBNN_GameScene
         * @static
         * @param {tbnn.ITBNN_GameScene} message TBNN_GameScene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_GameScene.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBNN_GameScene message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.TBNN_GameScene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.TBNN_GameScene} TBNN_GameScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_GameScene.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.TBNN_GameScene();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameStep = reader.int32();
                    break;
                case 2:
                    message.UserPoker = $root.tbnn.UserPoker.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.GameBaseScore = $root.tbnn.TBNN_NotifyGameBaseScore.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.ElapsedSeconds = reader.int32();
                    break;
                case 6:
                    message.GameRet = $root.tbnn.TBNN_GameRet.decode(reader, reader.uint32());
                    break;
                case 7:
                    if (!(message.FinishedGroupUsers && message.FinishedGroupUsers.length))
                        message.FinishedGroupUsers = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.FinishedGroupUsers.push(reader.int32());
                    } else
                        message.FinishedGroupUsers.push(reader.int32());
                    break;
                case 8:
                    if (!(message.BetTimes && message.BetTimes.length))
                        message.BetTimes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BetTimes.push(reader.int32());
                    } else
                        message.BetTimes.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBNN_GameScene message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.TBNN_GameScene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.TBNN_GameScene} TBNN_GameScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_GameScene.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBNN_GameScene message.
         * @function verify
         * @memberof tbnn.TBNN_GameScene
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBNN_GameScene.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameStep != null && message.hasOwnProperty("GameStep"))
                if (!$util.isInteger(message.GameStep))
                    return "GameStep: integer expected";
            if (message.UserPoker != null && message.hasOwnProperty("UserPoker")) {
                var error = $root.tbnn.UserPoker.verify(message.UserPoker);
                if (error)
                    return "UserPoker." + error;
            }
            if (message.GameBaseScore != null && message.hasOwnProperty("GameBaseScore")) {
                var error = $root.tbnn.TBNN_NotifyGameBaseScore.verify(message.GameBaseScore);
                if (error)
                    return "GameBaseScore." + error;
            }
            if (message.ElapsedSeconds != null && message.hasOwnProperty("ElapsedSeconds"))
                if (!$util.isInteger(message.ElapsedSeconds))
                    return "ElapsedSeconds: integer expected";
            if (message.GameRet != null && message.hasOwnProperty("GameRet")) {
                var error = $root.tbnn.TBNN_GameRet.verify(message.GameRet);
                if (error)
                    return "GameRet." + error;
            }
            if (message.FinishedGroupUsers != null && message.hasOwnProperty("FinishedGroupUsers")) {
                if (!Array.isArray(message.FinishedGroupUsers))
                    return "FinishedGroupUsers: array expected";
                for (var i = 0; i < message.FinishedGroupUsers.length; ++i)
                    if (!$util.isInteger(message.FinishedGroupUsers[i]))
                        return "FinishedGroupUsers: integer[] expected";
            }
            if (message.BetTimes != null && message.hasOwnProperty("BetTimes")) {
                if (!Array.isArray(message.BetTimes))
                    return "BetTimes: array expected";
                for (var i = 0; i < message.BetTimes.length; ++i)
                    if (!$util.isInteger(message.BetTimes[i]))
                        return "BetTimes: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a TBNN_GameScene message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.TBNN_GameScene
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.TBNN_GameScene} TBNN_GameScene
         */
        TBNN_GameScene.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.TBNN_GameScene)
                return object;
            var message = new $root.tbnn.TBNN_GameScene();
            if (object.GameStep != null)
                message.GameStep = object.GameStep | 0;
            if (object.UserPoker != null) {
                if (typeof object.UserPoker !== "object")
                    throw TypeError(".tbnn.TBNN_GameScene.UserPoker: object expected");
                message.UserPoker = $root.tbnn.UserPoker.fromObject(object.UserPoker);
            }
            if (object.GameBaseScore != null) {
                if (typeof object.GameBaseScore !== "object")
                    throw TypeError(".tbnn.TBNN_GameScene.GameBaseScore: object expected");
                message.GameBaseScore = $root.tbnn.TBNN_NotifyGameBaseScore.fromObject(object.GameBaseScore);
            }
            if (object.ElapsedSeconds != null)
                message.ElapsedSeconds = object.ElapsedSeconds | 0;
            if (object.GameRet != null) {
                if (typeof object.GameRet !== "object")
                    throw TypeError(".tbnn.TBNN_GameScene.GameRet: object expected");
                message.GameRet = $root.tbnn.TBNN_GameRet.fromObject(object.GameRet);
            }
            if (object.FinishedGroupUsers) {
                if (!Array.isArray(object.FinishedGroupUsers))
                    throw TypeError(".tbnn.TBNN_GameScene.FinishedGroupUsers: array expected");
                message.FinishedGroupUsers = [];
                for (var i = 0; i < object.FinishedGroupUsers.length; ++i)
                    message.FinishedGroupUsers[i] = object.FinishedGroupUsers[i] | 0;
            }
            if (object.BetTimes) {
                if (!Array.isArray(object.BetTimes))
                    throw TypeError(".tbnn.TBNN_GameScene.BetTimes: array expected");
                message.BetTimes = [];
                for (var i = 0; i < object.BetTimes.length; ++i)
                    message.BetTimes[i] = object.BetTimes[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a TBNN_GameScene message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.TBNN_GameScene
         * @static
         * @param {tbnn.TBNN_GameScene} message TBNN_GameScene
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBNN_GameScene.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.FinishedGroupUsers = [];
                object.BetTimes = [];
            }
            if (options.defaults) {
                object.GameStep = 0;
                object.UserPoker = null;
                object.GameBaseScore = null;
                object.ElapsedSeconds = 0;
                object.GameRet = null;
            }
            if (message.GameStep != null && message.hasOwnProperty("GameStep"))
                object.GameStep = message.GameStep;
            if (message.UserPoker != null && message.hasOwnProperty("UserPoker"))
                object.UserPoker = $root.tbnn.UserPoker.toObject(message.UserPoker, options);
            if (message.GameBaseScore != null && message.hasOwnProperty("GameBaseScore"))
                object.GameBaseScore = $root.tbnn.TBNN_NotifyGameBaseScore.toObject(message.GameBaseScore, options);
            if (message.ElapsedSeconds != null && message.hasOwnProperty("ElapsedSeconds"))
                object.ElapsedSeconds = message.ElapsedSeconds;
            if (message.GameRet != null && message.hasOwnProperty("GameRet"))
                object.GameRet = $root.tbnn.TBNN_GameRet.toObject(message.GameRet, options);
            if (message.FinishedGroupUsers && message.FinishedGroupUsers.length) {
                object.FinishedGroupUsers = [];
                for (var j = 0; j < message.FinishedGroupUsers.length; ++j)
                    object.FinishedGroupUsers[j] = message.FinishedGroupUsers[j];
            }
            if (message.BetTimes && message.BetTimes.length) {
                object.BetTimes = [];
                for (var j = 0; j < message.BetTimes.length; ++j)
                    object.BetTimes[j] = message.BetTimes[j];
            }
            return object;
        };

        /**
         * Converts this TBNN_GameScene to JSON.
         * @function toJSON
         * @memberof tbnn.TBNN_GameScene
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBNN_GameScene.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBNN_GameScene;
    })();

    tbnn.TBNN_UserBetInfo = (function() {

        /**
         * Properties of a TBNN_UserBetInfo.
         * @memberof tbnn
         * @interface ITBNN_UserBetInfo
         * @property {Array.<number>|null} [BetTimes] TBNN_UserBetInfo BetTimes
         */

        /**
         * Constructs a new TBNN_UserBetInfo.
         * @memberof tbnn
         * @classdesc Represents a TBNN_UserBetInfo.
         * @implements ITBNN_UserBetInfo
         * @constructor
         * @param {tbnn.ITBNN_UserBetInfo=} [properties] Properties to set
         */
        function TBNN_UserBetInfo(properties) {
            this.BetTimes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBNN_UserBetInfo BetTimes.
         * @member {Array.<number>} BetTimes
         * @memberof tbnn.TBNN_UserBetInfo
         * @instance
         */
        TBNN_UserBetInfo.prototype.BetTimes = $util.emptyArray;

        /**
         * Creates a new TBNN_UserBetInfo instance using the specified properties.
         * @function create
         * @memberof tbnn.TBNN_UserBetInfo
         * @static
         * @param {tbnn.ITBNN_UserBetInfo=} [properties] Properties to set
         * @returns {tbnn.TBNN_UserBetInfo} TBNN_UserBetInfo instance
         */
        TBNN_UserBetInfo.create = function create(properties) {
            return new TBNN_UserBetInfo(properties);
        };

        /**
         * Encodes the specified TBNN_UserBetInfo message. Does not implicitly {@link tbnn.TBNN_UserBetInfo.verify|verify} messages.
         * @function encode
         * @memberof tbnn.TBNN_UserBetInfo
         * @static
         * @param {tbnn.ITBNN_UserBetInfo} message TBNN_UserBetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_UserBetInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetTimes != null && message.BetTimes.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.BetTimes.length; ++i)
                    writer.int32(message.BetTimes[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified TBNN_UserBetInfo message, length delimited. Does not implicitly {@link tbnn.TBNN_UserBetInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.TBNN_UserBetInfo
         * @static
         * @param {tbnn.ITBNN_UserBetInfo} message TBNN_UserBetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNN_UserBetInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBNN_UserBetInfo message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.TBNN_UserBetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.TBNN_UserBetInfo} TBNN_UserBetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_UserBetInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.TBNN_UserBetInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.BetTimes && message.BetTimes.length))
                        message.BetTimes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BetTimes.push(reader.int32());
                    } else
                        message.BetTimes.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBNN_UserBetInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.TBNN_UserBetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.TBNN_UserBetInfo} TBNN_UserBetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNN_UserBetInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBNN_UserBetInfo message.
         * @function verify
         * @memberof tbnn.TBNN_UserBetInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBNN_UserBetInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BetTimes != null && message.hasOwnProperty("BetTimes")) {
                if (!Array.isArray(message.BetTimes))
                    return "BetTimes: array expected";
                for (var i = 0; i < message.BetTimes.length; ++i)
                    if (!$util.isInteger(message.BetTimes[i]))
                        return "BetTimes: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a TBNN_UserBetInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.TBNN_UserBetInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.TBNN_UserBetInfo} TBNN_UserBetInfo
         */
        TBNN_UserBetInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.TBNN_UserBetInfo)
                return object;
            var message = new $root.tbnn.TBNN_UserBetInfo();
            if (object.BetTimes) {
                if (!Array.isArray(object.BetTimes))
                    throw TypeError(".tbnn.TBNN_UserBetInfo.BetTimes: array expected");
                message.BetTimes = [];
                for (var i = 0; i < object.BetTimes.length; ++i)
                    message.BetTimes[i] = object.BetTimes[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a TBNN_UserBetInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.TBNN_UserBetInfo
         * @static
         * @param {tbnn.TBNN_UserBetInfo} message TBNN_UserBetInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBNN_UserBetInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BetTimes = [];
            if (message.BetTimes && message.BetTimes.length) {
                object.BetTimes = [];
                for (var j = 0; j < message.BetTimes.length; ++j)
                    object.BetTimes[j] = message.BetTimes[j];
            }
            return object;
        };

        /**
         * Converts this TBNN_UserBetInfo to JSON.
         * @function toJSON
         * @memberof tbnn.TBNN_UserBetInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBNN_UserBetInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBNN_UserBetInfo;
    })();

    tbnn.TestGameChat = (function() {

        /**
         * Properties of a TestGameChat.
         * @memberof tbnn
         * @interface ITestGameChat
         * @property {string|null} [Message] TestGameChat Message
         */

        /**
         * Constructs a new TestGameChat.
         * @memberof tbnn
         * @classdesc Represents a TestGameChat.
         * @implements ITestGameChat
         * @constructor
         * @param {tbnn.ITestGameChat=} [properties] Properties to set
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
         * @memberof tbnn.TestGameChat
         * @instance
         */
        TestGameChat.prototype.Message = "";

        /**
         * Creates a new TestGameChat instance using the specified properties.
         * @function create
         * @memberof tbnn.TestGameChat
         * @static
         * @param {tbnn.ITestGameChat=} [properties] Properties to set
         * @returns {tbnn.TestGameChat} TestGameChat instance
         */
        TestGameChat.create = function create(properties) {
            return new TestGameChat(properties);
        };

        /**
         * Encodes the specified TestGameChat message. Does not implicitly {@link tbnn.TestGameChat.verify|verify} messages.
         * @function encode
         * @memberof tbnn.TestGameChat
         * @static
         * @param {tbnn.ITestGameChat} message TestGameChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified TestGameChat message, length delimited. Does not implicitly {@link tbnn.TestGameChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.TestGameChat
         * @static
         * @param {tbnn.ITestGameChat} message TestGameChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameChat message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.TestGameChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.TestGameChat} TestGameChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.TestGameChat();
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
            return message;
        };

        /**
         * Decodes a TestGameChat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.TestGameChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.TestGameChat} TestGameChat
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
         * @memberof tbnn.TestGameChat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestGameChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates a TestGameChat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.TestGameChat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.TestGameChat} TestGameChat
         */
        TestGameChat.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.TestGameChat)
                return object;
            var message = new $root.tbnn.TestGameChat();
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a TestGameChat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.TestGameChat
         * @static
         * @param {tbnn.TestGameChat} message TestGameChat
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
         * @memberof tbnn.TestGameChat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameChat;
    })();

    tbnn.TestGameScore = (function() {

        /**
         * Properties of a TestGameScore.
         * @memberof tbnn
         * @interface ITestGameScore
         * @property {number|null} [Score] TestGameScore Score
         */

        /**
         * Constructs a new TestGameScore.
         * @memberof tbnn
         * @classdesc Represents a TestGameScore.
         * @implements ITestGameScore
         * @constructor
         * @param {tbnn.ITestGameScore=} [properties] Properties to set
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
         * @memberof tbnn.TestGameScore
         * @instance
         */
        TestGameScore.prototype.Score = 0;

        /**
         * Creates a new TestGameScore instance using the specified properties.
         * @function create
         * @memberof tbnn.TestGameScore
         * @static
         * @param {tbnn.ITestGameScore=} [properties] Properties to set
         * @returns {tbnn.TestGameScore} TestGameScore instance
         */
        TestGameScore.create = function create(properties) {
            return new TestGameScore(properties);
        };

        /**
         * Encodes the specified TestGameScore message. Does not implicitly {@link tbnn.TestGameScore.verify|verify} messages.
         * @function encode
         * @memberof tbnn.TestGameScore
         * @static
         * @param {tbnn.ITestGameScore} message TestGameScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Score != null && message.hasOwnProperty("Score"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Score);
            return writer;
        };

        /**
         * Encodes the specified TestGameScore message, length delimited. Does not implicitly {@link tbnn.TestGameScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.TestGameScore
         * @static
         * @param {tbnn.ITestGameScore} message TestGameScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameScore message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.TestGameScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.TestGameScore} TestGameScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.TestGameScore();
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
            return message;
        };

        /**
         * Decodes a TestGameScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.TestGameScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.TestGameScore} TestGameScore
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
         * @memberof tbnn.TestGameScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestGameScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (!$util.isInteger(message.Score))
                    return "Score: integer expected";
            return null;
        };

        /**
         * Creates a TestGameScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.TestGameScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.TestGameScore} TestGameScore
         */
        TestGameScore.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.TestGameScore)
                return object;
            var message = new $root.tbnn.TestGameScore();
            if (object.Score != null)
                message.Score = object.Score | 0;
            return message;
        };

        /**
         * Creates a plain object from a TestGameScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.TestGameScore
         * @static
         * @param {tbnn.TestGameScore} message TestGameScore
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
         * @memberof tbnn.TestGameScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameScore;
    })();

    tbnn.TestGameEnd = (function() {

        /**
         * Properties of a TestGameEnd.
         * @memberof tbnn
         * @interface ITestGameEnd
         */

        /**
         * Constructs a new TestGameEnd.
         * @memberof tbnn
         * @classdesc Represents a TestGameEnd.
         * @implements ITestGameEnd
         * @constructor
         * @param {tbnn.ITestGameEnd=} [properties] Properties to set
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
         * @memberof tbnn.TestGameEnd
         * @static
         * @param {tbnn.ITestGameEnd=} [properties] Properties to set
         * @returns {tbnn.TestGameEnd} TestGameEnd instance
         */
        TestGameEnd.create = function create(properties) {
            return new TestGameEnd(properties);
        };

        /**
         * Encodes the specified TestGameEnd message. Does not implicitly {@link tbnn.TestGameEnd.verify|verify} messages.
         * @function encode
         * @memberof tbnn.TestGameEnd
         * @static
         * @param {tbnn.ITestGameEnd} message TestGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified TestGameEnd message, length delimited. Does not implicitly {@link tbnn.TestGameEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.TestGameEnd
         * @static
         * @param {tbnn.ITestGameEnd} message TestGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameEnd message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.TestGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.TestGameEnd} TestGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.TestGameEnd();
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
         * @memberof tbnn.TestGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.TestGameEnd} TestGameEnd
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
         * @memberof tbnn.TestGameEnd
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
         * @memberof tbnn.TestGameEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.TestGameEnd} TestGameEnd
         */
        TestGameEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.TestGameEnd)
                return object;
            return new $root.tbnn.TestGameEnd();
        };

        /**
         * Creates a plain object from a TestGameEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.TestGameEnd
         * @static
         * @param {tbnn.TestGameEnd} message TestGameEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestGameEnd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this TestGameEnd to JSON.
         * @function toJSON
         * @memberof tbnn.TestGameEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameEnd;
    })();

    tbnn.UserEnter = (function() {

        /**
         * Properties of a UserEnter.
         * @memberof tbnn
         * @interface IUserEnter
         * @property {tbnn.IGameUser|null} [User] UserEnter User
         */

        /**
         * Constructs a new UserEnter.
         * @memberof tbnn
         * @classdesc Represents a UserEnter.
         * @implements IUserEnter
         * @constructor
         * @param {tbnn.IUserEnter=} [properties] Properties to set
         */
        function UserEnter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserEnter User.
         * @member {tbnn.IGameUser|null|undefined} User
         * @memberof tbnn.UserEnter
         * @instance
         */
        UserEnter.prototype.User = null;

        /**
         * Creates a new UserEnter instance using the specified properties.
         * @function create
         * @memberof tbnn.UserEnter
         * @static
         * @param {tbnn.IUserEnter=} [properties] Properties to set
         * @returns {tbnn.UserEnter} UserEnter instance
         */
        UserEnter.create = function create(properties) {
            return new UserEnter(properties);
        };

        /**
         * Encodes the specified UserEnter message. Does not implicitly {@link tbnn.UserEnter.verify|verify} messages.
         * @function encode
         * @memberof tbnn.UserEnter
         * @static
         * @param {tbnn.IUserEnter} message UserEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.User != null && message.hasOwnProperty("User"))
                $root.tbnn.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserEnter message, length delimited. Does not implicitly {@link tbnn.UserEnter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.UserEnter
         * @static
         * @param {tbnn.IUserEnter} message UserEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEnter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserEnter message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.UserEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.UserEnter} UserEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.UserEnter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.tbnn.GameUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserEnter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.UserEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.UserEnter} UserEnter
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
         * @memberof tbnn.UserEnter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserEnter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.User != null && message.hasOwnProperty("User")) {
                var error = $root.tbnn.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserEnter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.UserEnter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.UserEnter} UserEnter
         */
        UserEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.UserEnter)
                return object;
            var message = new $root.tbnn.UserEnter();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".tbnn.UserEnter.User: object expected");
                message.User = $root.tbnn.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserEnter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.UserEnter
         * @static
         * @param {tbnn.UserEnter} message UserEnter
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
                object.User = $root.tbnn.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserEnter to JSON.
         * @function toJSON
         * @memberof tbnn.UserEnter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserEnter;
    })();

    tbnn.UserLeave = (function() {

        /**
         * Properties of a UserLeave.
         * @memberof tbnn
         * @interface IUserLeave
         * @property {tbnn.IGameUser|null} [User] UserLeave User
         */

        /**
         * Constructs a new UserLeave.
         * @memberof tbnn
         * @classdesc Represents a UserLeave.
         * @implements IUserLeave
         * @constructor
         * @param {tbnn.IUserLeave=} [properties] Properties to set
         */
        function UserLeave(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLeave User.
         * @member {tbnn.IGameUser|null|undefined} User
         * @memberof tbnn.UserLeave
         * @instance
         */
        UserLeave.prototype.User = null;

        /**
         * Creates a new UserLeave instance using the specified properties.
         * @function create
         * @memberof tbnn.UserLeave
         * @static
         * @param {tbnn.IUserLeave=} [properties] Properties to set
         * @returns {tbnn.UserLeave} UserLeave instance
         */
        UserLeave.create = function create(properties) {
            return new UserLeave(properties);
        };

        /**
         * Encodes the specified UserLeave message. Does not implicitly {@link tbnn.UserLeave.verify|verify} messages.
         * @function encode
         * @memberof tbnn.UserLeave
         * @static
         * @param {tbnn.IUserLeave} message UserLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLeave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.User != null && message.hasOwnProperty("User"))
                $root.tbnn.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserLeave message, length delimited. Does not implicitly {@link tbnn.UserLeave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.UserLeave
         * @static
         * @param {tbnn.IUserLeave} message UserLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLeave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLeave message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.UserLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.UserLeave} UserLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLeave.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.UserLeave();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.tbnn.GameUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserLeave message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.UserLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.UserLeave} UserLeave
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
         * @memberof tbnn.UserLeave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLeave.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.User != null && message.hasOwnProperty("User")) {
                var error = $root.tbnn.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserLeave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.UserLeave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.UserLeave} UserLeave
         */
        UserLeave.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.UserLeave)
                return object;
            var message = new $root.tbnn.UserLeave();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".tbnn.UserLeave.User: object expected");
                message.User = $root.tbnn.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserLeave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.UserLeave
         * @static
         * @param {tbnn.UserLeave} message UserLeave
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
                object.User = $root.tbnn.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserLeave to JSON.
         * @function toJSON
         * @memberof tbnn.UserLeave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLeave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLeave;
    })();

    tbnn.UserStateChange = (function() {

        /**
         * Properties of a UserStateChange.
         * @memberof tbnn
         * @interface IUserStateChange
         * @property {tbnn.IGameUser|null} [User] UserStateChange User
         */

        /**
         * Constructs a new UserStateChange.
         * @memberof tbnn
         * @classdesc Represents a UserStateChange.
         * @implements IUserStateChange
         * @constructor
         * @param {tbnn.IUserStateChange=} [properties] Properties to set
         */
        function UserStateChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserStateChange User.
         * @member {tbnn.IGameUser|null|undefined} User
         * @memberof tbnn.UserStateChange
         * @instance
         */
        UserStateChange.prototype.User = null;

        /**
         * Creates a new UserStateChange instance using the specified properties.
         * @function create
         * @memberof tbnn.UserStateChange
         * @static
         * @param {tbnn.IUserStateChange=} [properties] Properties to set
         * @returns {tbnn.UserStateChange} UserStateChange instance
         */
        UserStateChange.create = function create(properties) {
            return new UserStateChange(properties);
        };

        /**
         * Encodes the specified UserStateChange message. Does not implicitly {@link tbnn.UserStateChange.verify|verify} messages.
         * @function encode
         * @memberof tbnn.UserStateChange
         * @static
         * @param {tbnn.IUserStateChange} message UserStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStateChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.User != null && message.hasOwnProperty("User"))
                $root.tbnn.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserStateChange message, length delimited. Does not implicitly {@link tbnn.UserStateChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.UserStateChange
         * @static
         * @param {tbnn.IUserStateChange} message UserStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStateChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserStateChange message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.UserStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.UserStateChange} UserStateChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStateChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.UserStateChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.tbnn.GameUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserStateChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.UserStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.UserStateChange} UserStateChange
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
         * @memberof tbnn.UserStateChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserStateChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.User != null && message.hasOwnProperty("User")) {
                var error = $root.tbnn.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserStateChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.UserStateChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.UserStateChange} UserStateChange
         */
        UserStateChange.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.UserStateChange)
                return object;
            var message = new $root.tbnn.UserStateChange();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".tbnn.UserStateChange.User: object expected");
                message.User = $root.tbnn.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserStateChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.UserStateChange
         * @static
         * @param {tbnn.UserStateChange} message UserStateChange
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
                object.User = $root.tbnn.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserStateChange to JSON.
         * @function toJSON
         * @memberof tbnn.UserStateChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserStateChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserStateChange;
    })();

    tbnn.GameUser = (function() {

        /**
         * Properties of a GameUser.
         * @memberof tbnn
         * @interface IGameUser
         * @property {number|null} [UserID] GameUser UserID
         * @property {string|null} [NickName] GameUser NickName
         * @property {number|null} [Sex] GameUser Sex
         * @property {number|null} [FaceID] GameUser FaceID
         * @property {number|Long|null} [Score] GameUser Score
         * @property {number|null} [WinCount] GameUser WinCount
         * @property {number|null} [LoseCount] GameUser LoseCount
         * @property {number|null} [DrawCount] GameUser DrawCount
         * @property {number|null} [StateValue] GameUser StateValue
         * @property {number|null} [TableNo] GameUser TableNo
         * @property {number|null} [SeatNo] GameUser SeatNo
         * @property {number|null} [LastWinLose] GameUser LastWinLose
         */

        /**
         * Constructs a new GameUser.
         * @memberof tbnn
         * @classdesc Represents a GameUser.
         * @implements IGameUser
         * @constructor
         * @param {tbnn.IGameUser=} [properties] Properties to set
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
         * @memberof tbnn.GameUser
         * @instance
         */
        GameUser.prototype.UserID = 0;

        /**
         * GameUser NickName.
         * @member {string} NickName
         * @memberof tbnn.GameUser
         * @instance
         */
        GameUser.prototype.NickName = "";

        /**
         * GameUser Sex.
         * @member {number} Sex
         * @memberof tbnn.GameUser
         * @instance
         */
        GameUser.prototype.Sex = 0;

        /**
         * GameUser FaceID.
         * @member {number} FaceID
         * @memberof tbnn.GameUser
         * @instance
         */
        GameUser.prototype.FaceID = 0;

        /**
         * GameUser Score.
         * @member {number|Long} Score
         * @memberof tbnn.GameUser
         * @instance
         */
        GameUser.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameUser WinCount.
         * @member {number} WinCount
         * @memberof tbnn.GameUser
         * @instance
         */
        GameUser.prototype.WinCount = 0;

        /**
         * GameUser LoseCount.
         * @member {number} LoseCount
         * @memberof tbnn.GameUser
         * @instance
         */
        GameUser.prototype.LoseCount = 0;

        /**
         * GameUser DrawCount.
         * @member {number} DrawCount
         * @memberof tbnn.GameUser
         * @instance
         */
        GameUser.prototype.DrawCount = 0;

        /**
         * GameUser StateValue.
         * @member {number} StateValue
         * @memberof tbnn.GameUser
         * @instance
         */
        GameUser.prototype.StateValue = 0;

        /**
         * GameUser TableNo.
         * @member {number} TableNo
         * @memberof tbnn.GameUser
         * @instance
         */
        GameUser.prototype.TableNo = 0;

        /**
         * GameUser SeatNo.
         * @member {number} SeatNo
         * @memberof tbnn.GameUser
         * @instance
         */
        GameUser.prototype.SeatNo = 0;

        /**
         * GameUser LastWinLose.
         * @member {number} LastWinLose
         * @memberof tbnn.GameUser
         * @instance
         */
        GameUser.prototype.LastWinLose = 0;

        /**
         * Creates a new GameUser instance using the specified properties.
         * @function create
         * @memberof tbnn.GameUser
         * @static
         * @param {tbnn.IGameUser=} [properties] Properties to set
         * @returns {tbnn.GameUser} GameUser instance
         */
        GameUser.create = function create(properties) {
            return new GameUser(properties);
        };

        /**
         * Encodes the specified GameUser message. Does not implicitly {@link tbnn.GameUser.verify|verify} messages.
         * @function encode
         * @memberof tbnn.GameUser
         * @static
         * @param {tbnn.IGameUser} message GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.NickName);
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Sex);
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.FaceID);
            if (message.Score != null && message.hasOwnProperty("Score"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.Score);
            if (message.WinCount != null && message.hasOwnProperty("WinCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.WinCount);
            if (message.LoseCount != null && message.hasOwnProperty("LoseCount"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.LoseCount);
            if (message.DrawCount != null && message.hasOwnProperty("DrawCount"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.DrawCount);
            if (message.StateValue != null && message.hasOwnProperty("StateValue"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.StateValue);
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.TableNo);
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.SeatNo);
            if (message.LastWinLose != null && message.hasOwnProperty("LastWinLose"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.LastWinLose);
            return writer;
        };

        /**
         * Encodes the specified GameUser message, length delimited. Does not implicitly {@link tbnn.GameUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.GameUser
         * @static
         * @param {tbnn.IGameUser} message GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameUser message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.GameUser} GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.GameUser();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.GameUser} GameUser
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
         * @memberof tbnn.GameUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                if (!$util.isString(message.NickName))
                    return "NickName: string expected";
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                if (!$util.isInteger(message.Sex))
                    return "Sex: integer expected";
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                if (!$util.isInteger(message.FaceID))
                    return "FaceID: integer expected";
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (!$util.isInteger(message.Score) && !(message.Score && $util.isInteger(message.Score.low) && $util.isInteger(message.Score.high)))
                    return "Score: integer|Long expected";
            if (message.WinCount != null && message.hasOwnProperty("WinCount"))
                if (!$util.isInteger(message.WinCount))
                    return "WinCount: integer expected";
            if (message.LoseCount != null && message.hasOwnProperty("LoseCount"))
                if (!$util.isInteger(message.LoseCount))
                    return "LoseCount: integer expected";
            if (message.DrawCount != null && message.hasOwnProperty("DrawCount"))
                if (!$util.isInteger(message.DrawCount))
                    return "DrawCount: integer expected";
            if (message.StateValue != null && message.hasOwnProperty("StateValue"))
                if (!$util.isInteger(message.StateValue))
                    return "StateValue: integer expected";
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                if (!$util.isInteger(message.TableNo))
                    return "TableNo: integer expected";
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
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
         * @memberof tbnn.GameUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.GameUser} GameUser
         */
        GameUser.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.GameUser)
                return object;
            var message = new $root.tbnn.GameUser();
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
            return message;
        };

        /**
         * Creates a plain object from a GameUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.GameUser
         * @static
         * @param {tbnn.GameUser} message GameUser
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
            return object;
        };

        /**
         * Converts this GameUser to JSON.
         * @function toJSON
         * @memberof tbnn.GameUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameUser;
    })();

    tbnn.GamePoker = (function() {

        /**
         * Properties of a GamePoker.
         * @memberof tbnn
         * @interface IGamePoker
         * @property {Array.<tbnn.IUserPoker>|null} [Poker] GamePoker Poker
         */

        /**
         * Constructs a new GamePoker.
         * @memberof tbnn
         * @classdesc Represents a GamePoker.
         * @implements IGamePoker
         * @constructor
         * @param {tbnn.IGamePoker=} [properties] Properties to set
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
         * @member {Array.<tbnn.IUserPoker>} Poker
         * @memberof tbnn.GamePoker
         * @instance
         */
        GamePoker.prototype.Poker = $util.emptyArray;

        /**
         * Creates a new GamePoker instance using the specified properties.
         * @function create
         * @memberof tbnn.GamePoker
         * @static
         * @param {tbnn.IGamePoker=} [properties] Properties to set
         * @returns {tbnn.GamePoker} GamePoker instance
         */
        GamePoker.create = function create(properties) {
            return new GamePoker(properties);
        };

        /**
         * Encodes the specified GamePoker message. Does not implicitly {@link tbnn.GamePoker.verify|verify} messages.
         * @function encode
         * @memberof tbnn.GamePoker
         * @static
         * @param {tbnn.IGamePoker} message GamePoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePoker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Poker != null && message.Poker.length)
                for (var i = 0; i < message.Poker.length; ++i)
                    $root.tbnn.UserPoker.encode(message.Poker[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GamePoker message, length delimited. Does not implicitly {@link tbnn.GamePoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.GamePoker
         * @static
         * @param {tbnn.IGamePoker} message GamePoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GamePoker message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.GamePoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.GamePoker} GamePoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.GamePoker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Poker && message.Poker.length))
                        message.Poker = [];
                    message.Poker.push($root.tbnn.UserPoker.decode(reader, reader.uint32()));
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
         * @memberof tbnn.GamePoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.GamePoker} GamePoker
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
         * @memberof tbnn.GamePoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GamePoker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Poker != null && message.hasOwnProperty("Poker")) {
                if (!Array.isArray(message.Poker))
                    return "Poker: array expected";
                for (var i = 0; i < message.Poker.length; ++i) {
                    var error = $root.tbnn.UserPoker.verify(message.Poker[i]);
                    if (error)
                        return "Poker." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GamePoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.GamePoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.GamePoker} GamePoker
         */
        GamePoker.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.GamePoker)
                return object;
            var message = new $root.tbnn.GamePoker();
            if (object.Poker) {
                if (!Array.isArray(object.Poker))
                    throw TypeError(".tbnn.GamePoker.Poker: array expected");
                message.Poker = [];
                for (var i = 0; i < object.Poker.length; ++i) {
                    if (typeof object.Poker[i] !== "object")
                        throw TypeError(".tbnn.GamePoker.Poker: object expected");
                    message.Poker[i] = $root.tbnn.UserPoker.fromObject(object.Poker[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GamePoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.GamePoker
         * @static
         * @param {tbnn.GamePoker} message GamePoker
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
                    object.Poker[j] = $root.tbnn.UserPoker.toObject(message.Poker[j], options);
            }
            return object;
        };

        /**
         * Converts this GamePoker to JSON.
         * @function toJSON
         * @memberof tbnn.GamePoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GamePoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GamePoker;
    })();

    tbnn.UserPoker = (function() {

        /**
         * Properties of a UserPoker.
         * @memberof tbnn
         * @interface IUserPoker
         * @property {number|null} [UserID] UserPoker UserID
         * @property {number|null} [SeatNo] UserPoker SeatNo
         * @property {Array.<tbnn.IPokerCard>|null} [Cards] UserPoker Cards
         */

        /**
         * Constructs a new UserPoker.
         * @memberof tbnn
         * @classdesc Represents a UserPoker.
         * @implements IUserPoker
         * @constructor
         * @param {tbnn.IUserPoker=} [properties] Properties to set
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
         * @memberof tbnn.UserPoker
         * @instance
         */
        UserPoker.prototype.UserID = 0;

        /**
         * UserPoker SeatNo.
         * @member {number} SeatNo
         * @memberof tbnn.UserPoker
         * @instance
         */
        UserPoker.prototype.SeatNo = 0;

        /**
         * UserPoker Cards.
         * @member {Array.<tbnn.IPokerCard>} Cards
         * @memberof tbnn.UserPoker
         * @instance
         */
        UserPoker.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new UserPoker instance using the specified properties.
         * @function create
         * @memberof tbnn.UserPoker
         * @static
         * @param {tbnn.IUserPoker=} [properties] Properties to set
         * @returns {tbnn.UserPoker} UserPoker instance
         */
        UserPoker.create = function create(properties) {
            return new UserPoker(properties);
        };

        /**
         * Encodes the specified UserPoker message. Does not implicitly {@link tbnn.UserPoker.verify|verify} messages.
         * @function encode
         * @memberof tbnn.UserPoker
         * @static
         * @param {tbnn.IUserPoker} message UserPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPoker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SeatNo);
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.tbnn.PokerCard.encode(message.Cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserPoker message, length delimited. Does not implicitly {@link tbnn.UserPoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.UserPoker
         * @static
         * @param {tbnn.IUserPoker} message UserPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserPoker message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.UserPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.UserPoker} UserPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.UserPoker();
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
                    message.Cards.push($root.tbnn.PokerCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserPoker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.UserPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.UserPoker} UserPoker
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
         * @memberof tbnn.UserPoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPoker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                if (!$util.isInteger(message.SeatNo))
                    return "SeatNo: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.tbnn.PokerCard.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserPoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.UserPoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.UserPoker} UserPoker
         */
        UserPoker.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.UserPoker)
                return object;
            var message = new $root.tbnn.UserPoker();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".tbnn.UserPoker.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".tbnn.UserPoker.Cards: object expected");
                    message.Cards[i] = $root.tbnn.PokerCard.fromObject(object.Cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserPoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.UserPoker
         * @static
         * @param {tbnn.UserPoker} message UserPoker
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
                    object.Cards[j] = $root.tbnn.PokerCard.toObject(message.Cards[j], options);
            }
            return object;
        };

        /**
         * Converts this UserPoker to JSON.
         * @function toJSON
         * @memberof tbnn.UserPoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserPoker;
    })();

    tbnn.PokerCard = (function() {

        /**
         * Properties of a PokerCard.
         * @memberof tbnn
         * @interface IPokerCard
         * @property {number|null} [Color] PokerCard Color
         * @property {number|null} [CardNumber] PokerCard CardNumber
         */

        /**
         * Constructs a new PokerCard.
         * @memberof tbnn
         * @classdesc Represents a PokerCard.
         * @implements IPokerCard
         * @constructor
         * @param {tbnn.IPokerCard=} [properties] Properties to set
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
         * @memberof tbnn.PokerCard
         * @instance
         */
        PokerCard.prototype.Color = 0;

        /**
         * PokerCard CardNumber.
         * @member {number} CardNumber
         * @memberof tbnn.PokerCard
         * @instance
         */
        PokerCard.prototype.CardNumber = 0;

        /**
         * Creates a new PokerCard instance using the specified properties.
         * @function create
         * @memberof tbnn.PokerCard
         * @static
         * @param {tbnn.IPokerCard=} [properties] Properties to set
         * @returns {tbnn.PokerCard} PokerCard instance
         */
        PokerCard.create = function create(properties) {
            return new PokerCard(properties);
        };

        /**
         * Encodes the specified PokerCard message. Does not implicitly {@link tbnn.PokerCard.verify|verify} messages.
         * @function encode
         * @memberof tbnn.PokerCard
         * @static
         * @param {tbnn.IPokerCard} message PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokerCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Color != null && message.hasOwnProperty("Color"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Color);
            if (message.CardNumber != null && message.hasOwnProperty("CardNumber"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CardNumber);
            return writer;
        };

        /**
         * Encodes the specified PokerCard message, length delimited. Does not implicitly {@link tbnn.PokerCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.PokerCard
         * @static
         * @param {tbnn.IPokerCard} message PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokerCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PokerCard message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.PokerCard} PokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokerCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.PokerCard();
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
            return message;
        };

        /**
         * Decodes a PokerCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.PokerCard} PokerCard
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
         * @memberof tbnn.PokerCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PokerCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Color != null && message.hasOwnProperty("Color"))
                if (!$util.isInteger(message.Color))
                    return "Color: integer expected";
            if (message.CardNumber != null && message.hasOwnProperty("CardNumber"))
                if (!$util.isInteger(message.CardNumber))
                    return "CardNumber: integer expected";
            return null;
        };

        /**
         * Creates a PokerCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.PokerCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.PokerCard} PokerCard
         */
        PokerCard.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.PokerCard)
                return object;
            var message = new $root.tbnn.PokerCard();
            if (object.Color != null)
                message.Color = object.Color | 0;
            if (object.CardNumber != null)
                message.CardNumber = object.CardNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from a PokerCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.PokerCard
         * @static
         * @param {tbnn.PokerCard} message PokerCard
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
         * @memberof tbnn.PokerCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PokerCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PokerCard;
    })();

    tbnn.UserActionCommited = (function() {

        /**
         * Properties of a UserActionCommited.
         * @memberof tbnn
         * @interface IUserActionCommited
         * @property {string|null} [ActionName] UserActionCommited ActionName
         */

        /**
         * Constructs a new UserActionCommited.
         * @memberof tbnn
         * @classdesc Represents a UserActionCommited.
         * @implements IUserActionCommited
         * @constructor
         * @param {tbnn.IUserActionCommited=} [properties] Properties to set
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
         * @memberof tbnn.UserActionCommited
         * @instance
         */
        UserActionCommited.prototype.ActionName = "";

        /**
         * Creates a new UserActionCommited instance using the specified properties.
         * @function create
         * @memberof tbnn.UserActionCommited
         * @static
         * @param {tbnn.IUserActionCommited=} [properties] Properties to set
         * @returns {tbnn.UserActionCommited} UserActionCommited instance
         */
        UserActionCommited.create = function create(properties) {
            return new UserActionCommited(properties);
        };

        /**
         * Encodes the specified UserActionCommited message. Does not implicitly {@link tbnn.UserActionCommited.verify|verify} messages.
         * @function encode
         * @memberof tbnn.UserActionCommited
         * @static
         * @param {tbnn.IUserActionCommited} message UserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserActionCommited.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified UserActionCommited message, length delimited. Does not implicitly {@link tbnn.UserActionCommited.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.UserActionCommited
         * @static
         * @param {tbnn.IUserActionCommited} message UserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserActionCommited.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserActionCommited message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.UserActionCommited} UserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserActionCommited.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.UserActionCommited();
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
            return message;
        };

        /**
         * Decodes a UserActionCommited message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.UserActionCommited} UserActionCommited
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
         * @memberof tbnn.UserActionCommited
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserActionCommited.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                if (!$util.isString(message.ActionName))
                    return "ActionName: string expected";
            return null;
        };

        /**
         * Creates a UserActionCommited message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.UserActionCommited
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.UserActionCommited} UserActionCommited
         */
        UserActionCommited.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.UserActionCommited)
                return object;
            var message = new $root.tbnn.UserActionCommited();
            if (object.ActionName != null)
                message.ActionName = String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from a UserActionCommited message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.UserActionCommited
         * @static
         * @param {tbnn.UserActionCommited} message UserActionCommited
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
         * @memberof tbnn.UserActionCommited
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserActionCommited.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserActionCommited;
    })();

    tbnn.AllUserActionCommited = (function() {

        /**
         * Properties of an AllUserActionCommited.
         * @memberof tbnn
         * @interface IAllUserActionCommited
         * @property {string|null} [ActionName] AllUserActionCommited ActionName
         */

        /**
         * Constructs a new AllUserActionCommited.
         * @memberof tbnn
         * @classdesc Represents an AllUserActionCommited.
         * @implements IAllUserActionCommited
         * @constructor
         * @param {tbnn.IAllUserActionCommited=} [properties] Properties to set
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
         * @memberof tbnn.AllUserActionCommited
         * @instance
         */
        AllUserActionCommited.prototype.ActionName = "";

        /**
         * Creates a new AllUserActionCommited instance using the specified properties.
         * @function create
         * @memberof tbnn.AllUserActionCommited
         * @static
         * @param {tbnn.IAllUserActionCommited=} [properties] Properties to set
         * @returns {tbnn.AllUserActionCommited} AllUserActionCommited instance
         */
        AllUserActionCommited.create = function create(properties) {
            return new AllUserActionCommited(properties);
        };

        /**
         * Encodes the specified AllUserActionCommited message. Does not implicitly {@link tbnn.AllUserActionCommited.verify|verify} messages.
         * @function encode
         * @memberof tbnn.AllUserActionCommited
         * @static
         * @param {tbnn.IAllUserActionCommited} message AllUserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllUserActionCommited.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified AllUserActionCommited message, length delimited. Does not implicitly {@link tbnn.AllUserActionCommited.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.AllUserActionCommited
         * @static
         * @param {tbnn.IAllUserActionCommited} message AllUserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllUserActionCommited.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllUserActionCommited message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.AllUserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.AllUserActionCommited} AllUserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllUserActionCommited.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.AllUserActionCommited();
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
            return message;
        };

        /**
         * Decodes an AllUserActionCommited message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.AllUserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.AllUserActionCommited} AllUserActionCommited
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
         * @memberof tbnn.AllUserActionCommited
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AllUserActionCommited.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                if (!$util.isString(message.ActionName))
                    return "ActionName: string expected";
            return null;
        };

        /**
         * Creates an AllUserActionCommited message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.AllUserActionCommited
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.AllUserActionCommited} AllUserActionCommited
         */
        AllUserActionCommited.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.AllUserActionCommited)
                return object;
            var message = new $root.tbnn.AllUserActionCommited();
            if (object.ActionName != null)
                message.ActionName = String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from an AllUserActionCommited message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.AllUserActionCommited
         * @static
         * @param {tbnn.AllUserActionCommited} message AllUserActionCommited
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
         * @memberof tbnn.AllUserActionCommited
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllUserActionCommited.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AllUserActionCommited;
    })();

    tbnn.LookOnUserNotify = (function() {

        /**
         * Properties of a LookOnUserNotify.
         * @memberof tbnn
         * @interface ILookOnUserNotify
         * @property {Array.<number>|null} [UserID] LookOnUserNotify UserID
         */

        /**
         * Constructs a new LookOnUserNotify.
         * @memberof tbnn
         * @classdesc Represents a LookOnUserNotify.
         * @implements ILookOnUserNotify
         * @constructor
         * @param {tbnn.ILookOnUserNotify=} [properties] Properties to set
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
         * @memberof tbnn.LookOnUserNotify
         * @instance
         */
        LookOnUserNotify.prototype.UserID = $util.emptyArray;

        /**
         * Creates a new LookOnUserNotify instance using the specified properties.
         * @function create
         * @memberof tbnn.LookOnUserNotify
         * @static
         * @param {tbnn.ILookOnUserNotify=} [properties] Properties to set
         * @returns {tbnn.LookOnUserNotify} LookOnUserNotify instance
         */
        LookOnUserNotify.create = function create(properties) {
            return new LookOnUserNotify(properties);
        };

        /**
         * Encodes the specified LookOnUserNotify message. Does not implicitly {@link tbnn.LookOnUserNotify.verify|verify} messages.
         * @function encode
         * @memberof tbnn.LookOnUserNotify
         * @static
         * @param {tbnn.ILookOnUserNotify} message LookOnUserNotify message or plain object to encode
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
         * Encodes the specified LookOnUserNotify message, length delimited. Does not implicitly {@link tbnn.LookOnUserNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.LookOnUserNotify
         * @static
         * @param {tbnn.ILookOnUserNotify} message LookOnUserNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LookOnUserNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LookOnUserNotify message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.LookOnUserNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.LookOnUserNotify} LookOnUserNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LookOnUserNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.LookOnUserNotify();
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
         * @memberof tbnn.LookOnUserNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.LookOnUserNotify} LookOnUserNotify
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
         * @memberof tbnn.LookOnUserNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LookOnUserNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID")) {
                if (!Array.isArray(message.UserID))
                    return "UserID: array expected";
                for (var i = 0; i < message.UserID.length; ++i)
                    if (!$util.isInteger(message.UserID[i]))
                        return "UserID: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a LookOnUserNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.LookOnUserNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.LookOnUserNotify} LookOnUserNotify
         */
        LookOnUserNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.LookOnUserNotify)
                return object;
            var message = new $root.tbnn.LookOnUserNotify();
            if (object.UserID) {
                if (!Array.isArray(object.UserID))
                    throw TypeError(".tbnn.LookOnUserNotify.UserID: array expected");
                message.UserID = [];
                for (var i = 0; i < object.UserID.length; ++i)
                    message.UserID[i] = object.UserID[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a LookOnUserNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.LookOnUserNotify
         * @static
         * @param {tbnn.LookOnUserNotify} message LookOnUserNotify
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
         * @memberof tbnn.LookOnUserNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LookOnUserNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LookOnUserNotify;
    })();

    tbnn.UserLuckScore = (function() {

        /**
         * Properties of a UserLuckScore.
         * @memberof tbnn
         * @interface IUserLuckScore
         * @property {number|null} [UserID] UserLuckScore UserID
         * @property {number|Long|null} [Score] UserLuckScore Score
         */

        /**
         * Constructs a new UserLuckScore.
         * @memberof tbnn
         * @classdesc Represents a UserLuckScore.
         * @implements IUserLuckScore
         * @constructor
         * @param {tbnn.IUserLuckScore=} [properties] Properties to set
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
         * @memberof tbnn.UserLuckScore
         * @instance
         */
        UserLuckScore.prototype.UserID = 0;

        /**
         * UserLuckScore Score.
         * @member {number|Long} Score
         * @memberof tbnn.UserLuckScore
         * @instance
         */
        UserLuckScore.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserLuckScore instance using the specified properties.
         * @function create
         * @memberof tbnn.UserLuckScore
         * @static
         * @param {tbnn.IUserLuckScore=} [properties] Properties to set
         * @returns {tbnn.UserLuckScore} UserLuckScore instance
         */
        UserLuckScore.create = function create(properties) {
            return new UserLuckScore(properties);
        };

        /**
         * Encodes the specified UserLuckScore message. Does not implicitly {@link tbnn.UserLuckScore.verify|verify} messages.
         * @function encode
         * @memberof tbnn.UserLuckScore
         * @static
         * @param {tbnn.IUserLuckScore} message UserLuckScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.Score != null && message.hasOwnProperty("Score"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Score);
            return writer;
        };

        /**
         * Encodes the specified UserLuckScore message, length delimited. Does not implicitly {@link tbnn.UserLuckScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.UserLuckScore
         * @static
         * @param {tbnn.IUserLuckScore} message UserLuckScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLuckScore message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.UserLuckScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.UserLuckScore} UserLuckScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.UserLuckScore();
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
            return message;
        };

        /**
         * Decodes a UserLuckScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.UserLuckScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.UserLuckScore} UserLuckScore
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
         * @memberof tbnn.UserLuckScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLuckScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (!$util.isInteger(message.Score) && !(message.Score && $util.isInteger(message.Score.low) && $util.isInteger(message.Score.high)))
                    return "Score: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserLuckScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.UserLuckScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.UserLuckScore} UserLuckScore
         */
        UserLuckScore.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.UserLuckScore)
                return object;
            var message = new $root.tbnn.UserLuckScore();
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
         * @memberof tbnn.UserLuckScore
         * @static
         * @param {tbnn.UserLuckScore} message UserLuckScore
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
                    object.Score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Score = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (typeof message.Score === "number")
                    object.Score = options.longs === String ? String(message.Score) : message.Score;
                else
                    object.Score = options.longs === String ? $util.Long.prototype.toString.call(message.Score) : options.longs === Number ? new $util.LongBits(message.Score.low >>> 0, message.Score.high >>> 0).toNumber() : message.Score;
            return object;
        };

        /**
         * Converts this UserLuckScore to JSON.
         * @function toJSON
         * @memberof tbnn.UserLuckScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLuckScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLuckScore;
    })();

    tbnn.UserLuckScoreRet = (function() {

        /**
         * Properties of a UserLuckScoreRet.
         * @memberof tbnn
         * @interface IUserLuckScoreRet
         * @property {number|null} [UserID] UserLuckScoreRet UserID
         * @property {string|null} [Value] UserLuckScoreRet Value
         */

        /**
         * Constructs a new UserLuckScoreRet.
         * @memberof tbnn
         * @classdesc Represents a UserLuckScoreRet.
         * @implements IUserLuckScoreRet
         * @constructor
         * @param {tbnn.IUserLuckScoreRet=} [properties] Properties to set
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
         * @memberof tbnn.UserLuckScoreRet
         * @instance
         */
        UserLuckScoreRet.prototype.UserID = 0;

        /**
         * UserLuckScoreRet Value.
         * @member {string} Value
         * @memberof tbnn.UserLuckScoreRet
         * @instance
         */
        UserLuckScoreRet.prototype.Value = "";

        /**
         * Creates a new UserLuckScoreRet instance using the specified properties.
         * @function create
         * @memberof tbnn.UserLuckScoreRet
         * @static
         * @param {tbnn.IUserLuckScoreRet=} [properties] Properties to set
         * @returns {tbnn.UserLuckScoreRet} UserLuckScoreRet instance
         */
        UserLuckScoreRet.create = function create(properties) {
            return new UserLuckScoreRet(properties);
        };

        /**
         * Encodes the specified UserLuckScoreRet message. Does not implicitly {@link tbnn.UserLuckScoreRet.verify|verify} messages.
         * @function encode
         * @memberof tbnn.UserLuckScoreRet
         * @static
         * @param {tbnn.IUserLuckScoreRet} message UserLuckScoreRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScoreRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.Value != null && message.hasOwnProperty("Value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Value);
            return writer;
        };

        /**
         * Encodes the specified UserLuckScoreRet message, length delimited. Does not implicitly {@link tbnn.UserLuckScoreRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.UserLuckScoreRet
         * @static
         * @param {tbnn.IUserLuckScoreRet} message UserLuckScoreRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScoreRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLuckScoreRet message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.UserLuckScoreRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.UserLuckScoreRet} UserLuckScoreRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScoreRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.UserLuckScoreRet();
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
            return message;
        };

        /**
         * Decodes a UserLuckScoreRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.UserLuckScoreRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.UserLuckScoreRet} UserLuckScoreRet
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
         * @memberof tbnn.UserLuckScoreRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLuckScoreRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.Value != null && message.hasOwnProperty("Value"))
                if (!$util.isString(message.Value))
                    return "Value: string expected";
            return null;
        };

        /**
         * Creates a UserLuckScoreRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.UserLuckScoreRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.UserLuckScoreRet} UserLuckScoreRet
         */
        UserLuckScoreRet.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.UserLuckScoreRet)
                return object;
            var message = new $root.tbnn.UserLuckScoreRet();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Value != null)
                message.Value = String(object.Value);
            return message;
        };

        /**
         * Creates a plain object from a UserLuckScoreRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.UserLuckScoreRet
         * @static
         * @param {tbnn.UserLuckScoreRet} message UserLuckScoreRet
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
         * @memberof tbnn.UserLuckScoreRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLuckScoreRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLuckScoreRet;
    })();

    tbnn.GameBeginCountDown = (function() {

        /**
         * Properties of a GameBeginCountDown.
         * @memberof tbnn
         * @interface IGameBeginCountDown
         * @property {number|null} [Time] GameBeginCountDown Time
         */

        /**
         * Constructs a new GameBeginCountDown.
         * @memberof tbnn
         * @classdesc Represents a GameBeginCountDown.
         * @implements IGameBeginCountDown
         * @constructor
         * @param {tbnn.IGameBeginCountDown=} [properties] Properties to set
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
         * @memberof tbnn.GameBeginCountDown
         * @instance
         */
        GameBeginCountDown.prototype.Time = 0;

        /**
         * Creates a new GameBeginCountDown instance using the specified properties.
         * @function create
         * @memberof tbnn.GameBeginCountDown
         * @static
         * @param {tbnn.IGameBeginCountDown=} [properties] Properties to set
         * @returns {tbnn.GameBeginCountDown} GameBeginCountDown instance
         */
        GameBeginCountDown.create = function create(properties) {
            return new GameBeginCountDown(properties);
        };

        /**
         * Encodes the specified GameBeginCountDown message. Does not implicitly {@link tbnn.GameBeginCountDown.verify|verify} messages.
         * @function encode
         * @memberof tbnn.GameBeginCountDown
         * @static
         * @param {tbnn.IGameBeginCountDown} message GameBeginCountDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBeginCountDown.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Time != null && message.hasOwnProperty("Time"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Time);
            return writer;
        };

        /**
         * Encodes the specified GameBeginCountDown message, length delimited. Does not implicitly {@link tbnn.GameBeginCountDown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.GameBeginCountDown
         * @static
         * @param {tbnn.IGameBeginCountDown} message GameBeginCountDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBeginCountDown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameBeginCountDown message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.GameBeginCountDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.GameBeginCountDown} GameBeginCountDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBeginCountDown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.GameBeginCountDown();
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
            return message;
        };

        /**
         * Decodes a GameBeginCountDown message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.GameBeginCountDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.GameBeginCountDown} GameBeginCountDown
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
         * @memberof tbnn.GameBeginCountDown
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameBeginCountDown.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Time != null && message.hasOwnProperty("Time"))
                if (!$util.isInteger(message.Time))
                    return "Time: integer expected";
            return null;
        };

        /**
         * Creates a GameBeginCountDown message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.GameBeginCountDown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.GameBeginCountDown} GameBeginCountDown
         */
        GameBeginCountDown.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.GameBeginCountDown)
                return object;
            var message = new $root.tbnn.GameBeginCountDown();
            if (object.Time != null)
                message.Time = object.Time | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameBeginCountDown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.GameBeginCountDown
         * @static
         * @param {tbnn.GameBeginCountDown} message GameBeginCountDown
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
         * @memberof tbnn.GameBeginCountDown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameBeginCountDown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBeginCountDown;
    })();

    tbnn.SuperToolAddChangeLog = (function() {

        /**
         * Properties of a SuperToolAddChangeLog.
         * @memberof tbnn
         * @interface ISuperToolAddChangeLog
         * @property {number|null} [GameID] SuperToolAddChangeLog GameID
         * @property {number|null} [TableNo] SuperToolAddChangeLog TableNo
         * @property {number|null} [Type] SuperToolAddChangeLog Type
         * @property {string|null} [Result] SuperToolAddChangeLog Result
         * @property {string|null} [Operator] SuperToolAddChangeLog Operator
         */

        /**
         * Constructs a new SuperToolAddChangeLog.
         * @memberof tbnn
         * @classdesc Represents a SuperToolAddChangeLog.
         * @implements ISuperToolAddChangeLog
         * @constructor
         * @param {tbnn.ISuperToolAddChangeLog=} [properties] Properties to set
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
         * @memberof tbnn.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.GameID = 0;

        /**
         * SuperToolAddChangeLog TableNo.
         * @member {number} TableNo
         * @memberof tbnn.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.TableNo = 0;

        /**
         * SuperToolAddChangeLog Type.
         * @member {number} Type
         * @memberof tbnn.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Type = 0;

        /**
         * SuperToolAddChangeLog Result.
         * @member {string} Result
         * @memberof tbnn.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Result = "";

        /**
         * SuperToolAddChangeLog Operator.
         * @member {string} Operator
         * @memberof tbnn.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Operator = "";

        /**
         * Creates a new SuperToolAddChangeLog instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolAddChangeLog
         * @static
         * @param {tbnn.ISuperToolAddChangeLog=} [properties] Properties to set
         * @returns {tbnn.SuperToolAddChangeLog} SuperToolAddChangeLog instance
         */
        SuperToolAddChangeLog.create = function create(properties) {
            return new SuperToolAddChangeLog(properties);
        };

        /**
         * Encodes the specified SuperToolAddChangeLog message. Does not implicitly {@link tbnn.SuperToolAddChangeLog.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolAddChangeLog
         * @static
         * @param {tbnn.ISuperToolAddChangeLog} message SuperToolAddChangeLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddChangeLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Type);
            if (message.Result != null && message.hasOwnProperty("Result"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Result);
            if (message.Operator != null && message.hasOwnProperty("Operator"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Operator);
            return writer;
        };

        /**
         * Encodes the specified SuperToolAddChangeLog message, length delimited. Does not implicitly {@link tbnn.SuperToolAddChangeLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolAddChangeLog
         * @static
         * @param {tbnn.ISuperToolAddChangeLog} message SuperToolAddChangeLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddChangeLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddChangeLog message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolAddChangeLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolAddChangeLog} SuperToolAddChangeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddChangeLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolAddChangeLog();
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
            return message;
        };

        /**
         * Decodes a SuperToolAddChangeLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperToolAddChangeLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolAddChangeLog} SuperToolAddChangeLog
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
         * @memberof tbnn.SuperToolAddChangeLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAddChangeLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                if (!$util.isInteger(message.TableNo))
                    return "TableNo: integer expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Result != null && message.hasOwnProperty("Result"))
                if (!$util.isString(message.Result))
                    return "Result: string expected";
            if (message.Operator != null && message.hasOwnProperty("Operator"))
                if (!$util.isString(message.Operator))
                    return "Operator: string expected";
            return null;
        };

        /**
         * Creates a SuperToolAddChangeLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolAddChangeLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolAddChangeLog} SuperToolAddChangeLog
         */
        SuperToolAddChangeLog.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolAddChangeLog)
                return object;
            var message = new $root.tbnn.SuperToolAddChangeLog();
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
         * @memberof tbnn.SuperToolAddChangeLog
         * @static
         * @param {tbnn.SuperToolAddChangeLog} message SuperToolAddChangeLog
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
         * @memberof tbnn.SuperToolAddChangeLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddChangeLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddChangeLog;
    })();

    tbnn.SuperToolAddAssignReward = (function() {

        /**
         * Properties of a SuperToolAddAssignReward.
         * @memberof tbnn
         * @interface ISuperToolAddAssignReward
         * @property {number|null} [GameID] SuperToolAddAssignReward GameID
         * @property {number|null} [FlagID] SuperToolAddAssignReward FlagID
         * @property {number|null} [TableNo] SuperToolAddAssignReward TableNo
         * @property {string|null} [Result] SuperToolAddAssignReward Result
         * @property {string|null} [Operator] SuperToolAddAssignReward Operator
         * @property {Array.<tbnn.ISuperToolAddAssignRewardDetail>|null} [DetailList] SuperToolAddAssignReward DetailList
         */

        /**
         * Constructs a new SuperToolAddAssignReward.
         * @memberof tbnn
         * @classdesc Represents a SuperToolAddAssignReward.
         * @implements ISuperToolAddAssignReward
         * @constructor
         * @param {tbnn.ISuperToolAddAssignReward=} [properties] Properties to set
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
         * @memberof tbnn.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.GameID = 0;

        /**
         * SuperToolAddAssignReward FlagID.
         * @member {number} FlagID
         * @memberof tbnn.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.FlagID = 0;

        /**
         * SuperToolAddAssignReward TableNo.
         * @member {number} TableNo
         * @memberof tbnn.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.TableNo = 0;

        /**
         * SuperToolAddAssignReward Result.
         * @member {string} Result
         * @memberof tbnn.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.Result = "";

        /**
         * SuperToolAddAssignReward Operator.
         * @member {string} Operator
         * @memberof tbnn.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.Operator = "";

        /**
         * SuperToolAddAssignReward DetailList.
         * @member {Array.<tbnn.ISuperToolAddAssignRewardDetail>} DetailList
         * @memberof tbnn.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.DetailList = $util.emptyArray;

        /**
         * Creates a new SuperToolAddAssignReward instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolAddAssignReward
         * @static
         * @param {tbnn.ISuperToolAddAssignReward=} [properties] Properties to set
         * @returns {tbnn.SuperToolAddAssignReward} SuperToolAddAssignReward instance
         */
        SuperToolAddAssignReward.create = function create(properties) {
            return new SuperToolAddAssignReward(properties);
        };

        /**
         * Encodes the specified SuperToolAddAssignReward message. Does not implicitly {@link tbnn.SuperToolAddAssignReward.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolAddAssignReward
         * @static
         * @param {tbnn.ISuperToolAddAssignReward} message SuperToolAddAssignReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            if (message.Result != null && message.hasOwnProperty("Result"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Result);
            if (message.Operator != null && message.hasOwnProperty("Operator"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Operator);
            if (message.DetailList != null && message.DetailList.length)
                for (var i = 0; i < message.DetailList.length; ++i)
                    $root.tbnn.SuperToolAddAssignRewardDetail.encode(message.DetailList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolAddAssignReward message, length delimited. Does not implicitly {@link tbnn.SuperToolAddAssignReward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolAddAssignReward
         * @static
         * @param {tbnn.ISuperToolAddAssignReward} message SuperToolAddAssignReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddAssignReward message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolAddAssignReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolAddAssignReward} SuperToolAddAssignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolAddAssignReward();
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
                    message.DetailList.push($root.tbnn.SuperToolAddAssignRewardDetail.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuperToolAddAssignReward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperToolAddAssignReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolAddAssignReward} SuperToolAddAssignReward
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
         * @memberof tbnn.SuperToolAddAssignReward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAddAssignReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                if (!$util.isInteger(message.FlagID))
                    return "FlagID: integer expected";
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                if (!$util.isInteger(message.TableNo))
                    return "TableNo: integer expected";
            if (message.Result != null && message.hasOwnProperty("Result"))
                if (!$util.isString(message.Result))
                    return "Result: string expected";
            if (message.Operator != null && message.hasOwnProperty("Operator"))
                if (!$util.isString(message.Operator))
                    return "Operator: string expected";
            if (message.DetailList != null && message.hasOwnProperty("DetailList")) {
                if (!Array.isArray(message.DetailList))
                    return "DetailList: array expected";
                for (var i = 0; i < message.DetailList.length; ++i) {
                    var error = $root.tbnn.SuperToolAddAssignRewardDetail.verify(message.DetailList[i]);
                    if (error)
                        return "DetailList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolAddAssignReward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolAddAssignReward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolAddAssignReward} SuperToolAddAssignReward
         */
        SuperToolAddAssignReward.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolAddAssignReward)
                return object;
            var message = new $root.tbnn.SuperToolAddAssignReward();
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
                    throw TypeError(".tbnn.SuperToolAddAssignReward.DetailList: array expected");
                message.DetailList = [];
                for (var i = 0; i < object.DetailList.length; ++i) {
                    if (typeof object.DetailList[i] !== "object")
                        throw TypeError(".tbnn.SuperToolAddAssignReward.DetailList: object expected");
                    message.DetailList[i] = $root.tbnn.SuperToolAddAssignRewardDetail.fromObject(object.DetailList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAddAssignReward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.SuperToolAddAssignReward
         * @static
         * @param {tbnn.SuperToolAddAssignReward} message SuperToolAddAssignReward
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
                    object.DetailList[j] = $root.tbnn.SuperToolAddAssignRewardDetail.toObject(message.DetailList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolAddAssignReward to JSON.
         * @function toJSON
         * @memberof tbnn.SuperToolAddAssignReward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddAssignReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddAssignReward;
    })();

    tbnn.SuperToolGetAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolGetAssignRewardDetail.
         * @memberof tbnn
         * @interface ISuperToolGetAssignRewardDetail
         * @property {number|null} [GameID] SuperToolGetAssignRewardDetail GameID
         * @property {number|null} [FlagID] SuperToolGetAssignRewardDetail FlagID
         * @property {number|null} [TableNo] SuperToolGetAssignRewardDetail TableNo
         */

        /**
         * Constructs a new SuperToolGetAssignRewardDetail.
         * @memberof tbnn
         * @classdesc Represents a SuperToolGetAssignRewardDetail.
         * @implements ISuperToolGetAssignRewardDetail
         * @constructor
         * @param {tbnn.ISuperToolGetAssignRewardDetail=} [properties] Properties to set
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
         * @memberof tbnn.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.GameID = 0;

        /**
         * SuperToolGetAssignRewardDetail FlagID.
         * @member {number} FlagID
         * @memberof tbnn.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.FlagID = 0;

        /**
         * SuperToolGetAssignRewardDetail TableNo.
         * @member {number} TableNo
         * @memberof tbnn.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.TableNo = 0;

        /**
         * Creates a new SuperToolGetAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {tbnn.ISuperToolGetAssignRewardDetail=} [properties] Properties to set
         * @returns {tbnn.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail instance
         */
        SuperToolGetAssignRewardDetail.create = function create(properties) {
            return new SuperToolGetAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolGetAssignRewardDetail message. Does not implicitly {@link tbnn.SuperToolGetAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {tbnn.ISuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetAssignRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            return writer;
        };

        /**
         * Encodes the specified SuperToolGetAssignRewardDetail message, length delimited. Does not implicitly {@link tbnn.SuperToolGetAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {tbnn.ISuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolGetAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolGetAssignRewardDetail();
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
            return message;
        };

        /**
         * Decodes a SuperToolGetAssignRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
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
         * @memberof tbnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolGetAssignRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                if (!$util.isInteger(message.FlagID))
                    return "FlagID: integer expected";
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                if (!$util.isInteger(message.TableNo))
                    return "TableNo: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolGetAssignRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         */
        SuperToolGetAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolGetAssignRewardDetail)
                return object;
            var message = new $root.tbnn.SuperToolGetAssignRewardDetail();
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
         * @memberof tbnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {tbnn.SuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail
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
         * @memberof tbnn.SuperToolGetAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolGetAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolGetAssignRewardDetail;
    })();

    tbnn.SuperToolAddAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolAddAssignRewardDetail.
         * @memberof tbnn
         * @interface ISuperToolAddAssignRewardDetail
         * @property {number|null} [Idx] SuperToolAddAssignRewardDetail Idx
         * @property {string|null} [Description] SuperToolAddAssignRewardDetail Description
         * @property {string|null} [Reward] SuperToolAddAssignRewardDetail Reward
         * @property {number|null} [Status] SuperToolAddAssignRewardDetail Status
         */

        /**
         * Constructs a new SuperToolAddAssignRewardDetail.
         * @memberof tbnn
         * @classdesc Represents a SuperToolAddAssignRewardDetail.
         * @implements ISuperToolAddAssignRewardDetail
         * @constructor
         * @param {tbnn.ISuperToolAddAssignRewardDetail=} [properties] Properties to set
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
         * @memberof tbnn.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Idx = 0;

        /**
         * SuperToolAddAssignRewardDetail Description.
         * @member {string} Description
         * @memberof tbnn.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Description = "";

        /**
         * SuperToolAddAssignRewardDetail Reward.
         * @member {string} Reward
         * @memberof tbnn.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Reward = "";

        /**
         * SuperToolAddAssignRewardDetail Status.
         * @member {number} Status
         * @memberof tbnn.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Status = 0;

        /**
         * Creates a new SuperToolAddAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {tbnn.ISuperToolAddAssignRewardDetail=} [properties] Properties to set
         * @returns {tbnn.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail instance
         */
        SuperToolAddAssignRewardDetail.create = function create(properties) {
            return new SuperToolAddAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolAddAssignRewardDetail message. Does not implicitly {@link tbnn.SuperToolAddAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {tbnn.ISuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Idx != null && message.hasOwnProperty("Idx"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Idx);
            if (message.Description != null && message.hasOwnProperty("Description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Description);
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Reward);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified SuperToolAddAssignRewardDetail message, length delimited. Does not implicitly {@link tbnn.SuperToolAddAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {tbnn.ISuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolAddAssignRewardDetail();
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
            return message;
        };

        /**
         * Decodes a SuperToolAddAssignRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
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
         * @memberof tbnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAddAssignRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Idx != null && message.hasOwnProperty("Idx"))
                if (!$util.isInteger(message.Idx))
                    return "Idx: integer expected";
            if (message.Description != null && message.hasOwnProperty("Description"))
                if (!$util.isString(message.Description))
                    return "Description: string expected";
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                if (!$util.isString(message.Reward))
                    return "Reward: string expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isInteger(message.Status))
                    return "Status: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolAddAssignRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         */
        SuperToolAddAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolAddAssignRewardDetail)
                return object;
            var message = new $root.tbnn.SuperToolAddAssignRewardDetail();
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
         * @memberof tbnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {tbnn.SuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail
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
         * @memberof tbnn.SuperToolAddAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddAssignRewardDetail;
    })();

    tbnn.SuperToolAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolAssignRewardDetail.
         * @memberof tbnn
         * @interface ISuperToolAssignRewardDetail
         * @property {number|null} [LogID] SuperToolAssignRewardDetail LogID
         * @property {number|null} [Idx] SuperToolAssignRewardDetail Idx
         * @property {string|null} [Description] SuperToolAssignRewardDetail Description
         * @property {string|null} [Reward] SuperToolAssignRewardDetail Reward
         * @property {number|null} [Status] SuperToolAssignRewardDetail Status
         */

        /**
         * Constructs a new SuperToolAssignRewardDetail.
         * @memberof tbnn
         * @classdesc Represents a SuperToolAssignRewardDetail.
         * @implements ISuperToolAssignRewardDetail
         * @constructor
         * @param {tbnn.ISuperToolAssignRewardDetail=} [properties] Properties to set
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
         * @memberof tbnn.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.LogID = 0;

        /**
         * SuperToolAssignRewardDetail Idx.
         * @member {number} Idx
         * @memberof tbnn.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Idx = 0;

        /**
         * SuperToolAssignRewardDetail Description.
         * @member {string} Description
         * @memberof tbnn.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Description = "";

        /**
         * SuperToolAssignRewardDetail Reward.
         * @member {string} Reward
         * @memberof tbnn.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Reward = "";

        /**
         * SuperToolAssignRewardDetail Status.
         * @member {number} Status
         * @memberof tbnn.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Status = 0;

        /**
         * Creates a new SuperToolAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolAssignRewardDetail
         * @static
         * @param {tbnn.ISuperToolAssignRewardDetail=} [properties] Properties to set
         * @returns {tbnn.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail instance
         */
        SuperToolAssignRewardDetail.create = function create(properties) {
            return new SuperToolAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolAssignRewardDetail message. Does not implicitly {@link tbnn.SuperToolAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolAssignRewardDetail
         * @static
         * @param {tbnn.ISuperToolAssignRewardDetail} message SuperToolAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAssignRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LogID != null && message.hasOwnProperty("LogID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.LogID);
            if (message.Idx != null && message.hasOwnProperty("Idx"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Idx);
            if (message.Description != null && message.hasOwnProperty("Description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Description);
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Reward);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified SuperToolAssignRewardDetail message, length delimited. Does not implicitly {@link tbnn.SuperToolAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolAssignRewardDetail
         * @static
         * @param {tbnn.ISuperToolAssignRewardDetail} message SuperToolAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolAssignRewardDetail();
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
            return message;
        };

        /**
         * Decodes a SuperToolAssignRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperToolAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
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
         * @memberof tbnn.SuperToolAssignRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAssignRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.LogID != null && message.hasOwnProperty("LogID"))
                if (!$util.isInteger(message.LogID))
                    return "LogID: integer expected";
            if (message.Idx != null && message.hasOwnProperty("Idx"))
                if (!$util.isInteger(message.Idx))
                    return "Idx: integer expected";
            if (message.Description != null && message.hasOwnProperty("Description"))
                if (!$util.isString(message.Description))
                    return "Description: string expected";
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                if (!$util.isString(message.Reward))
                    return "Reward: string expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isInteger(message.Status))
                    return "Status: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolAssignRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         */
        SuperToolAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolAssignRewardDetail)
                return object;
            var message = new $root.tbnn.SuperToolAssignRewardDetail();
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
         * @memberof tbnn.SuperToolAssignRewardDetail
         * @static
         * @param {tbnn.SuperToolAssignRewardDetail} message SuperToolAssignRewardDetail
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
         * @memberof tbnn.SuperToolAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAssignRewardDetail;
    })();

    tbnn.SuperToolGetVipUserRequest = (function() {

        /**
         * Properties of a SuperToolGetVipUserRequest.
         * @memberof tbnn
         * @interface ISuperToolGetVipUserRequest
         * @property {number|null} [GameID] SuperToolGetVipUserRequest GameID
         */

        /**
         * Constructs a new SuperToolGetVipUserRequest.
         * @memberof tbnn
         * @classdesc Represents a SuperToolGetVipUserRequest.
         * @implements ISuperToolGetVipUserRequest
         * @constructor
         * @param {tbnn.ISuperToolGetVipUserRequest=} [properties] Properties to set
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
         * @memberof tbnn.SuperToolGetVipUserRequest
         * @instance
         */
        SuperToolGetVipUserRequest.prototype.GameID = 0;

        /**
         * Creates a new SuperToolGetVipUserRequest instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolGetVipUserRequest
         * @static
         * @param {tbnn.ISuperToolGetVipUserRequest=} [properties] Properties to set
         * @returns {tbnn.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest instance
         */
        SuperToolGetVipUserRequest.create = function create(properties) {
            return new SuperToolGetVipUserRequest(properties);
        };

        /**
         * Encodes the specified SuperToolGetVipUserRequest message. Does not implicitly {@link tbnn.SuperToolGetVipUserRequest.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolGetVipUserRequest
         * @static
         * @param {tbnn.ISuperToolGetVipUserRequest} message SuperToolGetVipUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetVipUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            return writer;
        };

        /**
         * Encodes the specified SuperToolGetVipUserRequest message, length delimited. Does not implicitly {@link tbnn.SuperToolGetVipUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolGetVipUserRequest
         * @static
         * @param {tbnn.ISuperToolGetVipUserRequest} message SuperToolGetVipUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetVipUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolGetVipUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolGetVipUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetVipUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolGetVipUserRequest();
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
            return message;
        };

        /**
         * Decodes a SuperToolGetVipUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperToolGetVipUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
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
         * @memberof tbnn.SuperToolGetVipUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolGetVipUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolGetVipUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolGetVipUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         */
        SuperToolGetVipUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolGetVipUserRequest)
                return object;
            var message = new $root.tbnn.SuperToolGetVipUserRequest();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolGetVipUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.SuperToolGetVipUserRequest
         * @static
         * @param {tbnn.SuperToolGetVipUserRequest} message SuperToolGetVipUserRequest
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
         * @memberof tbnn.SuperToolGetVipUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolGetVipUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolGetVipUserRequest;
    })();

    tbnn.SuperToolVipUserDataList = (function() {

        /**
         * Properties of a SuperToolVipUserDataList.
         * @memberof tbnn
         * @interface ISuperToolVipUserDataList
         * @property {Array.<tbnn.ISuperToolVipUserData>|null} [DataList] SuperToolVipUserDataList DataList
         */

        /**
         * Constructs a new SuperToolVipUserDataList.
         * @memberof tbnn
         * @classdesc Represents a SuperToolVipUserDataList.
         * @implements ISuperToolVipUserDataList
         * @constructor
         * @param {tbnn.ISuperToolVipUserDataList=} [properties] Properties to set
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
         * @member {Array.<tbnn.ISuperToolVipUserData>} DataList
         * @memberof tbnn.SuperToolVipUserDataList
         * @instance
         */
        SuperToolVipUserDataList.prototype.DataList = $util.emptyArray;

        /**
         * Creates a new SuperToolVipUserDataList instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolVipUserDataList
         * @static
         * @param {tbnn.ISuperToolVipUserDataList=} [properties] Properties to set
         * @returns {tbnn.SuperToolVipUserDataList} SuperToolVipUserDataList instance
         */
        SuperToolVipUserDataList.create = function create(properties) {
            return new SuperToolVipUserDataList(properties);
        };

        /**
         * Encodes the specified SuperToolVipUserDataList message. Does not implicitly {@link tbnn.SuperToolVipUserDataList.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolVipUserDataList
         * @static
         * @param {tbnn.ISuperToolVipUserDataList} message SuperToolVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DataList != null && message.DataList.length)
                for (var i = 0; i < message.DataList.length; ++i)
                    $root.tbnn.SuperToolVipUserData.encode(message.DataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolVipUserDataList message, length delimited. Does not implicitly {@link tbnn.SuperToolVipUserDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolVipUserDataList
         * @static
         * @param {tbnn.ISuperToolVipUserDataList} message SuperToolVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolVipUserDataList message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolVipUserDataList} SuperToolVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolVipUserDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.DataList && message.DataList.length))
                        message.DataList = [];
                    message.DataList.push($root.tbnn.SuperToolVipUserData.decode(reader, reader.uint32()));
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
         * @memberof tbnn.SuperToolVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolVipUserDataList} SuperToolVipUserDataList
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
         * @memberof tbnn.SuperToolVipUserDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolVipUserDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DataList != null && message.hasOwnProperty("DataList")) {
                if (!Array.isArray(message.DataList))
                    return "DataList: array expected";
                for (var i = 0; i < message.DataList.length; ++i) {
                    var error = $root.tbnn.SuperToolVipUserData.verify(message.DataList[i]);
                    if (error)
                        return "DataList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolVipUserDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolVipUserDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolVipUserDataList} SuperToolVipUserDataList
         */
        SuperToolVipUserDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolVipUserDataList)
                return object;
            var message = new $root.tbnn.SuperToolVipUserDataList();
            if (object.DataList) {
                if (!Array.isArray(object.DataList))
                    throw TypeError(".tbnn.SuperToolVipUserDataList.DataList: array expected");
                message.DataList = [];
                for (var i = 0; i < object.DataList.length; ++i) {
                    if (typeof object.DataList[i] !== "object")
                        throw TypeError(".tbnn.SuperToolVipUserDataList.DataList: object expected");
                    message.DataList[i] = $root.tbnn.SuperToolVipUserData.fromObject(object.DataList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolVipUserDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.SuperToolVipUserDataList
         * @static
         * @param {tbnn.SuperToolVipUserDataList} message SuperToolVipUserDataList
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
                    object.DataList[j] = $root.tbnn.SuperToolVipUserData.toObject(message.DataList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolVipUserDataList to JSON.
         * @function toJSON
         * @memberof tbnn.SuperToolVipUserDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolVipUserDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolVipUserDataList;
    })();

    tbnn.SuperToolVipUserData = (function() {

        /**
         * Properties of a SuperToolVipUserData.
         * @memberof tbnn
         * @interface ISuperToolVipUserData
         * @property {number|null} [UserID] SuperToolVipUserData UserID
         * @property {number|Long|null} [AssignAmount] SuperToolVipUserData AssignAmount
         * @property {number|null} [AssignRate] SuperToolVipUserData AssignRate
         * @property {number|Long|null} [CompleteAmount] SuperToolVipUserData CompleteAmount
         * @property {number|null} [Complete] SuperToolVipUserData Complete
         * @property {number|null} [Status] SuperToolVipUserData Status
         * @property {number|null} [TotalAll] SuperToolVipUserData TotalAll
         * @property {number|null} [TotalUserWinLose] SuperToolVipUserData TotalUserWinLose
         * @property {number|null} [TodayUserWinLose] SuperToolVipUserData TodayUserWinLose
         */

        /**
         * Constructs a new SuperToolVipUserData.
         * @memberof tbnn
         * @classdesc Represents a SuperToolVipUserData.
         * @implements ISuperToolVipUserData
         * @constructor
         * @param {tbnn.ISuperToolVipUserData=} [properties] Properties to set
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
         * @memberof tbnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.UserID = 0;

        /**
         * SuperToolVipUserData AssignAmount.
         * @member {number|Long} AssignAmount
         * @memberof tbnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.AssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolVipUserData AssignRate.
         * @member {number} AssignRate
         * @memberof tbnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.AssignRate = 0;

        /**
         * SuperToolVipUserData CompleteAmount.
         * @member {number|Long} CompleteAmount
         * @memberof tbnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.CompleteAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolVipUserData Complete.
         * @member {number} Complete
         * @memberof tbnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.Complete = 0;

        /**
         * SuperToolVipUserData Status.
         * @member {number} Status
         * @memberof tbnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.Status = 0;

        /**
         * SuperToolVipUserData TotalAll.
         * @member {number} TotalAll
         * @memberof tbnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TotalAll = 0;

        /**
         * SuperToolVipUserData TotalUserWinLose.
         * @member {number} TotalUserWinLose
         * @memberof tbnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TotalUserWinLose = 0;

        /**
         * SuperToolVipUserData TodayUserWinLose.
         * @member {number} TodayUserWinLose
         * @memberof tbnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TodayUserWinLose = 0;

        /**
         * Creates a new SuperToolVipUserData instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolVipUserData
         * @static
         * @param {tbnn.ISuperToolVipUserData=} [properties] Properties to set
         * @returns {tbnn.SuperToolVipUserData} SuperToolVipUserData instance
         */
        SuperToolVipUserData.create = function create(properties) {
            return new SuperToolVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolVipUserData message. Does not implicitly {@link tbnn.SuperToolVipUserData.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolVipUserData
         * @static
         * @param {tbnn.ISuperToolVipUserData} message SuperToolVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.AssignAmount != null && message.hasOwnProperty("AssignAmount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.AssignAmount);
            if (message.AssignRate != null && message.hasOwnProperty("AssignRate"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.AssignRate);
            if (message.CompleteAmount != null && message.hasOwnProperty("CompleteAmount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.CompleteAmount);
            if (message.Complete != null && message.hasOwnProperty("Complete"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Complete);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Status);
            if (message.TotalAll != null && message.hasOwnProperty("TotalAll"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.TotalAll);
            if (message.TotalUserWinLose != null && message.hasOwnProperty("TotalUserWinLose"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.TotalUserWinLose);
            if (message.TodayUserWinLose != null && message.hasOwnProperty("TodayUserWinLose"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.TodayUserWinLose);
            return writer;
        };

        /**
         * Encodes the specified SuperToolVipUserData message, length delimited. Does not implicitly {@link tbnn.SuperToolVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolVipUserData
         * @static
         * @param {tbnn.ISuperToolVipUserData} message SuperToolVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolVipUserData} SuperToolVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolVipUserData();
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
            return message;
        };

        /**
         * Decodes a SuperToolVipUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperToolVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolVipUserData} SuperToolVipUserData
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
         * @memberof tbnn.SuperToolVipUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolVipUserData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.AssignAmount != null && message.hasOwnProperty("AssignAmount"))
                if (!$util.isInteger(message.AssignAmount) && !(message.AssignAmount && $util.isInteger(message.AssignAmount.low) && $util.isInteger(message.AssignAmount.high)))
                    return "AssignAmount: integer|Long expected";
            if (message.AssignRate != null && message.hasOwnProperty("AssignRate"))
                if (!$util.isInteger(message.AssignRate))
                    return "AssignRate: integer expected";
            if (message.CompleteAmount != null && message.hasOwnProperty("CompleteAmount"))
                if (!$util.isInteger(message.CompleteAmount) && !(message.CompleteAmount && $util.isInteger(message.CompleteAmount.low) && $util.isInteger(message.CompleteAmount.high)))
                    return "CompleteAmount: integer|Long expected";
            if (message.Complete != null && message.hasOwnProperty("Complete"))
                if (!$util.isInteger(message.Complete))
                    return "Complete: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isInteger(message.Status))
                    return "Status: integer expected";
            if (message.TotalAll != null && message.hasOwnProperty("TotalAll"))
                if (!$util.isInteger(message.TotalAll))
                    return "TotalAll: integer expected";
            if (message.TotalUserWinLose != null && message.hasOwnProperty("TotalUserWinLose"))
                if (!$util.isInteger(message.TotalUserWinLose))
                    return "TotalUserWinLose: integer expected";
            if (message.TodayUserWinLose != null && message.hasOwnProperty("TodayUserWinLose"))
                if (!$util.isInteger(message.TodayUserWinLose))
                    return "TodayUserWinLose: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolVipUserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolVipUserData} SuperToolVipUserData
         */
        SuperToolVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolVipUserData)
                return object;
            var message = new $root.tbnn.SuperToolVipUserData();
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
         * @memberof tbnn.SuperToolVipUserData
         * @static
         * @param {tbnn.SuperToolVipUserData} message SuperToolVipUserData
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
                    object.AssignAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AssignAmount = options.longs === String ? "0" : 0;
                object.AssignRate = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CompleteAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CompleteAmount = options.longs === String ? "0" : 0;
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
                    object.AssignAmount = options.longs === String ? String(message.AssignAmount) : message.AssignAmount;
                else
                    object.AssignAmount = options.longs === String ? $util.Long.prototype.toString.call(message.AssignAmount) : options.longs === Number ? new $util.LongBits(message.AssignAmount.low >>> 0, message.AssignAmount.high >>> 0).toNumber() : message.AssignAmount;
            if (message.AssignRate != null && message.hasOwnProperty("AssignRate"))
                object.AssignRate = message.AssignRate;
            if (message.CompleteAmount != null && message.hasOwnProperty("CompleteAmount"))
                if (typeof message.CompleteAmount === "number")
                    object.CompleteAmount = options.longs === String ? String(message.CompleteAmount) : message.CompleteAmount;
                else
                    object.CompleteAmount = options.longs === String ? $util.Long.prototype.toString.call(message.CompleteAmount) : options.longs === Number ? new $util.LongBits(message.CompleteAmount.low >>> 0, message.CompleteAmount.high >>> 0).toNumber() : message.CompleteAmount;
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
         * @memberof tbnn.SuperToolVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolVipUserData;
    })();

    tbnn.SuperToolFishGetSystemRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishGetSystemRewardDetail.
         * @memberof tbnn
         * @interface ISuperToolFishGetSystemRewardDetail
         * @property {Array.<tbnn.IFishSystemRewardDataList>|null} [FishRewardList] SuperToolFishGetSystemRewardDetail FishRewardList
         */

        /**
         * Constructs a new SuperToolFishGetSystemRewardDetail.
         * @memberof tbnn
         * @classdesc Represents a SuperToolFishGetSystemRewardDetail.
         * @implements ISuperToolFishGetSystemRewardDetail
         * @constructor
         * @param {tbnn.ISuperToolFishGetSystemRewardDetail=} [properties] Properties to set
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
         * @member {Array.<tbnn.IFishSystemRewardDataList>} FishRewardList
         * @memberof tbnn.SuperToolFishGetSystemRewardDetail
         * @instance
         */
        SuperToolFishGetSystemRewardDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishGetSystemRewardDetail instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {tbnn.ISuperToolFishGetSystemRewardDetail=} [properties] Properties to set
         * @returns {tbnn.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail instance
         */
        SuperToolFishGetSystemRewardDetail.create = function create(properties) {
            return new SuperToolFishGetSystemRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishGetSystemRewardDetail message. Does not implicitly {@link tbnn.SuperToolFishGetSystemRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {tbnn.ISuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetSystemRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i = 0; i < message.FishRewardList.length; ++i)
                    $root.tbnn.FishSystemRewardDataList.encode(message.FishRewardList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishGetSystemRewardDetail message, length delimited. Does not implicitly {@link tbnn.SuperToolFishGetSystemRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {tbnn.ISuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetSystemRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishGetSystemRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetSystemRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolFishGetSystemRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.tbnn.FishSystemRewardDataList.decode(reader, reader.uint32()));
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
         * @memberof tbnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
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
         * @memberof tbnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishGetSystemRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FishRewardList != null && message.hasOwnProperty("FishRewardList")) {
                if (!Array.isArray(message.FishRewardList))
                    return "FishRewardList: array expected";
                for (var i = 0; i < message.FishRewardList.length; ++i) {
                    var error = $root.tbnn.FishSystemRewardDataList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishGetSystemRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         */
        SuperToolFishGetSystemRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolFishGetSystemRewardDetail)
                return object;
            var message = new $root.tbnn.SuperToolFishGetSystemRewardDetail();
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".tbnn.SuperToolFishGetSystemRewardDetail.FishRewardList: array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".tbnn.SuperToolFishGetSystemRewardDetail.FishRewardList: object expected");
                    message.FishRewardList[i] = $root.tbnn.FishSystemRewardDataList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishGetSystemRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {tbnn.SuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail
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
                    object.FishRewardList[j] = $root.tbnn.FishSystemRewardDataList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishGetSystemRewardDetail to JSON.
         * @function toJSON
         * @memberof tbnn.SuperToolFishGetSystemRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishGetSystemRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishGetSystemRewardDetail;
    })();

    tbnn.FishSystemRewardDataList = (function() {

        /**
         * Properties of a FishSystemRewardDataList.
         * @memberof tbnn
         * @interface IFishSystemRewardDataList
         * @property {number|null} [FishID] FishSystemRewardDataList FishID
         * @property {number|Long|null} [Amount] FishSystemRewardDataList Amount
         * @property {number|Long|null} [FinishAmount] FishSystemRewardDataList FinishAmount
         * @property {number|null} [Rate] FishSystemRewardDataList Rate
         * @property {number|null} [Status] FishSystemRewardDataList Status
         */

        /**
         * Constructs a new FishSystemRewardDataList.
         * @memberof tbnn
         * @classdesc Represents a FishSystemRewardDataList.
         * @implements IFishSystemRewardDataList
         * @constructor
         * @param {tbnn.IFishSystemRewardDataList=} [properties] Properties to set
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
         * @memberof tbnn.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.FishID = 0;

        /**
         * FishSystemRewardDataList Amount.
         * @member {number|Long} Amount
         * @memberof tbnn.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSystemRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof tbnn.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSystemRewardDataList Rate.
         * @member {number} Rate
         * @memberof tbnn.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Rate = 0;

        /**
         * FishSystemRewardDataList Status.
         * @member {number} Status
         * @memberof tbnn.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Status = 0;

        /**
         * Creates a new FishSystemRewardDataList instance using the specified properties.
         * @function create
         * @memberof tbnn.FishSystemRewardDataList
         * @static
         * @param {tbnn.IFishSystemRewardDataList=} [properties] Properties to set
         * @returns {tbnn.FishSystemRewardDataList} FishSystemRewardDataList instance
         */
        FishSystemRewardDataList.create = function create(properties) {
            return new FishSystemRewardDataList(properties);
        };

        /**
         * Encodes the specified FishSystemRewardDataList message. Does not implicitly {@link tbnn.FishSystemRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof tbnn.FishSystemRewardDataList
         * @static
         * @param {tbnn.IFishSystemRewardDataList} message FishSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSystemRewardDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FishID != null && message.hasOwnProperty("FishID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FishID);
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Amount);
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.FinishAmount);
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Rate);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified FishSystemRewardDataList message, length delimited. Does not implicitly {@link tbnn.FishSystemRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.FishSystemRewardDataList
         * @static
         * @param {tbnn.IFishSystemRewardDataList} message FishSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSystemRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishSystemRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.FishSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.FishSystemRewardDataList} FishSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSystemRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.FishSystemRewardDataList();
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
            return message;
        };

        /**
         * Decodes a FishSystemRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.FishSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.FishSystemRewardDataList} FishSystemRewardDataList
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
         * @memberof tbnn.FishSystemRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishSystemRewardDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FishID != null && message.hasOwnProperty("FishID"))
                if (!$util.isInteger(message.FishID))
                    return "FishID: integer expected";
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (!$util.isInteger(message.Amount) && !(message.Amount && $util.isInteger(message.Amount.low) && $util.isInteger(message.Amount.high)))
                    return "Amount: integer|Long expected";
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                    return "FinishAmount: integer|Long expected";
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                if (!$util.isInteger(message.Rate))
                    return "Rate: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isInteger(message.Status))
                    return "Status: integer expected";
            return null;
        };

        /**
         * Creates a FishSystemRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.FishSystemRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.FishSystemRewardDataList} FishSystemRewardDataList
         */
        FishSystemRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.FishSystemRewardDataList)
                return object;
            var message = new $root.tbnn.FishSystemRewardDataList();
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
         * @memberof tbnn.FishSystemRewardDataList
         * @static
         * @param {tbnn.FishSystemRewardDataList} message FishSystemRewardDataList
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
                    object.Amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Amount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishAmount = options.longs === String ? "0" : 0;
                object.Rate = 0;
                object.Status = 0;
            }
            if (message.FishID != null && message.hasOwnProperty("FishID"))
                object.FishID = message.FishID;
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (typeof message.Amount === "number")
                    object.Amount = options.longs === String ? String(message.Amount) : message.Amount;
                else
                    object.Amount = options.longs === String ? $util.Long.prototype.toString.call(message.Amount) : options.longs === Number ? new $util.LongBits(message.Amount.low >>> 0, message.Amount.high >>> 0).toNumber() : message.Amount;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount = options.longs === String ? String(message.FinishAmount) : message.FinishAmount;
                else
                    object.FinishAmount = options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) : options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() : message.FinishAmount;
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                object.Rate = message.Rate;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this FishSystemRewardDataList to JSON.
         * @function toJSON
         * @memberof tbnn.FishSystemRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishSystemRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishSystemRewardDataList;
    })();

    tbnn.SuperToolFishGetVIPUserRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishGetVIPUserRewardDetail.
         * @memberof tbnn
         * @interface ISuperToolFishGetVIPUserRewardDetail
         * @property {Array.<tbnn.IFishVIPUserRewardDataList>|null} [FishVIPUserList] SuperToolFishGetVIPUserRewardDetail FishVIPUserList
         */

        /**
         * Constructs a new SuperToolFishGetVIPUserRewardDetail.
         * @memberof tbnn
         * @classdesc Represents a SuperToolFishGetVIPUserRewardDetail.
         * @implements ISuperToolFishGetVIPUserRewardDetail
         * @constructor
         * @param {tbnn.ISuperToolFishGetVIPUserRewardDetail=} [properties] Properties to set
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
         * @member {Array.<tbnn.IFishVIPUserRewardDataList>} FishVIPUserList
         * @memberof tbnn.SuperToolFishGetVIPUserRewardDetail
         * @instance
         */
        SuperToolFishGetVIPUserRewardDetail.prototype.FishVIPUserList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishGetVIPUserRewardDetail instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {tbnn.ISuperToolFishGetVIPUserRewardDetail=} [properties] Properties to set
         * @returns {tbnn.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail instance
         */
        SuperToolFishGetVIPUserRewardDetail.create = function create(properties) {
            return new SuperToolFishGetVIPUserRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishGetVIPUserRewardDetail message. Does not implicitly {@link tbnn.SuperToolFishGetVIPUserRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {tbnn.ISuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetVIPUserRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FishVIPUserList != null && message.FishVIPUserList.length)
                for (var i = 0; i < message.FishVIPUserList.length; ++i)
                    $root.tbnn.FishVIPUserRewardDataList.encode(message.FishVIPUserList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishGetVIPUserRewardDetail message, length delimited. Does not implicitly {@link tbnn.SuperToolFishGetVIPUserRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {tbnn.ISuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetVIPUserRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishGetVIPUserRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetVIPUserRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolFishGetVIPUserRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.FishVIPUserList && message.FishVIPUserList.length))
                        message.FishVIPUserList = [];
                    message.FishVIPUserList.push($root.tbnn.FishVIPUserRewardDataList.decode(reader, reader.uint32()));
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
         * @memberof tbnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
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
         * @memberof tbnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishGetVIPUserRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FishVIPUserList != null && message.hasOwnProperty("FishVIPUserList")) {
                if (!Array.isArray(message.FishVIPUserList))
                    return "FishVIPUserList: array expected";
                for (var i = 0; i < message.FishVIPUserList.length; ++i) {
                    var error = $root.tbnn.FishVIPUserRewardDataList.verify(message.FishVIPUserList[i]);
                    if (error)
                        return "FishVIPUserList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishGetVIPUserRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         */
        SuperToolFishGetVIPUserRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolFishGetVIPUserRewardDetail)
                return object;
            var message = new $root.tbnn.SuperToolFishGetVIPUserRewardDetail();
            if (object.FishVIPUserList) {
                if (!Array.isArray(object.FishVIPUserList))
                    throw TypeError(".tbnn.SuperToolFishGetVIPUserRewardDetail.FishVIPUserList: array expected");
                message.FishVIPUserList = [];
                for (var i = 0; i < object.FishVIPUserList.length; ++i) {
                    if (typeof object.FishVIPUserList[i] !== "object")
                        throw TypeError(".tbnn.SuperToolFishGetVIPUserRewardDetail.FishVIPUserList: object expected");
                    message.FishVIPUserList[i] = $root.tbnn.FishVIPUserRewardDataList.fromObject(object.FishVIPUserList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishGetVIPUserRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {tbnn.SuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail
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
                    object.FishVIPUserList[j] = $root.tbnn.FishVIPUserRewardDataList.toObject(message.FishVIPUserList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishGetVIPUserRewardDetail to JSON.
         * @function toJSON
         * @memberof tbnn.SuperToolFishGetVIPUserRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishGetVIPUserRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishGetVIPUserRewardDetail;
    })();

    tbnn.FishVIPUserRewardDataList = (function() {

        /**
         * Properties of a FishVIPUserRewardDataList.
         * @memberof tbnn
         * @interface IFishVIPUserRewardDataList
         * @property {number|null} [UserID] FishVIPUserRewardDataList UserID
         * @property {number|Long|null} [AssignAmount] FishVIPUserRewardDataList AssignAmount
         * @property {number|null} [Rate] FishVIPUserRewardDataList Rate
         * @property {number|Long|null} [FinishAmount] FishVIPUserRewardDataList FinishAmount
         * @property {number|null} [Status] FishVIPUserRewardDataList Status
         * @property {number|Long|null} [SumAssignAmount] FishVIPUserRewardDataList SumAssignAmount
         */

        /**
         * Constructs a new FishVIPUserRewardDataList.
         * @memberof tbnn
         * @classdesc Represents a FishVIPUserRewardDataList.
         * @implements IFishVIPUserRewardDataList
         * @constructor
         * @param {tbnn.IFishVIPUserRewardDataList=} [properties] Properties to set
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
         * @memberof tbnn.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.UserID = 0;

        /**
         * FishVIPUserRewardDataList AssignAmount.
         * @member {number|Long} AssignAmount
         * @memberof tbnn.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.AssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishVIPUserRewardDataList Rate.
         * @member {number} Rate
         * @memberof tbnn.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.Rate = 0;

        /**
         * FishVIPUserRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof tbnn.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishVIPUserRewardDataList Status.
         * @member {number} Status
         * @memberof tbnn.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.Status = 0;

        /**
         * FishVIPUserRewardDataList SumAssignAmount.
         * @member {number|Long} SumAssignAmount
         * @memberof tbnn.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.SumAssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FishVIPUserRewardDataList instance using the specified properties.
         * @function create
         * @memberof tbnn.FishVIPUserRewardDataList
         * @static
         * @param {tbnn.IFishVIPUserRewardDataList=} [properties] Properties to set
         * @returns {tbnn.FishVIPUserRewardDataList} FishVIPUserRewardDataList instance
         */
        FishVIPUserRewardDataList.create = function create(properties) {
            return new FishVIPUserRewardDataList(properties);
        };

        /**
         * Encodes the specified FishVIPUserRewardDataList message. Does not implicitly {@link tbnn.FishVIPUserRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof tbnn.FishVIPUserRewardDataList
         * @static
         * @param {tbnn.IFishVIPUserRewardDataList} message FishVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishVIPUserRewardDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.AssignAmount != null && message.hasOwnProperty("AssignAmount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.AssignAmount);
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Rate);
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.FinishAmount);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Status);
            if (message.SumAssignAmount != null && message.hasOwnProperty("SumAssignAmount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.SumAssignAmount);
            return writer;
        };

        /**
         * Encodes the specified FishVIPUserRewardDataList message, length delimited. Does not implicitly {@link tbnn.FishVIPUserRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.FishVIPUserRewardDataList
         * @static
         * @param {tbnn.IFishVIPUserRewardDataList} message FishVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishVIPUserRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishVIPUserRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.FishVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishVIPUserRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.FishVIPUserRewardDataList();
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
            return message;
        };

        /**
         * Decodes a FishVIPUserRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.FishVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.FishVIPUserRewardDataList} FishVIPUserRewardDataList
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
         * @memberof tbnn.FishVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishVIPUserRewardDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.AssignAmount != null && message.hasOwnProperty("AssignAmount"))
                if (!$util.isInteger(message.AssignAmount) && !(message.AssignAmount && $util.isInteger(message.AssignAmount.low) && $util.isInteger(message.AssignAmount.high)))
                    return "AssignAmount: integer|Long expected";
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                if (!$util.isInteger(message.Rate))
                    return "Rate: integer expected";
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                    return "FinishAmount: integer|Long expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isInteger(message.Status))
                    return "Status: integer expected";
            if (message.SumAssignAmount != null && message.hasOwnProperty("SumAssignAmount"))
                if (!$util.isInteger(message.SumAssignAmount) && !(message.SumAssignAmount && $util.isInteger(message.SumAssignAmount.low) && $util.isInteger(message.SumAssignAmount.high)))
                    return "SumAssignAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a FishVIPUserRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.FishVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         */
        FishVIPUserRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.FishVIPUserRewardDataList)
                return object;
            var message = new $root.tbnn.FishVIPUserRewardDataList();
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
         * @memberof tbnn.FishVIPUserRewardDataList
         * @static
         * @param {tbnn.FishVIPUserRewardDataList} message FishVIPUserRewardDataList
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
                    object.AssignAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AssignAmount = options.longs === String ? "0" : 0;
                object.Rate = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishAmount = options.longs === String ? "0" : 0;
                object.Status = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumAssignAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumAssignAmount = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.AssignAmount != null && message.hasOwnProperty("AssignAmount"))
                if (typeof message.AssignAmount === "number")
                    object.AssignAmount = options.longs === String ? String(message.AssignAmount) : message.AssignAmount;
                else
                    object.AssignAmount = options.longs === String ? $util.Long.prototype.toString.call(message.AssignAmount) : options.longs === Number ? new $util.LongBits(message.AssignAmount.low >>> 0, message.AssignAmount.high >>> 0).toNumber() : message.AssignAmount;
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                object.Rate = message.Rate;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount = options.longs === String ? String(message.FinishAmount) : message.FinishAmount;
                else
                    object.FinishAmount = options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) : options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() : message.FinishAmount;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.SumAssignAmount != null && message.hasOwnProperty("SumAssignAmount"))
                if (typeof message.SumAssignAmount === "number")
                    object.SumAssignAmount = options.longs === String ? String(message.SumAssignAmount) : message.SumAssignAmount;
                else
                    object.SumAssignAmount = options.longs === String ? $util.Long.prototype.toString.call(message.SumAssignAmount) : options.longs === Number ? new $util.LongBits(message.SumAssignAmount.low >>> 0, message.SumAssignAmount.high >>> 0).toNumber() : message.SumAssignAmount;
            return object;
        };

        /**
         * Converts this FishVIPUserRewardDataList to JSON.
         * @function toJSON
         * @memberof tbnn.FishVIPUserRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishVIPUserRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishVIPUserRewardDataList;
    })();

    tbnn.SuperToolFishUpdSystemRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishUpdSystemRewardDetail.
         * @memberof tbnn
         * @interface ISuperToolFishUpdSystemRewardDetail
         * @property {number|null} [FlagID] SuperToolFishUpdSystemRewardDetail FlagID
         * @property {Array.<tbnn.ISuperToolFishUpdSystemRewardDataList>|null} [FishRewardList] SuperToolFishUpdSystemRewardDetail FishRewardList
         */

        /**
         * Constructs a new SuperToolFishUpdSystemRewardDetail.
         * @memberof tbnn
         * @classdesc Represents a SuperToolFishUpdSystemRewardDetail.
         * @implements ISuperToolFishUpdSystemRewardDetail
         * @constructor
         * @param {tbnn.ISuperToolFishUpdSystemRewardDetail=} [properties] Properties to set
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
         * @memberof tbnn.SuperToolFishUpdSystemRewardDetail
         * @instance
         */
        SuperToolFishUpdSystemRewardDetail.prototype.FlagID = 0;

        /**
         * SuperToolFishUpdSystemRewardDetail FishRewardList.
         * @member {Array.<tbnn.ISuperToolFishUpdSystemRewardDataList>} FishRewardList
         * @memberof tbnn.SuperToolFishUpdSystemRewardDetail
         * @instance
         */
        SuperToolFishUpdSystemRewardDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishUpdSystemRewardDetail instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {tbnn.ISuperToolFishUpdSystemRewardDetail=} [properties] Properties to set
         * @returns {tbnn.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail instance
         */
        SuperToolFishUpdSystemRewardDetail.create = function create(properties) {
            return new SuperToolFishUpdSystemRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDetail message. Does not implicitly {@link tbnn.SuperToolFishUpdSystemRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {tbnn.ISuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i = 0; i < message.FishRewardList.length; ++i)
                    $root.tbnn.SuperToolFishUpdSystemRewardDataList.encode(message.FishRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDetail message, length delimited. Does not implicitly {@link tbnn.SuperToolFishUpdSystemRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {tbnn.ISuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolFishUpdSystemRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FlagID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.tbnn.SuperToolFishUpdSystemRewardDataList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
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
         * @memberof tbnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishUpdSystemRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                if (!$util.isInteger(message.FlagID))
                    return "FlagID: integer expected";
            if (message.FishRewardList != null && message.hasOwnProperty("FishRewardList")) {
                if (!Array.isArray(message.FishRewardList))
                    return "FishRewardList: array expected";
                for (var i = 0; i < message.FishRewardList.length; ++i) {
                    var error = $root.tbnn.SuperToolFishUpdSystemRewardDataList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishUpdSystemRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         */
        SuperToolFishUpdSystemRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolFishUpdSystemRewardDetail)
                return object;
            var message = new $root.tbnn.SuperToolFishUpdSystemRewardDetail();
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".tbnn.SuperToolFishUpdSystemRewardDetail.FishRewardList: array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".tbnn.SuperToolFishUpdSystemRewardDetail.FishRewardList: object expected");
                    message.FishRewardList[i] = $root.tbnn.SuperToolFishUpdSystemRewardDataList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishUpdSystemRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {tbnn.SuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail
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
                    object.FishRewardList[j] = $root.tbnn.SuperToolFishUpdSystemRewardDataList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishUpdSystemRewardDetail to JSON.
         * @function toJSON
         * @memberof tbnn.SuperToolFishUpdSystemRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdSystemRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdSystemRewardDetail;
    })();

    tbnn.SuperToolFishUpdSystemRewardDataList = (function() {

        /**
         * Properties of a SuperToolFishUpdSystemRewardDataList.
         * @memberof tbnn
         * @interface ISuperToolFishUpdSystemRewardDataList
         * @property {number|null} [FishID] SuperToolFishUpdSystemRewardDataList FishID
         * @property {number|Long|null} [FinishAmount] SuperToolFishUpdSystemRewardDataList FinishAmount
         */

        /**
         * Constructs a new SuperToolFishUpdSystemRewardDataList.
         * @memberof tbnn
         * @classdesc Represents a SuperToolFishUpdSystemRewardDataList.
         * @implements ISuperToolFishUpdSystemRewardDataList
         * @constructor
         * @param {tbnn.ISuperToolFishUpdSystemRewardDataList=} [properties] Properties to set
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
         * @memberof tbnn.SuperToolFishUpdSystemRewardDataList
         * @instance
         */
        SuperToolFishUpdSystemRewardDataList.prototype.FishID = 0;

        /**
         * SuperToolFishUpdSystemRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof tbnn.SuperToolFishUpdSystemRewardDataList
         * @instance
         */
        SuperToolFishUpdSystemRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolFishUpdSystemRewardDataList instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {tbnn.ISuperToolFishUpdSystemRewardDataList=} [properties] Properties to set
         * @returns {tbnn.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList instance
         */
        SuperToolFishUpdSystemRewardDataList.create = function create(properties) {
            return new SuperToolFishUpdSystemRewardDataList(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDataList message. Does not implicitly {@link tbnn.SuperToolFishUpdSystemRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {tbnn.ISuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FishID != null && message.hasOwnProperty("FishID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FishID);
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.FinishAmount);
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDataList message, length delimited. Does not implicitly {@link tbnn.SuperToolFishUpdSystemRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {tbnn.ISuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolFishUpdSystemRewardDataList();
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
            return message;
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
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
         * @memberof tbnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishUpdSystemRewardDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FishID != null && message.hasOwnProperty("FishID"))
                if (!$util.isInteger(message.FishID))
                    return "FishID: integer expected";
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                    return "FinishAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolFishUpdSystemRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         */
        SuperToolFishUpdSystemRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolFishUpdSystemRewardDataList)
                return object;
            var message = new $root.tbnn.SuperToolFishUpdSystemRewardDataList();
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
         * @memberof tbnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {tbnn.SuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList
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
                    object.FinishAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishAmount = options.longs === String ? "0" : 0;
            }
            if (message.FishID != null && message.hasOwnProperty("FishID"))
                object.FishID = message.FishID;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount = options.longs === String ? String(message.FinishAmount) : message.FinishAmount;
                else
                    object.FinishAmount = options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) : options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() : message.FinishAmount;
            return object;
        };

        /**
         * Converts this SuperToolFishUpdSystemRewardDataList to JSON.
         * @function toJSON
         * @memberof tbnn.SuperToolFishUpdSystemRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdSystemRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdSystemRewardDataList;
    })();

    tbnn.SuperToolfishUpdVIPUserRewardDetail = (function() {

        /**
         * Properties of a SuperToolfishUpdVIPUserRewardDetail.
         * @memberof tbnn
         * @interface ISuperToolfishUpdVIPUserRewardDetail
         * @property {number|null} [GameID] SuperToolfishUpdVIPUserRewardDetail GameID
         * @property {Array.<tbnn.ISuperToolFishUpdVIPUserRewardDataList>|null} [FishUserRewardList] SuperToolfishUpdVIPUserRewardDetail FishUserRewardList
         */

        /**
         * Constructs a new SuperToolfishUpdVIPUserRewardDetail.
         * @memberof tbnn
         * @classdesc Represents a SuperToolfishUpdVIPUserRewardDetail.
         * @implements ISuperToolfishUpdVIPUserRewardDetail
         * @constructor
         * @param {tbnn.ISuperToolfishUpdVIPUserRewardDetail=} [properties] Properties to set
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
         * @memberof tbnn.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.GameID = 0;

        /**
         * SuperToolfishUpdVIPUserRewardDetail FishUserRewardList.
         * @member {Array.<tbnn.ISuperToolFishUpdVIPUserRewardDataList>} FishUserRewardList
         * @memberof tbnn.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.FishUserRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolfishUpdVIPUserRewardDetail instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {tbnn.ISuperToolfishUpdVIPUserRewardDetail=} [properties] Properties to set
         * @returns {tbnn.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail instance
         */
        SuperToolfishUpdVIPUserRewardDetail.create = function create(properties) {
            return new SuperToolfishUpdVIPUserRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolfishUpdVIPUserRewardDetail message. Does not implicitly {@link tbnn.SuperToolfishUpdVIPUserRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {tbnn.ISuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolfishUpdVIPUserRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.FishUserRewardList != null && message.FishUserRewardList.length)
                for (var i = 0; i < message.FishUserRewardList.length; ++i)
                    $root.tbnn.SuperToolFishUpdVIPUserRewardDataList.encode(message.FishUserRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolfishUpdVIPUserRewardDetail message, length delimited. Does not implicitly {@link tbnn.SuperToolfishUpdVIPUserRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {tbnn.ISuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolfishUpdVIPUserRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolfishUpdVIPUserRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolfishUpdVIPUserRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolfishUpdVIPUserRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishUserRewardList && message.FishUserRewardList.length))
                        message.FishUserRewardList = [];
                    message.FishUserRewardList.push($root.tbnn.SuperToolFishUpdVIPUserRewardDataList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuperToolfishUpdVIPUserRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
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
         * @memberof tbnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolfishUpdVIPUserRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.FishUserRewardList != null && message.hasOwnProperty("FishUserRewardList")) {
                if (!Array.isArray(message.FishUserRewardList))
                    return "FishUserRewardList: array expected";
                for (var i = 0; i < message.FishUserRewardList.length; ++i) {
                    var error = $root.tbnn.SuperToolFishUpdVIPUserRewardDataList.verify(message.FishUserRewardList[i]);
                    if (error)
                        return "FishUserRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolfishUpdVIPUserRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         */
        SuperToolfishUpdVIPUserRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolfishUpdVIPUserRewardDetail)
                return object;
            var message = new $root.tbnn.SuperToolfishUpdVIPUserRewardDetail();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FishUserRewardList) {
                if (!Array.isArray(object.FishUserRewardList))
                    throw TypeError(".tbnn.SuperToolfishUpdVIPUserRewardDetail.FishUserRewardList: array expected");
                message.FishUserRewardList = [];
                for (var i = 0; i < object.FishUserRewardList.length; ++i) {
                    if (typeof object.FishUserRewardList[i] !== "object")
                        throw TypeError(".tbnn.SuperToolfishUpdVIPUserRewardDetail.FishUserRewardList: object expected");
                    message.FishUserRewardList[i] = $root.tbnn.SuperToolFishUpdVIPUserRewardDataList.fromObject(object.FishUserRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolfishUpdVIPUserRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {tbnn.SuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail
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
                    object.FishUserRewardList[j] = $root.tbnn.SuperToolFishUpdVIPUserRewardDataList.toObject(message.FishUserRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolfishUpdVIPUserRewardDetail to JSON.
         * @function toJSON
         * @memberof tbnn.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolfishUpdVIPUserRewardDetail;
    })();

    tbnn.SuperToolFishUpdVIPUserRewardDataList = (function() {

        /**
         * Properties of a SuperToolFishUpdVIPUserRewardDataList.
         * @memberof tbnn
         * @interface ISuperToolFishUpdVIPUserRewardDataList
         * @property {number|null} [UserID] SuperToolFishUpdVIPUserRewardDataList UserID
         * @property {number|Long|null} [FinishAmount] SuperToolFishUpdVIPUserRewardDataList FinishAmount
         */

        /**
         * Constructs a new SuperToolFishUpdVIPUserRewardDataList.
         * @memberof tbnn
         * @classdesc Represents a SuperToolFishUpdVIPUserRewardDataList.
         * @implements ISuperToolFishUpdVIPUserRewardDataList
         * @constructor
         * @param {tbnn.ISuperToolFishUpdVIPUserRewardDataList=} [properties] Properties to set
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
         * @memberof tbnn.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.UserID = 0;

        /**
         * SuperToolFishUpdVIPUserRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof tbnn.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolFishUpdVIPUserRewardDataList instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {tbnn.ISuperToolFishUpdVIPUserRewardDataList=} [properties] Properties to set
         * @returns {tbnn.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList instance
         */
        SuperToolFishUpdVIPUserRewardDataList.create = function create(properties) {
            return new SuperToolFishUpdVIPUserRewardDataList(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdVIPUserRewardDataList message. Does not implicitly {@link tbnn.SuperToolFishUpdVIPUserRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {tbnn.ISuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdVIPUserRewardDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.FinishAmount);
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishUpdVIPUserRewardDataList message, length delimited. Does not implicitly {@link tbnn.SuperToolFishUpdVIPUserRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {tbnn.ISuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdVIPUserRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdVIPUserRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdVIPUserRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolFishUpdVIPUserRewardDataList();
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
            return message;
        };

        /**
         * Decodes a SuperToolFishUpdVIPUserRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
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
         * @memberof tbnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishUpdVIPUserRewardDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                    return "FinishAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolFishUpdVIPUserRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         */
        SuperToolFishUpdVIPUserRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolFishUpdVIPUserRewardDataList)
                return object;
            var message = new $root.tbnn.SuperToolFishUpdVIPUserRewardDataList();
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
         * @memberof tbnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {tbnn.SuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList
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
                    object.FinishAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishAmount = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount = options.longs === String ? String(message.FinishAmount) : message.FinishAmount;
                else
                    object.FinishAmount = options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) : options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() : message.FinishAmount;
            return object;
        };

        /**
         * Converts this SuperToolFishUpdVIPUserRewardDataList to JSON.
         * @function toJSON
         * @memberof tbnn.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdVIPUserRewardDataList;
    })();

    tbnn.SuperToolZjhVipUserDataList = (function() {

        /**
         * Properties of a SuperToolZjhVipUserDataList.
         * @memberof tbnn
         * @interface ISuperToolZjhVipUserDataList
         * @property {Array.<tbnn.ISuperToolZjhVipUserData>|null} [DataList] SuperToolZjhVipUserDataList DataList
         */

        /**
         * Constructs a new SuperToolZjhVipUserDataList.
         * @memberof tbnn
         * @classdesc Represents a SuperToolZjhVipUserDataList.
         * @implements ISuperToolZjhVipUserDataList
         * @constructor
         * @param {tbnn.ISuperToolZjhVipUserDataList=} [properties] Properties to set
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
         * @member {Array.<tbnn.ISuperToolZjhVipUserData>} DataList
         * @memberof tbnn.SuperToolZjhVipUserDataList
         * @instance
         */
        SuperToolZjhVipUserDataList.prototype.DataList = $util.emptyArray;

        /**
         * Creates a new SuperToolZjhVipUserDataList instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolZjhVipUserDataList
         * @static
         * @param {tbnn.ISuperToolZjhVipUserDataList=} [properties] Properties to set
         * @returns {tbnn.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList instance
         */
        SuperToolZjhVipUserDataList.create = function create(properties) {
            return new SuperToolZjhVipUserDataList(properties);
        };

        /**
         * Encodes the specified SuperToolZjhVipUserDataList message. Does not implicitly {@link tbnn.SuperToolZjhVipUserDataList.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolZjhVipUserDataList
         * @static
         * @param {tbnn.ISuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DataList != null && message.DataList.length)
                for (var i = 0; i < message.DataList.length; ++i)
                    $root.tbnn.SuperToolZjhVipUserData.encode(message.DataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolZjhVipUserDataList message, length delimited. Does not implicitly {@link tbnn.SuperToolZjhVipUserDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolZjhVipUserDataList
         * @static
         * @param {tbnn.ISuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhVipUserDataList message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolZjhVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolZjhVipUserDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.DataList && message.DataList.length))
                        message.DataList = [];
                    message.DataList.push($root.tbnn.SuperToolZjhVipUserData.decode(reader, reader.uint32()));
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
         * @memberof tbnn.SuperToolZjhVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
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
         * @memberof tbnn.SuperToolZjhVipUserDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolZjhVipUserDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DataList != null && message.hasOwnProperty("DataList")) {
                if (!Array.isArray(message.DataList))
                    return "DataList: array expected";
                for (var i = 0; i < message.DataList.length; ++i) {
                    var error = $root.tbnn.SuperToolZjhVipUserData.verify(message.DataList[i]);
                    if (error)
                        return "DataList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolZjhVipUserDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolZjhVipUserDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         */
        SuperToolZjhVipUserDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolZjhVipUserDataList)
                return object;
            var message = new $root.tbnn.SuperToolZjhVipUserDataList();
            if (object.DataList) {
                if (!Array.isArray(object.DataList))
                    throw TypeError(".tbnn.SuperToolZjhVipUserDataList.DataList: array expected");
                message.DataList = [];
                for (var i = 0; i < object.DataList.length; ++i) {
                    if (typeof object.DataList[i] !== "object")
                        throw TypeError(".tbnn.SuperToolZjhVipUserDataList.DataList: object expected");
                    message.DataList[i] = $root.tbnn.SuperToolZjhVipUserData.fromObject(object.DataList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolZjhVipUserDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.SuperToolZjhVipUserDataList
         * @static
         * @param {tbnn.SuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList
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
                    object.DataList[j] = $root.tbnn.SuperToolZjhVipUserData.toObject(message.DataList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolZjhVipUserDataList to JSON.
         * @function toJSON
         * @memberof tbnn.SuperToolZjhVipUserDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhVipUserDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhVipUserDataList;
    })();

    tbnn.SuperToolZjhVipUserData = (function() {

        /**
         * Properties of a SuperToolZjhVipUserData.
         * @memberof tbnn
         * @interface ISuperToolZjhVipUserData
         * @property {number|null} [UserID] SuperToolZjhVipUserData UserID
         * @property {number|Long|null} [NextType] SuperToolZjhVipUserData NextType
         * @property {number|Long|null} [NextWinLose] SuperToolZjhVipUserData NextWinLose
         * @property {number|Long|null} [NextWinLoseNum] SuperToolZjhVipUserData NextWinLoseNum
         * @property {number|Long|null} [Finish] SuperToolZjhVipUserData Finish
         * @property {number|Long|null} [FinishNextWinLoseNum] SuperToolZjhVipUserData FinishNextWinLoseNum
         * @property {number|null} [NextTable] SuperToolZjhVipUserData NextTable
         * @property {number|null} [Status] SuperToolZjhVipUserData Status
         * @property {number|Long|null} [TodaySumcharge] SuperToolZjhVipUserData TodaySumcharge
         * @property {number|Long|null} [TodaySumConvert] SuperToolZjhVipUserData TodaySumConvert
         * @property {number|Long|null} [TodayUserWinLose] SuperToolZjhVipUserData TodayUserWinLose
         */

        /**
         * Constructs a new SuperToolZjhVipUserData.
         * @memberof tbnn
         * @classdesc Represents a SuperToolZjhVipUserData.
         * @implements ISuperToolZjhVipUserData
         * @constructor
         * @param {tbnn.ISuperToolZjhVipUserData=} [properties] Properties to set
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
         * @memberof tbnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.UserID = 0;

        /**
         * SuperToolZjhVipUserData NextType.
         * @member {number|Long} NextType
         * @memberof tbnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData NextWinLose.
         * @member {number|Long} NextWinLose
         * @memberof tbnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextWinLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData NextWinLoseNum.
         * @member {number|Long} NextWinLoseNum
         * @memberof tbnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData Finish.
         * @member {number|Long} Finish
         * @memberof tbnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.Finish = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData FinishNextWinLoseNum.
         * @member {number|Long} FinishNextWinLoseNum
         * @memberof tbnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.FinishNextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData NextTable.
         * @member {number} NextTable
         * @memberof tbnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextTable = 0;

        /**
         * SuperToolZjhVipUserData Status.
         * @member {number} Status
         * @memberof tbnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.Status = 0;

        /**
         * SuperToolZjhVipUserData TodaySumcharge.
         * @member {number|Long} TodaySumcharge
         * @memberof tbnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodaySumcharge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData TodaySumConvert.
         * @member {number|Long} TodaySumConvert
         * @memberof tbnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodaySumConvert = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData TodayUserWinLose.
         * @member {number|Long} TodayUserWinLose
         * @memberof tbnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodayUserWinLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolZjhVipUserData instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolZjhVipUserData
         * @static
         * @param {tbnn.ISuperToolZjhVipUserData=} [properties] Properties to set
         * @returns {tbnn.SuperToolZjhVipUserData} SuperToolZjhVipUserData instance
         */
        SuperToolZjhVipUserData.create = function create(properties) {
            return new SuperToolZjhVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolZjhVipUserData message. Does not implicitly {@link tbnn.SuperToolZjhVipUserData.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolZjhVipUserData
         * @static
         * @param {tbnn.ISuperToolZjhVipUserData} message SuperToolZjhVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.NextType);
            if (message.NextWinLose != null && message.hasOwnProperty("NextWinLose"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.NextWinLose);
            if (message.NextWinLoseNum != null && message.hasOwnProperty("NextWinLoseNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.NextWinLoseNum);
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.Finish);
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.FinishNextWinLoseNum);
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.NextTable);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.Status);
            if (message.TodaySumcharge != null && message.hasOwnProperty("TodaySumcharge"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.TodaySumcharge);
            if (message.TodaySumConvert != null && message.hasOwnProperty("TodaySumConvert"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.TodaySumConvert);
            if (message.TodayUserWinLose != null && message.hasOwnProperty("TodayUserWinLose"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.TodayUserWinLose);
            return writer;
        };

        /**
         * Encodes the specified SuperToolZjhVipUserData message, length delimited. Does not implicitly {@link tbnn.SuperToolZjhVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolZjhVipUserData
         * @static
         * @param {tbnn.ISuperToolZjhVipUserData} message SuperToolZjhVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolZjhVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolZjhVipUserData();
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
            return message;
        };

        /**
         * Decodes a SuperToolZjhVipUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperToolZjhVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolZjhVipUserData} SuperToolZjhVipUserData
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
         * @memberof tbnn.SuperToolZjhVipUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolZjhVipUserData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                if (!$util.isInteger(message.NextType) && !(message.NextType && $util.isInteger(message.NextType.low) && $util.isInteger(message.NextType.high)))
                    return "NextType: integer|Long expected";
            if (message.NextWinLose != null && message.hasOwnProperty("NextWinLose"))
                if (!$util.isInteger(message.NextWinLose) && !(message.NextWinLose && $util.isInteger(message.NextWinLose.low) && $util.isInteger(message.NextWinLose.high)))
                    return "NextWinLose: integer|Long expected";
            if (message.NextWinLoseNum != null && message.hasOwnProperty("NextWinLoseNum"))
                if (!$util.isInteger(message.NextWinLoseNum) && !(message.NextWinLoseNum && $util.isInteger(message.NextWinLoseNum.low) && $util.isInteger(message.NextWinLoseNum.high)))
                    return "NextWinLoseNum: integer|Long expected";
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                if (!$util.isInteger(message.Finish) && !(message.Finish && $util.isInteger(message.Finish.low) && $util.isInteger(message.Finish.high)))
                    return "Finish: integer|Long expected";
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                if (!$util.isInteger(message.FinishNextWinLoseNum) && !(message.FinishNextWinLoseNum && $util.isInteger(message.FinishNextWinLoseNum.low) && $util.isInteger(message.FinishNextWinLoseNum.high)))
                    return "FinishNextWinLoseNum: integer|Long expected";
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                if (!$util.isInteger(message.NextTable))
                    return "NextTable: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isInteger(message.Status))
                    return "Status: integer expected";
            if (message.TodaySumcharge != null && message.hasOwnProperty("TodaySumcharge"))
                if (!$util.isInteger(message.TodaySumcharge) && !(message.TodaySumcharge && $util.isInteger(message.TodaySumcharge.low) && $util.isInteger(message.TodaySumcharge.high)))
                    return "TodaySumcharge: integer|Long expected";
            if (message.TodaySumConvert != null && message.hasOwnProperty("TodaySumConvert"))
                if (!$util.isInteger(message.TodaySumConvert) && !(message.TodaySumConvert && $util.isInteger(message.TodaySumConvert.low) && $util.isInteger(message.TodaySumConvert.high)))
                    return "TodaySumConvert: integer|Long expected";
            if (message.TodayUserWinLose != null && message.hasOwnProperty("TodayUserWinLose"))
                if (!$util.isInteger(message.TodayUserWinLose) && !(message.TodayUserWinLose && $util.isInteger(message.TodayUserWinLose.low) && $util.isInteger(message.TodayUserWinLose.high)))
                    return "TodayUserWinLose: integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolZjhVipUserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperToolZjhVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         */
        SuperToolZjhVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolZjhVipUserData)
                return object;
            var message = new $root.tbnn.SuperToolZjhVipUserData();
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
         * @memberof tbnn.SuperToolZjhVipUserData
         * @static
         * @param {tbnn.SuperToolZjhVipUserData} message SuperToolZjhVipUserData
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
                    object.NextType = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NextType = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.NextWinLose = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NextWinLose = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.NextWinLoseNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NextWinLoseNum = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Finish = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Finish = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishNextWinLoseNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishNextWinLoseNum = options.longs === String ? "0" : 0;
                object.NextTable = 0;
                object.Status = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TodaySumcharge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TodaySumcharge = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TodaySumConvert = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TodaySumConvert = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TodayUserWinLose = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TodayUserWinLose = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                if (typeof message.NextType === "number")
                    object.NextType = options.longs === String ? String(message.NextType) : message.NextType;
                else
                    object.NextType = options.longs === String ? $util.Long.prototype.toString.call(message.NextType) : options.longs === Number ? new $util.LongBits(message.NextType.low >>> 0, message.NextType.high >>> 0).toNumber() : message.NextType;
            if (message.NextWinLose != null && message.hasOwnProperty("NextWinLose"))
                if (typeof message.NextWinLose === "number")
                    object.NextWinLose = options.longs === String ? String(message.NextWinLose) : message.NextWinLose;
                else
                    object.NextWinLose = options.longs === String ? $util.Long.prototype.toString.call(message.NextWinLose) : options.longs === Number ? new $util.LongBits(message.NextWinLose.low >>> 0, message.NextWinLose.high >>> 0).toNumber() : message.NextWinLose;
            if (message.NextWinLoseNum != null && message.hasOwnProperty("NextWinLoseNum"))
                if (typeof message.NextWinLoseNum === "number")
                    object.NextWinLoseNum = options.longs === String ? String(message.NextWinLoseNum) : message.NextWinLoseNum;
                else
                    object.NextWinLoseNum = options.longs === String ? $util.Long.prototype.toString.call(message.NextWinLoseNum) : options.longs === Number ? new $util.LongBits(message.NextWinLoseNum.low >>> 0, message.NextWinLoseNum.high >>> 0).toNumber() : message.NextWinLoseNum;
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                if (typeof message.Finish === "number")
                    object.Finish = options.longs === String ? String(message.Finish) : message.Finish;
                else
                    object.Finish = options.longs === String ? $util.Long.prototype.toString.call(message.Finish) : options.longs === Number ? new $util.LongBits(message.Finish.low >>> 0, message.Finish.high >>> 0).toNumber() : message.Finish;
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                if (typeof message.FinishNextWinLoseNum === "number")
                    object.FinishNextWinLoseNum = options.longs === String ? String(message.FinishNextWinLoseNum) : message.FinishNextWinLoseNum;
                else
                    object.FinishNextWinLoseNum = options.longs === String ? $util.Long.prototype.toString.call(message.FinishNextWinLoseNum) : options.longs === Number ? new $util.LongBits(message.FinishNextWinLoseNum.low >>> 0, message.FinishNextWinLoseNum.high >>> 0).toNumber() : message.FinishNextWinLoseNum;
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                object.NextTable = message.NextTable;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.TodaySumcharge != null && message.hasOwnProperty("TodaySumcharge"))
                if (typeof message.TodaySumcharge === "number")
                    object.TodaySumcharge = options.longs === String ? String(message.TodaySumcharge) : message.TodaySumcharge;
                else
                    object.TodaySumcharge = options.longs === String ? $util.Long.prototype.toString.call(message.TodaySumcharge) : options.longs === Number ? new $util.LongBits(message.TodaySumcharge.low >>> 0, message.TodaySumcharge.high >>> 0).toNumber() : message.TodaySumcharge;
            if (message.TodaySumConvert != null && message.hasOwnProperty("TodaySumConvert"))
                if (typeof message.TodaySumConvert === "number")
                    object.TodaySumConvert = options.longs === String ? String(message.TodaySumConvert) : message.TodaySumConvert;
                else
                    object.TodaySumConvert = options.longs === String ? $util.Long.prototype.toString.call(message.TodaySumConvert) : options.longs === Number ? new $util.LongBits(message.TodaySumConvert.low >>> 0, message.TodaySumConvert.high >>> 0).toNumber() : message.TodaySumConvert;
            if (message.TodayUserWinLose != null && message.hasOwnProperty("TodayUserWinLose"))
                if (typeof message.TodayUserWinLose === "number")
                    object.TodayUserWinLose = options.longs === String ? String(message.TodayUserWinLose) : message.TodayUserWinLose;
                else
                    object.TodayUserWinLose = options.longs === String ? $util.Long.prototype.toString.call(message.TodayUserWinLose) : options.longs === Number ? new $util.LongBits(message.TodayUserWinLose.low >>> 0, message.TodayUserWinLose.high >>> 0).toNumber() : message.TodayUserWinLose;
            return object;
        };

        /**
         * Converts this SuperToolZjhVipUserData to JSON.
         * @function toJSON
         * @memberof tbnn.SuperToolZjhVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhVipUserData;
    })();

    tbnn.SuperToolZjhUpdVipUserData = (function() {

        /**
         * Properties of a SuperToolZjhUpdVipUserData.
         * @memberof tbnn
         * @interface ISuperToolZjhUpdVipUserData
         * @property {number|null} [UserID] SuperToolZjhUpdVipUserData UserID
         * @property {number|Long|null} [Finish] SuperToolZjhUpdVipUserData Finish
         * @property {number|Long|null} [FinishNextWinLoseNum] SuperToolZjhUpdVipUserData FinishNextWinLoseNum
         * @property {number|null} [NextTable] SuperToolZjhUpdVipUserData NextTable
         * @property {number|Long|null} [NextType] SuperToolZjhUpdVipUserData NextType
         */

        /**
         * Constructs a new SuperToolZjhUpdVipUserData.
         * @memberof tbnn
         * @classdesc Represents a SuperToolZjhUpdVipUserData.
         * @implements ISuperToolZjhUpdVipUserData
         * @constructor
         * @param {tbnn.ISuperToolZjhUpdVipUserData=} [properties] Properties to set
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
         * @memberof tbnn.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.UserID = 0;

        /**
         * SuperToolZjhUpdVipUserData Finish.
         * @member {number|Long} Finish
         * @memberof tbnn.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.Finish = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhUpdVipUserData FinishNextWinLoseNum.
         * @member {number|Long} FinishNextWinLoseNum
         * @memberof tbnn.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.FinishNextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhUpdVipUserData NextTable.
         * @member {number} NextTable
         * @memberof tbnn.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.NextTable = 0;

        /**
         * SuperToolZjhUpdVipUserData NextType.
         * @member {number|Long} NextType
         * @memberof tbnn.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.NextType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolZjhUpdVipUserData instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {tbnn.ISuperToolZjhUpdVipUserData=} [properties] Properties to set
         * @returns {tbnn.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData instance
         */
        SuperToolZjhUpdVipUserData.create = function create(properties) {
            return new SuperToolZjhUpdVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolZjhUpdVipUserData message. Does not implicitly {@link tbnn.SuperToolZjhUpdVipUserData.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {tbnn.ISuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhUpdVipUserData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
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
         * Encodes the specified SuperToolZjhUpdVipUserData message, length delimited. Does not implicitly {@link tbnn.SuperToolZjhUpdVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {tbnn.ISuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhUpdVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhUpdVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhUpdVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperToolZjhUpdVipUserData();
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
            return message;
        };

        /**
         * Decodes a SuperToolZjhUpdVipUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
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
         * @memberof tbnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolZjhUpdVipUserData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
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
         * @memberof tbnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         */
        SuperToolZjhUpdVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperToolZjhUpdVipUserData)
                return object;
            var message = new $root.tbnn.SuperToolZjhUpdVipUserData();
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
         * @memberof tbnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {tbnn.SuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData
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
                    object.Finish = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Finish = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishNextWinLoseNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishNextWinLoseNum = options.longs === String ? "0" : 0;
                object.NextTable = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.NextType = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NextType = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                if (typeof message.Finish === "number")
                    object.Finish = options.longs === String ? String(message.Finish) : message.Finish;
                else
                    object.Finish = options.longs === String ? $util.Long.prototype.toString.call(message.Finish) : options.longs === Number ? new $util.LongBits(message.Finish.low >>> 0, message.Finish.high >>> 0).toNumber() : message.Finish;
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                if (typeof message.FinishNextWinLoseNum === "number")
                    object.FinishNextWinLoseNum = options.longs === String ? String(message.FinishNextWinLoseNum) : message.FinishNextWinLoseNum;
                else
                    object.FinishNextWinLoseNum = options.longs === String ? $util.Long.prototype.toString.call(message.FinishNextWinLoseNum) : options.longs === Number ? new $util.LongBits(message.FinishNextWinLoseNum.low >>> 0, message.FinishNextWinLoseNum.high >>> 0).toNumber() : message.FinishNextWinLoseNum;
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                object.NextTable = message.NextTable;
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                if (typeof message.NextType === "number")
                    object.NextType = options.longs === String ? String(message.NextType) : message.NextType;
                else
                    object.NextType = options.longs === String ? $util.Long.prototype.toString.call(message.NextType) : options.longs === Number ? new $util.LongBits(message.NextType.low >>> 0, message.NextType.high >>> 0).toNumber() : message.NextType;
            return object;
        };

        /**
         * Converts this SuperToolZjhUpdVipUserData to JSON.
         * @function toJSON
         * @memberof tbnn.SuperToolZjhUpdVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhUpdVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhUpdVipUserData;
    })();

    tbnn.FishSysPoolData = (function() {

        /**
         * Properties of a FishSysPoolData.
         * @memberof tbnn
         * @interface IFishSysPoolData
         * @property {number|null} [FlagID] FishSysPoolData FlagID
         * @property {number|Long|null} [SumBetMoney] FishSysPoolData SumBetMoney
         * @property {number|Long|null} [SumBullet] FishSysPoolData SumBullet
         * @property {number|Long|null} [SysSumWinLoss] FishSysPoolData SysSumWinLoss
         * @property {number|Long|null} [AfterAdjustSyspoolWinLoss] FishSysPoolData AfterAdjustSyspoolWinLoss
         * @property {number|Long|null} [PoolAmount] FishSysPoolData PoolAmount
         */

        /**
         * Constructs a new FishSysPoolData.
         * @memberof tbnn
         * @classdesc Represents a FishSysPoolData.
         * @implements IFishSysPoolData
         * @constructor
         * @param {tbnn.IFishSysPoolData=} [properties] Properties to set
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
         * @memberof tbnn.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.FlagID = 0;

        /**
         * FishSysPoolData SumBetMoney.
         * @member {number|Long} SumBetMoney
         * @memberof tbnn.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SumBetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData SumBullet.
         * @member {number|Long} SumBullet
         * @memberof tbnn.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SumBullet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData SysSumWinLoss.
         * @member {number|Long} SysSumWinLoss
         * @memberof tbnn.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SysSumWinLoss = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData AfterAdjustSyspoolWinLoss.
         * @member {number|Long} AfterAdjustSyspoolWinLoss
         * @memberof tbnn.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.AfterAdjustSyspoolWinLoss = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof tbnn.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FishSysPoolData instance using the specified properties.
         * @function create
         * @memberof tbnn.FishSysPoolData
         * @static
         * @param {tbnn.IFishSysPoolData=} [properties] Properties to set
         * @returns {tbnn.FishSysPoolData} FishSysPoolData instance
         */
        FishSysPoolData.create = function create(properties) {
            return new FishSysPoolData(properties);
        };

        /**
         * Encodes the specified FishSysPoolData message. Does not implicitly {@link tbnn.FishSysPoolData.verify|verify} messages.
         * @function encode
         * @memberof tbnn.FishSysPoolData
         * @static
         * @param {tbnn.IFishSysPoolData} message FishSysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSysPoolData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            if (message.SumBetMoney != null && message.hasOwnProperty("SumBetMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SumBetMoney);
            if (message.SumBullet != null && message.hasOwnProperty("SumBullet"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.SumBullet);
            if (message.SysSumWinLoss != null && message.hasOwnProperty("SysSumWinLoss"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.SysSumWinLoss);
            if (message.AfterAdjustSyspoolWinLoss != null && message.hasOwnProperty("AfterAdjustSyspoolWinLoss"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.AfterAdjustSyspoolWinLoss);
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.PoolAmount);
            return writer;
        };

        /**
         * Encodes the specified FishSysPoolData message, length delimited. Does not implicitly {@link tbnn.FishSysPoolData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.FishSysPoolData
         * @static
         * @param {tbnn.IFishSysPoolData} message FishSysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSysPoolData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishSysPoolData message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.FishSysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.FishSysPoolData} FishSysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSysPoolData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.FishSysPoolData();
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
            return message;
        };

        /**
         * Decodes a FishSysPoolData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.FishSysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.FishSysPoolData} FishSysPoolData
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
         * @memberof tbnn.FishSysPoolData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishSysPoolData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                if (!$util.isInteger(message.FlagID))
                    return "FlagID: integer expected";
            if (message.SumBetMoney != null && message.hasOwnProperty("SumBetMoney"))
                if (!$util.isInteger(message.SumBetMoney) && !(message.SumBetMoney && $util.isInteger(message.SumBetMoney.low) && $util.isInteger(message.SumBetMoney.high)))
                    return "SumBetMoney: integer|Long expected";
            if (message.SumBullet != null && message.hasOwnProperty("SumBullet"))
                if (!$util.isInteger(message.SumBullet) && !(message.SumBullet && $util.isInteger(message.SumBullet.low) && $util.isInteger(message.SumBullet.high)))
                    return "SumBullet: integer|Long expected";
            if (message.SysSumWinLoss != null && message.hasOwnProperty("SysSumWinLoss"))
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
         * @memberof tbnn.FishSysPoolData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.FishSysPoolData} FishSysPoolData
         */
        FishSysPoolData.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.FishSysPoolData)
                return object;
            var message = new $root.tbnn.FishSysPoolData();
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
         * @memberof tbnn.FishSysPoolData
         * @static
         * @param {tbnn.FishSysPoolData} message FishSysPoolData
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
                    object.SumBetMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumBetMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumBullet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumBullet = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SysSumWinLoss = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SysSumWinLoss = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AfterAdjustSyspoolWinLoss = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AfterAdjustSyspoolWinLoss = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PoolAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolAmount = options.longs === String ? "0" : 0;
            }
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.SumBetMoney != null && message.hasOwnProperty("SumBetMoney"))
                if (typeof message.SumBetMoney === "number")
                    object.SumBetMoney = options.longs === String ? String(message.SumBetMoney) : message.SumBetMoney;
                else
                    object.SumBetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.SumBetMoney) : options.longs === Number ? new $util.LongBits(message.SumBetMoney.low >>> 0, message.SumBetMoney.high >>> 0).toNumber() : message.SumBetMoney;
            if (message.SumBullet != null && message.hasOwnProperty("SumBullet"))
                if (typeof message.SumBullet === "number")
                    object.SumBullet = options.longs === String ? String(message.SumBullet) : message.SumBullet;
                else
                    object.SumBullet = options.longs === String ? $util.Long.prototype.toString.call(message.SumBullet) : options.longs === Number ? new $util.LongBits(message.SumBullet.low >>> 0, message.SumBullet.high >>> 0).toNumber() : message.SumBullet;
            if (message.SysSumWinLoss != null && message.hasOwnProperty("SysSumWinLoss"))
                if (typeof message.SysSumWinLoss === "number")
                    object.SysSumWinLoss = options.longs === String ? String(message.SysSumWinLoss) : message.SysSumWinLoss;
                else
                    object.SysSumWinLoss = options.longs === String ? $util.Long.prototype.toString.call(message.SysSumWinLoss) : options.longs === Number ? new $util.LongBits(message.SysSumWinLoss.low >>> 0, message.SysSumWinLoss.high >>> 0).toNumber() : message.SysSumWinLoss;
            if (message.AfterAdjustSyspoolWinLoss != null && message.hasOwnProperty("AfterAdjustSyspoolWinLoss"))
                if (typeof message.AfterAdjustSyspoolWinLoss === "number")
                    object.AfterAdjustSyspoolWinLoss = options.longs === String ? String(message.AfterAdjustSyspoolWinLoss) : message.AfterAdjustSyspoolWinLoss;
                else
                    object.AfterAdjustSyspoolWinLoss = options.longs === String ? $util.Long.prototype.toString.call(message.AfterAdjustSyspoolWinLoss) : options.longs === Number ? new $util.LongBits(message.AfterAdjustSyspoolWinLoss.low >>> 0, message.AfterAdjustSyspoolWinLoss.high >>> 0).toNumber() : message.AfterAdjustSyspoolWinLoss;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount = options.longs === String ? String(message.PoolAmount) : message.PoolAmount;
                else
                    object.PoolAmount = options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) : options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() : message.PoolAmount;
            return object;
        };

        /**
         * Converts this FishSysPoolData to JSON.
         * @function toJSON
         * @memberof tbnn.FishSysPoolData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishSysPoolData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishSysPoolData;
    })();

    tbnn.FishPlayerPoolDetail = (function() {

        /**
         * Properties of a FishPlayerPoolDetail.
         * @memberof tbnn
         * @interface IFishPlayerPoolDetail
         * @property {number|null} [FlagID] FishPlayerPoolDetail FlagID
         * @property {Array.<tbnn.IFishPlayerPoolDetailList>|null} [FishRewardList] FishPlayerPoolDetail FishRewardList
         */

        /**
         * Constructs a new FishPlayerPoolDetail.
         * @memberof tbnn
         * @classdesc Represents a FishPlayerPoolDetail.
         * @implements IFishPlayerPoolDetail
         * @constructor
         * @param {tbnn.IFishPlayerPoolDetail=} [properties] Properties to set
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
         * @memberof tbnn.FishPlayerPoolDetail
         * @instance
         */
        FishPlayerPoolDetail.prototype.FlagID = 0;

        /**
         * FishPlayerPoolDetail FishRewardList.
         * @member {Array.<tbnn.IFishPlayerPoolDetailList>} FishRewardList
         * @memberof tbnn.FishPlayerPoolDetail
         * @instance
         */
        FishPlayerPoolDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new FishPlayerPoolDetail instance using the specified properties.
         * @function create
         * @memberof tbnn.FishPlayerPoolDetail
         * @static
         * @param {tbnn.IFishPlayerPoolDetail=} [properties] Properties to set
         * @returns {tbnn.FishPlayerPoolDetail} FishPlayerPoolDetail instance
         */
        FishPlayerPoolDetail.create = function create(properties) {
            return new FishPlayerPoolDetail(properties);
        };

        /**
         * Encodes the specified FishPlayerPoolDetail message. Does not implicitly {@link tbnn.FishPlayerPoolDetail.verify|verify} messages.
         * @function encode
         * @memberof tbnn.FishPlayerPoolDetail
         * @static
         * @param {tbnn.IFishPlayerPoolDetail} message FishPlayerPoolDetail message or plain object to encode
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
                    $root.tbnn.FishPlayerPoolDetailList.encode(message.FishRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FishPlayerPoolDetail message, length delimited. Does not implicitly {@link tbnn.FishPlayerPoolDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.FishPlayerPoolDetail
         * @static
         * @param {tbnn.IFishPlayerPoolDetail} message FishPlayerPoolDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishPlayerPoolDetail message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.FishPlayerPoolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.FishPlayerPoolDetail} FishPlayerPoolDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.FishPlayerPoolDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FlagID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.tbnn.FishPlayerPoolDetailList.decode(reader, reader.uint32()));
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
         * @memberof tbnn.FishPlayerPoolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.FishPlayerPoolDetail} FishPlayerPoolDetail
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
         * @memberof tbnn.FishPlayerPoolDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishPlayerPoolDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                if (!$util.isInteger(message.FlagID))
                    return "FlagID: integer expected";
            if (message.FishRewardList != null && message.hasOwnProperty("FishRewardList")) {
                if (!Array.isArray(message.FishRewardList))
                    return "FishRewardList: array expected";
                for (var i = 0; i < message.FishRewardList.length; ++i) {
                    var error = $root.tbnn.FishPlayerPoolDetailList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FishPlayerPoolDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.FishPlayerPoolDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.FishPlayerPoolDetail} FishPlayerPoolDetail
         */
        FishPlayerPoolDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.FishPlayerPoolDetail)
                return object;
            var message = new $root.tbnn.FishPlayerPoolDetail();
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".tbnn.FishPlayerPoolDetail.FishRewardList: array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".tbnn.FishPlayerPoolDetail.FishRewardList: object expected");
                    message.FishRewardList[i] = $root.tbnn.FishPlayerPoolDetailList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FishPlayerPoolDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.FishPlayerPoolDetail
         * @static
         * @param {tbnn.FishPlayerPoolDetail} message FishPlayerPoolDetail
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
                    object.FishRewardList[j] = $root.tbnn.FishPlayerPoolDetailList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this FishPlayerPoolDetail to JSON.
         * @function toJSON
         * @memberof tbnn.FishPlayerPoolDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishPlayerPoolDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishPlayerPoolDetail;
    })();

    tbnn.FishPlayerPoolDetailList = (function() {

        /**
         * Properties of a FishPlayerPoolDetailList.
         * @memberof tbnn
         * @interface IFishPlayerPoolDetailList
         * @property {number|null} [UserID] FishPlayerPoolDetailList UserID
         * @property {number|Long|null} [HitMoney] FishPlayerPoolDetailList HitMoney
         * @property {number|Long|null} [SpendMoney] FishPlayerPoolDetailList SpendMoney
         */

        /**
         * Constructs a new FishPlayerPoolDetailList.
         * @memberof tbnn
         * @classdesc Represents a FishPlayerPoolDetailList.
         * @implements IFishPlayerPoolDetailList
         * @constructor
         * @param {tbnn.IFishPlayerPoolDetailList=} [properties] Properties to set
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
         * @memberof tbnn.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.UserID = 0;

        /**
         * FishPlayerPoolDetailList HitMoney.
         * @member {number|Long} HitMoney
         * @memberof tbnn.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.HitMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishPlayerPoolDetailList SpendMoney.
         * @member {number|Long} SpendMoney
         * @memberof tbnn.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.SpendMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FishPlayerPoolDetailList instance using the specified properties.
         * @function create
         * @memberof tbnn.FishPlayerPoolDetailList
         * @static
         * @param {tbnn.IFishPlayerPoolDetailList=} [properties] Properties to set
         * @returns {tbnn.FishPlayerPoolDetailList} FishPlayerPoolDetailList instance
         */
        FishPlayerPoolDetailList.create = function create(properties) {
            return new FishPlayerPoolDetailList(properties);
        };

        /**
         * Encodes the specified FishPlayerPoolDetailList message. Does not implicitly {@link tbnn.FishPlayerPoolDetailList.verify|verify} messages.
         * @function encode
         * @memberof tbnn.FishPlayerPoolDetailList
         * @static
         * @param {tbnn.IFishPlayerPoolDetailList} message FishPlayerPoolDetailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetailList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.HitMoney != null && message.hasOwnProperty("HitMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.HitMoney);
            if (message.SpendMoney != null && message.hasOwnProperty("SpendMoney"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.SpendMoney);
            return writer;
        };

        /**
         * Encodes the specified FishPlayerPoolDetailList message, length delimited. Does not implicitly {@link tbnn.FishPlayerPoolDetailList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.FishPlayerPoolDetailList
         * @static
         * @param {tbnn.IFishPlayerPoolDetailList} message FishPlayerPoolDetailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetailList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishPlayerPoolDetailList message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.FishPlayerPoolDetailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetailList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.FishPlayerPoolDetailList();
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
            return message;
        };

        /**
         * Decodes a FishPlayerPoolDetailList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.FishPlayerPoolDetailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.FishPlayerPoolDetailList} FishPlayerPoolDetailList
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
         * @memberof tbnn.FishPlayerPoolDetailList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishPlayerPoolDetailList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.HitMoney != null && message.hasOwnProperty("HitMoney"))
                if (!$util.isInteger(message.HitMoney) && !(message.HitMoney && $util.isInteger(message.HitMoney.low) && $util.isInteger(message.HitMoney.high)))
                    return "HitMoney: integer|Long expected";
            if (message.SpendMoney != null && message.hasOwnProperty("SpendMoney"))
                if (!$util.isInteger(message.SpendMoney) && !(message.SpendMoney && $util.isInteger(message.SpendMoney.low) && $util.isInteger(message.SpendMoney.high)))
                    return "SpendMoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a FishPlayerPoolDetailList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.FishPlayerPoolDetailList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         */
        FishPlayerPoolDetailList.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.FishPlayerPoolDetailList)
                return object;
            var message = new $root.tbnn.FishPlayerPoolDetailList();
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
         * @memberof tbnn.FishPlayerPoolDetailList
         * @static
         * @param {tbnn.FishPlayerPoolDetailList} message FishPlayerPoolDetailList
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
                    object.HitMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HitMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SpendMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SpendMoney = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.HitMoney != null && message.hasOwnProperty("HitMoney"))
                if (typeof message.HitMoney === "number")
                    object.HitMoney = options.longs === String ? String(message.HitMoney) : message.HitMoney;
                else
                    object.HitMoney = options.longs === String ? $util.Long.prototype.toString.call(message.HitMoney) : options.longs === Number ? new $util.LongBits(message.HitMoney.low >>> 0, message.HitMoney.high >>> 0).toNumber() : message.HitMoney;
            if (message.SpendMoney != null && message.hasOwnProperty("SpendMoney"))
                if (typeof message.SpendMoney === "number")
                    object.SpendMoney = options.longs === String ? String(message.SpendMoney) : message.SpendMoney;
                else
                    object.SpendMoney = options.longs === String ? $util.Long.prototype.toString.call(message.SpendMoney) : options.longs === Number ? new $util.LongBits(message.SpendMoney.low >>> 0, message.SpendMoney.high >>> 0).toNumber() : message.SpendMoney;
            return object;
        };

        /**
         * Converts this FishPlayerPoolDetailList to JSON.
         * @function toJSON
         * @memberof tbnn.FishPlayerPoolDetailList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishPlayerPoolDetailList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishPlayerPoolDetailList;
    })();

    tbnn.FindFishBeginnerOfferByUserID = (function() {

        /**
         * Properties of a FindFishBeginnerOfferByUserID.
         * @memberof tbnn
         * @interface IFindFishBeginnerOfferByUserID
         * @property {number|null} [UserID] FindFishBeginnerOfferByUserID UserID
         * @property {number|null} [NewPlayerAdjustSyspool] FindFishBeginnerOfferByUserID NewPlayerAdjustSyspool
         */

        /**
         * Constructs a new FindFishBeginnerOfferByUserID.
         * @memberof tbnn
         * @classdesc Represents a FindFishBeginnerOfferByUserID.
         * @implements IFindFishBeginnerOfferByUserID
         * @constructor
         * @param {tbnn.IFindFishBeginnerOfferByUserID=} [properties] Properties to set
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
         * @memberof tbnn.FindFishBeginnerOfferByUserID
         * @instance
         */
        FindFishBeginnerOfferByUserID.prototype.UserID = 0;

        /**
         * FindFishBeginnerOfferByUserID NewPlayerAdjustSyspool.
         * @member {number} NewPlayerAdjustSyspool
         * @memberof tbnn.FindFishBeginnerOfferByUserID
         * @instance
         */
        FindFishBeginnerOfferByUserID.prototype.NewPlayerAdjustSyspool = 0;

        /**
         * Creates a new FindFishBeginnerOfferByUserID instance using the specified properties.
         * @function create
         * @memberof tbnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {tbnn.IFindFishBeginnerOfferByUserID=} [properties] Properties to set
         * @returns {tbnn.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID instance
         */
        FindFishBeginnerOfferByUserID.create = function create(properties) {
            return new FindFishBeginnerOfferByUserID(properties);
        };

        /**
         * Encodes the specified FindFishBeginnerOfferByUserID message. Does not implicitly {@link tbnn.FindFishBeginnerOfferByUserID.verify|verify} messages.
         * @function encode
         * @memberof tbnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {tbnn.IFindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindFishBeginnerOfferByUserID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.NewPlayerAdjustSyspool);
            return writer;
        };

        /**
         * Encodes the specified FindFishBeginnerOfferByUserID message, length delimited. Does not implicitly {@link tbnn.FindFishBeginnerOfferByUserID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {tbnn.IFindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindFishBeginnerOfferByUserID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindFishBeginnerOfferByUserID message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindFishBeginnerOfferByUserID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.FindFishBeginnerOfferByUserID();
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
            return message;
        };

        /**
         * Decodes a FindFishBeginnerOfferByUserID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
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
         * @memberof tbnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindFishBeginnerOfferByUserID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
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
         * @memberof tbnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         */
        FindFishBeginnerOfferByUserID.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.FindFishBeginnerOfferByUserID)
                return object;
            var message = new $root.tbnn.FindFishBeginnerOfferByUserID();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.NewPlayerAdjustSyspool != null)
                message.NewPlayerAdjustSyspool = object.NewPlayerAdjustSyspool | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindFishBeginnerOfferByUserID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {tbnn.FindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID
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
         * @memberof tbnn.FindFishBeginnerOfferByUserID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindFishBeginnerOfferByUserID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FindFishBeginnerOfferByUserID;
    })();

    tbnn.FishBeginnerOfferDetail = (function() {

        /**
         * Properties of a FishBeginnerOfferDetail.
         * @memberof tbnn
         * @interface IFishBeginnerOfferDetail
         * @property {Array.<tbnn.IFishBeginnerOffer>|null} [NewPlayerList] FishBeginnerOfferDetail NewPlayerList
         * @property {number|null} [NewPlayerAdjustSyspool] FishBeginnerOfferDetail NewPlayerAdjustSyspool
         */

        /**
         * Constructs a new FishBeginnerOfferDetail.
         * @memberof tbnn
         * @classdesc Represents a FishBeginnerOfferDetail.
         * @implements IFishBeginnerOfferDetail
         * @constructor
         * @param {tbnn.IFishBeginnerOfferDetail=} [properties] Properties to set
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
         * @member {Array.<tbnn.IFishBeginnerOffer>} NewPlayerList
         * @memberof tbnn.FishBeginnerOfferDetail
         * @instance
         */
        FishBeginnerOfferDetail.prototype.NewPlayerList = $util.emptyArray;

        /**
         * FishBeginnerOfferDetail NewPlayerAdjustSyspool.
         * @member {number} NewPlayerAdjustSyspool
         * @memberof tbnn.FishBeginnerOfferDetail
         * @instance
         */
        FishBeginnerOfferDetail.prototype.NewPlayerAdjustSyspool = 0;

        /**
         * Creates a new FishBeginnerOfferDetail instance using the specified properties.
         * @function create
         * @memberof tbnn.FishBeginnerOfferDetail
         * @static
         * @param {tbnn.IFishBeginnerOfferDetail=} [properties] Properties to set
         * @returns {tbnn.FishBeginnerOfferDetail} FishBeginnerOfferDetail instance
         */
        FishBeginnerOfferDetail.create = function create(properties) {
            return new FishBeginnerOfferDetail(properties);
        };

        /**
         * Encodes the specified FishBeginnerOfferDetail message. Does not implicitly {@link tbnn.FishBeginnerOfferDetail.verify|verify} messages.
         * @function encode
         * @memberof tbnn.FishBeginnerOfferDetail
         * @static
         * @param {tbnn.IFishBeginnerOfferDetail} message FishBeginnerOfferDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOfferDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NewPlayerList != null && message.NewPlayerList.length)
                for (var i = 0; i < message.NewPlayerList.length; ++i)
                    $root.tbnn.FishBeginnerOffer.encode(message.NewPlayerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.NewPlayerAdjustSyspool);
            return writer;
        };

        /**
         * Encodes the specified FishBeginnerOfferDetail message, length delimited. Does not implicitly {@link tbnn.FishBeginnerOfferDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.FishBeginnerOfferDetail
         * @static
         * @param {tbnn.IFishBeginnerOfferDetail} message FishBeginnerOfferDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOfferDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishBeginnerOfferDetail message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.FishBeginnerOfferDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOfferDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.FishBeginnerOfferDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.NewPlayerList && message.NewPlayerList.length))
                        message.NewPlayerList = [];
                    message.NewPlayerList.push($root.tbnn.FishBeginnerOffer.decode(reader, reader.uint32()));
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
         * @memberof tbnn.FishBeginnerOfferDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.FishBeginnerOfferDetail} FishBeginnerOfferDetail
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
         * @memberof tbnn.FishBeginnerOfferDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishBeginnerOfferDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.NewPlayerList != null && message.hasOwnProperty("NewPlayerList")) {
                if (!Array.isArray(message.NewPlayerList))
                    return "NewPlayerList: array expected";
                for (var i = 0; i < message.NewPlayerList.length; ++i) {
                    var error = $root.tbnn.FishBeginnerOffer.verify(message.NewPlayerList[i]);
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
         * @memberof tbnn.FishBeginnerOfferDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         */
        FishBeginnerOfferDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.FishBeginnerOfferDetail)
                return object;
            var message = new $root.tbnn.FishBeginnerOfferDetail();
            if (object.NewPlayerList) {
                if (!Array.isArray(object.NewPlayerList))
                    throw TypeError(".tbnn.FishBeginnerOfferDetail.NewPlayerList: array expected");
                message.NewPlayerList = [];
                for (var i = 0; i < object.NewPlayerList.length; ++i) {
                    if (typeof object.NewPlayerList[i] !== "object")
                        throw TypeError(".tbnn.FishBeginnerOfferDetail.NewPlayerList: object expected");
                    message.NewPlayerList[i] = $root.tbnn.FishBeginnerOffer.fromObject(object.NewPlayerList[i]);
                }
            }
            if (object.NewPlayerAdjustSyspool != null)
                message.NewPlayerAdjustSyspool = object.NewPlayerAdjustSyspool | 0;
            return message;
        };

        /**
         * Creates a plain object from a FishBeginnerOfferDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.FishBeginnerOfferDetail
         * @static
         * @param {tbnn.FishBeginnerOfferDetail} message FishBeginnerOfferDetail
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
                    object.NewPlayerList[j] = $root.tbnn.FishBeginnerOffer.toObject(message.NewPlayerList[j], options);
            }
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                object.NewPlayerAdjustSyspool = message.NewPlayerAdjustSyspool;
            return object;
        };

        /**
         * Converts this FishBeginnerOfferDetail to JSON.
         * @function toJSON
         * @memberof tbnn.FishBeginnerOfferDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishBeginnerOfferDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishBeginnerOfferDetail;
    })();

    tbnn.FishBeginnerOffer = (function() {

        /**
         * Properties of a FishBeginnerOffer.
         * @memberof tbnn
         * @interface IFishBeginnerOffer
         * @property {number|null} [UserID] FishBeginnerOffer UserID
         * @property {number|null} [Bullet] FishBeginnerOffer Bullet
         * @property {number|null} [Score] FishBeginnerOffer Score
         * @property {number|null} [Status] FishBeginnerOffer Status
         */

        /**
         * Constructs a new FishBeginnerOffer.
         * @memberof tbnn
         * @classdesc Represents a FishBeginnerOffer.
         * @implements IFishBeginnerOffer
         * @constructor
         * @param {tbnn.IFishBeginnerOffer=} [properties] Properties to set
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
         * @memberof tbnn.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.UserID = 0;

        /**
         * FishBeginnerOffer Bullet.
         * @member {number} Bullet
         * @memberof tbnn.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Bullet = 0;

        /**
         * FishBeginnerOffer Score.
         * @member {number} Score
         * @memberof tbnn.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Score = 0;

        /**
         * FishBeginnerOffer Status.
         * @member {number} Status
         * @memberof tbnn.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Status = 0;

        /**
         * Creates a new FishBeginnerOffer instance using the specified properties.
         * @function create
         * @memberof tbnn.FishBeginnerOffer
         * @static
         * @param {tbnn.IFishBeginnerOffer=} [properties] Properties to set
         * @returns {tbnn.FishBeginnerOffer} FishBeginnerOffer instance
         */
        FishBeginnerOffer.create = function create(properties) {
            return new FishBeginnerOffer(properties);
        };

        /**
         * Encodes the specified FishBeginnerOffer message. Does not implicitly {@link tbnn.FishBeginnerOffer.verify|verify} messages.
         * @function encode
         * @memberof tbnn.FishBeginnerOffer
         * @static
         * @param {tbnn.IFishBeginnerOffer} message FishBeginnerOffer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOffer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.Bullet != null && message.hasOwnProperty("Bullet"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Bullet);
            if (message.Score != null && message.hasOwnProperty("Score"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Score);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified FishBeginnerOffer message, length delimited. Does not implicitly {@link tbnn.FishBeginnerOffer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.FishBeginnerOffer
         * @static
         * @param {tbnn.IFishBeginnerOffer} message FishBeginnerOffer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOffer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishBeginnerOffer message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.FishBeginnerOffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.FishBeginnerOffer} FishBeginnerOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOffer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.FishBeginnerOffer();
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
            return message;
        };

        /**
         * Decodes a FishBeginnerOffer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.FishBeginnerOffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.FishBeginnerOffer} FishBeginnerOffer
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
         * @memberof tbnn.FishBeginnerOffer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishBeginnerOffer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.Bullet != null && message.hasOwnProperty("Bullet"))
                if (!$util.isInteger(message.Bullet))
                    return "Bullet: integer expected";
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (!$util.isInteger(message.Score))
                    return "Score: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isInteger(message.Status))
                    return "Status: integer expected";
            return null;
        };

        /**
         * Creates a FishBeginnerOffer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.FishBeginnerOffer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.FishBeginnerOffer} FishBeginnerOffer
         */
        FishBeginnerOffer.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.FishBeginnerOffer)
                return object;
            var message = new $root.tbnn.FishBeginnerOffer();
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
         * @memberof tbnn.FishBeginnerOffer
         * @static
         * @param {tbnn.FishBeginnerOffer} message FishBeginnerOffer
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
         * @memberof tbnn.FishBeginnerOffer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishBeginnerOffer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishBeginnerOffer;
    })();

    tbnn.Cd21SysPoolData = (function() {

        /**
         * Properties of a Cd21SysPoolData.
         * @memberof tbnn
         * @interface ICd21SysPoolData
         * @property {number|null} [FlagID] Cd21SysPoolData FlagID
         * @property {number|Long|null} [SumBetMoney] Cd21SysPoolData SumBetMoney
         * @property {number|Long|null} [SumBetCount] Cd21SysPoolData SumBetCount
         * @property {number|Long|null} [PoolAmount] Cd21SysPoolData PoolAmount
         */

        /**
         * Constructs a new Cd21SysPoolData.
         * @memberof tbnn
         * @classdesc Represents a Cd21SysPoolData.
         * @implements ICd21SysPoolData
         * @constructor
         * @param {tbnn.ICd21SysPoolData=} [properties] Properties to set
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
         * @memberof tbnn.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.FlagID = 0;

        /**
         * Cd21SysPoolData SumBetMoney.
         * @member {number|Long} SumBetMoney
         * @memberof tbnn.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.SumBetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Cd21SysPoolData SumBetCount.
         * @member {number|Long} SumBetCount
         * @memberof tbnn.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.SumBetCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Cd21SysPoolData PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof tbnn.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Cd21SysPoolData instance using the specified properties.
         * @function create
         * @memberof tbnn.Cd21SysPoolData
         * @static
         * @param {tbnn.ICd21SysPoolData=} [properties] Properties to set
         * @returns {tbnn.Cd21SysPoolData} Cd21SysPoolData instance
         */
        Cd21SysPoolData.create = function create(properties) {
            return new Cd21SysPoolData(properties);
        };

        /**
         * Encodes the specified Cd21SysPoolData message. Does not implicitly {@link tbnn.Cd21SysPoolData.verify|verify} messages.
         * @function encode
         * @memberof tbnn.Cd21SysPoolData
         * @static
         * @param {tbnn.ICd21SysPoolData} message Cd21SysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cd21SysPoolData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            if (message.SumBetMoney != null && message.hasOwnProperty("SumBetMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SumBetMoney);
            if (message.SumBetCount != null && message.hasOwnProperty("SumBetCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.SumBetCount);
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.PoolAmount);
            return writer;
        };

        /**
         * Encodes the specified Cd21SysPoolData message, length delimited. Does not implicitly {@link tbnn.Cd21SysPoolData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.Cd21SysPoolData
         * @static
         * @param {tbnn.ICd21SysPoolData} message Cd21SysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cd21SysPoolData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Cd21SysPoolData message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.Cd21SysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.Cd21SysPoolData} Cd21SysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cd21SysPoolData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.Cd21SysPoolData();
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
            return message;
        };

        /**
         * Decodes a Cd21SysPoolData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.Cd21SysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.Cd21SysPoolData} Cd21SysPoolData
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
         * @memberof tbnn.Cd21SysPoolData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Cd21SysPoolData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                if (!$util.isInteger(message.FlagID))
                    return "FlagID: integer expected";
            if (message.SumBetMoney != null && message.hasOwnProperty("SumBetMoney"))
                if (!$util.isInteger(message.SumBetMoney) && !(message.SumBetMoney && $util.isInteger(message.SumBetMoney.low) && $util.isInteger(message.SumBetMoney.high)))
                    return "SumBetMoney: integer|Long expected";
            if (message.SumBetCount != null && message.hasOwnProperty("SumBetCount"))
                if (!$util.isInteger(message.SumBetCount) && !(message.SumBetCount && $util.isInteger(message.SumBetCount.low) && $util.isInteger(message.SumBetCount.high)))
                    return "SumBetCount: integer|Long expected";
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (!$util.isInteger(message.PoolAmount) && !(message.PoolAmount && $util.isInteger(message.PoolAmount.low) && $util.isInteger(message.PoolAmount.high)))
                    return "PoolAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a Cd21SysPoolData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.Cd21SysPoolData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.Cd21SysPoolData} Cd21SysPoolData
         */
        Cd21SysPoolData.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.Cd21SysPoolData)
                return object;
            var message = new $root.tbnn.Cd21SysPoolData();
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
         * @memberof tbnn.Cd21SysPoolData
         * @static
         * @param {tbnn.Cd21SysPoolData} message Cd21SysPoolData
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
                    object.SumBetMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumBetMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumBetCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumBetCount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PoolAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolAmount = options.longs === String ? "0" : 0;
            }
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.SumBetMoney != null && message.hasOwnProperty("SumBetMoney"))
                if (typeof message.SumBetMoney === "number")
                    object.SumBetMoney = options.longs === String ? String(message.SumBetMoney) : message.SumBetMoney;
                else
                    object.SumBetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.SumBetMoney) : options.longs === Number ? new $util.LongBits(message.SumBetMoney.low >>> 0, message.SumBetMoney.high >>> 0).toNumber() : message.SumBetMoney;
            if (message.SumBetCount != null && message.hasOwnProperty("SumBetCount"))
                if (typeof message.SumBetCount === "number")
                    object.SumBetCount = options.longs === String ? String(message.SumBetCount) : message.SumBetCount;
                else
                    object.SumBetCount = options.longs === String ? $util.Long.prototype.toString.call(message.SumBetCount) : options.longs === Number ? new $util.LongBits(message.SumBetCount.low >>> 0, message.SumBetCount.high >>> 0).toNumber() : message.SumBetCount;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount = options.longs === String ? String(message.PoolAmount) : message.PoolAmount;
                else
                    object.PoolAmount = options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) : options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() : message.PoolAmount;
            return object;
        };

        /**
         * Converts this Cd21SysPoolData to JSON.
         * @function toJSON
         * @memberof tbnn.Cd21SysPoolData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Cd21SysPoolData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Cd21SysPoolData;
    })();

    tbnn.UserJackpotToBox = (function() {

        /**
         * Properties of a UserJackpotToBox.
         * @memberof tbnn
         * @interface IUserJackpotToBox
         * @property {number|null} [UserID] UserJackpotToBox UserID
         * @property {number|Long|null} [UpdateAmount] UserJackpotToBox UpdateAmount
         */

        /**
         * Constructs a new UserJackpotToBox.
         * @memberof tbnn
         * @classdesc Represents a UserJackpotToBox.
         * @implements IUserJackpotToBox
         * @constructor
         * @param {tbnn.IUserJackpotToBox=} [properties] Properties to set
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
         * @memberof tbnn.UserJackpotToBox
         * @instance
         */
        UserJackpotToBox.prototype.UserID = 0;

        /**
         * UserJackpotToBox UpdateAmount.
         * @member {number|Long} UpdateAmount
         * @memberof tbnn.UserJackpotToBox
         * @instance
         */
        UserJackpotToBox.prototype.UpdateAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserJackpotToBox instance using the specified properties.
         * @function create
         * @memberof tbnn.UserJackpotToBox
         * @static
         * @param {tbnn.IUserJackpotToBox=} [properties] Properties to set
         * @returns {tbnn.UserJackpotToBox} UserJackpotToBox instance
         */
        UserJackpotToBox.create = function create(properties) {
            return new UserJackpotToBox(properties);
        };

        /**
         * Encodes the specified UserJackpotToBox message. Does not implicitly {@link tbnn.UserJackpotToBox.verify|verify} messages.
         * @function encode
         * @memberof tbnn.UserJackpotToBox
         * @static
         * @param {tbnn.IUserJackpotToBox} message UserJackpotToBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJackpotToBox.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.UpdateAmount != null && message.hasOwnProperty("UpdateAmount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.UpdateAmount);
            return writer;
        };

        /**
         * Encodes the specified UserJackpotToBox message, length delimited. Does not implicitly {@link tbnn.UserJackpotToBox.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.UserJackpotToBox
         * @static
         * @param {tbnn.IUserJackpotToBox} message UserJackpotToBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJackpotToBox.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserJackpotToBox message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.UserJackpotToBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.UserJackpotToBox} UserJackpotToBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJackpotToBox.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.UserJackpotToBox();
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
            return message;
        };

        /**
         * Decodes a UserJackpotToBox message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.UserJackpotToBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.UserJackpotToBox} UserJackpotToBox
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
         * @memberof tbnn.UserJackpotToBox
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserJackpotToBox.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.UpdateAmount != null && message.hasOwnProperty("UpdateAmount"))
                if (!$util.isInteger(message.UpdateAmount) && !(message.UpdateAmount && $util.isInteger(message.UpdateAmount.low) && $util.isInteger(message.UpdateAmount.high)))
                    return "UpdateAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserJackpotToBox message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.UserJackpotToBox
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.UserJackpotToBox} UserJackpotToBox
         */
        UserJackpotToBox.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.UserJackpotToBox)
                return object;
            var message = new $root.tbnn.UserJackpotToBox();
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
         * @memberof tbnn.UserJackpotToBox
         * @static
         * @param {tbnn.UserJackpotToBox} message UserJackpotToBox
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
                    object.UpdateAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UpdateAmount = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.UpdateAmount != null && message.hasOwnProperty("UpdateAmount"))
                if (typeof message.UpdateAmount === "number")
                    object.UpdateAmount = options.longs === String ? String(message.UpdateAmount) : message.UpdateAmount;
                else
                    object.UpdateAmount = options.longs === String ? $util.Long.prototype.toString.call(message.UpdateAmount) : options.longs === Number ? new $util.LongBits(message.UpdateAmount.low >>> 0, message.UpdateAmount.high >>> 0).toNumber() : message.UpdateAmount;
            return object;
        };

        /**
         * Converts this UserJackpotToBox to JSON.
         * @function toJSON
         * @memberof tbnn.UserJackpotToBox
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserJackpotToBox.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserJackpotToBox;
    })();

    tbnn.JackpotData = (function() {

        /**
         * Properties of a JackpotData.
         * @memberof tbnn
         * @interface IJackpotData
         * @property {number|null} [GameID] JackpotData GameID
         * @property {number|null} [FlagID] JackpotData FlagID
         * @property {number|null} [TableNo] JackpotData TableNo
         * @property {number|Long|null} [Contribution] JackpotData Contribution
         * @property {number|Long|null} [TotalContribution] JackpotData TotalContribution
         * @property {number|Long|null} [AwardTotal] JackpotData AwardTotal
         * @property {number|null} [Level] JackpotData Level
         * @property {number|Long|null} [JackpotPool] JackpotData JackpotPool
         */

        /**
         * Constructs a new JackpotData.
         * @memberof tbnn
         * @classdesc Represents a JackpotData.
         * @implements IJackpotData
         * @constructor
         * @param {tbnn.IJackpotData=} [properties] Properties to set
         */
        function JackpotData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackpotData GameID.
         * @member {number} GameID
         * @memberof tbnn.JackpotData
         * @instance
         */
        JackpotData.prototype.GameID = 0;

        /**
         * JackpotData FlagID.
         * @member {number} FlagID
         * @memberof tbnn.JackpotData
         * @instance
         */
        JackpotData.prototype.FlagID = 0;

        /**
         * JackpotData TableNo.
         * @member {number} TableNo
         * @memberof tbnn.JackpotData
         * @instance
         */
        JackpotData.prototype.TableNo = 0;

        /**
         * JackpotData Contribution.
         * @member {number|Long} Contribution
         * @memberof tbnn.JackpotData
         * @instance
         */
        JackpotData.prototype.Contribution = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotData TotalContribution.
         * @member {number|Long} TotalContribution
         * @memberof tbnn.JackpotData
         * @instance
         */
        JackpotData.prototype.TotalContribution = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotData AwardTotal.
         * @member {number|Long} AwardTotal
         * @memberof tbnn.JackpotData
         * @instance
         */
        JackpotData.prototype.AwardTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotData Level.
         * @member {number} Level
         * @memberof tbnn.JackpotData
         * @instance
         */
        JackpotData.prototype.Level = 0;

        /**
         * JackpotData JackpotPool.
         * @member {number|Long} JackpotPool
         * @memberof tbnn.JackpotData
         * @instance
         */
        JackpotData.prototype.JackpotPool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JackpotData instance using the specified properties.
         * @function create
         * @memberof tbnn.JackpotData
         * @static
         * @param {tbnn.IJackpotData=} [properties] Properties to set
         * @returns {tbnn.JackpotData} JackpotData instance
         */
        JackpotData.create = function create(properties) {
            return new JackpotData(properties);
        };

        /**
         * Encodes the specified JackpotData message. Does not implicitly {@link tbnn.JackpotData.verify|verify} messages.
         * @function encode
         * @memberof tbnn.JackpotData
         * @static
         * @param {tbnn.IJackpotData} message JackpotData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            if (message.Contribution != null && message.hasOwnProperty("Contribution"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Contribution);
            if (message.TotalContribution != null && message.hasOwnProperty("TotalContribution"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.TotalContribution);
            if (message.AwardTotal != null && message.hasOwnProperty("AwardTotal"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.AwardTotal);
            if (message.Level != null && message.hasOwnProperty("Level"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Level);
            if (message.JackpotPool != null && message.hasOwnProperty("JackpotPool"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.JackpotPool);
            return writer;
        };

        /**
         * Encodes the specified JackpotData message, length delimited. Does not implicitly {@link tbnn.JackpotData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.JackpotData
         * @static
         * @param {tbnn.IJackpotData} message JackpotData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotData message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.JackpotData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.JackpotData} JackpotData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.JackpotData();
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
                    message.Contribution = reader.int64();
                    break;
                case 5:
                    message.TotalContribution = reader.int64();
                    break;
                case 6:
                    message.AwardTotal = reader.int64();
                    break;
                case 7:
                    message.Level = reader.int32();
                    break;
                case 8:
                    message.JackpotPool = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.JackpotData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.JackpotData} JackpotData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotData message.
         * @function verify
         * @memberof tbnn.JackpotData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                if (!$util.isInteger(message.FlagID))
                    return "FlagID: integer expected";
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                if (!$util.isInteger(message.TableNo))
                    return "TableNo: integer expected";
            if (message.Contribution != null && message.hasOwnProperty("Contribution"))
                if (!$util.isInteger(message.Contribution) && !(message.Contribution && $util.isInteger(message.Contribution.low) && $util.isInteger(message.Contribution.high)))
                    return "Contribution: integer|Long expected";
            if (message.TotalContribution != null && message.hasOwnProperty("TotalContribution"))
                if (!$util.isInteger(message.TotalContribution) && !(message.TotalContribution && $util.isInteger(message.TotalContribution.low) && $util.isInteger(message.TotalContribution.high)))
                    return "TotalContribution: integer|Long expected";
            if (message.AwardTotal != null && message.hasOwnProperty("AwardTotal"))
                if (!$util.isInteger(message.AwardTotal) && !(message.AwardTotal && $util.isInteger(message.AwardTotal.low) && $util.isInteger(message.AwardTotal.high)))
                    return "AwardTotal: integer|Long expected";
            if (message.Level != null && message.hasOwnProperty("Level"))
                if (!$util.isInteger(message.Level))
                    return "Level: integer expected";
            if (message.JackpotPool != null && message.hasOwnProperty("JackpotPool"))
                if (!$util.isInteger(message.JackpotPool) && !(message.JackpotPool && $util.isInteger(message.JackpotPool.low) && $util.isInteger(message.JackpotPool.high)))
                    return "JackpotPool: integer|Long expected";
            return null;
        };

        /**
         * Creates a JackpotData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.JackpotData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.JackpotData} JackpotData
         */
        JackpotData.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.JackpotData)
                return object;
            var message = new $root.tbnn.JackpotData();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.Contribution != null)
                if ($util.Long)
                    (message.Contribution = $util.Long.fromValue(object.Contribution)).unsigned = false;
                else if (typeof object.Contribution === "string")
                    message.Contribution = parseInt(object.Contribution, 10);
                else if (typeof object.Contribution === "number")
                    message.Contribution = object.Contribution;
                else if (typeof object.Contribution === "object")
                    message.Contribution = new $util.LongBits(object.Contribution.low >>> 0, object.Contribution.high >>> 0).toNumber();
            if (object.TotalContribution != null)
                if ($util.Long)
                    (message.TotalContribution = $util.Long.fromValue(object.TotalContribution)).unsigned = false;
                else if (typeof object.TotalContribution === "string")
                    message.TotalContribution = parseInt(object.TotalContribution, 10);
                else if (typeof object.TotalContribution === "number")
                    message.TotalContribution = object.TotalContribution;
                else if (typeof object.TotalContribution === "object")
                    message.TotalContribution = new $util.LongBits(object.TotalContribution.low >>> 0, object.TotalContribution.high >>> 0).toNumber();
            if (object.AwardTotal != null)
                if ($util.Long)
                    (message.AwardTotal = $util.Long.fromValue(object.AwardTotal)).unsigned = false;
                else if (typeof object.AwardTotal === "string")
                    message.AwardTotal = parseInt(object.AwardTotal, 10);
                else if (typeof object.AwardTotal === "number")
                    message.AwardTotal = object.AwardTotal;
                else if (typeof object.AwardTotal === "object")
                    message.AwardTotal = new $util.LongBits(object.AwardTotal.low >>> 0, object.AwardTotal.high >>> 0).toNumber();
            if (object.Level != null)
                message.Level = object.Level | 0;
            if (object.JackpotPool != null)
                if ($util.Long)
                    (message.JackpotPool = $util.Long.fromValue(object.JackpotPool)).unsigned = false;
                else if (typeof object.JackpotPool === "string")
                    message.JackpotPool = parseInt(object.JackpotPool, 10);
                else if (typeof object.JackpotPool === "number")
                    message.JackpotPool = object.JackpotPool;
                else if (typeof object.JackpotPool === "object")
                    message.JackpotPool = new $util.LongBits(object.JackpotPool.low >>> 0, object.JackpotPool.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a JackpotData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.JackpotData
         * @static
         * @param {tbnn.JackpotData} message JackpotData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.FlagID = 0;
                object.TableNo = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Contribution = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Contribution = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalContribution = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalContribution = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AwardTotal = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AwardTotal = options.longs === String ? "0" : 0;
                object.Level = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.JackpotPool = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.JackpotPool = options.longs === String ? "0" : 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.Contribution != null && message.hasOwnProperty("Contribution"))
                if (typeof message.Contribution === "number")
                    object.Contribution = options.longs === String ? String(message.Contribution) : message.Contribution;
                else
                    object.Contribution = options.longs === String ? $util.Long.prototype.toString.call(message.Contribution) : options.longs === Number ? new $util.LongBits(message.Contribution.low >>> 0, message.Contribution.high >>> 0).toNumber() : message.Contribution;
            if (message.TotalContribution != null && message.hasOwnProperty("TotalContribution"))
                if (typeof message.TotalContribution === "number")
                    object.TotalContribution = options.longs === String ? String(message.TotalContribution) : message.TotalContribution;
                else
                    object.TotalContribution = options.longs === String ? $util.Long.prototype.toString.call(message.TotalContribution) : options.longs === Number ? new $util.LongBits(message.TotalContribution.low >>> 0, message.TotalContribution.high >>> 0).toNumber() : message.TotalContribution;
            if (message.AwardTotal != null && message.hasOwnProperty("AwardTotal"))
                if (typeof message.AwardTotal === "number")
                    object.AwardTotal = options.longs === String ? String(message.AwardTotal) : message.AwardTotal;
                else
                    object.AwardTotal = options.longs === String ? $util.Long.prototype.toString.call(message.AwardTotal) : options.longs === Number ? new $util.LongBits(message.AwardTotal.low >>> 0, message.AwardTotal.high >>> 0).toNumber() : message.AwardTotal;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = message.Level;
            if (message.JackpotPool != null && message.hasOwnProperty("JackpotPool"))
                if (typeof message.JackpotPool === "number")
                    object.JackpotPool = options.longs === String ? String(message.JackpotPool) : message.JackpotPool;
                else
                    object.JackpotPool = options.longs === String ? $util.Long.prototype.toString.call(message.JackpotPool) : options.longs === Number ? new $util.LongBits(message.JackpotPool.low >>> 0, message.JackpotPool.high >>> 0).toNumber() : message.JackpotPool;
            return object;
        };

        /**
         * Converts this JackpotData to JSON.
         * @function toJSON
         * @memberof tbnn.JackpotData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotData;
    })();

    tbnn.JackpotAllData = (function() {

        /**
         * Properties of a JackpotAllData.
         * @memberof tbnn
         * @interface IJackpotAllData
         * @property {Array.<tbnn.IJackpotData>|null} [AllData] JackpotAllData AllData
         */

        /**
         * Constructs a new JackpotAllData.
         * @memberof tbnn
         * @classdesc Represents a JackpotAllData.
         * @implements IJackpotAllData
         * @constructor
         * @param {tbnn.IJackpotAllData=} [properties] Properties to set
         */
        function JackpotAllData(properties) {
            this.AllData = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackpotAllData AllData.
         * @member {Array.<tbnn.IJackpotData>} AllData
         * @memberof tbnn.JackpotAllData
         * @instance
         */
        JackpotAllData.prototype.AllData = $util.emptyArray;

        /**
         * Creates a new JackpotAllData instance using the specified properties.
         * @function create
         * @memberof tbnn.JackpotAllData
         * @static
         * @param {tbnn.IJackpotAllData=} [properties] Properties to set
         * @returns {tbnn.JackpotAllData} JackpotAllData instance
         */
        JackpotAllData.create = function create(properties) {
            return new JackpotAllData(properties);
        };

        /**
         * Encodes the specified JackpotAllData message. Does not implicitly {@link tbnn.JackpotAllData.verify|verify} messages.
         * @function encode
         * @memberof tbnn.JackpotAllData
         * @static
         * @param {tbnn.IJackpotAllData} message JackpotAllData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotAllData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AllData != null && message.AllData.length)
                for (var i = 0; i < message.AllData.length; ++i)
                    $root.tbnn.JackpotData.encode(message.AllData[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JackpotAllData message, length delimited. Does not implicitly {@link tbnn.JackpotAllData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.JackpotAllData
         * @static
         * @param {tbnn.IJackpotAllData} message JackpotAllData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotAllData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotAllData message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.JackpotAllData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.JackpotAllData} JackpotAllData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotAllData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.JackpotAllData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.AllData && message.AllData.length))
                        message.AllData = [];
                    message.AllData.push($root.tbnn.JackpotData.decode(reader, reader.uint32()));
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
         * @memberof tbnn.JackpotAllData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.JackpotAllData} JackpotAllData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotAllData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotAllData message.
         * @function verify
         * @memberof tbnn.JackpotAllData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotAllData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AllData != null && message.hasOwnProperty("AllData")) {
                if (!Array.isArray(message.AllData))
                    return "AllData: array expected";
                for (var i = 0; i < message.AllData.length; ++i) {
                    var error = $root.tbnn.JackpotData.verify(message.AllData[i]);
                    if (error)
                        return "AllData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JackpotAllData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.JackpotAllData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.JackpotAllData} JackpotAllData
         */
        JackpotAllData.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.JackpotAllData)
                return object;
            var message = new $root.tbnn.JackpotAllData();
            if (object.AllData) {
                if (!Array.isArray(object.AllData))
                    throw TypeError(".tbnn.JackpotAllData.AllData: array expected");
                message.AllData = [];
                for (var i = 0; i < object.AllData.length; ++i) {
                    if (typeof object.AllData[i] !== "object")
                        throw TypeError(".tbnn.JackpotAllData.AllData: object expected");
                    message.AllData[i] = $root.tbnn.JackpotData.fromObject(object.AllData[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JackpotAllData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.JackpotAllData
         * @static
         * @param {tbnn.JackpotAllData} message JackpotAllData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotAllData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AllData = [];
            if (message.AllData && message.AllData.length) {
                object.AllData = [];
                for (var j = 0; j < message.AllData.length; ++j)
                    object.AllData[j] = $root.tbnn.JackpotData.toObject(message.AllData[j], options);
            }
            return object;
        };

        /**
         * Converts this JackpotAllData to JSON.
         * @function toJSON
         * @memberof tbnn.JackpotAllData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotAllData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotAllData;
    })();

    tbnn.SuperTool_Msg_GetSysPoolWinLose = (function() {

        /**
         * Properties of a SuperTool_Msg_GetSysPoolWinLose.
         * @memberof tbnn
         * @interface ISuperTool_Msg_GetSysPoolWinLose
         * @property {number|null} [GameID] SuperTool_Msg_GetSysPoolWinLose GameID
         * @property {number|null} [FlagID] SuperTool_Msg_GetSysPoolWinLose FlagID
         */

        /**
         * Constructs a new SuperTool_Msg_GetSysPoolWinLose.
         * @memberof tbnn
         * @classdesc Represents a SuperTool_Msg_GetSysPoolWinLose.
         * @implements ISuperTool_Msg_GetSysPoolWinLose
         * @constructor
         * @param {tbnn.ISuperTool_Msg_GetSysPoolWinLose=} [properties] Properties to set
         */
        function SuperTool_Msg_GetSysPoolWinLose(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperTool_Msg_GetSysPoolWinLose GameID.
         * @member {number} GameID
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLose.prototype.GameID = 0;

        /**
         * SuperTool_Msg_GetSysPoolWinLose FlagID.
         * @member {number} FlagID
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLose.prototype.FlagID = 0;

        /**
         * Creates a new SuperTool_Msg_GetSysPoolWinLose instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {tbnn.ISuperTool_Msg_GetSysPoolWinLose=} [properties] Properties to set
         * @returns {tbnn.SuperTool_Msg_GetSysPoolWinLose} SuperTool_Msg_GetSysPoolWinLose instance
         */
        SuperTool_Msg_GetSysPoolWinLose.create = function create(properties) {
            return new SuperTool_Msg_GetSysPoolWinLose(properties);
        };

        /**
         * Encodes the specified SuperTool_Msg_GetSysPoolWinLose message. Does not implicitly {@link tbnn.SuperTool_Msg_GetSysPoolWinLose.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {tbnn.ISuperTool_Msg_GetSysPoolWinLose} message SuperTool_Msg_GetSysPoolWinLose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_GetSysPoolWinLose.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            return writer;
        };

        /**
         * Encodes the specified SuperTool_Msg_GetSysPoolWinLose message, length delimited. Does not implicitly {@link tbnn.SuperTool_Msg_GetSysPoolWinLose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {tbnn.ISuperTool_Msg_GetSysPoolWinLose} message SuperTool_Msg_GetSysPoolWinLose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_GetSysPoolWinLose.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperTool_Msg_GetSysPoolWinLose message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperTool_Msg_GetSysPoolWinLose} SuperTool_Msg_GetSysPoolWinLose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_GetSysPoolWinLose.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperTool_Msg_GetSysPoolWinLose();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.FlagID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuperTool_Msg_GetSysPoolWinLose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperTool_Msg_GetSysPoolWinLose} SuperTool_Msg_GetSysPoolWinLose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_GetSysPoolWinLose.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperTool_Msg_GetSysPoolWinLose message.
         * @function verify
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperTool_Msg_GetSysPoolWinLose.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                if (!$util.isInteger(message.FlagID))
                    return "FlagID: integer expected";
            return null;
        };

        /**
         * Creates a SuperTool_Msg_GetSysPoolWinLose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperTool_Msg_GetSysPoolWinLose} SuperTool_Msg_GetSysPoolWinLose
         */
        SuperTool_Msg_GetSysPoolWinLose.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperTool_Msg_GetSysPoolWinLose)
                return object;
            var message = new $root.tbnn.SuperTool_Msg_GetSysPoolWinLose();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperTool_Msg_GetSysPoolWinLose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {tbnn.SuperTool_Msg_GetSysPoolWinLose} message SuperTool_Msg_GetSysPoolWinLose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperTool_Msg_GetSysPoolWinLose.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.FlagID = 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            return object;
        };

        /**
         * Converts this SuperTool_Msg_GetSysPoolWinLose to JSON.
         * @function toJSON
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperTool_Msg_GetSysPoolWinLose.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperTool_Msg_GetSysPoolWinLose;
    })();

    tbnn.SuperTool_Msg_GetSysPoolWinLoseRet = (function() {

        /**
         * Properties of a SuperTool_Msg_GetSysPoolWinLoseRet.
         * @memberof tbnn
         * @interface ISuperTool_Msg_GetSysPoolWinLoseRet
         * @property {number|null} [GameID] SuperTool_Msg_GetSysPoolWinLoseRet GameID
         * @property {number|null} [FlagID] SuperTool_Msg_GetSysPoolWinLoseRet FlagID
         * @property {number|Long|null} [PoolAmount] SuperTool_Msg_GetSysPoolWinLoseRet PoolAmount
         * @property {number|Long|null} [WinLine] SuperTool_Msg_GetSysPoolWinLoseRet WinLine
         * @property {string|null} [WinLoseData] SuperTool_Msg_GetSysPoolWinLoseRet WinLoseData
         */

        /**
         * Constructs a new SuperTool_Msg_GetSysPoolWinLoseRet.
         * @memberof tbnn
         * @classdesc Represents a SuperTool_Msg_GetSysPoolWinLoseRet.
         * @implements ISuperTool_Msg_GetSysPoolWinLoseRet
         * @constructor
         * @param {tbnn.ISuperTool_Msg_GetSysPoolWinLoseRet=} [properties] Properties to set
         */
        function SuperTool_Msg_GetSysPoolWinLoseRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet GameID.
         * @member {number} GameID
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.GameID = 0;

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet FlagID.
         * @member {number} FlagID
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.FlagID = 0;

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet WinLine.
         * @member {number|Long} WinLine
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.WinLine = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet WinLoseData.
         * @member {string} WinLoseData
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.WinLoseData = "";

        /**
         * Creates a new SuperTool_Msg_GetSysPoolWinLoseRet instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {tbnn.ISuperTool_Msg_GetSysPoolWinLoseRet=} [properties] Properties to set
         * @returns {tbnn.SuperTool_Msg_GetSysPoolWinLoseRet} SuperTool_Msg_GetSysPoolWinLoseRet instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.create = function create(properties) {
            return new SuperTool_Msg_GetSysPoolWinLoseRet(properties);
        };

        /**
         * Encodes the specified SuperTool_Msg_GetSysPoolWinLoseRet message. Does not implicitly {@link tbnn.SuperTool_Msg_GetSysPoolWinLoseRet.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {tbnn.ISuperTool_Msg_GetSysPoolWinLoseRet} message SuperTool_Msg_GetSysPoolWinLoseRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.PoolAmount);
            if (message.WinLine != null && message.hasOwnProperty("WinLine"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.WinLine);
            if (message.WinLoseData != null && message.hasOwnProperty("WinLoseData"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.WinLoseData);
            return writer;
        };

        /**
         * Encodes the specified SuperTool_Msg_GetSysPoolWinLoseRet message, length delimited. Does not implicitly {@link tbnn.SuperTool_Msg_GetSysPoolWinLoseRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {tbnn.ISuperTool_Msg_GetSysPoolWinLoseRet} message SuperTool_Msg_GetSysPoolWinLoseRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperTool_Msg_GetSysPoolWinLoseRet message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperTool_Msg_GetSysPoolWinLoseRet} SuperTool_Msg_GetSysPoolWinLoseRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperTool_Msg_GetSysPoolWinLoseRet();
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
                    message.PoolAmount = reader.int64();
                    break;
                case 4:
                    message.WinLine = reader.int64();
                    break;
                case 5:
                    message.WinLoseData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuperTool_Msg_GetSysPoolWinLoseRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperTool_Msg_GetSysPoolWinLoseRet} SuperTool_Msg_GetSysPoolWinLoseRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperTool_Msg_GetSysPoolWinLoseRet message.
         * @function verify
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                if (!$util.isInteger(message.FlagID))
                    return "FlagID: integer expected";
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (!$util.isInteger(message.PoolAmount) && !(message.PoolAmount && $util.isInteger(message.PoolAmount.low) && $util.isInteger(message.PoolAmount.high)))
                    return "PoolAmount: integer|Long expected";
            if (message.WinLine != null && message.hasOwnProperty("WinLine"))
                if (!$util.isInteger(message.WinLine) && !(message.WinLine && $util.isInteger(message.WinLine.low) && $util.isInteger(message.WinLine.high)))
                    return "WinLine: integer|Long expected";
            if (message.WinLoseData != null && message.hasOwnProperty("WinLoseData"))
                if (!$util.isString(message.WinLoseData))
                    return "WinLoseData: string expected";
            return null;
        };

        /**
         * Creates a SuperTool_Msg_GetSysPoolWinLoseRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperTool_Msg_GetSysPoolWinLoseRet} SuperTool_Msg_GetSysPoolWinLoseRet
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperTool_Msg_GetSysPoolWinLoseRet)
                return object;
            var message = new $root.tbnn.SuperTool_Msg_GetSysPoolWinLoseRet();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.PoolAmount != null)
                if ($util.Long)
                    (message.PoolAmount = $util.Long.fromValue(object.PoolAmount)).unsigned = false;
                else if (typeof object.PoolAmount === "string")
                    message.PoolAmount = parseInt(object.PoolAmount, 10);
                else if (typeof object.PoolAmount === "number")
                    message.PoolAmount = object.PoolAmount;
                else if (typeof object.PoolAmount === "object")
                    message.PoolAmount = new $util.LongBits(object.PoolAmount.low >>> 0, object.PoolAmount.high >>> 0).toNumber();
            if (object.WinLine != null)
                if ($util.Long)
                    (message.WinLine = $util.Long.fromValue(object.WinLine)).unsigned = false;
                else if (typeof object.WinLine === "string")
                    message.WinLine = parseInt(object.WinLine, 10);
                else if (typeof object.WinLine === "number")
                    message.WinLine = object.WinLine;
                else if (typeof object.WinLine === "object")
                    message.WinLine = new $util.LongBits(object.WinLine.low >>> 0, object.WinLine.high >>> 0).toNumber();
            if (object.WinLoseData != null)
                message.WinLoseData = String(object.WinLoseData);
            return message;
        };

        /**
         * Creates a plain object from a SuperTool_Msg_GetSysPoolWinLoseRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {tbnn.SuperTool_Msg_GetSysPoolWinLoseRet} message SuperTool_Msg_GetSysPoolWinLoseRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.FlagID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PoolAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinLine = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinLine = options.longs === String ? "0" : 0;
                object.WinLoseData = "";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount = options.longs === String ? String(message.PoolAmount) : message.PoolAmount;
                else
                    object.PoolAmount = options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) : options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() : message.PoolAmount;
            if (message.WinLine != null && message.hasOwnProperty("WinLine"))
                if (typeof message.WinLine === "number")
                    object.WinLine = options.longs === String ? String(message.WinLine) : message.WinLine;
                else
                    object.WinLine = options.longs === String ? $util.Long.prototype.toString.call(message.WinLine) : options.longs === Number ? new $util.LongBits(message.WinLine.low >>> 0, message.WinLine.high >>> 0).toNumber() : message.WinLine;
            if (message.WinLoseData != null && message.hasOwnProperty("WinLoseData"))
                object.WinLoseData = message.WinLoseData;
            return object;
        };

        /**
         * Converts this SuperTool_Msg_GetSysPoolWinLoseRet to JSON.
         * @function toJSON
         * @memberof tbnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperTool_Msg_GetSysPoolWinLoseRet;
    })();

    tbnn.SuperTool_Msg_UpdateSysPoolWinLose = (function() {

        /**
         * Properties of a SuperTool_Msg_UpdateSysPoolWinLose.
         * @memberof tbnn
         * @interface ISuperTool_Msg_UpdateSysPoolWinLose
         * @property {number|null} [GameID] SuperTool_Msg_UpdateSysPoolWinLose GameID
         * @property {number|null} [FlagID] SuperTool_Msg_UpdateSysPoolWinLose FlagID
         * @property {number|Long|null} [PoolAmount] SuperTool_Msg_UpdateSysPoolWinLose PoolAmount
         * @property {number|Long|null} [WinLine] SuperTool_Msg_UpdateSysPoolWinLose WinLine
         * @property {string|null} [WinLoseData] SuperTool_Msg_UpdateSysPoolWinLose WinLoseData
         */

        /**
         * Constructs a new SuperTool_Msg_UpdateSysPoolWinLose.
         * @memberof tbnn
         * @classdesc Represents a SuperTool_Msg_UpdateSysPoolWinLose.
         * @implements ISuperTool_Msg_UpdateSysPoolWinLose
         * @constructor
         * @param {tbnn.ISuperTool_Msg_UpdateSysPoolWinLose=} [properties] Properties to set
         */
        function SuperTool_Msg_UpdateSysPoolWinLose(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose GameID.
         * @member {number} GameID
         * @memberof tbnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.GameID = 0;

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose FlagID.
         * @member {number} FlagID
         * @memberof tbnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.FlagID = 0;

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof tbnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose WinLine.
         * @member {number|Long} WinLine
         * @memberof tbnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.WinLine = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose WinLoseData.
         * @member {string} WinLoseData
         * @memberof tbnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.WinLoseData = "";

        /**
         * Creates a new SuperTool_Msg_UpdateSysPoolWinLose instance using the specified properties.
         * @function create
         * @memberof tbnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {tbnn.ISuperTool_Msg_UpdateSysPoolWinLose=} [properties] Properties to set
         * @returns {tbnn.SuperTool_Msg_UpdateSysPoolWinLose} SuperTool_Msg_UpdateSysPoolWinLose instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.create = function create(properties) {
            return new SuperTool_Msg_UpdateSysPoolWinLose(properties);
        };

        /**
         * Encodes the specified SuperTool_Msg_UpdateSysPoolWinLose message. Does not implicitly {@link tbnn.SuperTool_Msg_UpdateSysPoolWinLose.verify|verify} messages.
         * @function encode
         * @memberof tbnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {tbnn.ISuperTool_Msg_UpdateSysPoolWinLose} message SuperTool_Msg_UpdateSysPoolWinLose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_UpdateSysPoolWinLose.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.PoolAmount);
            if (message.WinLine != null && message.hasOwnProperty("WinLine"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.WinLine);
            if (message.WinLoseData != null && message.hasOwnProperty("WinLoseData"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.WinLoseData);
            return writer;
        };

        /**
         * Encodes the specified SuperTool_Msg_UpdateSysPoolWinLose message, length delimited. Does not implicitly {@link tbnn.SuperTool_Msg_UpdateSysPoolWinLose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tbnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {tbnn.ISuperTool_Msg_UpdateSysPoolWinLose} message SuperTool_Msg_UpdateSysPoolWinLose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_UpdateSysPoolWinLose.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperTool_Msg_UpdateSysPoolWinLose message from the specified reader or buffer.
         * @function decode
         * @memberof tbnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tbnn.SuperTool_Msg_UpdateSysPoolWinLose} SuperTool_Msg_UpdateSysPoolWinLose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_UpdateSysPoolWinLose.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbnn.SuperTool_Msg_UpdateSysPoolWinLose();
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
                    message.PoolAmount = reader.int64();
                    break;
                case 4:
                    message.WinLine = reader.int64();
                    break;
                case 5:
                    message.WinLoseData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuperTool_Msg_UpdateSysPoolWinLose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tbnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tbnn.SuperTool_Msg_UpdateSysPoolWinLose} SuperTool_Msg_UpdateSysPoolWinLose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_UpdateSysPoolWinLose.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperTool_Msg_UpdateSysPoolWinLose message.
         * @function verify
         * @memberof tbnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperTool_Msg_UpdateSysPoolWinLose.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                if (!$util.isInteger(message.FlagID))
                    return "FlagID: integer expected";
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (!$util.isInteger(message.PoolAmount) && !(message.PoolAmount && $util.isInteger(message.PoolAmount.low) && $util.isInteger(message.PoolAmount.high)))
                    return "PoolAmount: integer|Long expected";
            if (message.WinLine != null && message.hasOwnProperty("WinLine"))
                if (!$util.isInteger(message.WinLine) && !(message.WinLine && $util.isInteger(message.WinLine.low) && $util.isInteger(message.WinLine.high)))
                    return "WinLine: integer|Long expected";
            if (message.WinLoseData != null && message.hasOwnProperty("WinLoseData"))
                if (!$util.isString(message.WinLoseData))
                    return "WinLoseData: string expected";
            return null;
        };

        /**
         * Creates a SuperTool_Msg_UpdateSysPoolWinLose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tbnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tbnn.SuperTool_Msg_UpdateSysPoolWinLose} SuperTool_Msg_UpdateSysPoolWinLose
         */
        SuperTool_Msg_UpdateSysPoolWinLose.fromObject = function fromObject(object) {
            if (object instanceof $root.tbnn.SuperTool_Msg_UpdateSysPoolWinLose)
                return object;
            var message = new $root.tbnn.SuperTool_Msg_UpdateSysPoolWinLose();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.PoolAmount != null)
                if ($util.Long)
                    (message.PoolAmount = $util.Long.fromValue(object.PoolAmount)).unsigned = false;
                else if (typeof object.PoolAmount === "string")
                    message.PoolAmount = parseInt(object.PoolAmount, 10);
                else if (typeof object.PoolAmount === "number")
                    message.PoolAmount = object.PoolAmount;
                else if (typeof object.PoolAmount === "object")
                    message.PoolAmount = new $util.LongBits(object.PoolAmount.low >>> 0, object.PoolAmount.high >>> 0).toNumber();
            if (object.WinLine != null)
                if ($util.Long)
                    (message.WinLine = $util.Long.fromValue(object.WinLine)).unsigned = false;
                else if (typeof object.WinLine === "string")
                    message.WinLine = parseInt(object.WinLine, 10);
                else if (typeof object.WinLine === "number")
                    message.WinLine = object.WinLine;
                else if (typeof object.WinLine === "object")
                    message.WinLine = new $util.LongBits(object.WinLine.low >>> 0, object.WinLine.high >>> 0).toNumber();
            if (object.WinLoseData != null)
                message.WinLoseData = String(object.WinLoseData);
            return message;
        };

        /**
         * Creates a plain object from a SuperTool_Msg_UpdateSysPoolWinLose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tbnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {tbnn.SuperTool_Msg_UpdateSysPoolWinLose} message SuperTool_Msg_UpdateSysPoolWinLose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperTool_Msg_UpdateSysPoolWinLose.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.FlagID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PoolAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinLine = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinLine = options.longs === String ? "0" : 0;
                object.WinLoseData = "";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount = options.longs === String ? String(message.PoolAmount) : message.PoolAmount;
                else
                    object.PoolAmount = options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) : options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() : message.PoolAmount;
            if (message.WinLine != null && message.hasOwnProperty("WinLine"))
                if (typeof message.WinLine === "number")
                    object.WinLine = options.longs === String ? String(message.WinLine) : message.WinLine;
                else
                    object.WinLine = options.longs === String ? $util.Long.prototype.toString.call(message.WinLine) : options.longs === Number ? new $util.LongBits(message.WinLine.low >>> 0, message.WinLine.high >>> 0).toNumber() : message.WinLine;
            if (message.WinLoseData != null && message.hasOwnProperty("WinLoseData"))
                object.WinLoseData = message.WinLoseData;
            return object;
        };

        /**
         * Converts this SuperTool_Msg_UpdateSysPoolWinLose to JSON.
         * @function toJSON
         * @memberof tbnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperTool_Msg_UpdateSysPoolWinLose;
    })();

    return tbnn;
})();

module.exports = $root;
