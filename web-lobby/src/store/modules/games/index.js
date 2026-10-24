import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            lobbySetting: {
                isLobbyTransferEnable: false,
                isAllGameMaintain: false,
                maintainMsg: '',
                lobbyStyle : 0
            },
            lobbyGameExtraInfo: {
                isAllGameMaintain: false,
                maintainMsg: '',
                isAdvertisementLayout: false,
                advertisementItems: [],
            },
            enableEventsInfo: {
                isEnableLuckyWheel: false,
                remaningLuckyWheelTimes: 0,
            },
            recentlyGames: [],
            games: [],
            gameTypes: [],
            balance: 0,
        }
    },
    mutations,
    actions,
    getters,
};