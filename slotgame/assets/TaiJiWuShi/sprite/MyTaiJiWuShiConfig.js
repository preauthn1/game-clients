var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        config.SymbolAnimation = {
            "s1":"TaiJiS1",
            "s2":"TaiJiS2",
            "s3":"TaiJiS3",
            "s4":"TaiJiS4",
            "s5":"TaiJiS5",
            "s6":"TaiJiS6",
            "s7":"TaiJiS7",
            "s8":"TaiJiS8",
            "s9":"TaiJiS9",
            "s10":"TaiJiS10",
            "c1":"TaiJiC1",
            "w1":"TaiJiW1",
            "j1":"CommonJackpot",
          };
          
          config.BlurSymbolAnimation = {
            "s1":"TaiJiS1",
            "s2":"TaiJiS2",
            "s3":"TaiJiS3",
            "s4":"TaiJiS4",
            "s5":"TaiJiS5",
            "s6":"TaiJiS6",
            "s7":"TaiJiS7",
            "s8":"TaiJiS8",
            "s9":"TaiJiS9",
            "s10":"TaiJiS10",
            "c1":"TaiJiC1",
            "w1":"TaiJiW1",
            "j1":"CommonJackpotBlur",
          };

          config.SymbolAnimationSound = {
        };

        config.SLOTDETAILS = {
            MAX_PAYLINE: 100,
        };

        config.PAYLINEARR = [
            [2, 2, 2, 2, 2], //1
            [3, 3, 3, 3, 3], //2
            [1, 1, 1, 1, 1], //3
            [3, 2, 1, 2, 3], //4
            [1, 2, 3, 2, 1], //5
            [3, 3, 2, 3, 3], //6
            [1, 1, 2, 1, 1], //7
            [2, 3, 3, 3, 2], //8
            [2, 1, 1, 1, 2], //9
        ];

        config.REELCLIMAX = {
            SYMBOL : ["c1","j1"],
            PATTERN : [[true,true,true,true,true],[true,true,true,true,true]],
            MINCOUNT:[3,3],
            SOUNDSTOPINDEX : [0,0],
            COUNT : [0,0],
        }

        config.SymbolAnimationSound = {
            "s1":"0",
            "s2":"1",
            "s3":"2",
            "s4":"3",
            "s5":"4",
            "c1":"5",
            "w1":"6",
            // "s6":"5",
            // "s7":"5",
            // "s8":"5",
          };
    },

    start () {

    },

    // update (dt) {},
});
