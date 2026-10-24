import { MD5 } from "crypto-js";
import { getGlobalSettings, getApiUrl , getBWGApiUrl, getStableApiUrl } from "@/utilities/mixin/commonMethods";

let otherApi = {
   
    async getLiveGameHistoryInfo (vue_instance , config) { 

        const transactionNo = config.transactionNo;
        const token = [REDACTED];
        const promoteBrand = config.promoteBrand;

        let apiDomain = getStableApiUrl();

        if(promoteBrand == 21)
        {
            apiDomain = getBWGApiUrl();
        }

        let url = new URL(apiDomain + "v1/bet-records/screenshot");
        let dateTime = Date.now();

        let apiKey = [REDACTED];
        let signKey = MD5(`${apiKey}_${dateTime}`).toString();

        let params = {
            signKey: signKey,
            ts: dateTime,
            transactionNo : transactionNo,
            token : [REDACTED]
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


    async getSpeedTestInfo (vue_instance) { 
        const apiDomain = getStableApiUrl();
        let url = new URL(apiDomain + "v1/debug/speed-test-info");     
        let response = fetch(url, {
            method: "GET",
            headers: vue_instance.instanceRequestHeaders(),
        }).then((res)=>
        {
            return res.json();
        })
        .catch((error)=>
        {
            console.log(error);
            return error;
        })
        .finally(() =>
        {
        });

        return response;
    },


  }  
  
  export default otherApi



