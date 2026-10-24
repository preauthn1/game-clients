using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;

namespace BetVictor
{
	public class DepositManager : MonoBehaviour {
		public GameController controller;

		public Text minDepositTxt;
		public Text maxDespositTxt;
		public Dropdown bankListDrop;
		public InputField amountInput;
		public Text bankAccNameTxt;
		public Text bankAccNumTxt;
		int amount = 0;
		DepositData depositdata;
		void Start(){

		}


		void OnEnable(){
		}

		public void EnableManager(){
			this.gameObject.SetActive (true);
			OnRequestGetDeposit ();
		}
		public void DisableManager(){
			this.gameObject.SetActive (false);
		}
		public void OnRequestGetDeposit(){
			amount = 0;
			amountInput.text = amount.ToString();
			controller.OnRequestGetDeposit ();
		}
		public void OnGetDepositResponse(DepositData data){
			bankListDrop.value = 0;
			depositdata = data;
			amountInput.text = "0";
			minDepositTxt.text = ": " + depositdata.minDeposit.ToString();
			maxDespositTxt.text = ": " + depositdata.maxDesposit.ToString();

			List<string> _displays = new List<string> ();
			_displays.Add ("Please Select");
			for (int i = 0; i < depositdata.bankInfo.Count; i++) {
				string _display = depositdata.bankInfo [i].bank; //+ " / " + depositdata.bankInfo [i].accNum + " / " + depositdata.bankInfo [i].accName;
				_displays.Add (_display);
			}
			bankListDrop.ClearOptions ();
			bankListDrop.AddOptions (_displays);
			bankListDrop.RefreshShownValue ();
		}
		public void OnRequestPostDeposit(){
			amount = Int32.Parse (amountInput.text);
			if (bankListDrop.value == 0) {
				controller.OnEnableErrorMsg ("Please Select A Bank!", 0);
				return;
			}
			if (amount <= 0) {
				controller.OnEnableErrorMsg ("Please Insert Deposit Amount!", 0);
				return;
			}
			string bankId = depositdata.bankInfo [bankListDrop.value-1].id.ToString () + ":" + depositdata.bankInfo [bankListDrop.value-1].value.ToString ();
			controller.OnRequestPostDeposit (bankId,amount);
		}

		public void OnPostDepositResponse(string data){
			controller.OnEnableErrorMsg (data, 0);
			bankListDrop.value = 0;
			amountInput.text = "0";
		}

		public void OnSelectedBank(int i){
			if (i == 0) {
				bankAccNameTxt.text = "";
				bankAccNumTxt.text = "";
				return;
			}

			bankAccNameTxt.text = depositdata.bankInfo [i-1].accNum;
			bankAccNumTxt.text = depositdata.bankInfo [i-1].accName;
		}
	}
}