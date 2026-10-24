import { getGlobalSettings, getApiUrl , getStableApiUrl } from "@/utilities/mixin/commonMethods";

let otherApi = {
   
    async addPlayerTag (vue_instance , myTagID , token) { 

        const apiDomain = getApiUrl();
        let url = new URL(apiDomain + "v1/lobby/player-tag");
      
        let params = {
            tagID : myTagID
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

  }  
  
  export default otherApi



