using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class DepositWithdraw : MonoBehaviour {
	[SerializeField] Text categories;
	[SerializeField] Text amount;
	[SerializeField] Text time;
	private Color32 negativeNumberColor = new Color32(36, 247, 151, 255);
	private Color32 positiveNumberColor = new Color32(255, 0, 255, 255);

	public void SetInfo(string categories ,int amount, string time)
	{
		this.categories.text = categories;
		this.amount.text = amount.ToString();
		this.time.text = time;
		if (amount > 0)
			this.amount.color = negativeNumberColor;
		else if (amount < 0)
			this.amount.color = positiveNumberColor;
	}
}
