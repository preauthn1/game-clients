import { MD5 } from "crypto-js";
import { getGlobalSettings, getApiUrl   } from "@/utilities/mixin/commonMethods";

let transferApi = {
   
    async getTransferWalletInfo (vue_instance , transactionNo , token) { 

        let url = new URL(getApiUrl() + "v1/platform-transfer/wallet");
        let dateTime = Date.now();

        let params = {
            ts: dateTime,
        };

        url.search = new URLSearchParams(params).toString();

        let response = fetch(url, {
            method: "GET",
            headers: vue_instance.instanceRequestHeaders(),
        }).then((res)=>
        {
            return res.json();
        })
        .catch((error)=>
        {
            alert("Fail. System under maintain");
            console.log(error);
            return error;
        })
        .finally(() =>
        {
        });

        return response;
    },

    async walletTransfer (vue_instance , amount , action_type) { 

        let url = '';

        if(action_type == 'cash_in')
        {
            url = new URL(getApiUrl() + "v1/platform-transfer/platform-to-gamwWallet");
        }
        else
        {
            url = new URL(getApiUrl() + "v1/platform-transfer/gamwWallet-to-platform");
        }
      
        let params = {
            amount: amount,
        };

        url.search = new URLSearchParams(params).toString();

        let response = fetch(url, {
            method: "POST",  
            body: JSON.stringify(params),
            headers: vue_instance.instanceRequestHeaders(),
        }).then((res)=>
        {
            return res.json();
        })
        .catch((error)=>
        {
            alert("Fail. System under maintain");
            console.log(error);
            return error;
        })
        .finally(() =>
        {
        });

        return response;
    },


  }  
  
  export default transferApi



