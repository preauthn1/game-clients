using System;
using System.Collections.Generic;
using SuperWebSocket;

using Netproto;
using Google.Protobuf;
using Bjl;

namespace UnityWebServer2
{
    partial class Program
    {
        private static void DoDataReceived_bjl(WebSocketSession session, int mainId, int secondID, byte[] data)
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
                p9.RoomInfo.GameID = 13;
                p9.RoomInfo.GameName = "百家樂";
                p9.RoomInfo.Flag = "1";

                p9.Code = 1;
                p9.Message = "null";

                send(session, 5, 2, p9);


                Bjl.UserStateChange p2 = new Bjl.UserStateChange();
                p2.User = new Bjl.GameUser();
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

                SendEnterRoom(session);
                System.Threading.Thread.Sleep(1000);

                if (thread1 != null)
                    thread1.Suspend();

                thread1 = new System.Threading.Thread(GameRun);
                thread1.Start();
            }
        }

        private static void GameRun()
        {
            GameRun(gamesession);
        }

        private static void GameRun(WebSocketSession session)
        {
            SendGameStart(session);
            System.Threading.Thread.Sleep(1000);

            SendStateBet(session);
            System.Threading.Thread.Sleep(1000);

            for (int i = 0; i < 3; ++i)
            {
                SendStateCastBet(session, i);
                System.Threading.Thread.Sleep(1000);
            }

            SendStateResult(session);
            System.Threading.Thread.Sleep(30000);

            SendStateShowTime(session);
            System.Threading.Thread.Sleep(5000);

            GameRun(session);
        }

        /// <summary> 進入房間初始拿到的所有資料 </summary>
        private static void SendEnterRoom(WebSocketSession session)
        {
            //10001 - 10001 BJLSettingID
            byte[] byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 17, 8, 100, 8, 244, 3, 8, 232, 7, 8, 136, 39, 8, 144, 78, 8, 208, 134, 3, 8, 160, 141, 6, 16, 1, 24, 160, 141, 6, 32, 160, 194, 30, 40, 8, 50, 26, 10, 6, 8, 160, 141, 6, 16, 100, 18, 6, 8, 160, 141, 6, 16, 100, 26, 8, 8, 255, 255, 255, 255, 7, 16, 100, 56, 50 };
            send(session, byteData);

            //10001 - 10020 BJLRoundID
            byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 36, 8, 1, 16, 1, 24, 1, 32, 3 };
            send(session, byteData);
        }

        private static void SendGameStart(WebSocketSession session)
        {

            //10001 - 7 GameStartID
            byte[] byteData = new byte[] { 0, 0, 39, 17, 0, 0, 0, 7 };
            send(session, byteData);

            //10001 - 6
            byteData = new byte[] { 0, 0, 39, 17, 0, 0, 0, 6, 10, 42, 8, 232, 235, 163, 7, 18, 12, 230, 157, 165, 232, 135, 170, 231, 129, 171, 230, 152, 159, 24, 1, 32, 13, 40, 192, 141, 183, 1, 48, 0, 56, 0, 64, 0, 72, 4, 80, 0, 88, 11, 96, 0 };
            send(session, byteData);

            //10001 - 10016 BJLResultCardListID
            byteData = new byte[] { 0,0,39,17,0,0,39,32,10,34,10,4,8,2,16,6,10,4,8,3,16,12,18,4,8,1,16,7,18,4,8,3,16,3,18,4,8,0,16,12,24,1,32,28,10,40,10,4,8,2,16,1,10,4,8,3,16,3,10,4,8,1,16,5,18,4,8,3,16,13,18,4,8,3,16,3,18,4,8,1,16,2,24,1,32,29,10,40,10,4,8,1,16,3,10,4,8,0,16,9,10,4,8,2,16,8,18,4,8,3,16,3,18,4,8,3,16,2,18,4,8,0,16,6,24,2,32,30,10,40,10,4,8,3,16,9,10,4,8,2,16,3,10,4,8,3,16,2,18,4,8,3,16,7,18,4,8,3,16,6,18,4,8,3,16,10,24,1,32,1,10,40,10,4,8,3,16,3,10,4,8,1,16,10,10,4,8,3,16,13,18,4,8,1,16,3,18,4,8,3,16,10,18,4,8,2,16,7,24,1,32,2,10,40,10,4,8,1,16,10,10,4,8,1,16,11,10,4,8,1,16,4,18,4,8,0,16,9,18,4,8,2,16,4,18,4,8,0,16,8,24,1,32,3,10,40,10,4,8,2,16,2,10,4,8,3,16,8,10,4,8,3,16,12,18,4,8,0,16,11,18,4,8,3,16,5,18,4,8,0,16,2,24,2,32,4,10,40,10,4,8,3,16,12,10,4,8,3,16,3,10,4,8,2,16,6,18,4,8,0,16,4,18,4,8,3,16,12,18,4,8,2,16,1,24,1,32,5,10,40,10,4,8,2,16,11,10,4,8,0,16,4,10,4,8,2,16,6,18,4,8,2,16,10,18,4,8,0,16,12,18,4,8,0,16,3,24,2,32,6,10,40,10,4,8,3,16,9,10,4,8,0,16,2,10,4,8,1,16,12,18,4,8,3,16,4,18,4,8,2,16,11,18,4,8,0,16,8,24,2,32,7,10,40,10,4,8,2,16,11,10,4,8,0,16,10,10,4,8,0,16,4,18,4,8,0,16,1,18,4,8,2,16,13,18,4,8,1,16,5,24,2,32,8,10,40,10,4,8,3,16,1,10,4,8,0,16,11,10,4,8,1,16,9,18,4,8,1,16,9,18,4,8,3,16,2,18,4,8,3,16,11,24,2,32,9,10,40,10,4,8,1,16,13,10,4,8,1,16,11,10,4,8,2,16,5,18,4,8,0,16,10,18,4,8,1,16,13,18,4,8,0,16,3,24,1,32,10,10,40,10,4,8,1,16,2,10,4,8,0,16,10,10,4,8,2,16,1,18,4,8,1,16,2,18,4,8,3,16,13,18,4,8,3,16,4,24,2,32,11,10,40,10,4,8,0,16,8,10,4,8,3,16,3,10,4,8,2,16,12,18,4,8,0,16,5,18,4,8,0,16,9,18,4,8,3,16,6,24,1,32,12,10,40,10,4,8,0,16,9,10,4,8,3,16,4,10,4,8,3,16,10,18,4,8,2,16,9,18,4,8,2,16,5,18,4,8,0,16,1,24,2,32,13,10,40,10,4,8,0,16,3,10,4,8,0,16,13,10,4,8,3,16,7,18,4,8,2,16,2,18,4,8,3,16,8,18,4,8,3,16,5,24,2,32,14,10,34,10,4,8,2,16,12,10,4,8,3,16,2,10,4,8,2,16,4,18,4,8,2,16,11,18,4,8,0,16,7,24,2,32,15,10,40,10,4,8,0,16,12,10,4,8,3,16,11,10,4,8,2,16,3,18,4,8,2,16,12,18,4,8,3,16,11,18,4,8,2,16,2,24,1,32,16,10,34,10,4,8,3,16,7,10,4,8,2,16,5,10,4,8,2,16,8,18,4,8,1,16,7,18,4,8,0,16,11,24,2,32,17,10,34,10,4,8,3,16,13,10,4,8,0,16,6,18,4,8,0,16,10,18,4,8,1,16,12,18,4,8,1,16,13,24,1,32,18,10,40,10,4,8,3,16,2,10,4,8,0,16,11,10,4,8,2,16,13,18,4,8,0,16,2,18,4,8,1,16,8,18,4,8,1,16,1,24,1,32,19,10,40,10,4,8,3,16,6,10,4,8,3,16,7,10,4,8,1,16,2,18,4,8,1,16,1,18,4,8,0,16,13,18,4,8,2,16,7,24,2,32,20,10,40,10,4,8,2,16,10,10,4,8,3,16,12,10,4,8,0,16,6,18,4,8,1,16,4,18,4,8,3,16,6,18,4,8,3,16,9,24,2,32,21,10,40,10,4,8,1,16,10,10,4,8,1,16,13,10,4,8,3,16,3,18,4,8,1,16,10,18,4,8,3,16,4,18,4,8,2,16,2,24,2,32,22,10,40,10,4,8,2,16,7,10,4,8,2,16,5,10,4,8,2,16,9,18,4,8,2,16,1,18,4,8,2,16,13,18,4,8,0,16,5,24,2,32,23,10,40,10,4,8,2,16,13,10,4,8,1,16,11,10,4,8,2,16,9,18,4,8,1,16,4,18,4,8,1,16,7,18,4,8,0,16,9,24,1,32,24,10,40,10,4,8,2,16,4,10,4,8,1,16,10,10,4,8,2,16,6,18,4,8,1,16,1,18,4,8,2,16,4,18,4,8,0,16,6,24,2,32,25,10,40,10,4,8,1,16,7,10,4,8,3,16,5,10,4,8,0,16,2,18,4,8,2,16,10,18,4,8,3,16,5,18,4,8,1,16,8,24,1,32,26,10,40,10,4,8,1,16,9,10,4,8,3,16,1,10,4,8,1,16,13,18,4,8,1,16,4,18,4,8,0,16,7,18,4,8,3,16,10,24,2,32,27};
            send(session, byteData);
			
            //10001 - 10014 BJLZhuangInfoID
            byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 30, 8, 0, 16, 0 };
            send(session, byteData);

            //10001 - 10018 BJLRichestListID
            byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 34, 10, 14, 8, 1, 16, 232, 235, 163, 7, 24, 13, 32, 192, 141, 183, 1, 10, 13, 8, 2, 16, 220, 211, 252, 28, 24, 15, 32, 174, 174, 62, 10, 13, 8, 3, 16, 179, 155, 239, 11, 24, 11, 32, 190, 193, 59, 10, 13, 8, 4, 16, 248, 189, 198, 27, 24, 3, 32, 192, 204, 57, 10, 13, 8, 5, 16, 142, 182, 135, 22, 24, 15, 32, 240, 164, 52, 10, 13, 8, 6, 16, 207, 134, 165, 24, 24, 6, 32, 134, 146, 51, 10, 13, 8, 7, 16, 209, 218, 146, 4, 24, 7, 32, 162, 242, 50 };
            send(session, byteData);

            //10001 - 10019 BJLLuckyStarListID
            byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 35, 8, 132, 131, 219, 12, 16, 4 };
            send(session, byteData);
        }

        private static void SendStateBet(WebSocketSession session)
        {
            //10001 - 10002 BJLStateID
            byte[] byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 18, 8, 0, 16, 4 };
            send(session, byteData);
        }

        private static void SendStateCastBet(WebSocketSession session, int timer)
        {
            //10001 - 10004
            if (timer == 0)
            {
                byte[] byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 20, 8, 170, 131, 229, 16, 18, 7, 8, 1, 16, 192, 87, 24, 0, 18, 8, 8, 2, 16, 240, 131, 6, 24, 0, 18, 7, 8, 3, 16, 180, 41, 24, 1, 18, 6, 8, 4, 16, 0, 24, 0, 18, 6, 8, 5, 16, 0, 24, 0, 18, 7, 8, 6, 16, 204, 33, 24, 0, 18, 7, 8, 7, 16, 164, 13, 24, 0, 18, 6, 8, 8, 16, 0, 24, 0, 18, 6, 8, 9, 16, 0, 24, 0, 18, 6, 8, 10, 16, 0, 24, 0 };
                send(session, byteData);
            }
            else if (timer == 1)
            {
                //10001 - 10004
                byte[] byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 20, 8, 176, 189, 160, 1, 18, 7, 8, 1, 16, 192, 87, 24, 0, 18, 8, 8, 2, 16, 240, 131, 6, 24, 0, 18, 7, 8, 3, 16, 180, 41, 24, 1, 18, 6, 8, 4, 16, 0, 24, 0, 18, 6, 8, 5, 16, 0, 24, 0, 18, 7, 8, 6, 16, 192, 37, 24, 0, 18, 7, 8, 7, 16, 164, 13, 24, 0, 18, 6, 8, 8, 16, 0, 24, 0, 18, 6, 8, 9, 16, 0, 24, 0, 18, 6, 8, 10, 16, 0, 24, 0 };
                send(session, byteData);
            }
            else if (timer == 2)
            {
                //10001 - 10004
                byte[] byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 20, 8, 236, 139, 215, 23, 18, 7, 8, 1, 16, 192, 87, 24, 0, 18, 8, 8, 2, 16, 240, 131, 6, 24, 0, 18, 7, 8, 3, 16, 132, 57, 24, 1, 18, 6, 8, 4, 16, 0, 24, 0, 18, 6, 8, 5, 16, 0, 24, 0, 18, 7, 8, 6, 16, 156, 49, 24, 0, 18, 7, 8, 7, 16, 164, 13, 24, 0, 18, 6, 8, 8, 16, 0, 24, 0, 18, 6, 8, 9, 16, 0, 24, 0, 18, 6, 8, 10, 16, 0, 24, 0 };
                send(session, byteData);
            }
        }
        private static void SendStateResult(WebSocketSession session)
        {
            //10001 - 10005 BJLGameResultPokerID
            byte[] byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 21, 10, 4, 8, 0, 16, 5, 10, 4, 8, 3, 16, 11, 10, 4, 8, 1, 16, 2, 18, 4, 8, 1, 16, 3, 18, 4, 8, 0, 16, 12, 18, 4, 8, 0, 16, 6, 24, 2, 32, 15 };
            send(session, byteData);

            //10001 - 10020 BJLRoundID
            byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 36, 8, 4, 16, 11, 24, 0, 32, 15 };
            send(session, byteData);
        }
        private static void SendStateShowTime(WebSocketSession session)
        {
            //10001 - 10007 BJLGameResultWinID
            byte[] byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 23, 8, 0, 16, 0, 26, 14, 10, 8, 54, 55, 54, 49, 54, 49, 49, 57, 16, 221, 217, 5, 26, 14, 10, 8, 53, 55, 55, 55, 55, 57, 49, 50, 16, 230, 252, 4, 26, 13, 10, 8, 56, 56, 50, 55, 56, 56, 53, 56, 16, 246, 124, 34, 7, 8, 220, 211, 252, 28, 16, 0, 34, 7, 8, 179, 155, 239, 11, 16, 0, 34, 9, 8, 248, 189, 198, 27, 16, 230, 252, 4, 34, 7, 8, 142, 182, 135, 22, 16, 0, 34, 7, 8, 207, 134, 165, 24, 16, 0, 34, 16, 8, 209, 218, 146, 4, 16, 180, 197, 255, 255, 255, 255, 255, 255, 255, 1, 34, 16, 8, 132, 131, 219, 12, 16, 232, 216, 254, 255, 255, 255, 255, 255, 255, 1 };
            send(session, byteData);

            //10001 - 8 GameEndID
            byteData = new byte[] { 0, 0, 39, 17, 0, 0, 0, 8 };
            send(session, byteData);

            //10001 - 10014
            byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 30, 8, 0, 16, 0 };
            send(session, byteData);

            //10001 - 10018
            byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 34, 10, 14, 8, 1, 16, 232, 235, 163, 7, 24, 13, 32, 192, 141, 183, 1, 10, 13, 8, 2, 16, 228, 231, 154, 9, 24, 10, 32, 230, 160, 59, 10, 13, 8, 3, 16, 170, 219, 190, 2, 24, 14, 32, 227, 168, 57, 10, 13, 8, 4, 16, 198, 147, 233, 32, 24, 7, 32, 134, 185, 56, 10, 13, 8, 5, 16, 178, 144, 186, 13, 24, 1, 32, 210, 175, 53, 10, 13, 8, 6, 16, 143, 151, 179, 38, 24, 11, 32, 222, 248, 51, 10, 13, 8, 7, 16, 166, 132, 190, 13, 24, 16, 32, 248, 186, 49 };
            send(session, byteData);

            //10001 - 10019
            byteData = new byte[] { 0, 0, 39, 17, 0, 0, 39, 35, 8, 176, 150, 143, 15, 16, 12 };
            send(session, byteData);
        }
        private static void SendStateWait(WebSocketSession session)
        {

        }
    }
}
