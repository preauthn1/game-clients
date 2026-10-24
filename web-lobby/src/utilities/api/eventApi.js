import { getGlobalSettings, getApiUrl , getStableApiUrl   } from "@/utilities/mixin/commonMethods";
import { MD5 } from "crypto-js";

let eventApi = {

    async getEventDescription (vue_instance , eventID ,  isPreview = false , checkCode = '' , targetLanguage = '') { 

        const parameters = "eventID=" + eventID + '&checkCode=' + checkCode + '&isPreview=' +isPreview.toString() + '&targetLanguage=' + targetLanguage;

        const apiDOmain = getStableApiUrl();

        let url = new URL(apiDOmain + "v1/events/description?" + parameters );
       
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



    async getSingleEventByType(vue_instance , eventType) { 

        let url = new URL(getApiUrl() + "v1/events/event-info-detail/" +eventType.toString());
       
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


    async getEventPrizeRecords(vue_instance) { 

        let url = new URL(getApiUrl() + "v1/events/prize-records");       

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

    async getEventQuest(vue_instance) { 

        let url = new URL(getApiUrl() + "v1/events/quest");       

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

    async receiveQuestReward(vue_instance , payload) { 

        let url = new URL(getApiUrl() + "v1/events/quest-reward");       

        let ts = Date.now();
        let signKey = MD5(`${getGlobalSettings().encrypt_salt_key}_${ts}_${payload.eventID}_${payload.eventPrizeBundleID}`).toString();

        let params =
        {
            eventID : payload.eventID,
            eventPrizeBundleID : payload.eventPrizeBundleID,
            ts : ts,
            signKey : signKey,
        };

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
            console.log(error);
            return error;
        })
        .finally(() =>
        {
        });

        return response;
    },

    async startDraw_LuckyWheel(vue_instance) { 

        let url = new URL(getApiUrl() + "v1/events/lucky-draw/LuckyWheel");
                       
        var params = 
        {
            ts : 123
        };

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
            console.log(error);
            return error;
        })
        .finally(() =>
        {
        });

        return response;
    },




    getToken(vue_instance)
    {
        return vue_instance.$store.getters["user/token"];
    }

  }  
  
  export default eventApi



