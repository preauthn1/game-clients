using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;

namespace BetVictor
{
	public class WithdrawManager : MonoBehaviour {

		public GameController controller;

		public Text minWithdrawTxt;
		public Text maxWithdrawTxt;
		public Text accNoTxt;
		public Text accNameTxt;

		public InputField amountInput;
		public Dropdown walletListDrop;
		int amount = 0;
		WithdrawData withdrawdata = new WithdrawData();
		void OnEnable(){
		}
		public void EnableManager(){
			this.gameObject.SetActive (true);
			OnRequestGetWithdraw ();
		}
		public void DisableManager(){
			this.gameObject.SetActive (false);
		}
		public void OnReceiveWalletInfo(){
			walletListDrop.value = 0;

			List<string> _displays = new List<string> ();
			_displays.Add ("Please Select");
//			for (int i = 0; i < depositdata.bankInfo.Count; i++) {
//				string _display = depositdata.bankInfo [i].bank; //+ " / " + depositdata.bankInfo [i].accNum + " / " + depositdata.bankInfo [i].accName;
//				_displays.Add (_display);
//			}
			walletListDrop.ClearOptions ();
			walletListDrop.AddOptions (_displays);
			walletListDrop.RefreshShownValue ();
		}
		public void OnRequestGetWithdraw(){
			amount = 0;
			amountInput.text = amount.ToString();
			controller.OnRequestGetWithdraw ();
		}
		public void OnGetWithdrawResponse(WithdrawData data){
			withdrawdata.min = data.min;
			withdrawdata.max = data.max;

			minWithdrawTxt.text = ": " + withdrawdata.min.ToString();
			maxWithdrawTxt.text = ": " + withdrawdata.max.ToString();
		}
		public void OnGetWithdrawBankResponse(WithdrawData data){
			withdrawdata.accountName = data.accountName;
			withdrawdata.accountNumber = data.accountNumber;

			accNoTxt.text = ": " + withdrawdata.accountNumber;
			accNameTxt.text = ": " + withdrawdata.accountName;
		}
		public void OnRequestPostWithdraw(){
			amount = Int32.Parse (amountInput.text);
			if (amount <= 0) {
				controller.OnEnableErrorMsg ("Please Insert Deposit Amount!", 0);
				return;
			}

			controller.OnRequestPostWithdraw (amount);
		}

		public void OnPostWithdrawResponse(string response){
			controller.OnEnableErrorMsg (response, 0);
			amountInput.text = "0";
			amount = 0;
		}
	}	
}
