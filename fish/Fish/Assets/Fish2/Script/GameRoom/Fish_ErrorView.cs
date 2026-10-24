using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace P8Games.MicroFish
{
    public class Fish_ErrorView : MonoBehaviour
    {
        [SerializeField] public GameObject exitButton;

        [SerializeField] public GameObject errorMessage;

        void Awake()
        {
            exitButton.GetComponent<Button>().onClick.AddListener(Close);
        }

        public void Show(string message = null)
        {
            gameObject.SetActive(true);
			exitButton.SetActive (true);
            if(message != null)
            {
                errorMessage.GetComponent<Text>().text = message;
            }
        }

		public void ShowWithNoButton(string message = null)
		{
			gameObject.SetActive(true);
			exitButton.SetActive (false);
			if(message != null)
			{
				errorMessage.GetComponent<Text>().text = message;
			}
		}

        public void Close()
        {
            GameImpl gameImpl = FindObjectOfType<GameImpl>();
            gameImpl.RequestReloadScene();
        }
    }
}
