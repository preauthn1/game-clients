using System;
using System.Collections.Generic;
using SuperWebSocket;

using Netproto;
using Google.Protobuf;

/*
    GameIDs["1"] = "ddz" -- 斗地主
    GameIDs["2"] = "qznn"-- 抢庄牛牛
    GameIDs["3"] = "zjh"-- 诈金花
    GameIDs["4"] = "dzpk"-- 德州扑克
    GameIDs["5"] = "wzp"-- 梭哈
    GameIDs["6"] = "qzesyd"-- 21点
    GameIDs["7"] = "tbnn"-- 经典牛牛
    GameIDs["8"] = "sangong"-- 三公
    GameIDs["9"] = "sgj"-- 水果机
    GameIDs["10"] = "sss"-- 十三水
    GameIDs["11"] = "lhd"-- 龙虎斗
    GameIDs["12"] = "ttz"-- 推筒子
    GameIDs["13"] = "bjl"-- 百家乐
    GameIDs["14"] = "by"-- 捕鱼
    GameIDs["15"] = "scmj"-- 四川麻将
    GameIDs["16"] = "srnn"-- 双人牛牛
    GameIDs["17"] = "ermj"-- 兩人麻将
    GameIDs["18"] = "fkeb"-- 疯狂二八
    GameIDs["19"] = "brnn"-- 百人牛牛
    GameIDs["20"] = "hhdz"-- 紅黑大戰
    GameIDs["21"] = "hhnn"-- 紅黑牛牛
    GameIDs["22"] = "codyqzesyd"-- 21
    GameIDs["23"] = "sgbjl" -- 性感百家樂
    GameIDs["24"] = "bynew"-- 新捕鱼
    GameIDs["25"] = "dfdc"-- 多福多财
    GameIDs["26"] = "tgw"-- 糖果屋
    GameIDs["27"] = "ald"-- 阿拉丁
    GameIDs["28"] = "jlbpk"-- 加勒比扑克(預留)
    GameIDs["29"] = "zcjb" -- 招财进宝
    GameIDs["1000"] = "slot" -- 老虎机
    GameIDs["1001"] = "wlzb" -- 五龙争霸
    GameIDs["1002"] = "xgpd" -- 星光派对
    GameIDs["1003"] = "xmbx" -- 熊猫报喜
    GameIDs["1004"] = "jjbx" -- 金吉报喜
    GameIDs["1005"] = "dhzw" -- 东海之王
    GameIDs["1006"] = "wlzbJP" -- 五龙争霸_彩金版
    GameIDs["1007"] = "csdJP" -- 财神到_彩金版
    GameIDs["1008"] = "wlhc" -- 五龙皇朝
    GameIDs["2001"] = "jlbpk" -- 加勒比扑克
    GameIDs["2003"] = "dczz" -- 赌场战争
    GameIDs["2004"] = "hdc" -- 海盗船
    GameIDs["2005"] = "dchjk" --赌场黑杰克
    GameIDs["2006"] = "hbsl" -- 红包扫雷
    GameIDs["40"] = "jdesyd" -- 经典21点
    GameIDs["1009"] = "wljr" -- 五龙争霸_百万金轮
    GameIDs["1010"] = "jgyf" -- 击鼓迎福
    GameIDs["2007"] = "fgsb" -- 富贵三宝
*/

namespace UnityWebServer2
{
    partial class Program
    {
        private static Dictionary<int, Action<WebSocketSession, int, int, byte[]>> GameDoDataReceived = new Dictionary<int, Action<WebSocketSession, int, int, byte[]>>();
        private static int GameId = 13;

        private static WebSocketServer wsServer;
        private static WebSocketSession gamesession;
        private static System.Threading.Thread thread1 = null;

