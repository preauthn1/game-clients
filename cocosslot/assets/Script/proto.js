import { netproto } from "./Msg" //这里引入文件,msg为package的包名

function int2Bytes(one)
{
    var re = [];
    re[0] = (one >>> 24);//取最高8位放到0下标
    re[1] = (one >>> 16);//取次高8为放到1下标
    re[2] = (one >>> 8); //取次低8位放到2下标
    re[3] = (one); //取最低8位放到3下标
    return re;
}

function Bytes2int(b)
{
    var a = [];
    a.length = 4;
    var i = a.length - 1, j = b.length - 1;
    for (; i >= 0; i--, j--)
    {//从b的尾部(即int值的低位)开始copy数据
        if (j >= 0)
            a[i] = b[j];
        else
            a[i] = 0;//如果b.length不足4,则将高位补0
    }
    var v0 = (a[0] & 0xff) << 24;//&0xff将byte值无差异转成int,避免Java自动类型提升后,会保留高位的符号位
    var v1 = (a[1] & 0xff) << 16;
    var v2 = (a[2] & 0xff) << 8;
    var v3 = (a[3] & 0xff);
    return v0 + v1 + v2 + v3;
}

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
        //包的总长度
        var all_length = 12 + this.data.byteLength;
        //返回的数组
        var myArray = new ArrayBuffer(all_length);
        //以byte形式的数组返回
        var resData = new Uint8Array(myArray);
        //转换成服务器uint64的包头类型
        var all_length_byte = int2Bytes(all_length)
        //添加包头
        for (let i = 0; i < all_length_byte.length; i++)
        {
            resData[i] = all_length_byte[i];

        }

        //主命令
        var mainId_byte = int2Bytes(this.mainId);
        for (let i = 0; i < mainId_byte.length; i++)
        {
            resData[i + 4] = mainId_byte[i];
        }

        //子命令
        var subId_byte = int2Bytes(this.subId);
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

class MsgHook
{
}

var msgHookList = [];

var proto = {
    InitProto: function ()
    {
        proto.AddProto(1, 5, netproto.HeartBeatConfig);
        proto.AddProto(2, 8, netproto.AllGameServerInfo);
        proto.AddProto(2, 2, netproto.UserLoginRet);
    },

    AddProto: function (mainId, subId, proto)
    {
        protoMap.set(mainId + "_" + subId, proto);
    },

    RegMsgHook: function (groupName, mainId, subId, callback)
    {
        var msgHook = new MsgHook();
        msgHook.groupName = groupName;
        msgHook.mainId = mainId;
        msgHook.subId = subId;
        msgHook.callback = callback;
        msgHookList.push(msgHook);
    },

    RemoveMsgHook: function (groupName, mainId, subId, callback)
    {
        console.log("RemoveMsgHook " + groupName + " " + mainId + " " + subId);
        for (var i = msgHookList.length - 1; i >= 0; i--)
        {
            var data1 = msgHookList[i];
            if (data1.groupName == groupName &&
                data1.mainId == mainId &&
                data1.subId == subId &&
                data1.callback == callback)
            {
                msgHookList.splice(i, 1);
                return;
            }

        }
    },

    RemoveMsgHookByGroup: function (groupName)
    {
        console.log("RemoveMsgHookByGroup " + groupName);
        for (var i = msgHookList.length - 1; i >= 0; i--)
        {
            var data1 = msgHookList[i];
            if (data1.groupName == groupName)
            {
                msgHookList.splice(i, 1);
            }
        }
    },

    DoMsgHook: function (mainId, subId, data)
    {
        for (var key in msgHookList)
        {
            var data1 = msgHookList[key];
            if (data1.mainId == mainId && data1.subId == subId)
            {
                data1.callback(data);
            }
        }
    },

    GetMethod: function (mainId, subId)
    {
        let decodeMethod = protoMap.get(mainId + "_" + subId);
        if (decodeMethod != null)
        {
            return decodeMethod;
        }
        else
        {
            console.log("decodeMethod not find mainId " + mainId + " " + "subId " + subId)
        }
    },

    Decode: function (data)
    {
        let decodeData = null;
        let arr = new Uint8Array(data);
        let mainId = Bytes2int(arr.slice(5, 8));
        let subId = Bytes2int(arr.slice(9, 12));

        if (arr.byteLength > 12)
        {
            let decodeMethod = this.GetMethod(mainId, subId);
            if (decodeMethod != null)
                decodeData = decodeMethod.decode(arr.slice(12, arr.byteLength));
        }

        return (new Packet({
            mainId: mainId,
            subId: subId,
            data: decodeData
        }));
    },

    Encode: function (mainId, subId, data)
    {
        let bytesdata = null;
        let decodeMethod = this.GetMethod(mainId, subId);
        if (decodeMethod != null)
        {
            bytesdata = decodeMethod.encode(data).finish();
        }

        var pck = new Packet({
            mainId: mainId,
            subId: subId,
            data: bytesdata
        });

        return pck.encode();
    }
};

module.exports = proto;