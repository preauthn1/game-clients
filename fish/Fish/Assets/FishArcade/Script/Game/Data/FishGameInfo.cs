using System.Collections.Generic;

namespace P8Games.Fish
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
            groupInfo.Add(3, 3);
            groupInfo.Add(4, 10);
			groupInfo.Add(5, 24);
			groupInfo.Add(6, 27);
			groupInfo.Add(7, 26);
			groupInfo.Add(8, 38);
            /*groupInfo.Add(5, 3);
        groupInfo.Add(6, 10);
        groupInfo.Add(7, 1);
        groupInfo.Add(8, 1);
        groupInfo.Add(9, 1);
        groupInfo.Add(10, 1);
        groupInfo.Add(11, 1);
        groupInfo.Add(12, 1);
        groupInfo.Add(13, 1);
        groupInfo.Add(14, 1);
        groupInfo.Add(15, 1);
        groupInfo.Add(16, 1);
        groupInfo.Add(17, 1);
        groupInfo.Add(18, 1);
        groupInfo.Add(19, 1);
        groupInfo.Add(20, 1);
        groupInfo.Add(21, 1);
        groupInfo.Add(22, 1);*/
            routeOffsetRange.Add("r1", new int[2] {-1, 1});
        }
    }
}
