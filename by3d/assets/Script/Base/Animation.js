var AniItem = cc.Class({
	name:"AniItem",
	properties:
	{
		aniName: "",
        loop: false,
		begin: 0,
        end: 0,
	},
})

cc.Class({
    extends: cc.Component,

    properties: {
        FrameRate: 0,
        AniList: [AniItem],
    },

    getAniData(aniName){
        for (let i = 0; i < this.AniList.length; ++i){
            if (this.AniList[i].aniName == aniName){
                return this.AniList[i]
            }
        }
        return null
    },

    play(aniName){
        this.nowAniData = this.getAniData(aniName)
        this.begin = this.nowAniData.begin / this.FrameRate
        this.end = this.nowAniData.end / this.FrameRate
        
        if (this.animation == null){
            this.animation = this.node.getComponent(cc.SkeletonAnimation)
            let clip = this.animation.getClips()[0];
            this.animation.play(clip.name)
            this.state = this.animation.getAnimationState(clip.name)
        }        
        this.animation.setCurrentTime(this.begin)
    },

    update(){
        if (this.nowAniData == null)
            return
        
        let time = this.state.time
        if (time > this.end){
            if (this.nowAniData.loop == false){
                this.animation.stop()
                this.nowAniData = null
            }
            else{
                this.animation.setCurrentTime(this.begin)
            }
        } 
    }
});
