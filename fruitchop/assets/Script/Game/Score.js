var GameG = require("GameGlobal");

var SoundItem = cc.Class({    
    name : "SoundItem",

    properties: {
        Sound: {
            default: null, 
            type: cc.AudioClip,
        },
        min : 0,
        max : 0,
    },    
})

/** combo分數計算 */
cc.Class({
    extends : cc.Component,

    properties : {
        iComboTime : 3.5,
        Label_combo : cc.Label,
        Label_add : cc.Label,
        alphaTime : 0.3,
        Sound: {
            default: [],
            type : SoundItem,
        },             
    },

    clear(){
        this.iComboCount=1;
        this.iComboAccTimer = 9999999; // 第一次砍到水果後的累計時間
        this.node.opacity = 0;
        this.Label_combo.string="";
        this.Label_add.string="";

        this.soundAccTime = 0; // 同意種音效累計播放時間
        this.preSoundName = ""; // 前一個播放校
    },

    getScore() {
        if (this.iComboAccTimer <= this.iComboTime) {
            this.iComboCount++;
        } else {
            this.iComboCount = 1;
            this.iComboAccTimer = 0;
        }

        // 基本分數
        let score_base = 5
        // 額外獲得的分數=10*(一次手勢切到的水果數量-1)
        let score_add = 10 * (this.iComboCount - 1)
        
        this.showCombo(score_add)

        let score = score_base + score_add

        return score
    },

    showCombo(score){
        // {0} FRUIT COMBO + {1}
        // 2 FRUIT
        // COMBO
        // + 12
        if (this.iComboCount <= 1){
            return
        }

        this.Label_combo.string = this.iComboCount.toString()
        this.Label_add.string = "+" + score.toString()

        this.node.stopAllActions()
        this.node.opacity = 0;

        let tween = GameG.NewTween(this.node)
        tween.to(this.alphaTime, {opacity: 255})
        tween.delay(this.iComboTime - this.alphaTime * 2)
        tween.to(this.alphaTime, {opacity: 0})
        tween.start()

        let Sound = this.getSound()
        // 和前一個音效不同，直接播
        if (this.preSoundName != Sound.name){
            this.PlaySound(Sound)
        }
        // 超過此時間才播放，避免太頻繁
        else if (this.soundAccTime > 0.5){
            this.PlaySound(Sound)
        }        
    },

    PlaySound(Sound){
        this.preSoundName = Sound.name
        this.soundAccTime = 0
        GameG.PlaySound(Sound)
    },

    /** 找尋目前分數應該要播放哪一個音效 */
    getSound(){
        for (let i = 0; i < this.Sound.length; ++i){
            let data = this.Sound[i]
            if (this.iComboCount >= data.min && this.iComboCount <= data.max){
                return data.Sound
            }
        }
        return null
    },

    update(dt) {
        this.iComboAccTimer+=dt;
        this.soundAccTime+=dt;
    },
});
