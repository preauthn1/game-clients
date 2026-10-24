var URL = {
  VERIFYGLOBALURL : "http://0.0.0.0:8080/func/jsx/slot_check_mobile_version",
  VERIFYGAMEURL : "http://0.0.0.0:8080/cmoext/ajax/ceif/processGameTokenReq2.shtml",
  //VERIFYGLOBALURL : "http://0.0.0.0:9090/func/jsx/multi_check_mobile_version",
  //VERIFYTEXASURL : "http://0.0.0.0:8080/func/jsx/texaspoker_check_mobile_version",
  //VERIFYSIXPOKERURL : "http://0.0.0.0:8080/func/jsx/sixflower_check_mobile_version",
  //VERIFYEIGHTPOKERURL : "http://0.0.0.0:8080/func/jsx/sixflower_check_mobile_version",
  //VERIFYTHREEPOKERURL : "http://0.0.0.0:8080/func/jsx/threepic_check_mobile_version",
  //VERIFYGOALPOKERURL : "http://0.0.0.0:8480/func/jsx/between_check_mobile_version",
  //VERIFYFOURPOKERURL : "http://0.0.0.0:8780/func/jsx/bobo_check_mobile_version",
  VERIFY_GREATBLUE_URL : "http://0.0.0.0:8080/func/jsx/multi_check_mobile_version",
  VERIFY_PANTHERMOON_URL : "http://0.0.0.0:8080/func/jsx/multi_check_mobile_version",
  VERIFY_FUNKYMONKEY_URL : "http://0.0.0.0:8080/func/jsx/multi_check_mobile_version",

  GREATBLUE_IP : "http://0.0.0.0:8080/func/jsx/texaspoker_check_mobile_version",
  PANTHERMOON_IP : "http://0.0.0.0:8080/func/jsx/texaspoker_check_mobile_version",
  FUNKYMONKEY_IP: "http://0.0.0.0:8080/func/jsx/texaspoker_check_mobile_version",
  suffix : "",
  login : "",
  password : "",
  gameId : 0,
  nickName: "",


  LOGIN_URL : "",
  LOBBY_TOKEN:"",
  GAME_TOKEN:"",
  // IP:"",
  // PORT:""
  IP:"0.0.0.0",
  PORT:"9090"
}

const constants = {
  SCREEN_SIZE_WIDTH: 1334,
  SCREEN_SIZE_HEIGHT: 750,
  loginScene: "Login",
  loadingScene: "Loading",
  lobbyScene: "Lobby",
  userNameZeroTitle: "Error",
  userNameZeroContent: "Please Enter User Name",
  passwordZeroTitle: "Error",
  passwordZeroContent: "Please Enter Password",
  slotGameScene: ["GreatBlueGame", "PantherMoonGame", "BlazingHitGame", "HighwayKingsGame", "FunkyMonkeyGame", ],
  slotGameId: ["2","5","1"],
  SPINMESSAGE: "TOUCH THE REELS TO STOP EARLY",
  IDLEMESSAGE: "PRESS SPIN \n OR SWIPE THE REELS",

  //errors
  ERR_GAMELOCK_CODE: 9200,  //player locked to a game, put gameId e.g."<810001> in message" . level: resolvable
  ERR_GS_TICKET_INVALID_CODE: 9201,  //required to retrieve a new game ticket, level: resolvable
  ERR_CLIENT_INSF_COIN_CODE: 9202, //all for insufficient coin detected at client, level:low
  ERR_SERVER_INSF_COIN_CODE: 9203, //all for insufficient coin detected at server, level:low
  ERR_DISCONNECT_BYE_CODE: 9204, //player disconnected from the game, kicked out, level:medium
  ERR_OTHER_ERROR_CODE: 9299, //other error, display the message from the server. 
  ERR_GENERIC_TITLE: "Error",
  ERR_GAMELOCK_MESSAGE: "Player is required to complete unfinished progress in Game :",
  ERR_GS_TICKET_INVALID_MESSAGE: "Session Expired.",
  ERR_CLIENT_INSF_COIN_MESSAGE: "Insufficient Coins.",
  ERR_SERVER_INSF_COIN_MESSAGE: "Insufficient Coins.",
  ERR_DISCONNECT_BYE_MESSAGE: "Login Failed.",
  ERR_OTHER_ERROR_MESSAGE: "Disconnected",
  ERR_CONNECTION_UNSTABLE: "If you have continuously failed to connect to the game, please check your internet connection.",
  ERR_DISPLAY_NAME_UNAVAILABLE: "Display name unavailable, please choose another name.",
  ERR_ACCOUNT_SUSPENDED: "Your account has been suspended. Please contact your operator",
  ERR_NO_PERMISSION_TO_LOGIN: "Your account has no permission to login. Please contact your operator",

  //


  ISSHOWLOG: true,
  /*
  normalSpinMode: 0,
  bonusGameMode: 2,
  freeSpinMode: 1,
  */

  COLOR_PINK: "#FA65FF",
};

const STORED_SERVER_DATA = {
  MINIGAME_WHEEL_SPINSLEFT: 1,
  GRAND_VAL: 0,
  MAJOR_VAL: 0,
  MINOR_VAL: 0,
}

const SERVERDATAKEYS = {
  FIRSTTIMEMODE: -1,
  NORMALSPINMODE: 1,
  PREFREESPINMODE: 2,
  GAMBLEMODE: 3,
  BONUSGAMEMODE: 4,
  JACKPOTGAMEMODE: 5,
  REELPOS_NEUTRAL: 1,
  REELPOS_DOWN: 0,
  REELPOS_UP:2,
  PAYLINE_START_FROM_LEFT: 1,
  PAYLINE_START_FROM_RIGHT: -1,
  LOBBY_MINIGAME_WHEEL: 0,
};

const PLAYERPREFSKEYS = {
  BGM_VOLUME: 1,
  SFX_VOLUME: 1,
  ISMUTE: false,
  USERNAME: "",
  PASSWORD: "",
  selectedGame :"",
};

module.exports = {
  constants: constants,
  SERVERDATAKEYS: SERVERDATAKEYS,
  PLAYERPREFSKEYS: PLAYERPREFSKEYS,
  URL: URL,
  STORED_SERVER_DATA:STORED_SERVER_DATA,
};
