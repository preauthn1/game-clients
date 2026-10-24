<template>
  <div class="lobby-bg"></div>
  <div v-if="allowAnonymous">
    <EventDescription v-if="isEventDescriptionPage" />
    <HistoryScreenshot v-else-if="isScreenshotPage" />
    <RedirectPortal v-else-if="isRedirectPortalPage" />
    <SpeedTest v-else-if="isSpeedTestPage" />
    <div v-else></div>
  </div>
  <div v-else-if="missingUserinfo" class="missing-message">
    {{ $t("Invalid_AuthToken") }}
  </div>
  <div v-else id="main-content" class="main-content">
    <FixHeader v-if="lobbyStyle == 11 && isShowFixHeaderPage" />

    <!-- 大廳games資源很高 不要反覆render -->
    <div v-if="isLobbyComponentLoad">
      <Lobby id="refLobby_v2" v-show="isLobbyPage" />
    </div>

    <Game v-if="isGamePage" />
    <EventLuckyWheel v-else-if="isEventLuckyWheelPage" />
    <EventPrizeRecord v-else-if="isEventPrizeRecord" />
    <EventQuest v-else-if="isEventQuest" />
    <Messages v-else-if="isMessagesPage" />
    <SetLanguage v-else-if="isLanguagePage" />
    <EventDescription v-else-if="isEventDescriptionWithHeaderPage" />
  </div>

  <div v-show="isShowGlobalErrorPopup" id="myPrizeResult" class="modal-overlay">
    <div class="popup-modal my-animate-before error-modal-animate">
      <div class="modal-title errorMsg">
        <i class="fas fa-exclamation-circle"></i>
        {{ $t("Label_Prompt") }}

        <div class="modal-close-btn" @click="closeGlobalErrorPopup()">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <!-- 如果未來有要拿來顯示其他種錯誤訊息呈現方式、參考 getErrorExtraInfo -->
      <div class="content" style="margin-top: 10px" v-if="getErrorExtraInfo">
        <div v-if="getErrorExtraInfo.errorDisplayType === 0">
          <div>{{ $t("Msg_FailedLoad_Main") }}</div>
          <ul style="color: #ccc; margin-top: 10px">
            <li>{{ $t("Msg_FailedLoad_Reason1") }}</li>
            <li>{{ $t("Msg_FailedLoad_Reason2") }}</li>
            <li>{{ $t("Msg_FailedLoad_Reason3") }}</li>
          </ul>

          <div class="myErrorDebugInfoText">
            {{ getErrorExtraInfo.extraDebugInfoText }}
          </div>
        </div>
        <div v-else style="font-size: 16px">
          {{ getErrorExtraInfo.extraDebugInfoText }}

          <div class="text-c">
            <button
              @click="closeGlobalErrorPopup()"
              class="modal-button"
              style="background: #821111; margin-top: 50px"
            >
              {{ $t("Button_Confirm") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonMixin from "../utilities/mixin/commonMixin";
import FixHeader from "../components/FixHeader.vue";
import EventDescription from "./EventDescription.vue";
import EventLuckyWheel from "./EventLuckyWheel.vue";
import EventPrizeRecord from "./EventPrizeRecord.vue";
import EventQuest from "./EventQuest.vue";
import Messages from "./Messages.vue";
import RedirectPortal from "./RedirectPortal.vue";
import SetLanguage from "./SetLanguage.vue";
import Lobby from "./Lobby.vue";
import Game from "./Game.vue";
import HistoryScreenshot from "./HistoryScreenshot.vue";
import SpeedTest from "./SpeedTest.vue";
import { MD5 } from "crypto-js";

export default {
  components: {
    Lobby,
    Game,
    EventDescription,
    EventLuckyWheel,
    EventPrizeRecord,
    EventQuest,
    SetLanguage,
    FixHeader,
    Messages,
    RedirectPortal,
    HistoryScreenshot,
    SpeedTest,
  },
  mixins: [commonMixin],

  data() {
    return {
      isLobbyComponentLoad: false,
      gameID: this.$route.query.gameID,
    };
  },

  computed: {
    isShowFixHeaderPage() {
      return (
        this.isMessagesPage ||
        this.isLanguagePage ||
        this.isLobbyPage ||
        this.isEventPrizeRecord ||
        this.isEventDescriptionWithHeaderPage ||
        this.isEventQuest ||
        this.isEventLuckyWheelPage
      );
    },

    currentPage() {
      return this.getPageParameterLower();
    },
    isLobbyPage() {
      const pageLower = this.getPageParameterLower();
      return pageLower === "lobby" || pageLower === "" || pageLower == null;
    },
    isEventDescriptionWithHeaderPage() {
      return this.isTargetPage("EventDescriptionWithHeader");
    },
    isGamePage() {
      return this.isTargetPage("Game");
    },
    isEventDescriptionPage() {
      return this.isTargetPage("Eventdescription");
    },
    isEventLuckyWheelPage() {
      return this.isTargetPage("EventLuckyWheel");
    },
    isSpeedTestPage() {
      return this.isTargetPage("SpeedTest");
    },
    isEventPrizeRecord() {
      return this.isTargetPage("EventPrizeRecord");
    },
    isEventQuest() {
      return this.isTargetPage("EventQuest");
    },
    isMessagesPage() {
      return this.isTargetPage("Messagelist");
    },
    isLanguagePage() {
      return this.isTargetPage("Language");
    },
    isScreenshotPage() {
      return this.isTargetPage("Historyscreenshot");
    },
    isRedirectPortalPage() {
      return this.isTargetPage("Redirectportal");
    },

    //部分頁面允許不帶token
    allowAnonymous() {
      if (
        this.isEventDescriptionPage ||
        this.isScreenshotPage ||
        this.isSpeedTestPage ||
        this.isRedirectPortalPage
      ) {
        return true;
      }
      return false;
    },

    isShowGlobalErrorPopup() {
      const myValue = this.$store.getters["user/isShowGlobalError"];
      return myValue;
    },

    getErrorExtraInfo() {
      return this.$store.getters["user/getErrorExtraInfo"];
    },

    balance() {
      const balance = this.$store.getters["games/balance"];
      return balance;
    },

    playerName() {
      const playerName = this.$store.getters["user/playerName"];
      return playerName;
    },

    lobbyStyle() {
      const lobbySetting = this.$store.getters["games/lobbySetting"];
      return lobbySetting.lobbyStyle; //11=黑金版
    },

    isSoundDefaultEnable() {
      const lobbySetting = this.$store.getters["games/lobbySetting"]; //ps. 若有新增欄位 需要在action assign value
      return lobbySetting.isSoundDefaultEnable;
    },

    bgmType() {
      const lobbySetting = this.$store.getters["games/lobbySetting"]; //ps. 若有新增欄位 需要在action assign value
      return lobbySetting.bgmType;
    },

    token() {
      const token = [REDACTED]"user/token"];
      return token;
    },

    missingUserinfo() {
      return (
        this.playerName == "" ||
        this.playerName == null ||
        this.token == "" ||
        this.token == null ||
        this.balance == -1
      );
    },
  },

  watch: {
    currentPage() {
      this.setPathHistory();
      this.checkLobbyComponentMustLoad();
    },
  },

  created() {
    this.setLanguageByQueryString();
    let playerName = this.$route.query.playerName;
    let tokenV1 = this.$route.query.token;
    let tokenV2 = this.$route.query.pgsToken;
    let tokenV3 = this.$route.query.v3Token;
    let signV3 = this.$route.query.signV3;
    let lang = this.$route.query.lang;

    //紀錄最後一次頁面
    this.setPathHistory();

    //重製popup開關
    this.setGlobalErrorPopupShow(false);

    //被這錯誤浪費一堆時間 加個防呆提示訊息(開發提示用)
    setTimeout(() => {
      if (this.allowAnonymous && tokenV1 != null && tokenV1 != "") {
        this.sendNotify();
      }
    }, 500);

    if (playerName != null) {
      this.$store.commit("user/setPlayerName", playerName);
    }

    // token: [REDACTED] (改名好幾次..)
    if (tokenV1 != null) {
      //base64 decode
      tokenV1 = atob(tokenV1);
      this.$store.commit("user/setToken", tokenV1);
    } else if (tokenV2 != null) {
      //base64 decode
      tokenV2 = atob(tokenV2);
      this.$store.commit("user/setToken", tokenV2);
    } else if (tokenV3 != null) {
      const signHashV4 = MD5(tokenV3 + "_pgs_4");
      const signHashV5 = MD5(tokenV3 + "_pgs_5");
      //判斷是否為v4配置
      if (signHashV4 == signV3) {
        localStorage.setItem("last_token_v", "v4");
      } else if (signHashV5 == signV3) {
        localStorage.setItem("last_token_v", "v5");
      } else {
        localStorage.setItem("last_token_v", "v3");
      }
      this.$store.commit("user/setToken", tokenV3);
    }

    this.checkLobbyComponentMustLoad();

    setTimeout(() => {
      if (!this.allowAnonymous) {
        this.getLobbySettings();
      }
    }, 100);

    if (lang != null) {
      this.$store.commit("user/setLang", lang);
    }

    this.registerClickAndPlayBGM();
  },

  methods: {
    setPathHistory() {
      //若有此參數。不記錄log
      if (
        this.$route.query.isLogHistory &&
        this.$route.query.isLogHistory != null &&
        this.$route.query.isLogHistory == "1"
      ) {
        return;
      }

      let lastPath = localStorage.getItem("path_history_current");

      if (!lastPath || lastPath == null) {
        lastPath = "";
      }
      if (lastPath != location.href) {
        localStorage.setItem("path_history_last", lastPath);
      }
      localStorage.setItem("path_history_current", location.href);
    },

    checkLobbyComponentMustLoad() {
      // 為了讓lobby載入過一次後 就不會再重新render了 (用戶反覆進出大廳 效能很浪費)
      if (this.isLobbyPage) {
        this.isLobbyComponentLoad = true;
      }
    },

    closeGlobalErrorPopup() {
      this.setGlobalErrorPopupShow(false);
    },

    isTargetPage(myPageName) {
      const pageLower = this.getPageParameterLower();
      return pageLower == myPageName.toLowerCase();
    },

    async getLobbySettings() {
      this.isLoading = true;
      //2023/06 預計把loadSetting功能單純化 (load balance修改成獨立API處理) 不再包成一起
      try {
        await this.$store.dispatch("games/loadLobbySettings");
        this.initialSoundLocalStorage();
      } catch (error) {
        this.alertExceptionMessage(error);
      }

      this.isLoading = false;
    },

    initialSoundLocalStorage() {
      const vm = this;
      setTimeout(() => {
        //如果後台有設置 預設開啟音效(不覆蓋的前提)
        if (vm.isSoundDefaultEnable) {
          this.setBGMDefaultValue(true);
        }
        //音效預設打開
        this.setEffectSoundDefaultValue();
      }, 250);
    },

    registerClickAndPlayBGM() {
      //全域click事件註冊
      document.body.addEventListener("click", () => {
        //黑金版才有bgm
        if (this.lobbyStyle === 11) {
          //流量成本考量 請嘗試改成enable才載入靜態檔案
          //流量成本考量 請嘗試改成enable才載入靜態檔案
          //偷懶做法: 先不要撥放BGM了
          //偷懶做法: 先不要撥放BGM了
          //偷懶做法: 先不要撥放BGM了
          //偷懶做法: 先不要撥放BGM了
          //偷懶做法: 先不要撥放BGM了
          //偷懶做法: 先不要撥放BGM了
          return;

          // const bgmSetting = this.getBGMFlagLocalStorage();
          // const isBgmEnable = this.convertLocalStorageToBoolean(bgmSetting);

          // //只有首次initial才會執行
          // if (!window.global_audio_bgm) {
          //   //根據type不同決定bgm曲子 & 預設聲音
          //   this.initializeBGMBySpecificType(this.bgmType);
          //   window.global_audio_bgm.loop = true;

          //   if (isBgmEnable) {
          //     this.setBGMToDefaultVolume();
          //   } else {
          //     this.setBGMVolume(0);
          //   }
          //   this.startBGMPlay();
          // }
          // //後續每次click都會判斷
          // else if (
          //   window.global_audio_bgm &&
          //   window.global_audio_bgm.paused &&
          //   isBgmEnable
          // ) {
          //   this.startBGMPlay();
          // }
        }
      });
    },

    startBGMPlay() {
      window.global_audio_bgm.play();
    },

    initializeBGMBySpecificType(type) {
      console.log(type);
      //不同曲子有不同的預設音量
      if (type === 1) {
        const requirePath = require("../assets/media/Hall.ogg");
        window.global_audio_bgm = new Audio(requirePath);
        this.setBGMDefaultVolumeGlobalSetting(0.6);
      } else {
        const requirePath = require("../assets/media/hotel_lobby_cut.mp3");
        window.global_audio_bgm = new Audio(requirePath);
        this.setBGMDefaultVolumeGlobalSetting(0.4);
      }
    },

    sendNotify() {
      // 已調整v3Token，不需要再做警告
    },

    getPageParameterLower() {
      if (!this.$route.query.page) {
        return "";
      }
      const page = this.$route.query.page;

      if (page == null || page === "") {
        return "";
      }

      return page.toLowerCase();
    },
  },
};
</script>

<style>
.missing-message {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.8rem;
  padding: 3% 8%;
}

.lobby-bg:before {
  content: " ";
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* 手機版用低畫質即可、用這個路徑是MCDN費用考量 */
  background: url("https://example.invalid/static-file/lobby_bg_LQ.jpg")
    center 0 no-repeat;
  background-size: cover;
}

@media only screen and (min-width: 1366px) {
  .lobby-bg:before {
    background: url("../assets/images/lobby/lobby_bg.jpg") center 0 0 no-repeat;
  }
}

/* 透過css固定rotate的版型 ps.效果不如預期 */
/* @media screen and (min-width: 320px) and (max-width: 850px) and (orientation: landscape) {
  html {
    transform: rotate(-90deg);
    transform-origin: left top;
    width: 100vh;
    overflow-x: hidden;
    position: absolute;
    top: 100%;
    left: 0;
  }
} */
</style>