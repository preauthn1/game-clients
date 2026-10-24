using System;
namespace GSLibrary.Common.Connection
{
    public enum GSConnectionErrorType
    {
        /// <summary>
        /// None, no issue, -1
        /// </summary>
        /// 
            NONE = -1,
         USER_INITIATE_DISCONNECT = 0,
    	 ERROR_LOGIN_LINK = 1,
    	 ERROR_LOGIN_VERI = 2,
    	 ERROR_CONNECT_GAME_SERVER = 3,

    	 ERROR_GS_DUP = 4,
    	 ERROR_GS_VERI = 5,

         DIS_SERVER = 6,
		ERROR_REQUIRE_NICKNAME = 7,
		ERROR_CREATE_NICKNAME = 8,

        ERROR_SUSPENDED = -4,
        ERROR_NO_PERMISSION = -5,
        ERROR_SPECIAL_FIRST_LOGIN = -6,

        SESSION_EXPIRED = 9,
        FORCE_OUT = 10,
        TIME_OUT = 11,
        GAME_LOCK = 12

    }
}

