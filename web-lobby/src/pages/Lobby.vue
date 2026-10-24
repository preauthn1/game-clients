<template>
  <Loader v-if="isLoading" />
  <div v-else class="widthHeightvh" style="display: inline">
    <!-- 版型11: 有fixHeader的  -->
    <div v-if="lobbyStyle == 11">
      <div style="margin-bottom: 30px" class="underFixHeader lobby11-body">
        <PlayerInfo
          class="d-flex d-md-none py-3"
          @parentShowExchangeUI="showExchangeUI(false)"
        />
        <Carousel v-if="isAdvertisementLayout" />
        <Banner v-else :gameType="filterGameType" />
        <div class="row align-items-center px-3">
          <div class="col-12 col-md-9">
            <GameTypeFilter @select="selectGameType" />
          </div>
          <div class="col-12 col-md-3 ms-auto">
            <div class="searchBar">
              <input
                type="text"
                class="trans-input"
                v-model="searchKeyword"
                placeholder="Search"
              />
              <i class="fas fa-search"></i>
            </div>
          </div>
        </div>

        <!-- 
        <div v-if="recentlyGames && recentlyGames.length > 0">
          <div class="gameItems-section-title">
            <i class="fas fa-history"></i>
            {{ $t("Label_RecentlyGame") }}
          </div>

          <div class="grid-container3X">
            <game-item :games="recentlyGames" :isEnableLazyLoad="false" />
          </div>
        </div>
        -->

        <div
          class="gameItems-section-title"
          style="margin-top: 10px"
          v-if="allGames && allGames.length > 0"
        >
          <!-- <i class="fas fa-list"></i> -->
          <!-- {{ $t("Label_GameList") }} -->
        </div>
        <transition name="fade">
          <div class="grid-container3X" v-if="gameShowFade">
            <game-item
              :games="filterGames"
              :isShowHighLightTag="true"
              :isEnableLazyLoad="true"
            />
          </div>
        </transition>
      </div>
    </div>

    <!-- 版型:0 初版IONSlot的  -->
    <div v-if="lobbyStyle == 0">
      <div class="grid-container">
        <game-item :games="filterGames" :isEnableLazyLoad="true" />
      </div>
    </div>

    <div v-if="isShowLabelMsg" class="text-c" style="padding: 15px">
      <div style="font-size: 16px; color: #ffcc3c">
        {{ $t("Msg_SystemMaintain") }}
      </div>
      <div style="font-size: 12px; color: #aaa; margin-top: 5px">
        System Under Maintenance
      </div>
    </div>

    <!-- 彈出訊息 -->
    <div
      v-if="isShowMaintainMsg"
      class="modal-overlay"
      @click="closeAllModal()"
    >
      <div class="popup-modal">
        <div class="modal-title">
          {{ $t("Label_Prompt") }}
        </div>

        <div class="content">
          {{ maintainMsg }}

          <div class="text-c" style="margin-top: 25px">
            <button @click="closeAllModal()" class="modal-button">
              {{ $t("Button_Confirm") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <ExchangeBalance v-if="isLobbyTransferEnable" ref="refExchangeBalanceLobby">
    </ExchangeBalance>
    <UnreadMessages />
    <Footer
      :username="playerName"
      :balance="balance"
      v-if="lobbyStyle == 0 && balance != -1"
    />
  </div>
</template>

<script>
import GameItem from "../components/GameItem.vue";
import PageToggle from "../components/PageToggle.vue";
import Footer from "../components/Footer.vue";
import UnreadMessages from "../components/UnreadMessages.vue";
import FixHeader from "../components/FixHeader.vue";
import MenuBar from "../components/MenuBar.vue";
import commonMixin from "../utilities/mixin/commonMixin";
import GameTypeFilter from "../components/GameTypeFilter.vue";
import PlayerInfo from "../components/PlayerInfo.vue";
import Banner from "../components/Banner.vue";
import Carousel from "../components/Carousel.vue";
import ExchangeBalance from "../components/ExchangeBalance.vue";

export default {
  components: {
    GameItem,
    PageToggle,
    UnreadMessages,
    ExchangeBalance,
    Footer,
    FixHeader,
    MenuBar,
    GameTypeFilter,
    PlayerInfo,
    Banner,
    Carousel,
  },

  mixins: [commonMixin],
  computed: {
    recentlyGames() {
      const games = this.$store.getters["games/recentlyGames"];
      if (this.filterGameType > -1) {
        const filterGames = games.filter(
          (item) => item.gameType == this.filterGameType
        );
        return filterGames;
      }

      return games;
    },

    allGames() {
      return this.$store.getters["games/games"];
    },

    filterGames() {
      let games = [...this.allGames];
      if (this.filterGameType > -1) {
        games = games.filter((item) => item.gameType == this.filterGameType);
      }

      if (this.searchKeyword.length <= 0) {
        return games;
      }

      const keywordLower = this.searchKeyword.toLowerCase();
      return games.filter((z) =>
        z.gameName.toLowerCase().includes(keywordLower)
      );
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
      return lobbySetting.lobbyStyle;
    },

    isLobbyTransferEnable() {
      const lobbySetting = this.$store.getters["games/lobbySetting"];
      return lobbySetting.isLobbyTransferEnable;
    },

    isShowLabelMsg() {
      const lobbySetting = this.$store.getters["games/lobbyGameExtraInfo"];
      return lobbySetting.isAllGameMaintain;
    },

    maintainMsg() {
      const lobbySetting = this.$store.getters["games/lobbyGameExtraInfo"];
      return lobbySetting.maintainMsg;
    },

    isShowMaintainMsg() {
      const lobbySetting = this.$store.getters["games/lobbyGameExtraInfo"];
      return (
        !this.isMaintainMsgRead &&
        lobbySetting.maintainMsg != null &&
        lobbySetting.maintainMsg !== ""
      );
    },

    isAdvertisementLayout() {
      const lobbySetting = this.$store.getters["games/lobbyGameExtraInfo"];
      return lobbySetting.isAdvertisementLayout;
    },

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
      searchKeyword: "",
      isLoading: false,
      isMaintainMsgRead: false,
      listOfAnnouncement: [],
      filterGameType: this.$route.query.gameType || -1,
      gameShowFade: true,
    };
  },

  mounted() {},

  created() {
    this.loadGames();
  },

  methods: {
    closeAllModal() {
      this.isMaintainMsgRead = true;
    },

    refreshAgainAfterApiInfoLoading() {
      this.showFishingTransferOrNot();
    },

    showFishingTransferOrNot() {
      if (this.balance < 1) {
        this.$nextTick(() => {
          //稍微延遲下 讓使用者可以察覺是先進到大廳
          setTimeout(() => {
            const isBounceEffect = true; //指定手機板使用彈出的效果(直接滿版視窗會有點困惑進錯頁的感覺)
            this.showExchangeUI(isBounceEffect);
          }, 500);
        });
      }
    },

    showExchangeUI(isBounceEffect = false) {
      if (!this.isLobbyTransferEnable) {
        return;
      }
      const vm = this;
      vm.$refs.refExchangeBalanceLobby.showPopup(isBounceEffect);
    },

    async loadGames() {
      this.isLoading = true;

      try {
        await this.$store.dispatch("games/loadGames");
      } catch (error) {
        this.alertExceptionMessage(error);
      }

      try {
        await this.$store.dispatch("games/loadBalance");
      } catch (error) {
        //不需要每隻都alert
      }

      this.refreshAgainAfterApiInfoLoading();
      this.isLoading = false;
    },

    selectGameType(gameType) {
      this.gameShowFade = false;
      setTimeout(() => {
        this.filterGameType = gameType;
        this.gameShowFade = true;
      }, 100);
    },
  },
};
</script>

<style scoped>
.grid-container,
.grid-container3X {
  display: inline-grid;
  grid-template-columns: 10rem 10rem 10rem;
  grid-gap: 0.5rem;
  padding: 1rem;
  margin-bottom: 18rem;
}

.grid-container3X {
  margin-top: 0rem;
  grid-row-gap: 1rem;
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 25px !important;
  justify-content: center;
}

@media only screen and (min-width: 0px) and (max-width: 767px) {
  .grid-container {
    grid-template-columns: auto auto;
  }

  .grid-container3X {
    grid-template-columns: auto auto auto;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1365px) {
  .grid-container,
  .grid-container3X {
    grid-template-columns: auto auto auto auto;
  }

  .popup-modal {
    width: 500px !important;
  }
}

@media only screen and (min-width: 1366px) {
  .grid-container,
  .grid-container3X {
    grid-template-columns: auto auto auto auto auto auto;
  }

  .grid-container3X {
    grid-template-columns: auto auto auto auto auto auto;
    grid-gap: 1.5rem;
    justify-content: left;
  }

  .popup-modal {
    width: 500px !important;
  }
}

.modal-overlay {
  width: 100%;
  height: 110vh;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
}

.popup-modal {
  width: 85%;
  padding: 10px;
  top: 5vh;
  left: 0;
  right: 0;
  position: fixed;
  min-height: 15vh;
  color: #fff;
  margin: auto;
  text-align: center;
  background: #000;
  border-radius: 10px;
  border: solid 1px #ffefa2;
}

.modal-title {
  text-align: left;
  font-size: 22px;
  margin-bottom: 15px;
  color: #fff93c;
}

.popup-modal > .content {
  font-size: 14px;
  text-align: left;
}

.text-c {
  text-align: center;
}

.modal-button {
  min-width: 80px;
  padding: 7px 10px;
  border-radius: 5px;
  background: #36974f;
  color: #fff;
  border: none;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
