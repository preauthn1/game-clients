using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameHistory : MonoBehaviour {

	[SerializeField] Text title;
	[SerializeField] Text turnover;
	[SerializeField] Text winLose;
	[SerializeField] Text balance;
	[SerializeField] Text time;

	private Color32 negativeNumberColor = new Color32(36, 247, 151,255);
	private Color32 positiveNumberColor = new Color32(255, 0, 255, 255);
	public void SetInfo(string title, string turnover, int winLose, string balance, string time)
	{
		this.title.text = title;
		this.turnover.text = turnover;
		this.balance.text = balance;
		this.time.text = time;
		this.winLose.text = winLose.ToString();
		if (winLose > 0)
			this.winLose.color = negativeNumberColor;
		else if (winLose < 0)
			this.winLose.color = positiveNumberColor;

	}
}
