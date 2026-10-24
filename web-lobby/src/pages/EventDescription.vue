<template>
  <div
    class="eventDescriptionPage"
    :class="
      (eventDescription == null ? '' : 'color' + eventDescription.colorType) +
      headerMarginCssStyle()
    "
  >
    <div
      class="right-top-close-button hide-in-PC"
      @click="closeAndReturn()"
      v-if="!hasFixHeader()"
    >
      <i class="fas fa-chevron-left"></i>
    </div>

    <div
      style="width: 100%"
      v-if="eventDescription && eventDescription != null"
    >
      <div
        style="padding: 0px; position: relative"
        v-if="eventDescription.topTitle"
      >
        <img
          class="fixed-branding-logo"
          src="@/assets/images/common/logo_pgs_2.png"
          v-if="eventDescription.brandingType == 0"
        />

        <img
          class="fixed-branding-logo"
          src="@/assets/images/common/logo_ionslot_2.png"
          v-if="eventDescription.brandingType == 1"
        />

        <img
          v-if="isNotEmptyText(eventDescription.topTitle.imageUrlMiddle)"
          class="w100"
          :src="eventDescription.topTitle.imageUrlMiddle"
        />
      </div>

      <div class="event-title-section" v-if="eventDescription.topTitle">
        <div class="event-title">
          <div style="display: inline-block; position: relative">
            {{ eventDescription.topTitle.title }}
          </div>
        </div>

        <div v-if="!eventDescription.isHideBeginEndTime">
          <div class="event-time">
            {{ $t("Label_EventTime") }}
          </div>

          <div style="font-size: 12px">
            {{ eventDescription.displayBeginTimeTW }} ~
            {{ eventDescription.displayEndTimeTW }} (GMT+8)
          </div>

          <div
            class="mt-1"
            v-if="eventDescription && eventDescription.remaningSeconds > 0"
          >
            <div>
              <span class="timeValue">{{
                calculateTimeValueByDivide(86400, 3600)
              }}</span>
              <span class="timeUnit">{{ $t("Label_Time_Days") }}</span>
              <span class="timeValue">{{
                calculateTimeValueByDivide(3600, 24)
              }}</span>
              <span class="timeUnit">{{ $t("Label_Time_Hours") }}</span>
              <span class="timeValue">{{
                calculateTimeValueByDivide(60, 60)
              }}</span>
              <span class="timeUnit">{{ $t("Label_Time_Minutes") }}</span>
              <span class="timeValue">{{
                calculateTimeValueByDivide(1, 60)
              }}</span>
              <span class="timeUnit">{{ $t("Label_Time_Seconds") }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="section-panel">
        <div v-for="(item, index) in eventDescription.contents" :key="index">
          <!-- 版型51-標準版說明區塊 -->
          <div class="content" v-if="item.layoutType == 51">
            <div>
              <img
                v-if="isNotEmptyText(item.imageUrlTop)"
                class="img-top"
                :src="item.imageUrlTop"
              />
            </div>

            <div class="section-title" v-if="isNotEmptyText(item.title)">
              {{ item.title }}
            </div>

            <div
              class="text-content"
              v-if="isNotEmptyText(item.description)"
              v-html="item.description"
            ></div>

            <div>
              <img
                v-if="isNotEmptyText(item.imageUrlBottom)"
                class="img-bottom"
                :src="item.imageUrlBottom"
              />
            </div>

            <div
              v-if="item.isForPreviewOnly"
              class="text-c"
              style="color: #ff4a4a; font-size: 12px; padding: 5px"
            >
              僅在預覽模式顯示
            </div>
          </div>

          <!-- 版型71-注意事項 -->
          <div class="ruleHint" v-if="item.layoutType == 71">
            <div class="mb-2 text-c">
              <div class="hint-title">
                {{ $t("Label_EventNote") }}
              </div>
            </div>

            <div class="text-content">
              <div v-html="item.description"></div>
            </div>

            <div
              v-if="item.isForPreviewOnly"
              class="text-c"
              style="color: #ff4a4a; font-size: 12px; padding: 5px"
            >
              僅在預覽模式顯示
            </div>
          </div>

          <div class="v-divide"></div>
        </div>
      </div>

      <!-- 語系選擇 -->
      <div class="" style="padding-bottom: 30px">
        <div class="text-c">
          <div style="margin: 0 auto; margin-top: 25px; margin-bottom: 10px">
            <span class="border-line"></span>
            <span class="rules-title">
              <i class="fas fa-globe"></i>
              {{ $t("Label_SelectLanguage") }}</span
            >
            <span class="border-line"></span>
          </div>

          <div class="lang-select" @click="switchLang('en-us')" title="Endligh">
            <div class="langImageWrapper">
              <img src="@/assets/images/language/uk.png" class="langImage" />
            </div>
          </div>

          <div
            class="lang-select"
            @click="switchLang('id-id')"
            title="bahasa Indonesia"
          >
            <div class="langImageWrapper">
              <img src="@/assets/images/language/id.png" class="langImage" />
            </div>
          </div>

          <div
            class="lang-select"
            @click="switchLang('zh-cn')"
            title="簡體中文"
          >
            <div class="langImageWrapper">
              <img src="@/assets/images/language/cn.png" class="langImage" />
            </div>
          </div>
        </div>
      </div>

      <!-- 支援遊戲 -->
      <div class="mySupportGames" v-if="eventDescription.supportGames">
        <div style="margin: 0 auto; margin-top: 25px">
          <span class="border-line"></span>
          <span class="rules-title">{{ $t("Label_EventRestrictGames") }}</span>
          <span class="border-line"></span>
        </div>

        <div style="padding-bottom: 50px">
          <div class="row">
            <div
              class="col-md-4 col-4"
              v-for="(item, index) in eventDescription.supportGames"
              :key="index"
            >
              <img
                :src="item.imageUrl"
                class="support-game-img"
                :title="item.gameName"
                @click="clickGameItem(item)"
              />
            </div>

            <div class="col-md-4 col-4" v-if="supportGamesCountModValue() == 1">
              &nbsp;
            </div>

            <div
              class="col-md-4 col-4"
              v-if="
                supportGamesCountModValue() == 2 ||
                supportGamesCountModValue() == 1
              "
            >
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonMixin from "../utilities/mixin/commonMixin";
import eventApi from "../utilities/api/eventApi";

export default {
  components: {},

  mixins: [commonMixin],
  computed: {
    isCN() {
      const lang = localStorage.getItem("LOCALE");

      if (lang === "zh-cn" || lang === "zh-tw") {
        return true;
      }

      return false;
    },
  },

  data() {
    return {
      eventDescription: null,
      isLoading: false,
      isMaintainMsgRead: false,
      isShowSelectLanguage: true,
      listOfAnnouncement: [],
      remaningSeconds: 0,
    };
  },

  created() {
    this.getEventDescription();
  },

  methods: {
    isNotEmptyText(text) {
      if (text == null) {
        return false;
      }
      if (text === "") {
        return false;
      }
      if (text.length <= 0) {
        return false;
      }

      return true;
    },

    headerMarginCssStyle() {
      if (this.hasFixHeader()) {
        return " underFixHeader ";
      }
      return "";
    },

    hasFixHeader() {
      const page = this.getPageParameterLower();
      if (page == "eventDescriptionWithHeader".toLowerCase()) {
        return true;
      }
      return false;
    },

    supportGamesCountModValue() {
      if (this.eventDescription == null) {
        return 0;
      }
      const supportGames = this.eventDescription.supportGames;

      if (supportGames.length <= 0) {
        return 0;
      }
      return supportGames.length % 3;
    },

    getIsPreviewParameter() {
      const isPreview = this.$route.query.isPreview;

      if (!isPreview) {
        return false;
      }

      if (isPreview === "true" || isPreview === "True") {
        return true;
      }

      return false;
    },

    switchLang(lang) {
      let myUrl = window.location.href;
      myUrl = myUrl.replace("&isLogHistory=1", "");
      myUrl = myUrl.replace("&lang=zh-cn", "");
      myUrl = myUrl.replace("&lang=en-us", "");
      myUrl = myUrl.replace("&lang=id-id", "");
      myUrl = myUrl.replace("&lang=ms-my", "");
      myUrl = myUrl.replace(window.location.origin, "");
      myUrl = myUrl.replace(window.location.pathname, "");

      //放棄用router push了
      location.href = myUrl + "&isLogHistory=1&lang=" + lang;
    },

    //倒數計時
    TimerClockCounter() {
      if (this.remaningSeconds <= 0) {
        return;
      }

      this.remaningSeconds = this.remaningSeconds - 1;
    },

    calculateTimeValueByDivide(divideValue, modValue) {
      if (this.remaningSeconds <= 0) {
        return 0;
      }
      const divideResult = Math.floor(this.remaningSeconds / divideValue);
      return (divideResult % modValue).toString().padStart(2, "0");
    },

    getEventDescription() {
      const eventID = this.$route.query.eventID;
      const isPreview = this.getIsPreviewParameter();
      const checkCode = this.$route.query.checkCode;
      const lang = this.getLanguageByQueryString();

      eventApi
        .getEventDescription(this, eventID, isPreview, checkCode, lang)
        .then((res) => {
          this.eventDescription = res.data;
          this.remaningSeconds = this.eventDescription.remaningSeconds;
          setInterval(() => {
            this.TimerClockCounter();
          }, 1000);
        });
    },

    closeAndReturn() {
      const backUrl = history.state.back;
      if (backUrl && backUrl != null && backUrl.length > 0) {
        history.back();
      } else {
        const lastUrl = localStorage.getItem("path_history_last");
        const urlParsing = this.replaceToValidRoutePushUrl(lastUrl);
        if (urlParsing.isSameOrigin) {
          this.$router.push(urlParsing.url);
        } else {
          location.href = urlParsing.url;
        }
      }
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

    async clickGameItem(gameItem) {
      this.redirectToGamePage(gameItem);
    },

    closeAllModal() {
      this.isMaintainMsgRead = true;
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 0px) and (max-width: 767px) {
  .event-title {
    font-size: 20px !important;
  }
}

.right-top-close-button {
  position: absolute;
  color: #343434;
  text-shadow: 1px 1px 1px #c0bb58;
  left: 5px;
  top: 3px;
  font-size: 24px;
  z-index: 999;
}
</style>
