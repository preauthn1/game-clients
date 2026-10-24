<template>
  <div class="d-flex flex-row">
    <div class="col-6">
      <div class="playerName mx-3" :title="playerID">
        {{ playerName }}
      </div>

      <!-- 
      <div class="balance mx-3" @click="showExchangeUI()">
        {{ playerName }}
         <img src="@/assets/images/lobby/balance.png" /> 
        <i class="fas fa-user"></i>
      </div> -->
    </div>

    <div class="col-6">
      <div class="balance mx-3" @click="showExchangeUI()">
        {{ balance }}
        <img src="@/assets/images/lobby/balance.png" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  computed: {
    balance() {
      const balance = this.$store.getters["games/balance"];
      return balance;
    },

    playerID() {
      const setting = this.$store.getters["games/lobbySetting"];
      return setting.playerID;
    },

    playerName() {
      const playerName = this.$store.getters["user/playerName"];
      return playerName;
    },
  },

  methods: {
    showExchangeUI() {
      console.log("showExchangeUI");
      this.$emit("parentShowExchangeUI");
    },
  },
};
</script>

<style scoped>
.playerName,
.balance {
  font-size: 13px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
}
.playerName {
  color: #888;
  border: 1px solid #f3ebb8;
  background: linear-gradient(to bottom, #f7f1c2, #c4a44b, #d0b766, #e8de9f);
  color: #000;
}
.balance {
  color: #888;
  border: 1px solid #444444;
  background: linear-gradient(to bottom, #0c0c0c, #1a1a1a);
  color: #f3ed26;
  position: relative;
}
.balance img {
  position: absolute;
  height: 30px;
  width: 30px;
  left: -5px;
  top: -4px;
}

@media only screen and (max-width: 480px) {
  .playerName {
    color: #888;
    border: 1px solid #4d4d4d;
    background: transparent;
    color: #dadada;
  }
}
</style>