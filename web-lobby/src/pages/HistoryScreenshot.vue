<template>
  <div class="history-page-bg" v-if="seachResult && seachResult.basicInfo">
    <div class="">
      <h3>
        <b>
          {{ $t("Title_ViewHistory") }}
        </b>
      </h3>
    </div>

    <!-- 版型1 影音回放 -->
    <div
      v-if="seachResult.basicInfo && seachResult.basicInfo.videoFormat > 0"
      class="video-min-height"
      style="margin-bottom: 20px; background: #3c3c3c"
    >
      <div class="vjs-controls-disabled"></div>

      <video
        id="video"
        style="width: 100%; height: 100%"
        class="video-js vjs-default-skin vjs-show-big-play-button-on-pause video-min-height video-bg"
        preload="auto"
      >
        <source
          :src="seachResult.basicInfo.videoUrl"
          v-if="seachResult.basicInfo.videoFormat === 88"
          type="application/x-mpegURL"
        />
        <source
          :src="seachResult.basicInfo.videoUrl"
          v-else-if="seachResult.basicInfo.videoFormat === 9"
          type="video/mp4"
        />
      </video>
    </div>
    <div v-else style="margin-top: 30px"></div>

    <!-- 版型2 PGS老虎機圖片 -->
    <div
      v-if="isPGSLayout() && seachResult.pgsSlotsHistoryInfo"
      class="video-min-height"
      style="margin-bottom: 20px"
    >
      <div style="display: flex">
        <div
          class="linePreview"
          v-for="(item, index) in seachResult.pgsSlotsHistoryInfo.lineResult"
          v-bind:key="index"
        >
          <div
            v-for="(eachIcon, index2) in item"
            class="parentWarpper"
            v-bind:key="index2"
          >
            <div class="imageWrapper">
              <img
                :src="eachIcon.imageUrl"
                class="slotsIcon"
                :title="eachIcon.code"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 版型3 原始html -->
    <div v-if="isRawHtmlLayout" style="margin-bottom: 20px">
      <div class="text-c" style="width: 400px; margin: 0 auto">
        <div v-html="myRawHtml"></div>
      </div>
    </div>

    <div class="form-info" style="max-width: 600px; margin: 0 auto">
      <div class="row">
        <div class="col-md-6">
          <div class="label-text">{{ $t("Label_GameName") }}:</div>
          <div class="label-value">{{ seachResult.basicInfo.gameName }}</div>
        </div>

        <div class="col-md-6">
          <div class="label-text">{{ $t("Label_OrderNo") }}:</div>
          <div class="label-value">
            {{ seachResult.basicInfo.betRecordNoPGS }}
          </div>
        </div>

        <div class="col-md-6">
          <div class="label-text">{{ $t("Label_PlayerName") }}:</div>
          <div class="label-value">{{ seachResult.basicInfo.playerName }}</div>
        </div>

        <div class="col-md-6">
          <div class="label-text">
            {{ $t("Label_BetTime") }} (GMT+{{ getClientTimezone() }})
          </div>
          <div class="label-value">
            {{ dateToYYYYMMDDHHMMss(seachResult.basicInfo.createTime) }}
          </div>
        </div>

        <div class="col-md-6">
          <div class="label-text">{{ $t("Label_BetAmount") }}:</div>
          <div class="label-value">{{ seachResult.basicInfo.betAmount }}</div>
        </div>

        <div class="col-md-6">
          <div class="label-text">{{ $t("Label_PayoutAmount") }}:</div>
          <div class="label-value">
            {{ seachResult.basicInfo.payoutAmount }}
          </div>
        </div>
      </div>

      <div>
        <hr />
        <div
          class="row"
          style="margin-top: 15px"
          v-if="
            seachResult.settleResultImageList &&
              seachResult.settleResultImageList.length > 0
          "
        >
          <div
            v-for="(item, index) in seachResult.settleResultImageList"
            v-bind:key="index"
            style="text-align: left"
            :class="item.isFullWidthDisplay ? 'col-md-12' : 'col-md-6'"
          >
            <div class="f14">
              {{ item.category }}
            </div>

            <div>
              <img
                class="imgItem"
                v-for="(imgItem, myIndex) in item.images"
                :src="imgItem"
                v-bind:key="myIndex"
              />

              <div
                style="
                  margin-left: 5%;
                  font-size: 16px;
                  display: inline-block;
                  vertical-align: bottom;
                "
              >
                {{ item.memoInfo }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="text-l"
        style="margin-top: 35px"
        v-if="
          seachResult.listOfRoundResultText &&
            seachResult.listOfRoundResultText.length > 0
        "
      >
        <h3><b>Tags (标签)</b></h3>

        <div
          class="v-chips dark-gery f14"
          v-for="(text, index) in seachResult.listOfRoundResultText"
          :key="index"
        >
          {{ text }}
        </div>
      </div>

      <div style="margin-top: 25px" v-if="isShowBetList()">
        <hr />
        <div>
          <table class="table">
            <tr>
              <th>Type</th>
              <th>Bet</th>
              <th v-if="!isShowBriefAmountOnly()">Win</th>
              <th v-if="!isShowBriefAmountOnly()">Tax</th>
            </tr>

            <tr v-for="(item, index) in seachResult.betList" v-bind:key="index">
              <td>
                <div v-if="item.is_image_display">
                  <img
                    v-for="(myImg, myIndex) in item.bet_type_images"
                    v-bind:key="myIndex"
                    :src="myImg"
                    style="height: 50px"
                  />
                </div>
                <div v-else>
                  {{ item.bet_type }}
                </div>
              </td>
              <td>{{ item.bet_amount }}</td>
              <td v-if="!isShowBriefAmountOnly()">{{ item.win_amount }}</td>
              <td v-if="!isShowBriefAmountOnly()">{{ item.tax_amount }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>

  <Loader v-if="isLoading" />
</template>

<script>
import commonMixin from "../utilities/mixin/commonMixin";
import otherApi from "../utilities/api/otherApi";
import videojs from "video.js";
import "videojs-contrib-hls";
import "@videojs/http-streaming";

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
      player: null,
      seachResult: null,
      isLoading: false,
      myRawHtml: "",
      listOfAnnouncement: [],
    };
  },

  methods: {
    parsedHtml(myHtml) {
      if (!myHtml) {
        return "";
      }

      if (myHtml === null || myHtml === "" || myHtml.length <= 3) {
        return myHtml;
      }

      const parser = new DOMParser();
      const elem = parser.parseFromString(myHtml, "text/html");

      return elem.body.innerText;
    },

    isShowBetList() {
      return (
        this.seachResult &&
        this.seachResult.betList != null &&
        this.seachResult.betList.length > 0
      );
    },

    isShowBriefAmountOnly() {
      return this.seachResult && this.seachResult.isShowBriefAmountOnly;
    },

    isPGSLayout() {
      return (
        this.seachResult && this.seachResult.basicInfo.gameVendorID <= 2500
      );
    },

    isRawHtmlLayout() {
      return this.seachResult && this.seachResult.basicInfo.isRawHtmlLayout;
    },

    initVideo() {
      // 播放器初始化
      this.$nextTick(() => {
        this.player = videojs(
          "video",
          {
            bigPlayButton: true,
            textTrackDisplay: false,
            posterImage: true,
            errorDisplay: false,
            controlBar: true,
            preload: "auto",
            muted: true, //静音模式 、、 解决首次页面加载播放。
          },
          function() {
            var array = document.querySelectorAll(".vjs-controls-disabled");

            array.forEach((element) => {
              console.log(element.classList);
              element.classList.remove("vjs-controls-disabled");
            });
          }
        );
      });
    },

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

    searchData() {
      const transactionNo = this.$route.query.transactionNo;
      const eazyToken = [REDACTED];
      const promoteBrand = this.$route.query.promoteBrand;

      this.isLoading = true;

      const configParam = {
        transactionNo: transactionNo,
        token: [REDACTED],
        promoteBrand: promoteBrand,
      };

      otherApi
        .getLiveGameHistoryInfo(this, configParam)
        .then((res) => {
          if (res.code != 0) {
            alert(res.message);
          }
          this.seachResult = res.data;
          this.myRawHtml = this.parsedHtml(res.data.rawHtml);

          if (
            res.data.basicInfo &&
            res.data.basicInfo.videoUrl != null &&
            res.data.basicInfo.videoUrl.length > 0
          ) {
            this.initVideo();
          }
        })
        .catch((res) => {
          console.log(res);
          alert("Fail. System under maintain or request timeout");
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    closeAllModal() {},
  },

  created() {
    this.searchData();
  },
};
</script>

<style scoped>
@media only screen and (min-width: 0px) and (max-width: 767px) {
  .event-title {
    font-size: 20px !important;
  }
}
/* 
.vjs-paused.vjs-has-started .vjs-big-play-button {
  display: block;
} */

.video-bg {
  border: solid 2px #222;
}

.linePreview {
  flex: 2;
  text-align: center;
}

.imageWrapper {
  width: 120px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  position: relative;
  height: 120px;
}

.slotsIcon {
  height: 120px;
  min-width: 100px;
  max-width: none;
  margin: 0 -100%;
}

.parentWarpper {
  display: inline-block;
  height: 125px;
}
table {
  margin-top: 25px;
  color: #fff;
  text-align: left;
  font-size: 16px;
}

table th {
  color: #aaa;
}

.vjs-default-skin {
  background: #111;
}

.table > :not(:first-child) {
  border-top: 1px solid currentColor;
  border-color: #333;
}

.imgItem {
  height: 70px;
  margin-right: 3px;
}
</style>
