/**
 * `WebsocketHeartbeatJs` constructor.
 * 
 * @param {Object} opts
 * {
 *  url                  websocket链接地址
 *  pingTimeout 未收到消息多少秒之后发送ping请求，默认15000毫秒
    pongTimeout  发送ping之后，未收到消息超时时间，默认10000毫秒
    reconnectTimeout
 * }
 * @api public
 */
// https://example.invalid/zimv/websocket-heartbeat-js

var networkQueue = require("NetworkQueue");
var BClass = require("BClass")
var Common = require("Common")

function WebsocketHeartbeat({
    url, 
    pingTimeout = 3000,
    pongTimeout = 10000,
    reconnectTimeout = 2000,
    repeatLimit = null
}){
    this.opts ={
        url: url,
        pingTimeout: pingTimeout,
        pongTimeout: pongTimeout,
        reconnectTimeout: reconnectTimeout,
        repeatLimit: repeatLimit
    };
    this.ws = null;//websocket实例
    this.repeat = 0;

    //override hook function
    this.onclose = () => {};
    this.onerror = () => {};
    this.onopen = () => {};
    this.onmessage = () => {};
    this.onreconnect = () => {};

    this.createWebSocket();
}
WebsocketHeartbeat.prototype.createWebSocket = function(){
    try {
        console.log('createWebSocket...');

        this.ws = new WebSocket(this.opts.url);
        this.ws.binaryType = 'arraybuffer';
        this.initEventHandle();
    } catch (e) {
        this.reconnect();
        throw e;
    }     
};

WebsocketHeartbeat.prototype.initEventHandle = function(){
    this.ws.onclose = () => {
        this.onclose();
        this.reconnect();
    };
    this.ws.onerror = () => {
        this.onerror();
        this.reconnect();
    };
    this.ws.onopen = () => {
        this.repeat = 0;
        this.onopen();
        //心跳检测重置
        this.heartCheck();
    };
    this.ws.onmessage = (event) => {
        this.onmessage(event);
        //如果获取到消息，心跳检测重置
        //拿到任何消息都说明当前连接是正常的
        //this.heartCheck();
    };
};

WebsocketHeartbeat.prototype.reconnect = function(){
    if(this.opts.repeatLimit>0 && this.opts.repeatLimit <= this.repeat) return;//limit repeat the number
    if(this.lockReconnect || this.forbidReconnect) return;
    this.lockReconnect = true;
    this.repeat++;//必须在lockReconnect之后，避免进行无效计数
    
    // add by rayon
    console.log('%c !!!!!!!!!!!!!!!!!!!! 重新連線关闭连接 !!!!!!!!!!!!!!!!!!!!','color:#f00;')
    this.ws.close();
    
    this.onreconnect();
    
    //没连接上会一直重连，设置延迟避免请求过多
    setTimeout(() => {
        this.createWebSocket();
        this.lockReconnect = false;
    }, this.opts.reconnectTimeout);
};
WebsocketHeartbeat.prototype.send = function(msg){
    this.ws.send(msg);
};
WebsocketHeartbeat.prototype.setHeartbeat = function(beatInterval, connLoseTime){
    this.opts.pingTimeout = beatInterval * 1000;
    this.opts.pongTimeout = connLoseTime * 1000;

    //心跳检测重置
    this.heartCheck();
};
//心跳检测
WebsocketHeartbeat.prototype.heartCheck = function(){
    this.heartReset();
    this.heartStart();
};
WebsocketHeartbeat.prototype.heartStart = function(){
    if(this.forbidReconnect) return;//不再重连就不再执行心跳
    this.pingTimeoutId = setTimeout(() => {
        //这里发送一个心跳，后端收到后，返回一个心跳消息，
        //onmessage拿到返回的心跳就说明连接正常

        // 传送心跳封包
        let data = networkQueue.Encode(BClass.Common, Common.HeartBeatID, null)
        this.send(data);

        //如果超过一定时间还没重置，说明后端主动断开了
        this.pongTimeoutId = setTimeout(() => {
            //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
            console.log('%c !!!!!!!!!!!!!!!!!!!! 心跳关闭连接 !!!!!!!!!!!!!!!!!!!!','color:#f00;')
            this.ws.close();
        }, this.opts.pongTimeout);
    }, this.opts.pingTimeout);
};
WebsocketHeartbeat.prototype.heartReset = function(){
    clearTimeout(this.pingTimeoutId);
    clearTimeout(this.pongTimeoutId);
};
WebsocketHeartbeat.prototype.close = function(){
    //如果手动关闭连接，不再重连
    this.forbidReconnect = true;
    this.heartReset();
    console.log('%c !!!!!!!!!!!!!!!!!!!! 手动关闭连接 !!!!!!!!!!!!!!!!!!!!','color:#f00;')
    this.ws.close();
};

module.exports = WebsocketHeartbeat;