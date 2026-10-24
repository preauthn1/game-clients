
var config = require('BaseConfig');

cc.Class({
  extends: cc.Component,

  properties: {
  },

  // use this for initialization
  onLoad: function () {

    config.SCRIPT_PREFIX = "PantherMoon";

    config.ANIMSTRINGARR = [
      "PantherMoonS1Anim",
      "PantherMoonS2Anim",
      "PantherMoonS3Anim",
      "PantherMoonS4Anim",
      "PantherMoonS5Anim",
      "PantherMoonScaleAnim",
      "PantherMoonScaleAnim",
      "PantherMoonScaleAnim",
      "PantherMoonScaleAnim",
      "PantherMoonScaleAnim",
      "PantherMoonScaleAnim",
      "PantherMoonC1Anim",
      "PantherMoonW1Anim",
    ];

    config.SLOTDETAILS = {
      MAX_PAYLINE: 15,
      DENOMINATION_PREFIX: "RM",
      RESULT_SYMBOL_COUNT: 15,
      SERVER_NORMAL_SPIN_MODE: 0,
      SERVER_FREESPIN_MODE: 1,
      TWEEN_TIME_DURATION: 2,
    };

    config.REELDETAILS = {
      REEL_WIDTH: 170,
      SLOT_MACHINE_WIDTH: 870,//870
      SLOT_MACHINE_HEIGHT: 490,//490
      REEL_DELAY_TIME: 0.05,
      NUM_REEL: 5,
      NUM_ROW: 3,
      SYMBOL_HEIGHT_OFFSET: 0,
      SYMBOL_WIDTH: 170,//170
      SYMBOL_HEIGHT: 160,//160
      FRAME_WIDTH: 170,//185
      FRAME_HEIGHT: 160,//175
      SYMBOL_HEIGHT_PADDING: 0,
      SYMBOL_WIDTH_PADDING: 5,
      PER_CYCLE_SPIN_DURATION: 0.03,
      ALL_PAYLINE_SHOW_DURATION: 4,
      SINGLE_PAYLINE_SHOW_DURATION: 1,
      STARTING_PREPARE_TO_STOP_TIME: 1,
      NORMAL_PREPARE_TO_STOP_TIME: 0,
      CLIMAX_PREPARE_TO_STOP_TIME: 1,
      BONUS_TITLE_END_TIME: 2,
      DEFAULT_BONUS_FREESPIN: 8,
      DEFAULT_BONUS_MULTIPLIER: 2,
      REELPOS_NEUTRAL_Y: 0,
      REELPOS_DOWN_Y: -50,
      REELPOS_UP_Y: 50,
    };

    config.PAYLINEARR = [
      [2, 2, 2, 2, 2],//0
      [2, 2, 2, 2, 2],//1
      [1, 1, 1, 1, 1],//2
      [3, 3, 3, 3, 3],//3
      [1, 2, 3, 2, 1],//4
      [3, 2, 1, 2, 3],//5
      [2, 1, 1, 1, 2],//6
      [2, 3, 3, 3, 2],//7
      [1, 1, 2, 3, 3],//8
      [3, 3, 2, 1, 1],//9
      [2, 3, 2, 1, 2],//10
      [2, 1, 2, 3, 2],//11
      [1, 2, 2, 2, 1],//12
      [3, 2, 2, 2, 3],//13
      [1, 2, 1, 2, 1],//14
      [3, 2, 3, 2, 3],//15
    ];

    config.SPINSTATE_CONSTANTS = {
      SPINSTATE_INIT: "Init",
      SPINSTATE_IDLE: "Idle",
      SPINSTATE_SPIN: "Spin",
      SPINSTATE_RESULT: "Result",
    };

    config.SPINSTATE_TRANS_CONSTANTS = {
      SPINTRANS_INIT_TO_IDLE: "InitToIdle",
      SPINTRANS_IDLE_TO_SPIN: "IdleToSpin",
      SPINTRANS_SPIN_TO_RESULT: "SpinToResult",
      SPINTRANS_RESULT_TO_IDLE: "ResultToIdle",
    };

    config.GAMESTATE_CONSTANTS = {
      GAMESTATE_INIT: "Init",
      GAMESTATE_NORMAL: "NormalSpin",
      GAMESTATE_FREESPIN: "FreeSpin",
    };

    config.GAMESTATE_TRANS_CONSTANTS = {
      GAMETRANS_INIT_TO_NORMAL: "InitToNormalSpin",
      GAMETRANS_FREESPIN_TO_NORMAL: "FreeSpinToNormal",
      GAMETRANS_NORMAL_TO_FREESPIN: "NormalSpinToFreeSpin",
    };
  },
});
