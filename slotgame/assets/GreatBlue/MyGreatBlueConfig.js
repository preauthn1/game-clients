var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        config.SymbolAnimation = {
            "s1":"GreatBlueS1",
            "s2":"GreatBlueS2",
            "s3":"GreatBlueS3",
            "s4":"GreatBlueS4",
            "s5":"GreatBlueS5",
            "s6":"GreatBlueS6",
            "s7":"GreatBlueS7",
            "s8":"GreatBlueS8",
            "s9":"GreatBlueS9",
            "s10":"GreatBlueS10",
            "s11":"GreatBlueS11",
            "c1":"GreatBlueC1",
            "w1":"GreatBlueW1",
            "j1":"CommonJackpot",
          };
          
          config.BlurSymbolAnimation = {
            "s1":"GreatBlueS1",
            "s2":"GreatBlueS2",
            "s3":"GreatBlueS3",
            "s4":"GreatBlueS4",
            "s5":"GreatBlueS5",
            "s6":"GreatBlueS6",
            "s7":"GreatBlueS7",
            "s8":"GreatBlueS8",
            "s9":"GreatBlueS9",
            "s10":"GreatBlueS10",
            "s11":"GreatBlueS11",
            "c1":"GreatBlueC1",
            "w1":"GreatBlueW1",
            "j1":"CommonJackpotBlur",
          };

          config.SymbolAnimationSound = {
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
            [2, 2, 3, 2, 2],//16
            [2, 2, 1, 2, 2],//17
            [3, 3, 1, 3, 3],//18
            [1, 1, 3, 1, 1],//19
            [3, 1, 1, 1, 3],//20
            [1, 3, 3, 3, 1],//21
            [2, 1, 3, 1, 2],//22
            [2, 3, 1, 3, 2],//23
            [3, 1, 3, 1, 3],//24
            [1, 3, 1, 3, 1],//25
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