        static void Main(string[] args)
        {
            GameDoDataReceived.Add(7, DoDataReceived_tbnn);
            GameDoDataReceived.Add(11, DoDataReceived_lhd);
            GameDoDataReceived.Add(13, DoDataReceived_bjl);
            GameDoDataReceived.Add(19, DoDataReceived_brnn);
            GameDoDataReceived.Add(25, DoDataReceived_dfdc);
            GameDoDataReceived.Add(2006, DoDataReceived_hbsl);

            // WebSocket
            wsServer = new WebSocketServer();
            int port = 13101;
            wsServer.Setup(port);
            wsServer.NewSessionConnected += WsServer_NewSessionConnected;
            wsServer.NewDataReceived += WsServer_NewDataReceived;
            wsServer.SessionClosed += WsServer_SessionClosed;
            wsServer.Start();
            Console.WriteLine("server is running on port " + port + ". Press ENTER to exit");
            Console.ReadKey();
            wsServer.Stop();
        }

        private static void WsServer_SessionClosed(WebSocketSession session, SuperSocket.SocketBase.CloseReason value)
        {
            Console.WriteLine("WsServer_SessionClosed");
        }

        public static byte[] Serialize<T>(T obj) where T : IMessage
        {
            byte[] data = obj.ToByteArray();
            return data;
        }

        public static T Deserialize<T>(byte[] data) where T : class, IMessage, new()
        {
            T obj = new T();
            IMessage message = obj.Descriptor.Parser.ParseFrom(data);
            return message as T;
        }

        private static void WsServer_NewDataReceived(WebSocketSession session, byte[] value)
        {
            gamesession = session;

            ByteBuffer buffer = new ByteBuffer(value);
            int size = buffer.ReadInt();
            int mainId = buffer.ReadInt();
            int secondID = buffer.ReadInt();
            byte[] data = buffer.ReadBytes(value.Length - 8);

            if ((mainId == 1 && secondID == 2))
            {

            }
            else
            {
                Console.WriteLine("WsServer_NewDataReceived mainId:" + mainId + " secondID:" + secondID + " size:" + size);
            }

            // 心跳設定
            if (mainId == 1 && secondID == 4)
            {
                // 回傳
                HeartBeatConfig p2 = new HeartBeatConfig();
                p2.BeatInterval = 3;
                p2.ConnLoseTimeSpan = 10;
                send(session, 1, 5, p2);
                return;
            }
            //心跳
            if (mainId == 1 && secondID == 2)
            {
                // 回傳
                send(session, 1, 3);
                return;
            }

            if (GameDoDataReceived.ContainsKey(GameId) == true)
            {
                GameDoDataReceived[GameId](session, mainId, secondID, data);
            }

        }

        private static void send(WebSocketSession session, int mainId, int secondID)
        {
            ByteBuffer buffer1 = new ByteBuffer();
            buffer1.WriteInt(8 + 0);
            buffer1.WriteInt(mainId);
            buffer1.WriteInt(secondID);

            ArraySegment<byte> arr = new ArraySegment<byte>(buffer1.ToBytes());
            session.Send(arr);
        }

        private static void send(WebSocketSession session, byte[] byteData)
        {
            ByteBuffer buffer1 = new ByteBuffer();
            buffer1.WriteInt(byteData.Length);
            buffer1.WriteBytes(byteData);

            ArraySegment<byte> arr = new ArraySegment<byte>(buffer1.ToBytes());
            session.Send(arr);
        }

        private static void send<T>(WebSocketSession session, int mainId, int secondID, T data) where T : IMessage
        {
            byte[] byteData = Serialize(data);

            ByteBuffer buffer1 = new ByteBuffer();
            buffer1.WriteInt(8 + byteData.Length);
            buffer1.WriteInt(mainId);
            buffer1.WriteInt(secondID);
            buffer1.WriteBytes(byteData);

            ArraySegment<byte> arr = new ArraySegment<byte>(buffer1.ToBytes());
            session.Send(arr);
        }

        private static void WsServer_NewSessionConnected(WebSocketSession session)
        {
            Console.WriteLine("WsServer_NewSessionConnected");
        }
    }
}
