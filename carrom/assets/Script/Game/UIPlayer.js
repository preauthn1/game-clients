var GameG = require("GameGlobal")

cc.Class({
    extends: cc.Component,

    properties: {
        label_name : cc.Label,
        label_score : cc.Label,        
        label_rank : cc.Label,
        role: cc.Node, // 玩家圖
        frame: cc.Sprite, // 玩家外框
        pic: cc.Sprite, // 玩家頭像
        icon: cc.Node, // 籌碼位置
    },

    clear(){
        this.label_name.string = ""
        
        if (this.label_score != null){
            this.label_score.string = "0"
        }

        if (this.label_rank != null){
            this.label_rank.string = "0"
        }

        if (this.pic != null){
            this.pic.spriteFrame = null
        }

        this.score = 0

        this.setTrun(true)
        this.updateFrame(0)
    },

    begin(){
        let tween = GameG.NewTween(this.role)
        tween.to(0.2, {scale: 1.1})
        tween.to(0.2, {scale: 1})
        tween.start()

        this.updateFrame(1)
    },

    /** 倒數邊框 */
    updateFrame(value){
        if (this.frame != null){
            this.frame.fillRange = value
        }
    },

    /** 設定玩家資料 */
    initData(player){
        if (this.label_name != null){
            this.label_name.string = player.UserID
        }

        GameG.SetRolePic(this.pic, player.UserID)
    },    
    
    /** 更新分數 */
    updateScore(score){
        this.score += score

        if (this.label_score != null){
            this.label_score.string = this.score.toString()
        }
    },

    updateData(player){
        if (player.Score == null){
            player.Score = 0
        }

        if (this.label_score != null){
            this.label_score.string = player.Score.toString()
        }

        if (this.label_rank != null){
            this.label_rank.string = "#" + player.Rank.toString()
        }
    },

    /** 不是正在操作玩家半透明 */
    setTrun(isShow){
        if (isShow == true){
            this.node.opacity = 255
        }
        else{
            this.node.opacity = 100
        }
    },
});
