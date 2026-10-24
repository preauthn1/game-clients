var BClass = require("BClass");
var Common = require("Common");
var Global = require("Global")

class Packet
{
    constructor(options)
    {
        this.mainId = options.mainId || 0;
        this.subId = options.subId || 0;
        this.data = options.data || new Uint8Array(0);
    }

    encode()
    {
        //包头长度
        var head_length = 4;
        //内容的长度
        var data_length = 8 + this.data.byteLength;
        //返回的数组
        var myArray = new ArrayBuffer(head_length + data_length);
        //以byte形式的数组返回
        var resData = new Uint8Array(myArray);
        //转换成服务器uint64的包头类型
        var all_length_byte = Global.int2Bytes(data_length)
        //添加包头
        for (let i = 0; i < all_length_byte.length; i++)
        {
            resData[i] = all_length_byte[i];

        }

        //主命令
        var mainId_byte = Global.int2Bytes(this.mainId);
        for (let i = 0; i < mainId_byte.length; i++)
        {
            resData[i + 4] = mainId_byte[i];
        }

        //子命令
        var subId_byte = Global.int2Bytes(this.subId);
        for (let i = 0; i < subId_byte.length; i++)
        {
            resData[i + 8] = subId_byte[i];
        }

        //内容
        for (let i = 0; i < this.data.length; i++)
        {
            resData[i + 12] = this.data[i];
        }

        return myArray;
    }
}

// 解封包方法
var protoMap = new Map();

var isInit = false;

class MsgHook
{
}

