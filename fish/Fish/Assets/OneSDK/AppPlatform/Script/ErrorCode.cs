using System.Collections;
using System.Collections.Generic;
using UnityEngine;


namespace OneSDK.Spec{

    public enum ErrorType{
        Resolvable = 0, //let system resolves it
        Low = 1,  // acknowlege tell the user to do something
        Medium = 2, //quit game, back to lobby
        High =3,  //quit lobby, back to login
        Fatal = 4 //quit app
    }

    /// <summary>
    /// Error code mapping here.
    /// </summary>
    public class ErrorCode{
        public static ErrorType GetSeverity(int code){
            switch(code){
                //For Mapping: Low
                case ErrorCodeAlliance.ERR_CLIENT_INSF_COIN:
                case ErrorCodeAlliance.ERR_SERVER_INSF_COIN:
                    return ErrorType.Low;

                //For Mapping: Medium
                case ErrorCodeAlliance.ERR_GAMELOCK:
                case ErrorCodeAlliance.ERR_DISCONNECT_BYE:
                case ErrorCodeMiddleware.ERR_INVALID_TOKEN:
                    [REDACTED] ErrorType.Medium;

                ////For Mapping: High
                //case ErrorCodeAlliance.ERR_DISCONNECT_BYE:
                //return ErrorType.High;

                ////For Mapping: Fatal
                //case ErrorCodeAlliance.ERR_DISCONNECT_BYE:
                //return ErrorType.Fatal;

                ////For Mapping: Resolvable
				case ErrorCodeApp.ERR_UNABLE_LOAD_GAME:		
                	return ErrorType.Resolvable;

                //For Default: Unknown
                default:
                    return ErrorType.Medium;//prompt user to exit game
            }
        }
    }

    /// Error Code Classification starts with 9xx
    /// 90XX & 91XX - reserved for Rich Client, spec / design. 
    /// 92XX - for alliance project related. 
    public class ErrorCodeAlliance {
        
        public const int ERR_GAMELOCK = 9200;  //player locked to a game, put gameId e.g."<810001> in message" . level: resolvable
        public const int ERR_TICKET_INVALID = 9201;  //required to retrieve a new game ticket, level: resolvable
        public const int ERR_CLIENT_INSF_COIN = 9202; //all for insufficient coin detected at client, level:low
        public const int ERR_SERVER_INSF_COIN = 9203; //all for insufficient coin detected at server, level:low
        public const int ERR_DISCONNECT_BYE = 9204; //player disconnected from the game, kicked out, level:medium

        public const int ERR_OTHER = 9299; //other error, display the message from the server. 
    }

    public class ErrorCodeMiddleware{
        public const int ERR_INVALID_TOKEN = [REDACTED]; //invalid token. should return player to the lobby.
    }

	public class ErrorCodeApp{
		//based on the T9 Keyboard , A = 2. A900 = 2900;
		public const int ERR_UNABLE_LOAD_GAME = 2900;
	}
}
