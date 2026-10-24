<template>
  <!-- 彈出訊息 -->
  <div v-if="listOfAnnouncement.length > 0">
    <div class="modal-overlay pointer" @click="closeFirstAnnouncement()"></div>
    <div
      :class="
        ' popup-modal-full my-animate-before ' +
        item.extraCssClass +
        (notEmptyNullText(item.imageUrlMiddle) ? 'trans-bg' : 'dark-bg')
      "
      v-for="(item, index) in listOfAnnouncement"
      v-show="isArrayFirst(item)"
      :key="index"
    >
      <div class="modal-body">
        <i
          class="fas fa-times closeButton"
          @click="closeAndSetMessageRead(item.announcementID)"
        ></i>

        <div
          class="modal-title"
          v-if="notEmptyNullText(item.title)"
          @click="closeAndSetMessageRead(item.announcementID)"
        >
          {{ item.title }}
        </div>

        <div
          class="modal-description"
          v-if="notEmptyNullText(item.description)"
        >
          {{ item.description }}
        </div>

        <div class="content">
          <img
            style="width: 100%"
            :src="item.imageUrlMiddle"
            v-if="notEmptyNullText(item.imageUrlMiddle)"
            :class="item.linkType > 0 ? 'pointer' : ''"
            @click="clickToLinkPage(item, true)"
          />
        </div>

        <div v-if="item.linkType > 2000 && item.linkType != 2009">
          <button
            class="btn btn-primary learnMoreBtn"
            @click="goToPageByLinkType(item)"
          >
            <i class="far fa-question-circle question-icon"></i>
            {{ $t("Label_LearnMore") }}
          </button>
        </div>
      </div>
    </div>
    <Loader v-if="isLoading" />
  </div>
</template>

<script>
import announcementApi from "../utilities/api/announcementApi";
import commonMixin from "../utilities/mixin/commonMixin";

export default {
  mixins: [commonMixin],
  data() {
    return {
      rewardImage: "",
      isShowPopup: false,
      isLoading: false,
      listOfAnnouncement: [],
      closeMessageIDs: [],
      remaningSeconds: 5000,
    };
  },

  computed: {},

  mounted() {
    this.getUnreadAnnouncement();

    setInterval(() => {
      this.TimerClockCounter();
    }, 1000);
  },

  methods: {
    isArrayFirst(item) {
      if (this.listOfAnnouncement.length <= 0) {
        return false;
      }
      return this.listOfAnnouncement[0].announcementID == item.announcementID;
    },

    delayAddCssClassToFirstItem() {
      if (this.listOfAnnouncement.length <= 0) {
        return false;
      }
      const vm = this;
      const firstItem = this.listOfAnnouncement[0];

      //先還原所有css
      vm.listOfAnnouncement.forEach((item) => {
        item.extraCssClass = "";
      });

      setTimeout(() => {
        vm.listOfAnnouncement.forEach((item) => {
          if (firstItem.announcementID == item.announcementID) {
            item.extraCssClass = " my-animate-show ";
          }
        });
      }, 250);
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

    closeFirstAnnouncement() {
      announcementApi;
      if (this.listOfAnnouncement.length <= 0) {
        return false;
      }
      this.closeAndSetMessageRead(this.listOfAnnouncement[0].announcementID);
    },

    closeAndSetMessageRead(announcementID) {
      if (this.listOfAnnouncement.length >= 2) {
        this.isLoading = true;
      }

      announcementApi
        .setAnnouncementRead(this, announcementID)
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 150);

          //移除陣列
          this.listOfAnnouncement = this.listOfAnnouncement.filter(
            (item) => item.announcementID !== announcementID
          );

          this.delayAddCssClassToFirstItem();
        })
        .finally(() => {});
    },

    checkIsSkipReadAnnouncementAgain() {
      const lastReadTime = localStorage.getItem("last_read_ts");
      let lastReadTs = 0;

      try {
        lastReadTs = Number(lastReadTime);
      } catch (e) {
        console.log(e);
      }

      const currentTS = this.getCurrentTS();

      //為了避免API被過度存取 (N分鐘最多重撈一次訊息)
      const diffTS = currentTS - lastReadTs;

      if (diffTS > 1000 * 60) {
        return false;
      }

      return true;
    },

    getCurrentTS() {
      return +new Date();
    },

    async getUnreadAnnouncement() {
      //為了避免API被過度存取 (N分鐘最多重撈一次訊息)
      if (this.checkIsSkipReadAnnouncementAgain()) {
        return;
      }

      const currentTS = this.getCurrentTS();
      localStorage.setItem("last_read_ts", currentTS);

      await announcementApi
        .getUnreadAnnouncement(this)
        .then((res) => {
          this.listOfAnnouncement = res.data.items;

          if (this.listOfAnnouncement.length > 0) {
            this.isShowPopup = true;
            this.delayAddCssClassToFirstItem();
          }
        })
        .finally(() => {});
    },

    clickToLinkPage(item, isOpenImage) {
      if (item.linkType === 99) {
        const urlParsing = this.replaceToValidRoutePushUrl(item.linkReference);
        if (urlParsing.isSameOrigin) {
          this.$router.push(urlParsing.url);
        } else {
          location.href = item.linkReference;
        }
      } else if (item.linkType === 98) {
        this.$router.push(item.linkReference);
      } else if (item.linkType === 21) {
        //視為已讀
        this.closeAndSetMessageRead(item.announcementID);
        setTimeout(() => {
          window.location.href =
            window.location.href.split("?")[0] +
            "?page=game&gameID=" +
            item.linkReference;
        }, 500);
      } else {
        //開啟圖片(但總覺得又會讓使用體驗變差...先不要了)
        if (
          this.notEmptyNullText(item.imageUrlMiddle) &&
          item.linkType == 777
        ) {
          window.open(item.imageUrlMiddle, "_blank");
        }
      }
    },

    goToPageByLinkType(item) {
      this.closeAndSetMessageRead(item.announcementID);
      const linkType = item.linkType;
      if (linkType == 2001) {
        this.$router.push(window.location.pathname + "?page=EventQuest");
      } else if (linkType == 2005) {
        this.$router.push(window.location.pathname + "?page=EventLuckyWheel");
      } else {
        alert("undefined target page.");
      }
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

.question-icon {
  font-size: 24px;
  /* margin-top: 15px; */
  line-height: 30px;
  vertical-align: bottom;
}

.learnMoreBtn {
  font-size: 20px !important;
  margin-top: 15px;
}

@media only screen and (min-width: 1366px) {
  .popup-modal-full:not(.dark-bg) .question-icon {
    font-size: 30px;
    line-height: 40px;
  }

  .popup-modal-full:not(.dark-bg) .learnMoreBtn {
    font-size: 28px !important;
  }
}
</style>