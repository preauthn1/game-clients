var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        config.SymbolAnimation = {
            "s1":"GodOfWarS1",
            "s2":"GodOfWarS2",
            "s3":"GodOfWarS3",
            "s4":"GodOfWarS4",
            "s5":"GodOfWarS5",
            "s6":"GodOfWarS6",
            "s7":"GodOfWarS7",
            "s8":"GodOfWarS8",
            "s9":"GodOfWarS9",
            "s10":"GodOfWarS10",
            "s11":"GodOfWarS11",
            "c1":"GodOfWarC1",
            "w1":"GodOfWarW1",
            "j1":"CommonJackpot",
          };
          
          config.BlurSymbolAnimation = {
            "s1":"GodOfWarS1",
            "s2":"GodOfWarS2",
            "s3":"GodOfWarS3",
            "s4":"GodOfWarS4",
            "s5":"GodOfWarS5",
            "s6":"GodOfWarS6",
            "s7":"GodOfWarS7",
            "s8":"GodOfWarS8",
            "s9":"GodOfWarS9",
            "s10":"GodOfWarS10",
            "s11":"GodOfWarS11",
            "c1":"GodOfWarC1",
            "w1":"GodOfWarW1",
            "j1":"CommonJackpotBlur",
          };

          config.SymbolAnimationSound = {
        };

        config.SLOTDETAILS = {
            MAX_PAYLINE: 100,
        };

        config.PAYLINEARR = [];

        for(let i=0;i<100;i++){
            config.PAYLINEARR.push(i);
        }

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
