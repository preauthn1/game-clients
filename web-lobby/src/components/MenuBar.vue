<template>
  <div class="full-overlay" v-show="isShowMenuBar">
    <div class="flex">
      <div class="left">
        <div class="closeButton" style="cursor: initial">
          <div class="closeWrapper" @click="closeAllDialog()">
            <i class="fas fa-times-circle pointer" style="font-size: 24px"></i>
          </div>
        </div>

        <div class="barItems">
          <div class="barItem barItem-hover" @click="toLobby()">
            <i class="fas fa-home"></i>
            <span class="barName"> {{ $t("Label_GameHall") }} </span>
          </div>
          <!-- 
          <div class="barItem">
            <i class="fas fa-award"></i>
            <span class="barName">  {{ $t("Label_Events") }} </span>
          </div>
        -->

          <div
            class="barItem barItem-hover"
            @click="toTargetUrl(redEnvelopeEventDescriptionPageUrl)"
            v-if="
              isEnableRedEnvelope &&
              redEnvelopeEventDescriptionPageUrl.length > 0
            "
          >
            <i class="fas fa-gift"></i>
            <span class="barName" style="position: relative">
              {{ $t("Label_RedEnvelope") }}
            </span>
          </div>

          <div
            class="barItem barItem-hover"
            @click="toLuckyWheelPage()"
            v-if="isEnableLuckyWheel"
          >
            <i class="fas fa-gift"></i>
            <span class="barName" style="position: relative">
              {{ $t("Label_LuckyWheel") }}
              <span v-if="remaningLuckyWheelTimes > 0" class="unread-count">
                {{ remaningLuckyWheelTimes }}
              </span>
            </span>
          </div>

          <div
            class="barItem barItem-hover"
            @click="toEventQuestPage()"
            v-if="isEnableQuestEvent"
          >
            <i class="fas fa-gift"></i>
            <span class="barName" style="position: relative">
              {{ $t("Label_ChallengeQuest") }}
              <span v-if="isAnyQuestHint" class="unread-count">1</span>
            </span>
          </div>

          <div class="barItem barItem-hover" @click="toPrizeRecordPage()">
            <i class="fas fa-history"></i>
            <span class="barName"> {{ $t("Label_EventPrizeRecords") }} </span>
          </div>

          <!-- <div class="barItem" @click="toMessagePage()">
            <i class="fas fa-envelope"></i>
            <span class="barName"> {{ $t("Label_Messages") }} </span>
          </div> -->

          <div
            class="barItem barItem-hover"
            @click="showExchangePopup()"
            v-if="isLobbyTransferEnable"
          >
            <img
              src="../assets/images/exchange/icon_exchange.png"
              style="margin-right: 18px"
            />
            <span class="barName"> {{ $t("Label_Exchange") }} </span>
          </div>

          <div class="barItem barItem-hover" @click="toLanguagePage()">
            <i class="fas fa-globe"></i>
            <span class="barName"> {{ $t("Label_SelectLanguage") }} </span>
          </div>

          <div
            class="barItem"
            @click="exitToExternal()"
            v-if="isExitButtonVisible"
          >
            <i class="fas fa-sign-out-alt"></i>
            <span class="barName"> {{ $t("Label_Exit") }} </span>
          </div>

          <!-- 音效開關 -->
          <div
            class="barItem"
            style="position: relative; cursor: initial"
            v-if="isRenderElement"
          >
            <div
              class="form-check form-switch"
              style="padding-left: 0em; margin-left: -5px"
            >
              <input
                class="form-check-input sound-enable-flag"
                type="checkbox"
                role="switch"
                id="sound-enable-flag"
                v-model="isEffectSoundEnable"
                @change="changeEffectSoundFlag"
                v-bind:checked="isEffectSoundEnable"
              />

              <label
                class="form-check-label sound-enable-flag-text"
                for="sound-enable-flag"
              >
                {{ $t("Label_Setting_EffectSound_Enable") }}
                <!-- <i class="fas fa-music music-icon" style=""></i> -->
              </label>
            </div>
          </div>

          <!-- 背景音開關 -->
          <!-- <div
            class="barItem"
            style="position: relative; cursor: initial"
            v-if="isRenderElement"
          >
            <div
              class="form-check form-switch"
              style="padding-left: 0em; margin-left: -5px"
            >
              <input
                class="form-check-input sound-enable-flag"
                type="checkbox"
                role="switch"
                id="bgm-enable-flag"
                v-model="isBGMEnable"
                @change="changeBGMFlag"
                v-bind:checked="isBGMEnable"
              />

              <label
                class="form-check-label sound-enable-flag-text"
                for="bgm-enable-flag"
              >
                {{ $t("Label_Setting_Music_Enable") }}
              </label>
            </div>
          </div> -->
        </div>
      </div>
      <div class="right" @click="closeAllDialog()"></div>
    </div>
  </div>
</template>

<script>
import eventApi from "../utilities/api/eventApi";
import commonMixin from "../utilities/mixin/commonMixin";

