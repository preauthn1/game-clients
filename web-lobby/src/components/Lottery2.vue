<template>
  <div style="padding: 15px; max-width: 650px; margin: 0 auto">
    <div class="lottery" style="max-width: 450px; margin: 0 auto">
      <div
        class="turntable"
        :style="{
          background: `url('${mergedData.dotImage}') no-repeat center center / 90%`,
        }"
      ></div>

      <div class="firework" v-show="isShowFirework">
        <img src="https://example.invalid/public/firework_0.gif" />
      </div>

      <canvas
        id="canvas"
        :width="mergedData.width"
        :height="mergedData.height"
        :style="{ transform: `rotate(${rotateDeg}deg)` }"
      ></canvas>
      <img
        v-if="searchEventInfo && searchEventInfo != null"
        :src="mergedData.goImage"
        class="lottery-go"
        @click.stop="startRotation"
        id="lotteryGoPic"
      />
    </div>

    <div class="draw-times" v-if="searchEventInfo && searchEventInfo != null">
      {{ $t("Label_RemainingDrawTimes") }}：<span
        class="my-remaining-times"
        v-if="!searchEventInfo.isReachMaxDrawTime"
      >
        {{ searchEventInfo.remainingDrawTimes }}
      </span>

      <span v-if="searchEventInfo.isReachMaxDrawTime" class="v-chips red f18">
        {{ $t("Msg_ReachMaxDrawTimes") }}
      </span>

      <!-- <div style="font-size: 12px; color: #adadad">
        {{ $t("Label_CosumePointPerDraw") }}：{{
          toAmountDisplay(searchEventInfo.pointPerDraw)
        }}
      </div> -->

      <div
        class="remainingPoint"
        v-if="
          !searchEventInfo.isHidePointDescription &&
          !searchEventInfo.isReachMaxDrawTime
        "
      >
        {{ $t("Label_RemainingPoint") }}：
        {{ toAmountDisplay(searchEventInfo.remainingPoint) }}
      </div>

      <div>
        <div class="remainingTime">{{ $t("Label_RemaningTime") }}</div>
        <div>
          <span class="timeValue">{{
            calculateTimeValueByDivide(86400, 3600)
          }}</span>
          <span class="timeUnit">{{ $t("Label_Time_Days") }}</span>
          <span class="timeValue">{{
            calculateTimeValueByDivide(3600, 24)
          }}</span>
          <span class="timeUnit">{{ $t("Label_Time_Hours") }}</span>
          <span class="timeValue">{{
            calculateTimeValueByDivide(60, 60)
          }}</span>
          <span class="timeUnit">{{ $t("Label_Time_Minutes") }}</span>
          <span class="timeValue">{{ calculateTimeValueByDivide(1, 60) }}</span>
          <span class="timeUnit">{{ $t("Label_Time_Seconds") }}</span>
        </div>
      </div>
    </div>

    <div
      style="margin-top: 30px"
      v-if="searchEventInfo && searchEventInfo != null"
    >
      <div style="margin: 0 auto; margin-top: 25px">
        <span class="border-line"></span>
        <span class="rules-title">
          {{ $t("Label_EventRules") }}
        </span>
        <span class="border-line"></span>
      </div>

      <div class="row" style="padding: 10px 20px">
        <ul class="rule-list">
          <li>
            {{ $t("Label_EventTime") }}
            <span class="eventbeginEndTime">{{
              dateToYYYYMMDDHHMMss(commonEventInfo.begin)
            }}</span>
            -
            <span class="eventbeginEndTime">{{
              dateToYYYYMMDDHHMMss(commonEventInfo.end)
            }}</span>
            (GMT+{{ getClientTimezone() }})
          </li>

          <li v-if="!searchEventInfo.isHidePointDescription">
            {{ $t("Label_EventRules_WheelPoint") }}
          </li>
          <li v-if="!searchEventInfo.isHidePointDescription">
            {{
              $t("Label_EventRules_PointPerDraw", {
                point: searchEventInfo.pointPerDraw,
              })
            }}
          </li>
          <li v-if="searchEventInfo.maxDrawTime > 0">
            {{
              $t("Label_EventRules_MaxDrawTimes", {
                maxDrawTime: searchEventInfo.maxDrawTime,
              })
            }}
          </li>

          <li>
            {{ $t("Label_EventRules_SendPrizeToWallet") }}
          </li>

          <li
            v-if="searchEventInfo.isHidePointDescription && isEnableQuestEvent"
          >
            {{ $t("Label_EventRules_GetDrawTimeByQuest") }}
            <a class="link-text" @click="toEventQuestPage()">{{
              $t("Label_View")
            }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div
      style="margin-top: 50px"
      v-if="
        searchEventInfo &&
        searchEventInfo != null &&
        !searchEventInfo.isHidePointDescription
      "
    >
      <div style="margin: 0 auto; margin-top: 25px">
        <span class="border-line"></span>
        <span class="rules-title">{{ $t("Label_EventRestrictGames") }}</span>
        <span class="border-line"></span>
      </div>

      <div>
        <div class="row">
          <div
            class="col-md-4 col-4"
            v-for="(item, index) in supportGames"
            :key="index"
          >
            <img
              :src="item.imageUrl"
              class="support-game-img"
              :title="item.gameName"
              @click="clickGameItem(item)"
            />
          </div>

          <div class="col-md-4 col-4" v-if="supportGamesCountModValue() == 1">
            &nbsp;
          </div>

          <div
            class="col-md-4 col-4"
            v-if="
              supportGamesCountModValue() == 2 ||
              supportGamesCountModValue() == 1
            "
          >
            &nbsp;
          </div>
        </div>
      </div>
    </div>

    <div v-if="isShowPrizeResultModal" id="myPrizeResult" class="modal-overlay">
      <div v-show="isShowEarnRewardDiv" class="float-amount-position">
        <div>
          <span style="font-size: 16px; margin-right: 5px; color: #ccc">
            {{ $t("Label_EarnReward") }}:
          </span>
          <span class="float-reward-text" id="targetId">0</span>
        </div>
      </div>

      <div class="popup-modal">
        <div class="modal-title" style="color: #fff; font-weight: 100">
          <b> {{ $t("Label_DrawResult") }} </b>
        </div>

        <div class="content" v-if="prizeResult && prizeResult != null">
          <div class="resultPrizeRow">
            <div class="resultLabelText">{{ $t("Label_OrderNo") }}</div>
            {{ prizeResult.referenceTransactionNo }}
          </div>

          <div class="resultPrizeRow">
            <div class="resultLabelText">{{ $t("Label_Time") }}</div>
            {{ dateToYYYYMMDDHHMMss(prizeResult.referenceSendTime) }} (GMT+{{
              getClientTimezone()
            }})
          </div>

          <div class="resultPrizeRow">
            <div class="resultLabelText">{{ $t("Label_PrizeName") }}</div>
            {{ prizeMessage }}
          </div>
        </div>

        <div class="text-c" style="margin-top: 0px">
          <button
            @click="closeAllModal()"
            class="modal-button"
            style="background: #ff640a; font-size: 16px"
          >
            {{ $t("Button_Confirm") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventApi from "../utilities/api/eventApi";
import commonMixin from "../utilities/mixin/commonMixin";
import { CountUp } from "countup.js";

export default {
  name: "v-lottery",
  mixins: [commonMixin],
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {},
    },
    disabled: Boolean,
  },
  data() {
    return {
      isShowFirework: false,
      isShowPrizeResultModal: false,
      isLockClick: false,

      prizeResult: null,
      prizeMessage: "",

      isplayed: true,
      flag: false, // 转盘开关
      sound_firework: null,
      sound_rotate: null,
      searchEventInfo: null,
      commonEventInfo: null,
      supportGames: [],
      isTimerStart: false,
      itemColors: [
        //紅黃綠
        { color1: "#677da3", color2: "#677da3" },
        { color1: "#FDCF51", color2: "#ED8949" },
        { color1: "#9a67a3", color2: "#9a67a3" },
        { color1: "#98a4b8", color2: "#98a4b8" },
      ],

      isShowEarnRewardDiv: false,
      eventTypeOfThisPage: 93,
      remaningSeconds: 0,
      piece: 0,
      rotateDeg: 0,
      defaultData: {
        data: [],
        target: "",
        bgColor: "#ff5859",
        dotImage: require("../assets/images/event/wheel002_8.png"), // 之前是用這張圖、size較大。"https://example.invalid/public/wheel1.gif",
        goImage: "https://example.invalid/public/go2.gif",
        width: 500,
        height: 500,
      },
    };
  },
  computed: {
    startAngle() {
      // 獎項漸層轉動
      const areaArc = 360 / this.mergedData.data.length / 2;
      return (areaArc * Math.PI) / 180;
    },
    // 大圆盘半径
    outsideRadius() {
      return (this.mergedData.width * 12) / 30;
    },
    // 字体离圆心距离
    textRadius() {
      return this.mergedData.width * 0.3;
    },

    isEnableQuestEvent() {
      return this.$store.getters["games/enableEventsInfo"].isEnableQuestEvent;
    },

    // 防止默认值被覆盖
    mergedData() {
      return {
        ...this.defaultData,
        ...this.data,
      };
    },
  },
  watch: {
    disabled(val) {
      this.flag = val;
    },
  },
  mounted() {
    var audio1 = new Audio(require("../assets/media/fire.mp3"));
    var audio2 = new Audio(require("../assets/media/yisell.mp3"));

    this.sound_firework = audio1;
    this.sound_rotate = audio2;
    this.initialWheelInfoByApi();
  },

  methods: {
    //取得活動基本資訊
    initialWheelInfoByApi(isInitialCanvas = true) {
      eventApi
        .getSingleEventByType(this, this.eventTypeOfThisPage)
        .then((res) => {
          this.mergedData.data = res.data.luckyWheel.prizeItems;
          this.commonEventInfo = res.data;
          this.searchEventInfo = res.data.luckyWheel;
          this.supportGames = res.data.supportGames;
          this.remaningSeconds = res.data.remaningSeconds;

          if (!this.isTimerStart) {
            setInterval(() => {
              this.TimerClockCounter();
            }, 1000);
            this.isTimerStart = true;
          }

          if (this.searchEventInfo.remainingDrawTimes <= 0) {
            setTimeout(() => {
              let target = document.getElementById("lotteryGoPic");
              target.classList.add("disable-go");
            }, 1000);
          }

          if (isInitialCanvas) {
            this.initialLotteryCanvas();
          }
        });
    },

    //倒數計時
    TimerClockCounter() {
      if (this.remaningSeconds <= 0) {
        return;
      }
      this.remaningSeconds = this.remaningSeconds - 1;
    },

    calculateTimeValueByDivide(divideValue, modValue) {
      if (this.remaningSeconds <= 0) {
        return 0;
      }
      const divideResult = Math.floor(this.remaningSeconds / divideValue);
      return (divideResult % modValue).toString().padStart(2, "0");
    },

    supportGamesCountModValue() {
      if (this.supportGames.length <= 0) {
        return 0;
      }
      return this.supportGames.length % 3;
    },

    toDisplayTimeText(timeText) {
      return timeText.replaceAll("T", " ").replaceAll("Z", "") + " (GMT+0)";
    },

    initialLotteryCanvas() {
      let loopIndex = 0;
      this.mergedData.data.forEach((item) => {
        const modValue = loopIndex % 4;
        item.color1 = this.itemColors[modValue].color1;
        item.color2 = this.itemColors[modValue].color2;
        loopIndex++;
      });

      this.setLotteryHeight();
      window.addEventListener("resize", () => {
        this.setLotteryHeight();
      });
      this.drawLottery();
      const canvas = document.getElementById("canvas");
      canvas.addEventListener("transitionend", () => {
        this.flag = false;
        this.whenRotationEnd();
      });
    },

    // 设置转盘的高，使其与宽相等
    setLotteryHeight() {
      const lottery = document.querySelector(".lottery");
      lottery.style.height = lottery.clientWidth + "px";
    },
    // 绘制转盘
    drawLottery() {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      let devicePixelRatio = window.devicePixelRatio || 1;
      let backingStoreRatio =
        ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio ||
        1;
      let ratio = devicePixelRatio / backingStoreRatio;
      canvas.width = canvas.width * ratio;
      canvas.height = canvas.height * ratio;
      ctx.scale(ratio, ratio);
      ctx.translate(0.5, 0.5);
      this.ctx = ctx;

      const [w, h, centerX, centerY] = [
        this.mergedData.width,
        this.mergedData.height,
        this.mergedData.width / 2,
        this.mergedData.height / 2,
      ];
      this.centerX = centerX;
      this.centerY = centerY;
      const line_height = 17;

      console.log("--------------");
      //console.log(this.mergedData.data);

      // 根据奖品个数计算圆周角度
      let arc = Math.PI / (this.mergedData.data.length / 2);
      this.piece = arc;
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "transparent";
      ctx.font = "23px Microsoft YaHei";

      this.mergedData.data.forEach((item, i) => {
        let angle = this.startAngle + i * arc;
        var bgc = ctx.createRadialGradient(200, 200, 50, 300, 300, 350);
        // 先取得漸層的起點和終點

        bgc.addColorStop(0, item.color1);
        bgc.addColorStop(1, item.color2);

        // 設定漸層的位置和顏色
        ctx.fillStyle = bgc;
        // 把位置和顏色填入
        ctx.fillRect(0, 0, 0, 0);
        // 裁切要漸層的範圍
        // ctx.fillStyle = item.color || "transparent";
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);

        ctx.arc(
          centerX,
          centerY,
          this.outsideRadius,
          angle,
          angle + arc,
          false
        );
        // ctx.arc(centerX, centerY, this.insideRadius, angle + arc, angle, true)
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.save();

        this.drawTitle(item, angle, arc);
      });
    },
    // 重置绘图坐标
    resetCoordinate(angle, arc) {
      const ctx = this.ctx;
      let x = this.centerX + Math.cos(angle + arc / 2) * this.textRadius;
      let y = this.centerY + Math.sin(angle + arc / 2) * this.textRadius;
      // translate重新映射画布上的（0，0）位置
      ctx.translate(x, y);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
    },
    /**
     * 绘制奖品名称
     * @param {Object} item 奖品信息
     * @param {Number} angle 开始绘制的位置角度
     * @param {Number} arc 绘制的弧度
     */
    drawTitle(item, angle, arc) {
      const ctx = this.ctx;
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "#000";
      ctx.shadowBlur = 20;
      ctx.shadowOffsetY = 5;
      ctx.font = "12px";
      this.resetCoordinate(angle, arc);
      ctx.fillText(
        item.displayName,
        -ctx.measureText(item.displayName).width / 2,
        0
      );
      ctx.restore();
      ctx.save();
    },

    // 获取目标角度
    getTargetAngel() {
      let idx = this.mergedData.data.findIndex((item) => {
        return item.id === this.mergedData.target;
      });
      if (idx !== -1) {
        return ((this.piece * (idx + 0.5) + this.startAngle) * 180) / Math.PI;
      } else {
        return 360;
      }
    },

    // 开始旋转
    startRotation() {
      if (this.isLockClick) {
        return;
      }

      if (this.searchEventInfo.remainingDrawTimes <= 0) {
        return;
      }

      this.isLockClick = true;

      eventApi
        .startDraw_LuckyWheel(this)
        .then((res) => {
          if (res.code != "0") {
            alert(res.message);
            this.isLockClick = false;
          } else {
            this.mergedData.target = res.data.itemDetail.eventDrawPrizeItemID;
            this.prizeResult = res.data;
            this.sound_rotate.play();

            if (this.mergedData.target) {
              let finalDeg = this.getTargetAngel();
              this.rotateDeg +=
                270 - finalDeg + (360 - (this.rotateDeg % 360)) + 1800;
              this.setEffects();
            }
          }
        })
        .catch((err) => {
          //alert(err);
        })
        .finally(() => {});
    },

    whenRotationEnd() {
      this.isShowFirework = true;
      this.soundPause(this.sound_rotate);
      this.sound_firework.play();

      //刷新次數
      this.initialWheelInfoByApi(false);

      const vm = this;

      //如果次數都用完了 刷新menu
      setTimeout(() => {
        if (vm.searchEventInfo.remainingDrawTimes <= 0) {
          vm.$store.dispatch("games/fetchEnableEvents");
        }
      }, 1000);

      const myDrawItem = this.mergedData.data.filter(
        (x) => x.id == this.mergedData.target
      );

      //顯示抽到蝦米
      if (myDrawItem && myDrawItem.length > 0) {
        this.prizeMessage = myDrawItem[0].displayName;
        this.isShowPrizeResultModal = true;
        this.setAmountTextFloatAnimation(this.prizeResult.prizeAmount);
      }
      setTimeout(() => {
        this.isLockClick = false;
      }, 1000);

      //關閉部分效果
      setTimeout(() => {
        this.isShowFirework = false;
        this.soundPause(this.sound_firework);
        this.reloadWalletBalance();
      }, 2750);
    },

    setAmountTextFloatAnimation(amount) {
      try {
        if (amount <= 0) {
          return;
        }
        this.isShowEarnRewardDiv = false;

        setTimeout(() => {
          document.getElementById("targetId").innerHTML = "0";
          const options = {
            decimalPlaces: 2,
            duration: 2,
          };
          const countUp = new CountUp("targetId", amount, options);

          if (!countUp.error) {
            this.isShowEarnRewardDiv = true;
            countUp.start();
          } else {
            this.isShowEarnRewardDiv = false;
            console.log("error");
            console.error(countUp.error);
          }
        }, 1000); //因為煙火特效會擋注。稍微延遲下再跳數字
      } catch (e) {
        console.log(e);
      }
    },

    soundPause(targetObject) {
      targetObject.currentTime = 0;
      targetObject.pause();
    },

    closeAllModal() {
      this.isShowPrizeResultModal = false;
    },

    reloadWalletBalance() {
      try {
        this.$store.dispatch("games/loadBalance");
      } catch (error) {
        this.alertExceptionMessage(error);
      }
    },

    toEventQuestPage() {
      this.$router.push(window.location.pathname + "?page=EventQuest");
    },

    async clickGameItem(gameItem) {
      this.redirectToGamePage(gameItem);
    },

    setEffects() {
      if (!this.flag) {
        this.flag = true;
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lottery {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  /* 
  background: radial-gradient(
    ellipse at center,
    #fe0 0%,
    #fe0 40%,
    #000 60%,
    #416c85 70%,
    #120a0a 100%
  ); */
  /* 
  background: linear-gradient(
    to bottom,
    #f00 0%,
    #ffa500 33%,
    #ffa500 66%,
    #bf2d85 100%
  ); */
}

.fire {
  position: absolute;
  top: -3px;
  right: 0;
  left: 0px;
  width: 100%;
  margin: auto;
  display: none;
}
#canvas {
  width: 92%;
  /* height: 92%; */
  position: absolute;
  top: 4%;
  left: 4%;
  transition: transform 5s ease-in-out;
  /* cubic-bezier(0.48, 0.76, 0.49, 0.97) */
  /* let the browser know we plan to animate
     each view in and out */
  will-change: transform;
}
.turntable {
  height: 100%;
  /* animation: rotate180 7s linear both reverse infinite; */
  /* let the browser know we plan to animate
     each view in and out */
  will-change: transform;
}
.lottery-go {
  position: absolute;
  cursor: pointer;
  width: 25%;
  left: 50%;
  top: 47%;
  z-index: 1;
  transform: translate(-50%, -50%);
}

.lottery-go:hover {
  opacity: 0.97;
}

@keyframes rotate180 {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.firework {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999999;
}

.draw-times {
  font-size: 18px;
  margin-top: 15px;
}

.resultPrizeRow {
  text-align: left;
  font-size: 14px;
  color: #fff;
  margin-top: 10px;
}

.resultLabelText {
  text-align: left;
  font-size: 11px;
  margin-bottom: -5px;
  color: #aaa;
}

.my-remaining-times {
  font-size: 30px;
  color: #fffa55;
}

#myPrizeResult .popup-modal {
  top: 35vh;
  background-image: linear-gradient(to top, #5e260c, #ff4700);
}

#myPrizeResult .content {
  padding: 5px 10px 25px 10px;
  background: #401717;
  border-radius: 5px;
  border: solid 1px #4c341a;
  margin-top: 5px;
  margin-bottom: 20px;
}

.float-amount-position {
  position: absolute;
  top: 25%;
  text-align: center;
  width: 100%;
}

.float-reward-text {
  font-size: 40px;
  margin-right: 5%;
}

.disable-go {
  cursor: not-allowed;
}

.remainingPoint {
  font-size: 12px;
  color: rgb(173, 173, 173);
  margin-top: -5px;
}

.eventbeginEndTime {
  /* 
  color: #aaa;
  font-weight: 700; */
}

/* 桌機板 */
@media only screen and (min-width: 480px) {
  .firework img {
    width: 600px;
  }

  .float-amount-position {
    top: 28%;
  }

  .float-reward-text {
    margin-right: 1%;
  }
}

@media only screen and (min-width: 768px) {
  .timeValue {
    font-size: 32px;
  }
}
</style>
