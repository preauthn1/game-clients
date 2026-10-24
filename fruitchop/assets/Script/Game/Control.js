/** 監聽玩家操作並產生效果 */
cc.Class({
    extends: cc.Component,

    properties: {
        InputManager: require("InputManager"),
        Track: cc.Node,
        TrackSound: {
            default: [],
            type : cc.AudioClip,
        },         
      },

    init () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;

        this.halfWidth = this.InputManager.node.width * 0.5;
        this.halfHeight = this.InputManager.node.height * 0.5;
        
        this.soundIndex = 0
    },

    begin(){
        this.InputManager.begin()

        // 按下後產生切的軌跡
        let self = this;
        this.InputManager.touch_down_callback = function(touch){
            let effectObj = cc.instantiate(self.Track);
            effectObj.parent = self.Track.parent;
            effectObj.active = true;

            let sound = self.TrackSound[self.soundIndex]
            self.soundIndex++
            if (self.soundIndex >= self.TrackSound.length){
                self.soundIndex = 0
            }

            let track = effectObj.getComponent("Track")
            track.init(touch, self.halfWidth, self.halfHeight, sound)
        }
    },

    end(){
        this.InputManager.end()
    },

});
