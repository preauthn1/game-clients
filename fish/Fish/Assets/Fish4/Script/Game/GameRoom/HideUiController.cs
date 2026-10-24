using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.EventSystems;

namespace P8Games.Fish4
{
    public class HideUiController : MonoBehaviour
    {

        [SerializeField] public CanvasGroup uiGroup = null;
        [SerializeField] public EventTrigger[] button = null;
        [SerializeField] public GameObject topLayer = null;
        [SerializeField] public float hideTime = 5f;

        [SerializeField] public int numButtonClick;
        float curTime;
        // Use this for initialization
        void Start()
        {

            numButtonClick = 0;
            curTime = 0;

            EventTrigger.Entry upEntry = new EventTrigger.Entry();
            upEntry.eventID = EventTriggerType.PointerUp;
            upEntry.callback.AddListener((data) => { ButtonUp((PointerEventData) data); });

            EventTrigger.Entry downEntry = new EventTrigger.Entry();
            downEntry.eventID = EventTriggerType.PointerDown;
            downEntry.callback.AddListener((data) => { ButtonDown((PointerEventData) data); });

            for (int i = 0; i < button.Length; i++)
            {
                button[i].triggers.Add(downEntry);
                button[i].triggers.Add(upEntry);
            }
        }

        // Update is called once per frame
        void Update()
        {

            if (numButtonClick <= 0)
            {
                curTime += Time.deltaTime;

                if (curTime >= hideTime)
                {
                    curTime = 0f;

                    if (uiGroup.alpha >= 0.9f)
                        LeanTween.value(this.gameObject, 1f, 0f, 0.2f).setOnUpdate((float value) => { uiGroup.alpha = value; })
                            .setOnComplete(() => { topLayer.SetActive(true); });
                }
            }
        }

        void ButtonDown(PointerEventData data)
        {
            if (numButtonClick <= 0 && uiGroup.alpha <= 0)
            {
                LeanTween.value(this.gameObject, 0f, 1f, 0.2f).setOnUpdate((float value) => { uiGroup.alpha = value; })
                    .setOnComplete(() => { topLayer.SetActive(false); });
            }
            else if (numButtonClick <= 0 && uiGroup.alpha < 1)
            {
                uiGroup.alpha = 1f;
                topLayer.SetActive(false);
            }

            curTime = 0f;
            numButtonClick++;
        }

        void ButtonUp(PointerEventData data)
        {
            numButtonClick--;
        }
    }
}