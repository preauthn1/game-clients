<template>
  <div class="underFixHeader list-page-max-width">
    <div>
      <!-- <h1 style="margin-top: 60px">可進行任務</h1> -->
    </div>
    <!-- tttttt -->

    <div
      class="row"
      style="padding: 3px"
      v-if="questApiRawResponse && questApiRawResponse.isAnyDailyQuest"
    >
      <div>
        <div class="dailyTimer">
          <img class="mr-1" src="../assets/images/event/quest/money-bag.png" />
          <span class="timerText">
            {{ $t("Label_DailyQuestRemainingTime") }}:
            <span class="timeValue">{{
              calculateTimeValueByDivide(3600, 24)
            }}</span>
            :
            <span class="timeValue">{{
              calculateTimeValueByDivide(60, 60)
            }}</span>
            :
            <span class="timeValue">{{
              calculateTimeValueByDivide(1, 60)
            }}</span>
          </span>
        </div>
      </div>

      <div class="col-md-6" v-for="(item, index) in listOfItems" :key="index">
        <div class="questBlock v2">
          <div class="content-left-image">
            <div class="image-wrapper">
              <!-- <img
                v-if="item.isSpecificSlotsGame"
                style="padding: 2px"
                src="../assets/images/event/quest/casino100.png"
              />
              <img
                v-else-if="item.isSpecificPokerGame"
                style="padding: 1px"
                src="../assets/images/event/quest/poker.png"
              />
              <img
                style="padding: 0px"
                v-else
                src="../assets/images/event/quest/rewards.png"
              /> -->

              <img
                v-if="item.isSpecificSlotsGame"
                style="padding: 4px; top: -3px"
                src="../assets/images/event/quest/bw001.png"
              />
              <img
                v-else-if="item.isSpecificPokerGame"
                style="padding: 1px; top: 1px"
                src="../assets/images/event/quest/bw002.png"
              />
              <img
                style="padding: 4px"
                v-else
                src="../assets/images/event/quest/bw003.png"
              />

              <!-- <img
                src="https://example.invalid/public/fd3207fc-d8c3-465e-a454-0a3aa7d60c05.png"
              /> -->

              <!-- <img src="../assets/images/event/quest/rewards.png" /> -->

              <div class="completed-mask" v-if="item.isCompleted"></div>
              <div class="completed-mask-check" v-if="item.isCompleted">
                <i class="fas fa-check"></i>
              </div>
            </div>
          </div>

          <div class="content-left">
            <div class="quest-des">
              <span v-if="item.specificGameID > 0" class="gameOfQuest">{{
                item.specificGameName
              }}</span>
              <span v-else class="gameOfQuest">
                {{ $t("Label_SpecificGame") }}</span
              >
              <span>
                {{
                  geti18nText(item.i18nKey_RuleName, {
                    mustValue: toAmountDisplay(item.mustLargeThanValue),
                  })
                }}
              </span>
            </div>

            <div>
              <div class="progress">
                <div
                  :class="' progress-bar ' + determinProgressStyle(item)"
                  role="progressbar"
                  :aria-valuenow="calculateProgressPercentage(item)"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :style="'width:' + calculateProgressPercentage(item) + '%'"
                ></div>

                <div
                  :class="
                    ' fixedProgressValue ' +
                    (calculateProgressPercentage(item) === 100
                      ? 'progress-completed-text'
                      : '')
                  "
                >
                  <span v-if="item.isCompleted" style="color: #aaa">
                    {{ $t("Label_ReceiveCompleted") }}
                  </span>
                  <span v-else>
                    ({{ item.currentValue }}/{{ item.mustLargeThanValue }})
                  </span>
                </div>
              </div>
            </div>

            <div class="prize-item-footer">
              <div class="left1">
                <div class="prize-item-desc">
                  <i class="fa fa-gift" style="margin-right: 3px"></i>
                  {{ $t(item.i18nKey_PrizeName) }}
                  x
                  <span class="">
                    {{ item.prizeAmountOrQuantity }}
                  </span>
                </div>

                <div
                  v-if="item.specificGameID > 0"
                  class="specificGameHint"
                  @click="showSupportGames(item)"
                >
                  <i class="fas fa-info-circle"></i>
                  {{ $t("Label_SpecificGame") }}
                </div>

                <img
                  @click="showSupportGames(item)"
                  class="quest-game-img"
                  v-if="item.specificGameID > 0"
                  :src="item.specificGameImageUrl"
                />

                <div
                  @click="showSupportGames(item)"
                  v-else-if="item.questSupportGames.length > 0"
                  class="specificGameHint"
                >
                  <i class="fas fa-info-circle"></i>
                  {{
                    $t("Label_SupportNumberOfGames", {
                      number: item.questSupportGames.length,
                    })
                  }}
                </div>
              </div>

              <div class="right1">
                <div class="prize-btn">
                  <button
                    class="btn btn-secondary disabled"
                    disabled="disabled"
                    v-if="item.isCompleted"
                  >
                    {{ $t("Label_ReceiveCompleted") }}
                  </button>
                  <button
                    class="btn btn-warning btn-completed"
                    v-else-if="item.isReadyToReceive"
                    @click="receiveQuestReward(item)"
                  >
                    {{ $t("Label_ReceiveReward") }}
                  </button>
                  <button
                    class="btn btn-secondary"
                    v-else
                    @click="toLobbyOrGamePage(item)"
                  >
                    {{ $t("Label_GoToGamePage") }}
                  </button>
                </div>
                <div class="expiredDays" v-if="item.isDailyEvent">
                  {{ $t("Label_DailyQuest") }}
                  <i class="fas fa-clock"></i>
                </div>
                <div
                  class="expiredDays"
                  v-else-if="!item.isCompleted && item.remainingExpiredDays > 0"
                >
                  {{
                    $t("Label_ExpiredInFewDays", {
                      myValue: item.remainingExpiredDays,
                    })
                  }}

                  <i class="fas fa-clock"></i>
                </div>
                <div
                  class="expiredDays"
                  v-else-if="
                    !item.isCompleted && item.remainingExpiredHours > 0
                  "
                >
                  {{
                    $t("Label_ExpiredInFewHour", {
                      myValue: item.remainingExpiredDays,
                    })
                  }}

                  <i class="fas fa-clock"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 活動規則 -->
    <div style="margin-top: 30px" v-if="isListNotEmpty">
      <div style="margin: 0 auto; margin-top: 25px">
        <span class="border-line"></span>
        <span class="rules-title">
          {{ $t("Label_EventRules") }}
        </span>
        <span class="border-line"></span>
      </div>

      <div class="row" style="padding: 10px 25px; margin-bottom: 50px">
        <ul class="rule-list">
          <li>{{ $t("Label_EventRules_WheelPoint") }}</li>
          <li>{{ $t("Label_EventRules_EventSupportGameWarning") }}</li>
          <li>{{ $t("Label_EventRules_QuestPointDelayAndCalculate") }}</li>
          <li v-if="questApiRawResponse && questApiRawResponse.isAnyDailyQuest">
            {{ $t("Label_EventRules_DailyQuestResetTime") }}
          </li>

          <!-- 
          <li>部分幾款遊戲名稱雷同。請務必確認任務指定的是哪一款</li>
          <li>活動進度從活動期間開始統計。並非使用玩家帳號至今的累計數據</li> -->
        </ul>
      </div>
    </div>

    <!-- 彈出 活動資訊/額外訊息/支援遊戲 -->
    <div
      v-if="isShowSupportGames"
      id="myPrizeResult"
      :class="'modal-overlay '"
      @click="closeModal()"
    >
      <div
        class="popup-modal lg"
        v-if="targetPopupQuest && targetPopupQuest != null"
      >
        <div class="modal-title" style="color: #fff; font-weight: 100">
          <b> {{ $t("Msg_ClickAndRedirectToGame") }} </b>

          <img
            src="../assets/images/lobby/close_button.png"
            class="closeButton"
          />

          <hr />
        </div>

        <div class="content">
          <div class="text-c" style="font-size: 18px">
            <i
              class="fas fa-star"
              style="font-size: 18px; margin-right: 3px; color: #fcff4f"
            ></i>

            <span class="gameOfQuest"> {{ $t("Label_SpecificGame") }} </span>
            <span>
              {{
                geti18nText(targetPopupQuest.i18nKey_RuleName, {
                  mustValue: toAmountDisplay(
                    targetPopupQuest.mustLargeThanValue
                  ),
                })
              }}
            </span>
          </div>

          <div class="text-c" v-if="!targetPopupQuest.isDailyEvent">
            <div class="event-begin-end-time">
              {{ dateToYYYYMMDDHHMMss(targetPopupQuest.eventBeginTime) }} -
              {{ dateToYYYYMMDDHHMMss(targetPopupQuest.eventEndTime) }}
              <i class="fas fa-clock"></i>
            </div>
          </div>

          <div class="content-game-list">
            <div class="f18 text-c">
              <span style="font-weight: 400; color: #ffa115">
                {{ $t("Label_EventRestrictGames") }}
              </span>

              <div style="margin-top: -10px; margin-bottom: 5px">
                <span style="color: #888; font-size: 11px">
                  *{{ $t("Msg_ClickAndRedirectToGame") }}
                </span>
              </div>
            </div>

            <div class="row list-of-support-games">
              <div
                class="col-md-4 col-4"
                v-for="(item, index) in popupSupportGames"
                :key="index"
              >
                <div class="game-img-wrapper">
                  <img
                    :src="item.imageUrl"
                    class="game-img"
                    :title="item.gameName"
                    @click="clickGameItem(item)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Loader v-if="isLoading" />
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
      isRenderElement: true,
      isShowSupportGames: false,
      targetPopupQuest: null,
      questApiRawResponse: null,
      listOfItems: [],
      popupSupportGames: [],
      isLoading: false,
      isListApiFinish: false,
      remaningSecondsOfDailyQuest: 7200,
      targetPopup: {
        title: "title",
        description: "description",
      },
    };
  },

  created() {
    this.getQuestList();

    //倒數計時
    setInterval(() => {
      this.TimerClockCounter();
    }, 1000);

    console.log(
      this.geti18nText(
        "Enums_EventRuleTypeEnum_ValueCompare_TotalPoint_SingleGame_MustLargeThan"
      )
    );

    this.setMessageHintToRead();

    // setTimeout(() => {
    //   this.isRenderElement = false;
    //   this.isRenderElement = true;
    // }, 3000);
  },

  methods: {
    geti18nText(i18nKey, param) {
      var value = this.$t(i18nKey.toString(), param);
      return value;
    },

    //倒數計時
    TimerClockCounter() {
      if (this.remaningSecondsOfDailyQuest <= 0) {
        return;
      }
      this.remaningSecondsOfDailyQuest = this.remaningSecondsOfDailyQuest - 1;
    },

    calculateTimeValueByDivide(divideValue, modValue) {
      if (this.remaningSecondsOfDailyQuest <= 0) {
        return 0;
      }
      const divideResult = Math.floor(
        this.remaningSecondsOfDailyQuest / divideValue
      );
      return (divideResult % modValue).toString().padStart(2, "0");
    },

    showSupportGames(item) {
      this.isShowSupportGames = true;
      this.popupSupportGames = item.questSupportGames;
      this.targetPopupQuest = item;
      this.whenClickAnyButton();
    },

    closeModal() {
      this.isShowSupportGames = false;
      //this.whenClickAnyButton();
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

    determinProgressStyle(item) {
      if (item.isCompleted) {
        return "progress-receive-completed";
      }

      if (this.calculateProgressPercentage(item) >= 100) {
        return "progress-completed";
      }

      return "bg-warning";
    },

    calculateProgressPercentage(item) {
      return Math.floor((100 * item.currentValue) / item.mustLargeThanValue);
    },

    whenClickAnyButton() {
      this.playSound_click001();
    },

    getQuestList() {
      this.isLoading = true;

      eventApi
        .getEventQuest(this)
        .then((res) => {
          this.questApiRawResponse = res.data;
          this.listOfItems = res.data.questItems;
          this.remaningSecondsOfDailyQuest = res.data.dailyQuestRemaningSeconds;
        })
        .finally(() => {
          this.isListApiFinish = true;
          this.isLoading = false;
        });
    },

    delayCloseLoading(timeout) {
      setTimeout(() => {
        this.isLoading = false;
      }, timeout);
    },

    clickGameItem(gameItem) {
      this.whenClickAnyButton();
      this.isLoading = true;
      this.delayCloseLoading(2000);
      this.redirectToGamePage(gameItem);
    },

    setMessageHintToRead() {
      //訊息已讀
      announcementApi.setMessageHintToRead(this, 1001).then((x) => {
        this.$store.dispatch("games/setQuestHintToRead");
      });
    },

    refreshGlobalDrawTickets() {
      this.$store.dispatch("games/fetchEnableEvents");
    },

    toLobbyOrGamePage(item) {
      this.whenClickAnyButton();
      if (item.specificGameID > 0) {
        this.isLoading = true;
        this.delayCloseLoading(2000);
        this.redirectToGamePage(item.questSupportGames[0]);
      } else if (item.questSupportGames.length > 0) {
        this.showSupportGames(item);
      } else {
        this.$router.push(window.location.pathname + "?page=lobby");
      }
    },

    receiveQuestReward(item) {
      const payload = {
        eventID: item.eventID,
        eventPrizeBundleID: item.eventPrizeBundleID,
      };

      this.whenClickAnyButton();
      this.isLoading = true;
      eventApi
        .receiveQuestReward(this, payload)
        .then((res) => {
          if (res.code > 0) {
            alert(res.message);
          } else {
            item.isCompleted = true;
            this.refreshGlobalDrawTickets();
          }
        })
        .finally(() => {
          this.isListApiFinish = true;
          setTimeout(() => {
            this.isLoading = false;
          }, 250);
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

.popup-modal {
  width: 95%;
}

.content-game-list {
  max-height: 450px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 100px;
}

.quest-game-img {
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
}

@media only screen and (min-width: 0px) and (max-width: 767px) {
  .event-title {
    font-size: 20px !important;
  }
}

@media only screen and (min-width: 768px) {
  .content-game-list {
    max-height: 550px;
  }
}
</style>
