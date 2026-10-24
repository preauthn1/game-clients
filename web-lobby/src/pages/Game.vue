<template>
  <div id="game-container">
    <FixHeaderHomeButton v-if="isShowGamePageHeader" />

    <!-- 部分遊戲上角會顯示返回大廳按鈕 (若有啟用此設置) -->
    <div
      :class="'float-bakcToLobby ' + landscape_required_cssClass"
      v-if="backUrlLobby && backUrlLobby != null && backUrlLobby.length > 0"
      @click="toLobby()"
    >
      <i class="fas fa-home"></i>
      <div>Home</div>
    </div>

    <div v-show="isProgressMaskVisible" class="target-logo-loading-mask">
      <div>
        <img
          v-if="isIONSlotWhenInitialize"
          style="margin-bottom: 10px"
          src="@/assets/images/common/ionslot_v3.png"
        />
        <!-- 節省CDN流量費用 -->
        <img
          v-else-if="isNotIDR()"
          src="https://example.invalid/static-file/pgs_logo_512X512.png"
        />
        <img v-else src="@/assets/images/common/pgs_logo_512X512.png" />
      </div>

      <div style="padding: 0px 20px; margin-bottom: 10px">
        <div id="myProgress">
          <div ref="refmyBar" id="myBar"></div>
        </div>
      </div>

      <div class="f16">Loading ... {{ progressPercentage }}</div>
    </div>

    <!-- <div style="margin-top: 15px" v-if="isShowGamePageHeader"></div> -->

    <iframe
      id="target-game-iframe"
      class="game-iframe"
      :src="gameUrl"
      frameborder="0"
    ></iframe>

    <UnreadMessages />

    <!-- 預載圖片避免圖片很慢、才顯示出來(有紅包未領取才載入、避免浪費讀取流量資源) -->
    <div v-if="isShowFloatingButton" class="preload-hidden-img">
      <img
        src="../assets/images/event/open_red_001.gif"
        class="preload-hidden-img"
      />

      <img
        src="../assets/images/event/red_envelope_2.png"
        class="preload-hidden-img"
      />
    </div>

    <!-- 提示 1:100 轉換比例 -->
    <GameCoinExchangeRateHint ref="refGameCoinExchangeRateHint" />

    <FloatingButton
      v-if="isShowFloatingButton"
      :redEnvelopeCount="eventInfo.redEnvelope.redEnvelopeCount"
      @button-click="FloatingButtonClick"
    />
    <RedEnvelopeResult
      :reward="redEnvelopeReward"
      v-if="redEnvelopeReward != null"
      @click-close="RedEnvelopeClose"
    />

    <RankingEventButton
      @button-click="showRankingEventWindow = true"
      v-if="isEnableRankingEvent"
    />
    <RankingEventWindow
      @close="showRankingEventWindow = false"
      v-if="showRankingEventWindow"
    />
  </div>
  <Loader v-if="isLoading" />
</template>

<script>
import FloatingButton from "../components/FloatingButton.vue";
import RedEnvelopeResult from "../components/RedEnvelopeReward.vue";
import FixHeaderHomeButton from "../components/FixHeaderHomeButton.vue";
import UnreadMessages from "../components/UnreadMessages.vue";
import commonMixin from "../utilities/mixin/commonMixin";
import RankingEventButton from "../components/RankingEventButton.vue";
import RankingEventWindow from "../components/RankingEventWindow.vue";
import GameCoinExchangeRateHint from "../pages/GameCoinExchangeRateHint.vue";

