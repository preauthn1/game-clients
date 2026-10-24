/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg_DDZ = (function() {

    /**
     * Namespace GameMsg_DDZ.
     * @exports GameMsg_DDZ
     * @namespace
     */
    var GameMsg_DDZ = {};

    /**
     * DDZ_ErrorCode enum.
     * @name GameMsg_DDZ.DDZ_ErrorCode
     * @enum {string}
     * @property {number} OK=1 OK value
     * @property {number} Fail=2 Fail value
     */
    GameMsg_DDZ.DDZ_ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "OK"] = 1;
        values[valuesById[2] = "Fail"] = 2;
        return values;
    })();

    GameMsg_DDZ.Card = (function() {

        /**
         * Properties of a Card.
         * @memberof GameMsg_DDZ
         * @interface ICard
         * @property {number} Number Card Number
         * @property {number} Color Card Color
         */

        /**
         * Constructs a new Card.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a Card.
         * @implements ICard
         * @constructor
         * @param {GameMsg_DDZ.ICard=} [properties] Properties to set
         */
        function Card(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Card Number.
         * @member {number} Number
         * @memberof GameMsg_DDZ.Card
         * @instance
         */
        Card.prototype.Number = 0;

        /**
         * Card Color.
         * @member {number} Color
         * @memberof GameMsg_DDZ.Card
         * @instance
         */
        Card.prototype.Color = 0;

        /**
         * Creates a new Card instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.Card
         * @static
         * @param {GameMsg_DDZ.ICard=} [properties] Properties to set
         * @returns {GameMsg_DDZ.Card} Card instance
         */
        Card.create = function create(properties) {
            return new Card(properties);
        };

        /**
         * Encodes the specified Card message. Does not implicitly {@link GameMsg_DDZ.Card.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.Card
         * @static
         * @param {GameMsg_DDZ.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Number);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Color);
            return writer;
        };

        /**
         * Encodes the specified Card message, length delimited. Does not implicitly {@link GameMsg_DDZ.Card.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.Card
         * @static
         * @param {GameMsg_DDZ.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.Card();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Number = reader.int32();
                    break;
                case 2:
                    message.Color = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Number"))
                throw $util.ProtocolError("missing required 'Number'", { instance: message });
            if (!message.hasOwnProperty("Color"))
                throw $util.ProtocolError("missing required 'Color'", { instance: message });
            return message;
        };

        /**
         * Decodes a Card message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Card message.
         * @function verify
         * @memberof GameMsg_DDZ.Card
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Card.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Number))
                return "Number: integer expected";
            if (!$util.isInteger(message.Color))
                return "Color: integer expected";
            return null;
        };

        /**
         * Creates a Card message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.Card
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.Card} Card
         */
        Card.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.Card)
                return object;
            var message = new $root.GameMsg_DDZ.Card();
            if (object.Number != null)
                message.Number = object.Number | 0;
            if (object.Color != null)
                message.Color = object.Color | 0;
            return message;
        };

        /**
         * Creates a plain object from a Card message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.Card
         * @static
         * @param {GameMsg_DDZ.Card} message Card
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Card.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Number = 0;
                object.Color = 0;
            }
            if (message.Number != null && message.hasOwnProperty("Number"))
                object.Number = message.Number;
            if (message.Color != null && message.hasOwnProperty("Color"))
                object.Color = message.Color;
            return object;
        };

        /**
         * Converts this Card to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.Card
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Card.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Card;
    })();

    GameMsg_DDZ.DDZ_JiaoDiZhu = (function() {

        /**
         * Properties of a DDZ_JiaoDiZhu.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_JiaoDiZhu
         * @property {boolean} IsJiaoDiZhu DDZ_JiaoDiZhu IsJiaoDiZhu
         */

        /**
         * Constructs a new DDZ_JiaoDiZhu.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_JiaoDiZhu.
         * @implements IDDZ_JiaoDiZhu
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_JiaoDiZhu=} [properties] Properties to set
         */
        function DDZ_JiaoDiZhu(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_JiaoDiZhu IsJiaoDiZhu.
         * @member {boolean} IsJiaoDiZhu
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhu
         * @instance
         */
        DDZ_JiaoDiZhu.prototype.IsJiaoDiZhu = false;

        /**
         * Creates a new DDZ_JiaoDiZhu instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhu
         * @static
         * @param {GameMsg_DDZ.IDDZ_JiaoDiZhu=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_JiaoDiZhu} DDZ_JiaoDiZhu instance
         */
        DDZ_JiaoDiZhu.create = function create(properties) {
            return new DDZ_JiaoDiZhu(properties);
        };

        /**
         * Encodes the specified DDZ_JiaoDiZhu message. Does not implicitly {@link GameMsg_DDZ.DDZ_JiaoDiZhu.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhu
         * @static
         * @param {GameMsg_DDZ.IDDZ_JiaoDiZhu} message DDZ_JiaoDiZhu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_JiaoDiZhu.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsJiaoDiZhu);
            return writer;
        };

        /**
         * Encodes the specified DDZ_JiaoDiZhu message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_JiaoDiZhu.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhu
         * @static
         * @param {GameMsg_DDZ.IDDZ_JiaoDiZhu} message DDZ_JiaoDiZhu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_JiaoDiZhu.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_JiaoDiZhu message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_JiaoDiZhu} DDZ_JiaoDiZhu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_JiaoDiZhu.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_JiaoDiZhu();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.IsJiaoDiZhu = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("IsJiaoDiZhu"))
                throw $util.ProtocolError("missing required 'IsJiaoDiZhu'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_JiaoDiZhu message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_JiaoDiZhu} DDZ_JiaoDiZhu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_JiaoDiZhu.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_JiaoDiZhu message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhu
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_JiaoDiZhu.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.IsJiaoDiZhu !== "boolean")
                return "IsJiaoDiZhu: boolean expected";
            return null;
        };

        /**
         * Creates a DDZ_JiaoDiZhu message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhu
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_JiaoDiZhu} DDZ_JiaoDiZhu
         */
        DDZ_JiaoDiZhu.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_JiaoDiZhu)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_JiaoDiZhu();
            if (object.IsJiaoDiZhu != null)
                message.IsJiaoDiZhu = Boolean(object.IsJiaoDiZhu);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_JiaoDiZhu message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhu
         * @static
         * @param {GameMsg_DDZ.DDZ_JiaoDiZhu} message DDZ_JiaoDiZhu
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_JiaoDiZhu.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsJiaoDiZhu = false;
            if (message.IsJiaoDiZhu != null && message.hasOwnProperty("IsJiaoDiZhu"))
                object.IsJiaoDiZhu = message.IsJiaoDiZhu;
            return object;
        };

        /**
         * Converts this DDZ_JiaoDiZhu to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhu
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_JiaoDiZhu.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_JiaoDiZhu;
    })();

    GameMsg_DDZ.DDZ_JiaoDiZhuRet = (function() {

        /**
         * Properties of a DDZ_JiaoDiZhuRet.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_JiaoDiZhuRet
         * @property {GameMsg_DDZ.DDZ_ErrorCode} Code DDZ_JiaoDiZhuRet Code
         * @property {string|null} [Msg] DDZ_JiaoDiZhuRet Msg
         */

        /**
         * Constructs a new DDZ_JiaoDiZhuRet.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_JiaoDiZhuRet.
         * @implements IDDZ_JiaoDiZhuRet
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_JiaoDiZhuRet=} [properties] Properties to set
         */
        function DDZ_JiaoDiZhuRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_JiaoDiZhuRet Code.
         * @member {GameMsg_DDZ.DDZ_ErrorCode} Code
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhuRet
         * @instance
         */
        DDZ_JiaoDiZhuRet.prototype.Code = 1;

        /**
         * DDZ_JiaoDiZhuRet Msg.
         * @member {string} Msg
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhuRet
         * @instance
         */
        DDZ_JiaoDiZhuRet.prototype.Msg = "";

        /**
         * Creates a new DDZ_JiaoDiZhuRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhuRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_JiaoDiZhuRet=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_JiaoDiZhuRet} DDZ_JiaoDiZhuRet instance
         */
        DDZ_JiaoDiZhuRet.create = function create(properties) {
            return new DDZ_JiaoDiZhuRet(properties);
        };

        /**
         * Encodes the specified DDZ_JiaoDiZhuRet message. Does not implicitly {@link GameMsg_DDZ.DDZ_JiaoDiZhuRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhuRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_JiaoDiZhuRet} message DDZ_JiaoDiZhuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_JiaoDiZhuRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            return writer;
        };

        /**
         * Encodes the specified DDZ_JiaoDiZhuRet message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_JiaoDiZhuRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhuRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_JiaoDiZhuRet} message DDZ_JiaoDiZhuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_JiaoDiZhuRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_JiaoDiZhuRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_JiaoDiZhuRet} DDZ_JiaoDiZhuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_JiaoDiZhuRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_JiaoDiZhuRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_JiaoDiZhuRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_JiaoDiZhuRet} DDZ_JiaoDiZhuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_JiaoDiZhuRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_JiaoDiZhuRet message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhuRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_JiaoDiZhuRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.Code) {
            default:
                return "Code: enum value expected";
            case 1:
            case 2:
                break;
            }
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!$util.isString(message.Msg))
                    return "Msg: string expected";
            return null;
        };

        /**
         * Creates a DDZ_JiaoDiZhuRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhuRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_JiaoDiZhuRet} DDZ_JiaoDiZhuRet
         */
        DDZ_JiaoDiZhuRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_JiaoDiZhuRet)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_JiaoDiZhuRet();
            switch (object.Code) {
            case "OK":
            case 1:
                message.Code = 1;
                break;
            case "Fail":
            case 2:
                message.Code = 2;
                break;
            }
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_JiaoDiZhuRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhuRet
         * @static
         * @param {GameMsg_DDZ.DDZ_JiaoDiZhuRet} message DDZ_JiaoDiZhuRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_JiaoDiZhuRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = options.enums === String ? "OK" : 1;
                object.Msg = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = options.enums === String ? $root.GameMsg_DDZ.DDZ_ErrorCode[message.Code] : message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            return object;
        };

        /**
         * Converts this DDZ_JiaoDiZhuRet to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_JiaoDiZhuRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_JiaoDiZhuRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_JiaoDiZhuRet;
    })();

    GameMsg_DDZ.DDZ_QiangDiZhu = (function() {

        /**
         * Properties of a DDZ_QiangDiZhu.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_QiangDiZhu
         * @property {boolean} IsRob DDZ_QiangDiZhu IsRob
         */

        /**
         * Constructs a new DDZ_QiangDiZhu.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_QiangDiZhu.
         * @implements IDDZ_QiangDiZhu
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_QiangDiZhu=} [properties] Properties to set
         */
        function DDZ_QiangDiZhu(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_QiangDiZhu IsRob.
         * @member {boolean} IsRob
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhu
         * @instance
         */
        DDZ_QiangDiZhu.prototype.IsRob = false;

        /**
         * Creates a new DDZ_QiangDiZhu instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhu
         * @static
         * @param {GameMsg_DDZ.IDDZ_QiangDiZhu=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_QiangDiZhu} DDZ_QiangDiZhu instance
         */
        DDZ_QiangDiZhu.create = function create(properties) {
            return new DDZ_QiangDiZhu(properties);
        };

        /**
         * Encodes the specified DDZ_QiangDiZhu message. Does not implicitly {@link GameMsg_DDZ.DDZ_QiangDiZhu.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhu
         * @static
         * @param {GameMsg_DDZ.IDDZ_QiangDiZhu} message DDZ_QiangDiZhu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_QiangDiZhu.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsRob);
            return writer;
        };

        /**
         * Encodes the specified DDZ_QiangDiZhu message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_QiangDiZhu.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhu
         * @static
         * @param {GameMsg_DDZ.IDDZ_QiangDiZhu} message DDZ_QiangDiZhu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_QiangDiZhu.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_QiangDiZhu message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_QiangDiZhu} DDZ_QiangDiZhu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_QiangDiZhu.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_QiangDiZhu();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.IsRob = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("IsRob"))
                throw $util.ProtocolError("missing required 'IsRob'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_QiangDiZhu message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_QiangDiZhu} DDZ_QiangDiZhu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_QiangDiZhu.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_QiangDiZhu message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhu
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_QiangDiZhu.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.IsRob !== "boolean")
                return "IsRob: boolean expected";
            return null;
        };

        /**
         * Creates a DDZ_QiangDiZhu message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhu
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_QiangDiZhu} DDZ_QiangDiZhu
         */
        DDZ_QiangDiZhu.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_QiangDiZhu)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_QiangDiZhu();
            if (object.IsRob != null)
                message.IsRob = Boolean(object.IsRob);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_QiangDiZhu message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhu
         * @static
         * @param {GameMsg_DDZ.DDZ_QiangDiZhu} message DDZ_QiangDiZhu
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_QiangDiZhu.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsRob = false;
            if (message.IsRob != null && message.hasOwnProperty("IsRob"))
                object.IsRob = message.IsRob;
            return object;
        };

        /**
         * Converts this DDZ_QiangDiZhu to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhu
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_QiangDiZhu.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_QiangDiZhu;
    })();

    GameMsg_DDZ.DDZ_QiangDiZhuRet = (function() {

        /**
         * Properties of a DDZ_QiangDiZhuRet.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_QiangDiZhuRet
         * @property {GameMsg_DDZ.DDZ_ErrorCode} Code DDZ_QiangDiZhuRet Code
         * @property {string|null} [Msg] DDZ_QiangDiZhuRet Msg
         */

        /**
         * Constructs a new DDZ_QiangDiZhuRet.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_QiangDiZhuRet.
         * @implements IDDZ_QiangDiZhuRet
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_QiangDiZhuRet=} [properties] Properties to set
         */
        function DDZ_QiangDiZhuRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_QiangDiZhuRet Code.
         * @member {GameMsg_DDZ.DDZ_ErrorCode} Code
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhuRet
         * @instance
         */
        DDZ_QiangDiZhuRet.prototype.Code = 1;

        /**
         * DDZ_QiangDiZhuRet Msg.
         * @member {string} Msg
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhuRet
         * @instance
         */
        DDZ_QiangDiZhuRet.prototype.Msg = "";

        /**
         * Creates a new DDZ_QiangDiZhuRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhuRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_QiangDiZhuRet=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_QiangDiZhuRet} DDZ_QiangDiZhuRet instance
         */
        DDZ_QiangDiZhuRet.create = function create(properties) {
            return new DDZ_QiangDiZhuRet(properties);
        };

        /**
         * Encodes the specified DDZ_QiangDiZhuRet message. Does not implicitly {@link GameMsg_DDZ.DDZ_QiangDiZhuRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhuRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_QiangDiZhuRet} message DDZ_QiangDiZhuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_QiangDiZhuRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            return writer;
        };

        /**
         * Encodes the specified DDZ_QiangDiZhuRet message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_QiangDiZhuRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhuRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_QiangDiZhuRet} message DDZ_QiangDiZhuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_QiangDiZhuRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_QiangDiZhuRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_QiangDiZhuRet} DDZ_QiangDiZhuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_QiangDiZhuRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_QiangDiZhuRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_QiangDiZhuRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_QiangDiZhuRet} DDZ_QiangDiZhuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_QiangDiZhuRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_QiangDiZhuRet message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhuRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_QiangDiZhuRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.Code) {
            default:
                return "Code: enum value expected";
            case 1:
            case 2:
                break;
            }
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!$util.isString(message.Msg))
                    return "Msg: string expected";
            return null;
        };

        /**
         * Creates a DDZ_QiangDiZhuRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhuRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_QiangDiZhuRet} DDZ_QiangDiZhuRet
         */
        DDZ_QiangDiZhuRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_QiangDiZhuRet)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_QiangDiZhuRet();
            switch (object.Code) {
            case "OK":
            case 1:
                message.Code = 1;
                break;
            case "Fail":
            case 2:
                message.Code = 2;
                break;
            }
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_QiangDiZhuRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhuRet
         * @static
         * @param {GameMsg_DDZ.DDZ_QiangDiZhuRet} message DDZ_QiangDiZhuRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_QiangDiZhuRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = options.enums === String ? "OK" : 1;
                object.Msg = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = options.enums === String ? $root.GameMsg_DDZ.DDZ_ErrorCode[message.Code] : message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            return object;
        };

        /**
         * Converts this DDZ_QiangDiZhuRet to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_QiangDiZhuRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_QiangDiZhuRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_QiangDiZhuRet;
    })();

    GameMsg_DDZ.DDZ_MingPai = (function() {

        /**
         * Properties of a DDZ_MingPai.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_MingPai
         * @property {boolean} IsMingPai DDZ_MingPai IsMingPai
         */

        /**
         * Constructs a new DDZ_MingPai.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_MingPai.
         * @implements IDDZ_MingPai
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_MingPai=} [properties] Properties to set
         */
        function DDZ_MingPai(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_MingPai IsMingPai.
         * @member {boolean} IsMingPai
         * @memberof GameMsg_DDZ.DDZ_MingPai
         * @instance
         */
        DDZ_MingPai.prototype.IsMingPai = false;

        /**
         * Creates a new DDZ_MingPai instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_MingPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_MingPai=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_MingPai} DDZ_MingPai instance
         */
        DDZ_MingPai.create = function create(properties) {
            return new DDZ_MingPai(properties);
        };

        /**
         * Encodes the specified DDZ_MingPai message. Does not implicitly {@link GameMsg_DDZ.DDZ_MingPai.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_MingPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_MingPai} message DDZ_MingPai message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_MingPai.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsMingPai);
            return writer;
        };

        /**
         * Encodes the specified DDZ_MingPai message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_MingPai.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_MingPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_MingPai} message DDZ_MingPai message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_MingPai.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_MingPai message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_MingPai
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_MingPai} DDZ_MingPai
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_MingPai.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_MingPai();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.IsMingPai = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("IsMingPai"))
                throw $util.ProtocolError("missing required 'IsMingPai'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_MingPai message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_MingPai
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_MingPai} DDZ_MingPai
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_MingPai.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_MingPai message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_MingPai
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_MingPai.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.IsMingPai !== "boolean")
                return "IsMingPai: boolean expected";
            return null;
        };

        /**
         * Creates a DDZ_MingPai message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_MingPai
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_MingPai} DDZ_MingPai
         */
        DDZ_MingPai.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_MingPai)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_MingPai();
            if (object.IsMingPai != null)
                message.IsMingPai = Boolean(object.IsMingPai);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_MingPai message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_MingPai
         * @static
         * @param {GameMsg_DDZ.DDZ_MingPai} message DDZ_MingPai
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_MingPai.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsMingPai = false;
            if (message.IsMingPai != null && message.hasOwnProperty("IsMingPai"))
                object.IsMingPai = message.IsMingPai;
            return object;
        };

        /**
         * Converts this DDZ_MingPai to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_MingPai
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_MingPai.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_MingPai;
    })();

    GameMsg_DDZ.DDZ_MingPaiRet = (function() {

        /**
         * Properties of a DDZ_MingPaiRet.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_MingPaiRet
         * @property {GameMsg_DDZ.DDZ_ErrorCode} Code DDZ_MingPaiRet Code
         * @property {string} Msg DDZ_MingPaiRet Msg
         */

        /**
         * Constructs a new DDZ_MingPaiRet.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_MingPaiRet.
         * @implements IDDZ_MingPaiRet
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_MingPaiRet=} [properties] Properties to set
         */
        function DDZ_MingPaiRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_MingPaiRet Code.
         * @member {GameMsg_DDZ.DDZ_ErrorCode} Code
         * @memberof GameMsg_DDZ.DDZ_MingPaiRet
         * @instance
         */
        DDZ_MingPaiRet.prototype.Code = 1;

        /**
         * DDZ_MingPaiRet Msg.
         * @member {string} Msg
         * @memberof GameMsg_DDZ.DDZ_MingPaiRet
         * @instance
         */
        DDZ_MingPaiRet.prototype.Msg = "";

        /**
         * Creates a new DDZ_MingPaiRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_MingPaiRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_MingPaiRet=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_MingPaiRet} DDZ_MingPaiRet instance
         */
        DDZ_MingPaiRet.create = function create(properties) {
            return new DDZ_MingPaiRet(properties);
        };

        /**
         * Encodes the specified DDZ_MingPaiRet message. Does not implicitly {@link GameMsg_DDZ.DDZ_MingPaiRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_MingPaiRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_MingPaiRet} message DDZ_MingPaiRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_MingPaiRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            return writer;
        };

        /**
         * Encodes the specified DDZ_MingPaiRet message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_MingPaiRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_MingPaiRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_MingPaiRet} message DDZ_MingPaiRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_MingPaiRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_MingPaiRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_MingPaiRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_MingPaiRet} DDZ_MingPaiRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_MingPaiRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_MingPaiRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            if (!message.hasOwnProperty("Msg"))
                throw $util.ProtocolError("missing required 'Msg'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_MingPaiRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_MingPaiRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_MingPaiRet} DDZ_MingPaiRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_MingPaiRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_MingPaiRet message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_MingPaiRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_MingPaiRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.Code) {
            default:
                return "Code: enum value expected";
            case 1:
            case 2:
                break;
            }
            if (!$util.isString(message.Msg))
                return "Msg: string expected";
            return null;
        };

        /**
         * Creates a DDZ_MingPaiRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_MingPaiRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_MingPaiRet} DDZ_MingPaiRet
         */
        DDZ_MingPaiRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_MingPaiRet)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_MingPaiRet();
            switch (object.Code) {
            case "OK":
            case 1:
                message.Code = 1;
                break;
            case "Fail":
            case 2:
                message.Code = 2;
                break;
            }
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_MingPaiRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_MingPaiRet
         * @static
         * @param {GameMsg_DDZ.DDZ_MingPaiRet} message DDZ_MingPaiRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_MingPaiRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = options.enums === String ? "OK" : 1;
                object.Msg = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = options.enums === String ? $root.GameMsg_DDZ.DDZ_ErrorCode[message.Code] : message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            return object;
        };

        /**
         * Converts this DDZ_MingPaiRet to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_MingPaiRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_MingPaiRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_MingPaiRet;
    })();

    GameMsg_DDZ.DDZ_ChuPai = (function() {

        /**
         * Properties of a DDZ_ChuPai.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_ChuPai
         * @property {Array.<GameMsg_DDZ.ICard>|null} [Cards] DDZ_ChuPai Cards
         */

        /**
         * Constructs a new DDZ_ChuPai.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_ChuPai.
         * @implements IDDZ_ChuPai
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_ChuPai=} [properties] Properties to set
         */
        function DDZ_ChuPai(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_ChuPai Cards.
         * @member {Array.<GameMsg_DDZ.ICard>} Cards
         * @memberof GameMsg_DDZ.DDZ_ChuPai
         * @instance
         */
        DDZ_ChuPai.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new DDZ_ChuPai instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_ChuPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_ChuPai=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_ChuPai} DDZ_ChuPai instance
         */
        DDZ_ChuPai.create = function create(properties) {
            return new DDZ_ChuPai(properties);
        };

        /**
         * Encodes the specified DDZ_ChuPai message. Does not implicitly {@link GameMsg_DDZ.DDZ_ChuPai.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_ChuPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_ChuPai} message DDZ_ChuPai message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_ChuPai.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.GameMsg_DDZ.Card.encode(message.Cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DDZ_ChuPai message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_ChuPai.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_ChuPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_ChuPai} message DDZ_ChuPai message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_ChuPai.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_ChuPai message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_ChuPai
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_ChuPai} DDZ_ChuPai
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_ChuPai.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_ChuPai();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.GameMsg_DDZ.Card.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DDZ_ChuPai message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_ChuPai
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_ChuPai} DDZ_ChuPai
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_ChuPai.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_ChuPai message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_ChuPai
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_ChuPai.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.GameMsg_DDZ.Card.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DDZ_ChuPai message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_ChuPai
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_ChuPai} DDZ_ChuPai
         */
        DDZ_ChuPai.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_ChuPai)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_ChuPai();
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".GameMsg_DDZ.DDZ_ChuPai.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg_DDZ.DDZ_ChuPai.Cards: object expected");
                    message.Cards[i] = $root.GameMsg_DDZ.Card.fromObject(object.Cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DDZ_ChuPai message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_ChuPai
         * @static
         * @param {GameMsg_DDZ.DDZ_ChuPai} message DDZ_ChuPai
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_ChuPai.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Cards = [];
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = $root.GameMsg_DDZ.Card.toObject(message.Cards[j], options);
            }
            return object;
        };

        /**
         * Converts this DDZ_ChuPai to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_ChuPai
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_ChuPai.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_ChuPai;
    })();

    GameMsg_DDZ.DDZ_ChuPaiRet = (function() {

        /**
         * Properties of a DDZ_ChuPaiRet.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_ChuPaiRet
         * @property {GameMsg_DDZ.DDZ_ErrorCode} Code DDZ_ChuPaiRet Code
         * @property {string} Msg DDZ_ChuPaiRet Msg
         */

        /**
         * Constructs a new DDZ_ChuPaiRet.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_ChuPaiRet.
         * @implements IDDZ_ChuPaiRet
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_ChuPaiRet=} [properties] Properties to set
         */
        function DDZ_ChuPaiRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_ChuPaiRet Code.
         * @member {GameMsg_DDZ.DDZ_ErrorCode} Code
         * @memberof GameMsg_DDZ.DDZ_ChuPaiRet
         * @instance
         */
        DDZ_ChuPaiRet.prototype.Code = 1;

        /**
         * DDZ_ChuPaiRet Msg.
         * @member {string} Msg
         * @memberof GameMsg_DDZ.DDZ_ChuPaiRet
         * @instance
         */
        DDZ_ChuPaiRet.prototype.Msg = "";

        /**
         * Creates a new DDZ_ChuPaiRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_ChuPaiRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_ChuPaiRet=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_ChuPaiRet} DDZ_ChuPaiRet instance
         */
        DDZ_ChuPaiRet.create = function create(properties) {
            return new DDZ_ChuPaiRet(properties);
        };

        /**
         * Encodes the specified DDZ_ChuPaiRet message. Does not implicitly {@link GameMsg_DDZ.DDZ_ChuPaiRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_ChuPaiRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_ChuPaiRet} message DDZ_ChuPaiRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_ChuPaiRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            return writer;
        };

        /**
         * Encodes the specified DDZ_ChuPaiRet message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_ChuPaiRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_ChuPaiRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_ChuPaiRet} message DDZ_ChuPaiRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_ChuPaiRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_ChuPaiRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_ChuPaiRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_ChuPaiRet} DDZ_ChuPaiRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_ChuPaiRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_ChuPaiRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            if (!message.hasOwnProperty("Msg"))
                throw $util.ProtocolError("missing required 'Msg'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_ChuPaiRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_ChuPaiRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_ChuPaiRet} DDZ_ChuPaiRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_ChuPaiRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_ChuPaiRet message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_ChuPaiRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_ChuPaiRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.Code) {
            default:
                return "Code: enum value expected";
            case 1:
            case 2:
                break;
            }
            if (!$util.isString(message.Msg))
                return "Msg: string expected";
            return null;
        };

        /**
         * Creates a DDZ_ChuPaiRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_ChuPaiRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_ChuPaiRet} DDZ_ChuPaiRet
         */
        DDZ_ChuPaiRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_ChuPaiRet)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_ChuPaiRet();
            switch (object.Code) {
            case "OK":
            case 1:
                message.Code = 1;
                break;
            case "Fail":
            case 2:
                message.Code = 2;
                break;
            }
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_ChuPaiRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_ChuPaiRet
         * @static
         * @param {GameMsg_DDZ.DDZ_ChuPaiRet} message DDZ_ChuPaiRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_ChuPaiRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = options.enums === String ? "OK" : 1;
                object.Msg = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = options.enums === String ? $root.GameMsg_DDZ.DDZ_ErrorCode[message.Code] : message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            return object;
        };

        /**
         * Converts this DDZ_ChuPaiRet to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_ChuPaiRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_ChuPaiRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_ChuPaiRet;
    })();

    GameMsg_DDZ.DDZ_Pass = (function() {

        /**
         * Properties of a DDZ_Pass.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_Pass
         */

        /**
         * Constructs a new DDZ_Pass.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_Pass.
         * @implements IDDZ_Pass
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_Pass=} [properties] Properties to set
         */
        function DDZ_Pass(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DDZ_Pass instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_Pass
         * @static
         * @param {GameMsg_DDZ.IDDZ_Pass=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_Pass} DDZ_Pass instance
         */
        DDZ_Pass.create = function create(properties) {
            return new DDZ_Pass(properties);
        };

        /**
         * Encodes the specified DDZ_Pass message. Does not implicitly {@link GameMsg_DDZ.DDZ_Pass.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_Pass
         * @static
         * @param {GameMsg_DDZ.IDDZ_Pass} message DDZ_Pass message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_Pass.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DDZ_Pass message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_Pass.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_Pass
         * @static
         * @param {GameMsg_DDZ.IDDZ_Pass} message DDZ_Pass message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_Pass.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_Pass message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_Pass
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_Pass} DDZ_Pass
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_Pass.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_Pass();
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
         * Decodes a DDZ_Pass message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_Pass
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_Pass} DDZ_Pass
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_Pass.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_Pass message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_Pass
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_Pass.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DDZ_Pass message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_Pass
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_Pass} DDZ_Pass
         */
        DDZ_Pass.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_Pass)
                return object;
            return new $root.GameMsg_DDZ.DDZ_Pass();
        };

        /**
         * Creates a plain object from a DDZ_Pass message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_Pass
         * @static
         * @param {GameMsg_DDZ.DDZ_Pass} message DDZ_Pass
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_Pass.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DDZ_Pass to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_Pass
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_Pass.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_Pass;
    })();

    GameMsg_DDZ.DDZ_PassRet = (function() {

        /**
         * Properties of a DDZ_PassRet.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_PassRet
         * @property {GameMsg_DDZ.DDZ_ErrorCode} Code DDZ_PassRet Code
         * @property {string} Msg DDZ_PassRet Msg
         */

        /**
         * Constructs a new DDZ_PassRet.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_PassRet.
         * @implements IDDZ_PassRet
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_PassRet=} [properties] Properties to set
         */
        function DDZ_PassRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_PassRet Code.
         * @member {GameMsg_DDZ.DDZ_ErrorCode} Code
         * @memberof GameMsg_DDZ.DDZ_PassRet
         * @instance
         */
        DDZ_PassRet.prototype.Code = 1;

        /**
         * DDZ_PassRet Msg.
         * @member {string} Msg
         * @memberof GameMsg_DDZ.DDZ_PassRet
         * @instance
         */
        DDZ_PassRet.prototype.Msg = "";

        /**
         * Creates a new DDZ_PassRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_PassRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_PassRet=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_PassRet} DDZ_PassRet instance
         */
        DDZ_PassRet.create = function create(properties) {
            return new DDZ_PassRet(properties);
        };

        /**
         * Encodes the specified DDZ_PassRet message. Does not implicitly {@link GameMsg_DDZ.DDZ_PassRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_PassRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_PassRet} message DDZ_PassRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_PassRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            return writer;
        };

        /**
         * Encodes the specified DDZ_PassRet message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_PassRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_PassRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_PassRet} message DDZ_PassRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_PassRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_PassRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_PassRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_PassRet} DDZ_PassRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_PassRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_PassRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            if (!message.hasOwnProperty("Msg"))
                throw $util.ProtocolError("missing required 'Msg'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_PassRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_PassRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_PassRet} DDZ_PassRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_PassRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_PassRet message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_PassRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_PassRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.Code) {
            default:
                return "Code: enum value expected";
            case 1:
            case 2:
                break;
            }
            if (!$util.isString(message.Msg))
                return "Msg: string expected";
            return null;
        };

        /**
         * Creates a DDZ_PassRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_PassRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_PassRet} DDZ_PassRet
         */
        DDZ_PassRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_PassRet)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_PassRet();
            switch (object.Code) {
            case "OK":
            case 1:
                message.Code = 1;
                break;
            case "Fail":
            case 2:
                message.Code = 2;
                break;
            }
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_PassRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_PassRet
         * @static
         * @param {GameMsg_DDZ.DDZ_PassRet} message DDZ_PassRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_PassRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = options.enums === String ? "OK" : 1;
                object.Msg = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = options.enums === String ? $root.GameMsg_DDZ.DDZ_ErrorCode[message.Code] : message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            return object;
        };

        /**
         * Converts this DDZ_PassRet to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_PassRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_PassRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_PassRet;
    })();

    GameMsg_DDZ.DDZ_TuoGuan = (function() {

        /**
         * Properties of a DDZ_TuoGuan.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_TuoGuan
         */

        /**
         * Constructs a new DDZ_TuoGuan.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_TuoGuan.
         * @implements IDDZ_TuoGuan
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_TuoGuan=} [properties] Properties to set
         */
        function DDZ_TuoGuan(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DDZ_TuoGuan instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_TuoGuan
         * @static
         * @param {GameMsg_DDZ.IDDZ_TuoGuan=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_TuoGuan} DDZ_TuoGuan instance
         */
        DDZ_TuoGuan.create = function create(properties) {
            return new DDZ_TuoGuan(properties);
        };

        /**
         * Encodes the specified DDZ_TuoGuan message. Does not implicitly {@link GameMsg_DDZ.DDZ_TuoGuan.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_TuoGuan
         * @static
         * @param {GameMsg_DDZ.IDDZ_TuoGuan} message DDZ_TuoGuan message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_TuoGuan.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DDZ_TuoGuan message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_TuoGuan.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_TuoGuan
         * @static
         * @param {GameMsg_DDZ.IDDZ_TuoGuan} message DDZ_TuoGuan message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_TuoGuan.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_TuoGuan message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_TuoGuan
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_TuoGuan} DDZ_TuoGuan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_TuoGuan.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_TuoGuan();
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
         * Decodes a DDZ_TuoGuan message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_TuoGuan
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_TuoGuan} DDZ_TuoGuan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_TuoGuan.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_TuoGuan message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_TuoGuan
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_TuoGuan.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DDZ_TuoGuan message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_TuoGuan
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_TuoGuan} DDZ_TuoGuan
         */
        DDZ_TuoGuan.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_TuoGuan)
                return object;
            return new $root.GameMsg_DDZ.DDZ_TuoGuan();
        };

        /**
         * Creates a plain object from a DDZ_TuoGuan message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_TuoGuan
         * @static
         * @param {GameMsg_DDZ.DDZ_TuoGuan} message DDZ_TuoGuan
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_TuoGuan.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DDZ_TuoGuan to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_TuoGuan
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_TuoGuan.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_TuoGuan;
    })();

    GameMsg_DDZ.DDZ_TuoGuanRet = (function() {

        /**
         * Properties of a DDZ_TuoGuanRet.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_TuoGuanRet
         * @property {GameMsg_DDZ.DDZ_ErrorCode} Code DDZ_TuoGuanRet Code
         * @property {string} Msg DDZ_TuoGuanRet Msg
         */

        /**
         * Constructs a new DDZ_TuoGuanRet.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_TuoGuanRet.
         * @implements IDDZ_TuoGuanRet
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_TuoGuanRet=} [properties] Properties to set
         */
        function DDZ_TuoGuanRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_TuoGuanRet Code.
         * @member {GameMsg_DDZ.DDZ_ErrorCode} Code
         * @memberof GameMsg_DDZ.DDZ_TuoGuanRet
         * @instance
         */
        DDZ_TuoGuanRet.prototype.Code = 1;

        /**
         * DDZ_TuoGuanRet Msg.
         * @member {string} Msg
         * @memberof GameMsg_DDZ.DDZ_TuoGuanRet
         * @instance
         */
        DDZ_TuoGuanRet.prototype.Msg = "";

        /**
         * Creates a new DDZ_TuoGuanRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_TuoGuanRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_TuoGuanRet=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_TuoGuanRet} DDZ_TuoGuanRet instance
         */
        DDZ_TuoGuanRet.create = function create(properties) {
            return new DDZ_TuoGuanRet(properties);
        };

        /**
         * Encodes the specified DDZ_TuoGuanRet message. Does not implicitly {@link GameMsg_DDZ.DDZ_TuoGuanRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_TuoGuanRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_TuoGuanRet} message DDZ_TuoGuanRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_TuoGuanRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            return writer;
        };

        /**
         * Encodes the specified DDZ_TuoGuanRet message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_TuoGuanRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_TuoGuanRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_TuoGuanRet} message DDZ_TuoGuanRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_TuoGuanRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_TuoGuanRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_TuoGuanRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_TuoGuanRet} DDZ_TuoGuanRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_TuoGuanRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_TuoGuanRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            if (!message.hasOwnProperty("Msg"))
                throw $util.ProtocolError("missing required 'Msg'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_TuoGuanRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_TuoGuanRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_TuoGuanRet} DDZ_TuoGuanRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_TuoGuanRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_TuoGuanRet message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_TuoGuanRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_TuoGuanRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.Code) {
            default:
                return "Code: enum value expected";
            case 1:
            case 2:
                break;
            }
            if (!$util.isString(message.Msg))
                return "Msg: string expected";
            return null;
        };

        /**
         * Creates a DDZ_TuoGuanRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_TuoGuanRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_TuoGuanRet} DDZ_TuoGuanRet
         */
        DDZ_TuoGuanRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_TuoGuanRet)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_TuoGuanRet();
            switch (object.Code) {
            case "OK":
            case 1:
                message.Code = 1;
                break;
            case "Fail":
            case 2:
                message.Code = 2;
                break;
            }
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_TuoGuanRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_TuoGuanRet
         * @static
         * @param {GameMsg_DDZ.DDZ_TuoGuanRet} message DDZ_TuoGuanRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_TuoGuanRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = options.enums === String ? "OK" : 1;
                object.Msg = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = options.enums === String ? $root.GameMsg_DDZ.DDZ_ErrorCode[message.Code] : message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            return object;
        };

        /**
         * Converts this DDZ_TuoGuanRet to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_TuoGuanRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_TuoGuanRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_TuoGuanRet;
    })();

    /**
     * UserActionDo enum.
     * @name GameMsg_DDZ.UserActionDo
     * @enum {string}
     * @property {number} UANONE=1 UANONE value
     * @property {number} UANOTDO=2 UANOTDO value
     * @property {number} UADO=3 UADO value
     */
    GameMsg_DDZ.UserActionDo = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "UANONE"] = 1;
        values[valuesById[2] = "UANOTDO"] = 2;
        values[valuesById[3] = "UADO"] = 3;
        return values;
    })();

    GameMsg_DDZ.DDZ_PlayerInfo = (function() {

        /**
         * Properties of a DDZ_PlayerInfo.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_PlayerInfo
         * @property {number} UserId DDZ_PlayerInfo UserId
         * @property {number} SeatNo DDZ_PlayerInfo SeatNo
         * @property {boolean} IsDiZhu DDZ_PlayerInfo IsDiZhu
         * @property {boolean} IsMingPai DDZ_PlayerInfo IsMingPai
         * @property {GameMsg_DDZ.UserActionDo} IsJiaoDiZhu DDZ_PlayerInfo IsJiaoDiZhu
         * @property {GameMsg_DDZ.UserActionDo} IsQiangDiZhu DDZ_PlayerInfo IsQiangDiZhu
         * @property {number} CardsCount DDZ_PlayerInfo CardsCount
         * @property {GameMsg_DDZ.ICardArry|null} [Cards] DDZ_PlayerInfo Cards
         * @property {boolean} IsTuoGuan DDZ_PlayerInfo IsTuoGuan
         */

        /**
         * Constructs a new DDZ_PlayerInfo.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_PlayerInfo.
         * @implements IDDZ_PlayerInfo
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_PlayerInfo=} [properties] Properties to set
         */
        function DDZ_PlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_PlayerInfo UserId.
         * @member {number} UserId
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @instance
         */
        DDZ_PlayerInfo.prototype.UserId = 0;

        /**
         * DDZ_PlayerInfo SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @instance
         */
        DDZ_PlayerInfo.prototype.SeatNo = 0;

        /**
         * DDZ_PlayerInfo IsDiZhu.
         * @member {boolean} IsDiZhu
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @instance
         */
        DDZ_PlayerInfo.prototype.IsDiZhu = false;

        /**
         * DDZ_PlayerInfo IsMingPai.
         * @member {boolean} IsMingPai
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @instance
         */
        DDZ_PlayerInfo.prototype.IsMingPai = false;

        /**
         * DDZ_PlayerInfo IsJiaoDiZhu.
         * @member {GameMsg_DDZ.UserActionDo} IsJiaoDiZhu
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @instance
         */
        DDZ_PlayerInfo.prototype.IsJiaoDiZhu = 1;

        /**
         * DDZ_PlayerInfo IsQiangDiZhu.
         * @member {GameMsg_DDZ.UserActionDo} IsQiangDiZhu
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @instance
         */
        DDZ_PlayerInfo.prototype.IsQiangDiZhu = 1;

        /**
         * DDZ_PlayerInfo CardsCount.
         * @member {number} CardsCount
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @instance
         */
        DDZ_PlayerInfo.prototype.CardsCount = 0;

        /**
         * DDZ_PlayerInfo Cards.
         * @member {GameMsg_DDZ.ICardArry|null|undefined} Cards
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @instance
         */
        DDZ_PlayerInfo.prototype.Cards = null;

        /**
         * DDZ_PlayerInfo IsTuoGuan.
         * @member {boolean} IsTuoGuan
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @instance
         */
        DDZ_PlayerInfo.prototype.IsTuoGuan = false;

        /**
         * Creates a new DDZ_PlayerInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_PlayerInfo=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_PlayerInfo} DDZ_PlayerInfo instance
         */
        DDZ_PlayerInfo.create = function create(properties) {
            return new DDZ_PlayerInfo(properties);
        };

        /**
         * Encodes the specified DDZ_PlayerInfo message. Does not implicitly {@link GameMsg_DDZ.DDZ_PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_PlayerInfo} message DDZ_PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SeatNo);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.IsDiZhu);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.IsMingPai);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.IsJiaoDiZhu);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.IsQiangDiZhu);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.CardsCount);
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                $root.GameMsg_DDZ.CardArry.encode(message.Cards, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.IsTuoGuan);
            return writer;
        };

        /**
         * Encodes the specified DDZ_PlayerInfo message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_PlayerInfo} message DDZ_PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_PlayerInfo} DDZ_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.int32();
                    break;
                case 2:
                    message.SeatNo = reader.int32();
                    break;
                case 3:
                    message.IsDiZhu = reader.bool();
                    break;
                case 4:
                    message.IsMingPai = reader.bool();
                    break;
                case 5:
                    message.IsJiaoDiZhu = reader.int32();
                    break;
                case 6:
                    message.IsQiangDiZhu = reader.int32();
                    break;
                case 7:
                    message.CardsCount = reader.int32();
                    break;
                case 8:
                    message.Cards = $root.GameMsg_DDZ.CardArry.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.IsTuoGuan = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserId"))
                throw $util.ProtocolError("missing required 'UserId'", { instance: message });
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            if (!message.hasOwnProperty("IsDiZhu"))
                throw $util.ProtocolError("missing required 'IsDiZhu'", { instance: message });
            if (!message.hasOwnProperty("IsMingPai"))
                throw $util.ProtocolError("missing required 'IsMingPai'", { instance: message });
            if (!message.hasOwnProperty("IsJiaoDiZhu"))
                throw $util.ProtocolError("missing required 'IsJiaoDiZhu'", { instance: message });
            if (!message.hasOwnProperty("IsQiangDiZhu"))
                throw $util.ProtocolError("missing required 'IsQiangDiZhu'", { instance: message });
            if (!message.hasOwnProperty("CardsCount"))
                throw $util.ProtocolError("missing required 'CardsCount'", { instance: message });
            if (!message.hasOwnProperty("IsTuoGuan"))
                throw $util.ProtocolError("missing required 'IsTuoGuan'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_PlayerInfo} DDZ_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_PlayerInfo message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserId))
                return "UserId: integer expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (typeof message.IsDiZhu !== "boolean")
                return "IsDiZhu: boolean expected";
            if (typeof message.IsMingPai !== "boolean")
                return "IsMingPai: boolean expected";
            switch (message.IsJiaoDiZhu) {
            default:
                return "IsJiaoDiZhu: enum value expected";
            case 1:
            case 2:
            case 3:
                break;
            }
            switch (message.IsQiangDiZhu) {
            default:
                return "IsQiangDiZhu: enum value expected";
            case 1:
            case 2:
            case 3:
                break;
            }
            if (!$util.isInteger(message.CardsCount))
                return "CardsCount: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                var error = $root.GameMsg_DDZ.CardArry.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            if (typeof message.IsTuoGuan !== "boolean")
                return "IsTuoGuan: boolean expected";
            return null;
        };

        /**
         * Creates a DDZ_PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_PlayerInfo} DDZ_PlayerInfo
         */
        DDZ_PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_PlayerInfo)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_PlayerInfo();
            if (object.UserId != null)
                message.UserId = object.UserId | 0;
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.IsDiZhu != null)
                message.IsDiZhu = Boolean(object.IsDiZhu);
            if (object.IsMingPai != null)
                message.IsMingPai = Boolean(object.IsMingPai);
            switch (object.IsJiaoDiZhu) {
            case "UANONE":
            case 1:
                message.IsJiaoDiZhu = 1;
                break;
            case "UANOTDO":
            case 2:
                message.IsJiaoDiZhu = 2;
                break;
            case "UADO":
            case 3:
                message.IsJiaoDiZhu = 3;
                break;
            }
            switch (object.IsQiangDiZhu) {
            case "UANONE":
            case 1:
                message.IsQiangDiZhu = 1;
                break;
            case "UANOTDO":
            case 2:
                message.IsQiangDiZhu = 2;
                break;
            case "UADO":
            case 3:
                message.IsQiangDiZhu = 3;
                break;
            }
            if (object.CardsCount != null)
                message.CardsCount = object.CardsCount | 0;
            if (object.Cards != null) {
                if (typeof object.Cards !== "object")
                    throw TypeError(".GameMsg_DDZ.DDZ_PlayerInfo.Cards: object expected");
                message.Cards = $root.GameMsg_DDZ.CardArry.fromObject(object.Cards);
            }
            if (object.IsTuoGuan != null)
                message.IsTuoGuan = Boolean(object.IsTuoGuan);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @static
         * @param {GameMsg_DDZ.DDZ_PlayerInfo} message DDZ_PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserId = 0;
                object.SeatNo = 0;
                object.IsDiZhu = false;
                object.IsMingPai = false;
                object.IsJiaoDiZhu = options.enums === String ? "UANONE" : 1;
                object.IsQiangDiZhu = options.enums === String ? "UANONE" : 1;
                object.CardsCount = 0;
                object.Cards = null;
                object.IsTuoGuan = false;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                object.UserId = message.UserId;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.IsDiZhu != null && message.hasOwnProperty("IsDiZhu"))
                object.IsDiZhu = message.IsDiZhu;
            if (message.IsMingPai != null && message.hasOwnProperty("IsMingPai"))
                object.IsMingPai = message.IsMingPai;
            if (message.IsJiaoDiZhu != null && message.hasOwnProperty("IsJiaoDiZhu"))
                object.IsJiaoDiZhu = options.enums === String ? $root.GameMsg_DDZ.UserActionDo[message.IsJiaoDiZhu] : message.IsJiaoDiZhu;
            if (message.IsQiangDiZhu != null && message.hasOwnProperty("IsQiangDiZhu"))
                object.IsQiangDiZhu = options.enums === String ? $root.GameMsg_DDZ.UserActionDo[message.IsQiangDiZhu] : message.IsQiangDiZhu;
            if (message.CardsCount != null && message.hasOwnProperty("CardsCount"))
                object.CardsCount = message.CardsCount;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = $root.GameMsg_DDZ.CardArry.toObject(message.Cards, options);
            if (message.IsTuoGuan != null && message.hasOwnProperty("IsTuoGuan"))
                object.IsTuoGuan = message.IsTuoGuan;
            return object;
        };

        /**
         * Converts this DDZ_PlayerInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_PlayerInfo;
    })();

    GameMsg_DDZ.DDZ_SendCardInfo = (function() {

        /**
         * Properties of a DDZ_SendCardInfo.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_SendCardInfo
         * @property {number|null} [SeatNo] DDZ_SendCardInfo SeatNo
         * @property {number|null} [SendType] DDZ_SendCardInfo SendType
         * @property {GameMsg_DDZ.ICardArry|null} [SendOutCards] DDZ_SendCardInfo SendOutCards
         */

        /**
         * Constructs a new DDZ_SendCardInfo.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_SendCardInfo.
         * @implements IDDZ_SendCardInfo
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_SendCardInfo=} [properties] Properties to set
         */
        function DDZ_SendCardInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_SendCardInfo SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DDZ.DDZ_SendCardInfo
         * @instance
         */
        DDZ_SendCardInfo.prototype.SeatNo = 0;

        /**
         * DDZ_SendCardInfo SendType.
         * @member {number} SendType
         * @memberof GameMsg_DDZ.DDZ_SendCardInfo
         * @instance
         */
        DDZ_SendCardInfo.prototype.SendType = 0;

        /**
         * DDZ_SendCardInfo SendOutCards.
         * @member {GameMsg_DDZ.ICardArry|null|undefined} SendOutCards
         * @memberof GameMsg_DDZ.DDZ_SendCardInfo
         * @instance
         */
        DDZ_SendCardInfo.prototype.SendOutCards = null;

        /**
         * Creates a new DDZ_SendCardInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_SendCardInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_SendCardInfo=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_SendCardInfo} DDZ_SendCardInfo instance
         */
        DDZ_SendCardInfo.create = function create(properties) {
            return new DDZ_SendCardInfo(properties);
        };

        /**
         * Encodes the specified DDZ_SendCardInfo message. Does not implicitly {@link GameMsg_DDZ.DDZ_SendCardInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_SendCardInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_SendCardInfo} message DDZ_SendCardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_SendCardInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            if (message.SendType != null && message.hasOwnProperty("SendType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SendType);
            if (message.SendOutCards != null && message.hasOwnProperty("SendOutCards"))
                $root.GameMsg_DDZ.CardArry.encode(message.SendOutCards, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DDZ_SendCardInfo message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_SendCardInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_SendCardInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_SendCardInfo} message DDZ_SendCardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_SendCardInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_SendCardInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_SendCardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_SendCardInfo} DDZ_SendCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_SendCardInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_SendCardInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SeatNo = reader.int32();
                    break;
                case 2:
                    message.SendType = reader.int32();
                    break;
                case 3:
                    message.SendOutCards = $root.GameMsg_DDZ.CardArry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DDZ_SendCardInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_SendCardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_SendCardInfo} DDZ_SendCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_SendCardInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_SendCardInfo message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_SendCardInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_SendCardInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                if (!$util.isInteger(message.SeatNo))
                    return "SeatNo: integer expected";
            if (message.SendType != null && message.hasOwnProperty("SendType"))
                if (!$util.isInteger(message.SendType))
                    return "SendType: integer expected";
            if (message.SendOutCards != null && message.hasOwnProperty("SendOutCards")) {
                var error = $root.GameMsg_DDZ.CardArry.verify(message.SendOutCards);
                if (error)
                    return "SendOutCards." + error;
            }
            return null;
        };

        /**
         * Creates a DDZ_SendCardInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_SendCardInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_SendCardInfo} DDZ_SendCardInfo
         */
        DDZ_SendCardInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_SendCardInfo)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_SendCardInfo();
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.SendType != null)
                message.SendType = object.SendType | 0;
            if (object.SendOutCards != null) {
                if (typeof object.SendOutCards !== "object")
                    throw TypeError(".GameMsg_DDZ.DDZ_SendCardInfo.SendOutCards: object expected");
                message.SendOutCards = $root.GameMsg_DDZ.CardArry.fromObject(object.SendOutCards);
            }
            return message;
        };

        /**
         * Creates a plain object from a DDZ_SendCardInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_SendCardInfo
         * @static
         * @param {GameMsg_DDZ.DDZ_SendCardInfo} message DDZ_SendCardInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_SendCardInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SeatNo = 0;
                object.SendType = 0;
                object.SendOutCards = null;
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.SendType != null && message.hasOwnProperty("SendType"))
                object.SendType = message.SendType;
            if (message.SendOutCards != null && message.hasOwnProperty("SendOutCards"))
                object.SendOutCards = $root.GameMsg_DDZ.CardArry.toObject(message.SendOutCards, options);
            return object;
        };

        /**
         * Converts this DDZ_SendCardInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_SendCardInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_SendCardInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_SendCardInfo;
    })();

    GameMsg_DDZ.DDZ_UserRecoverRet = (function() {

        /**
         * Properties of a DDZ_UserRecoverRet.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_UserRecoverRet
         * @property {number} UserId DDZ_UserRecoverRet UserId
         * @property {number} GameStep DDZ_UserRecoverRet GameStep
         * @property {number} Odds DDZ_UserRecoverRet Odds
         * @property {number} OptSeat DDZ_UserRecoverRet OptSeat
         * @property {number} OptLastTime DDZ_UserRecoverRet OptLastTime
         * @property {number} DiZhuSeat DDZ_UserRecoverRet DiZhuSeat
         * @property {Array.<GameMsg_DDZ.IDDZ_PlayerInfo>|null} [Opi] DDZ_UserRecoverRet Opi
         * @property {GameMsg_DDZ.ICardArry|null} [DiZhuCards] DDZ_UserRecoverRet DiZhuCards
         * @property {number|null} [DiZhuCardType] DDZ_UserRecoverRet DiZhuCardType
         * @property {Array.<GameMsg_DDZ.IDDZ_SendCardInfo>|null} [Sci] DDZ_UserRecoverRet Sci
         * @property {boolean} IsSendCard DDZ_UserRecoverRet IsSendCard
         * @property {number} Calculation DDZ_UserRecoverRet Calculation
         */

        /**
         * Constructs a new DDZ_UserRecoverRet.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_UserRecoverRet.
         * @implements IDDZ_UserRecoverRet
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_UserRecoverRet=} [properties] Properties to set
         */
        function DDZ_UserRecoverRet(properties) {
            this.Opi = [];
            this.Sci = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_UserRecoverRet UserId.
         * @member {number} UserId
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @instance
         */
        DDZ_UserRecoverRet.prototype.UserId = 0;

        /**
         * DDZ_UserRecoverRet GameStep.
         * @member {number} GameStep
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @instance
         */
        DDZ_UserRecoverRet.prototype.GameStep = 0;

        /**
         * DDZ_UserRecoverRet Odds.
         * @member {number} Odds
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @instance
         */
        DDZ_UserRecoverRet.prototype.Odds = 0;

        /**
         * DDZ_UserRecoverRet OptSeat.
         * @member {number} OptSeat
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @instance
         */
        DDZ_UserRecoverRet.prototype.OptSeat = 0;

        /**
         * DDZ_UserRecoverRet OptLastTime.
         * @member {number} OptLastTime
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @instance
         */
        DDZ_UserRecoverRet.prototype.OptLastTime = 0;

        /**
         * DDZ_UserRecoverRet DiZhuSeat.
         * @member {number} DiZhuSeat
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @instance
         */
        DDZ_UserRecoverRet.prototype.DiZhuSeat = 0;

        /**
         * DDZ_UserRecoverRet Opi.
         * @member {Array.<GameMsg_DDZ.IDDZ_PlayerInfo>} Opi
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @instance
         */
        DDZ_UserRecoverRet.prototype.Opi = $util.emptyArray;

        /**
         * DDZ_UserRecoverRet DiZhuCards.
         * @member {GameMsg_DDZ.ICardArry|null|undefined} DiZhuCards
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @instance
         */
        DDZ_UserRecoverRet.prototype.DiZhuCards = null;

        /**
         * DDZ_UserRecoverRet DiZhuCardType.
         * @member {number} DiZhuCardType
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @instance
         */
        DDZ_UserRecoverRet.prototype.DiZhuCardType = 0;

        /**
         * DDZ_UserRecoverRet Sci.
         * @member {Array.<GameMsg_DDZ.IDDZ_SendCardInfo>} Sci
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @instance
         */
        DDZ_UserRecoverRet.prototype.Sci = $util.emptyArray;

        /**
         * DDZ_UserRecoverRet IsSendCard.
         * @member {boolean} IsSendCard
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @instance
         */
        DDZ_UserRecoverRet.prototype.IsSendCard = false;

        /**
         * DDZ_UserRecoverRet Calculation.
         * @member {number} Calculation
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @instance
         */
        DDZ_UserRecoverRet.prototype.Calculation = 0;

        /**
         * Creates a new DDZ_UserRecoverRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_UserRecoverRet=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_UserRecoverRet} DDZ_UserRecoverRet instance
         */
        DDZ_UserRecoverRet.create = function create(properties) {
            return new DDZ_UserRecoverRet(properties);
        };

        /**
         * Encodes the specified DDZ_UserRecoverRet message. Does not implicitly {@link GameMsg_DDZ.DDZ_UserRecoverRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_UserRecoverRet} message DDZ_UserRecoverRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_UserRecoverRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameStep);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Odds);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.OptSeat);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.OptLastTime);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.DiZhuSeat);
            if (message.Opi != null && message.Opi.length)
                for (var i = 0; i < message.Opi.length; ++i)
                    $root.GameMsg_DDZ.DDZ_PlayerInfo.encode(message.Opi[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.DiZhuCards != null && message.hasOwnProperty("DiZhuCards"))
                $root.GameMsg_DDZ.CardArry.encode(message.DiZhuCards, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.DiZhuCardType != null && message.hasOwnProperty("DiZhuCardType"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.DiZhuCardType);
            if (message.Sci != null && message.Sci.length)
                for (var i = 0; i < message.Sci.length; ++i)
                    $root.GameMsg_DDZ.DDZ_SendCardInfo.encode(message.Sci[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.IsSendCard);
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.Calculation);
            return writer;
        };

        /**
         * Encodes the specified DDZ_UserRecoverRet message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_UserRecoverRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @static
         * @param {GameMsg_DDZ.IDDZ_UserRecoverRet} message DDZ_UserRecoverRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_UserRecoverRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_UserRecoverRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_UserRecoverRet} DDZ_UserRecoverRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_UserRecoverRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_UserRecoverRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.int32();
                    break;
                case 2:
                    message.GameStep = reader.int32();
                    break;
                case 3:
                    message.Odds = reader.int32();
                    break;
                case 4:
                    message.OptSeat = reader.int32();
                    break;
                case 5:
                    message.OptLastTime = reader.int32();
                    break;
                case 6:
                    message.DiZhuSeat = reader.int32();
                    break;
                case 7:
                    if (!(message.Opi && message.Opi.length))
                        message.Opi = [];
                    message.Opi.push($root.GameMsg_DDZ.DDZ_PlayerInfo.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.DiZhuCards = $root.GameMsg_DDZ.CardArry.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.DiZhuCardType = reader.int32();
                    break;
                case 10:
                    if (!(message.Sci && message.Sci.length))
                        message.Sci = [];
                    message.Sci.push($root.GameMsg_DDZ.DDZ_SendCardInfo.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.IsSendCard = reader.bool();
                    break;
                case 12:
                    message.Calculation = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserId"))
                throw $util.ProtocolError("missing required 'UserId'", { instance: message });
            if (!message.hasOwnProperty("GameStep"))
                throw $util.ProtocolError("missing required 'GameStep'", { instance: message });
            if (!message.hasOwnProperty("Odds"))
                throw $util.ProtocolError("missing required 'Odds'", { instance: message });
            if (!message.hasOwnProperty("OptSeat"))
                throw $util.ProtocolError("missing required 'OptSeat'", { instance: message });
            if (!message.hasOwnProperty("OptLastTime"))
                throw $util.ProtocolError("missing required 'OptLastTime'", { instance: message });
            if (!message.hasOwnProperty("DiZhuSeat"))
                throw $util.ProtocolError("missing required 'DiZhuSeat'", { instance: message });
            if (!message.hasOwnProperty("IsSendCard"))
                throw $util.ProtocolError("missing required 'IsSendCard'", { instance: message });
            if (!message.hasOwnProperty("Calculation"))
                throw $util.ProtocolError("missing required 'Calculation'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_UserRecoverRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_UserRecoverRet} DDZ_UserRecoverRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_UserRecoverRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_UserRecoverRet message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_UserRecoverRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserId))
                return "UserId: integer expected";
            if (!$util.isInteger(message.GameStep))
                return "GameStep: integer expected";
            if (!$util.isInteger(message.Odds))
                return "Odds: integer expected";
            if (!$util.isInteger(message.OptSeat))
                return "OptSeat: integer expected";
            if (!$util.isInteger(message.OptLastTime))
                return "OptLastTime: integer expected";
            if (!$util.isInteger(message.DiZhuSeat))
                return "DiZhuSeat: integer expected";
            if (message.Opi != null && message.hasOwnProperty("Opi")) {
                if (!Array.isArray(message.Opi))
                    return "Opi: array expected";
                for (var i = 0; i < message.Opi.length; ++i) {
                    var error = $root.GameMsg_DDZ.DDZ_PlayerInfo.verify(message.Opi[i]);
                    if (error)
                        return "Opi." + error;
                }
            }
            if (message.DiZhuCards != null && message.hasOwnProperty("DiZhuCards")) {
                var error = $root.GameMsg_DDZ.CardArry.verify(message.DiZhuCards);
                if (error)
                    return "DiZhuCards." + error;
            }
            if (message.DiZhuCardType != null && message.hasOwnProperty("DiZhuCardType"))
                if (!$util.isInteger(message.DiZhuCardType))
                    return "DiZhuCardType: integer expected";
            if (message.Sci != null && message.hasOwnProperty("Sci")) {
                if (!Array.isArray(message.Sci))
                    return "Sci: array expected";
                for (var i = 0; i < message.Sci.length; ++i) {
                    var error = $root.GameMsg_DDZ.DDZ_SendCardInfo.verify(message.Sci[i]);
                    if (error)
                        return "Sci." + error;
                }
            }
            if (typeof message.IsSendCard !== "boolean")
                return "IsSendCard: boolean expected";
            if (!$util.isInteger(message.Calculation))
                return "Calculation: integer expected";
            return null;
        };

        /**
         * Creates a DDZ_UserRecoverRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_UserRecoverRet} DDZ_UserRecoverRet
         */
        DDZ_UserRecoverRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_UserRecoverRet)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_UserRecoverRet();
            if (object.UserId != null)
                message.UserId = object.UserId | 0;
            if (object.GameStep != null)
                message.GameStep = object.GameStep | 0;
            if (object.Odds != null)
                message.Odds = object.Odds | 0;
            if (object.OptSeat != null)
                message.OptSeat = object.OptSeat | 0;
            if (object.OptLastTime != null)
                message.OptLastTime = object.OptLastTime | 0;
            if (object.DiZhuSeat != null)
                message.DiZhuSeat = object.DiZhuSeat | 0;
            if (object.Opi) {
                if (!Array.isArray(object.Opi))
                    throw TypeError(".GameMsg_DDZ.DDZ_UserRecoverRet.Opi: array expected");
                message.Opi = [];
                for (var i = 0; i < object.Opi.length; ++i) {
                    if (typeof object.Opi[i] !== "object")
                        throw TypeError(".GameMsg_DDZ.DDZ_UserRecoverRet.Opi: object expected");
                    message.Opi[i] = $root.GameMsg_DDZ.DDZ_PlayerInfo.fromObject(object.Opi[i]);
                }
            }
            if (object.DiZhuCards != null) {
                if (typeof object.DiZhuCards !== "object")
                    throw TypeError(".GameMsg_DDZ.DDZ_UserRecoverRet.DiZhuCards: object expected");
                message.DiZhuCards = $root.GameMsg_DDZ.CardArry.fromObject(object.DiZhuCards);
            }
            if (object.DiZhuCardType != null)
                message.DiZhuCardType = object.DiZhuCardType | 0;
            if (object.Sci) {
                if (!Array.isArray(object.Sci))
                    throw TypeError(".GameMsg_DDZ.DDZ_UserRecoverRet.Sci: array expected");
                message.Sci = [];
                for (var i = 0; i < object.Sci.length; ++i) {
                    if (typeof object.Sci[i] !== "object")
                        throw TypeError(".GameMsg_DDZ.DDZ_UserRecoverRet.Sci: object expected");
                    message.Sci[i] = $root.GameMsg_DDZ.DDZ_SendCardInfo.fromObject(object.Sci[i]);
                }
            }
            if (object.IsSendCard != null)
                message.IsSendCard = Boolean(object.IsSendCard);
            if (object.Calculation != null)
                message.Calculation = object.Calculation | 0;
            return message;
        };

        /**
         * Creates a plain object from a DDZ_UserRecoverRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @static
         * @param {GameMsg_DDZ.DDZ_UserRecoverRet} message DDZ_UserRecoverRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_UserRecoverRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Opi = [];
                object.Sci = [];
            }
            if (options.defaults) {
                object.UserId = 0;
                object.GameStep = 0;
                object.Odds = 0;
                object.OptSeat = 0;
                object.OptLastTime = 0;
                object.DiZhuSeat = 0;
                object.DiZhuCards = null;
                object.DiZhuCardType = 0;
                object.IsSendCard = false;
                object.Calculation = 0;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                object.UserId = message.UserId;
            if (message.GameStep != null && message.hasOwnProperty("GameStep"))
                object.GameStep = message.GameStep;
            if (message.Odds != null && message.hasOwnProperty("Odds"))
                object.Odds = message.Odds;
            if (message.OptSeat != null && message.hasOwnProperty("OptSeat"))
                object.OptSeat = message.OptSeat;
            if (message.OptLastTime != null && message.hasOwnProperty("OptLastTime"))
                object.OptLastTime = message.OptLastTime;
            if (message.DiZhuSeat != null && message.hasOwnProperty("DiZhuSeat"))
                object.DiZhuSeat = message.DiZhuSeat;
            if (message.Opi && message.Opi.length) {
                object.Opi = [];
                for (var j = 0; j < message.Opi.length; ++j)
                    object.Opi[j] = $root.GameMsg_DDZ.DDZ_PlayerInfo.toObject(message.Opi[j], options);
            }
            if (message.DiZhuCards != null && message.hasOwnProperty("DiZhuCards"))
                object.DiZhuCards = $root.GameMsg_DDZ.CardArry.toObject(message.DiZhuCards, options);
            if (message.DiZhuCardType != null && message.hasOwnProperty("DiZhuCardType"))
                object.DiZhuCardType = message.DiZhuCardType;
            if (message.Sci && message.Sci.length) {
                object.Sci = [];
                for (var j = 0; j < message.Sci.length; ++j)
                    object.Sci[j] = $root.GameMsg_DDZ.DDZ_SendCardInfo.toObject(message.Sci[j], options);
            }
            if (message.IsSendCard != null && message.hasOwnProperty("IsSendCard"))
                object.IsSendCard = message.IsSendCard;
            if (message.Calculation != null && message.hasOwnProperty("Calculation"))
                object.Calculation = message.Calculation;
            return object;
        };

        /**
         * Converts this DDZ_UserRecoverRet to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_UserRecoverRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_UserRecoverRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_UserRecoverRet;
    })();

    GameMsg_DDZ.DDZ_NotifyGameStep = (function() {

        /**
         * Properties of a DDZ_NotifyGameStep.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_NotifyGameStep
         * @property {number} Step DDZ_NotifyGameStep Step
         */

        /**
         * Constructs a new DDZ_NotifyGameStep.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_NotifyGameStep.
         * @implements IDDZ_NotifyGameStep
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_NotifyGameStep=} [properties] Properties to set
         */
        function DDZ_NotifyGameStep(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_NotifyGameStep Step.
         * @member {number} Step
         * @memberof GameMsg_DDZ.DDZ_NotifyGameStep
         * @instance
         */
        DDZ_NotifyGameStep.prototype.Step = 0;

        /**
         * Creates a new DDZ_NotifyGameStep instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_NotifyGameStep
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyGameStep=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_NotifyGameStep} DDZ_NotifyGameStep instance
         */
        DDZ_NotifyGameStep.create = function create(properties) {
            return new DDZ_NotifyGameStep(properties);
        };

        /**
         * Encodes the specified DDZ_NotifyGameStep message. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyGameStep.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_NotifyGameStep
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyGameStep} message DDZ_NotifyGameStep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyGameStep.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Step);
            return writer;
        };

        /**
         * Encodes the specified DDZ_NotifyGameStep message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyGameStep.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyGameStep
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyGameStep} message DDZ_NotifyGameStep message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyGameStep.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_NotifyGameStep message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_NotifyGameStep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_NotifyGameStep} DDZ_NotifyGameStep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyGameStep.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_NotifyGameStep();
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
            if (!message.hasOwnProperty("Step"))
                throw $util.ProtocolError("missing required 'Step'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_NotifyGameStep message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyGameStep
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_NotifyGameStep} DDZ_NotifyGameStep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyGameStep.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_NotifyGameStep message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_NotifyGameStep
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_NotifyGameStep.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Step))
                return "Step: integer expected";
            return null;
        };

        /**
         * Creates a DDZ_NotifyGameStep message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_NotifyGameStep
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_NotifyGameStep} DDZ_NotifyGameStep
         */
        DDZ_NotifyGameStep.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_NotifyGameStep)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_NotifyGameStep();
            if (object.Step != null)
                message.Step = object.Step | 0;
            return message;
        };

        /**
         * Creates a plain object from a DDZ_NotifyGameStep message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_NotifyGameStep
         * @static
         * @param {GameMsg_DDZ.DDZ_NotifyGameStep} message DDZ_NotifyGameStep
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_NotifyGameStep.toObject = function toObject(message, options) {
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
         * Converts this DDZ_NotifyGameStep to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_NotifyGameStep
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_NotifyGameStep.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_NotifyGameStep;
    })();

    GameMsg_DDZ.DDZ_NotifyGameTimeOut = (function() {

        /**
         * Properties of a DDZ_NotifyGameTimeOut.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_NotifyGameTimeOut
         * @property {number} SeatNo DDZ_NotifyGameTimeOut SeatNo
         * @property {number} TimeOut DDZ_NotifyGameTimeOut TimeOut
         */

        /**
         * Constructs a new DDZ_NotifyGameTimeOut.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_NotifyGameTimeOut.
         * @implements IDDZ_NotifyGameTimeOut
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_NotifyGameTimeOut=} [properties] Properties to set
         */
        function DDZ_NotifyGameTimeOut(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_NotifyGameTimeOut SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DDZ.DDZ_NotifyGameTimeOut
         * @instance
         */
        DDZ_NotifyGameTimeOut.prototype.SeatNo = 0;

        /**
         * DDZ_NotifyGameTimeOut TimeOut.
         * @member {number} TimeOut
         * @memberof GameMsg_DDZ.DDZ_NotifyGameTimeOut
         * @instance
         */
        DDZ_NotifyGameTimeOut.prototype.TimeOut = 0;

        /**
         * Creates a new DDZ_NotifyGameTimeOut instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_NotifyGameTimeOut
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyGameTimeOut=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_NotifyGameTimeOut} DDZ_NotifyGameTimeOut instance
         */
        DDZ_NotifyGameTimeOut.create = function create(properties) {
            return new DDZ_NotifyGameTimeOut(properties);
        };

        /**
         * Encodes the specified DDZ_NotifyGameTimeOut message. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyGameTimeOut.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_NotifyGameTimeOut
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyGameTimeOut} message DDZ_NotifyGameTimeOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyGameTimeOut.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TimeOut);
            return writer;
        };

        /**
         * Encodes the specified DDZ_NotifyGameTimeOut message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyGameTimeOut.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyGameTimeOut
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyGameTimeOut} message DDZ_NotifyGameTimeOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyGameTimeOut.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_NotifyGameTimeOut message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_NotifyGameTimeOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_NotifyGameTimeOut} DDZ_NotifyGameTimeOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyGameTimeOut.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_NotifyGameTimeOut();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SeatNo = reader.int32();
                    break;
                case 2:
                    message.TimeOut = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            if (!message.hasOwnProperty("TimeOut"))
                throw $util.ProtocolError("missing required 'TimeOut'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_NotifyGameTimeOut message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyGameTimeOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_NotifyGameTimeOut} DDZ_NotifyGameTimeOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyGameTimeOut.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_NotifyGameTimeOut message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_NotifyGameTimeOut
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_NotifyGameTimeOut.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (!$util.isInteger(message.TimeOut))
                return "TimeOut: integer expected";
            return null;
        };

        /**
         * Creates a DDZ_NotifyGameTimeOut message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_NotifyGameTimeOut
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_NotifyGameTimeOut} DDZ_NotifyGameTimeOut
         */
        DDZ_NotifyGameTimeOut.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_NotifyGameTimeOut)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_NotifyGameTimeOut();
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.TimeOut != null)
                message.TimeOut = object.TimeOut | 0;
            return message;
        };

        /**
         * Creates a plain object from a DDZ_NotifyGameTimeOut message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_NotifyGameTimeOut
         * @static
         * @param {GameMsg_DDZ.DDZ_NotifyGameTimeOut} message DDZ_NotifyGameTimeOut
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_NotifyGameTimeOut.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SeatNo = 0;
                object.TimeOut = 0;
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.TimeOut != null && message.hasOwnProperty("TimeOut"))
                object.TimeOut = message.TimeOut;
            return object;
        };

        /**
         * Converts this DDZ_NotifyGameTimeOut to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_NotifyGameTimeOut
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_NotifyGameTimeOut.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_NotifyGameTimeOut;
    })();

    GameMsg_DDZ.DDZ_NotifyJiaoDiZhu = (function() {

        /**
         * Properties of a DDZ_NotifyJiaoDiZhu.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_NotifyJiaoDiZhu
         * @property {number} SeatNo DDZ_NotifyJiaoDiZhu SeatNo
         * @property {boolean} IsJiaoDiZhu DDZ_NotifyJiaoDiZhu IsJiaoDiZhu
         */

        /**
         * Constructs a new DDZ_NotifyJiaoDiZhu.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_NotifyJiaoDiZhu.
         * @implements IDDZ_NotifyJiaoDiZhu
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_NotifyJiaoDiZhu=} [properties] Properties to set
         */
        function DDZ_NotifyJiaoDiZhu(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_NotifyJiaoDiZhu SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DDZ.DDZ_NotifyJiaoDiZhu
         * @instance
         */
        DDZ_NotifyJiaoDiZhu.prototype.SeatNo = 0;

        /**
         * DDZ_NotifyJiaoDiZhu IsJiaoDiZhu.
         * @member {boolean} IsJiaoDiZhu
         * @memberof GameMsg_DDZ.DDZ_NotifyJiaoDiZhu
         * @instance
         */
        DDZ_NotifyJiaoDiZhu.prototype.IsJiaoDiZhu = false;

        /**
         * Creates a new DDZ_NotifyJiaoDiZhu instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_NotifyJiaoDiZhu
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyJiaoDiZhu=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_NotifyJiaoDiZhu} DDZ_NotifyJiaoDiZhu instance
         */
        DDZ_NotifyJiaoDiZhu.create = function create(properties) {
            return new DDZ_NotifyJiaoDiZhu(properties);
        };

        /**
         * Encodes the specified DDZ_NotifyJiaoDiZhu message. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyJiaoDiZhu.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_NotifyJiaoDiZhu
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyJiaoDiZhu} message DDZ_NotifyJiaoDiZhu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyJiaoDiZhu.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsJiaoDiZhu);
            return writer;
        };

        /**
         * Encodes the specified DDZ_NotifyJiaoDiZhu message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyJiaoDiZhu.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyJiaoDiZhu
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyJiaoDiZhu} message DDZ_NotifyJiaoDiZhu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyJiaoDiZhu.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_NotifyJiaoDiZhu message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_NotifyJiaoDiZhu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_NotifyJiaoDiZhu} DDZ_NotifyJiaoDiZhu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyJiaoDiZhu.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_NotifyJiaoDiZhu();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SeatNo = reader.int32();
                    break;
                case 2:
                    message.IsJiaoDiZhu = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            if (!message.hasOwnProperty("IsJiaoDiZhu"))
                throw $util.ProtocolError("missing required 'IsJiaoDiZhu'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_NotifyJiaoDiZhu message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyJiaoDiZhu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_NotifyJiaoDiZhu} DDZ_NotifyJiaoDiZhu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyJiaoDiZhu.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_NotifyJiaoDiZhu message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_NotifyJiaoDiZhu
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_NotifyJiaoDiZhu.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (typeof message.IsJiaoDiZhu !== "boolean")
                return "IsJiaoDiZhu: boolean expected";
            return null;
        };

        /**
         * Creates a DDZ_NotifyJiaoDiZhu message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_NotifyJiaoDiZhu
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_NotifyJiaoDiZhu} DDZ_NotifyJiaoDiZhu
         */
        DDZ_NotifyJiaoDiZhu.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_NotifyJiaoDiZhu)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_NotifyJiaoDiZhu();
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.IsJiaoDiZhu != null)
                message.IsJiaoDiZhu = Boolean(object.IsJiaoDiZhu);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_NotifyJiaoDiZhu message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_NotifyJiaoDiZhu
         * @static
         * @param {GameMsg_DDZ.DDZ_NotifyJiaoDiZhu} message DDZ_NotifyJiaoDiZhu
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_NotifyJiaoDiZhu.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SeatNo = 0;
                object.IsJiaoDiZhu = false;
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.IsJiaoDiZhu != null && message.hasOwnProperty("IsJiaoDiZhu"))
                object.IsJiaoDiZhu = message.IsJiaoDiZhu;
            return object;
        };

        /**
         * Converts this DDZ_NotifyJiaoDiZhu to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_NotifyJiaoDiZhu
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_NotifyJiaoDiZhu.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_NotifyJiaoDiZhu;
    })();

    GameMsg_DDZ.DDZ_NotifyQiangDiZhu = (function() {

        /**
         * Properties of a DDZ_NotifyQiangDiZhu.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_NotifyQiangDiZhu
         * @property {number} SeatNo DDZ_NotifyQiangDiZhu SeatNo
         * @property {boolean} IsQiang DDZ_NotifyQiangDiZhu IsQiang
         */

        /**
         * Constructs a new DDZ_NotifyQiangDiZhu.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_NotifyQiangDiZhu.
         * @implements IDDZ_NotifyQiangDiZhu
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_NotifyQiangDiZhu=} [properties] Properties to set
         */
        function DDZ_NotifyQiangDiZhu(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_NotifyQiangDiZhu SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DDZ.DDZ_NotifyQiangDiZhu
         * @instance
         */
        DDZ_NotifyQiangDiZhu.prototype.SeatNo = 0;

        /**
         * DDZ_NotifyQiangDiZhu IsQiang.
         * @member {boolean} IsQiang
         * @memberof GameMsg_DDZ.DDZ_NotifyQiangDiZhu
         * @instance
         */
        DDZ_NotifyQiangDiZhu.prototype.IsQiang = false;

        /**
         * Creates a new DDZ_NotifyQiangDiZhu instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_NotifyQiangDiZhu
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyQiangDiZhu=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_NotifyQiangDiZhu} DDZ_NotifyQiangDiZhu instance
         */
        DDZ_NotifyQiangDiZhu.create = function create(properties) {
            return new DDZ_NotifyQiangDiZhu(properties);
        };

        /**
         * Encodes the specified DDZ_NotifyQiangDiZhu message. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyQiangDiZhu.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_NotifyQiangDiZhu
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyQiangDiZhu} message DDZ_NotifyQiangDiZhu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyQiangDiZhu.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsQiang);
            return writer;
        };

        /**
         * Encodes the specified DDZ_NotifyQiangDiZhu message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyQiangDiZhu.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyQiangDiZhu
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyQiangDiZhu} message DDZ_NotifyQiangDiZhu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyQiangDiZhu.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_NotifyQiangDiZhu message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_NotifyQiangDiZhu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_NotifyQiangDiZhu} DDZ_NotifyQiangDiZhu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyQiangDiZhu.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_NotifyQiangDiZhu();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SeatNo = reader.int32();
                    break;
                case 2:
                    message.IsQiang = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            if (!message.hasOwnProperty("IsQiang"))
                throw $util.ProtocolError("missing required 'IsQiang'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_NotifyQiangDiZhu message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyQiangDiZhu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_NotifyQiangDiZhu} DDZ_NotifyQiangDiZhu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyQiangDiZhu.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_NotifyQiangDiZhu message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_NotifyQiangDiZhu
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_NotifyQiangDiZhu.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (typeof message.IsQiang !== "boolean")
                return "IsQiang: boolean expected";
            return null;
        };

        /**
         * Creates a DDZ_NotifyQiangDiZhu message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_NotifyQiangDiZhu
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_NotifyQiangDiZhu} DDZ_NotifyQiangDiZhu
         */
        DDZ_NotifyQiangDiZhu.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_NotifyQiangDiZhu)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_NotifyQiangDiZhu();
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.IsQiang != null)
                message.IsQiang = Boolean(object.IsQiang);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_NotifyQiangDiZhu message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_NotifyQiangDiZhu
         * @static
         * @param {GameMsg_DDZ.DDZ_NotifyQiangDiZhu} message DDZ_NotifyQiangDiZhu
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_NotifyQiangDiZhu.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SeatNo = 0;
                object.IsQiang = false;
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.IsQiang != null && message.hasOwnProperty("IsQiang"))
                object.IsQiang = message.IsQiang;
            return object;
        };

        /**
         * Converts this DDZ_NotifyQiangDiZhu to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_NotifyQiangDiZhu
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_NotifyQiangDiZhu.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_NotifyQiangDiZhu;
    })();

    GameMsg_DDZ.CardArry = (function() {

        /**
         * Properties of a CardArry.
         * @memberof GameMsg_DDZ
         * @interface ICardArry
         * @property {Array.<GameMsg_DDZ.ICard>|null} [Cards] CardArry Cards
         */

        /**
         * Constructs a new CardArry.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a CardArry.
         * @implements ICardArry
         * @constructor
         * @param {GameMsg_DDZ.ICardArry=} [properties] Properties to set
         */
        function CardArry(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardArry Cards.
         * @member {Array.<GameMsg_DDZ.ICard>} Cards
         * @memberof GameMsg_DDZ.CardArry
         * @instance
         */
        CardArry.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new CardArry instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.CardArry
         * @static
         * @param {GameMsg_DDZ.ICardArry=} [properties] Properties to set
         * @returns {GameMsg_DDZ.CardArry} CardArry instance
         */
        CardArry.create = function create(properties) {
            return new CardArry(properties);
        };

        /**
         * Encodes the specified CardArry message. Does not implicitly {@link GameMsg_DDZ.CardArry.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.CardArry
         * @static
         * @param {GameMsg_DDZ.ICardArry} message CardArry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardArry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.GameMsg_DDZ.Card.encode(message.Cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CardArry message, length delimited. Does not implicitly {@link GameMsg_DDZ.CardArry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.CardArry
         * @static
         * @param {GameMsg_DDZ.ICardArry} message CardArry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardArry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardArry message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.CardArry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.CardArry} CardArry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardArry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.CardArry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.GameMsg_DDZ.Card.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CardArry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.CardArry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.CardArry} CardArry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardArry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardArry message.
         * @function verify
         * @memberof GameMsg_DDZ.CardArry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardArry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.GameMsg_DDZ.Card.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CardArry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.CardArry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.CardArry} CardArry
         */
        CardArry.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.CardArry)
                return object;
            var message = new $root.GameMsg_DDZ.CardArry();
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".GameMsg_DDZ.CardArry.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg_DDZ.CardArry.Cards: object expected");
                    message.Cards[i] = $root.GameMsg_DDZ.Card.fromObject(object.Cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CardArry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.CardArry
         * @static
         * @param {GameMsg_DDZ.CardArry} message CardArry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CardArry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Cards = [];
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = $root.GameMsg_DDZ.Card.toObject(message.Cards[j], options);
            }
            return object;
        };

        /**
         * Converts this CardArry to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.CardArry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CardArry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CardArry;
    })();

    GameMsg_DDZ.DDZ_NotifyMingPai = (function() {

        /**
         * Properties of a DDZ_NotifyMingPai.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_NotifyMingPai
         * @property {number} SeatNo DDZ_NotifyMingPai SeatNo
         * @property {boolean} IsMing DDZ_NotifyMingPai IsMing
         * @property {GameMsg_DDZ.ICardArry|null} [Mpcs] DDZ_NotifyMingPai Mpcs
         */

        /**
         * Constructs a new DDZ_NotifyMingPai.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_NotifyMingPai.
         * @implements IDDZ_NotifyMingPai
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_NotifyMingPai=} [properties] Properties to set
         */
        function DDZ_NotifyMingPai(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_NotifyMingPai SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DDZ.DDZ_NotifyMingPai
         * @instance
         */
        DDZ_NotifyMingPai.prototype.SeatNo = 0;

        /**
         * DDZ_NotifyMingPai IsMing.
         * @member {boolean} IsMing
         * @memberof GameMsg_DDZ.DDZ_NotifyMingPai
         * @instance
         */
        DDZ_NotifyMingPai.prototype.IsMing = false;

        /**
         * DDZ_NotifyMingPai Mpcs.
         * @member {GameMsg_DDZ.ICardArry|null|undefined} Mpcs
         * @memberof GameMsg_DDZ.DDZ_NotifyMingPai
         * @instance
         */
        DDZ_NotifyMingPai.prototype.Mpcs = null;

        /**
         * Creates a new DDZ_NotifyMingPai instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_NotifyMingPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyMingPai=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_NotifyMingPai} DDZ_NotifyMingPai instance
         */
        DDZ_NotifyMingPai.create = function create(properties) {
            return new DDZ_NotifyMingPai(properties);
        };

        /**
         * Encodes the specified DDZ_NotifyMingPai message. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyMingPai.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_NotifyMingPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyMingPai} message DDZ_NotifyMingPai message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyMingPai.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsMing);
            if (message.Mpcs != null && message.hasOwnProperty("Mpcs"))
                $root.GameMsg_DDZ.CardArry.encode(message.Mpcs, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DDZ_NotifyMingPai message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyMingPai.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyMingPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyMingPai} message DDZ_NotifyMingPai message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyMingPai.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_NotifyMingPai message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_NotifyMingPai
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_NotifyMingPai} DDZ_NotifyMingPai
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyMingPai.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_NotifyMingPai();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SeatNo = reader.int32();
                    break;
                case 2:
                    message.IsMing = reader.bool();
                    break;
                case 3:
                    message.Mpcs = $root.GameMsg_DDZ.CardArry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            if (!message.hasOwnProperty("IsMing"))
                throw $util.ProtocolError("missing required 'IsMing'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_NotifyMingPai message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyMingPai
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_NotifyMingPai} DDZ_NotifyMingPai
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyMingPai.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_NotifyMingPai message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_NotifyMingPai
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_NotifyMingPai.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (typeof message.IsMing !== "boolean")
                return "IsMing: boolean expected";
            if (message.Mpcs != null && message.hasOwnProperty("Mpcs")) {
                var error = $root.GameMsg_DDZ.CardArry.verify(message.Mpcs);
                if (error)
                    return "Mpcs." + error;
            }
            return null;
        };

        /**
         * Creates a DDZ_NotifyMingPai message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_NotifyMingPai
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_NotifyMingPai} DDZ_NotifyMingPai
         */
        DDZ_NotifyMingPai.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_NotifyMingPai)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_NotifyMingPai();
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.IsMing != null)
                message.IsMing = Boolean(object.IsMing);
            if (object.Mpcs != null) {
                if (typeof object.Mpcs !== "object")
                    throw TypeError(".GameMsg_DDZ.DDZ_NotifyMingPai.Mpcs: object expected");
                message.Mpcs = $root.GameMsg_DDZ.CardArry.fromObject(object.Mpcs);
            }
            return message;
        };

        /**
         * Creates a plain object from a DDZ_NotifyMingPai message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_NotifyMingPai
         * @static
         * @param {GameMsg_DDZ.DDZ_NotifyMingPai} message DDZ_NotifyMingPai
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_NotifyMingPai.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SeatNo = 0;
                object.IsMing = false;
                object.Mpcs = null;
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.IsMing != null && message.hasOwnProperty("IsMing"))
                object.IsMing = message.IsMing;
            if (message.Mpcs != null && message.hasOwnProperty("Mpcs"))
                object.Mpcs = $root.GameMsg_DDZ.CardArry.toObject(message.Mpcs, options);
            return object;
        };

        /**
         * Converts this DDZ_NotifyMingPai to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_NotifyMingPai
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_NotifyMingPai.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_NotifyMingPai;
    })();

    GameMsg_DDZ.DDZ_NotifyChuPai = (function() {

        /**
         * Properties of a DDZ_NotifyChuPai.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_NotifyChuPai
         * @property {number} SeatNo DDZ_NotifyChuPai SeatNo
         * @property {number} CardType DDZ_NotifyChuPai CardType
         * @property {number} MainCards DDZ_NotifyChuPai MainCards
         * @property {number} MainCardsNumber DDZ_NotifyChuPai MainCardsNumber
         * @property {number} CurOdds DDZ_NotifyChuPai CurOdds
         * @property {GameMsg_DDZ.ICardArry|null} [Cards] DDZ_NotifyChuPai Cards
         */

        /**
         * Constructs a new DDZ_NotifyChuPai.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_NotifyChuPai.
         * @implements IDDZ_NotifyChuPai
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_NotifyChuPai=} [properties] Properties to set
         */
        function DDZ_NotifyChuPai(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_NotifyChuPai SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @instance
         */
        DDZ_NotifyChuPai.prototype.SeatNo = 0;

        /**
         * DDZ_NotifyChuPai CardType.
         * @member {number} CardType
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @instance
         */
        DDZ_NotifyChuPai.prototype.CardType = 0;

        /**
         * DDZ_NotifyChuPai MainCards.
         * @member {number} MainCards
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @instance
         */
        DDZ_NotifyChuPai.prototype.MainCards = 0;

        /**
         * DDZ_NotifyChuPai MainCardsNumber.
         * @member {number} MainCardsNumber
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @instance
         */
        DDZ_NotifyChuPai.prototype.MainCardsNumber = 0;

        /**
         * DDZ_NotifyChuPai CurOdds.
         * @member {number} CurOdds
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @instance
         */
        DDZ_NotifyChuPai.prototype.CurOdds = 0;

        /**
         * DDZ_NotifyChuPai Cards.
         * @member {GameMsg_DDZ.ICardArry|null|undefined} Cards
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @instance
         */
        DDZ_NotifyChuPai.prototype.Cards = null;

        /**
         * Creates a new DDZ_NotifyChuPai instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyChuPai=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_NotifyChuPai} DDZ_NotifyChuPai instance
         */
        DDZ_NotifyChuPai.create = function create(properties) {
            return new DDZ_NotifyChuPai(properties);
        };

        /**
         * Encodes the specified DDZ_NotifyChuPai message. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyChuPai.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyChuPai} message DDZ_NotifyChuPai message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyChuPai.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CardType);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.MainCards);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.MainCardsNumber);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.CurOdds);
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                $root.GameMsg_DDZ.CardArry.encode(message.Cards, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DDZ_NotifyChuPai message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyChuPai.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyChuPai} message DDZ_NotifyChuPai message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyChuPai.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_NotifyChuPai message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_NotifyChuPai} DDZ_NotifyChuPai
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyChuPai.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_NotifyChuPai();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SeatNo = reader.int32();
                    break;
                case 2:
                    message.CardType = reader.int32();
                    break;
                case 3:
                    message.MainCards = reader.int32();
                    break;
                case 4:
                    message.MainCardsNumber = reader.int32();
                    break;
                case 5:
                    message.CurOdds = reader.int32();
                    break;
                case 6:
                    message.Cards = $root.GameMsg_DDZ.CardArry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            if (!message.hasOwnProperty("CardType"))
                throw $util.ProtocolError("missing required 'CardType'", { instance: message });
            if (!message.hasOwnProperty("MainCards"))
                throw $util.ProtocolError("missing required 'MainCards'", { instance: message });
            if (!message.hasOwnProperty("MainCardsNumber"))
                throw $util.ProtocolError("missing required 'MainCardsNumber'", { instance: message });
            if (!message.hasOwnProperty("CurOdds"))
                throw $util.ProtocolError("missing required 'CurOdds'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_NotifyChuPai message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_NotifyChuPai} DDZ_NotifyChuPai
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyChuPai.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_NotifyChuPai message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_NotifyChuPai.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (!$util.isInteger(message.CardType))
                return "CardType: integer expected";
            if (!$util.isInteger(message.MainCards))
                return "MainCards: integer expected";
            if (!$util.isInteger(message.MainCardsNumber))
                return "MainCardsNumber: integer expected";
            if (!$util.isInteger(message.CurOdds))
                return "CurOdds: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                var error = $root.GameMsg_DDZ.CardArry.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            return null;
        };

        /**
         * Creates a DDZ_NotifyChuPai message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_NotifyChuPai} DDZ_NotifyChuPai
         */
        DDZ_NotifyChuPai.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_NotifyChuPai)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_NotifyChuPai();
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.CardType != null)
                message.CardType = object.CardType | 0;
            if (object.MainCards != null)
                message.MainCards = object.MainCards | 0;
            if (object.MainCardsNumber != null)
                message.MainCardsNumber = object.MainCardsNumber | 0;
            if (object.CurOdds != null)
                message.CurOdds = object.CurOdds | 0;
            if (object.Cards != null) {
                if (typeof object.Cards !== "object")
                    throw TypeError(".GameMsg_DDZ.DDZ_NotifyChuPai.Cards: object expected");
                message.Cards = $root.GameMsg_DDZ.CardArry.fromObject(object.Cards);
            }
            return message;
        };

        /**
         * Creates a plain object from a DDZ_NotifyChuPai message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @static
         * @param {GameMsg_DDZ.DDZ_NotifyChuPai} message DDZ_NotifyChuPai
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_NotifyChuPai.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SeatNo = 0;
                object.CardType = 0;
                object.MainCards = 0;
                object.MainCardsNumber = 0;
                object.CurOdds = 0;
                object.Cards = null;
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.CardType != null && message.hasOwnProperty("CardType"))
                object.CardType = message.CardType;
            if (message.MainCards != null && message.hasOwnProperty("MainCards"))
                object.MainCards = message.MainCards;
            if (message.MainCardsNumber != null && message.hasOwnProperty("MainCardsNumber"))
                object.MainCardsNumber = message.MainCardsNumber;
            if (message.CurOdds != null && message.hasOwnProperty("CurOdds"))
                object.CurOdds = message.CurOdds;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = $root.GameMsg_DDZ.CardArry.toObject(message.Cards, options);
            return object;
        };

        /**
         * Converts this DDZ_NotifyChuPai to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_NotifyChuPai
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_NotifyChuPai.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_NotifyChuPai;
    })();

    GameMsg_DDZ.DDZ_NotifyFaPai = (function() {

        /**
         * Properties of a DDZ_NotifyFaPai.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_NotifyFaPai
         * @property {number} SeatNo DDZ_NotifyFaPai SeatNo
         * @property {GameMsg_DDZ.ICardArry|null} [Cards] DDZ_NotifyFaPai Cards
         */

        /**
         * Constructs a new DDZ_NotifyFaPai.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_NotifyFaPai.
         * @implements IDDZ_NotifyFaPai
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_NotifyFaPai=} [properties] Properties to set
         */
        function DDZ_NotifyFaPai(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_NotifyFaPai SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DDZ.DDZ_NotifyFaPai
         * @instance
         */
        DDZ_NotifyFaPai.prototype.SeatNo = 0;

        /**
         * DDZ_NotifyFaPai Cards.
         * @member {GameMsg_DDZ.ICardArry|null|undefined} Cards
         * @memberof GameMsg_DDZ.DDZ_NotifyFaPai
         * @instance
         */
        DDZ_NotifyFaPai.prototype.Cards = null;

        /**
         * Creates a new DDZ_NotifyFaPai instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_NotifyFaPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyFaPai=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_NotifyFaPai} DDZ_NotifyFaPai instance
         */
        DDZ_NotifyFaPai.create = function create(properties) {
            return new DDZ_NotifyFaPai(properties);
        };

        /**
         * Encodes the specified DDZ_NotifyFaPai message. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyFaPai.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_NotifyFaPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyFaPai} message DDZ_NotifyFaPai message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyFaPai.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                $root.GameMsg_DDZ.CardArry.encode(message.Cards, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DDZ_NotifyFaPai message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyFaPai.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyFaPai
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyFaPai} message DDZ_NotifyFaPai message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyFaPai.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_NotifyFaPai message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_NotifyFaPai
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_NotifyFaPai} DDZ_NotifyFaPai
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyFaPai.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_NotifyFaPai();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SeatNo = reader.int32();
                    break;
                case 2:
                    message.Cards = $root.GameMsg_DDZ.CardArry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_NotifyFaPai message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyFaPai
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_NotifyFaPai} DDZ_NotifyFaPai
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyFaPai.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_NotifyFaPai message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_NotifyFaPai
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_NotifyFaPai.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                var error = $root.GameMsg_DDZ.CardArry.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            return null;
        };

        /**
         * Creates a DDZ_NotifyFaPai message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_NotifyFaPai
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_NotifyFaPai} DDZ_NotifyFaPai
         */
        DDZ_NotifyFaPai.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_NotifyFaPai)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_NotifyFaPai();
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.Cards != null) {
                if (typeof object.Cards !== "object")
                    throw TypeError(".GameMsg_DDZ.DDZ_NotifyFaPai.Cards: object expected");
                message.Cards = $root.GameMsg_DDZ.CardArry.fromObject(object.Cards);
            }
            return message;
        };

        /**
         * Creates a plain object from a DDZ_NotifyFaPai message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_NotifyFaPai
         * @static
         * @param {GameMsg_DDZ.DDZ_NotifyFaPai} message DDZ_NotifyFaPai
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_NotifyFaPai.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SeatNo = 0;
                object.Cards = null;
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = $root.GameMsg_DDZ.CardArry.toObject(message.Cards, options);
            return object;
        };

        /**
         * Converts this DDZ_NotifyFaPai to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_NotifyFaPai
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_NotifyFaPai.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_NotifyFaPai;
    })();

    GameMsg_DDZ.DDZ_NotifyDizhuInfo = (function() {

        /**
         * Properties of a DDZ_NotifyDizhuInfo.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_NotifyDizhuInfo
         * @property {number} SeatNo DDZ_NotifyDizhuInfo SeatNo
         * @property {GameMsg_DDZ.ICardArry} Cards DDZ_NotifyDizhuInfo Cards
         * @property {number} Calculation DDZ_NotifyDizhuInfo Calculation
         */

        /**
         * Constructs a new DDZ_NotifyDizhuInfo.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_NotifyDizhuInfo.
         * @implements IDDZ_NotifyDizhuInfo
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_NotifyDizhuInfo=} [properties] Properties to set
         */
        function DDZ_NotifyDizhuInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_NotifyDizhuInfo SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DDZ.DDZ_NotifyDizhuInfo
         * @instance
         */
        DDZ_NotifyDizhuInfo.prototype.SeatNo = 0;

        /**
         * DDZ_NotifyDizhuInfo Cards.
         * @member {GameMsg_DDZ.ICardArry} Cards
         * @memberof GameMsg_DDZ.DDZ_NotifyDizhuInfo
         * @instance
         */
        DDZ_NotifyDizhuInfo.prototype.Cards = null;

        /**
         * DDZ_NotifyDizhuInfo Calculation.
         * @member {number} Calculation
         * @memberof GameMsg_DDZ.DDZ_NotifyDizhuInfo
         * @instance
         */
        DDZ_NotifyDizhuInfo.prototype.Calculation = 0;

        /**
         * Creates a new DDZ_NotifyDizhuInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_NotifyDizhuInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyDizhuInfo=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_NotifyDizhuInfo} DDZ_NotifyDizhuInfo instance
         */
        DDZ_NotifyDizhuInfo.create = function create(properties) {
            return new DDZ_NotifyDizhuInfo(properties);
        };

        /**
         * Encodes the specified DDZ_NotifyDizhuInfo message. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyDizhuInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_NotifyDizhuInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyDizhuInfo} message DDZ_NotifyDizhuInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyDizhuInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            $root.GameMsg_DDZ.CardArry.encode(message.Cards, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Calculation);
            return writer;
        };

        /**
         * Encodes the specified DDZ_NotifyDizhuInfo message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyDizhuInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyDizhuInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyDizhuInfo} message DDZ_NotifyDizhuInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyDizhuInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_NotifyDizhuInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_NotifyDizhuInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_NotifyDizhuInfo} DDZ_NotifyDizhuInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyDizhuInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_NotifyDizhuInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SeatNo = reader.int32();
                    break;
                case 2:
                    message.Cards = $root.GameMsg_DDZ.CardArry.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.Calculation = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            if (!message.hasOwnProperty("Cards"))
                throw $util.ProtocolError("missing required 'Cards'", { instance: message });
            if (!message.hasOwnProperty("Calculation"))
                throw $util.ProtocolError("missing required 'Calculation'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_NotifyDizhuInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyDizhuInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_NotifyDizhuInfo} DDZ_NotifyDizhuInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyDizhuInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_NotifyDizhuInfo message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_NotifyDizhuInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_NotifyDizhuInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            {
                var error = $root.GameMsg_DDZ.CardArry.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            if (!$util.isInteger(message.Calculation))
                return "Calculation: integer expected";
            return null;
        };

        /**
         * Creates a DDZ_NotifyDizhuInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_NotifyDizhuInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_NotifyDizhuInfo} DDZ_NotifyDizhuInfo
         */
        DDZ_NotifyDizhuInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_NotifyDizhuInfo)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_NotifyDizhuInfo();
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.Cards != null) {
                if (typeof object.Cards !== "object")
                    throw TypeError(".GameMsg_DDZ.DDZ_NotifyDizhuInfo.Cards: object expected");
                message.Cards = $root.GameMsg_DDZ.CardArry.fromObject(object.Cards);
            }
            if (object.Calculation != null)
                message.Calculation = object.Calculation | 0;
            return message;
        };

        /**
         * Creates a plain object from a DDZ_NotifyDizhuInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_NotifyDizhuInfo
         * @static
         * @param {GameMsg_DDZ.DDZ_NotifyDizhuInfo} message DDZ_NotifyDizhuInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_NotifyDizhuInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SeatNo = 0;
                object.Cards = null;
                object.Calculation = 0;
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = $root.GameMsg_DDZ.CardArry.toObject(message.Cards, options);
            if (message.Calculation != null && message.hasOwnProperty("Calculation"))
                object.Calculation = message.Calculation;
            return object;
        };

        /**
         * Converts this DDZ_NotifyDizhuInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_NotifyDizhuInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_NotifyDizhuInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_NotifyDizhuInfo;
    })();

    /**
     * OddsChangeType enum.
     * @name GameMsg_DDZ.OddsChangeType
     * @enum {string}
     * @property {number} null=1 null value
     * @property {number} mingpai=2 mingpai value
     * @property {number} jiaodizhu=3 jiaodizhu value
     * @property {number} qiangdizhu=4 qiangdizhu value
     * @property {number} zhadan=5 zhadan value
     * @property {number} chuntian=6 chuntian value
     * @property {number} sanpai=7 sanpai value
     * @property {number} duizi=8 duizi value
     * @property {number} shunzi=9 shunzi value
     * @property {number} tonghua=10 tonghua value
     * @property {number} xiaowang=11 xiaowang value
     * @property {number} dawang=12 dawang value
     * @property {number} baozi=13 baozi value
     * @property {number} rocket=14 rocket value
     * @property {number} fanchuntian=15 fanchuntian value
     */
    GameMsg_DDZ.OddsChangeType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "null"] = 1;
        values[valuesById[2] = "mingpai"] = 2;
        values[valuesById[3] = "jiaodizhu"] = 3;
        values[valuesById[4] = "qiangdizhu"] = 4;
        values[valuesById[5] = "zhadan"] = 5;
        values[valuesById[6] = "chuntian"] = 6;
        values[valuesById[7] = "sanpai"] = 7;
        values[valuesById[8] = "duizi"] = 8;
        values[valuesById[9] = "shunzi"] = 9;
        values[valuesById[10] = "tonghua"] = 10;
        values[valuesById[11] = "xiaowang"] = 11;
        values[valuesById[12] = "dawang"] = 12;
        values[valuesById[13] = "baozi"] = 13;
        values[valuesById[14] = "rocket"] = 14;
        values[valuesById[15] = "fanchuntian"] = 15;
        return values;
    })();

    GameMsg_DDZ.DDZ_NotifyRoomInfo = (function() {

        /**
         * Properties of a DDZ_NotifyRoomInfo.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_NotifyRoomInfo
         * @property {number} Odds DDZ_NotifyRoomInfo Odds
         * @property {number} NowOdds DDZ_NotifyRoomInfo NowOdds
         * @property {number} oct DDZ_NotifyRoomInfo oct
         */

        /**
         * Constructs a new DDZ_NotifyRoomInfo.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_NotifyRoomInfo.
         * @implements IDDZ_NotifyRoomInfo
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_NotifyRoomInfo=} [properties] Properties to set
         */
        function DDZ_NotifyRoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_NotifyRoomInfo Odds.
         * @member {number} Odds
         * @memberof GameMsg_DDZ.DDZ_NotifyRoomInfo
         * @instance
         */
        DDZ_NotifyRoomInfo.prototype.Odds = 0;

        /**
         * DDZ_NotifyRoomInfo NowOdds.
         * @member {number} NowOdds
         * @memberof GameMsg_DDZ.DDZ_NotifyRoomInfo
         * @instance
         */
        DDZ_NotifyRoomInfo.prototype.NowOdds = 0;

        /**
         * DDZ_NotifyRoomInfo oct.
         * @member {number} oct
         * @memberof GameMsg_DDZ.DDZ_NotifyRoomInfo
         * @instance
         */
        DDZ_NotifyRoomInfo.prototype.oct = 0;

        /**
         * Creates a new DDZ_NotifyRoomInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_NotifyRoomInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyRoomInfo=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_NotifyRoomInfo} DDZ_NotifyRoomInfo instance
         */
        DDZ_NotifyRoomInfo.create = function create(properties) {
            return new DDZ_NotifyRoomInfo(properties);
        };

        /**
         * Encodes the specified DDZ_NotifyRoomInfo message. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyRoomInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_NotifyRoomInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyRoomInfo} message DDZ_NotifyRoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyRoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Odds);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.NowOdds);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.oct);
            return writer;
        };

        /**
         * Encodes the specified DDZ_NotifyRoomInfo message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyRoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyRoomInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyRoomInfo} message DDZ_NotifyRoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyRoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_NotifyRoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_NotifyRoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_NotifyRoomInfo} DDZ_NotifyRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyRoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_NotifyRoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Odds = reader.int32();
                    break;
                case 2:
                    message.NowOdds = reader.int32();
                    break;
                case 3:
                    message.oct = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Odds"))
                throw $util.ProtocolError("missing required 'Odds'", { instance: message });
            if (!message.hasOwnProperty("NowOdds"))
                throw $util.ProtocolError("missing required 'NowOdds'", { instance: message });
            if (!message.hasOwnProperty("oct"))
                throw $util.ProtocolError("missing required 'oct'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_NotifyRoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyRoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_NotifyRoomInfo} DDZ_NotifyRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyRoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_NotifyRoomInfo message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_NotifyRoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_NotifyRoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Odds))
                return "Odds: integer expected";
            if (!$util.isInteger(message.NowOdds))
                return "NowOdds: integer expected";
            if (!$util.isInteger(message.oct))
                return "oct: integer expected";
            return null;
        };

        /**
         * Creates a DDZ_NotifyRoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_NotifyRoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_NotifyRoomInfo} DDZ_NotifyRoomInfo
         */
        DDZ_NotifyRoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_NotifyRoomInfo)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_NotifyRoomInfo();
            if (object.Odds != null)
                message.Odds = object.Odds | 0;
            if (object.NowOdds != null)
                message.NowOdds = object.NowOdds | 0;
            if (object.oct != null)
                message.oct = object.oct | 0;
            return message;
        };

        /**
         * Creates a plain object from a DDZ_NotifyRoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_NotifyRoomInfo
         * @static
         * @param {GameMsg_DDZ.DDZ_NotifyRoomInfo} message DDZ_NotifyRoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_NotifyRoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Odds = 0;
                object.NowOdds = 0;
                object.oct = 0;
            }
            if (message.Odds != null && message.hasOwnProperty("Odds"))
                object.Odds = message.Odds;
            if (message.NowOdds != null && message.hasOwnProperty("NowOdds"))
                object.NowOdds = message.NowOdds;
            if (message.oct != null && message.hasOwnProperty("oct"))
                object.oct = message.oct;
            return object;
        };

        /**
         * Converts this DDZ_NotifyRoomInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_NotifyRoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_NotifyRoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_NotifyRoomInfo;
    })();

    GameMsg_DDZ.DDZ_ResultRecord = (function() {

        /**
         * Properties of a DDZ_ResultRecord.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_ResultRecord
         * @property {number} UserId DDZ_ResultRecord UserId
         * @property {number} Money DDZ_ResultRecord Money
         * @property {boolean} IsDiZhu DDZ_ResultRecord IsDiZhu
         * @property {boolean} Bankruptcy DDZ_ResultRecord Bankruptcy
         * @property {GameMsg_DDZ.ICardArry} cards DDZ_ResultRecord cards
         * @property {string} NickName DDZ_ResultRecord NickName
         */

        /**
         * Constructs a new DDZ_ResultRecord.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_ResultRecord.
         * @implements IDDZ_ResultRecord
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_ResultRecord=} [properties] Properties to set
         */
        function DDZ_ResultRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_ResultRecord UserId.
         * @member {number} UserId
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @instance
         */
        DDZ_ResultRecord.prototype.UserId = 0;

        /**
         * DDZ_ResultRecord Money.
         * @member {number} Money
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @instance
         */
        DDZ_ResultRecord.prototype.Money = 0;

        /**
         * DDZ_ResultRecord IsDiZhu.
         * @member {boolean} IsDiZhu
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @instance
         */
        DDZ_ResultRecord.prototype.IsDiZhu = false;

        /**
         * DDZ_ResultRecord Bankruptcy.
         * @member {boolean} Bankruptcy
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @instance
         */
        DDZ_ResultRecord.prototype.Bankruptcy = false;

        /**
         * DDZ_ResultRecord cards.
         * @member {GameMsg_DDZ.ICardArry} cards
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @instance
         */
        DDZ_ResultRecord.prototype.cards = null;

        /**
         * DDZ_ResultRecord NickName.
         * @member {string} NickName
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @instance
         */
        DDZ_ResultRecord.prototype.NickName = "";

        /**
         * Creates a new DDZ_ResultRecord instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @static
         * @param {GameMsg_DDZ.IDDZ_ResultRecord=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_ResultRecord} DDZ_ResultRecord instance
         */
        DDZ_ResultRecord.create = function create(properties) {
            return new DDZ_ResultRecord(properties);
        };

        /**
         * Encodes the specified DDZ_ResultRecord message. Does not implicitly {@link GameMsg_DDZ.DDZ_ResultRecord.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @static
         * @param {GameMsg_DDZ.IDDZ_ResultRecord} message DDZ_ResultRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_ResultRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Money);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.IsDiZhu);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.Bankruptcy);
            $root.GameMsg_DDZ.CardArry.encode(message.cards, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.NickName);
            return writer;
        };

        /**
         * Encodes the specified DDZ_ResultRecord message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_ResultRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @static
         * @param {GameMsg_DDZ.IDDZ_ResultRecord} message DDZ_ResultRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_ResultRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_ResultRecord message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_ResultRecord} DDZ_ResultRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_ResultRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_ResultRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.int32();
                    break;
                case 2:
                    message.Money = reader.int32();
                    break;
                case 3:
                    message.IsDiZhu = reader.bool();
                    break;
                case 4:
                    message.Bankruptcy = reader.bool();
                    break;
                case 5:
                    message.cards = $root.GameMsg_DDZ.CardArry.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.NickName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserId"))
                throw $util.ProtocolError("missing required 'UserId'", { instance: message });
            if (!message.hasOwnProperty("Money"))
                throw $util.ProtocolError("missing required 'Money'", { instance: message });
            if (!message.hasOwnProperty("IsDiZhu"))
                throw $util.ProtocolError("missing required 'IsDiZhu'", { instance: message });
            if (!message.hasOwnProperty("Bankruptcy"))
                throw $util.ProtocolError("missing required 'Bankruptcy'", { instance: message });
            if (!message.hasOwnProperty("cards"))
                throw $util.ProtocolError("missing required 'cards'", { instance: message });
            if (!message.hasOwnProperty("NickName"))
                throw $util.ProtocolError("missing required 'NickName'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_ResultRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_ResultRecord} DDZ_ResultRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_ResultRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_ResultRecord message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_ResultRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserId))
                return "UserId: integer expected";
            if (!$util.isInteger(message.Money))
                return "Money: integer expected";
            if (typeof message.IsDiZhu !== "boolean")
                return "IsDiZhu: boolean expected";
            if (typeof message.Bankruptcy !== "boolean")
                return "Bankruptcy: boolean expected";
            {
                var error = $root.GameMsg_DDZ.CardArry.verify(message.cards);
                if (error)
                    return "cards." + error;
            }
            if (!$util.isString(message.NickName))
                return "NickName: string expected";
            return null;
        };

        /**
         * Creates a DDZ_ResultRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_ResultRecord} DDZ_ResultRecord
         */
        DDZ_ResultRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_ResultRecord)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_ResultRecord();
            if (object.UserId != null)
                message.UserId = object.UserId | 0;
            if (object.Money != null)
                message.Money = object.Money | 0;
            if (object.IsDiZhu != null)
                message.IsDiZhu = Boolean(object.IsDiZhu);
            if (object.Bankruptcy != null)
                message.Bankruptcy = Boolean(object.Bankruptcy);
            if (object.cards != null) {
                if (typeof object.cards !== "object")
                    throw TypeError(".GameMsg_DDZ.DDZ_ResultRecord.cards: object expected");
                message.cards = $root.GameMsg_DDZ.CardArry.fromObject(object.cards);
            }
            if (object.NickName != null)
                message.NickName = String(object.NickName);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_ResultRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @static
         * @param {GameMsg_DDZ.DDZ_ResultRecord} message DDZ_ResultRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_ResultRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserId = 0;
                object.Money = 0;
                object.IsDiZhu = false;
                object.Bankruptcy = false;
                object.cards = null;
                object.NickName = "";
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                object.UserId = message.UserId;
            if (message.Money != null && message.hasOwnProperty("Money"))
                object.Money = message.Money;
            if (message.IsDiZhu != null && message.hasOwnProperty("IsDiZhu"))
                object.IsDiZhu = message.IsDiZhu;
            if (message.Bankruptcy != null && message.hasOwnProperty("Bankruptcy"))
                object.Bankruptcy = message.Bankruptcy;
            if (message.cards != null && message.hasOwnProperty("cards"))
                object.cards = $root.GameMsg_DDZ.CardArry.toObject(message.cards, options);
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                object.NickName = message.NickName;
            return object;
        };

        /**
         * Converts this DDZ_ResultRecord to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_ResultRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_ResultRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_ResultRecord;
    })();

    GameMsg_DDZ.DDZ_NotifySettlement = (function() {

        /**
         * Properties of a DDZ_NotifySettlement.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_NotifySettlement
         * @property {number} BaseScore DDZ_NotifySettlement BaseScore
         * @property {number} JiaoDiZhuOdds DDZ_NotifySettlement JiaoDiZhuOdds
         * @property {number} QiangDiZhuOdds DDZ_NotifySettlement QiangDiZhuOdds
         * @property {number} DiZhuCardTypeOdds DDZ_NotifySettlement DiZhuCardTypeOdds
         * @property {number} ZhaDanOdds DDZ_NotifySettlement ZhaDanOdds
         * @property {number} ChunTianOdds DDZ_NotifySettlement ChunTianOdds
         * @property {number} MingPaiOdds DDZ_NotifySettlement MingPaiOdds
         * @property {number} TotalOdds DDZ_NotifySettlement TotalOdds
         * @property {number} WinSeat DDZ_NotifySettlement WinSeat
         * @property {Array.<GameMsg_DDZ.IDDZ_ResultRecord>|null} [Settlement] DDZ_NotifySettlement Settlement
         * @property {number|null} [Rocket] DDZ_NotifySettlement Rocket
         * @property {number} Calculation DDZ_NotifySettlement Calculation
         * @property {number} FanChunTianOdds DDZ_NotifySettlement FanChunTianOdds
         */

        /**
         * Constructs a new DDZ_NotifySettlement.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_NotifySettlement.
         * @implements IDDZ_NotifySettlement
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_NotifySettlement=} [properties] Properties to set
         */
        function DDZ_NotifySettlement(properties) {
            this.Settlement = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_NotifySettlement BaseScore.
         * @member {number} BaseScore
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @instance
         */
        DDZ_NotifySettlement.prototype.BaseScore = 0;

        /**
         * DDZ_NotifySettlement JiaoDiZhuOdds.
         * @member {number} JiaoDiZhuOdds
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @instance
         */
        DDZ_NotifySettlement.prototype.JiaoDiZhuOdds = 0;

        /**
         * DDZ_NotifySettlement QiangDiZhuOdds.
         * @member {number} QiangDiZhuOdds
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @instance
         */
        DDZ_NotifySettlement.prototype.QiangDiZhuOdds = 0;

        /**
         * DDZ_NotifySettlement DiZhuCardTypeOdds.
         * @member {number} DiZhuCardTypeOdds
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @instance
         */
        DDZ_NotifySettlement.prototype.DiZhuCardTypeOdds = 0;

        /**
         * DDZ_NotifySettlement ZhaDanOdds.
         * @member {number} ZhaDanOdds
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @instance
         */
        DDZ_NotifySettlement.prototype.ZhaDanOdds = 0;

        /**
         * DDZ_NotifySettlement ChunTianOdds.
         * @member {number} ChunTianOdds
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @instance
         */
        DDZ_NotifySettlement.prototype.ChunTianOdds = 0;

        /**
         * DDZ_NotifySettlement MingPaiOdds.
         * @member {number} MingPaiOdds
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @instance
         */
        DDZ_NotifySettlement.prototype.MingPaiOdds = 0;

        /**
         * DDZ_NotifySettlement TotalOdds.
         * @member {number} TotalOdds
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @instance
         */
        DDZ_NotifySettlement.prototype.TotalOdds = 0;

        /**
         * DDZ_NotifySettlement WinSeat.
         * @member {number} WinSeat
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @instance
         */
        DDZ_NotifySettlement.prototype.WinSeat = 0;

        /**
         * DDZ_NotifySettlement Settlement.
         * @member {Array.<GameMsg_DDZ.IDDZ_ResultRecord>} Settlement
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @instance
         */
        DDZ_NotifySettlement.prototype.Settlement = $util.emptyArray;

        /**
         * DDZ_NotifySettlement Rocket.
         * @member {number} Rocket
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @instance
         */
        DDZ_NotifySettlement.prototype.Rocket = 0;

        /**
         * DDZ_NotifySettlement Calculation.
         * @member {number} Calculation
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @instance
         */
        DDZ_NotifySettlement.prototype.Calculation = 0;

        /**
         * DDZ_NotifySettlement FanChunTianOdds.
         * @member {number} FanChunTianOdds
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @instance
         */
        DDZ_NotifySettlement.prototype.FanChunTianOdds = 0;

        /**
         * Creates a new DDZ_NotifySettlement instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifySettlement=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_NotifySettlement} DDZ_NotifySettlement instance
         */
        DDZ_NotifySettlement.create = function create(properties) {
            return new DDZ_NotifySettlement(properties);
        };

        /**
         * Encodes the specified DDZ_NotifySettlement message. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifySettlement.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifySettlement} message DDZ_NotifySettlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifySettlement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BaseScore);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.JiaoDiZhuOdds);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.QiangDiZhuOdds);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.DiZhuCardTypeOdds);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.ZhaDanOdds);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ChunTianOdds);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.MingPaiOdds);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.TotalOdds);
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.WinSeat);
            if (message.Settlement != null && message.Settlement.length)
                for (var i = 0; i < message.Settlement.length; ++i)
                    $root.GameMsg_DDZ.DDZ_ResultRecord.encode(message.Settlement[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.Rocket != null && message.hasOwnProperty("Rocket"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.Rocket);
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.Calculation);
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.FanChunTianOdds);
            return writer;
        };

        /**
         * Encodes the specified DDZ_NotifySettlement message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifySettlement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifySettlement} message DDZ_NotifySettlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifySettlement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_NotifySettlement message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_NotifySettlement} DDZ_NotifySettlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifySettlement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_NotifySettlement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BaseScore = reader.int32();
                    break;
                case 3:
                    message.JiaoDiZhuOdds = reader.int32();
                    break;
                case 4:
                    message.QiangDiZhuOdds = reader.int32();
                    break;
                case 5:
                    message.DiZhuCardTypeOdds = reader.int32();
                    break;
                case 6:
                    message.ZhaDanOdds = reader.int32();
                    break;
                case 7:
                    message.ChunTianOdds = reader.int32();
                    break;
                case 8:
                    message.MingPaiOdds = reader.int32();
                    break;
                case 9:
                    message.TotalOdds = reader.int32();
                    break;
                case 10:
                    message.WinSeat = reader.int32();
                    break;
                case 11:
                    if (!(message.Settlement && message.Settlement.length))
                        message.Settlement = [];
                    message.Settlement.push($root.GameMsg_DDZ.DDZ_ResultRecord.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.Rocket = reader.int32();
                    break;
                case 13:
                    message.Calculation = reader.int32();
                    break;
                case 14:
                    message.FanChunTianOdds = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BaseScore"))
                throw $util.ProtocolError("missing required 'BaseScore'", { instance: message });
            if (!message.hasOwnProperty("JiaoDiZhuOdds"))
                throw $util.ProtocolError("missing required 'JiaoDiZhuOdds'", { instance: message });
            if (!message.hasOwnProperty("QiangDiZhuOdds"))
                throw $util.ProtocolError("missing required 'QiangDiZhuOdds'", { instance: message });
            if (!message.hasOwnProperty("DiZhuCardTypeOdds"))
                throw $util.ProtocolError("missing required 'DiZhuCardTypeOdds'", { instance: message });
            if (!message.hasOwnProperty("ZhaDanOdds"))
                throw $util.ProtocolError("missing required 'ZhaDanOdds'", { instance: message });
            if (!message.hasOwnProperty("ChunTianOdds"))
                throw $util.ProtocolError("missing required 'ChunTianOdds'", { instance: message });
            if (!message.hasOwnProperty("MingPaiOdds"))
                throw $util.ProtocolError("missing required 'MingPaiOdds'", { instance: message });
            if (!message.hasOwnProperty("TotalOdds"))
                throw $util.ProtocolError("missing required 'TotalOdds'", { instance: message });
            if (!message.hasOwnProperty("WinSeat"))
                throw $util.ProtocolError("missing required 'WinSeat'", { instance: message });
            if (!message.hasOwnProperty("Calculation"))
                throw $util.ProtocolError("missing required 'Calculation'", { instance: message });
            if (!message.hasOwnProperty("FanChunTianOdds"))
                throw $util.ProtocolError("missing required 'FanChunTianOdds'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_NotifySettlement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_NotifySettlement} DDZ_NotifySettlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifySettlement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_NotifySettlement message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_NotifySettlement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.BaseScore))
                return "BaseScore: integer expected";
            if (!$util.isInteger(message.JiaoDiZhuOdds))
                return "JiaoDiZhuOdds: integer expected";
            if (!$util.isInteger(message.QiangDiZhuOdds))
                return "QiangDiZhuOdds: integer expected";
            if (!$util.isInteger(message.DiZhuCardTypeOdds))
                return "DiZhuCardTypeOdds: integer expected";
            if (!$util.isInteger(message.ZhaDanOdds))
                return "ZhaDanOdds: integer expected";
            if (!$util.isInteger(message.ChunTianOdds))
                return "ChunTianOdds: integer expected";
            if (!$util.isInteger(message.MingPaiOdds))
                return "MingPaiOdds: integer expected";
            if (!$util.isInteger(message.TotalOdds))
                return "TotalOdds: integer expected";
            if (!$util.isInteger(message.WinSeat))
                return "WinSeat: integer expected";
            if (message.Settlement != null && message.hasOwnProperty("Settlement")) {
                if (!Array.isArray(message.Settlement))
                    return "Settlement: array expected";
                for (var i = 0; i < message.Settlement.length; ++i) {
                    var error = $root.GameMsg_DDZ.DDZ_ResultRecord.verify(message.Settlement[i]);
                    if (error)
                        return "Settlement." + error;
                }
            }
            if (message.Rocket != null && message.hasOwnProperty("Rocket"))
                if (!$util.isInteger(message.Rocket))
                    return "Rocket: integer expected";
            if (!$util.isInteger(message.Calculation))
                return "Calculation: integer expected";
            if (!$util.isInteger(message.FanChunTianOdds))
                return "FanChunTianOdds: integer expected";
            return null;
        };

        /**
         * Creates a DDZ_NotifySettlement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_NotifySettlement} DDZ_NotifySettlement
         */
        DDZ_NotifySettlement.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_NotifySettlement)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_NotifySettlement();
            if (object.BaseScore != null)
                message.BaseScore = object.BaseScore | 0;
            if (object.JiaoDiZhuOdds != null)
                message.JiaoDiZhuOdds = object.JiaoDiZhuOdds | 0;
            if (object.QiangDiZhuOdds != null)
                message.QiangDiZhuOdds = object.QiangDiZhuOdds | 0;
            if (object.DiZhuCardTypeOdds != null)
                message.DiZhuCardTypeOdds = object.DiZhuCardTypeOdds | 0;
            if (object.ZhaDanOdds != null)
                message.ZhaDanOdds = object.ZhaDanOdds | 0;
            if (object.ChunTianOdds != null)
                message.ChunTianOdds = object.ChunTianOdds | 0;
            if (object.MingPaiOdds != null)
                message.MingPaiOdds = object.MingPaiOdds | 0;
            if (object.TotalOdds != null)
                message.TotalOdds = object.TotalOdds | 0;
            if (object.WinSeat != null)
                message.WinSeat = object.WinSeat | 0;
            if (object.Settlement) {
                if (!Array.isArray(object.Settlement))
                    throw TypeError(".GameMsg_DDZ.DDZ_NotifySettlement.Settlement: array expected");
                message.Settlement = [];
                for (var i = 0; i < object.Settlement.length; ++i) {
                    if (typeof object.Settlement[i] !== "object")
                        throw TypeError(".GameMsg_DDZ.DDZ_NotifySettlement.Settlement: object expected");
                    message.Settlement[i] = $root.GameMsg_DDZ.DDZ_ResultRecord.fromObject(object.Settlement[i]);
                }
            }
            if (object.Rocket != null)
                message.Rocket = object.Rocket | 0;
            if (object.Calculation != null)
                message.Calculation = object.Calculation | 0;
            if (object.FanChunTianOdds != null)
                message.FanChunTianOdds = object.FanChunTianOdds | 0;
            return message;
        };

        /**
         * Creates a plain object from a DDZ_NotifySettlement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @static
         * @param {GameMsg_DDZ.DDZ_NotifySettlement} message DDZ_NotifySettlement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_NotifySettlement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Settlement = [];
            if (options.defaults) {
                object.BaseScore = 0;
                object.JiaoDiZhuOdds = 0;
                object.QiangDiZhuOdds = 0;
                object.DiZhuCardTypeOdds = 0;
                object.ZhaDanOdds = 0;
                object.ChunTianOdds = 0;
                object.MingPaiOdds = 0;
                object.TotalOdds = 0;
                object.WinSeat = 0;
                object.Rocket = 0;
                object.Calculation = 0;
                object.FanChunTianOdds = 0;
            }
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                object.BaseScore = message.BaseScore;
            if (message.JiaoDiZhuOdds != null && message.hasOwnProperty("JiaoDiZhuOdds"))
                object.JiaoDiZhuOdds = message.JiaoDiZhuOdds;
            if (message.QiangDiZhuOdds != null && message.hasOwnProperty("QiangDiZhuOdds"))
                object.QiangDiZhuOdds = message.QiangDiZhuOdds;
            if (message.DiZhuCardTypeOdds != null && message.hasOwnProperty("DiZhuCardTypeOdds"))
                object.DiZhuCardTypeOdds = message.DiZhuCardTypeOdds;
            if (message.ZhaDanOdds != null && message.hasOwnProperty("ZhaDanOdds"))
                object.ZhaDanOdds = message.ZhaDanOdds;
            if (message.ChunTianOdds != null && message.hasOwnProperty("ChunTianOdds"))
                object.ChunTianOdds = message.ChunTianOdds;
            if (message.MingPaiOdds != null && message.hasOwnProperty("MingPaiOdds"))
                object.MingPaiOdds = message.MingPaiOdds;
            if (message.TotalOdds != null && message.hasOwnProperty("TotalOdds"))
                object.TotalOdds = message.TotalOdds;
            if (message.WinSeat != null && message.hasOwnProperty("WinSeat"))
                object.WinSeat = message.WinSeat;
            if (message.Settlement && message.Settlement.length) {
                object.Settlement = [];
                for (var j = 0; j < message.Settlement.length; ++j)
                    object.Settlement[j] = $root.GameMsg_DDZ.DDZ_ResultRecord.toObject(message.Settlement[j], options);
            }
            if (message.Rocket != null && message.hasOwnProperty("Rocket"))
                object.Rocket = message.Rocket;
            if (message.Calculation != null && message.hasOwnProperty("Calculation"))
                object.Calculation = message.Calculation;
            if (message.FanChunTianOdds != null && message.hasOwnProperty("FanChunTianOdds"))
                object.FanChunTianOdds = message.FanChunTianOdds;
            return object;
        };

        /**
         * Converts this DDZ_NotifySettlement to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_NotifySettlement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_NotifySettlement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_NotifySettlement;
    })();

    GameMsg_DDZ.DDZ_NotifyTuoGuan = (function() {

        /**
         * Properties of a DDZ_NotifyTuoGuan.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_NotifyTuoGuan
         * @property {number} UserSeat DDZ_NotifyTuoGuan UserSeat
         * @property {boolean} State DDZ_NotifyTuoGuan State
         */

        /**
         * Constructs a new DDZ_NotifyTuoGuan.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_NotifyTuoGuan.
         * @implements IDDZ_NotifyTuoGuan
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_NotifyTuoGuan=} [properties] Properties to set
         */
        function DDZ_NotifyTuoGuan(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_NotifyTuoGuan UserSeat.
         * @member {number} UserSeat
         * @memberof GameMsg_DDZ.DDZ_NotifyTuoGuan
         * @instance
         */
        DDZ_NotifyTuoGuan.prototype.UserSeat = 0;

        /**
         * DDZ_NotifyTuoGuan State.
         * @member {boolean} State
         * @memberof GameMsg_DDZ.DDZ_NotifyTuoGuan
         * @instance
         */
        DDZ_NotifyTuoGuan.prototype.State = false;

        /**
         * Creates a new DDZ_NotifyTuoGuan instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_NotifyTuoGuan
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyTuoGuan=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_NotifyTuoGuan} DDZ_NotifyTuoGuan instance
         */
        DDZ_NotifyTuoGuan.create = function create(properties) {
            return new DDZ_NotifyTuoGuan(properties);
        };

        /**
         * Encodes the specified DDZ_NotifyTuoGuan message. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyTuoGuan.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_NotifyTuoGuan
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyTuoGuan} message DDZ_NotifyTuoGuan message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyTuoGuan.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserSeat);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.State);
            return writer;
        };

        /**
         * Encodes the specified DDZ_NotifyTuoGuan message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyTuoGuan.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyTuoGuan
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyTuoGuan} message DDZ_NotifyTuoGuan message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyTuoGuan.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_NotifyTuoGuan message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_NotifyTuoGuan
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_NotifyTuoGuan} DDZ_NotifyTuoGuan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyTuoGuan.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_NotifyTuoGuan();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserSeat = reader.int32();
                    break;
                case 2:
                    message.State = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserSeat"))
                throw $util.ProtocolError("missing required 'UserSeat'", { instance: message });
            if (!message.hasOwnProperty("State"))
                throw $util.ProtocolError("missing required 'State'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_NotifyTuoGuan message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyTuoGuan
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_NotifyTuoGuan} DDZ_NotifyTuoGuan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyTuoGuan.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_NotifyTuoGuan message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_NotifyTuoGuan
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_NotifyTuoGuan.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserSeat))
                return "UserSeat: integer expected";
            if (typeof message.State !== "boolean")
                return "State: boolean expected";
            return null;
        };

        /**
         * Creates a DDZ_NotifyTuoGuan message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_NotifyTuoGuan
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_NotifyTuoGuan} DDZ_NotifyTuoGuan
         */
        DDZ_NotifyTuoGuan.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_NotifyTuoGuan)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_NotifyTuoGuan();
            if (object.UserSeat != null)
                message.UserSeat = object.UserSeat | 0;
            if (object.State != null)
                message.State = Boolean(object.State);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_NotifyTuoGuan message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_NotifyTuoGuan
         * @static
         * @param {GameMsg_DDZ.DDZ_NotifyTuoGuan} message DDZ_NotifyTuoGuan
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_NotifyTuoGuan.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserSeat = 0;
                object.State = false;
            }
            if (message.UserSeat != null && message.hasOwnProperty("UserSeat"))
                object.UserSeat = message.UserSeat;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            return object;
        };

        /**
         * Converts this DDZ_NotifyTuoGuan to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_NotifyTuoGuan
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_NotifyTuoGuan.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_NotifyTuoGuan;
    })();

    GameMsg_DDZ.DDZ_NotifyDeskCfg = (function() {

        /**
         * Properties of a DDZ_NotifyDeskCfg.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_NotifyDeskCfg
         * @property {number} Difen DDZ_NotifyDeskCfg Difen
         * @property {number} TimeOut DDZ_NotifyDeskCfg TimeOut
         * @property {number} Odds DDZ_NotifyDeskCfg Odds
         * @property {number} MaxOdd DDZ_NotifyDeskCfg MaxOdd
         */

        /**
         * Constructs a new DDZ_NotifyDeskCfg.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_NotifyDeskCfg.
         * @implements IDDZ_NotifyDeskCfg
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_NotifyDeskCfg=} [properties] Properties to set
         */
        function DDZ_NotifyDeskCfg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_NotifyDeskCfg Difen.
         * @member {number} Difen
         * @memberof GameMsg_DDZ.DDZ_NotifyDeskCfg
         * @instance
         */
        DDZ_NotifyDeskCfg.prototype.Difen = 0;

        /**
         * DDZ_NotifyDeskCfg TimeOut.
         * @member {number} TimeOut
         * @memberof GameMsg_DDZ.DDZ_NotifyDeskCfg
         * @instance
         */
        DDZ_NotifyDeskCfg.prototype.TimeOut = 0;

        /**
         * DDZ_NotifyDeskCfg Odds.
         * @member {number} Odds
         * @memberof GameMsg_DDZ.DDZ_NotifyDeskCfg
         * @instance
         */
        DDZ_NotifyDeskCfg.prototype.Odds = 0;

        /**
         * DDZ_NotifyDeskCfg MaxOdd.
         * @member {number} MaxOdd
         * @memberof GameMsg_DDZ.DDZ_NotifyDeskCfg
         * @instance
         */
        DDZ_NotifyDeskCfg.prototype.MaxOdd = 0;

        /**
         * Creates a new DDZ_NotifyDeskCfg instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_NotifyDeskCfg
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyDeskCfg=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_NotifyDeskCfg} DDZ_NotifyDeskCfg instance
         */
        DDZ_NotifyDeskCfg.create = function create(properties) {
            return new DDZ_NotifyDeskCfg(properties);
        };

        /**
         * Encodes the specified DDZ_NotifyDeskCfg message. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyDeskCfg.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_NotifyDeskCfg
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyDeskCfg} message DDZ_NotifyDeskCfg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyDeskCfg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Difen);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TimeOut);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Odds);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.MaxOdd);
            return writer;
        };

        /**
         * Encodes the specified DDZ_NotifyDeskCfg message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_NotifyDeskCfg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyDeskCfg
         * @static
         * @param {GameMsg_DDZ.IDDZ_NotifyDeskCfg} message DDZ_NotifyDeskCfg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_NotifyDeskCfg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_NotifyDeskCfg message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_NotifyDeskCfg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_NotifyDeskCfg} DDZ_NotifyDeskCfg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyDeskCfg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_NotifyDeskCfg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Difen = reader.int32();
                    break;
                case 2:
                    message.TimeOut = reader.int32();
                    break;
                case 3:
                    message.Odds = reader.int32();
                    break;
                case 4:
                    message.MaxOdd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Difen"))
                throw $util.ProtocolError("missing required 'Difen'", { instance: message });
            if (!message.hasOwnProperty("TimeOut"))
                throw $util.ProtocolError("missing required 'TimeOut'", { instance: message });
            if (!message.hasOwnProperty("Odds"))
                throw $util.ProtocolError("missing required 'Odds'", { instance: message });
            if (!message.hasOwnProperty("MaxOdd"))
                throw $util.ProtocolError("missing required 'MaxOdd'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_NotifyDeskCfg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_NotifyDeskCfg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_NotifyDeskCfg} DDZ_NotifyDeskCfg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_NotifyDeskCfg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_NotifyDeskCfg message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_NotifyDeskCfg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_NotifyDeskCfg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Difen))
                return "Difen: integer expected";
            if (!$util.isInteger(message.TimeOut))
                return "TimeOut: integer expected";
            if (!$util.isInteger(message.Odds))
                return "Odds: integer expected";
            if (!$util.isInteger(message.MaxOdd))
                return "MaxOdd: integer expected";
            return null;
        };

        /**
         * Creates a DDZ_NotifyDeskCfg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_NotifyDeskCfg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_NotifyDeskCfg} DDZ_NotifyDeskCfg
         */
        DDZ_NotifyDeskCfg.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_NotifyDeskCfg)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_NotifyDeskCfg();
            if (object.Difen != null)
                message.Difen = object.Difen | 0;
            if (object.TimeOut != null)
                message.TimeOut = object.TimeOut | 0;
            if (object.Odds != null)
                message.Odds = object.Odds | 0;
            if (object.MaxOdd != null)
                message.MaxOdd = object.MaxOdd | 0;
            return message;
        };

        /**
         * Creates a plain object from a DDZ_NotifyDeskCfg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_NotifyDeskCfg
         * @static
         * @param {GameMsg_DDZ.DDZ_NotifyDeskCfg} message DDZ_NotifyDeskCfg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_NotifyDeskCfg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Difen = 0;
                object.TimeOut = 0;
                object.Odds = 0;
                object.MaxOdd = 0;
            }
            if (message.Difen != null && message.hasOwnProperty("Difen"))
                object.Difen = message.Difen;
            if (message.TimeOut != null && message.hasOwnProperty("TimeOut"))
                object.TimeOut = message.TimeOut;
            if (message.Odds != null && message.hasOwnProperty("Odds"))
                object.Odds = message.Odds;
            if (message.MaxOdd != null && message.hasOwnProperty("MaxOdd"))
                object.MaxOdd = message.MaxOdd;
            return object;
        };

        /**
         * Converts this DDZ_NotifyDeskCfg to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_NotifyDeskCfg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_NotifyDeskCfg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_NotifyDeskCfg;
    })();

    GameMsg_DDZ.DDZ_EnableUserChiPaiChi = (function() {

        /**
         * Properties of a DDZ_EnableUserChiPaiChi.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_EnableUserChiPaiChi
         * @property {boolean} Status DDZ_EnableUserChiPaiChi Status
         */

        /**
         * Constructs a new DDZ_EnableUserChiPaiChi.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_EnableUserChiPaiChi.
         * @implements IDDZ_EnableUserChiPaiChi
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_EnableUserChiPaiChi=} [properties] Properties to set
         */
        function DDZ_EnableUserChiPaiChi(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_EnableUserChiPaiChi Status.
         * @member {boolean} Status
         * @memberof GameMsg_DDZ.DDZ_EnableUserChiPaiChi
         * @instance
         */
        DDZ_EnableUserChiPaiChi.prototype.Status = false;

        /**
         * Creates a new DDZ_EnableUserChiPaiChi instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_EnableUserChiPaiChi
         * @static
         * @param {GameMsg_DDZ.IDDZ_EnableUserChiPaiChi=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_EnableUserChiPaiChi} DDZ_EnableUserChiPaiChi instance
         */
        DDZ_EnableUserChiPaiChi.create = function create(properties) {
            return new DDZ_EnableUserChiPaiChi(properties);
        };

        /**
         * Encodes the specified DDZ_EnableUserChiPaiChi message. Does not implicitly {@link GameMsg_DDZ.DDZ_EnableUserChiPaiChi.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_EnableUserChiPaiChi
         * @static
         * @param {GameMsg_DDZ.IDDZ_EnableUserChiPaiChi} message DDZ_EnableUserChiPaiChi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_EnableUserChiPaiChi.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Status);
            return writer;
        };

        /**
         * Encodes the specified DDZ_EnableUserChiPaiChi message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_EnableUserChiPaiChi.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_EnableUserChiPaiChi
         * @static
         * @param {GameMsg_DDZ.IDDZ_EnableUserChiPaiChi} message DDZ_EnableUserChiPaiChi message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_EnableUserChiPaiChi.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_EnableUserChiPaiChi message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_EnableUserChiPaiChi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_EnableUserChiPaiChi} DDZ_EnableUserChiPaiChi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_EnableUserChiPaiChi.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_EnableUserChiPaiChi();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Status = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_EnableUserChiPaiChi message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_EnableUserChiPaiChi
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_EnableUserChiPaiChi} DDZ_EnableUserChiPaiChi
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_EnableUserChiPaiChi.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_EnableUserChiPaiChi message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_EnableUserChiPaiChi
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_EnableUserChiPaiChi.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.Status !== "boolean")
                return "Status: boolean expected";
            return null;
        };

        /**
         * Creates a DDZ_EnableUserChiPaiChi message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_EnableUserChiPaiChi
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_EnableUserChiPaiChi} DDZ_EnableUserChiPaiChi
         */
        DDZ_EnableUserChiPaiChi.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_EnableUserChiPaiChi)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_EnableUserChiPaiChi();
            if (object.Status != null)
                message.Status = Boolean(object.Status);
            return message;
        };

        /**
         * Creates a plain object from a DDZ_EnableUserChiPaiChi message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_EnableUserChiPaiChi
         * @static
         * @param {GameMsg_DDZ.DDZ_EnableUserChiPaiChi} message DDZ_EnableUserChiPaiChi
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_EnableUserChiPaiChi.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Status = false;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this DDZ_EnableUserChiPaiChi to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_EnableUserChiPaiChi
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_EnableUserChiPaiChi.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_EnableUserChiPaiChi;
    })();

    GameMsg_DDZ.DDZ_ChiPaiChiInfo = (function() {

        /**
         * Properties of a DDZ_ChiPaiChiInfo.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_ChiPaiChiInfo
         * @property {Array.<GameMsg_DDZ.ICard>|null} [ShengYuPai] DDZ_ChiPaiChiInfo ShengYuPai
         * @property {Array.<GameMsg_DDZ.IDDZ_ChuPaiChiLu>|null} [ShangChia] DDZ_ChiPaiChiInfo ShangChia
         * @property {Array.<GameMsg_DDZ.IDDZ_ChuPaiChiLu>|null} [HsiaChia] DDZ_ChiPaiChiInfo HsiaChia
         */

        /**
         * Constructs a new DDZ_ChiPaiChiInfo.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_ChiPaiChiInfo.
         * @implements IDDZ_ChiPaiChiInfo
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_ChiPaiChiInfo=} [properties] Properties to set
         */
        function DDZ_ChiPaiChiInfo(properties) {
            this.ShengYuPai = [];
            this.ShangChia = [];
            this.HsiaChia = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_ChiPaiChiInfo ShengYuPai.
         * @member {Array.<GameMsg_DDZ.ICard>} ShengYuPai
         * @memberof GameMsg_DDZ.DDZ_ChiPaiChiInfo
         * @instance
         */
        DDZ_ChiPaiChiInfo.prototype.ShengYuPai = $util.emptyArray;

        /**
         * DDZ_ChiPaiChiInfo ShangChia.
         * @member {Array.<GameMsg_DDZ.IDDZ_ChuPaiChiLu>} ShangChia
         * @memberof GameMsg_DDZ.DDZ_ChiPaiChiInfo
         * @instance
         */
        DDZ_ChiPaiChiInfo.prototype.ShangChia = $util.emptyArray;

        /**
         * DDZ_ChiPaiChiInfo HsiaChia.
         * @member {Array.<GameMsg_DDZ.IDDZ_ChuPaiChiLu>} HsiaChia
         * @memberof GameMsg_DDZ.DDZ_ChiPaiChiInfo
         * @instance
         */
        DDZ_ChiPaiChiInfo.prototype.HsiaChia = $util.emptyArray;

        /**
         * Creates a new DDZ_ChiPaiChiInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_ChiPaiChiInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_ChiPaiChiInfo=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_ChiPaiChiInfo} DDZ_ChiPaiChiInfo instance
         */
        DDZ_ChiPaiChiInfo.create = function create(properties) {
            return new DDZ_ChiPaiChiInfo(properties);
        };

        /**
         * Encodes the specified DDZ_ChiPaiChiInfo message. Does not implicitly {@link GameMsg_DDZ.DDZ_ChiPaiChiInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_ChiPaiChiInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_ChiPaiChiInfo} message DDZ_ChiPaiChiInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_ChiPaiChiInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ShengYuPai != null && message.ShengYuPai.length)
                for (var i = 0; i < message.ShengYuPai.length; ++i)
                    $root.GameMsg_DDZ.Card.encode(message.ShengYuPai[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ShangChia != null && message.ShangChia.length)
                for (var i = 0; i < message.ShangChia.length; ++i)
                    $root.GameMsg_DDZ.DDZ_ChuPaiChiLu.encode(message.ShangChia[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.HsiaChia != null && message.HsiaChia.length)
                for (var i = 0; i < message.HsiaChia.length; ++i)
                    $root.GameMsg_DDZ.DDZ_ChuPaiChiLu.encode(message.HsiaChia[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DDZ_ChiPaiChiInfo message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_ChiPaiChiInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_ChiPaiChiInfo
         * @static
         * @param {GameMsg_DDZ.IDDZ_ChiPaiChiInfo} message DDZ_ChiPaiChiInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_ChiPaiChiInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_ChiPaiChiInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_ChiPaiChiInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_ChiPaiChiInfo} DDZ_ChiPaiChiInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_ChiPaiChiInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_ChiPaiChiInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ShengYuPai && message.ShengYuPai.length))
                        message.ShengYuPai = [];
                    message.ShengYuPai.push($root.GameMsg_DDZ.Card.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.ShangChia && message.ShangChia.length))
                        message.ShangChia = [];
                    message.ShangChia.push($root.GameMsg_DDZ.DDZ_ChuPaiChiLu.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.HsiaChia && message.HsiaChia.length))
                        message.HsiaChia = [];
                    message.HsiaChia.push($root.GameMsg_DDZ.DDZ_ChuPaiChiLu.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DDZ_ChiPaiChiInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_ChiPaiChiInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_ChiPaiChiInfo} DDZ_ChiPaiChiInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_ChiPaiChiInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_ChiPaiChiInfo message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_ChiPaiChiInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_ChiPaiChiInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ShengYuPai != null && message.hasOwnProperty("ShengYuPai")) {
                if (!Array.isArray(message.ShengYuPai))
                    return "ShengYuPai: array expected";
                for (var i = 0; i < message.ShengYuPai.length; ++i) {
                    var error = $root.GameMsg_DDZ.Card.verify(message.ShengYuPai[i]);
                    if (error)
                        return "ShengYuPai." + error;
                }
            }
            if (message.ShangChia != null && message.hasOwnProperty("ShangChia")) {
                if (!Array.isArray(message.ShangChia))
                    return "ShangChia: array expected";
                for (var i = 0; i < message.ShangChia.length; ++i) {
                    var error = $root.GameMsg_DDZ.DDZ_ChuPaiChiLu.verify(message.ShangChia[i]);
                    if (error)
                        return "ShangChia." + error;
                }
            }
            if (message.HsiaChia != null && message.hasOwnProperty("HsiaChia")) {
                if (!Array.isArray(message.HsiaChia))
                    return "HsiaChia: array expected";
                for (var i = 0; i < message.HsiaChia.length; ++i) {
                    var error = $root.GameMsg_DDZ.DDZ_ChuPaiChiLu.verify(message.HsiaChia[i]);
                    if (error)
                        return "HsiaChia." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DDZ_ChiPaiChiInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_ChiPaiChiInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_ChiPaiChiInfo} DDZ_ChiPaiChiInfo
         */
        DDZ_ChiPaiChiInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_ChiPaiChiInfo)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_ChiPaiChiInfo();
            if (object.ShengYuPai) {
                if (!Array.isArray(object.ShengYuPai))
                    throw TypeError(".GameMsg_DDZ.DDZ_ChiPaiChiInfo.ShengYuPai: array expected");
                message.ShengYuPai = [];
                for (var i = 0; i < object.ShengYuPai.length; ++i) {
                    if (typeof object.ShengYuPai[i] !== "object")
                        throw TypeError(".GameMsg_DDZ.DDZ_ChiPaiChiInfo.ShengYuPai: object expected");
                    message.ShengYuPai[i] = $root.GameMsg_DDZ.Card.fromObject(object.ShengYuPai[i]);
                }
            }
            if (object.ShangChia) {
                if (!Array.isArray(object.ShangChia))
                    throw TypeError(".GameMsg_DDZ.DDZ_ChiPaiChiInfo.ShangChia: array expected");
                message.ShangChia = [];
                for (var i = 0; i < object.ShangChia.length; ++i) {
                    if (typeof object.ShangChia[i] !== "object")
                        throw TypeError(".GameMsg_DDZ.DDZ_ChiPaiChiInfo.ShangChia: object expected");
                    message.ShangChia[i] = $root.GameMsg_DDZ.DDZ_ChuPaiChiLu.fromObject(object.ShangChia[i]);
                }
            }
            if (object.HsiaChia) {
                if (!Array.isArray(object.HsiaChia))
                    throw TypeError(".GameMsg_DDZ.DDZ_ChiPaiChiInfo.HsiaChia: array expected");
                message.HsiaChia = [];
                for (var i = 0; i < object.HsiaChia.length; ++i) {
                    if (typeof object.HsiaChia[i] !== "object")
                        throw TypeError(".GameMsg_DDZ.DDZ_ChiPaiChiInfo.HsiaChia: object expected");
                    message.HsiaChia[i] = $root.GameMsg_DDZ.DDZ_ChuPaiChiLu.fromObject(object.HsiaChia[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DDZ_ChiPaiChiInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_ChiPaiChiInfo
         * @static
         * @param {GameMsg_DDZ.DDZ_ChiPaiChiInfo} message DDZ_ChiPaiChiInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_ChiPaiChiInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.ShengYuPai = [];
                object.ShangChia = [];
                object.HsiaChia = [];
            }
            if (message.ShengYuPai && message.ShengYuPai.length) {
                object.ShengYuPai = [];
                for (var j = 0; j < message.ShengYuPai.length; ++j)
                    object.ShengYuPai[j] = $root.GameMsg_DDZ.Card.toObject(message.ShengYuPai[j], options);
            }
            if (message.ShangChia && message.ShangChia.length) {
                object.ShangChia = [];
                for (var j = 0; j < message.ShangChia.length; ++j)
                    object.ShangChia[j] = $root.GameMsg_DDZ.DDZ_ChuPaiChiLu.toObject(message.ShangChia[j], options);
            }
            if (message.HsiaChia && message.HsiaChia.length) {
                object.HsiaChia = [];
                for (var j = 0; j < message.HsiaChia.length; ++j)
                    object.HsiaChia[j] = $root.GameMsg_DDZ.DDZ_ChuPaiChiLu.toObject(message.HsiaChia[j], options);
            }
            return object;
        };

        /**
         * Converts this DDZ_ChiPaiChiInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_ChiPaiChiInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_ChiPaiChiInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_ChiPaiChiInfo;
    })();

    GameMsg_DDZ.DDZ_ChuPaiChiLu = (function() {

        /**
         * Properties of a DDZ_ChuPaiChiLu.
         * @memberof GameMsg_DDZ
         * @interface IDDZ_ChuPaiChiLu
         * @property {Array.<GameMsg_DDZ.ICard>|null} [Cards] DDZ_ChuPaiChiLu Cards
         * @property {number} SeatNo DDZ_ChuPaiChiLu SeatNo
         */

        /**
         * Constructs a new DDZ_ChuPaiChiLu.
         * @memberof GameMsg_DDZ
         * @classdesc Represents a DDZ_ChuPaiChiLu.
         * @implements IDDZ_ChuPaiChiLu
         * @constructor
         * @param {GameMsg_DDZ.IDDZ_ChuPaiChiLu=} [properties] Properties to set
         */
        function DDZ_ChuPaiChiLu(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DDZ_ChuPaiChiLu Cards.
         * @member {Array.<GameMsg_DDZ.ICard>} Cards
         * @memberof GameMsg_DDZ.DDZ_ChuPaiChiLu
         * @instance
         */
        DDZ_ChuPaiChiLu.prototype.Cards = $util.emptyArray;

        /**
         * DDZ_ChuPaiChiLu SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_DDZ.DDZ_ChuPaiChiLu
         * @instance
         */
        DDZ_ChuPaiChiLu.prototype.SeatNo = 0;

        /**
         * Creates a new DDZ_ChuPaiChiLu instance using the specified properties.
         * @function create
         * @memberof GameMsg_DDZ.DDZ_ChuPaiChiLu
         * @static
         * @param {GameMsg_DDZ.IDDZ_ChuPaiChiLu=} [properties] Properties to set
         * @returns {GameMsg_DDZ.DDZ_ChuPaiChiLu} DDZ_ChuPaiChiLu instance
         */
        DDZ_ChuPaiChiLu.create = function create(properties) {
            return new DDZ_ChuPaiChiLu(properties);
        };

        /**
         * Encodes the specified DDZ_ChuPaiChiLu message. Does not implicitly {@link GameMsg_DDZ.DDZ_ChuPaiChiLu.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DDZ.DDZ_ChuPaiChiLu
         * @static
         * @param {GameMsg_DDZ.IDDZ_ChuPaiChiLu} message DDZ_ChuPaiChiLu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_ChuPaiChiLu.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.GameMsg_DDZ.Card.encode(message.Cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SeatNo);
            return writer;
        };

        /**
         * Encodes the specified DDZ_ChuPaiChiLu message, length delimited. Does not implicitly {@link GameMsg_DDZ.DDZ_ChuPaiChiLu.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DDZ.DDZ_ChuPaiChiLu
         * @static
         * @param {GameMsg_DDZ.IDDZ_ChuPaiChiLu} message DDZ_ChuPaiChiLu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DDZ_ChuPaiChiLu.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DDZ_ChuPaiChiLu message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DDZ.DDZ_ChuPaiChiLu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DDZ.DDZ_ChuPaiChiLu} DDZ_ChuPaiChiLu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_ChuPaiChiLu.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DDZ.DDZ_ChuPaiChiLu();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.GameMsg_DDZ.Card.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.SeatNo = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            return message;
        };

        /**
         * Decodes a DDZ_ChuPaiChiLu message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DDZ.DDZ_ChuPaiChiLu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DDZ.DDZ_ChuPaiChiLu} DDZ_ChuPaiChiLu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DDZ_ChuPaiChiLu.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DDZ_ChuPaiChiLu message.
         * @function verify
         * @memberof GameMsg_DDZ.DDZ_ChuPaiChiLu
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DDZ_ChuPaiChiLu.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.GameMsg_DDZ.Card.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            return null;
        };

        /**
         * Creates a DDZ_ChuPaiChiLu message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DDZ.DDZ_ChuPaiChiLu
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DDZ.DDZ_ChuPaiChiLu} DDZ_ChuPaiChiLu
         */
        DDZ_ChuPaiChiLu.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DDZ.DDZ_ChuPaiChiLu)
                return object;
            var message = new $root.GameMsg_DDZ.DDZ_ChuPaiChiLu();
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".GameMsg_DDZ.DDZ_ChuPaiChiLu.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg_DDZ.DDZ_ChuPaiChiLu.Cards: object expected");
                    message.Cards[i] = $root.GameMsg_DDZ.Card.fromObject(object.Cards[i]);
                }
            }
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            return message;
        };

        /**
         * Creates a plain object from a DDZ_ChuPaiChiLu message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DDZ.DDZ_ChuPaiChiLu
         * @static
         * @param {GameMsg_DDZ.DDZ_ChuPaiChiLu} message DDZ_ChuPaiChiLu
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DDZ_ChuPaiChiLu.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Cards = [];
            if (options.defaults)
                object.SeatNo = 0;
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = $root.GameMsg_DDZ.Card.toObject(message.Cards[j], options);
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            return object;
        };

        /**
         * Converts this DDZ_ChuPaiChiLu to JSON.
         * @function toJSON
         * @memberof GameMsg_DDZ.DDZ_ChuPaiChiLu
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DDZ_ChuPaiChiLu.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DDZ_ChuPaiChiLu;
    })();

    return GameMsg_DDZ;
})();

module.exports = $root;
