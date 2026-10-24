export default {
    setToken(state, token) {
        state.token = [REDACTED];
    },
    setPlayerName(state, name) {
        state.playerName = name;
    },
    setLang(state, lang) {
        state.lang = lang;
    },
    setisShowGlobalError(state, isShow) {
        state.isShowGlobalError = isShow;
    },     
    setErrorExtraInfo(state, myErrorInfoObj) {
        state.errorExtraInfoObject = myErrorInfoObj;
    },
};