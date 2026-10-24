using UnityEngine;
using System.Collections;
using UnityEngine.UI;

namespace P8Games.Fish4
{
    public class FrameView : MonoBehaviour
    {

//        private FishGameController gvc;
        private Game game;
        private bool gameStart = false;

        private double _curTime;

        public double curTime
        {
            get { return _curTime; }
        }

        [SerializeField] public Text timeText = null;

        private int displayCurrentTime;

        public FrameView(FishGameController gvc)
        {
//            this.gvc = gvc;
        }

        public void Init(Game tempGame)
        {
            game = tempGame;
            _curTime = game.curGameTime;
            timeText.text = ((int) this._curTime).ToString();
        }

        public void SetCurTime(double deltaTime)
        {
            if (gameStart)
            {
                this._curTime += deltaTime;

                displayCurrentTime = (int) (game.maxGameTime - this._curTime) + 1;

                timeText.text = ((int) displayCurrentTime/60) + ":" + (displayCurrentTime%60).ToString("00");

                if (_curTime >= game.maxGameTime)
                {
                    gameStart = false;
                }
            }
        }

        public void StartGame()
        {
            gameStart = true;
        }

        public void EndGame()
        {
            gameStart = false;
        }
    }
}
