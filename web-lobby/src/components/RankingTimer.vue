<template>
  <div class="timer-container" v-if="items.length > 0" :class="{ hide: hide }">
    <img
      src="../assets/images/event/ranking/arrow.png"
      class="arrow-img"
      @click="toggleVisibility"
    />
    <div class="group">
      <div
        class="item"
        v-for="item in items"
        :key="item.name"
        :class="item.isProgressing ? 'ing-bg' : 'coming-bg'"
      >
        <div class="name" v-html="item.name"></div>
        <div class="remaning-time-label">
          {{ $t("Label_RemaningTime") }}
        </div>
        <div v-if="item.isExpired" class="finished-label">
          {{ $t("Label_EventFinished") }}
        </div>
        <div class="time-box" v-else-if="item.displayRemainingTime">
          <div class="value">
            {{ item.displayRemainingTime.days }}
            <div class="label">{{ $t("Label_Time_Days") }}</div>
          </div>
          <div class="value">：</div>
          <div class="value">
            {{ item.displayRemainingTime.hours }}
            <div class="label">{{ $t("Label_Time_Hours") }}</div>
          </div>
          <div class="value">：</div>
          <div class="value">
            {{ item.displayRemainingTime.minutes }}
            <div class="label">{{ $t("Label_Time_Minutes") }}</div>
          </div>
          <div class="value">：</div>
          <div class="value">
            {{ item.displayRemainingTime.seconds }}
            <div class="label">{{ $t("Label_Time_Seconds") }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonMixin from "../utilities/mixin/commonMixin";
export default {
  mixins: [commonMixin],
  props: {
    event: Object,
  },
  data() {
    return {
      items: this.event.rankCompetition.eventsDropdown.filter(
        (item) => !item.isExpired
      ),
      timerInterval: null,
      hide: false,
    };
  },

  methods: {
    updateTime() {
      this.items.forEach((item) => {
        if (!item.isProgressing && item.remainingSeconds_Begin <= 0) {
          item.isProgressing = true;
        }
        if (item.remainingSeconds_End <= 0) {
          item.isExpired = true;
        }
        if (item.remainingSeconds_Begin > 0) {
          item.remainingSeconds_Begin -= 1;
        }
        if (item.remainingSeconds_End > 0) {
          item.remainingSeconds_End -= 1;
        }

        item.displayRemainingTime = this.convertSecondsToTime(
          item.isProgressing
            ? item.remainingSeconds_End
            : item.remainingSeconds_Begin
        );
      });
    },
    toggleVisibility() {
      this.hide = !this.hide;
    },
  },

  created() {
    this.updateTime();
    this.timerInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  },

  mounted() {
    const group = document.querySelector(".group");
    if (!group) return;
    group.addEventListener("wheel", (e) => {
      e.preventDefault();
      group.scrollLeft += e.deltaY;
    });
  },

  beforeUnmount() {
    clearInterval(this.timerInterval);
  },
};
</script>

<style lang="scss" scoped>
.timer-container {
  height: 136px;
  width: 100%;
  background: #030407;
  position: relative;

  transition: height 0.5s ease;
  &.hide {
    height: 30px;
    .arrow-img {
      transform: translateX(-50%) rotate(180deg);
    }
  }

  .arrow-img {
    position: absolute;
    left: 50%;
    top: -20px;
    transform: translateX(-50%);
    transition: transform 0.5s ease;
    width: 50px;
    height: 50px;
    background: #030407;
    padding: 11px;
    border-radius: 50%;
    cursor: pointer;
  }

  .group {
    padding: 8px;
    margin-top: 22px;
    display: flex;
    justify-content: left;
    align-items: center;
    overflow-x: auto;
    white-space: nowrap;
  }

  .coming-bg {
    background: url(../assets/images/event/ranking/comingsoon_bg.png);
  }

  .ing-bg {
    background: url(../assets/images/event/ranking/ing_bg.png);
  }

  .item {
    flex-shrink: 0;
    width: 196px;
    height: 103px;
    margin-right: 10px;
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;

    .name {
      position: absolute;
      top: 11px;
      left: 40px;
      width: 150px;
      height: 38px;
      white-space: break-spaces;
      font-size: 12px;
      color: #fff;
      font-weight: bold;
    }
    .remaning-time-label {
      position: absolute;
      top: 48px;
      left: 54%;
      transform: translateX(-50%);
      font-size: 10px;
      color: #fff;
    }
  }

  .finished-label {
    position: absolute;
    top: 55px;
    left: 57%;
    transform: translateX(-50%);
    font-size: 12px;
    color: #1e1892;
    font-weight: bold;
  }

  .time-box {
    position: absolute;
    top: 64px;
    left: 58%;
    transform: translateX(-50%);
    display: flex;
    .value {
      font-size: 15px;
      color: #1e1892;
      font-weight: bold;
      position: relative;
    }
    .label {
      position: absolute;
      bottom: -7px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 8px;
      color: #1e1892;
    }
  }
}
</style>
