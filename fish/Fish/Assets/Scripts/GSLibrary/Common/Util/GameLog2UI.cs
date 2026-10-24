using System;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace GSLibrary.Common.Util
{
    /// <summary>
    /// This utilize a Canvas UI to do the display
    /// </summary>
    public class GameLog2UI : MonoBehaviour
    {
        [Header("Control")]
        public Button btnTrigger;

        [Header("Display Part")]
        public GameObject targetPanel;
        public GameObject contentArea;
        public Text targetCloneText;

        [SerializeField] public bool isShow;

        private static GameLog2UI instance;

        public void Awake()
        {
            isShow = targetPanel.activeSelf;
            btnTrigger.onClick.AddListener(ShowLog);
            instance = this;

        }

        public void ShowLog()
        {
            isShow = !isShow;

            //Fire the control
            targetPanel.SetActive(isShow);

        }

        public void Flush()
        {

        }

        public static GameLog2UI Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = FindObjectOfType<GameLog2UI>();
                    if(instance == null)//object doesn't even exists in the scene..
                    {
                        
                    }
                }
                    
                return instance;
            }
        }

        public void Drag(){
            //Debug.Log("the usual drag..");
            btnTrigger.transform.position = Input.mousePosition;
        }

        #region IDragHandler implementation
        public void OnDrag(PointerEventData eventData)
        {
            Debug.Log("unity ondrag..");
            transform.position = Input.mousePosition;
        }
        #endregion
    }
}

