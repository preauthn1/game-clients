<template>
  <div class="modal-container">
    <div class="window">
      <img class="banner" v-if="bannerUrl" :src="bannerUrl" />
      <div class="header">
        <button
          v-for="(item, index) in ['Label_RankingEvent', 'Label_EventRules']"
          :key="index"
          class="toggle-btn"
          :class="{ active: toggleIndex === index }"
          @click="toggleIndex = index"
        >
          {{ $t(item) }}
        </button>
        <button @click="$emit('close')" class="ms-auto close-button">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="content-box" v-show="toggleIndex == 0">
        <div class="dropdown mb-3">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            v-if="selectedPeriod"
          >
            {{ stripTags(selectedPeriod.name) }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a
                class="dropdown-item"
                href="#"
                v-for="item in event?.rankCompetition.eventsDropdown"
                :key="item.name"
                @click="selectPeriod(item)"
              >
                {{ stripTags(item.name) }}
              </a>
            </li>
          </ul>
        </div>
        <div class="mb-3" v-if="eventFinished">
          <i class="fas fa-clock"></i>
          <span class="ms-3">{{ timeDisplay }}</span>
        </div>

        <div class="user-info">
          <div>
            {{ $t("Label_My_Score") }}:
            <span>{{
              numberWithCommas(event?.rankCompetition.currentScore || "--")
            }}</span>
          </div>
          <div class="user-level">
            {{ $t("Label_My_Ranking") }}:
            <span> {{ currentRank }}</span>
          </div>
        </div>
        <div class="tip">{{ $t("Label_Ranking_Tip") }}</div>
        <div class="table-header">
          <div class="w-25 rank">{{ $t("Label_Rank") }}</div>
          <div class="w-25">{{ $t("Label_PlayerName") }}</div>
          <div class="w-25">{{ $t("Label_Score") }}</div>
          <div class="w-25 prize">{{ $t("Label_Prize") }}</div>
        </div>
      </div>
      <div class="data-container" v-show="toggleIndex == 0">
        <div class="data-section scroll-bar">
          <div
            class="data-item"
            v-for="data in event?.rankCompetition.rankList"
            :key="data.playerID"
            :class="{ 'is-self': data.isPlayerSelf }"
          >
            <div class="w-25 rank">{{ data.rank }}</div>
            <div class="w-25">{{ data.playerName }}</div>
            <div class="w-25 text-r">
              {{ numberWithCommasPlace2(data.score) }}
            </div>
            <div class="w-25 prize">
              {{ currency }}{{ numberWithCommas(data.prizeAmount) }}
            </div>
          </div>
        </div>
        <button @click="scrollToTop" class="scroll-to-top" v-if="showArrow">
          &#8679;
        </button>
      </div>
      <RankingTimer v-if="event && toggleIndex == 0" :event="event" />
      <div class="rule scroll-bar" v-show="toggleIndex == 1">
        <div v-html="event?.rankCompetition.eventDescription"></div>
        <div v-if="event?.supportGames.length > 0">
          <div style="width: 100%; margin-top: 50px">
            <span class="border-line"></span>
            <span class="rules-title">{{
              $t("Label_EventRestrictGames")
            }}</span>
            <span class="border-line"></span>
          </div>

          <div class="row">
            <div
              class="col-md-4 col-4"
              v-for="(item, index) in event.supportGames"
              :key="index"
            >
              <img
                :src="item.imageUrl"
                class="support-game-img"
                :title="item.gameName"
                @click="redirectToGamePage(item)"
              />
              <div style="font-size: 12px" class="text-c">
                {{ item.gameName }}
              </div>
            </div>
          </div>

          <!-- <span v-for="(game, index) in event?.supportGames" :key="game.gameID">
            {{ game.gameName }}
            <span v-if="index !== event?.supportGames.length - 1">, </span>
          </span> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RankingTimer from "./RankingTimer";
import eventApi from "../utilities/api/eventApi";
import commonMixin from "../utilities/mixin/commonMixin";
export default {
  components: {
    RankingTimer,
  },
  mixins: [commonMixin],
  data() {
    return {
      event: null,
      toggleIndex: 0,
      showArrow: false,
      dataSection: null,
      timerInterval: null,
      selectedPeriod: null,
    };
  },
  computed: {
    timeDisplay() {
      if (!this.event) return "--";
      if (this.eventFinished) return this.$t("Label_EventFinished");
      const time = this.convertSecondsToTime(this.event?.remaningSeconds || 0);
      return `${time.days}${this.$t("Label_Time_Days")} ${time.hours}:${
        time.minutes
      }:${time.seconds}`;
    },
    eventFinished() {
      return this.event && this.event.remaningSeconds <= 0;
    },
    bannerUrl() {
      return this.event?.rankCompetition.eventBannerImageUrl;
    },
    currency() {
      return this.event?.rankCompetition.displayCurrency ?? "";
    },
    currentRank() {
      const rank = this.event?.rankCompetition.currentRank;
      return !rank || rank == -1 ? "--" : rank;
    },
  },
  created() {
    eventApi.getSingleEventByType(this, 81).then((res) => {
      this.event = res.data;
      this.updateRemainingTime();
      this.selectedPeriod = this.event?.rankCompetition.eventsDropdown[0];
    });
  },
  mounted() {
    this.init();
  },
  beforeUnmount() {
    this.dataSection.removeEventListener("scroll", this.handleScroll);
    clearInterval(this.timerInterval);
  },
  methods: {
    init() {
      this.dataSection = this.$el.querySelector(".data-section");
      this.dataSection.addEventListener("scroll", this.handleScroll);
    },

    updateRemainingTime() {
      clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        if (!this.event) return;
        if (this.event.remaningSeconds > 0) {
          this.event.remaningSeconds--;
        } else {
          clearInterval(this.timerInterval);
        }
      }, 1000);
    },

    handleScroll(e) {
      this.showArrow = e.target.scrollTop > 100;
    },

    scrollToTop() {
      this.dataSection.scrollTo({ top: 0, behavior: "smooth" });
    },

    selectPeriod(item) {
      this.selectedPeriod = item;
      eventApi
        .getSingleEventByType(this, "?EventID=" + item.eventID)
        .then((res) => {
          this.event = res.data;
          this.updateRemainingTime();
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.window {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #1e202a;
  width: 100%;
  max-width: 600px;
  height: 100%;
  font-size: 16px;
  position: relative;
}

.banner {
  width: 100%;
  object-fit: contain;
}

.header {
  display: flex;
  align-items: center;
  padding: 10px;

  .toggle-btn {
    background: transparent;
    color: #d8d8d8;
    border: none;
    margin-right: 10px;
    cursor: pointer;
    padding-bottom: 2px;
    &:hover {
      color: #fff;
    }
    &.active {
      color: #fff;
      box-shadow: 0 2px 0 0 #f6a63b;
    }
  }
  .close-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    color: #fff;
    background: #4d4f60;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}

.content-box {
  padding: 10px 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
  background: #2b2d3b;
  z-index: 1;

  .dropdown {
    .btn {
      background: #2b2d3b;
      border-radius: 8px;
      font-size: 14px;
    }

    .dropdown-menu {
      background: #2b2d3b;
      border: 1px solid #4d4f60;
      border-radius: 8px;

      .dropdown-item {
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .user-info {
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1e202a;
  }
  .tip {
    text-align: left;
    font-size: 14px;
    margin-bottom: 10px;
    padding: 8px 20px;
    color: #999a99;
    border-bottom: 1px solid #4d4f60;
  }
}
.data-container {
  flex: 1;
  position: relative;
  overflow-y: hidden;
}

.scroll-to-top {
  position: absolute;
  right: 10px;
  bottom: 10px;
  background: #0000006f;
  height: 40px;
  width: 40px;
  border: none;
  color: #ffffffe0;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
}

.data-section {
  height: 100%;
  overflow-y: auto;
}

.data-item {
  min-height: 40px;
  &:nth-child(odd) {
    background: #2b2d3b;
  }

  &.is-self {
    background: #494c62;
    font-weight: bold;
  }
}

.scroll-bar {
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #585a65;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #1e202a;
  }
  scrollbar-width: thin;
  scrollbar-color: #585a65 #1e202a;
}

.table-header,
.data-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rank,
.prize {
  color: #f8b558;
}

.rule {
  text-align: left;
  padding: 10px;
  overflow-y: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>
