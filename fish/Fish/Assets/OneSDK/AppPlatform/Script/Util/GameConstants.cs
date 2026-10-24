namespace VMSoft.SlotMachine
{
    /// <summary>
    /// Reel pattern: R[number of reel]_[reel that symbol will appear]
    /// </summary>
    public enum ReelPattern
    {
        R5_123, 
        R5_135, 
        R5_234,
		R5_345, 
        R5_12345, 
        R5_15, 
        R3_123,
        R5_24,
		R5_35,
		R6_16,
		R6_123456,
		R6_2345,
		R6_123
    }

    public enum Axis
    {
        X = 001,
        Y = 010,
        Z = 100,
        XY = 011,
        XZ = 101,
        YZ = 110,
        XYZ = 111
    }

    public enum PopupEvent
    {
        PreEnterTransition,
        ShowEnterPopup,
        HideEnterPopup,
        PostEnterTransition,
        ShowExitPopup,
        HideExitPopup
    }

	public class GameConstants{

		///<summary>the current slot machine game mode that was given from the server</summary>
	    public class GameMode
	    {
	        public const int NORMAL = 0;
	        public const int FREE_SPIN = 1;
	        public const int BONUS = 2;
	        public const int JACKPOT = 3;
	        //public const int RESPIN = 4;
			public const int PRE_FREE_SPIN = 4;
	    }

		public class Jackpot
		{
			public const int GRAND = 0;
			public const int MAJOR = 1;
			public const int MINOR = 2;
			public const int MINI = 3;
			public const int BONUS = 4;
		}

		public class Symbol
		{
            public const int WILD = 1;
            public const int FREESPIN = 2;
            public const int BONUS = 3;
            public const int RETRIGGER = 23;
		    public const int EXPANDING_WILD = 801301;
            public const int STICKY_WILD = 61;
            public const int SCATTER = 4;
            public const int DRAGON_WILD = 8021;

			//Slot Series 2
			public const int EXTRA_WILD = 4;
			public const int JACKPOT = 5;

			public const int MINOR_A = 101;
			public const int MINOR_K = 102;
			public const int MINOR_Q = 103;
			public const int MINOR_J = 104;
			public const int MINOR_10 = 105;

			public const int MAJOR_201 = 201;
			public const int MAJOR_202 = 202;
			public const int MAJOR_203 = 203;
			public const int MAJOR_204 = 204;
			public const int MAJOR_205 = 205;

			public const int WILD_STACK_1 = 301;
			public const int WILD_STACK_2 = 302;
			public const int WILD_STACK_3 = 303;

		}

        public class SoundEnum
        {
            //Exposed Paramters
            public const string PARAM_VOL_BGM_INSPIN = "volumeBGMInSpin";
            public const string PARAM_VOL_BGM = "volumeBGM";
            public const string PARAM_VOL_SFX = "volumeSfx";
            public const string PARAM_VOL_SPECIAL = "volumeSpecial";
			public const string PARAM_VOL_WIN = "volumeWin";
        }
    }
}



