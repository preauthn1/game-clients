using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace P8Games.Fish4
{
    public class Fish_ErrorView : MonoBehaviour
    {
        [SerializeField] public GameObject exitButton;

        [SerializeField] public GameObject errorMessage;
		[SerializeField] public GameObject disconnectMessage;
		[SerializeField] public GameObject disconnectButton;
		[SerializeField] public GameObject closeButton;


        void Awake()
        {
            exitButton.GetComponent<Button>().onClick.AddListener(Close);
        }
		public void CloseMessage(){
			disconnectMessage.SetActive (false);
		}
		public void ShowDisconnect(){
			disconnectMessage.SetActive (true);
			disconnectButton.GetComponent<Button>().onClick.AddListener(Close);
			closeButton.GetComponent<Button>().onClick.AddListener(CloseToLobby);
		}

		public void ShowBackLobbyMessage(string message = null)
		{
			exitButton.GetComponent<Button> ().onClick.RemoveAllListeners ();
			exitButton.GetComponent<Button> ().onClick.AddListener(CloseToLobby);
			gameObject.SetActive(true);

			if(message != null)
			{
				errorMessage.GetComponent<Text>().text = message;
			}
		}

        public void Show(string message = null)
        {
            gameObject.SetActive(true);

            if(message != null)
            {
                errorMessage.GetComponent<Text>().text = message;
            }
        }
		public void CloseToLobby(){
			GameImpl gameImpl = FindObjectOfType<GameImpl>();
			gameImpl.BackToOneS ();
		}
        public void Close()
        {
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
            gameImpl.RequestReloadScene();
        }
    }
}
