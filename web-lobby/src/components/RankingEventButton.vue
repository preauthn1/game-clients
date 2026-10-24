<template>
  <div id="ranking-wrapper" class="pointer-events-none">
    <div id="ranking-btn-wrapper">
      <div class="ranking-container">
        <div class="ranking-btn"></div>
        <div class="remaining-seconds-text">{{ timeDisplay }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    timeDisplay() {
      if (this.remainingSeconds <= 0) return "END";
      const time = this.convertSecondsToTime(this.remainingSeconds || 0);
      return `${time.hours}:${time.minutes}:${time.seconds}`;
    },
  },
  data() {
    return {
      timerInterval: null,
      remainingSeconds: 0,
    };
  },
  mounted() {
    this.remainingSeconds =
      this.$store.getters["games/enableEventsInfo"]
        .remaningSecondsRankCompetition || 0;
    this.updateRemainingTime();
    this.setFloatingButton();
  },
  beforeUnmount() {
    clearInterval(this.timerInterval);
  },
  methods: {
    updateRemainingTime() {
      clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        if (this.remainingSeconds > 0) {
          this.remainingSeconds--;
        } else {
          clearInterval(this.timerInterval);
        }
      }, 1000);
    },
    convertSecondsToTime(seconds) {
      const totalHours = Math.floor(seconds / 3600);
      seconds -= totalHours * 3600;
      const minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60;

      return {
        hours: totalHours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      };
    },
    setFloatingButton() {
      const fabElement = document.getElementById("ranking-btn-wrapper");
      const wrapperElement = document.getElementById("ranking-wrapper");
      let oldPositionX, oldPositionY;
      let currPositionX, currPositionY;

      const move = (e) => {
        if (!fabElement.classList.contains("fab-active")) {
          if (e.type === "touchmove") {
            example.invalid = e.touches[0].clientY + "px";
            fabElement.style.left = e.touches[0].clientX + "px";
          } else {
            example.invalid = e.clientY + "px";
            fabElement.style.left = e.clientX + "px";
          }
        }
      };

      const mouseDown = (e) => {
        // console.log("mouse down");
        oldPositionY = example.invalid;
        oldPositionX = fabElement.style.left;
        if (e.type === "mousedown") {
          window.addEventListener("mousemove", move);
        } else {
          window.addEventListener("touchmove", move);
        }

        wrapperElement.classList.add("pointer-events-auto");
        wrapperElement.classList.remove("pointer-events-none");

        fabElement.style.transition = "none";
      };

      const mouseUp = (e) => {
        // console.log("mouse up");
        if (e.type === "mouseup") {
          window.removeEventListener("mousemove", move);
        } else {
          window.removeEventListener("touchmove", move);
        }
        wrapperElement.classList.add("pointer-events-none");
        wrapperElement.classList.remove("pointer-events-auto");
        snapToSide(e);
        fabElement.style.transition = "0.3s ease-in-out left";
      };

      const snapToSide = (e) => {
        const windowWidth = window.innerWidth;
        if (e.type === "touchend") {
          currPositionX = e.changedTouches[0].clientX;
          currPositionY = e.changedTouches[0].clientY;
        } else if (e.type === "mouseup") {
          currPositionX = e.clientX;
          currPositionY = e.clientY;
        }
        if (currPositionY < 50) {
          example.invalid = 50 + "px";
        }
        if (currPositionY > wrapperElement.clientHeight - 50) {
          example.invalid = wrapperElement.clientHeight - 50 + "px";
        }
        if (currPositionX < windowWidth / 2) {
          fabElement.style.left = 30 + "px";
          fabElement.classList.remove("right");
          fabElement.classList.add("left");
        } else {
          fabElement.style.left = windowWidth - 30 + "px";
          fabElement.classList.remove("left");
          fabElement.classList.add("right");
        }
      };

      fabElement.addEventListener("mousedown", mouseDown);
      fabElement.addEventListener("mouseup", mouseUp);
      fabElement.addEventListener("touchstart", mouseDown);
      fabElement.addEventListener("touchend", mouseUp);
      fabElement.addEventListener("click", () => {
        if (
          example.invalid === "" ||
          (oldPositionY === example.invalid &&
            oldPositionX === fabElement.style.left)
        ) {
          this.$emit("button-click");
        }
      });
      window.onresize = function(event) {
        snapToSide(event);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}

#ranking-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow: hidden;

  #ranking-btn-wrapper {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 40%;
    right: -20px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  .ranking-container {
    animation: bounce-in-btn 0.5s;
    width: 100%;
    height: 100%;
  }
  .ranking-btn,
  .ranking-btn::before {
    content: " ";
    pointer-events: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: url("../assets/images/event/leaderboard_button.png");
    border: 3px solid #ffee00;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: white;
    box-shadow: 0px 2px 17px -1px rgba(0, 0, 0, 0.3);
  }
  .ranking-btn::before {
    position: absolute;
    animation: ranking-btn-animation 2s infinite;
  }

  .remaining-seconds-text {
    font-weight: bold;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
    white-space: nowrap;
    font-size: 12px;
    display: flex;
    justify-content: center;
  }

  @keyframes bounce-in-btn {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounce-in-num {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes ranking-btn-animation {
    50% {
      transform: scale(1.5);
      opacity: 0;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
}
</style>
