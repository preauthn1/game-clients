var GameG = require("GameGlobal");
var GameConfig = require("GameConfig")

/** 玩家腳本 */
cc.Class({
    extends: cc.Component,

    properties: {
        label_name : cc.Label,
        label_score : cc.Label, // 分數
        addScoreWord : false, // 分數前面是否要加上 Score:

        // miss圖示
        miss: {
            default: [],
            type: cc.Node,
        },
        
        label_score1 : cc.Label, // UIGame遊戲中玩家分數
        label_rank : cc.Label, // 名次
        label_reward : cc.Label, // 獎勵分數

        pic: cc.Sprite, // 玩家頭像
    },

    clear(){

        this.setString(this.label_name, "")
        if (this.addScoreWord == true){
            let scoreText = GameG.GetLocalizedString("Score")
            this.setString(this.label_score, scoreText + "0")
        }
        else{
            this.setString(this.label_score, "0")
        }
        this.setString(this.label_score1, "0")
        this.setString(this.label_rank, "0")

        for (let i = 0; i < this.miss.length; ++i){
            this.miss[i].active = false
        }

        if (this.pic != null){
            this.pic.spriteFrame = null
        }        
    },

    setString(label, value){
        if (label == null){
            return
        }

        label.string = value
    },

    initData(player){
        if (player.UserID != GameConfig.getUserID()){
            this.setString(this.label_name, player.UserID)
        }
        else{
            this.setString(this.label_name, GameG.GetLocalizedString("YOU"))
        }

        GameG.SetRolePic(this.pic, player.UserID)   
    },    

    setReward(value){
        this.setString(this.label_reward, value.toString())
    },
    
    updateData(player){
        if (player.Score == null){
            player.Score = 0
        }

        if (this.addScoreWord == true){
            let scoreText = GameG.GetLocalizedString("Score")
            this.setString(this.label_score, scoreText + player.Score.toString())
        }
        else{
            this.setString(this.label_score, player.Score.toString())
        }
        this.setString(this.label_score1, player.Score.toString())
        this.setString(this.label_rank, "#" + player.Rank.toString())

        // 設定失敗圖是
        if (this.miss.length > 0){
            let Miss = player.Miss
            if (Miss == null){
                Miss = 0
            }
            if (Miss > 3){
                Miss = 3
            }
            for (let i = 0; i < this.miss.length; ++i){
                this.miss[i].active = false
            }
            for (let i = 0; i < Miss; ++i){
                this.miss[i].active = true
            }
        }
    },
});
