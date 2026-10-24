/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg_ZJH = (function() {

    /**
     * Namespace GameMsg_ZJH.
     * @exports GameMsg_ZJH
     * @namespace
     */
    var GameMsg_ZJH = {};

    GameMsg_ZJH.ZJH_WaitOpt = (function() {

        /**
         * Properties of a ZJH_WaitOpt.
         * @memberof GameMsg_ZJH
         * @interface IZJH_WaitOpt
         * @property {boolean} check ZJH_WaitOpt check
         * @property {boolean} drop ZJH_WaitOpt drop
         * @property {boolean} compare ZJH_WaitOpt compare
         * @property {boolean} fill ZJH_WaitOpt fill
         * @property {boolean} betadd ZJH_WaitOpt betadd
         * @property {boolean} first ZJH_WaitOpt first
         * @property {number} optTime ZJH_WaitOpt optTime
         * @property {Array.<number>|null} [betaddvalue] ZJH_WaitOpt betaddvalue
         * @property {boolean} allin ZJH_WaitOpt allin
         */

        /**
         * Constructs a new ZJH_WaitOpt.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_WaitOpt.
         * @implements IZJH_WaitOpt
         * @constructor
         * @param {GameMsg_ZJH.IZJH_WaitOpt=} [properties] Properties to set
         */
        function ZJH_WaitOpt(properties) {
            this.betaddvalue = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_WaitOpt check.
         * @member {boolean} check
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @instance
         */
        ZJH_WaitOpt.prototype.check = false;

        /**
         * ZJH_WaitOpt drop.
         * @member {boolean} drop
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @instance
         */
        ZJH_WaitOpt.prototype.drop = false;

        /**
         * ZJH_WaitOpt compare.
         * @member {boolean} compare
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @instance
         */
        ZJH_WaitOpt.prototype.compare = false;

        /**
         * ZJH_WaitOpt fill.
         * @member {boolean} fill
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @instance
         */
        ZJH_WaitOpt.prototype.fill = false;

        /**
         * ZJH_WaitOpt betadd.
         * @member {boolean} betadd
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @instance
         */
        ZJH_WaitOpt.prototype.betadd = false;

        /**
         * ZJH_WaitOpt first.
         * @member {boolean} first
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @instance
         */
        ZJH_WaitOpt.prototype.first = false;

        /**
         * ZJH_WaitOpt optTime.
         * @member {number} optTime
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @instance
         */
        ZJH_WaitOpt.prototype.optTime = 0;

        /**
         * ZJH_WaitOpt betaddvalue.
         * @member {Array.<number>} betaddvalue
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @instance
         */
        ZJH_WaitOpt.prototype.betaddvalue = $util.emptyArray;

        /**
         * ZJH_WaitOpt allin.
         * @member {boolean} allin
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @instance
         */
        ZJH_WaitOpt.prototype.allin = false;

        /**
         * Creates a new ZJH_WaitOpt instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @static
         * @param {GameMsg_ZJH.IZJH_WaitOpt=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_WaitOpt} ZJH_WaitOpt instance
         */
        ZJH_WaitOpt.create = function create(properties) {
            return new ZJH_WaitOpt(properties);
        };

        /**
         * Encodes the specified ZJH_WaitOpt message. Does not implicitly {@link GameMsg_ZJH.ZJH_WaitOpt.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @static
         * @param {GameMsg_ZJH.IZJH_WaitOpt} message ZJH_WaitOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_WaitOpt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.check);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.drop);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.compare);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.fill);
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.betadd);
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.first);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.optTime);
            if (message.betaddvalue != null && message.betaddvalue.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (var i = 0; i < message.betaddvalue.length; ++i)
                    writer.int32(message.betaddvalue[i]);
                writer.ldelim();
            }
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.allin);
            return writer;
        };

        /**
         * Encodes the specified ZJH_WaitOpt message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_WaitOpt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @static
         * @param {GameMsg_ZJH.IZJH_WaitOpt} message ZJH_WaitOpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_WaitOpt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_WaitOpt message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_WaitOpt} ZJH_WaitOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_WaitOpt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_WaitOpt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.check = reader.bool();
                    break;
                case 2:
                    message.drop = reader.bool();
                    break;
                case 3:
                    message.compare = reader.bool();
                    break;
                case 4:
                    message.fill = reader.bool();
                    break;
                case 5:
                    message.betadd = reader.bool();
                    break;
                case 6:
                    message.first = reader.bool();
                    break;
                case 7:
                    message.optTime = reader.int32();
                    break;
                case 8:
                    if (!(message.betaddvalue && message.betaddvalue.length))
                        message.betaddvalue = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.betaddvalue.push(reader.int32());
                    } else
                        message.betaddvalue.push(reader.int32());
                    break;
                case 9:
                    message.allin = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("check"))
                throw $util.ProtocolError("missing required 'check'", { instance: message });
            if (!message.hasOwnProperty("drop"))
                throw $util.ProtocolError("missing required 'drop'", { instance: message });
            if (!message.hasOwnProperty("compare"))
                throw $util.ProtocolError("missing required 'compare'", { instance: message });
            if (!message.hasOwnProperty("fill"))
                throw $util.ProtocolError("missing required 'fill'", { instance: message });
            if (!message.hasOwnProperty("betadd"))
                throw $util.ProtocolError("missing required 'betadd'", { instance: message });
            if (!message.hasOwnProperty("first"))
                throw $util.ProtocolError("missing required 'first'", { instance: message });
            if (!message.hasOwnProperty("optTime"))
                throw $util.ProtocolError("missing required 'optTime'", { instance: message });
            if (!message.hasOwnProperty("allin"))
                throw $util.ProtocolError("missing required 'allin'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_WaitOpt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_WaitOpt} ZJH_WaitOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_WaitOpt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_WaitOpt message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_WaitOpt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.check !== "boolean")
                return "check: boolean expected";
            if (typeof message.drop !== "boolean")
                return "drop: boolean expected";
            if (typeof message.compare !== "boolean")
                return "compare: boolean expected";
            if (typeof message.fill !== "boolean")
                return "fill: boolean expected";
            if (typeof message.betadd !== "boolean")
                return "betadd: boolean expected";
            if (typeof message.first !== "boolean")
                return "first: boolean expected";
            if (!$util.isInteger(message.optTime))
                return "optTime: integer expected";
            if (message.betaddvalue != null && message.hasOwnProperty("betaddvalue")) {
                if (!Array.isArray(message.betaddvalue))
                    return "betaddvalue: array expected";
                for (var i = 0; i < message.betaddvalue.length; ++i)
                    if (!$util.isInteger(message.betaddvalue[i]))
                        return "betaddvalue: integer[] expected";
            }
            if (typeof message.allin !== "boolean")
                return "allin: boolean expected";
            return null;
        };

        /**
         * Creates a ZJH_WaitOpt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_WaitOpt} ZJH_WaitOpt
         */
        ZJH_WaitOpt.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_WaitOpt)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_WaitOpt();
            if (object.check != null)
                message.check = Boolean(object.check);
            if (object.drop != null)
                message.drop = Boolean(object.drop);
            if (object.compare != null)
                message.compare = Boolean(object.compare);
            if (object.fill != null)
                message.fill = Boolean(object.fill);
            if (object.betadd != null)
                message.betadd = Boolean(object.betadd);
            if (object.first != null)
                message.first = Boolean(object.first);
            if (object.optTime != null)
                message.optTime = object.optTime | 0;
            if (object.betaddvalue) {
                if (!Array.isArray(object.betaddvalue))
                    throw TypeError(".GameMsg_ZJH.ZJH_WaitOpt.betaddvalue: array expected");
                message.betaddvalue = [];
                for (var i = 0; i < object.betaddvalue.length; ++i)
                    message.betaddvalue[i] = object.betaddvalue[i] | 0;
            }
            if (object.allin != null)
                message.allin = Boolean(object.allin);
            return message;
        };

        /**
         * Creates a plain object from a ZJH_WaitOpt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @static
         * @param {GameMsg_ZJH.ZJH_WaitOpt} message ZJH_WaitOpt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_WaitOpt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.betaddvalue = [];
            if (options.defaults) {
                object.check = false;
                object.drop = false;
                object.compare = false;
                object.fill = false;
                object.betadd = false;
                object.first = false;
                object.optTime = 0;
                object.allin = false;
            }
            if (message.check != null && message.hasOwnProperty("check"))
                object.check = message.check;
            if (message.drop != null && message.hasOwnProperty("drop"))
                object.drop = message.drop;
            if (message.compare != null && message.hasOwnProperty("compare"))
                object.compare = message.compare;
            if (message.fill != null && message.hasOwnProperty("fill"))
                object.fill = message.fill;
            if (message.betadd != null && message.hasOwnProperty("betadd"))
                object.betadd = message.betadd;
            if (message.first != null && message.hasOwnProperty("first"))
                object.first = message.first;
            if (message.optTime != null && message.hasOwnProperty("optTime"))
                object.optTime = message.optTime;
            if (message.betaddvalue && message.betaddvalue.length) {
                object.betaddvalue = [];
                for (var j = 0; j < message.betaddvalue.length; ++j)
                    object.betaddvalue[j] = message.betaddvalue[j];
            }
            if (message.allin != null && message.hasOwnProperty("allin"))
                object.allin = message.allin;
            return object;
        };

        /**
         * Converts this ZJH_WaitOpt to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_WaitOpt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_WaitOpt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_WaitOpt;
    })();

    GameMsg_ZJH.ZJH_WaitOptSeat = (function() {

        /**
         * Properties of a ZJH_WaitOptSeat.
         * @memberof GameMsg_ZJH
         * @interface IZJH_WaitOptSeat
         * @property {number} seatno ZJH_WaitOptSeat seatno
         * @property {number} optTime ZJH_WaitOptSeat optTime
         */

        /**
         * Constructs a new ZJH_WaitOptSeat.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_WaitOptSeat.
         * @implements IZJH_WaitOptSeat
         * @constructor
         * @param {GameMsg_ZJH.IZJH_WaitOptSeat=} [properties] Properties to set
         */
        function ZJH_WaitOptSeat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_WaitOptSeat seatno.
         * @member {number} seatno
         * @memberof GameMsg_ZJH.ZJH_WaitOptSeat
         * @instance
         */
        ZJH_WaitOptSeat.prototype.seatno = 0;

        /**
         * ZJH_WaitOptSeat optTime.
         * @member {number} optTime
         * @memberof GameMsg_ZJH.ZJH_WaitOptSeat
         * @instance
         */
        ZJH_WaitOptSeat.prototype.optTime = 0;

        /**
         * Creates a new ZJH_WaitOptSeat instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_WaitOptSeat
         * @static
         * @param {GameMsg_ZJH.IZJH_WaitOptSeat=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_WaitOptSeat} ZJH_WaitOptSeat instance
         */
        ZJH_WaitOptSeat.create = function create(properties) {
            return new ZJH_WaitOptSeat(properties);
        };

        /**
         * Encodes the specified ZJH_WaitOptSeat message. Does not implicitly {@link GameMsg_ZJH.ZJH_WaitOptSeat.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_WaitOptSeat
         * @static
         * @param {GameMsg_ZJH.IZJH_WaitOptSeat} message ZJH_WaitOptSeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_WaitOptSeat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatno);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.optTime);
            return writer;
        };

        /**
         * Encodes the specified ZJH_WaitOptSeat message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_WaitOptSeat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_WaitOptSeat
         * @static
         * @param {GameMsg_ZJH.IZJH_WaitOptSeat} message ZJH_WaitOptSeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_WaitOptSeat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_WaitOptSeat message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_WaitOptSeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_WaitOptSeat} ZJH_WaitOptSeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_WaitOptSeat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_WaitOptSeat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatno = reader.int32();
                    break;
                case 2:
                    message.optTime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatno"))
                throw $util.ProtocolError("missing required 'seatno'", { instance: message });
            if (!message.hasOwnProperty("optTime"))
                throw $util.ProtocolError("missing required 'optTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_WaitOptSeat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_WaitOptSeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_WaitOptSeat} ZJH_WaitOptSeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_WaitOptSeat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_WaitOptSeat message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_WaitOptSeat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_WaitOptSeat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatno))
                return "seatno: integer expected";
            if (!$util.isInteger(message.optTime))
                return "optTime: integer expected";
            return null;
        };

        /**
         * Creates a ZJH_WaitOptSeat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_WaitOptSeat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_WaitOptSeat} ZJH_WaitOptSeat
         */
        ZJH_WaitOptSeat.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_WaitOptSeat)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_WaitOptSeat();
            if (object.seatno != null)
                message.seatno = object.seatno | 0;
            if (object.optTime != null)
                message.optTime = object.optTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a ZJH_WaitOptSeat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_WaitOptSeat
         * @static
         * @param {GameMsg_ZJH.ZJH_WaitOptSeat} message ZJH_WaitOptSeat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_WaitOptSeat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.seatno = 0;
                object.optTime = 0;
            }
            if (message.seatno != null && message.hasOwnProperty("seatno"))
                object.seatno = message.seatno;
            if (message.optTime != null && message.hasOwnProperty("optTime"))
                object.optTime = message.optTime;
            return object;
        };

        /**
         * Converts this ZJH_WaitOptSeat to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_WaitOptSeat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_WaitOptSeat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_WaitOptSeat;
    })();

    GameMsg_ZJH.ZJH_BetBase = (function() {

        /**
         * Properties of a ZJH_BetBase.
         * @memberof GameMsg_ZJH
         * @interface IZJH_BetBase
         * @property {number} betbase ZJH_BetBase betbase
         * @property {number} betcount ZJH_BetBase betcount
         */

        /**
         * Constructs a new ZJH_BetBase.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_BetBase.
         * @implements IZJH_BetBase
         * @constructor
         * @param {GameMsg_ZJH.IZJH_BetBase=} [properties] Properties to set
         */
        function ZJH_BetBase(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_BetBase betbase.
         * @member {number} betbase
         * @memberof GameMsg_ZJH.ZJH_BetBase
         * @instance
         */
        ZJH_BetBase.prototype.betbase = 0;

        /**
         * ZJH_BetBase betcount.
         * @member {number} betcount
         * @memberof GameMsg_ZJH.ZJH_BetBase
         * @instance
         */
        ZJH_BetBase.prototype.betcount = 0;

        /**
         * Creates a new ZJH_BetBase instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_BetBase
         * @static
         * @param {GameMsg_ZJH.IZJH_BetBase=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_BetBase} ZJH_BetBase instance
         */
        ZJH_BetBase.create = function create(properties) {
            return new ZJH_BetBase(properties);
        };

        /**
         * Encodes the specified ZJH_BetBase message. Does not implicitly {@link GameMsg_ZJH.ZJH_BetBase.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_BetBase
         * @static
         * @param {GameMsg_ZJH.IZJH_BetBase} message ZJH_BetBase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_BetBase.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.betbase);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.betcount);
            return writer;
        };

        /**
         * Encodes the specified ZJH_BetBase message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_BetBase.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_BetBase
         * @static
         * @param {GameMsg_ZJH.IZJH_BetBase} message ZJH_BetBase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_BetBase.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_BetBase message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_BetBase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_BetBase} ZJH_BetBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_BetBase.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_BetBase();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.betbase = reader.int32();
                    break;
                case 2:
                    message.betcount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("betbase"))
                throw $util.ProtocolError("missing required 'betbase'", { instance: message });
            if (!message.hasOwnProperty("betcount"))
                throw $util.ProtocolError("missing required 'betcount'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_BetBase message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_BetBase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_BetBase} ZJH_BetBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_BetBase.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_BetBase message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_BetBase
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_BetBase.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.betbase))
                return "betbase: integer expected";
            if (!$util.isInteger(message.betcount))
                return "betcount: integer expected";
            return null;
        };

        /**
         * Creates a ZJH_BetBase message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_BetBase
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_BetBase} ZJH_BetBase
         */
        ZJH_BetBase.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_BetBase)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_BetBase();
            if (object.betbase != null)
                message.betbase = object.betbase | 0;
            if (object.betcount != null)
                message.betcount = object.betcount | 0;
            return message;
        };

        /**
         * Creates a plain object from a ZJH_BetBase message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_BetBase
         * @static
         * @param {GameMsg_ZJH.ZJH_BetBase} message ZJH_BetBase
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_BetBase.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.betbase = 0;
                object.betcount = 0;
            }
            if (message.betbase != null && message.hasOwnProperty("betbase"))
                object.betbase = message.betbase;
            if (message.betcount != null && message.hasOwnProperty("betcount"))
                object.betcount = message.betcount;
            return object;
        };

        /**
         * Converts this ZJH_BetBase to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_BetBase
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_BetBase.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_BetBase;
    })();

    GameMsg_ZJH.ZJH_FaiPai = (function() {

        /**
         * Properties of a ZJH_FaiPai.
         * @memberof GameMsg_ZJH
         * @interface IZJH_FaiPai
         * @property {number} seatno ZJH_FaiPai seatno
         * @property {boolean} bfirst ZJH_FaiPai bfirst
         * @property {Array.<number>|null} [BetArr] ZJH_FaiPai BetArr
         */

        /**
         * Constructs a new ZJH_FaiPai.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_FaiPai.
         * @implements IZJH_FaiPai
         * @constructor
         * @param {GameMsg_ZJH.IZJH_FaiPai=} [properties] Properties to set
         */
        function ZJH_FaiPai(properties) {
            this.BetArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_FaiPai seatno.
         * @member {number} seatno
         * @memberof GameMsg_ZJH.ZJH_FaiPai
         * @instance
         */
        ZJH_FaiPai.prototype.seatno = 0;

        /**
         * ZJH_FaiPai bfirst.
         * @member {boolean} bfirst
         * @memberof GameMsg_ZJH.ZJH_FaiPai
         * @instance
         */
        ZJH_FaiPai.prototype.bfirst = false;

        /**
         * ZJH_FaiPai BetArr.
         * @member {Array.<number>} BetArr
         * @memberof GameMsg_ZJH.ZJH_FaiPai
         * @instance
         */
        ZJH_FaiPai.prototype.BetArr = $util.emptyArray;

        /**
         * Creates a new ZJH_FaiPai instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_FaiPai
         * @static
         * @param {GameMsg_ZJH.IZJH_FaiPai=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_FaiPai} ZJH_FaiPai instance
         */
        ZJH_FaiPai.create = function create(properties) {
            return new ZJH_FaiPai(properties);
        };

        /**
         * Encodes the specified ZJH_FaiPai message. Does not implicitly {@link GameMsg_ZJH.ZJH_FaiPai.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_FaiPai
         * @static
         * @param {GameMsg_ZJH.IZJH_FaiPai} message ZJH_FaiPai message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_FaiPai.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatno);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.bfirst);
            if (message.BetArr != null && message.BetArr.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.BetArr.length; ++i)
                    writer.int32(message.BetArr[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ZJH_FaiPai message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_FaiPai.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_FaiPai
         * @static
         * @param {GameMsg_ZJH.IZJH_FaiPai} message ZJH_FaiPai message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_FaiPai.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_FaiPai message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_FaiPai
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_FaiPai} ZJH_FaiPai
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_FaiPai.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_FaiPai();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatno = reader.int32();
                    break;
                case 2:
                    message.bfirst = reader.bool();
                    break;
                case 3:
                    if (!(message.BetArr && message.BetArr.length))
                        message.BetArr = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BetArr.push(reader.int32());
                    } else
                        message.BetArr.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatno"))
                throw $util.ProtocolError("missing required 'seatno'", { instance: message });
            if (!message.hasOwnProperty("bfirst"))
                throw $util.ProtocolError("missing required 'bfirst'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_FaiPai message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_FaiPai
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_FaiPai} ZJH_FaiPai
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_FaiPai.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_FaiPai message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_FaiPai
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_FaiPai.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatno))
                return "seatno: integer expected";
            if (typeof message.bfirst !== "boolean")
                return "bfirst: boolean expected";
            if (message.BetArr != null && message.hasOwnProperty("BetArr")) {
                if (!Array.isArray(message.BetArr))
                    return "BetArr: array expected";
                for (var i = 0; i < message.BetArr.length; ++i)
                    if (!$util.isInteger(message.BetArr[i]))
                        return "BetArr: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a ZJH_FaiPai message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_FaiPai
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_FaiPai} ZJH_FaiPai
         */
        ZJH_FaiPai.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_FaiPai)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_FaiPai();
            if (object.seatno != null)
                message.seatno = object.seatno | 0;
            if (object.bfirst != null)
                message.bfirst = Boolean(object.bfirst);
            if (object.BetArr) {
                if (!Array.isArray(object.BetArr))
                    throw TypeError(".GameMsg_ZJH.ZJH_FaiPai.BetArr: array expected");
                message.BetArr = [];
                for (var i = 0; i < object.BetArr.length; ++i)
                    message.BetArr[i] = object.BetArr[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a ZJH_FaiPai message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_FaiPai
         * @static
         * @param {GameMsg_ZJH.ZJH_FaiPai} message ZJH_FaiPai
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_FaiPai.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BetArr = [];
            if (options.defaults) {
                object.seatno = 0;
                object.bfirst = false;
            }
            if (message.seatno != null && message.hasOwnProperty("seatno"))
                object.seatno = message.seatno;
            if (message.bfirst != null && message.hasOwnProperty("bfirst"))
                object.bfirst = message.bfirst;
            if (message.BetArr && message.BetArr.length) {
                object.BetArr = [];
                for (var j = 0; j < message.BetArr.length; ++j)
                    object.BetArr[j] = message.BetArr[j];
            }
            return object;
        };

        /**
         * Converts this ZJH_FaiPai to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_FaiPai
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_FaiPai.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_FaiPai;
    })();

    GameMsg_ZJH.ZJH_SeatNO = (function() {

        /**
         * Properties of a ZJH_SeatNO.
         * @memberof GameMsg_ZJH
         * @interface IZJH_SeatNO
         * @property {number} seatno ZJH_SeatNO seatno
         */

        /**
         * Constructs a new ZJH_SeatNO.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_SeatNO.
         * @implements IZJH_SeatNO
         * @constructor
         * @param {GameMsg_ZJH.IZJH_SeatNO=} [properties] Properties to set
         */
        function ZJH_SeatNO(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_SeatNO seatno.
         * @member {number} seatno
         * @memberof GameMsg_ZJH.ZJH_SeatNO
         * @instance
         */
        ZJH_SeatNO.prototype.seatno = 0;

        /**
         * Creates a new ZJH_SeatNO instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_SeatNO
         * @static
         * @param {GameMsg_ZJH.IZJH_SeatNO=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_SeatNO} ZJH_SeatNO instance
         */
        ZJH_SeatNO.create = function create(properties) {
            return new ZJH_SeatNO(properties);
        };

        /**
         * Encodes the specified ZJH_SeatNO message. Does not implicitly {@link GameMsg_ZJH.ZJH_SeatNO.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_SeatNO
         * @static
         * @param {GameMsg_ZJH.IZJH_SeatNO} message ZJH_SeatNO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_SeatNO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatno);
            return writer;
        };

        /**
         * Encodes the specified ZJH_SeatNO message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_SeatNO.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_SeatNO
         * @static
         * @param {GameMsg_ZJH.IZJH_SeatNO} message ZJH_SeatNO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_SeatNO.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_SeatNO message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_SeatNO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_SeatNO} ZJH_SeatNO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_SeatNO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_SeatNO();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatno = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatno"))
                throw $util.ProtocolError("missing required 'seatno'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_SeatNO message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_SeatNO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_SeatNO} ZJH_SeatNO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_SeatNO.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_SeatNO message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_SeatNO
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_SeatNO.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatno))
                return "seatno: integer expected";
            return null;
        };

        /**
         * Creates a ZJH_SeatNO message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_SeatNO
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_SeatNO} ZJH_SeatNO
         */
        ZJH_SeatNO.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_SeatNO)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_SeatNO();
            if (object.seatno != null)
                message.seatno = object.seatno | 0;
            return message;
        };

        /**
         * Creates a plain object from a ZJH_SeatNO message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_SeatNO
         * @static
         * @param {GameMsg_ZJH.ZJH_SeatNO} message ZJH_SeatNO
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_SeatNO.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.seatno = 0;
            if (message.seatno != null && message.hasOwnProperty("seatno"))
                object.seatno = message.seatno;
            return object;
        };

        /**
         * Converts this ZJH_SeatNO to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_SeatNO
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_SeatNO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_SeatNO;
    })();

    GameMsg_ZJH.ZJH_CompareCardsRet = (function() {

        /**
         * Properties of a ZJH_CompareCardsRet.
         * @memberof GameMsg_ZJH
         * @interface IZJH_CompareCardsRet
         * @property {number} winseatno ZJH_CompareCardsRet winseatno
         * @property {number} faildseatno ZJH_CompareCardsRet faildseatno
         * @property {number} compareMoney ZJH_CompareCardsRet compareMoney
         * @property {number} odd ZJH_CompareCardsRet odd
         */

        /**
         * Constructs a new ZJH_CompareCardsRet.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_CompareCardsRet.
         * @implements IZJH_CompareCardsRet
         * @constructor
         * @param {GameMsg_ZJH.IZJH_CompareCardsRet=} [properties] Properties to set
         */
        function ZJH_CompareCardsRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_CompareCardsRet winseatno.
         * @member {number} winseatno
         * @memberof GameMsg_ZJH.ZJH_CompareCardsRet
         * @instance
         */
        ZJH_CompareCardsRet.prototype.winseatno = 0;

        /**
         * ZJH_CompareCardsRet faildseatno.
         * @member {number} faildseatno
         * @memberof GameMsg_ZJH.ZJH_CompareCardsRet
         * @instance
         */
        ZJH_CompareCardsRet.prototype.faildseatno = 0;

        /**
         * ZJH_CompareCardsRet compareMoney.
         * @member {number} compareMoney
         * @memberof GameMsg_ZJH.ZJH_CompareCardsRet
         * @instance
         */
        ZJH_CompareCardsRet.prototype.compareMoney = 0;

        /**
         * ZJH_CompareCardsRet odd.
         * @member {number} odd
         * @memberof GameMsg_ZJH.ZJH_CompareCardsRet
         * @instance
         */
        ZJH_CompareCardsRet.prototype.odd = 0;

        /**
         * Creates a new ZJH_CompareCardsRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_CompareCardsRet
         * @static
         * @param {GameMsg_ZJH.IZJH_CompareCardsRet=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_CompareCardsRet} ZJH_CompareCardsRet instance
         */
        ZJH_CompareCardsRet.create = function create(properties) {
            return new ZJH_CompareCardsRet(properties);
        };

        /**
         * Encodes the specified ZJH_CompareCardsRet message. Does not implicitly {@link GameMsg_ZJH.ZJH_CompareCardsRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_CompareCardsRet
         * @static
         * @param {GameMsg_ZJH.IZJH_CompareCardsRet} message ZJH_CompareCardsRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_CompareCardsRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.winseatno);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.faildseatno);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.compareMoney);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.odd);
            return writer;
        };

        /**
         * Encodes the specified ZJH_CompareCardsRet message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_CompareCardsRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_CompareCardsRet
         * @static
         * @param {GameMsg_ZJH.IZJH_CompareCardsRet} message ZJH_CompareCardsRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_CompareCardsRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_CompareCardsRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_CompareCardsRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_CompareCardsRet} ZJH_CompareCardsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_CompareCardsRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_CompareCardsRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.winseatno = reader.int32();
                    break;
                case 2:
                    message.faildseatno = reader.int32();
                    break;
                case 3:
                    message.compareMoney = reader.int32();
                    break;
                case 4:
                    message.odd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("winseatno"))
                throw $util.ProtocolError("missing required 'winseatno'", { instance: message });
            if (!message.hasOwnProperty("faildseatno"))
                throw $util.ProtocolError("missing required 'faildseatno'", { instance: message });
            if (!message.hasOwnProperty("compareMoney"))
                throw $util.ProtocolError("missing required 'compareMoney'", { instance: message });
            if (!message.hasOwnProperty("odd"))
                throw $util.ProtocolError("missing required 'odd'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_CompareCardsRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_CompareCardsRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_CompareCardsRet} ZJH_CompareCardsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_CompareCardsRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_CompareCardsRet message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_CompareCardsRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_CompareCardsRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.winseatno))
                return "winseatno: integer expected";
            if (!$util.isInteger(message.faildseatno))
                return "faildseatno: integer expected";
            if (!$util.isInteger(message.compareMoney))
                return "compareMoney: integer expected";
            if (!$util.isInteger(message.odd))
                return "odd: integer expected";
            return null;
        };

        /**
         * Creates a ZJH_CompareCardsRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_CompareCardsRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_CompareCardsRet} ZJH_CompareCardsRet
         */
        ZJH_CompareCardsRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_CompareCardsRet)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_CompareCardsRet();
            if (object.winseatno != null)
                message.winseatno = object.winseatno | 0;
            if (object.faildseatno != null)
                message.faildseatno = object.faildseatno | 0;
            if (object.compareMoney != null)
                message.compareMoney = object.compareMoney | 0;
            if (object.odd != null)
                message.odd = object.odd | 0;
            return message;
        };

        /**
         * Creates a plain object from a ZJH_CompareCardsRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_CompareCardsRet
         * @static
         * @param {GameMsg_ZJH.ZJH_CompareCardsRet} message ZJH_CompareCardsRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_CompareCardsRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.winseatno = 0;
                object.faildseatno = 0;
                object.compareMoney = 0;
                object.odd = 0;
            }
            if (message.winseatno != null && message.hasOwnProperty("winseatno"))
                object.winseatno = message.winseatno;
            if (message.faildseatno != null && message.hasOwnProperty("faildseatno"))
                object.faildseatno = message.faildseatno;
            if (message.compareMoney != null && message.hasOwnProperty("compareMoney"))
                object.compareMoney = message.compareMoney;
            if (message.odd != null && message.hasOwnProperty("odd"))
                object.odd = message.odd;
            return object;
        };

        /**
         * Converts this ZJH_CompareCardsRet to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_CompareCardsRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_CompareCardsRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_CompareCardsRet;
    })();

    GameMsg_ZJH.ZJH_BetAdd = (function() {

        /**
         * Properties of a ZJH_BetAdd.
         * @memberof GameMsg_ZJH
         * @interface IZJH_BetAdd
         * @property {number} betadd ZJH_BetAdd betadd
         */

        /**
         * Constructs a new ZJH_BetAdd.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_BetAdd.
         * @implements IZJH_BetAdd
         * @constructor
         * @param {GameMsg_ZJH.IZJH_BetAdd=} [properties] Properties to set
         */
        function ZJH_BetAdd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_BetAdd betadd.
         * @member {number} betadd
         * @memberof GameMsg_ZJH.ZJH_BetAdd
         * @instance
         */
        ZJH_BetAdd.prototype.betadd = 0;

        /**
         * Creates a new ZJH_BetAdd instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_BetAdd
         * @static
         * @param {GameMsg_ZJH.IZJH_BetAdd=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_BetAdd} ZJH_BetAdd instance
         */
        ZJH_BetAdd.create = function create(properties) {
            return new ZJH_BetAdd(properties);
        };

        /**
         * Encodes the specified ZJH_BetAdd message. Does not implicitly {@link GameMsg_ZJH.ZJH_BetAdd.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_BetAdd
         * @static
         * @param {GameMsg_ZJH.IZJH_BetAdd} message ZJH_BetAdd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_BetAdd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.betadd);
            return writer;
        };

        /**
         * Encodes the specified ZJH_BetAdd message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_BetAdd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_BetAdd
         * @static
         * @param {GameMsg_ZJH.IZJH_BetAdd} message ZJH_BetAdd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_BetAdd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_BetAdd message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_BetAdd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_BetAdd} ZJH_BetAdd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_BetAdd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_BetAdd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.betadd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("betadd"))
                throw $util.ProtocolError("missing required 'betadd'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_BetAdd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_BetAdd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_BetAdd} ZJH_BetAdd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_BetAdd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_BetAdd message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_BetAdd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_BetAdd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.betadd))
                return "betadd: integer expected";
            return null;
        };

        /**
         * Creates a ZJH_BetAdd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_BetAdd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_BetAdd} ZJH_BetAdd
         */
        ZJH_BetAdd.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_BetAdd)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_BetAdd();
            if (object.betadd != null)
                message.betadd = object.betadd | 0;
            return message;
        };

        /**
         * Creates a plain object from a ZJH_BetAdd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_BetAdd
         * @static
         * @param {GameMsg_ZJH.ZJH_BetAdd} message ZJH_BetAdd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_BetAdd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.betadd = 0;
            if (message.betadd != null && message.hasOwnProperty("betadd"))
                object.betadd = message.betadd;
            return object;
        };

        /**
         * Converts this ZJH_BetAdd to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_BetAdd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_BetAdd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_BetAdd;
    })();

    GameMsg_ZJH.ZJH_BetAddBrodCast = (function() {

        /**
         * Properties of a ZJH_BetAddBrodCast.
         * @memberof GameMsg_ZJH
         * @interface IZJH_BetAddBrodCast
         * @property {number} seatno ZJH_BetAddBrodCast seatno
         * @property {number} betadd ZJH_BetAddBrodCast betadd
         * @property {number} odd ZJH_BetAddBrodCast odd
         * @property {boolean} isfirst ZJH_BetAddBrodCast isfirst
         */

        /**
         * Constructs a new ZJH_BetAddBrodCast.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_BetAddBrodCast.
         * @implements IZJH_BetAddBrodCast
         * @constructor
         * @param {GameMsg_ZJH.IZJH_BetAddBrodCast=} [properties] Properties to set
         */
        function ZJH_BetAddBrodCast(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_BetAddBrodCast seatno.
         * @member {number} seatno
         * @memberof GameMsg_ZJH.ZJH_BetAddBrodCast
         * @instance
         */
        ZJH_BetAddBrodCast.prototype.seatno = 0;

        /**
         * ZJH_BetAddBrodCast betadd.
         * @member {number} betadd
         * @memberof GameMsg_ZJH.ZJH_BetAddBrodCast
         * @instance
         */
        ZJH_BetAddBrodCast.prototype.betadd = 0;

        /**
         * ZJH_BetAddBrodCast odd.
         * @member {number} odd
         * @memberof GameMsg_ZJH.ZJH_BetAddBrodCast
         * @instance
         */
        ZJH_BetAddBrodCast.prototype.odd = 0;

        /**
         * ZJH_BetAddBrodCast isfirst.
         * @member {boolean} isfirst
         * @memberof GameMsg_ZJH.ZJH_BetAddBrodCast
         * @instance
         */
        ZJH_BetAddBrodCast.prototype.isfirst = false;

        /**
         * Creates a new ZJH_BetAddBrodCast instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_BetAddBrodCast
         * @static
         * @param {GameMsg_ZJH.IZJH_BetAddBrodCast=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_BetAddBrodCast} ZJH_BetAddBrodCast instance
         */
        ZJH_BetAddBrodCast.create = function create(properties) {
            return new ZJH_BetAddBrodCast(properties);
        };

        /**
         * Encodes the specified ZJH_BetAddBrodCast message. Does not implicitly {@link GameMsg_ZJH.ZJH_BetAddBrodCast.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_BetAddBrodCast
         * @static
         * @param {GameMsg_ZJH.IZJH_BetAddBrodCast} message ZJH_BetAddBrodCast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_BetAddBrodCast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatno);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.betadd);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.odd);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isfirst);
            return writer;
        };

        /**
         * Encodes the specified ZJH_BetAddBrodCast message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_BetAddBrodCast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_BetAddBrodCast
         * @static
         * @param {GameMsg_ZJH.IZJH_BetAddBrodCast} message ZJH_BetAddBrodCast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_BetAddBrodCast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_BetAddBrodCast message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_BetAddBrodCast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_BetAddBrodCast} ZJH_BetAddBrodCast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_BetAddBrodCast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_BetAddBrodCast();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatno = reader.int32();
                    break;
                case 2:
                    message.betadd = reader.int32();
                    break;
                case 3:
                    message.odd = reader.int32();
                    break;
                case 4:
                    message.isfirst = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatno"))
                throw $util.ProtocolError("missing required 'seatno'", { instance: message });
            if (!message.hasOwnProperty("betadd"))
                throw $util.ProtocolError("missing required 'betadd'", { instance: message });
            if (!message.hasOwnProperty("odd"))
                throw $util.ProtocolError("missing required 'odd'", { instance: message });
            if (!message.hasOwnProperty("isfirst"))
                throw $util.ProtocolError("missing required 'isfirst'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_BetAddBrodCast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_BetAddBrodCast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_BetAddBrodCast} ZJH_BetAddBrodCast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_BetAddBrodCast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_BetAddBrodCast message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_BetAddBrodCast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_BetAddBrodCast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatno))
                return "seatno: integer expected";
            if (!$util.isInteger(message.betadd))
                return "betadd: integer expected";
            if (!$util.isInteger(message.odd))
                return "odd: integer expected";
            if (typeof message.isfirst !== "boolean")
                return "isfirst: boolean expected";
            return null;
        };

        /**
         * Creates a ZJH_BetAddBrodCast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_BetAddBrodCast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_BetAddBrodCast} ZJH_BetAddBrodCast
         */
        ZJH_BetAddBrodCast.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_BetAddBrodCast)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_BetAddBrodCast();
            if (object.seatno != null)
                message.seatno = object.seatno | 0;
            if (object.betadd != null)
                message.betadd = object.betadd | 0;
            if (object.odd != null)
                message.odd = object.odd | 0;
            if (object.isfirst != null)
                message.isfirst = Boolean(object.isfirst);
            return message;
        };

        /**
         * Creates a plain object from a ZJH_BetAddBrodCast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_BetAddBrodCast
         * @static
         * @param {GameMsg_ZJH.ZJH_BetAddBrodCast} message ZJH_BetAddBrodCast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_BetAddBrodCast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.seatno = 0;
                object.betadd = 0;
                object.odd = 0;
                object.isfirst = false;
            }
            if (message.seatno != null && message.hasOwnProperty("seatno"))
                object.seatno = message.seatno;
            if (message.betadd != null && message.hasOwnProperty("betadd"))
                object.betadd = message.betadd;
            if (message.odd != null && message.hasOwnProperty("odd"))
                object.odd = message.odd;
            if (message.isfirst != null && message.hasOwnProperty("isfirst"))
                object.isfirst = message.isfirst;
            return object;
        };

        /**
         * Converts this ZJH_BetAddBrodCast to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_BetAddBrodCast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_BetAddBrodCast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_BetAddBrodCast;
    })();

    GameMsg_ZJH.ZJH_AllinBrodCast = (function() {

        /**
         * Properties of a ZJH_AllinBrodCast.
         * @memberof GameMsg_ZJH
         * @interface IZJH_AllinBrodCast
         * @property {number} seatno ZJH_AllinBrodCast seatno
         * @property {number} betadd ZJH_AllinBrodCast betadd
         * @property {number} odd ZJH_AllinBrodCast odd
         */

        /**
         * Constructs a new ZJH_AllinBrodCast.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_AllinBrodCast.
         * @implements IZJH_AllinBrodCast
         * @constructor
         * @param {GameMsg_ZJH.IZJH_AllinBrodCast=} [properties] Properties to set
         */
        function ZJH_AllinBrodCast(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_AllinBrodCast seatno.
         * @member {number} seatno
         * @memberof GameMsg_ZJH.ZJH_AllinBrodCast
         * @instance
         */
        ZJH_AllinBrodCast.prototype.seatno = 0;

        /**
         * ZJH_AllinBrodCast betadd.
         * @member {number} betadd
         * @memberof GameMsg_ZJH.ZJH_AllinBrodCast
         * @instance
         */
        ZJH_AllinBrodCast.prototype.betadd = 0;

        /**
         * ZJH_AllinBrodCast odd.
         * @member {number} odd
         * @memberof GameMsg_ZJH.ZJH_AllinBrodCast
         * @instance
         */
        ZJH_AllinBrodCast.prototype.odd = 0;

        /**
         * Creates a new ZJH_AllinBrodCast instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_AllinBrodCast
         * @static
         * @param {GameMsg_ZJH.IZJH_AllinBrodCast=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_AllinBrodCast} ZJH_AllinBrodCast instance
         */
        ZJH_AllinBrodCast.create = function create(properties) {
            return new ZJH_AllinBrodCast(properties);
        };

        /**
         * Encodes the specified ZJH_AllinBrodCast message. Does not implicitly {@link GameMsg_ZJH.ZJH_AllinBrodCast.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_AllinBrodCast
         * @static
         * @param {GameMsg_ZJH.IZJH_AllinBrodCast} message ZJH_AllinBrodCast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_AllinBrodCast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatno);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.betadd);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.odd);
            return writer;
        };

        /**
         * Encodes the specified ZJH_AllinBrodCast message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_AllinBrodCast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_AllinBrodCast
         * @static
         * @param {GameMsg_ZJH.IZJH_AllinBrodCast} message ZJH_AllinBrodCast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_AllinBrodCast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_AllinBrodCast message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_AllinBrodCast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_AllinBrodCast} ZJH_AllinBrodCast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_AllinBrodCast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_AllinBrodCast();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatno = reader.int32();
                    break;
                case 2:
                    message.betadd = reader.int32();
                    break;
                case 3:
                    message.odd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatno"))
                throw $util.ProtocolError("missing required 'seatno'", { instance: message });
            if (!message.hasOwnProperty("betadd"))
                throw $util.ProtocolError("missing required 'betadd'", { instance: message });
            if (!message.hasOwnProperty("odd"))
                throw $util.ProtocolError("missing required 'odd'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_AllinBrodCast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_AllinBrodCast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_AllinBrodCast} ZJH_AllinBrodCast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_AllinBrodCast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_AllinBrodCast message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_AllinBrodCast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_AllinBrodCast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatno))
                return "seatno: integer expected";
            if (!$util.isInteger(message.betadd))
                return "betadd: integer expected";
            if (!$util.isInteger(message.odd))
                return "odd: integer expected";
            return null;
        };

        /**
         * Creates a ZJH_AllinBrodCast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_AllinBrodCast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_AllinBrodCast} ZJH_AllinBrodCast
         */
        ZJH_AllinBrodCast.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_AllinBrodCast)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_AllinBrodCast();
            if (object.seatno != null)
                message.seatno = object.seatno | 0;
            if (object.betadd != null)
                message.betadd = object.betadd | 0;
            if (object.odd != null)
                message.odd = object.odd | 0;
            return message;
        };

        /**
         * Creates a plain object from a ZJH_AllinBrodCast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_AllinBrodCast
         * @static
         * @param {GameMsg_ZJH.ZJH_AllinBrodCast} message ZJH_AllinBrodCast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_AllinBrodCast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.seatno = 0;
                object.betadd = 0;
                object.odd = 0;
            }
            if (message.seatno != null && message.hasOwnProperty("seatno"))
                object.seatno = message.seatno;
            if (message.betadd != null && message.hasOwnProperty("betadd"))
                object.betadd = message.betadd;
            if (message.odd != null && message.hasOwnProperty("odd"))
                object.odd = message.odd;
            return object;
        };

        /**
         * Converts this ZJH_AllinBrodCast to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_AllinBrodCast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_AllinBrodCast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_AllinBrodCast;
    })();

    GameMsg_ZJH.ZJH_Follow = (function() {

        /**
         * Properties of a ZJH_Follow.
         * @memberof GameMsg_ZJH
         * @interface IZJH_Follow
         * @property {number} seatno ZJH_Follow seatno
         * @property {number} follow ZJH_Follow follow
         * @property {number} odd ZJH_Follow odd
         */

        /**
         * Constructs a new ZJH_Follow.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_Follow.
         * @implements IZJH_Follow
         * @constructor
         * @param {GameMsg_ZJH.IZJH_Follow=} [properties] Properties to set
         */
        function ZJH_Follow(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_Follow seatno.
         * @member {number} seatno
         * @memberof GameMsg_ZJH.ZJH_Follow
         * @instance
         */
        ZJH_Follow.prototype.seatno = 0;

        /**
         * ZJH_Follow follow.
         * @member {number} follow
         * @memberof GameMsg_ZJH.ZJH_Follow
         * @instance
         */
        ZJH_Follow.prototype.follow = 0;

        /**
         * ZJH_Follow odd.
         * @member {number} odd
         * @memberof GameMsg_ZJH.ZJH_Follow
         * @instance
         */
        ZJH_Follow.prototype.odd = 0;

        /**
         * Creates a new ZJH_Follow instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_Follow
         * @static
         * @param {GameMsg_ZJH.IZJH_Follow=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_Follow} ZJH_Follow instance
         */
        ZJH_Follow.create = function create(properties) {
            return new ZJH_Follow(properties);
        };

        /**
         * Encodes the specified ZJH_Follow message. Does not implicitly {@link GameMsg_ZJH.ZJH_Follow.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_Follow
         * @static
         * @param {GameMsg_ZJH.IZJH_Follow} message ZJH_Follow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_Follow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatno);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.follow);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.odd);
            return writer;
        };

        /**
         * Encodes the specified ZJH_Follow message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_Follow.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_Follow
         * @static
         * @param {GameMsg_ZJH.IZJH_Follow} message ZJH_Follow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_Follow.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_Follow message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_Follow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_Follow} ZJH_Follow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_Follow.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_Follow();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatno = reader.int32();
                    break;
                case 2:
                    message.follow = reader.int32();
                    break;
                case 3:
                    message.odd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatno"))
                throw $util.ProtocolError("missing required 'seatno'", { instance: message });
            if (!message.hasOwnProperty("follow"))
                throw $util.ProtocolError("missing required 'follow'", { instance: message });
            if (!message.hasOwnProperty("odd"))
                throw $util.ProtocolError("missing required 'odd'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_Follow message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_Follow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_Follow} ZJH_Follow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_Follow.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_Follow message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_Follow
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_Follow.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatno))
                return "seatno: integer expected";
            if (!$util.isInteger(message.follow))
                return "follow: integer expected";
            if (!$util.isInteger(message.odd))
                return "odd: integer expected";
            return null;
        };

        /**
         * Creates a ZJH_Follow message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_Follow
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_Follow} ZJH_Follow
         */
        ZJH_Follow.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_Follow)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_Follow();
            if (object.seatno != null)
                message.seatno = object.seatno | 0;
            if (object.follow != null)
                message.follow = object.follow | 0;
            if (object.odd != null)
                message.odd = object.odd | 0;
            return message;
        };

        /**
         * Creates a plain object from a ZJH_Follow message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_Follow
         * @static
         * @param {GameMsg_ZJH.ZJH_Follow} message ZJH_Follow
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_Follow.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.seatno = 0;
                object.follow = 0;
                object.odd = 0;
            }
            if (message.seatno != null && message.hasOwnProperty("seatno"))
                object.seatno = message.seatno;
            if (message.follow != null && message.hasOwnProperty("follow"))
                object.follow = message.follow;
            if (message.odd != null && message.hasOwnProperty("odd"))
                object.odd = message.odd;
            return object;
        };

        /**
         * Converts this ZJH_Follow to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_Follow
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_Follow.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_Follow;
    })();

    GameMsg_ZJH.ZJH_GameRet = (function() {

        /**
         * Properties of a ZJH_GameRet.
         * @memberof GameMsg_ZJH
         * @interface IZJH_GameRet
         * @property {number} winSeatNO ZJH_GameRet winSeatNO
         * @property {number|Long} money ZJH_GameRet money
         */

        /**
         * Constructs a new ZJH_GameRet.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_GameRet.
         * @implements IZJH_GameRet
         * @constructor
         * @param {GameMsg_ZJH.IZJH_GameRet=} [properties] Properties to set
         */
        function ZJH_GameRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_GameRet winSeatNO.
         * @member {number} winSeatNO
         * @memberof GameMsg_ZJH.ZJH_GameRet
         * @instance
         */
        ZJH_GameRet.prototype.winSeatNO = 0;

        /**
         * ZJH_GameRet money.
         * @member {number|Long} money
         * @memberof GameMsg_ZJH.ZJH_GameRet
         * @instance
         */
        ZJH_GameRet.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ZJH_GameRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_GameRet
         * @static
         * @param {GameMsg_ZJH.IZJH_GameRet=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_GameRet} ZJH_GameRet instance
         */
        ZJH_GameRet.create = function create(properties) {
            return new ZJH_GameRet(properties);
        };

        /**
         * Encodes the specified ZJH_GameRet message. Does not implicitly {@link GameMsg_ZJH.ZJH_GameRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_GameRet
         * @static
         * @param {GameMsg_ZJH.IZJH_GameRet} message ZJH_GameRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_GameRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.winSeatNO);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.money);
            return writer;
        };

        /**
         * Encodes the specified ZJH_GameRet message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_GameRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_GameRet
         * @static
         * @param {GameMsg_ZJH.IZJH_GameRet} message ZJH_GameRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_GameRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_GameRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_GameRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_GameRet} ZJH_GameRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_GameRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_GameRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.winSeatNO = reader.int32();
                    break;
                case 2:
                    message.money = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("winSeatNO"))
                throw $util.ProtocolError("missing required 'winSeatNO'", { instance: message });
            if (!message.hasOwnProperty("money"))
                throw $util.ProtocolError("missing required 'money'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_GameRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_GameRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_GameRet} ZJH_GameRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_GameRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_GameRet message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_GameRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_GameRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.winSeatNO))
                return "winSeatNO: integer expected";
            if (!$util.isInteger(message.money) && !(message.money && $util.isInteger(message.money.low) && $util.isInteger(message.money.high)))
                return "money: integer|Long expected";
            return null;
        };

        /**
         * Creates a ZJH_GameRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_GameRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_GameRet} ZJH_GameRet
         */
        ZJH_GameRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_GameRet)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_GameRet();
            if (object.winSeatNO != null)
                message.winSeatNO = object.winSeatNO | 0;
            if (object.money != null)
                if ($util.Long)
                    (message.money = $util.Long.fromValue(object.money)).unsigned = false;
                else if (typeof object.money === "string")
                    message.money = parseInt(object.money, 10);
                else if (typeof object.money === "number")
                    message.money = object.money;
                else if (typeof object.money === "object")
                    message.money = new $util.LongBits(object.money.low >>> 0, object.money.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ZJH_GameRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_GameRet
         * @static
         * @param {GameMsg_ZJH.ZJH_GameRet} message ZJH_GameRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_GameRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.winSeatNO = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.money = options.longs === String ? "0" : 0;
            }
            if (message.winSeatNO != null && message.hasOwnProperty("winSeatNO"))
                object.winSeatNO = message.winSeatNO;
            if (message.money != null && message.hasOwnProperty("money"))
                if (typeof message.money === "number")
                    object.money = options.longs === String ? String(message.money) : message.money;
                else
                    object.money = options.longs === String ? $util.Long.prototype.toString.call(message.money) : options.longs === Number ? new $util.LongBits(message.money.low >>> 0, message.money.high >>> 0).toNumber() : message.money;
            return object;
        };

        /**
         * Converts this ZJH_GameRet to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_GameRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_GameRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_GameRet;
    })();

    GameMsg_ZJH.ZJH_ComparePoker = (function() {

        /**
         * Properties of a ZJH_ComparePoker.
         * @memberof GameMsg_ZJH
         * @interface IZJH_ComparePoker
         * @property {Array.<GameMsg_ZJH.IZJH_Poker>|null} [OtherPoker] ZJH_ComparePoker OtherPoker
         */

        /**
         * Constructs a new ZJH_ComparePoker.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_ComparePoker.
         * @implements IZJH_ComparePoker
         * @constructor
         * @param {GameMsg_ZJH.IZJH_ComparePoker=} [properties] Properties to set
         */
        function ZJH_ComparePoker(properties) {
            this.OtherPoker = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_ComparePoker OtherPoker.
         * @member {Array.<GameMsg_ZJH.IZJH_Poker>} OtherPoker
         * @memberof GameMsg_ZJH.ZJH_ComparePoker
         * @instance
         */
        ZJH_ComparePoker.prototype.OtherPoker = $util.emptyArray;

        /**
         * Creates a new ZJH_ComparePoker instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_ComparePoker
         * @static
         * @param {GameMsg_ZJH.IZJH_ComparePoker=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_ComparePoker} ZJH_ComparePoker instance
         */
        ZJH_ComparePoker.create = function create(properties) {
            return new ZJH_ComparePoker(properties);
        };

        /**
         * Encodes the specified ZJH_ComparePoker message. Does not implicitly {@link GameMsg_ZJH.ZJH_ComparePoker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_ComparePoker
         * @static
         * @param {GameMsg_ZJH.IZJH_ComparePoker} message ZJH_ComparePoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_ComparePoker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.OtherPoker != null && message.OtherPoker.length)
                for (var i = 0; i < message.OtherPoker.length; ++i)
                    $root.GameMsg_ZJH.ZJH_Poker.encode(message.OtherPoker[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ZJH_ComparePoker message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_ComparePoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_ComparePoker
         * @static
         * @param {GameMsg_ZJH.IZJH_ComparePoker} message ZJH_ComparePoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_ComparePoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_ComparePoker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_ComparePoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_ComparePoker} ZJH_ComparePoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_ComparePoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_ComparePoker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3:
                    if (!(message.OtherPoker && message.OtherPoker.length))
                        message.OtherPoker = [];
                    message.OtherPoker.push($root.GameMsg_ZJH.ZJH_Poker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ZJH_ComparePoker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_ComparePoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_ComparePoker} ZJH_ComparePoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_ComparePoker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_ComparePoker message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_ComparePoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_ComparePoker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.OtherPoker != null && message.hasOwnProperty("OtherPoker")) {
                if (!Array.isArray(message.OtherPoker))
                    return "OtherPoker: array expected";
                for (var i = 0; i < message.OtherPoker.length; ++i) {
                    var error = $root.GameMsg_ZJH.ZJH_Poker.verify(message.OtherPoker[i]);
                    if (error)
                        return "OtherPoker." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ZJH_ComparePoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_ComparePoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_ComparePoker} ZJH_ComparePoker
         */
        ZJH_ComparePoker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_ComparePoker)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_ComparePoker();
            if (object.OtherPoker) {
                if (!Array.isArray(object.OtherPoker))
                    throw TypeError(".GameMsg_ZJH.ZJH_ComparePoker.OtherPoker: array expected");
                message.OtherPoker = [];
                for (var i = 0; i < object.OtherPoker.length; ++i) {
                    if (typeof object.OtherPoker[i] !== "object")
                        throw TypeError(".GameMsg_ZJH.ZJH_ComparePoker.OtherPoker: object expected");
                    message.OtherPoker[i] = $root.GameMsg_ZJH.ZJH_Poker.fromObject(object.OtherPoker[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ZJH_ComparePoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_ComparePoker
         * @static
         * @param {GameMsg_ZJH.ZJH_ComparePoker} message ZJH_ComparePoker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_ComparePoker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.OtherPoker = [];
            if (message.OtherPoker && message.OtherPoker.length) {
                object.OtherPoker = [];
                for (var j = 0; j < message.OtherPoker.length; ++j)
                    object.OtherPoker[j] = $root.GameMsg_ZJH.ZJH_Poker.toObject(message.OtherPoker[j], options);
            }
            return object;
        };

        /**
         * Converts this ZJH_ComparePoker to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_ComparePoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_ComparePoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_ComparePoker;
    })();

    GameMsg_ZJH.ZJH_Poker = (function() {

        /**
         * Properties of a ZJH_Poker.
         * @memberof GameMsg_ZJH
         * @interface IZJH_Poker
         * @property {number} PokerType ZJH_Poker PokerType
         * @property {GameMsg_ZJH.IUserPoker} userpokergroup ZJH_Poker userpokergroup
         */

        /**
         * Constructs a new ZJH_Poker.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_Poker.
         * @implements IZJH_Poker
         * @constructor
         * @param {GameMsg_ZJH.IZJH_Poker=} [properties] Properties to set
         */
        function ZJH_Poker(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_Poker PokerType.
         * @member {number} PokerType
         * @memberof GameMsg_ZJH.ZJH_Poker
         * @instance
         */
        ZJH_Poker.prototype.PokerType = 0;

        /**
         * ZJH_Poker userpokergroup.
         * @member {GameMsg_ZJH.IUserPoker} userpokergroup
         * @memberof GameMsg_ZJH.ZJH_Poker
         * @instance
         */
        ZJH_Poker.prototype.userpokergroup = null;

        /**
         * Creates a new ZJH_Poker instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_Poker
         * @static
         * @param {GameMsg_ZJH.IZJH_Poker=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_Poker} ZJH_Poker instance
         */
        ZJH_Poker.create = function create(properties) {
            return new ZJH_Poker(properties);
        };

        /**
         * Encodes the specified ZJH_Poker message. Does not implicitly {@link GameMsg_ZJH.ZJH_Poker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_Poker
         * @static
         * @param {GameMsg_ZJH.IZJH_Poker} message ZJH_Poker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_Poker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PokerType);
            $root.GameMsg_ZJH.UserPoker.encode(message.userpokergroup, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ZJH_Poker message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_Poker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_Poker
         * @static
         * @param {GameMsg_ZJH.IZJH_Poker} message ZJH_Poker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_Poker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_Poker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_Poker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_Poker} ZJH_Poker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_Poker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_Poker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PokerType = reader.int32();
                    break;
                case 2:
                    message.userpokergroup = $root.GameMsg_ZJH.UserPoker.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("PokerType"))
                throw $util.ProtocolError("missing required 'PokerType'", { instance: message });
            if (!message.hasOwnProperty("userpokergroup"))
                throw $util.ProtocolError("missing required 'userpokergroup'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_Poker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_Poker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_Poker} ZJH_Poker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_Poker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_Poker message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_Poker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_Poker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.PokerType))
                return "PokerType: integer expected";
            {
                var error = $root.GameMsg_ZJH.UserPoker.verify(message.userpokergroup);
                if (error)
                    return "userpokergroup." + error;
            }
            return null;
        };

        /**
         * Creates a ZJH_Poker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_Poker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_Poker} ZJH_Poker
         */
        ZJH_Poker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_Poker)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_Poker();
            if (object.PokerType != null)
                message.PokerType = object.PokerType | 0;
            if (object.userpokergroup != null) {
                if (typeof object.userpokergroup !== "object")
                    throw TypeError(".GameMsg_ZJH.ZJH_Poker.userpokergroup: object expected");
                message.userpokergroup = $root.GameMsg_ZJH.UserPoker.fromObject(object.userpokergroup);
            }
            return message;
        };

        /**
         * Creates a plain object from a ZJH_Poker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_Poker
         * @static
         * @param {GameMsg_ZJH.ZJH_Poker} message ZJH_Poker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_Poker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.PokerType = 0;
                object.userpokergroup = null;
            }
            if (message.PokerType != null && message.hasOwnProperty("PokerType"))
                object.PokerType = message.PokerType;
            if (message.userpokergroup != null && message.hasOwnProperty("userpokergroup"))
                object.userpokergroup = $root.GameMsg_ZJH.UserPoker.toObject(message.userpokergroup, options);
            return object;
        };

        /**
         * Converts this ZJH_Poker to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_Poker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_Poker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_Poker;
    })();

    GameMsg_ZJH.UserPoker = (function() {

        /**
         * Properties of a UserPoker.
         * @memberof GameMsg_ZJH
         * @interface IUserPoker
         * @property {number} UserID UserPoker UserID
         * @property {number} SeatNo UserPoker SeatNo
         * @property {Array.<GameMsg_ZJH.IPokerCard>|null} [Cards] UserPoker Cards
         */

        /**
         * Constructs a new UserPoker.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a UserPoker.
         * @implements IUserPoker
         * @constructor
         * @param {GameMsg_ZJH.IUserPoker=} [properties] Properties to set
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
         * @memberof GameMsg_ZJH.UserPoker
         * @instance
         */
        UserPoker.prototype.UserID = 0;

        /**
         * UserPoker SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_ZJH.UserPoker
         * @instance
         */
        UserPoker.prototype.SeatNo = 0;

        /**
         * UserPoker Cards.
         * @member {Array.<GameMsg_ZJH.IPokerCard>} Cards
         * @memberof GameMsg_ZJH.UserPoker
         * @instance
         */
        UserPoker.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new UserPoker instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.UserPoker
         * @static
         * @param {GameMsg_ZJH.IUserPoker=} [properties] Properties to set
         * @returns {GameMsg_ZJH.UserPoker} UserPoker instance
         */
        UserPoker.create = function create(properties) {
            return new UserPoker(properties);
        };

        /**
         * Encodes the specified UserPoker message. Does not implicitly {@link GameMsg_ZJH.UserPoker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.UserPoker
         * @static
         * @param {GameMsg_ZJH.IUserPoker} message UserPoker message or plain object to encode
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
                    $root.GameMsg_ZJH.PokerCard.encode(message.Cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserPoker message, length delimited. Does not implicitly {@link GameMsg_ZJH.UserPoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.UserPoker
         * @static
         * @param {GameMsg_ZJH.IUserPoker} message UserPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserPoker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.UserPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.UserPoker} UserPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.UserPoker();
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
                    message.Cards.push($root.GameMsg_ZJH.PokerCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserPoker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.UserPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.UserPoker} UserPoker
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
         * @memberof GameMsg_ZJH.UserPoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPoker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.GameMsg_ZJH.PokerCard.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserPoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.UserPoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.UserPoker} UserPoker
         */
        UserPoker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.UserPoker)
                return object;
            var message = new $root.GameMsg_ZJH.UserPoker();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".GameMsg_ZJH.UserPoker.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg_ZJH.UserPoker.Cards: object expected");
                    message.Cards[i] = $root.GameMsg_ZJH.PokerCard.fromObject(object.Cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserPoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.UserPoker
         * @static
         * @param {GameMsg_ZJH.UserPoker} message UserPoker
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
                    object.Cards[j] = $root.GameMsg_ZJH.PokerCard.toObject(message.Cards[j], options);
            }
            return object;
        };

        /**
         * Converts this UserPoker to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.UserPoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserPoker;
    })();

    GameMsg_ZJH.PokerCard = (function() {

        /**
         * Properties of a PokerCard.
         * @memberof GameMsg_ZJH
         * @interface IPokerCard
         * @property {number} Color PokerCard Color
         * @property {number} CardNumber PokerCard CardNumber
         */

        /**
         * Constructs a new PokerCard.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a PokerCard.
         * @implements IPokerCard
         * @constructor
         * @param {GameMsg_ZJH.IPokerCard=} [properties] Properties to set
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
         * @memberof GameMsg_ZJH.PokerCard
         * @instance
         */
        PokerCard.prototype.Color = 0;

        /**
         * PokerCard CardNumber.
         * @member {number} CardNumber
         * @memberof GameMsg_ZJH.PokerCard
         * @instance
         */
        PokerCard.prototype.CardNumber = 0;

        /**
         * Creates a new PokerCard instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.PokerCard
         * @static
         * @param {GameMsg_ZJH.IPokerCard=} [properties] Properties to set
         * @returns {GameMsg_ZJH.PokerCard} PokerCard instance
         */
        PokerCard.create = function create(properties) {
            return new PokerCard(properties);
        };

        /**
         * Encodes the specified PokerCard message. Does not implicitly {@link GameMsg_ZJH.PokerCard.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.PokerCard
         * @static
         * @param {GameMsg_ZJH.IPokerCard} message PokerCard message or plain object to encode
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
         * Encodes the specified PokerCard message, length delimited. Does not implicitly {@link GameMsg_ZJH.PokerCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.PokerCard
         * @static
         * @param {GameMsg_ZJH.IPokerCard} message PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokerCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PokerCard message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.PokerCard} PokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokerCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.PokerCard();
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
                throw $util.ProtocolError("missing required 'Color'", { instance: message });
            if (!message.hasOwnProperty("CardNumber"))
                throw $util.ProtocolError("missing required 'CardNumber'", { instance: message });
            return message;
        };

        /**
         * Decodes a PokerCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.PokerCard} PokerCard
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
         * @memberof GameMsg_ZJH.PokerCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PokerCard.verify = function verify(message) {
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
         * @memberof GameMsg_ZJH.PokerCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.PokerCard} PokerCard
         */
        PokerCard.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.PokerCard)
                return object;
            var message = new $root.GameMsg_ZJH.PokerCard();
            if (object.Color != null)
                message.Color = object.Color | 0;
            if (object.CardNumber != null)
                message.CardNumber = object.CardNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from a PokerCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.PokerCard
         * @static
         * @param {GameMsg_ZJH.PokerCard} message PokerCard
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
         * @memberof GameMsg_ZJH.PokerCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PokerCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PokerCard;
    })();

    GameMsg_ZJH.ZJH_UserInfoArr = (function() {

        /**
         * Properties of a ZJH_UserInfoArr.
         * @memberof GameMsg_ZJH
         * @interface IZJH_UserInfoArr
         * @property {number} CurrOptSeatno ZJH_UserInfoArr CurrOptSeatno
         * @property {number} OptTime ZJH_UserInfoArr OptTime
         * @property {number} OptTimeTotal ZJH_UserInfoArr OptTimeTotal
         * @property {number} ZhuangSeatNO ZJH_UserInfoArr ZhuangSeatNO
         * @property {number|Long} BetTotal ZJH_UserInfoArr BetTotal
         * @property {boolean} FollowEnd ZJH_UserInfoArr FollowEnd
         * @property {Array.<number>|null} [BetArr] ZJH_UserInfoArr BetArr
         * @property {Array.<GameMsg_ZJH.IZJH_UserInfo>|null} [UserInfo] ZJH_UserInfoArr UserInfo
         * @property {boolean} Allin ZJH_UserInfoArr Allin
         * @property {number} Currturn ZJH_UserInfoArr Currturn
         */

        /**
         * Constructs a new ZJH_UserInfoArr.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_UserInfoArr.
         * @implements IZJH_UserInfoArr
         * @constructor
         * @param {GameMsg_ZJH.IZJH_UserInfoArr=} [properties] Properties to set
         */
        function ZJH_UserInfoArr(properties) {
            this.BetArr = [];
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_UserInfoArr CurrOptSeatno.
         * @member {number} CurrOptSeatno
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @instance
         */
        ZJH_UserInfoArr.prototype.CurrOptSeatno = 0;

        /**
         * ZJH_UserInfoArr OptTime.
         * @member {number} OptTime
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @instance
         */
        ZJH_UserInfoArr.prototype.OptTime = 0;

        /**
         * ZJH_UserInfoArr OptTimeTotal.
         * @member {number} OptTimeTotal
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @instance
         */
        ZJH_UserInfoArr.prototype.OptTimeTotal = 0;

        /**
         * ZJH_UserInfoArr ZhuangSeatNO.
         * @member {number} ZhuangSeatNO
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @instance
         */
        ZJH_UserInfoArr.prototype.ZhuangSeatNO = 0;

        /**
         * ZJH_UserInfoArr BetTotal.
         * @member {number|Long} BetTotal
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @instance
         */
        ZJH_UserInfoArr.prototype.BetTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ZJH_UserInfoArr FollowEnd.
         * @member {boolean} FollowEnd
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @instance
         */
        ZJH_UserInfoArr.prototype.FollowEnd = false;

        /**
         * ZJH_UserInfoArr BetArr.
         * @member {Array.<number>} BetArr
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @instance
         */
        ZJH_UserInfoArr.prototype.BetArr = $util.emptyArray;

        /**
         * ZJH_UserInfoArr UserInfo.
         * @member {Array.<GameMsg_ZJH.IZJH_UserInfo>} UserInfo
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @instance
         */
        ZJH_UserInfoArr.prototype.UserInfo = $util.emptyArray;

        /**
         * ZJH_UserInfoArr Allin.
         * @member {boolean} Allin
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @instance
         */
        ZJH_UserInfoArr.prototype.Allin = false;

        /**
         * ZJH_UserInfoArr Currturn.
         * @member {number} Currturn
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @instance
         */
        ZJH_UserInfoArr.prototype.Currturn = 0;

        /**
         * Creates a new ZJH_UserInfoArr instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @static
         * @param {GameMsg_ZJH.IZJH_UserInfoArr=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_UserInfoArr} ZJH_UserInfoArr instance
         */
        ZJH_UserInfoArr.create = function create(properties) {
            return new ZJH_UserInfoArr(properties);
        };

        /**
         * Encodes the specified ZJH_UserInfoArr message. Does not implicitly {@link GameMsg_ZJH.ZJH_UserInfoArr.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @static
         * @param {GameMsg_ZJH.IZJH_UserInfoArr} message ZJH_UserInfoArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_UserInfoArr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.CurrOptSeatno);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.OptTime);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.OptTimeTotal);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ZhuangSeatNO);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.BetTotal);
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.FollowEnd);
            if (message.BetArr != null && message.BetArr.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.BetArr.length; ++i)
                    writer.int32(message.BetArr[i]);
                writer.ldelim();
            }
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_ZJH.ZJH_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.Allin);
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.Currturn);
            return writer;
        };

        /**
         * Encodes the specified ZJH_UserInfoArr message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_UserInfoArr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @static
         * @param {GameMsg_ZJH.IZJH_UserInfoArr} message ZJH_UserInfoArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_UserInfoArr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_UserInfoArr message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_UserInfoArr} ZJH_UserInfoArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_UserInfoArr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_UserInfoArr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CurrOptSeatno = reader.int32();
                    break;
                case 2:
                    message.OptTime = reader.int32();
                    break;
                case 3:
                    message.OptTimeTotal = reader.int32();
                    break;
                case 4:
                    message.ZhuangSeatNO = reader.int32();
                    break;
                case 5:
                    message.BetTotal = reader.int64();
                    break;
                case 6:
                    message.FollowEnd = reader.bool();
                    break;
                case 7:
                    if (!(message.BetArr && message.BetArr.length))
                        message.BetArr = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BetArr.push(reader.int32());
                    } else
                        message.BetArr.push(reader.int32());
                    break;
                case 8:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_ZJH.ZJH_UserInfo.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.Allin = reader.bool();
                    break;
                case 10:
                    message.Currturn = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("CurrOptSeatno"))
                throw $util.ProtocolError("missing required 'CurrOptSeatno'", { instance: message });
            if (!message.hasOwnProperty("OptTime"))
                throw $util.ProtocolError("missing required 'OptTime'", { instance: message });
            if (!message.hasOwnProperty("OptTimeTotal"))
                throw $util.ProtocolError("missing required 'OptTimeTotal'", { instance: message });
            if (!message.hasOwnProperty("ZhuangSeatNO"))
                throw $util.ProtocolError("missing required 'ZhuangSeatNO'", { instance: message });
            if (!message.hasOwnProperty("BetTotal"))
                throw $util.ProtocolError("missing required 'BetTotal'", { instance: message });
            if (!message.hasOwnProperty("FollowEnd"))
                throw $util.ProtocolError("missing required 'FollowEnd'", { instance: message });
            if (!message.hasOwnProperty("Allin"))
                throw $util.ProtocolError("missing required 'Allin'", { instance: message });
            if (!message.hasOwnProperty("Currturn"))
                throw $util.ProtocolError("missing required 'Currturn'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_UserInfoArr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_UserInfoArr} ZJH_UserInfoArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_UserInfoArr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_UserInfoArr message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_UserInfoArr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.CurrOptSeatno))
                return "CurrOptSeatno: integer expected";
            if (!$util.isInteger(message.OptTime))
                return "OptTime: integer expected";
            if (!$util.isInteger(message.OptTimeTotal))
                return "OptTimeTotal: integer expected";
            if (!$util.isInteger(message.ZhuangSeatNO))
                return "ZhuangSeatNO: integer expected";
            if (!$util.isInteger(message.BetTotal) && !(message.BetTotal && $util.isInteger(message.BetTotal.low) && $util.isInteger(message.BetTotal.high)))
                return "BetTotal: integer|Long expected";
            if (typeof message.FollowEnd !== "boolean")
                return "FollowEnd: boolean expected";
            if (message.BetArr != null && message.hasOwnProperty("BetArr")) {
                if (!Array.isArray(message.BetArr))
                    return "BetArr: array expected";
                for (var i = 0; i < message.BetArr.length; ++i)
                    if (!$util.isInteger(message.BetArr[i]))
                        return "BetArr: integer[] expected";
            }
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_ZJH.ZJH_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            if (typeof message.Allin !== "boolean")
                return "Allin: boolean expected";
            if (!$util.isInteger(message.Currturn))
                return "Currturn: integer expected";
            return null;
        };

        /**
         * Creates a ZJH_UserInfoArr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_UserInfoArr} ZJH_UserInfoArr
         */
        ZJH_UserInfoArr.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_UserInfoArr)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_UserInfoArr();
            if (object.CurrOptSeatno != null)
                message.CurrOptSeatno = object.CurrOptSeatno | 0;
            if (object.OptTime != null)
                message.OptTime = object.OptTime | 0;
            if (object.OptTimeTotal != null)
                message.OptTimeTotal = object.OptTimeTotal | 0;
            if (object.ZhuangSeatNO != null)
                message.ZhuangSeatNO = object.ZhuangSeatNO | 0;
            if (object.BetTotal != null)
                if ($util.Long)
                    (message.BetTotal = $util.Long.fromValue(object.BetTotal)).unsigned = false;
                else if (typeof object.BetTotal === "string")
                    message.BetTotal = parseInt(object.BetTotal, 10);
                else if (typeof object.BetTotal === "number")
                    message.BetTotal = object.BetTotal;
                else if (typeof object.BetTotal === "object")
                    message.BetTotal = new $util.LongBits(object.BetTotal.low >>> 0, object.BetTotal.high >>> 0).toNumber();
            if (object.FollowEnd != null)
                message.FollowEnd = Boolean(object.FollowEnd);
            if (object.BetArr) {
                if (!Array.isArray(object.BetArr))
                    throw TypeError(".GameMsg_ZJH.ZJH_UserInfoArr.BetArr: array expected");
                message.BetArr = [];
                for (var i = 0; i < object.BetArr.length; ++i)
                    message.BetArr[i] = object.BetArr[i] | 0;
            }
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_ZJH.ZJH_UserInfoArr.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_ZJH.ZJH_UserInfoArr.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_ZJH.ZJH_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            if (object.Allin != null)
                message.Allin = Boolean(object.Allin);
            if (object.Currturn != null)
                message.Currturn = object.Currturn | 0;
            return message;
        };

        /**
         * Creates a plain object from a ZJH_UserInfoArr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @static
         * @param {GameMsg_ZJH.ZJH_UserInfoArr} message ZJH_UserInfoArr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_UserInfoArr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.BetArr = [];
                object.UserInfo = [];
            }
            if (options.defaults) {
                object.CurrOptSeatno = 0;
                object.OptTime = 0;
                object.OptTimeTotal = 0;
                object.ZhuangSeatNO = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetTotal = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetTotal = options.longs === String ? "0" : 0;
                object.FollowEnd = false;
                object.Allin = false;
                object.Currturn = 0;
            }
            if (message.CurrOptSeatno != null && message.hasOwnProperty("CurrOptSeatno"))
                object.CurrOptSeatno = message.CurrOptSeatno;
            if (message.OptTime != null && message.hasOwnProperty("OptTime"))
                object.OptTime = message.OptTime;
            if (message.OptTimeTotal != null && message.hasOwnProperty("OptTimeTotal"))
                object.OptTimeTotal = message.OptTimeTotal;
            if (message.ZhuangSeatNO != null && message.hasOwnProperty("ZhuangSeatNO"))
                object.ZhuangSeatNO = message.ZhuangSeatNO;
            if (message.BetTotal != null && message.hasOwnProperty("BetTotal"))
                if (typeof message.BetTotal === "number")
                    object.BetTotal = options.longs === String ? String(message.BetTotal) : message.BetTotal;
                else
                    object.BetTotal = options.longs === String ? $util.Long.prototype.toString.call(message.BetTotal) : options.longs === Number ? new $util.LongBits(message.BetTotal.low >>> 0, message.BetTotal.high >>> 0).toNumber() : message.BetTotal;
            if (message.FollowEnd != null && message.hasOwnProperty("FollowEnd"))
                object.FollowEnd = message.FollowEnd;
            if (message.BetArr && message.BetArr.length) {
                object.BetArr = [];
                for (var j = 0; j < message.BetArr.length; ++j)
                    object.BetArr[j] = message.BetArr[j];
            }
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_ZJH.ZJH_UserInfo.toObject(message.UserInfo[j], options);
            }
            if (message.Allin != null && message.hasOwnProperty("Allin"))
                object.Allin = message.Allin;
            if (message.Currturn != null && message.hasOwnProperty("Currturn"))
                object.Currturn = message.Currturn;
            return object;
        };

        /**
         * Converts this ZJH_UserInfoArr to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_UserInfoArr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_UserInfoArr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_UserInfoArr;
    })();

    GameMsg_ZJH.ZJH_UserInfo = (function() {

        /**
         * Properties of a ZJH_UserInfo.
         * @memberof GameMsg_ZJH
         * @interface IZJH_UserInfo
         * @property {number} seatno ZJH_UserInfo seatno
         * @property {boolean} check ZJH_UserInfo check
         * @property {boolean} drop ZJH_UserInfo drop
         * @property {boolean} comparefailed ZJH_UserInfo comparefailed
         * @property {number|Long} BetMoney ZJH_UserInfo BetMoney
         */

        /**
         * Constructs a new ZJH_UserInfo.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_UserInfo.
         * @implements IZJH_UserInfo
         * @constructor
         * @param {GameMsg_ZJH.IZJH_UserInfo=} [properties] Properties to set
         */
        function ZJH_UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_UserInfo seatno.
         * @member {number} seatno
         * @memberof GameMsg_ZJH.ZJH_UserInfo
         * @instance
         */
        ZJH_UserInfo.prototype.seatno = 0;

        /**
         * ZJH_UserInfo check.
         * @member {boolean} check
         * @memberof GameMsg_ZJH.ZJH_UserInfo
         * @instance
         */
        ZJH_UserInfo.prototype.check = false;

        /**
         * ZJH_UserInfo drop.
         * @member {boolean} drop
         * @memberof GameMsg_ZJH.ZJH_UserInfo
         * @instance
         */
        ZJH_UserInfo.prototype.drop = false;

        /**
         * ZJH_UserInfo comparefailed.
         * @member {boolean} comparefailed
         * @memberof GameMsg_ZJH.ZJH_UserInfo
         * @instance
         */
        ZJH_UserInfo.prototype.comparefailed = false;

        /**
         * ZJH_UserInfo BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_ZJH.ZJH_UserInfo
         * @instance
         */
        ZJH_UserInfo.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ZJH_UserInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_UserInfo
         * @static
         * @param {GameMsg_ZJH.IZJH_UserInfo=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_UserInfo} ZJH_UserInfo instance
         */
        ZJH_UserInfo.create = function create(properties) {
            return new ZJH_UserInfo(properties);
        };

        /**
         * Encodes the specified ZJH_UserInfo message. Does not implicitly {@link GameMsg_ZJH.ZJH_UserInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_UserInfo
         * @static
         * @param {GameMsg_ZJH.IZJH_UserInfo} message ZJH_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatno);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.check);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.drop);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.comparefailed);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.BetMoney);
            return writer;
        };

        /**
         * Encodes the specified ZJH_UserInfo message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_UserInfo
         * @static
         * @param {GameMsg_ZJH.IZJH_UserInfo} message ZJH_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_UserInfo} ZJH_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatno = reader.int32();
                    break;
                case 2:
                    message.check = reader.bool();
                    break;
                case 3:
                    message.drop = reader.bool();
                    break;
                case 4:
                    message.comparefailed = reader.bool();
                    break;
                case 5:
                    message.BetMoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatno"))
                throw $util.ProtocolError("missing required 'seatno'", { instance: message });
            if (!message.hasOwnProperty("check"))
                throw $util.ProtocolError("missing required 'check'", { instance: message });
            if (!message.hasOwnProperty("drop"))
                throw $util.ProtocolError("missing required 'drop'", { instance: message });
            if (!message.hasOwnProperty("comparefailed"))
                throw $util.ProtocolError("missing required 'comparefailed'", { instance: message });
            if (!message.hasOwnProperty("BetMoney"))
                throw $util.ProtocolError("missing required 'BetMoney'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_UserInfo} ZJH_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_UserInfo message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatno))
                return "seatno: integer expected";
            if (typeof message.check !== "boolean")
                return "check: boolean expected";
            if (typeof message.drop !== "boolean")
                return "drop: boolean expected";
            if (typeof message.comparefailed !== "boolean")
                return "comparefailed: boolean expected";
            if (!$util.isInteger(message.BetMoney) && !(message.BetMoney && $util.isInteger(message.BetMoney.low) && $util.isInteger(message.BetMoney.high)))
                return "BetMoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a ZJH_UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_UserInfo} ZJH_UserInfo
         */
        ZJH_UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_UserInfo)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_UserInfo();
            if (object.seatno != null)
                message.seatno = object.seatno | 0;
            if (object.check != null)
                message.check = Boolean(object.check);
            if (object.drop != null)
                message.drop = Boolean(object.drop);
            if (object.comparefailed != null)
                message.comparefailed = Boolean(object.comparefailed);
            if (object.BetMoney != null)
                if ($util.Long)
                    (message.BetMoney = $util.Long.fromValue(object.BetMoney)).unsigned = false;
                else if (typeof object.BetMoney === "string")
                    message.BetMoney = parseInt(object.BetMoney, 10);
                else if (typeof object.BetMoney === "number")
                    message.BetMoney = object.BetMoney;
                else if (typeof object.BetMoney === "object")
                    message.BetMoney = new $util.LongBits(object.BetMoney.low >>> 0, object.BetMoney.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ZJH_UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_UserInfo
         * @static
         * @param {GameMsg_ZJH.ZJH_UserInfo} message ZJH_UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.seatno = 0;
                object.check = false;
                object.drop = false;
                object.comparefailed = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetMoney = options.longs === String ? "0" : 0;
            }
            if (message.seatno != null && message.hasOwnProperty("seatno"))
                object.seatno = message.seatno;
            if (message.check != null && message.hasOwnProperty("check"))
                object.check = message.check;
            if (message.drop != null && message.hasOwnProperty("drop"))
                object.drop = message.drop;
            if (message.comparefailed != null && message.hasOwnProperty("comparefailed"))
                object.comparefailed = message.comparefailed;
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (typeof message.BetMoney === "number")
                    object.BetMoney = options.longs === String ? String(message.BetMoney) : message.BetMoney;
                else
                    object.BetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.BetMoney) : options.longs === Number ? new $util.LongBits(message.BetMoney.low >>> 0, message.BetMoney.high >>> 0).toNumber() : message.BetMoney;
            return object;
        };

        /**
         * Converts this ZJH_UserInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_UserInfo;
    })();

    GameMsg_ZJH.ZJH_ReadyTime = (function() {

        /**
         * Properties of a ZJH_ReadyTime.
         * @memberof GameMsg_ZJH
         * @interface IZJH_ReadyTime
         * @property {number} ReadyTime ZJH_ReadyTime ReadyTime
         */

        /**
         * Constructs a new ZJH_ReadyTime.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_ReadyTime.
         * @implements IZJH_ReadyTime
         * @constructor
         * @param {GameMsg_ZJH.IZJH_ReadyTime=} [properties] Properties to set
         */
        function ZJH_ReadyTime(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_ReadyTime ReadyTime.
         * @member {number} ReadyTime
         * @memberof GameMsg_ZJH.ZJH_ReadyTime
         * @instance
         */
        ZJH_ReadyTime.prototype.ReadyTime = 0;

        /**
         * Creates a new ZJH_ReadyTime instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_ReadyTime
         * @static
         * @param {GameMsg_ZJH.IZJH_ReadyTime=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_ReadyTime} ZJH_ReadyTime instance
         */
        ZJH_ReadyTime.create = function create(properties) {
            return new ZJH_ReadyTime(properties);
        };

        /**
         * Encodes the specified ZJH_ReadyTime message. Does not implicitly {@link GameMsg_ZJH.ZJH_ReadyTime.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_ReadyTime
         * @static
         * @param {GameMsg_ZJH.IZJH_ReadyTime} message ZJH_ReadyTime message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_ReadyTime.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ReadyTime);
            return writer;
        };

        /**
         * Encodes the specified ZJH_ReadyTime message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_ReadyTime.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_ReadyTime
         * @static
         * @param {GameMsg_ZJH.IZJH_ReadyTime} message ZJH_ReadyTime message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_ReadyTime.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_ReadyTime message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_ReadyTime
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_ReadyTime} ZJH_ReadyTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_ReadyTime.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_ReadyTime();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ReadyTime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ReadyTime"))
                throw $util.ProtocolError("missing required 'ReadyTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_ReadyTime message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_ReadyTime
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_ReadyTime} ZJH_ReadyTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_ReadyTime.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_ReadyTime message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_ReadyTime
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_ReadyTime.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ReadyTime))
                return "ReadyTime: integer expected";
            return null;
        };

        /**
         * Creates a ZJH_ReadyTime message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_ReadyTime
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_ReadyTime} ZJH_ReadyTime
         */
        ZJH_ReadyTime.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_ReadyTime)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_ReadyTime();
            if (object.ReadyTime != null)
                message.ReadyTime = object.ReadyTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a ZJH_ReadyTime message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_ReadyTime
         * @static
         * @param {GameMsg_ZJH.ZJH_ReadyTime} message ZJH_ReadyTime
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_ReadyTime.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ReadyTime = 0;
            if (message.ReadyTime != null && message.hasOwnProperty("ReadyTime"))
                object.ReadyTime = message.ReadyTime;
            return object;
        };

        /**
         * Converts this ZJH_ReadyTime to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_ReadyTime
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_ReadyTime.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_ReadyTime;
    })();

    GameMsg_ZJH.ZJH_FollowEnd = (function() {

        /**
         * Properties of a ZJH_FollowEnd.
         * @memberof GameMsg_ZJH
         * @interface IZJH_FollowEnd
         * @property {boolean} FollowEnd ZJH_FollowEnd FollowEnd
         */

        /**
         * Constructs a new ZJH_FollowEnd.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_FollowEnd.
         * @implements IZJH_FollowEnd
         * @constructor
         * @param {GameMsg_ZJH.IZJH_FollowEnd=} [properties] Properties to set
         */
        function ZJH_FollowEnd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_FollowEnd FollowEnd.
         * @member {boolean} FollowEnd
         * @memberof GameMsg_ZJH.ZJH_FollowEnd
         * @instance
         */
        ZJH_FollowEnd.prototype.FollowEnd = false;

        /**
         * Creates a new ZJH_FollowEnd instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_FollowEnd
         * @static
         * @param {GameMsg_ZJH.IZJH_FollowEnd=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_FollowEnd} ZJH_FollowEnd instance
         */
        ZJH_FollowEnd.create = function create(properties) {
            return new ZJH_FollowEnd(properties);
        };

        /**
         * Encodes the specified ZJH_FollowEnd message. Does not implicitly {@link GameMsg_ZJH.ZJH_FollowEnd.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_FollowEnd
         * @static
         * @param {GameMsg_ZJH.IZJH_FollowEnd} message ZJH_FollowEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_FollowEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.FollowEnd);
            return writer;
        };

        /**
         * Encodes the specified ZJH_FollowEnd message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_FollowEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_FollowEnd
         * @static
         * @param {GameMsg_ZJH.IZJH_FollowEnd} message ZJH_FollowEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_FollowEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_FollowEnd message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_FollowEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_FollowEnd} ZJH_FollowEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_FollowEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_FollowEnd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FollowEnd = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FollowEnd"))
                throw $util.ProtocolError("missing required 'FollowEnd'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_FollowEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_FollowEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_FollowEnd} ZJH_FollowEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_FollowEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_FollowEnd message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_FollowEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_FollowEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.FollowEnd !== "boolean")
                return "FollowEnd: boolean expected";
            return null;
        };

        /**
         * Creates a ZJH_FollowEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_FollowEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_FollowEnd} ZJH_FollowEnd
         */
        ZJH_FollowEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_FollowEnd)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_FollowEnd();
            if (object.FollowEnd != null)
                message.FollowEnd = Boolean(object.FollowEnd);
            return message;
        };

        /**
         * Creates a plain object from a ZJH_FollowEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_FollowEnd
         * @static
         * @param {GameMsg_ZJH.ZJH_FollowEnd} message ZJH_FollowEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_FollowEnd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.FollowEnd = false;
            if (message.FollowEnd != null && message.hasOwnProperty("FollowEnd"))
                object.FollowEnd = message.FollowEnd;
            return object;
        };

        /**
         * Converts this ZJH_FollowEnd to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_FollowEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_FollowEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_FollowEnd;
    })();

    GameMsg_ZJH.ZJH_Allin = (function() {

        /**
         * Properties of a ZJH_Allin.
         * @memberof GameMsg_ZJH
         * @interface IZJH_Allin
         * @property {boolean} Allin ZJH_Allin Allin
         */

        /**
         * Constructs a new ZJH_Allin.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_Allin.
         * @implements IZJH_Allin
         * @constructor
         * @param {GameMsg_ZJH.IZJH_Allin=} [properties] Properties to set
         */
        function ZJH_Allin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_Allin Allin.
         * @member {boolean} Allin
         * @memberof GameMsg_ZJH.ZJH_Allin
         * @instance
         */
        ZJH_Allin.prototype.Allin = false;

        /**
         * Creates a new ZJH_Allin instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_Allin
         * @static
         * @param {GameMsg_ZJH.IZJH_Allin=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_Allin} ZJH_Allin instance
         */
        ZJH_Allin.create = function create(properties) {
            return new ZJH_Allin(properties);
        };

        /**
         * Encodes the specified ZJH_Allin message. Does not implicitly {@link GameMsg_ZJH.ZJH_Allin.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_Allin
         * @static
         * @param {GameMsg_ZJH.IZJH_Allin} message ZJH_Allin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_Allin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Allin);
            return writer;
        };

        /**
         * Encodes the specified ZJH_Allin message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_Allin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_Allin
         * @static
         * @param {GameMsg_ZJH.IZJH_Allin} message ZJH_Allin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_Allin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_Allin message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_Allin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_Allin} ZJH_Allin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_Allin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_Allin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Allin = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Allin"))
                throw $util.ProtocolError("missing required 'Allin'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_Allin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_Allin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_Allin} ZJH_Allin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_Allin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_Allin message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_Allin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_Allin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.Allin !== "boolean")
                return "Allin: boolean expected";
            return null;
        };

        /**
         * Creates a ZJH_Allin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_Allin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_Allin} ZJH_Allin
         */
        ZJH_Allin.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_Allin)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_Allin();
            if (object.Allin != null)
                message.Allin = Boolean(object.Allin);
            return message;
        };

        /**
         * Creates a plain object from a ZJH_Allin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_Allin
         * @static
         * @param {GameMsg_ZJH.ZJH_Allin} message ZJH_Allin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_Allin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Allin = false;
            if (message.Allin != null && message.hasOwnProperty("Allin"))
                object.Allin = message.Allin;
            return object;
        };

        /**
         * Converts this ZJH_Allin to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_Allin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_Allin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_Allin;
    })();

    GameMsg_ZJH.ZJH_Currturn = (function() {

        /**
         * Properties of a ZJH_Currturn.
         * @memberof GameMsg_ZJH
         * @interface IZJH_Currturn
         * @property {number} Currturn ZJH_Currturn Currturn
         */

        /**
         * Constructs a new ZJH_Currturn.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_Currturn.
         * @implements IZJH_Currturn
         * @constructor
         * @param {GameMsg_ZJH.IZJH_Currturn=} [properties] Properties to set
         */
        function ZJH_Currturn(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_Currturn Currturn.
         * @member {number} Currturn
         * @memberof GameMsg_ZJH.ZJH_Currturn
         * @instance
         */
        ZJH_Currturn.prototype.Currturn = 0;

        /**
         * Creates a new ZJH_Currturn instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_Currturn
         * @static
         * @param {GameMsg_ZJH.IZJH_Currturn=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_Currturn} ZJH_Currturn instance
         */
        ZJH_Currturn.create = function create(properties) {
            return new ZJH_Currturn(properties);
        };

        /**
         * Encodes the specified ZJH_Currturn message. Does not implicitly {@link GameMsg_ZJH.ZJH_Currturn.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_Currturn
         * @static
         * @param {GameMsg_ZJH.IZJH_Currturn} message ZJH_Currturn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_Currturn.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.Currturn);
            return writer;
        };

        /**
         * Encodes the specified ZJH_Currturn message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_Currturn.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_Currturn
         * @static
         * @param {GameMsg_ZJH.IZJH_Currturn} message ZJH_Currturn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_Currturn.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_Currturn message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_Currturn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_Currturn} ZJH_Currturn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_Currturn.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_Currturn();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.Currturn = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Currturn"))
                throw $util.ProtocolError("missing required 'Currturn'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_Currturn message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_Currturn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_Currturn} ZJH_Currturn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_Currturn.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_Currturn message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_Currturn
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_Currturn.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Currturn))
                return "Currturn: integer expected";
            return null;
        };

        /**
         * Creates a ZJH_Currturn message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_Currturn
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_Currturn} ZJH_Currturn
         */
        ZJH_Currturn.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_Currturn)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_Currturn();
            if (object.Currturn != null)
                message.Currturn = object.Currturn | 0;
            return message;
        };

        /**
         * Creates a plain object from a ZJH_Currturn message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_Currturn
         * @static
         * @param {GameMsg_ZJH.ZJH_Currturn} message ZJH_Currturn
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_Currturn.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Currturn = 0;
            if (message.Currturn != null && message.hasOwnProperty("Currturn"))
                object.Currturn = message.Currturn;
            return object;
        };

        /**
         * Converts this ZJH_Currturn to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_Currturn
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_Currturn.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_Currturn;
    })();

    GameMsg_ZJH.ZJH_UserDrop = (function() {

        /**
         * Properties of a ZJH_UserDrop.
         * @memberof GameMsg_ZJH
         * @interface IZJH_UserDrop
         * @property {number} UserId ZJH_UserDrop UserId
         */

        /**
         * Constructs a new ZJH_UserDrop.
         * @memberof GameMsg_ZJH
         * @classdesc Represents a ZJH_UserDrop.
         * @implements IZJH_UserDrop
         * @constructor
         * @param {GameMsg_ZJH.IZJH_UserDrop=} [properties] Properties to set
         */
        function ZJH_UserDrop(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZJH_UserDrop UserId.
         * @member {number} UserId
         * @memberof GameMsg_ZJH.ZJH_UserDrop
         * @instance
         */
        ZJH_UserDrop.prototype.UserId = 0;

        /**
         * Creates a new ZJH_UserDrop instance using the specified properties.
         * @function create
         * @memberof GameMsg_ZJH.ZJH_UserDrop
         * @static
         * @param {GameMsg_ZJH.IZJH_UserDrop=} [properties] Properties to set
         * @returns {GameMsg_ZJH.ZJH_UserDrop} ZJH_UserDrop instance
         */
        ZJH_UserDrop.create = function create(properties) {
            return new ZJH_UserDrop(properties);
        };

        /**
         * Encodes the specified ZJH_UserDrop message. Does not implicitly {@link GameMsg_ZJH.ZJH_UserDrop.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_ZJH.ZJH_UserDrop
         * @static
         * @param {GameMsg_ZJH.IZJH_UserDrop} message ZJH_UserDrop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_UserDrop.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserId);
            return writer;
        };

        /**
         * Encodes the specified ZJH_UserDrop message, length delimited. Does not implicitly {@link GameMsg_ZJH.ZJH_UserDrop.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_ZJH.ZJH_UserDrop
         * @static
         * @param {GameMsg_ZJH.IZJH_UserDrop} message ZJH_UserDrop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZJH_UserDrop.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZJH_UserDrop message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_ZJH.ZJH_UserDrop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_ZJH.ZJH_UserDrop} ZJH_UserDrop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_UserDrop.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_ZJH.ZJH_UserDrop();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserId"))
                throw $util.ProtocolError("missing required 'UserId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZJH_UserDrop message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_ZJH.ZJH_UserDrop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_ZJH.ZJH_UserDrop} ZJH_UserDrop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZJH_UserDrop.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZJH_UserDrop message.
         * @function verify
         * @memberof GameMsg_ZJH.ZJH_UserDrop
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZJH_UserDrop.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserId))
                return "UserId: integer expected";
            return null;
        };

        /**
         * Creates a ZJH_UserDrop message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_ZJH.ZJH_UserDrop
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_ZJH.ZJH_UserDrop} ZJH_UserDrop
         */
        ZJH_UserDrop.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_ZJH.ZJH_UserDrop)
                return object;
            var message = new $root.GameMsg_ZJH.ZJH_UserDrop();
            if (object.UserId != null)
                message.UserId = object.UserId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ZJH_UserDrop message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_ZJH.ZJH_UserDrop
         * @static
         * @param {GameMsg_ZJH.ZJH_UserDrop} message ZJH_UserDrop
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZJH_UserDrop.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.UserId = 0;
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                object.UserId = message.UserId;
            return object;
        };

        /**
         * Converts this ZJH_UserDrop to JSON.
         * @function toJSON
         * @memberof GameMsg_ZJH.ZJH_UserDrop
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZJH_UserDrop.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZJH_UserDrop;
    })();

    return GameMsg_ZJH;
})();

module.exports = $root;
