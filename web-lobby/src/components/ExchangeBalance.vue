<template>
  <!-- 彈出訊息 -->

  <div
    v-show="isShowPopup"
    :class="'exchangeUIWrapper bounce-in-PC ' + extraClass"
  >
    <div class="exchangeUI">
      <div class="bigTitle">
        <img
          src="../assets/images/exchange/img_mobile_bg.png"
          class="topLeftBG"
        />

        <img
          src="../assets/images/exchange/user@example.invalid"
          class="topLeftBG_PC"
        />

        {{ $t("Label_Exchange") }}
      </div>

      <div class="myCloseBtn" @click="closeExchange()">x</div>

      <div class="actionTabRow">
        <div
          :class="'tabItem ' + (isCashOutTab() ? '' : 'active')"
          @click="setCurrentTab('cash_in')"
        >
          {{ $t("Label_Transfer_CashIn") }}
          <div class="activeLine"></div>
        </div>
        <div
          :class="'tabItem ' + (isCashOutTab() ? 'active' : '')"
          @click="setCurrentTab('cash_out')"
        >
          {{ $t("Label_Transfer_CashOut") }}
          <div class="activeLine"></div>
        </div>
      </div>

      <div class="balanceBlockRow" v-show="!isCashOutTab()">
        <div class="balanceBlock">
          <div>
            <img
              src="../assets/images/exchange/icon_coin.png"
              class="coin_icon"
            />
            <span class="f12-phone"> {{ $t("Label_ExistingGoldCoins") }}</span>
          </div>
          <div class="amount">{{ toFixedAmount(gameWalletBalance) }}</div>
        </div>
        <div class="balanceBlock">
          <div>
            <span class="f12-phone"> {{ $t("Label_ExistingBalance") }}</span>
          </div>
          <div class="amount">{{ toFixedAmount(platformWalletBalance) }}</div>
        </div>
      </div>

      <div class="balanceBlockRow" v-show="isCashOutTab()">
        <div class="balanceBlock">
          <div>
            <span class="f12-phone"> {{ $t("Label_ExistingBalance") }}</span>
          </div>
          <div class="amount">{{ toFixedAmount(platformWalletBalance) }}</div>
        </div>

        <div class="balanceBlock">
          <div>
            <img
              src="../assets/images/exchange/icon_coin.png"
              class="coin_icon"
            />

            <span class="f12-phone"> {{ $t("Label_ExistingGoldCoins") }}</span>
          </div>
          <div class="amount">{{ toFixedAmount(gameWalletBalance) }}</div>
        </div>
      </div>

      <!-- 
      <div class="exchangeRate">
        1 {{ $t("Label_Balance_PlatformCoin") }} = 1
        {{ $t("Label_Balance_FishingCoin") }}
      </div> -->

      <div class="inputRangeRow">
        <input
          type="range"
          class="form-range"
          v-model="form_transferAmount"
          :max="form_maxRangeValue"
        />
      </div>

      <div class="inputExchangeAmountRow">
        <div class="myLeft">
          {{ $t("Msg_Trasnfer_PleaseSelectHowMuchCoin") }}
        </div>
        <div class="myRight">
          <input
            ref="refMyInputAmount"
            type="text"
            @change="whenValueChanged()"
            v-model="form_transferAmount"
          />
        </div>
      </div>

      <div class="text-c">
        <button
          class="topupBtn"
          v-if="isCashOutTab()"
          @click="doTransfer()"
          :disabled="form_transferAmount <= 0"
        >
          {{ $t("Label_Transfer_CashOut") }}
        </button>
        <button
          class="topupBtn"
          v-else
          @click="doTransfer()"
          :disabled="form_transferAmount <= 0"
        >
          {{ $t("Label_Topup") }}
        </button>
      </div>
    </div>
  </div>

  <Loader v-if="isLoading" />
</template>



<script>
import transferApi from "../utilities/api/transferApi";
import commonMixin from "../utilities/mixin/commonMixin";

export default {
  mixins: [commonMixin],
  data() {
    return {
      rewardImage: "",
      isShowPopup: false,
      isLoading: false,
      extraClass: "",
      listOfAnnouncement: [],
      closeMessageIDs: [],

      gameWalletBalance: 0,
      platformWalletBalance: 0,
      form_transferAmount: 0,
      form_maxRangeValue: 0,

      currentTab: "cash_in", //cash_in、cash_out
    };
  },

  computed: {},

  mounted() {},

  methods: {
    showPopup(isBounceEffect = false) {
      console.log("showPopup");

      if (isBounceEffect) {
        this.extraClass = " bounce-in-active-5s ";
      }

      this.isShowPopup = true;
      this.form_transferAmount = 0;
      this.getBalance();

      setTimeout(() => {
        this.$refs.refMyInputAmount.focus();
      }, 150);
    },

    whenValueChanged() {
      console.log("whenValueChanged");
      console.log(this.form_transferAmount);
      console.log(this.form_maxRangeValue);

      if (this.form_transferAmount > this.form_maxRangeValue) {
        this.form_transferAmount = this.form_maxRangeValue;
      }

      if (this.form_transferAmount > 0) {
        this.form_transferAmount = Math.floor(this.form_transferAmount);
      }
    },

    getBalance() {
      transferApi.getTransferWalletInfo(this).then((res) => {
        if (res.code > 0) {
          alert(res.message);
        } else {
          this.gameWalletBalance = res.data.balanceAmount;
          this.platformWalletBalance = res.data.platformBalanceAmount;
          this.setCurrentTab("cash_in");
        }
      });
    },

    toFixedAmount(value) {
      return value.toFixed(2);
    },

    setCurrentTab(value) {
      this.currentTab = value;
      this.form_transferAmount = 0;

      if (this.isCashOutTab()) {
        this.form_maxRangeValue = this.gameWalletBalance;
      } else {
        this.form_maxRangeValue = this.platformWalletBalance;
      }
    },

    doTransfer() {
      if (this.form_transferAmount <= 0) {
        return;
      }

      this.playSound_click001();
      this.isLoading = true;
      transferApi
        .walletTransfer(this, this.form_transferAmount, this.currentTab)
        .then((res) => {
          if (res.code == 0) {
            this.platformWalletBalance = res.data.platformBalanceAmount;
            this.gameWalletBalance = res.data.balanceAmount;
            this.setCurrentTab(this.currentTab); //重置畫面某些數值
            this.reloadGlobalBalance();
          } else {
            alert(res.message);
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        });
    },

    reloadGlobalBalance() {
      this.$store.dispatch("games/loadBalance");
    },

    isCashOutTab() {
      return this.currentTab == "cash_out";
    },

    closeExchange() {
      this.isShowPopup = false;
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>