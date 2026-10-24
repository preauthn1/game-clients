using System.Collections.Generic;

namespace P8Games.MicroFish
{
    public static class FishGameInfo
    {

        // Use this for initialization
        public static Dictionary<int, int> groupInfo { private set; get; }
        public static Dictionary<string, int[]> routeOffsetRange { private set; get; }

        public static void Init()
        {

            groupInfo = new Dictionary<int, int>();
            routeOffsetRange = new Dictionary<string, int[]>();

            //groupInfo.Add(0, 1);
			groupInfo.Add(1, 1);
			groupInfo.Add(2, 4);
			groupInfo.Add(3, 4);
			groupInfo.Add (4, 4);
			groupInfo.Add (5, 10);
			groupInfo.Add (6, 2);
			groupInfo.Add (21, 68);
			groupInfo.Add (22, 118);
            routeOffsetRange.Add("r1", new int[2] {-1, 1});
        }
    }
}
