var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        config.SymbolAnimation = {
            "s1":"PantherMoonNewS1Anim",
            "s2":"PantherMoonNewS2Anim",
            "s3":"PantherMoonNewS3Anim",
            "s4":"PantherMoonNewS4Anim",
            "s5":"PantherMoonNewS5Anim",
            "s6":"PantherMoonNewS6Anim",
            "s7":"PantherMoonNewS7Anim",
            "s8":"PantherMoonNewS8Anim",
            "s9":"PantherMoonNewS9Anim",
            "s10":"PantherMoonNewS10Anim",
            "s11":"PantherMoonNewS11Anim",
            "c1":"PantherMoonNewC1Anim",
            "w1":"PantherMoonNewW1Anim",
            "w2":"PantherMoonNewW1Anim",
            "j1":"CommonJackpot",
          };
          
          config.BlurSymbolAnimation = {
            "s1":"PantherMoonNewS1Anim",
            "s2":"PantherMoonNewS2Anim",
            "s3":"PantherMoonNewS3Anim",
            "s4":"PantherMoonNewS4Anim",
            "s5":"PantherMoonNewS5Anim",
            "s6":"PantherMoonNewS6Anim",
            "s7":"PantherMoonNewS7Anim",
            "s8":"PantherMoonNewS8Anim",
            "s9":"PantherMoonNewS9Anim",
            "s10":"PantherMoonNewS10Anim",
            "s11":"PantherMoonNewS11Anim",
            "c1":"PantherMoonNewC1Anim",
            "w1":"PantherMoonNewW1Anim",
            "w2":"PantherMoonNewW1Anim",
            "j1":"CommonJackpotBlur",
          };

          config.SymbolAnimationSound = {
        };

        config.SLOTDETAILS = {
            MAX_PAYLINE: 15,
        };

        config.PAYLINEARR = [
            [2, 2, 2, 2, 2],//1
            [3, 3, 3, 3, 3],//2
            [1, 1, 1, 1, 1],//3
            [3, 2, 1, 2, 3],//4
            [1, 2, 3, 2, 1],//5
            [2, 3, 3, 3, 2],//6
            [2, 1, 1, 1, 2],//7
            [3, 3, 2, 1, 1],//8
            [1, 1, 2, 3, 3],//9
            [2, 1, 2, 3, 2],//10
            [2, 3, 2, 1, 2],//11
            [3, 2, 2, 2, 3],//12
            [1, 2, 2, 2, 1],//13
            [3, 2, 3, 2, 3],//14
            [1, 2, 1, 2, 1],//15
        ];

        config.REELCLIMAX = {
            SYMBOL : ["c1"],
            PATTERN : [[true,true,true,true,true]],
            MINCOUNT:[3],
            SOUNDSTOPINDEX : [0],
            COUNT : [0],
        }

        config.SymbolAnimationSound = {
            "s1":"0",
            "s2":"1",
            "s3":"2",
            "s4":"3",
            "s5":"4",
            "c1":"5",
            "w1":"6",
            "w2":"7",
            // "s6":"5",
            // "s7":"5",
            // "s8":"5",
          };
    },

    start () {

    },

    // update (dt) {},
});