export default {
  components: {},

  mixins: [commonMixin],

  data() {
    return {
      isEffectSoundEnable: false,
      isBGMEnable: false,
      isShowMenuBar: false,
      isRenderElement: true,
      animatedNum: false,
    };
  },

  computed: {
    playerName() {
      const playerName = this.$store.getters["user/playerName"];
      return playerName;
    },

    isExitButtonVisible() {
      const lobbySetting = this.$store.getters["games/lobbySetting"];

      if (!lobbySetting) {
        return false;
      }
      const linkUrl = lobbySetting.externalExitLink;

      if (!linkUrl) {
        return false;
      }

      if (linkUrl == "" || linkUrl == null) {
        return false;
      }

      return linkUrl.length > 0;
    },

    isLobbyTransferEnable() {
      return this.$store.getters["games/lobbySetting"].isLobbyTransferEnable;
    },

    isEnableRedEnvelope() {
      return this.$store.getters["games/enableEventsInfo"].isEnableRedEnvelope;
    },

    isEnableLuckyWheel() {
      return this.$store.getters["games/enableEventsInfo"].isEnableLuckyWheel;
    },

    isEnableQuestEvent() {
      return this.$store.getters["games/enableEventsInfo"].isEnableQuestEvent;
    },

    isAnyQuestHint() {
      return this.$store.getters["games/enableEventsInfo"].isAnyQuestHint;
    },

    redEnvelopeEventDescriptionPageUrl() {
      const myUrl =
        this.$store.getters["games/enableEventsInfo"]
          .redEnvelopeEventDescriptionPageUrl;

      if (myUrl == null) {
        return "";
      }
      return myUrl;
    },

    remaningLuckyWheelTimes() {
      try {
        let wheelInfo = this.$store.getters["games/enableEventsInfo"];
        let times = wheelInfo.remaningLuckyWheelTimes;
        return times >= 99 ? 99 : times;
      } catch (e) {
        console.log(e);
      }
      return 0;
    },
  },

  mounted() {
    this.initializeSoundEnableFlag();
    this.delayInitialAgain();
  },

  methods: {
    delayInitialAgain() {
      //因為API讀取後這邊不會刷新 所以過幾秒強制再處理一次 (很鳥的寫法)
      setTimeout(() => {
        this.initializeSoundEnableFlag();
      }, 1000);
    },

    initializeSoundEnableFlag() {
      try {
        const valueOfSound = this.getSoundFlagLocalStorage();
        const valueOfBGM = this.getBGMFlagLocalStorage();
        this.isEffectSoundEnable = this.toBoolean(valueOfSound);
        this.isBGMEnable = this.toBoolean(valueOfBGM);
      } catch (e) {
        console.log(e);
      }
    },

    toBoolean(localStorage) {
      return this.convertLocalStorageToBoolean(localStorage);
    },

    changeEffectSoundFlag() {
      try {
        this.setEffectSoundFlagLocalStorage(this.isEffectSoundEnable);
        if (this.isEffectSoundEnable) {
          this.playSound_click001();
        }
      } catch (e) {
        console.log(e);
      }
    },

    changeBGMFlag() {
      try {
        this.setBGMFlagLocalStorage(this.isBGMEnable);
        if (this.isBGMEnable) {
          this.setBGMToDefaultVolume();
        } else {
          this.setBGMVolume(0);
        }
      } catch (e) {
        console.log(e);
      }
    },

    showMenuBar() {
      this.isShowMenuBar = true;
      console.log("showMenuBar");
    },

    closeAllDialog() {
      this.isShowMenuBar = false;
      this.whenClickMenu(false);
    },

    exitToExternal() {
      let setting = this.$store.getters["games/lobbySetting"];
      let redirectUrl = setting.externalExitLink;

      //判斷目前是否在iframe中
      if (window.self !== example.invalid) {
        window.parent.location.href = redirectUrl;
      } else {
        window.location.href = redirectUrl;
      }
    },

    showExchangePopup() {
      this.isShowMenuBar = false;
      this.playSound_click001();

      this.$nextTick(() => {
        this.$emit("parentShowExchangeUI");
      });
    },

    toLobby() {
      this.isShowMenuBar = false;
      this.$router.push(window.location.pathname + "?page=lobby");
      this.whenClickMenu();
    },

    toLuckyWheelPage() {
      this.isShowMenuBar = false;
      this.$router.push(window.location.pathname + "?page=EventLuckyWheel");
      this.whenClickMenu();
    },

    toEventQuestPage() {
      this.isShowMenuBar = false;
      this.$router.push(window.location.pathname + "?page=EventQuest");
      this.whenClickMenu();
    },

    toMessagePage() {
      this.isShowMenuBar = false;
      this.$router.push(window.location.pathname + "?page=messageList");
      this.whenClickMenu();
    },

    toLanguagePage() {
      this.isShowMenuBar = false;
      this.$router.push(window.location.pathname + "?page=language");
      this.whenClickMenu();
    },

    toPrizeRecordPage() {
      this.isShowMenuBar = false;
      this.$router.push(window.location.pathname + "?page=eventPrizeRecord");
      this.whenClickMenu();
    },

    toTargetUrl(url) {
      this.isShowMenuBar = false;
      this.whenClickMenu();
      this.$router.push(url);
    },

    whenClickMenu(isReloadHint = true) {
      this.playSound_click001();

      if (isReloadHint) {
        this.$store.dispatch("games/fetchEnableEvents");
      }
    },

    reloadHintAndUnread() {},
  },
};
</script>

<style lang="scss" scoped>
.unread-count {
  font-size: 12px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  top: -10px;
  right: -25px;
}
</style>