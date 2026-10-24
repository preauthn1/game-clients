<template>
  <!-- 提示 1:100 轉換比例 -->
  <div v-if="isShowExchangeRateHint">
    <div class="modal-overlay pointer"></div>
    <div
      class="popup-modal-full popup-modal"
      style="min-height: 25vh; margin-top: 10%"
    >
      <div class="modal-body">
        <div class="modal-title">
          <div class="text-c">
            {{ $t("Label_Prompt") }}
          </div>
        </div>
        <div class="modal-description">
          <div class="exchangeRateDescription1">
            {{ $t("Msg_ExchangeRateDescription") }}
          </div>
          <div class="exchangeRateText">{{ exchangeRate }} COINS : 1.00</div>
        </div>

        <div>
          <button
            class="btn btn-danger exchangeRateConfirmButton"
            @click="closeAllModal()"
          >
            {{ $t("Button_Confirm") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonMixin from "../utilities/mixin/commonMixin";
import playerApi from "../utilities/api/playerApi";
import announcementApi from "../utilities/api/announcementApi";

export default {
  components: {},
  mixins: [commonMixin],
  data() {
    return {
      exchangeRate: 100,
      isShowExchangeRateHint: false,
    };
  },
  computed: {
    eventEnable() {
      return "XXXXXX";
    },
  },
  created() {},

  async mounted() {},

  methods: {
    delayShowExchangeReteHint(targetExchangeRate = 100) {
      this.exchangeRate = targetExchangeRate;

      const vm = this;
      setTimeout(() => {
        vm.isShowExchangeRateHint = true;
      }, 1000 * 4);
    },

    closeAllModal() {
      this.isShowExchangeRateHint = false;

      const targetAnnID = 5001; //請參考 DefinedAnnouncementEnum.cs
      announcementApi.setAnnouncementRead(this, targetAnnID).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
#game-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
}
.game-iframe {
  width: 100%;
  height: 100%;
}

@media only screen and (orientation: portrait) {
  .landscape_required {
    position: absolute;
    top: 15px;
    right: 10px;
    left: initial;
    max-width: 50px;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

@media only screen and (orientation: landscape) {
  /* 實驗性css、強制直幅layout、預計可以針對部分遊戲商 e.g. AGG */
  .force-portrait-layout {
    height: 100vw;
    width: 100vh;
    position: absolute;
    right: -100vh;
    top: 0;
    transform-origin: top left;

    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
</style>