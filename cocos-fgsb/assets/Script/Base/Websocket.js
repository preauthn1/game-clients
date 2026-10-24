var networkQueue = require("NetworkQueue");
var WebsocketHeartbeat = require("WebsocketHeartbeat");
var Global = require("Global");
var BClass = require("BClass");
var Common = require("Common");
var UIManager = require("UIManager");

function Log(data, data1) {
    /*
    if (data1 != undefined)
        console.log(data, data1)
    else
        console.log(data)
    */
}

function DoMsgHook(ws, arr) {
    let size = Global.Bytes2int(arr.slice(1, 4)) + 4;
    if (arr.length - size < 0){
        console.log('%c !!!!!!!!!!!!!!!!!!!! 封包大小錯誤 !!!!!!!!!!!!!!!!!!!!','color:#f00;');
        return -1;
    }

    let mainId = Global.Bytes2int(arr.slice(5, 8));
    let subId = Global.Bytes2int(arr.slice(9, 12));
    if (mainId == BClass.Common && subId == Common.HeartBeatReturnID){
        ws.heartCheck()
    }

    //Log(mainId + "-" + subId + " " + size)        
    //Log("size ............." + arr.length + " " + size + " " + (arr.length - size))
    //Log("拆解前", arr.toString())
    let arr1 = arr.slice(0, size);
    //Log("猜解後", arr1.toString())
    networkQueue.DoMsgHook(arr1);
    return size;
}

function Websocket(name, url, connect, close)
{
    if (networkQueue.IsShowLog() == true)
        console.log('connect url:' + url);

    console.log('begin connect...:');

    this.name = name;

    this.ws = new WebsocketHeartbeat({
        url: url,
    });

    networkQueue.setWebsocket(name, this);

    // 連線成功
    this.ws.onopen = function ()
    {
        console.log('connecting...' + name);

        UIManager.HideMessageFull();

        if (connect)
            connect();
    };

    // 重新連線
    this.ws.onreconnect = function ()
    {
        console.log('%c !!!!!!!!!!!!!!!!!!!! Websocket onreconnect !!!!!!!!!!!!!!!!!!!!','color:#f00;');
        UIManager.ShowMessageFull("正在尝试重新连接")
    };
    
    // 連線關閉
    this.ws.onclose = function ()
    {
        console.log('%c !!!!!!!!!!!!!!!!!!!! Websocket onclose !!!!!!!!!!!!!!!!!!!!','color:#f00;');

        if (close)
            close();
    };
    
    // 連線錯誤
    this.ws.onerror = function ()
    {
        console.log('%c !!!!!!!!!!!!!!!!!!!! Websocket onerror !!!!!!!!!!!!!!!!!!!!','color:#f00;')
    };

    // 接收到封包
    this.ws.onmessage = function (e)
    {
        let arr = new Uint8Array(e.data);
        let size = DoMsgHook(this, arr);
        if (size < 0){
            this.reconnect();
            return
        }

        // 可能好幾個封包被合併成一個
        while (arr.length > size){
            Log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 拆解 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
            arr = arr.slice(size, arr.length);
            size = DoMsgHook(this, arr);
            if (size < 0){
                this.reconnect();
                return
            }
            Log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        }
    };
}

// 重新連線
Websocket.prototype.reconnect = function(data)
{
    this.ws.reconnect();
};

// 關閉連線
Websocket.prototype.close = function(data)
{
    networkQueue.removeWebsocket(this.name);
    this.ws.close();
};

// 傳送資料格式封包
Websocket.prototype.sendData = function(data)
{
    this.ws.send(data);
};

// 心跳时间间隔 beatInterval
// 心跳超时时间 connLoseTimeSpan    
Websocket.prototype.setHeartbeat = function(beatInterval, connLoseTime)
{
    this.ws.setHeartbeat(beatInterval, connLoseTime);
};

module.exports = Websocket;