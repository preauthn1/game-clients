namespace P8Games.Fish4
{
    public class RoundUpdate
    {

        public int roundNumber { private set; get; }
        public int roundPhase { private set; get; }

        public RoundUpdate(int _roundNumber, int _roundPhase)
        {
            roundNumber = _roundNumber;
            roundPhase = _roundPhase;
        }
    }
}