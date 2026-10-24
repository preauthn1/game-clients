import { MD5 } from "crypto-js";
import { instanceHeaders , getGlobalSettings , setDocumentTitle, getApiUrl , add_GA_ViewEvent } from "@/utilities/mixin/commonMethods";

export default {

    //純粹只抓錢包金額 (比起其他隻API更輕量一點)
    async loadBalance({ commit, rootGetters }) {
       
        let url = new URL(getApiUrl() + "v1/lobby/balance");
        let dateTime = Date.now();
        let token = [REDACTED]"user/token"];
        let playerName = rootGetters["user/playerName"];
        let signKey = MD5(`${getGlobalSettings().encrypt_salt_key}_${dateTime}_${playerName}`).toString();

        let params = {
            signKey: signKey,
            ts: dateTime,
            playerName: playerName,
        };
      
        url.search = new URLSearchParams(params).toString();

        let response = await fetch(url, {
            method: "GET",
            headers: instanceHeaders(token),
        });

        let responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message);
            commit('setBalance', -1);
            throw (error);
        }
               
        commit('setBalance', responseData.data.balance);
    },


    async loadLobbySettings({ commit, rootGetters }) {
       
        let url = new URL(getApiUrl() + "v1/lobby/settings");
        let dateTime = Date.now();
        let token = [REDACTED]"user/token"];
        let playerName = rootGetters["user/playerName"];
        let signKey = MD5(`${getGlobalSettings().encrypt_salt_key}_${dateTime}_${playerName}`).toString();

        let params = {
            signKey: signKey,
            ts: dateTime,
            playerName: playerName,
        };
      
        url.search = new URLSearchParams(params).toString();

        let response = await fetch(url, {
            method: "GET",
            headers: instanceHeaders(token),
        });
        let responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message);
            throw (error);
        }
        
        const lobbySetting = 
        {
            isLobbyTransferEnable: responseData.data.isLobbyTransferEnable,
            isIframeEnable: responseData.data.isIframeEnable,
            isSoundDefaultEnable: responseData.data.isSoundDefaultEnable,
            isOpenNewTab : responseData.data.isOpenNewTab,
            externalExitLink: responseData.data.externalExitLink,
            lobbyStyle : responseData.data.lobbyStyle,
            bgmType: responseData.data.bgmType,
            playerID : responseData.data.playerID,
            isIONSlot : responseData.data.isIONSlot
        };

        commit('setLobbySetting', lobbySetting);        
        commit('user/setPlayerName', responseData.data.playerName, { root: true });     

        //修改title名稱
        if( responseData.data.siteDisplayName) {
            setDocumentTitle(responseData.data.siteDisplayName);
        }
    },
   
    async loadGames({ commit, rootGetters }) {

        //2021-10-13 新增，指定查詢特定遊戲商維護訊息 (如果有queryString)
        const urlParams = new URLSearchParams(window.location.search);
        let targetMaintainVendorID = urlParams.get('targetMaintainVendorID');

        if(!targetMaintainVendorID || targetMaintainVendorID == null)
        {
            targetMaintainVendorID = '';
        }

        let url = new URL(getApiUrl() + "v1/lobby/games");
        let dateTime = Date.now();
        let token = [REDACTED]"user/token"];
        let playerName = rootGetters["user/playerName"];
        let signKey = MD5(`${getGlobalSettings().encrypt_salt_key}_${dateTime}_${playerName}`).toString();
        let params = {
            signKey: signKey,
            ts: dateTime,
            playerName: playerName,
            targetMaintainVendorID : targetMaintainVendorID
        };
      
        url.search = new URLSearchParams(params).toString();
        let response = await fetch(url, {
            method: "GET",
            headers: instanceHeaders(token),
        });
        let responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message);
            throw (error);
        }
        let games = [];
        for (const game of responseData.data.games) {
            games.push(game);
        }
        commit('setGameTypes',responseData.data.gameTypes);

        add_GA_ViewEvent('lobby_games' , { merchantID: responseData.data.merchantID} );

        if(responseData.data.isAllGameMaintain) {
            games = [];
        }              

        const lobbyGameExtraInfo = 
        {          
            isAllGameMaintain: responseData.data.isAllGameMaintain,
            maintainMsg: responseData.data.maintainMsg,
            isAdvertisementLayout: responseData.data.isAdvertisementLayout,
            advertisementItems: responseData.data.advertisementItems,
        };

        commit('setLobbyGameExtraInfo', lobbyGameExtraInfo);        
        commit('setGames', games);
        commit('setRecentlyGames', responseData.data.recentlyGames);
        commit('user/setPlayerName', responseData.data.playerName, { root: true });     

        //修改title名稱
        if( responseData.data.siteDisplayName) {
            setDocumentTitle(responseData.data.siteDisplayName);
        }
    },

    async fetchGameLink({ rootGetters }, data) {
        let url = new URL(getApiUrl() + "v1/lobby/game-link");
        let dateTime = Date.now();
        let token = [REDACTED]"user/token"];
        let playerName = rootGetters["user/playerName"];
        let signKey = MD5(`${getGlobalSettings().encrypt_salt_key}_${dateTime}_${playerName}`).toString();
        let params = {
            signKey: signKey,
            ts: dateTime,
            playerName: playerName,
            gameID: data.gameID,
            checkCode : data.checkCode
        };
        url.search = new URLSearchParams(params).toString();
        let response = await fetch(url, {
            method: "GET",
            headers: instanceHeaders(token),
        });
        let responseData = await response.json();
        
        if (!response.ok) {
            const error = new Error(responseData.message);
            throw (error);
        }

        //修改title名稱
        if(responseData.data.gameName) {
            const newTitle =  responseData.data.gameName + ' - ' + responseData.data.siteDisplayName;            
            setDocumentTitle(newTitle);
        }

        return responseData.data;
    },

    async fetchIframeGameLink({ rootGetters }, data) {
        let url = new URL(getApiUrl() + "v1/iframe/game-link");
        let dateTime = Date.now();
        let token = [REDACTED]"user/token"];
        let playerName = rootGetters["user/playerName"];
        let signKey = MD5(`${getGlobalSettings().encrypt_salt_key}_${dateTime}_${playerName}`).toString();
        let params = {
            signKey: signKey,
            ts: dateTime,
            playerName: playerName,
            gameID: data.gameID,
            checkCode: data.checkCode
        };
        url.search = new URLSearchParams(params).toString();
        let response = await fetch(url, {
            method: "GET",
            headers: instanceHeaders(token),
        });
        let responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message);
            throw (error);
        }

        //修改title名稱
        if(responseData.data.gameName) {
            const newTitle =  responseData.data.gameName + ' - ' + responseData.data.siteDisplayName;            
            setDocumentTitle(newTitle);
        }

        return responseData.data;
    },
    
    async fetchEventInfo({ rootGetters }) {
        let url = new URL(getApiUrl() + "v1/events/event-info");
        let token = [REDACTED]"user/token"];
        let response = await fetch(url, {
            method: "GET",
            headers: instanceHeaders(token),
        });
        let responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message);
            throw (error);
        }
        return responseData.data;
    },

    async fetchEnableEvents({ commit , rootGetters }) {
        let url = new URL(getApiUrl() + "v1/events/enable-events-and-hint");
        let token = [REDACTED]"user/token"];
        let response = await fetch(url, {
            method: "GET",
            headers: instanceHeaders(token),
        });
        let responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message);
            throw (error);
        }

        console.log( responseData.data);

        commit('setEnableEventsInfo',  responseData.data);      
        return responseData.data;
    },


    async setQuestHintToRead({ commit , rootGetters }) {

        var enableInfo = rootGetters["games/enableEventsInfo"];
        enableInfo.isAnyQuestHint = false;
        
        //在不重打API的情況下。手動觸發改值
        commit('setEnableEventsInfo',  enableInfo);  
    },



    async eventsLuckyDrawRedEnvelope({ rootGetters }) {
        let url = new URL(getApiUrl() + "v1/events/lucky-draw/redEnvelope");
        let token = [REDACTED]"user/token"];
        let dateTime = Date.now();
        let signKey = MD5(`${getGlobalSettings().encrypt_salt_key}_${dateTime}`).toString();
        let params = {
            signKey: signKey,
            ts: dateTime,
        };
        let response = await fetch(url, {
            method: "POST",
            headers: instanceHeaders(token),
            body: JSON.stringify(params),
        });

        let responseData = await response.json();
        if (!response.ok) {
            const error = new Error(responseData.message);
            throw (error);
        }
        return responseData.data;
    },
};
