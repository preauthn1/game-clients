using System;
using System.Collections.Generic;
using SuperWebSocket;

using Netproto;
using Google.Protobuf;
using Lhd;

namespace UnityWebServer2
{
    partial class Program
    {
        private static void DoDataReceived_tbnn(WebSocketSession session, int mainId, int secondID, byte[] data)
        {
            //登入房間
            if (mainId == 5 && secondID == 1)
            {
                /*
                TipMessage t = new TipMessage();
                t.MsgType = 1;
                t.Message = "1111111";
                send(session, 1, 1, t);
                */
                LoginGameRoomInfo p1 = Deserialize<LoginGameRoomInfo>(data);

                LoginGameRoomRet p9 = new LoginGameRoomRet();
                p9.LoginRequestData = new LoginGameRoomInfo();
                p9.LoginRequestData.HDType = p1.HDType;
                p9.LoginRequestData.Cer = p1.Cer;
                p9.LoginRequestData.HDCode = p1.HDCode;
                p9.LoginRequestData.UserID = p1.UserID;

                p9.UserData = new UserRoomLogonData();
                p9.UserData.GameBuff = "";
                p9.UserData.LoginName = "";
                p9.UserData.SumConvert = 1;
                p9.UserData.WinCount = 3;
                p9.UserData.ServerAddr = "";
                p9.UserData.Sex = 1;
                p9.UserData.HasBindPay = true;
                p9.UserData.NickName = "台湾省";
                p9.UserData.UserID = 69620351;
                p9.UserData.TimeSeq = 20200108174319660;
                p9.UserData.LoseCount = 19;
                p9.UserData.UserType = 3;
                p9.UserData.TradeId = 2020010000013840;
                p9.UserData.AlipayAccount = "";
                p9.UserData.ExperienceCash = 100000;
                p9.UserData.CashAmount = 2997670;
                p9.UserData.FaceID = 3;
                p9.UserData.DrawCount = 1;
                p9.UserData.LastWinLose = 1;
                p9.UserData.SumCharge = 1;

                p9.RoomInfo = new RoomInfo();
                p9.RoomInfo.BaseScore = 100;
                p9.RoomInfo.GameID = 25;
                p9.RoomInfo.GameName = "多福多財";
                p9.RoomInfo.Flag = "1";

                p9.Code = 1;
                p9.Message = "null";

                send(session, 5, 2, p9);


                Lhd.UserStateChange p2 = new Lhd.UserStateChange();
                p2.User = new Lhd.GameUser();
                p2.User.UserID = p1.UserID;
                p2.User.LastWinLose = 1;
                p2.User.SeatNo = -1;
                p2.User.StateValue = 1;
                p2.User.Sex = 1;
                p2.User.DrawCount = 1;
                p2.User.Score = 302494;
                p2.User.LoseCount = 8;
                p2.User.TableNo = -1;
                p2.User.WinCount = 4;
                p2.User.FaceID = 3;
                p2.User.NickName = "台湾省";

                send(session, 10001, 6, p2);
                send(session, 10001, 4, p2);

                byte[] byteData;
                // 10001 - 20002
                //byteData = new byte[] { 0, 0, 39, 17, 0, 0, 78, 34, 8, 4 };
                //send(session, byteData);


            }
        }
    }
}
