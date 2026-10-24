using System.Collections.Generic;

namespace VMSoft.SlotMachine
{

    static class GameServerExtension
    {
        public static string JackpotName(this OneSGameServer.GameServer gs)
        {
            return OneSGameServer.jackpotDictionary[gs];
        }
    }

    public class OneSGameServer
    {


        #region Jackpot Name

        /// <summary>
        /// When there have new jackpot been introduce, please manually add the jackpot name and ID in this class
        /// </summary>
        class JackpotName
        {
            public const string NONE = "-1";
            public const string FANTASY_RUSH = "10001";
            public const string DELUXE_REELZ = "10002";
            public const string ROYALE_SPINZ = "10003";
            public const string MIGHTY_CASH = "10004";
            public const string LUXURY_MILLS = "10005";
            public const string MIRACLE_POT = "10006";
            public const string TREASURES_AND_GEMS = "10007";
            public const string SHANGHAI = "10008";
            public const string TOKYO = "10009";
            public const string MACAU = "10010";
            public const string BEIJING = "10011";
            public const string HONGKONG = "10012";
            public const string GUANGZHOU = "10013";
            public const string OSAKA = "10014";
			public const string KYOTO = "10015";
        }

        #endregion




        ///<summary> Game Servers </summary>
        public enum GameServer
        {
            Banana,
            Coconut,
            Dragon,
            Egghead,
            Frozen,
            Godzilla,
            Huat,
            Intrepid,
            Jaunty,
            Kiwi,
            Lemon,
            Macho,
            Nami,
            Ocean,
            P015,
            P016,
            P017,
            P018,
            P019,
            P020,
            P021,
            P022,
            P023,
            P024,
            P025,
            P026,
            P027,
            P028,
            P029,
            P030,
            P031,
            P032,
            P033,
            P034,
            P035,
            P036,
            P037,
            P038,
            P039,
            P040,
            P041,
            P042,
            P043,
            P044,
            P045,
			P046,
			P047,
			P048,
			P049,
			P050,
			P051,
			P052,
			P053,
        };



        /// <summary>
        /// The jackpot dictionary.
        /// Remark: Need To change here in order to make jackpot have to show different server jackpot
        /// 
        /// IMPORTANT: the value has to sync with the Server returned XML response, *Jackpot name*
        /// check with the server guy to obtain the next GameServer Jackpot name. usually it's GS<X> .e.g GS1.
        /// </summary>
        public static Dictionary<GameServer, string> jackpotDictionary = new Dictionary<GameServer, string>() {
            { GameServer.Banana    ,JackpotName.FANTASY_RUSH }, //GS1
            { GameServer.Coconut   ,JackpotName.DELUXE_REELZ }, //GS3
            { GameServer.Dragon    ,JackpotName.ROYALE_SPINZ }, //GS4
            { GameServer.Egghead   ,JackpotName.MIGHTY_CASH }, //GS5
            { GameServer.Frozen    ,JackpotName.LUXURY_MILLS }, //GS6
            { GameServer.Godzilla  ,JackpotName.MIRACLE_POT }, //GS8
            { GameServer.Huat      ,JackpotName.MIRACLE_POT }, //GS9
            { GameServer.Intrepid  ,JackpotName.TREASURES_AND_GEMS }, //GS10
            { GameServer.Jaunty    ,JackpotName.SHANGHAI }, //GS12
            { GameServer.Kiwi      ,JackpotName.TOKYO }, //GS13
            { GameServer.Lemon     ,JackpotName.SHANGHAI }, //GS14
            { GameServer.Macho     ,JackpotName.TOKYO }, //GS15
            { GameServer.Ocean     ,JackpotName.TOKYO }, //GS16
            { GameServer.Nami      ,JackpotName.SHANGHAI }, //GS17
            { GameServer.P015      ,JackpotName.TOKYO }, //GS18
            { GameServer.P016      ,JackpotName.SHANGHAI }, //GS19
            { GameServer.P017      ,JackpotName.TOKYO }, //GS20
            { GameServer.P018      ,JackpotName.MACAU }, //GS21
            { GameServer.P019      ,JackpotName.TOKYO }, //GS22
            { GameServer.P020      ,JackpotName.MACAU }, //GS23
            { GameServer.P021      ,JackpotName.TOKYO },//GS24
            { GameServer.P022      ,JackpotName.TOKYO }, //GS25
            { GameServer.P023      ,JackpotName.LUXURY_MILLS }, //GS26
            { GameServer.P024      ,JackpotName.BEIJING }, //GS27
            { GameServer.P025      ,JackpotName.BEIJING }, //GS28
            { GameServer.P026      ,JackpotName.NONE }, //GS29
            { GameServer.P027      ,JackpotName.BEIJING }, //GS30
            { GameServer.P028      ,JackpotName.BEIJING }, //GS31
            { GameServer.P029      ,JackpotName.NONE }, //GS32
            { GameServer.P030      ,JackpotName.LUXURY_MILLS }, //GS33
            { GameServer.P032      ,JackpotName.MACAU }, //GS34
            { GameServer.P033      ,JackpotName.LUXURY_MILLS }, //GS35
            { GameServer.P034      ,JackpotName.BEIJING }, //GS36
            { GameServer.P035      ,JackpotName.LUXURY_MILLS }, //GS35
            { GameServer.P036      ,JackpotName.BEIJING }, //GS35
            { GameServer.P037      ,JackpotName.BEIJING }, //GS35
            { GameServer.P038      ,JackpotName.HONGKONG }, //
            { GameServer.P039      ,JackpotName.GUANGZHOU }, //
            { GameServer.P040      ,JackpotName.GUANGZHOU }, //
            { GameServer.P041      ,JackpotName.HONGKONG }, //
            { GameServer.P042      ,JackpotName.OSAKA }, //
            { GameServer.P043      ,JackpotName.OSAKA }, //
            { GameServer.P044      ,JackpotName.HONGKONG }, //
            { GameServer.P045      ,JackpotName.HONGKONG }, //
			{ GameServer.P046      ,JackpotName.HONGKONG }, //
			{ GameServer.P047      ,JackpotName.HONGKONG }, //
			{ GameServer.P048      ,JackpotName.HONGKONG }, //
			{ GameServer.P049      ,JackpotName.KYOTO }, //
			{ GameServer.P050      ,JackpotName.HONGKONG }, //
			{ GameServer.P051      ,JackpotName.HONGKONG }, //
			{ GameServer.P052      ,JackpotName.HONGKONG }, //
			{ GameServer.P053      ,JackpotName.KYOTO }, //
        };

    }
}
