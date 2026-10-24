var proto = require("./proto");
var WebsocketHeartbeatJs = require("./websocket-heartbeat.js");

var ws;
var connectCB;
var isReceivePause = false;

var pauseData = [];

var websocket = {
    connect: function (url, callback)
    {
        connectCB = callback;

        ws = new WebsocketHeartbeatJs({
            url: url
        });

        ws.onopen = this.onopen;
        ws.onmessage = this.onmessage;
        ws.onreconnect = this.onreconnect;
        ws.onclose = this.onclose;
        ws.onerror = this.onerror;
    },

    onopen: function ()
    {
        console.log('connect success');

        if (connectCB)
            connectCB();
    },

    onreconnect: function ()
    {
        console.log('reconnecting...');
    },

    onclose: function ()
    {
        console.log('onclose...');
    },

    onerror: function ()
    {
        console.log('onerror...');
    },

    // 接收到封包
    onmessage: function (e)
    {
        var data = proto.Decode(e.data);
        console.log("<<<<<<<<<< onmessage... mainId:" + data.mainId + " subId:" + data.subId, data.data);
        if (isReceivePause == false)
        {
            proto.DoMsgHook(data.mainId, data.subId, data.data);
        }
        else
        {
            pauseData.push(data);
        }
    },

    // 傳送資料格式封包
    sendData: function (mainId, subId, data)
    {
        var encodeData = proto.Encode(mainId, subId, data)
        console.log('>>>>>>>>>> sendData... ' + mainId + "-" + subId + " data size:" + encodeData.byteLength, data);
        ws.send(encodeData);
    },

    // 傳送字串格式封包
    sendString: function (data)
    {
        console.log('>>>>>>>>>> sendString... ' + data);
        ws.send(data);
    },

    // 暂停处理消息
    Pause: function ()
    {
        isReceivePause = true;
    },

    // 恢复处理消息
    Resume: function ()
    {
        for (var i = 0; i < pauseData.length; i++)
        {
            var data = pauseData[i];
            proto.DoMsgHook(data.mainId, data.subId, data.data);
        }

        isReceivePause = false;
    }
};

module.exports = websocket;