var NetworkQueue = {

    // 暫停時的封包
    Init:function()
    {
        if (isInit == true)
            return;

        isInit = true;

        console.log("NetworkQueue Init");

        // 封包回傳
        this.msgHookList = [];
        
        // 暫停時的封包
        this.pauseData = [];
    },

    ShowLog(isShow){
        this.isShowLog = isShow
    },

    IsShowLog(){
        return this.isShowLog
    },

    Log:function(data, data1)
    {
        if (this.IsShowLog() == false)
            return

        if (data1 != null)
            console.log(data, data1);
        else
            console.log(data);

        //console.trace()
    },

    AddMsgModelName:function (mainId, subId, proto)
    {
        if (mainId == null)
        {
            this.Log("AddMsgModelName mainId is null ");
            return
        }

        if (subId == null)
        {
            this.Log("AddMsgModelName subId is null mainId:" + mainId);
            return
        }

        if (proto == null)
        {
            this.Log("AddMsgModelName proto is null mainId:" + mainId + " subId:" + subId);
            return
        }          

        protoMap.set(mainId + "_" + subId, proto);
    },

    // 收到封包後移除註冊
    RegMsgHookOnce:function (mainId, subId, callback, groupName)
    {
        let msgHook = this.RegMsgHook(mainId, subId, callback, groupName);
        msgHook.isOnce = true;
    },

    // 永久註冊
    RegMsgHook:function (mainId, subId, callback, groupName)
    {
        let msgHook = new MsgHook();
        msgHook.groupName = groupName;
        msgHook.mainId = mainId;
        msgHook.subId = subId;
        msgHook.callback = callback;
        msgHook.isOnce = false;
        this.msgHookList.push(msgHook);

        return msgHook;
    },

    RemoveMsgHook:function (data)
    {
        for (let i = 0; i < this.msgHookList.length; i++)
        {
            let data1 = this.msgHookList[i];
            if (data1.groupName == data.groupName && 
                data1.mainId == data.mainId &&
                data1.subId == data.subId &&
                data1.callback == data.callback)
            {
                this.msgHookList.splice(i, 1);
                return;
            }
        }
    },

    RemoveMsgHookByGroup:function (groupName)
    {
        if (groupName == null)
            return

        for (let i = this.msgHookList.length - 1; i >= 0; i--)
        {
            let data1 = this.msgHookList[i];
            if (data1.groupName == groupName)
            {
                this.msgHookList.splice(i, 1);
            }
        }
    },

    // 移除所有游戏消息拦截
    RemoveGameMsgHook:function()
    {
        this.Log("RemoveGameMsgHook");

        let gameHookList = [];
    
        for (let i = this.msgHookList.length - 1; i >= 0; i--)
        {
            let v = this.msgHookList[i];
            if (v.mainId == BClass.Game) 
            {
                gameHookList.push(v);
            }
        }
    
        this.RemoveMsgHookList(gameHookList);
    },

    // 移除一组处理函数
    RemoveMsgHookList:function(removelist)
    {
        for (let i = 0; i < removelist.length; i++)
        {
            let v = removelist[i];
            this.RemoveMsgHook(v)
        }
    },

    DoMsgHook:function (byteData)
    {
        let data = this.Decode(byteData);

        if (data.mainId == 0 || data.subId == 0){
            return
        }

        // 略过心跳封包
        if (data.mainId == BClass.Common && data.subId == Common.HeartBeatReturnID)
            return

        this.Log("<<<<<<<<<< onmessage... mainId:" + data.mainId + " subId:" + data.subId, data.data);
        
        if (this.isReceivePause == true)
        {
            this.pauseData.push(byteData);
            return
        }

        for (let i = this.msgHookList.length - 1; i >= 0; i--)
        {
            let data1 = this.msgHookList[i];
            if (data1.mainId == data.mainId && data1.subId == data.subId)
            {
                data1.callback(data.data);
                
                if (data1.isOnce)
                    this.msgHookList.splice(i, 1);
            }
        }
    },

    GetMethod:function (mainId, subId)
    {
        let decodeMethod = protoMap.get(mainId + "_" + subId);
        if (decodeMethod != undefined)
        {
            return decodeMethod;
        }
        else
        {
            //this.Log("decodeMethod not find mainId " + mainId + " " + "subId " + subId)
        }
    },

    Decode:function (arr)
    {
        let decodeData = null;
        //let arr = new Uint8Array(data);
        //let size = Global.Bytes2int(arr.slice(1, 4));
        let mainId = Global.Bytes2int(arr.slice(5, 8));
        let subId = Global.Bytes2int(arr.slice(9, 12));

        if (arr.byteLength > 12)
        {
            let decodeMethod = this.GetMethod(mainId, subId);
            if (decodeMethod != null){
                decodeData = decodeMethod.decode(arr.slice(12, arr.length));
                //decodeData = decodeMethod.decode(arr.slice(12, size + 4));
            }
        }

        return (new Packet({
            mainId:mainId,
            subId:subId,
            data:decodeData
        }));
    },

    Encode:function (mainId, subId, data)
    {
        let bytesdata = null;
        let decodeMethod = this.GetMethod(mainId, subId);
        if (decodeMethod != null)
        {
            bytesdata = decodeMethod.encode(data).finish();
        }

        var pck = new Packet({
            mainId:mainId,
            subId:subId,
            data:bytesdata
        });

        return pck.encode();
    },

    // 暂停处理消息
    Pause:function()
    {
        this.Log("***************** Pause");
        this.isReceivePause = true;
    },

    // 恢复处理消息
    Resume:function()
    {
        this.Log("***************** Resume", this.pauseData.length);

        this.isReceivePause = false;

        for (let i = 0; i < this.pauseData.length; i++)
        {
            let data = this.pauseData[i];
            this.DoMsgHook(data);
        }
        this.pauseData = []
    },

    setWebsocket:function(type, ws)
    {
        this.Log("setWebsocket " + type)

        if (type == "Hall")
        {
            this.ws_hall = ws;
        }
        else
        {
            this.ws_game = ws;
        }
    },

    removeWebsocket:function(type)
    {
        this.Log("removeWebsocket " + type)

        if (type == "Hall")
        {
            this.ws_hall = null;
        }
        else
        {
            this.ws_game = null;
        }
    },    

    // 傳送資料格式封包
    SendMsg:function(mainId, subId, data)
    {
        if (mainId == BClass.Hall)
        {
            this.SendHallMsg(mainId, subId, data)
        }
        else //if (mainId == BClass.Game)
        {
            this.SendGameMsg(mainId, subId, data)
        }
        //else
        //{

        //}
    },

    // 向大廳服務器發送消息
    SendHallMsg:function(mainId, subId, data)
    {
        let encodeData = this.Encode(mainId, subId, data);
        this.Log('>>>>>>>>>> SendMsg Hall ... ' + mainId + "-" + subId, data);

        if (this.ws_hall != null)
            this.ws_hall.sendData(encodeData);
        else
            this.Log("ws_hall is null, not send data"); 
    },
    
    // 向遊戲服務器發送消息
    SendGameMsg:function(mainId, subId, data)
    {
        let encodeData = this.Encode(mainId, subId, data);
        this.Log('>>>>>>>>>> SendMsg Game ... ' + mainId + "-" + subId, data);

        if (this.ws_game != null)
            this.ws_game.sendData(encodeData);
        else
            this.Log("ws_game is null, not send data");
    },    
};

module.exports = NetworkQueue;