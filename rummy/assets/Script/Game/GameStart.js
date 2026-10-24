let GameG = require("GameGlobal")
let UIManager = require("UIManager")
let networkQueue = require("NetworkQueue");
let GameData = require("GameData")
let GameManager = require("GameManager")

cc.Class({
    extends: cc.Component,

    properties : {
      sound_BGM : {
          default: null,
          type : cc.AudioClip,
      },
  },

    onLoad () {
      GameG.initSchedule(this)

      let self=this
      cc.game.on(cc.game.EVENT_HIDE, function () {
        console.log("游戏进入后台");
        GameManager.closeConnect()
      }, this);

      cc.game.on(cc.game.EVENT_SHOW, function () {
        console.log("重新返回游戏");
        GameManager.closeConnect()
        GameManager.clearGameStart()
        self.RequestReloadScene();
      }, this);      
    },

    start () {

      GameG.PlayBGM(this.sound_BGM)

      GameG.InitRolePic()
      GameG.InitCardPic()
      GameData.init()
      
      this.GameModel = this.node.getComponent("GameModel")
      this.GameLayer = cc.find("GameLayer", this.node).getComponent("GameLayer")

      this.GameModel.init(this)
      this.GameLayer.init(this)

      networkQueue.Resume()
      UIManager.HideLoading()
    },

    RequestReloadScene()
    {
      console.error("**************** RequestReloadScene")

      GameManager.closeConnect()
      GameManager.clear()
        
      cc.director.loadScene("GameLoading");        
    }, 
});
