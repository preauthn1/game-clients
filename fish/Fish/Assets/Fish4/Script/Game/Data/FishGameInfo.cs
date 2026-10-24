using System.Collections.Generic;

namespace P8Games.Fish4
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

            groupInfo.Add(1, 1);
            groupInfo.Add(2, 5);
            groupInfo.Add(3, 4);
            groupInfo.Add(4, 4);
			groupInfo.Add(5, 252);
			groupInfo.Add(6, 134);
			groupInfo.Add(7, 281);
			groupInfo.Add(8, 168);
			groupInfo.Add(9, 6);
			groupInfo.Add(10, 4);
			groupInfo.Add(11, 4);
			groupInfo.Add(12, 6);
			groupInfo.Add(13, 11);
			groupInfo.Add(14, 5);
            routeOffsetRange.Add("r1", new int[2] {-1, 1});
        }
    }
}