export default {
  components: {
    FloatingButton,
    RedEnvelopeResult,
    FixHeaderHomeButton,
    UnreadMessages,
    GameCoinExchangeRateHint,
    RankingEventButton,
    RankingEventWindow,
  },
  mixins: [commonMixin],
  data() {
    return {
      progressInitial: 0,
      progressWidth: 5,
      progressIntervalObject: null,
      progressElement: null,
      progressPercentage: null,
      isProgressMaskVisible: false,
      debug_extendRate: 1, //debug用 延長顯示時間

      isShowGamePageHeader: false,
      isIONSlotWhenInitialize: false,
      isLandscapeRequired: false,
      isLoading: false,
      isShowExchangeRateHint: false,
      backUrlLobby: "",
      gameUrl: "",
      eventInfo: null,
      redEnvelopeReward: null,
      showRankingEventWindow: false,
      defaultRefreshInterval: 5000,
      regularRefreshInterval: 5000, //預設5000毫秒
    };
  },
  computed: {
    landscape_required_cssClass() {
      return this.isLandscapeRequired ? "landscape_required" : "";
    },
    isEnableRankingEvent() {
      return this.$store.getters["games/enableEventsInfo"].isEnableRankingEvent;
    },
    isEnableRedEnvelopeEvent() {
      return this.$store.getters["games/enableEventsInfo"].isEnableRedEnvelope;
    },
    isEnableRedEnvelopeEventFlag2() {
      return this.eventInfo != null && this.eventInfo.redEnvelope.isEventEnable;
    },
    //紅包顯示的必要條件(這個開館只影響畫面顯示)
    isRedEnvelopeComponentVisible() {
      return (
        this.isEnableRedEnvelopeEvent &&
        this.isEnableRedEnvelopeEventFlag2 &&
        !this.isUnderSelfIframe()
      );
    },
    //顯示浮動按鈕
    isShowFloatingButton() {
      return (
        this.isRedEnvelopeComponentVisible &&
        this.eventInfo.redEnvelope.redEnvelopeCount > 0
      );
    },
  },
  created() {
    this.LoadGame();
    this.registerRegularLoop();
  },

  async mounted() {
    this.lockRotate();

    this.muteBGM();
  },
  methods: {
    async registerRegularLoop() {
      await this.$store.dispatch("games/fetchEnableEvents");

      if (!this.isEnableRedEnvelopeEvent) {
        return;
      }

      this.loadRedEnvelopeEventInfo();
      this.RegularCheckActivity();
    },

    isNotIDR() {
      return this.isDomainNotIDR();
    },

    muteBGM() {
      this.setBGMPause(0);
    },

    toLobby() {
      this.playSound_click001();
      let relativeUrl = window.location.pathname + "?page=lobby";
      this.$router.push(relativeUrl);
    },

    async LoadGame() {
      const vm = this;
      this.isLoading = true;
      try {
        let gameLinkResult = await this.$store.dispatch(
          "games/fetchIframeGameLink",
          {
            gameID: this.$route.query.gameID,
            checkCode: this.$route.query.checkCode,
          }
        );

        //根據品牌決定loading載入圖要哪一張
        if (gameLinkResult.extraInfo != null) {
          const extraObj = gameLinkResult.extraInfo;

          setTimeout(() => {
            vm.isShowGamePageHeader = extraObj.isShowGamePageHeader;
          }, 4 * 1000);

          //TODO 如果localStorage顯示過一次就不再顯示
          if (extraObj.isShowExchangeRateHint) {
            this.delayShowExchangeReteHint();
          }
          if (extraObj.isDisableLogoAndLoading) {
            console.log("no loading");
          } else {
            this.isIONSlotWhenInitialize = gameLinkResult.isIONSlot;
            this.startPgsLogoProgress();
          }
        }

        this.backUrlLobby = gameLinkResult.backUrlLobby;
        this.isLandscapeRequired = gameLinkResult.isLandscapeRequired;
        this.gameUrl = gameLinkResult.url;
      } catch (error) {
        this.alertExceptionMessage(error);
      }

      this.isLoading = false;
    },

    delayShowExchangeReteHint() {
      const targetRef = this.$refs.refGameCoinExchangeRateHint;
      targetRef.delayShowExchangeReteHint(100);
    },

    async loadRedEnvelopeEventInfo() {
      try {
        if (!this.isEnableRedEnvelopeEvent) {
          return;
        }
        let data = await this.$store.dispatch("games/fetchEventInfo");
        this.eventInfo = data;

        if (data.intervalSetting) {
          this.regularRefreshInterval = data.intervalSetting.redEnvelope * 1000;
        }
        if (this.regularRefreshInterval < this.defaultRefreshInterval) {
          this.regularRefreshInterval = this.defaultRefreshInterval;
        }
      } catch (error) {
        //這隻API麻煩不要噴error
      }
    },

    //浮動按鈕點擊
    async FloatingButtonClick() {
      //防呆 避免滑鼠點太快
      if (!this.isLoading) {
        this.isLoading = true;

        try {
          let reward = await this.$store.dispatch(
            "games/eventsLuckyDrawRedEnvelope"
          );
          this.redEnvelopeReward = reward;
          await this.loadRedEnvelopeEventInfo();
        } catch (error) {
          this.alertExceptionMessage(error);
        }
      }

      //避免滑鼠點太快 稍微延遲
      setTimeout(() => {
        this.isLoading = false;
      }, 250);
    },

    lockRotate() {
      //這些js大部分瀏覽器無效
      // var myScreenOrientation = window.screen.orientation;
      // myScreenOrientation.lock("portrait");
      // console.log("lock");
    },

    //關閉紅包獎勵
    RedEnvelopeClose() {
      this.redEnvelopeReward = null;
    },

    startPgsLogoProgress() {
      try {
        if (this.$route.query.gameID) {
          const integerValue = parseInt(this.$route.query.gameID);
          //先判斷是不是數字
          if (
            !isNaN(integerValue) &&
            this.$route.query.gameID === "" + integerValue
          ) {
            if (integerValue > 330999) {
              this.isProgressMaskVisible = false;
              return;
            }
          }
        }

        this.isProgressMaskVisible = true;
        if (this.progressInitial == 0) {
          this.progressInitial = 1;
          this.progressElement = this.$refs.refmyBar;
          this.progressIntervalObject = setInterval(
            this.frame,
            12 * this.debug_extendRate
          );
        }

        setTimeout(() => {
          this.hideLoadingMask();
        }, 3500 * this.debug_extendRate);
      } catch (ex) {
        console.log(ex);
        this.hideLoadingMask();
      }
    },

    frame() {
      if (this.progressWidth >= 100) {
        clearInterval(this.progressIntervalObject);
        this.progressInitial = 0;
        this.hideLoadingMask();
      } else {
        this.progressWidth = this.progressWidth + 1;
        this.progressElement.style.width = this.progressWidth + "%";
        this.progressPercentage = this.progressWidth + "%";
      }
    },

    hideLoadingMask() {
      this.isProgressMaskVisible = false;
    },

    //定時確認活動
    RegularCheckActivity() {
      //避免進到其他頁還在繼續迴圈
      if (this.getPageParameterLowerFromRoute() != "game") {
        return;
      }
      setTimeout(() => {
        this.loadRedEnvelopeEventInfo();
        this.RegularCheckActivity();
      }, this.regularRefreshInterval);
    },
  },
};
</script>

<style scoped>
#game-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
}
.game-iframe {
  width: 100%;
  height: 100%;
}

@media only screen and (orientation: portrait) {
  .landscape_required {
    position: absolute;
    top: 15px;
    right: 10px;
    left: initial;
    max-width: 50px;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

@media only screen and (orientation: landscape) {
  /* 實驗性css、強制直幅layout、預計可以針對部分遊戲商 e.g. AGG */
  .force-portrait-layout {
    height: 100vw;
    width: 100vh;
    position: absolute;
    right: -100vh;
    top: 0;
    transform-origin: top left;

    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
</style>