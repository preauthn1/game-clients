<template>
  <div class="">
    <img
      class="pointer-hover top-home-btn"
      src="@/assets/images/common/home-icon-200.png"
      @click="toLobby()"
    />
  </div>

  <MenuBar ref="refMenuBar" @parentShowExchangeUI="showExchangeUI()" />
</template>

<script>
import MenuBar from "./MenuBar.vue";
import commonMixin from "../utilities/mixin/commonMixin";
import PlayerInfo from "./PlayerInfo.vue";
import HeaderLang from "./HeaderLang.vue";
import ExchangeBalance from "./ExchangeBalance.vue";

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

  mounted() {},

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

    toLobby() {
      this.playSound_click001();
      this.$router.push(window.location.pathname + "?page=lobby");
    },

    showMenuBar() {
      this.$refs.refMenuBar.showMenuBar();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>