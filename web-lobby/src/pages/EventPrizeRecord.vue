<template>
  <div class="underFixHeader list-page-max-width">
    <div
      class="text-c"
      style="font-size: 14px; padding: 25px"
      v-if="!isListNotEmpty && isListApiFinish"
    >
      {{ $t("Msg_NoMessages") }}
      <div class="text-c">
        <i
          class="fas fa-envelope"
          style="font-size: 22px; margin-top: 10px; color: #ddd"
        ></i>
      </div>
    </div>

    <div
      style="color: #ccc; font-size: 12px; margin-bottom: 5px"
      v-if="isListNotEmpty"
    >
      <div style="display: flex; padding: 0px 8px">
        <div class="text-l msg-maxSize" style="flex: 2">
          <i class="fas fa-exclamation-circle"></i>
          {{ $t("Msg_OnlyShowNewstNumberOfSize", { size: "20" }) }}
        </div>
        <!-- 
        <div class="text-r" style="flex: 2; color: #aaa">
          {{ $t("Timezone") }}: GMT+{{ getClientTimezone() }}
        </div>
         -->
      </div>
    </div>

    <div
      class="messages no-pointer dark"
      v-for="(item, index) in listOfItems"
      :key="index"
      @click="showPopupMessageDetail(item)"
    >
      <div class="titleRow">
        <div class="title-text">
          <span>
            <i class="fas fa-gift gift"></i>
            <i class="fas fa-p"></i>
            <i class="fas fa-point"></i>
          </span>

          <span class="ml-1">
            {{ item.eventPrizeTypeName }}
          </span>

          {{ item.title }}
        </div>

        <div class="col-amount">
          <span class="amountText">
            {{ toAmountDisplay(item.amount) }}
          </span>

          <!-- <span class="icon-point" v-if="item.isBalanceCash">P</span> -->

          <img
            src="@/assets/images/lobby/balance.png"
            v-if="item.isBalanceCash"
            class="coin-img"
          />
        </div>
      </div>

      <div class="divide-row"></div>

      <div class="contentRow">
        <div class="col-left">
          <div class="v-chips dark-gery" v-if="item.gameID > 0">
            {{ item.gameName }}
          </div>
        </div>
        <div class="time col-right">
          {{ dateToYYYYMMDDHHMMss(item.receiveTime) }}
        </div>
      </div>
    </div>

    <!-- 彈出明細 -->
    <div class="modal-overlay" v-if="isShowPopup" @click="closePopup()">
      <div class="popup-modal" style="margin-top: 50px">
        <div class="modal-body">
          <!-- <i
            class="fas fa-times-circle closeButton"
            style="font-size: 20px"
            @click="closeAndSetMessageRead(targetPopup.message)"
          ></i> -->

          <div class="modal-title" style="font-size: 15px; margin-bottom: 5px">
            <div style="color: #fff">
              <span class="message-type-label">
                {{ $t("Label_Tag_System") }}</span
              >
              {{ targetPopup.title }}
            </div>

            <div
              class="text-r"
              style="flex: 2; font-size: 11px; color: #ccc; margin-bottom: 5px"
            >
              {{ targetPopup.createTimeText }}
            </div>
          </div>

          <div
            class="modal-description"
            style="
              color: #ddd;
              padding: 8px;
              border-radius: 5px;
              background: #333;
              min-height: 200px;
              margin-bottom: 0px;
            "
          >
            {{ targetPopup.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonMixin from "../utilities/mixin/commonMixin";
import announcementApi from "../utilities/api/announcementApi";
import eventApi from "../utilities/api/eventApi";

export default {
  components: {},

  mixins: [commonMixin],
  computed: {
    isListNotEmpty() {
      return this.listOfItems && this.listOfItems.length > 0;
    },
  },

  data() {
    return {
      displayTimezone: 8,
      listOfItems: [],
      isShowPopup: false,
      isListApiFinish: false,
      targetPopup: {
        title: "title",
        description: "description",
      },
    };
  },

  created() {
    this.getPrizeRecordList();
  },

  methods: {
    closePopup() {
      this.isShowPopup = false;
      this.getPrizeRecordList();
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

    getPrizeRecordList() {
      eventApi
        .getEventPrizeRecords(this)
        .then((res) => {
          this.listOfItems = res.data.items;
        })
        .finally(() => {
          this.isListApiFinish = true;
        });
    },
  },
};
</script>

<style scoped>
.f-r {
  float: right;
}

.gift {
  color: #c74242;
}

.col-amount {
  flex: 1;
  text-align: right;
}

.amountText {
  color: #fff68e;
  font-size: 16px;
}

.coin-img {
  width: 17px;
  height: 17px;
  margin-left: 3px;
  vertical-align: sub;
}

@media only screen and (min-width: 0px) and (max-width: 767px) {
  .event-title {
    font-size: 20px !important;
  }
}
</style>
