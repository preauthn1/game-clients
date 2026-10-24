using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace P8Games.Fish
{
    public class Fish_PaytableView : MonoBehaviour
    {
        [SerializeField] public GameObject[] content;
        [SerializeField] public GameObject[] nextButton;
        [SerializeField] public GameObject[] exitButton;

        void Awake()
        {
            foreach (GameObject next in nextButton)
            {
                next.GetComponent<Button>().onClick.AddListener(NextContent);
            }

            foreach (GameObject exit in exitButton)
            {
                exit.GetComponent<Button>().onClick.AddListener(HidePaytable);
            }

        }

        public void ShowPaytable()
        {
            gameObject.SetActive(true);
            foreach (GameObject obj in content)
            {
                obj.SetActive(false);
            }
            page = 0;
            content[page].SetActive(true);
        }

        public void HidePaytable()
        {
            gameObject.SetActive(false);
        }

        private int page = 0;
        public void NextContent()
        {
            page += 1;
            if (page > 1)
                page = 0;

            foreach (GameObject obj in content)
            {
                obj.SetActive(false);
            }

            content[page].SetActive(true);
        }
    }
}
