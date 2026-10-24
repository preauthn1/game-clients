using System;
using UnityEngine;

namespace CoreLibrary.Game.Util
{
    /// <summary>
    /// Game logger, Debug, Info, Warning, Error
    /// </summary>
	public class GameLogger
    {

        public enum Level{
            Off = 0,
            Debug = 1,
            Info = 2,
            Warning = 3,
            Error = 99,
        }

        public GameLoggerSetting setting;



        public GameLogger(){
            this.setting.level = Level.Debug;
        }


        public class GameLoggerSetting{
            public Level level;
        }
    }
}

