using SimpleJSON;

namespace P8Games.MicroFish
{
    public class ArcadeLobbyRoomData
	{
		public int roomId { private set; get;}
		public int seatedPlayer { private set; get; }
		public int maxPlayer { private set; get; }
		public int gameDelay { private set; get; }
		public int multiplier { private set; get; }
		public double minBuyIn { private set; get; }
		public double minStay { private set; get; }
		public int categoryId { private set; get; }

		public ArcadeLobbyRoomData(JSONNode dataNode)
		{
			roomId = dataNode[0].AsInt;
			seatedPlayer = dataNode[1].AsInt;
			maxPlayer = dataNode[2].AsInt;
			gameDelay = dataNode[3].AsInt;
			multiplier = dataNode[4].AsInt;
			minBuyIn = dataNode[5].AsDouble;
			minStay = dataNode[6].AsDouble;
			categoryId = dataNode[7].AsInt;
		}
	}
}