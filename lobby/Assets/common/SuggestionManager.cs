using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SuggestionManager : MonoBehaviour {
    public Text playerNameTxt;
    public InputField suggestTxt;
    public GameObject successInfo;
    public Button SendButton;
    public InputField mobile;
    public InputField detail;
    public List<Toggle> subjectList = new List<Toggle>();

    private Color unselectedColor = new Color32(115, 109, 153, 255);
    private Color selectedColor = new Color32(255, 0, 255, 255);
    private int subjectIndex = -1;
    public void Start()
    {
        detail.onValueChanged.AddListener((text) => CheckSendable());
        mobile.onValueChanged.AddListener((text) => CheckSendable());
        for (int i = 0; i < subjectList.Count; i++)
        {
            int index = i;
            subjectList[index].onValueChanged.AddListener((value) => {
                if (value) SetSubjectIndex(index);
            });
        }

        Reset();
    }

    public void SetSubjectIndex(int selectIndex)
    {
        print(selectIndex);
        if (subjectIndex != -1) subjectList[subjectIndex].transform.Find("Label").GetComponent<Text>().color = unselectedColor;
        subjectIndex = selectIndex;
        subjectList[selectIndex].isOn = true;
        subjectList[selectIndex].transform.Find("Label").GetComponent<Text>().color = selectedColor;
    }
    public void EnableSuggestion(string name)
    {
        gameObject.SetActive(true);
        successInfo.SetActive(false);
        suggestTxt.text = "";
        playerNameTxt.text = name;
    }

    private void CheckSendable()
    {
        bool canSend = !string.IsNullOrEmpty(detail.text) && !string.IsNullOrEmpty(mobile.text);
        SendButton.interactable = canSend;
        SendButton.transform.GetComponent<Image>().enabled = canSend;
        SendButton.transform.Find("Disable").gameObject.SetActive(!canSend);
        SendButton.transform.Find("Text").GetComponent<Text>().color = canSend ? selectedColor : unselectedColor;
    }

    public void send()
    {
        successInfo.SetActive(true);
    }
    public void close()
    {
        Reset();
        successInfo.SetActive(false);
        gameObject.SetActive(false);
    }

    private void Reset()
    {
        SetSubjectIndex(0);
        mobile.text = "";
        detail.text = "";
        CheckSendable();
    }

}
