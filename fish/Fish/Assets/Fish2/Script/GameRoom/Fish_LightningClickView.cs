using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;

namespace P8Games.MicroFish
{
    public class Fish_LightningClickView : MonoBehaviour
    {
        [SerializeField] public GameObject closeBtn;
        [SerializeField] public FishType[] fishBtn;

        private Fish_GameAreaBehavior gameArea;
        private PoolView pv;

		public Sprite[] swSprite;
		public GameObject defaultSprite;
        void Awake()
        {
            gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
            pv = FindObjectOfType<PoolView>();
            closeBtn.GetComponent<Button>().onClick.AddListener(Hide);

            for (int i = 0; i < fishBtn.Length; i++)
            {
                int value = fishBtn[i].type;
                fishBtn[i].btn.onClick.AddListener(() => SelectedValue(value));
            }
        }

        public void Show()
        {
            gameObject.SetActive(true);
//			GetFishType ();
//			InvokeRepeating ("GetFishType", 1f, 1f);
        }

        void SelectedValue(int value)
		{
			FishSfxController sfxController = FindObjectOfType<FishSfxController>();
			if (sfxController != null) {
				sfxController.PlayButton ();
			}

            pv.UpdateLightningLock(value);
            gameObject.SetActive(false);
        }

        void Hide()
        {
            gameObject.SetActive(false);
			CancelInvoke ("GetFishType");
        }

        void Update()
        {
            //GetFishType();
        }

        public void GetFishType()
        {
            Dictionary<int, int> fishTypeDic = gameArea.GetFishType;
			bool isSpecial = false;
			bool isSw = false;
			int type = 0;
			foreach (int key in fishTypeDic.Keys)
			foreach(FishBehavior fish in gameArea.GetFishBehavior.Values)
			{
				if (fish.FishType > 200 && fish.FishType < 300) {
					isSw = true;
					type = fish.FishType;
				}
					if (fish.fish.specialType == 7) {
					isSpecial = true;
				}

				if (isSpecial && isSw)
					break;
			}
            foreach (FishType value in fishBtn)
            {
				if (value.type == 100) {
					if (fishTypeDic.ContainsValue (101) || fishTypeDic.ContainsValue (102) || fishTypeDic.ContainsValue (103) || fishTypeDic.ContainsValue (104) || fishTypeDic.ContainsValue (105)) {
						value.btn.GetComponent<Image> ().color = new Color32 (255, 255, 255, 255);
					} else {
						value.btn.GetComponent<Image> ().color = new Color32 (72, 72, 72, 255);
					}
				} else if (value.type == 300) {
					if(isSpecial)
						value.btn.GetComponent<Image> ().color = new Color32 (255, 255, 255, 255);
					else
						value.btn.GetComponent<Image> ().color = new Color32 (72, 72, 72, 255);
				} else if (value.type == 200) {
					if (isSw) {
						value.btn.GetComponent<Image> ().color = new Color32 (255, 255, 255, 255);
						fishBtn [18].btn.onClick.RemoveAllListeners ();
						fishBtn[18].btn.onClick.AddListener(() => SelectedValue(type));
					}
					else
						value.btn.GetComponent<Image> ().color = new Color32 (72, 72, 72, 255);
				}
                else
                {
                    if (fishTypeDic.ContainsValue(value.type))
                    {
                        value.btn.GetComponent<Image>().color = new Color32(255, 255, 255, 255);
                    }
                    else
                    {
                        value.btn.GetComponent<Image>().color = new Color32(72, 72, 72, 255);
                    }
                }
            }  
        }

        [System.Serializable]
        public class  FishType
        {
            public int type;
            public Button btn;
        }
    }
}