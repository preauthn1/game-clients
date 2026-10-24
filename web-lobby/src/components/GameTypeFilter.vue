<template>
  <div class="gametype">
    <div
      v-for="item in gameTypes"
      :key="item.gameTypeName"
      class="gametype-item"
      :class="{ selected: currentGameType == item.gameType }"
      @click="selectGameType(item.gameType)"
    >
      <img v-if="currentGameType == item.gameType" :src="item.selectedImg" />
      <img v-if="currentGameType != item.gameType" :src="item.img" />
      <div>
        {{ $t("Label_GameType_" + item.gameType) }}
      </div>
    </div>
  </div>
</template>

<script>
import commonMixin from "../utilities/mixin/commonMixin";
export default {
  mixins: [commonMixin],
  computed: {
    gameTypes() {
      const types = this.$store.getters["games/gameTypes"];

      const findAllCategory = types.filter((x) => x.gameType == -1);

      if (findAllCategory.length <= 0) {
        types.unshift({ gameType: -1, gameTypeName: this.$t("GameType_ALL") });
      }

      for (const type of types) {
        try {
          const filename = `${type.gameType}.png`;
          type.img = require(`@/assets/images/gametype/${filename}`);
          type.selectedImg = require(`@/assets/images/gametype/s${filename}`);
        } catch (_) {
          //
        }
      }
      return types;
    },
  },

  data() {
    return {
      currentGameType: -1,
    };
  },
  methods: {
    selectGameType(gameType, playClickSound = true) {
      this.currentGameType = gameType;
      this.$emit("select", gameType);

      if (playClickSound) {
        this.playSound_click001();
      }
    },
  },
  created() {
    let queryGameType = this.$route.query.gameType;
    if (queryGameType != null) {
      queryGameType = parseInt(queryGameType);
      this.selectGameType(queryGameType, false);
    }
  },
};
</script>

<style scoped>
.gametype {
  margin-top: 4px;
  margin-bottom: 8px;
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
}

.gametype-item {
  display: inline-block;
  padding: 3px;
  margin: 4px;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  min-width: 80px;
  height: 65px;
  background: linear-gradient(to bottom, #0c0c0c, #1a1a1a);
  box-shadow: 0px 3px 6px #0000005e;
  text-align: center;
}

.gametype-item img {
  width: 50px;
  height: 35px;
  object-fit: contain;
}

.selected {
  background: linear-gradient(to bottom, #f7f1c2, #c4a44b, #dbbd69);
  color: #000;
  font-weight: bold;
}

@media only screen and (min-width: 768px) {
  .gametype {
    overflow-x: auto;
    flex-wrap: nowrap;
  }

  .gametype {
    text-align: left;
    padding: 8px 0;
  }

  .gametype-item {
    padding: 4px 8px;
    border-radius: 20px;
    min-width: auto;
    height: auto;
    white-space: nowrap;
  }

  .gametype-item img {
    display: none;
  }

  .selected {
    background: #ffbb00;
  }
}
</style>
