<template>
  <div class="fixHeader">
    <div class="headerLayout">
      <div class="header-left" @click="showMenuBar()">
        <i
          class="fas fa-bars menu-bar"
          style="font-size: 24px; position: relative"
          @click="playSound()"
        >
          <span v-if="isAnyLobbyMenuHint" class="unread-count">1</span>
        </i>
      </div>

      <div class="header-middle">
        <img src="@/assets/images/lobby/pgs_logo_250p.png" />
      </div>

      <div class="header-right">
        <div class="d-flex flex-row justify-content-end">
          <PlayerInfo
            class="d-none d-md-flex col-11"
            @parentShowExchangeUI="showExchangeUI()"
          />
          <HeaderLang class="col-1" @click="playSound()" />
        </div>
      </div>
    </div>
  </div>

  <MenuBar ref="refMenuBar" @parentShowExchangeUI="showExchangeUI()" />
  <ExchangeBalance
    v-if="isLobbyTransferEnable"
    ref="refExchangeBalanceLobbyFixHeader"
  >
  </ExchangeBalance>
</template>

<script>
import MenuBar from "../components/MenuBar.vue";
import commonMixin from "../utilities/mixin/commonMixin";
import PlayerInfo from "../components/PlayerInfo.vue";
import HeaderLang from "../components/HeaderLang.vue";
import ExchangeBalance from "../components/ExchangeBalance.vue";

export default {
  mixins: [commonMixin],
  components: { MenuBar, PlayerInfo, HeaderLang, ExchangeBalance },
  data() {
    return {
      animatedNum: false,
    };
  },

  computed: {
    isAnyLobbyMenuHint() {
      var hintInfo = this.$store.getters["games/enableEventsInfo"];
      return hintInfo.isAnyQuestHint || hintInfo.remaningLuckyWheelTimes > 0;
    },
    isLobbyTransferEnable() {
      const lobbySetting = this.$store.getters["games/lobbySetting"];
      return lobbySetting.isLobbyTransferEnable;
    },
  },

  created() {
    this.setHeight();
  },

  mounted() {
    this.getWheelEventInfo();
  },

  methods: {
    setHeight() {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },

    playSound() {
      this.playSound_click001();
    },

    showMenuBar() {
      this.$refs.refMenuBar.showMenuBar();
    },

    showExchangeUI(isBounceEffect = false) {
      if (!this.isLobbyTransferEnable) {
        return;
      }
      const vm = this;
      vm.$refs.refExchangeBalanceLobbyFixHeader.showPopup(isBounceEffect);
    },

    async getWheelEventInfo() {
      try {
        let setting = await this.$store.dispatch("games/fetchEnableEvents");
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>