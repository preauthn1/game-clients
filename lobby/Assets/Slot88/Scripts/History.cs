using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class History : MonoBehaviour {

	[SerializeField] Toggle gameHistoryToggle;
	[SerializeField] Text gameHistoryToggleText;
	[SerializeField] Text depositWithdrawToggleText;
	[SerializeField] GameObject gameHistoryPanel;
	[SerializeField] GameObject depositWithdrawPanel;
	[SerializeField] GameHistory gameHistoryPrefab;
	[SerializeField] DepositWithdraw depositWithdrawPrefab;
	private Color unselectedColor = new Color(115f / 255f, 109f / 255f, 154f / 255f);

	// Use this for initialization
	void Start () {
		gameHistoryToggle.onValueChanged.AddListener((value) =>
		{
			gameHistoryPanel.SetActive(value);
			depositWithdrawPanel.SetActive(!value);
			gameHistoryToggleText.color = value ? Color.white : unselectedColor;
			depositWithdrawToggleText.color = !value ? Color.white : unselectedColor;
		});

		depositWithdrawPrefab.gameObject.SetActive(false);
		gameHistoryPrefab.gameObject.SetActive(false);
		gameHistoryPanel.SetActive(true);
		depositWithdrawPanel.SetActive(false);

		gameHistoryToggle.isOn = true;
	}

	public void AddDepositWithdraw(string categories, int amount, string time)
	{
		DepositWithdraw clone = Instantiate(depositWithdrawPrefab, depositWithdrawPrefab.transform.parent);
		clone.SetInfo(categories, amount, time);
		clone.gameObject.SetActive(true);
	}
	public void AddGameHistory(string title, string turnover, int winLose, string balance, string time)
	{
		GameHistory clone = Instantiate(gameHistoryPrefab, gameHistoryPrefab.transform.parent);
		clone.SetInfo(title, turnover, winLose, balance, time);
		clone.gameObject.SetActive(true);
	}

}
