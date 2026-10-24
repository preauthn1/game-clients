namespace P8Games.MicroFish
{
    public class FishDeathInfo
    {

        public int playerId { private set; get; }
        public int fishId { private set; get; }
        public double winAmount { private set; get; }

        public FishDeathInfo(int _playerId, int _fishId, double _winAmount)
        {
            playerId = _playerId;
            fishId = _fishId;
            winAmount = _winAmount;
        }
    }
}
