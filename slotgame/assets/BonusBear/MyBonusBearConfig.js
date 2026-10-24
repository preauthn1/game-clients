var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        config.SymbolAnimation = {
            "s1":"BonusBearS1Anim",
            "s2":"BonusBearS2Anim",
            "s3":"BonusBearS3Anim",
            "s4":"BonusBearS4Anim",
            "s5":"BonusBearS5Anim",
            "s6":"BonusBearS6Anim",
            "s7":"BonusBearS7Anim",
            "s8":"BonusBearS8Anim",
            "s9":"BonusBearS9Anim",
            "s10":"BonusBearS10Anim",
            "w1":"BonusBearW1Anim",
            "b1":"BonusBearB1Anim",
            "j1":"CommonJackpot",
          };
          
          config.BlurSymbolAnimation = {
            "s1":"BonusBearS1Anim",
            "s2":"BonusBearS2Anim",
            "s3":"BonusBearS3Anim",
            "s4":"BonusBearS4Anim",
            "s5":"BonusBearS5Anim",
            "s6":"BonusBearS6Anim",
            "s7":"BonusBearS7Anim",
            "s8":"BonusBearS8Anim",
            "s9":"BonusBearS9Anim",
            "s10":"BonusBearS10Anim",
            "w1":"BonusBearW1Anim",
            "b1":"BonusBearB1Anim",
            "j1":"CommonJackpotBlur",
          };

        config.SLOTDETAILS = {
            MAX_PAYLINE: 25,
        };

        config.PAYLINEARR = [
            [2, 2, 2, 2, 2],//1
            [3, 3, 3, 3, 3],//2
            [1, 1, 1, 1, 1],//3
            [3, 2, 1, 2, 3],//4
            [1, 2, 3, 2, 1],//5
            [3,3,2,3,3],
			[1,1,2,1,1],
			[2,3,3,3,2],
            [2,1,1,1,2],
            [2,3,2,3,2],//10

			[2,1,2,1,2],
            [3,2,3,2,3],
            [1,2,1,2,1],
            [2,2,3,2,2],
            [2,2,1,2,2],//15

			[3,2,2,2,3],
            [1,2,2,2,1],
            [3,2,1,1,1],
            [1,2,3,3,3],
            [3,1,3,1,3],//20

			[1,3,1,3,1],
            [2,3,1,3,2],
            [2,1,3,1,2],
            [3,3,2,1,1],
            [1,1,2,3,3]//25
        ];

        config.REELCLIMAX = {
            SYMBOL : ["w1","b1"],
            PATTERN : [[true,true,true,true,true],[true,true,true,true,true]],
            MINCOUNT:[3,3],
            SOUNDSTOPINDEX : [0,5],
            COUNT : [0,0],
        }

        config.SymbolAnimationSound = {
            "b1":"1",
            "w1":"0",
            "s1":"2",
            "s2":"2",
            "s3":"2",
            "s4":"2",
            "s5":"2",
            "s6":"2",
            "s7":"2",
            "s8":"2",
            "s9":"2",
            "s10":"2",
          };

          config.SPECIALSYMBOLANIM = {
            "c1": "w1",
            "w1":"w1",
            "j1":"j1",
            "b1":"b1",
          };
          config.SYMBOLCODE = {
            SYMBOL_WILD: "w1",
            SYMBOL_FREESPINSCATTER:"w1",
          };

          config.REELSTOPDETAILS = {
            SYMBOL : [],
            PATTERN : [],
            SOUNDSTOPINDEX : [],
            COUNT : [],
          };
    },

    start () {

    },

    // update (dt) {},
});
