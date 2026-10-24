var GameG = require("GameGlobal")

var ActionType = cc.Enum({
    Node: 0,
    Music: 1,
    Audio: 2,
    Particle: 3,
    Spine: 4,
    Animation: 5,    
    DragonBones: 6,
    MovieClip: 7
});

let AniAnimsEnum = cc.Enum({ 'default': -1 });

let SpineSkinsEnum = cc.Enum({ 'default': -1 });
let SpineAnimsEnum = cc.Enum({ '<None>': 0 });

let DragonBonesArmaturesEnum = cc.Enum({ 'default': -1 });
let DragonBonesAnimsEnum = cc.Enum({ '<None>': 0 });


function setEnumAttr (obj, propName, enumDef) {
    cc.Class.Attr.setClassAttr(obj, propName, 'type', 'Enum');
    cc.Class.Attr.setClassAttr(obj, propName, 'enumList', cc.Enum.getList(enumDef));
}

cc.Class({
    extends: cc.Component,

    editor : {
        executeInEditMode : true,
        menu : 'Action/UIActionData'
    },

    properties: {
        type : {
            displayName: "播放類型",
            type: cc.Enum(ActionType),
            default: ActionType.Node,
            notify(oldValue){
                this.path = "",
                this.animationName = "",
                this.spineSkinName = "",
                this.spineAnimationName = "",
                this.dragonBonesArmatureName = "",
                this.dragonBonesAnimationName = "",
                this.soundName = ""
            },
        },
        path :
        {
            displayName: "元件(指定後自動生成)",
            default: "",
            readonly: true,
            visible(){ return !(this.checkType(ActionType.Music) || this.checkType(ActionType.Audio)) },
            tooltip:"Read Only",
        },
        baseNode :
        {
            displayName: "##### 指定元件 #####",
            default: null,
            type: cc.Node,
            visible(){ return this.checkType(ActionType.Node) },
            notify(oldValue){
                if(oldValue == null){
                    this.setPath(this.baseNode)
                    this.baseNode = null;
                }
            },
            tooltip:"baseNode"
        },        
        audioClip :
        {
            displayName: "##### 指定元件 #####",
            default: null,
            type: cc.AudioClip,
            visible(){ return this.checkType(ActionType.Music) || this.checkType(ActionType.Audio) },
            notify(oldValue){
                if(oldValue == null){
                    this.soundName = this.audioClip.name;
                    this.audioClip = null;
                }
            },
            tooltip:"audioClip"
        },
        particle:
        {
            displayName: "##### 指定元件 #####",
            default: null,
            type: cc.ParticleSystem,
            visible(){ return this.checkType(ActionType.Particle) },
            notify(oldValue){
                if(oldValue == null){
                    this.setPath(this.particle.node)
                    this.particle = null;
                }
            },
            tooltip:"particle"
        },
        
        MovieClip:{
            displayName: "##### 指定元件 #####",
            default: null,
            type: cc.VideoPlayer,
            visible(){ return this.checkType(ActionType.MovieClip) },
            notify(oldValue){
                if(oldValue == null){
                    this.setPath(this.MovieClip.node)
                    this.MovieClip = null;
                    
                }
            },
            tooltip:"MovieClip"
        },

        // ************************ Animation ************************
        animation :
        {
            displayName: "##### 指定元件 #####",
            default: null,
            type: cc.Animation,
            visible(){ return this.checkType(ActionType.Animation) },
            notify(oldValue){
                if(oldValue == null){
                    this.setPath(this.animation.node)
                    this.animationData = this.animation
                    this.animation = null;
                    this.aniAnimation = 0;
                }
            },
            tooltip:"animation"
        },
        aniAnimation: {
            displayName: '### 選擇 Animation ###',
            type: AniAnimsEnum,
            visible(){ return this.checkType(ActionType.Animation) },  
            get () {
                if (this.animationData) {
                    let clips = this.animationData.getClips()
                    for (let i = 0; i < clips.length; ++i)
                    {
                        if (clips[i].name === this.animationName){
                            return i;
                        }
                    }
                }
                return 0;
            },
            set (value) {
                this.animationName = ""
                if (this.animationData) {
                    let clips = this.animationData.getClips()
                    if (clips[value] != null){
                        this.animationName = clips[value].name
                        this._refreshInspector_Ani();
                    }
                }
            },
        },              
        animationName : 
        {
            displayName: "Animation名稱",
            default: "",
            visible(){ return this.checkType(ActionType.Animation) },
        },        

        // ************************ Spine ************************
        spine :
        {
            displayName: "##### 指定元件 #####",
            default: null,
            type: sp.Skeleton,
            visible(){ return this.checkType(ActionType.Spine) },
            notify(oldValue){
                if (oldValue == null){
                    this.skeletonData = this.spine.skeletonData
                    this.setPath(this.spine.node)
                    this.spine = null;
                    this.defaultSkin = "";
                    this.spineSkin = 0;
                }
            },
            tooltip:"spine"
        },
        spineSkin: {
            type: SpineSkinsEnum,
            visible(){ return this.checkType(ActionType.Spine) },
            displayName: "### 選擇 Skin ###",
            get () {
                if (this.skeletonData) {
                    var skinsEnum = this.skeletonData.getSkinsEnum();
                    if(skinsEnum) {
                        if(this.defaultSkin === "") {
                            if(skinsEnum.hasOwnProperty(0)) {
                                this.spineSkin = 0;
                                return 0;
                            }
                        } else {
                            var skinIndex = skinsEnum[this.defaultSkin];
                            if (skinIndex !== undefined) {
                                return skinIndex;
                            }
                        }
                    }
                }
                return 0;
            },
            set (value) {
                var skinsEnum;
                if (this.skeletonData) {
                    skinsEnum = this.skeletonData.getSkinsEnum();
                }

                var skinName = skinsEnum[value];
                if (skinName !== undefined) {
                    this.defaultSkin = skinName;
                    this.spineSkinName = this.defaultSkin
                    this._refreshInspector_Spine();
                }
                else{
                    this.spineSkinName = ""
                }
            },
        },
        spineSkinName : 
        {
            displayName: "Skin名稱",
            default: "",
            visible(){ return this.checkType(ActionType.Spine) },
        },
        spineAnimation: {
            displayName: '### 選擇 Animation ###',
            type: SpineAnimsEnum,
            visible(){ return this.checkType(ActionType.Spine) },  
            get () {
                var animationName = this.spineAnimationName;
                if (this.skeletonData && animationName) {
                    var animsEnum = this.skeletonData.getAnimsEnum();
                    if (animsEnum) {
                        var animIndex = animsEnum[animationName];
                        if (animIndex !== undefined) {
                            return animIndex;
                        }
                    }
                }              
                return 0;
            },
            set (value) {
                if (value === 0) {
                    this.spineAnimationName = '';
                    return;
                }
                var animsEnum;
                if (this.skeletonData) {
                    animsEnum = this.skeletonData.getAnimsEnum();
                }

                var animName = animsEnum[value];
                if (animName !== undefined) {
                    this.spineAnimationName = animName;
                }
                else{
                    this.spineAnimationName = '';
                }
            },
        },      
        spineAnimationName : 
        {
            displayName: "Animation名稱",
            default: "",
            visible(){ return this.checkType(ActionType.Spine) },
        },

        // ************************ Dragon Bones ************************
        dragonBones :
        {
            displayName: "##### 指定元件 #####",
            default: null,
            type: dragonBones.ArmatureDisplay,
            visible(){ return this.checkType(ActionType.DragonBones) },
            notify(oldValue){
                if(oldValue == null){
                    this.dragonAsset = this.dragonBones.dragonAsset
                    this.setPath(this.dragonBones.node)
                    this.dragonBones = null;
                    this.dragonBonesArmature = 0;
                }
            },
        },
        dragonBonesArmature: {
            displayName: "### 選擇 Armature ###",
            default: 0,
            type: DragonBonesArmaturesEnum,
            visible(){ return this.checkType(ActionType.DragonBones) },
            notify () {
                this.dragonBonesAnimation = 0;
                this._refreshInspector_DragonBones(this.dragonBonesArmature)
            },
        },
        dragonBonesArmatureName : 
        {
            displayName: "Armature名稱",
            default: "",
            visible(){ return this.checkType(ActionType.DragonBones) },
        },
        dragonBonesAnimation: {
            displayName: '### 選擇 Animation ###',
            default: 0,
            type: DragonBonesAnimsEnum,
            visible(){ return this.checkType(ActionType.DragonBones) },
            notify () {
                if (this.dragonBonesAnimation === 0) {
                    this.dragonBonesAnimationName = '';
                    return;
                }

                let animsEnum;
                if (this.dragonAsset) {
                    animsEnum = this.dragonAsset.getAnimsEnum(this.dragonBonesArmatureName);
                }

                if (!animsEnum) {
                    return;
                }

                let animName = animsEnum[this.dragonBonesAnimation];
                if (animName !== undefined) {
                    this.dragonBonesAnimationName = animName;
                }
            },
        },
        dragonBonesAnimationName : 
        {
            displayName: "Animation名稱",
            default: "",
            visible(){ return this.checkType(ActionType.DragonBones) },
        },

        // ************************************************

        mainAnimation :
        {
            displayName: "設定為主要動畫",
            default: true,
            visible(){
                let isShow = (this.type === ActionType.Spine || this.type === ActionType.Animation || this.type === ActionType.DragonBones || this.type === ActionType.MovieClip)
                return isShow;
            },
			tooltip: "設為主動畫時，動畫時間將以此動畫為主",
        },

        soundName : 
        {
            displayName: "聲音名稱",
            default: "",
            visible(){
                let isShow = (this.type === ActionType.Music || this.type === ActionType.Audio)
                return isShow;
            }
        },
        show : {
            displayName: "預設顯示(active)",
            default: true,
            visible(){
                let isShow = !(this.type === ActionType.Music || this.type === ActionType.Audio)
                return isShow;
            }             
        },
        loopBool : {
            displayName: "循環",
            default: false,
            visible(){
                let isShow = (this.type === ActionType.Node || this.type === ActionType.Audio || this.type === ActionType.Spine || this.type === ActionType.MovieClip)
                return isShow;
            }               
        },
        loopInt : {
            displayName: "播放次數",
            default: 1,
            tooltip: "指定播放动画的次数\n-1:为使用配置文件中的次数\n0:为无限循环播放\n>0:为动画的重复次数",
            visible(){
                let isShow = (this.type === ActionType.DragonBones)
                return isShow;
            }               
        },
        MovieloopInt : {
            displayName : "播放次數",
            default : 1,
            tooltip : "指定播放动画的次数\n0:为无限循环播放\n>0:为动画的重复次数",
            visible() {
                return (this.type === ActionType.MovieClip && this.loopBool === true);
            },
            tooltip:"MovieClip播放次數"
        },
        delayTime : {
            displayName: "延遲播放時間(delay)",
            default: 0,
        },
        time : {
            displayName: "顯示時間",
            default: 0,
            tooltip: "顯示時間，超過此時間就會隱藏",
        },
        clone : {
            displayName: "複製(cc.instantiate)",
            default: false,
            tooltip: "是否使用cc.instantiate，cc.instantiate出來的物件結束時會刪除",
            visible(){
                let isShow = (this.type === ActionType.Node || this.type === ActionType.Particle)
                return isShow;
            }        
        },
        stopOnEnd : {
            displayName: "結束時是否停止",
            default: true,
            visible(){
                let isShow = (this.type === ActionType.Music || this.type === ActionType.Animation)
                return isShow;
            }               
        },
        hideOnEnd : {
            displayName: "結束時是否隱藏",
            default: true,
            visible(){
                let isShow = (this.type === ActionType.Animation)
                return isShow;
            }               
        },           
    },

    // ********************** Ani ***************************
    _refreshInspector_Ani () {
        let clips = this.animationData.getClips()
        var animEnum = {}
        for (let i = 0; i < clips.length; ++i){
            animEnum[clips[i].name] = i
        }
        setEnumAttr(this, 'aniAnimation', animEnum || AniAnimsEnum);

        Editor.Utils.refreshSelectedInspector('node', this.node.uuid);
    },

    // ********************** Spine ***************************
    _refreshInspector_Spine () {
        var skinEnum;
        if (this.skeletonData) {
            skinEnum = this.skeletonData.getSkinsEnum();
        }
        setEnumAttr(this, 'spineSkin', skinEnum || SpineSkinsEnum);

        var animEnum;
        if (this.skeletonData) {
            animEnum = this.skeletonData.getAnimsEnum();
        }
        setEnumAttr(this, 'spineAnimation', animEnum || SpineAnimsEnum);
        
        if (animEnum.hasOwnProperty(1)){
            this.spineAnimation = 1
        }
        else{
            this.spineAnimation = 0
        }

        Editor.Utils.refreshSelectedInspector('node', this.node.uuid);
    },
    // *************************************************
    _refreshInspector_DragonBones (index) {
        // Armature Enum
        let armatureEnum = this.dragonAsset.getArmatureEnum();
        setEnumAttr(this, 'dragonBonesArmature', armatureEnum || DragonBonesArmaturesEnum);

        // Anims Enum
        let armatureName = armatureEnum[index];
        if (armatureName !== undefined) {
            this.dragonBonesArmatureName = armatureName;
        }

        let animEnum;
        if (this.dragonAsset) {
            animEnum = this.dragonAsset.getAnimsEnum(this.dragonBonesArmatureName);
        }
        setEnumAttr(this, 'dragonBonesAnimation', animEnum || DragonBonesAnimsEnum);

        // set now animation
        if (animEnum.hasOwnProperty(1)){
            this.dragonBonesAnimation = 1
        }
        else{
            this.dragonBonesAnimation = 0
        }

        Editor.Utils.refreshSelectedInspector('node', this.node.uuid);
    },

    checkType(type){
        return this.type === type
    },

    setPath(node){
        let path = node.name
        node = node.parent
        while (node != null){
            path = node.name + "/" + path
            if (node.name == "Canvas"){
                node = null
            }
            else{
                node = node.parent
            }
        }
        this.path = path
    },

    init(uiAction){
        this.uiAction = uiAction
        this.accTime = 0
        
        // UI
        if (this.type == ActionType.Node){
            this.play = this.playUI
            this.stop = this.stopUI
            return
        }
        // 背景音樂
        else if (this.type == ActionType.Music){
            this.play = this.playMusic
            this.stop = this.stopMusic
            return
        }
        // 音效
        else if (this.type == ActionType.Audio){
            this.play = this.playAudio
            this.stop = this.stopAudio
            return
        }

        this.obj = cc.find(this.path)
        if (this.obj == null){
            console.error("can not find obj ", this.path)
            return
        }

        // 判斷是否要clone
        if (this.clone == true){
            this.attach = this.obj.parent
            this.obj = cc.instantiate(this.obj)
            this.obj.parent = this.attach
        }

        // 預設是否顯示
        this.obj.active = this.show

        // ParticleSystem
        if (this.type == ActionType.Particle){
            this.ps = this.obj.getComponent(cc.ParticleSystem)
            if (this.ps != null){
                this.play = this.playParticle
                this.stop = this.stopParticle
            }
            else{
                console.error(this.obj.name, "can not find cc.ParticleSystem", this.obj)
            }
        }        
        // Spine 動畫
        else if (this.type == ActionType.Spine){
            this.sp = this.obj.getComponent(sp.Skeleton)

            if (this.sp != null){
                this.play = this.playSpine
                this.stop = this.stopSpine
            }
            else{
                console.error(this.obj.name, "can not find sp.Skeleton", this.obj)
            }
        }
        // cocos Animation 動畫
        else if (this.type == ActionType.Animation){
            this.ani = this.obj.getComponent(cc.Animation)
            if (this.ani != null){
                this.play = this.playAnimation
                this.stop = this.stopAnimation
            }
            else{
                console.error(this.obj.name, "can not find cc.Animation", this.obj)
            }
        }
        // DragonBones 動畫
        else if (this.type == ActionType.DragonBones){
            this.db = this.obj.getComponent(dragonBones.ArmatureDisplay)  
            if (this.db != null){
                this.play = this.playDragonBones
                this.stop = this.stopDragonBones                
            }
            else{
                console.error(this.obj.name, "can not find dragonBones.ArmatureDisplay", this.obj)
            }
        }
        // 影片(mp4...)
        else if (this.type === ActionType.MovieClip) {
            this.play=this.playMovie;
            this.stop=this.stopMovie;
            this.movie = this.obj.getComponent(cc.VideoPlayer);
        }
    },

    doFirstAction(){
        if (this.play != null){
            // 判斷是否延遲播放
            if (this.delayTime > 0){
                let self = this
                this.delayKey = GameG.NewDelayOnce(function(){
                    self.play()
                    
                    GameG.CancelNewDelay(self.delayKey)
                    self.delayKey = null

                }, this.delayTime)
            }
            else{
                this.play()
            }
        }
    },

    doAction(dt){
        // 計算顯示時間
        if (this.time != null){
            if (this.time > 0){
                this.accTime += dt

                if (this.accTime >= this.time){
                    if (this.obj != null){
                        this.obj.active = false
                        this.doLastAction()
                    }
                }
            }
        }
    },

    doLastAction(){
        if (this.stop != null){
            this.stop()
            this.stop = null
        }

        this.doDelete()

        // 刪除延遲
        if (this.delayKey != null){
            GameG.CancelNewDelay(this.delayKey)
            this.delayKey = null
        }
    },

    doDelete(){
        // 用clone產生則刪掉
        if (this.clone == true){
            if (this.obj != null){
                this.obj.destroy()
                this.obj = null
            }
        }
    },

    setActive(active){
        if (this.obj != null){
            this.obj.active = active
        }
    },

    playEnd(){
        if (this.mainAnimation == true){
            this.uiAction.playAnimationEnd()
        }
    },

    // ************ Music ****************
    playUI(){
        this.setActive(true)
    },
    stopUI(){
        this.setActive(false)
    },

    // ************ Music ****************
    playMusic(){
        GameG.PlayGameBGM(this.soundName)
    },
    stopMusic(){
        if (this.stopOnEnd == true){
            GameG.CloseBGMSound()
        }
    },

    // ************ Audio ****************
    playAudio(){
        GameG.PlayGameSound(this.soundName, this.loopBool)
    },
    stopAudio(){
        if (this.loopBool == true){
            GameG.CloseLoopSound(this.soundName)
        }
    },

    // ************ Animation ****************
    playAnimation(){
        if (this.ani != null){
            this.setActive(true)
            let res = this.ani.play(this.animationName)
            if (res != null){
                this.ani.on('finished', this.onPlayAniamtion, this);
            }
            else{
                this.setActive(false)
                console.error("Animation can not find ani ", this.animationName)
            }            
        }
    },
    stopAnimation(){
        if (this.ani != null){
            this.ani.off('finished', this.onPlayAniamtion, this);

            if (this.stopOnEnd == true){
                this.ani.stop()
            }

            if (this.hideOnEnd == true){
                this.setActive(false)
            }
        }
    },
    onPlayAniamtion(type, state) {
        this.playEnd()
    },

    // ************ MovieClip ****************    
    //flag:isPlaying
    //events:[ready-to-play,playing,paused,stopped,completed]
    playMovie(){
        this.loopCount = 0;
        this.movie.enabled=true;
        this.movie.play();
        this.movie.node.on('completed', this.onPlayMovie, this);
    },

    stopMovie(){
        this.movie.enabled=false;
        this.movie.stop();
        this.movie.node.off('completed', this.onPlayMovie, this);
    },
    
    onPlayMovie() {
        if (this.mainAnimation == true){
            this.uiAction.playAnimationEndOnce()
        }

        //loopBool loopInt
        if (this.loopBool === true) {
            if (this.MovieloopInt === 0) {
                this.movie.play();
                //this.uiAction.每次結束();
            } else if (this.MovieloopInt>0) {
                this.loopCount++;
                if (this.loopCount<this.MovieloopInt) {
                    this.movie.play();
                    //this.uiAction.每次結束();
                } else {
                    this.playEnd()
                }
            }
        } else {
            this.playEnd()
        }
    },
    
    // ************ Spine ****************
    playSpine(){
        if (this.sp != null){
            this.setActive(true)
            let res = this.sp.setAnimation(0, this.spineAnimationName, this.loopBool)
            if (res != null){
                if (this.isSetCompleteListener != true){
                    this.isSetCompleteListener = true
                    
                    let self = this
                    this.sp.setCompleteListener(function(){
                        self.sp.setCompleteListener(null)
                        self.playEnd()                  
                    });
                }
            }
            else{
                this.setActive(false)
                console.error("Spine can not find ani ", this.spineAnimationName)
            }
        }
        else{
            console.error("this.spine is null")
        }
    },
    stopSpine(){
        // Spine 沒關掉方法，只能用隱藏
        if (this.sp != null){
            this.setActive(false)
            this.sp.setCompleteListener(null)
        }
    },

    // ************ DragonBones ****************
    playDragonBones(){
        if (this.db != null){
            this.setActive(true)
            this.db.armatureName = this.dragonBonesArmatureName
            let res = this.db.playAnimation(this.dragonBonesAnimationName, this.loopInt)
            if (res != null){
                this.db.addEventListener(dragonBones.EventObject.COMPLETE, this.dragonBonesAniEventHandler, this)
                
            }
            else{
                this.setActive(false)
                console.error("DragonBones can not find ani ", this.dragonBonesAnimationName)
            }
        }
    },
    stopDragonBones(){
        // DragonBones 沒關掉方法，只能用隱藏
        if (this.db != null){
            this.setActive(false)
            this.db.removeEventListener(dragonBones.EventObject.COMPLETE, this.dragonBonesAniEventHandler, this)           
        }
    },
    dragonBonesAniEventHandler(event){
        this.playEnd()
    },

    // ************ Particle ****************
    playParticle(){
        if (this.ps != null){
            this.setActive(true)
            this.ps.resetSystem()
        }
    },
    stopParticle(){
        if (this.ps != null){
            this.ps.stopSystem()
        }
    },    

});
