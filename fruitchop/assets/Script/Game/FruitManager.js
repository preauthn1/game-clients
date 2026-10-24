var GameG=require("GameGlobal");
var GameData=require("GameData");

cc.Class({
    extends : cc.Component,

    properties : {
        Root : cc.Node,

        Fruit : {
            default : [],
            type : require("Fruit"),
        },

        Boom : cc.Node,

        Emittor : require("FruitEmittor"),
        
        EffectScale: 0.7,
    },

    init(GameStart) {
        this.GameModel=GameStart.GameModel;
        this.GameLayer=GameStart.GameLayer;
        let physicsManager=cc.director.getPhysicsManager();
        this.gravity=physicsManager.gravity;

        this.isGameOver = false
    },

    onDestroy(){
        GameG.StopAllSound()
    },

    initProtoSetting(){
        if (this.Emittor) {
            let settingData = GameData.getProtoSetting()
            this.Emittor.setData(settingData)
        }
    },

    begin() {
        this.isGameOver = false

        // 開始發射器
        if (this.Emittor) {
            this.Emittor.StartPattern(this, 0);
        }
    },

    end() {
        this.isGameOver = true
        
        // 停止炸彈loop音效
        var children=this.Root.children;
        for (var i=0; i<children.length; ++ i) {
            let obj = children[i]
            let boomScript = obj.getComponent("Boom");
            if (boomScript != null){
                boomScript.stopSound()
            }

            obj.destroy();
        }

        // 停止發射器
        if (this.Emittor) {
            this.Emittor.stop();
        }
    },

    /** 找尋水果 by name */
    getFruitByName(name) {
        for (let i=0; i<this.Fruit.length; ++ i) {
            let fruit=this.Fruit[i];
            if (fruit.Name == name) {
                return fruit;
            }
        }

        return null;
    },

    /** 找尋水果 by type */
    getFruit(type) {
        for (let i=0; i<this.Fruit.length; ++ i) {
            let fruit=this.Fruit[i];
            if (fruit.Type == type) {
                return fruit;
            }
        }

        return null;
    },

    /** 發射物件by name */
    emitsByName(name, id) {
        if (name == null){
            console.error("fruit name error")
            return null
        }

        // 炸彈
        if (name === "boom") {
            let boomObj=cc.instantiate(this.Boom);
            boomObj.active=true;
            boomObj.parent=this.Root;
            boomObj.getComponent("Boom").init(this, id);
            return boomObj;
        }        
        // 水果
        else {
            let fruitScript = this.getFruitByName(name)
            if (fruitScript == null){
                console.error("can not find fruit", name)
                return null
            }
            let fruitObj=cc.instantiate(fruitScript.node);
            fruitObj.active=true;
            fruitObj.parent=this.Root;
            fruitObj.getComponent("Fruit").init(this, id);
            return fruitObj;
        }
    },     

    /** 發射物件by type */
    emits(type, id) {
        // 炸彈
        if (type === 100) {
            let boomObj=cc.instantiate(this.Boom);
            boomObj.active=true;
            boomObj.parent=this.Root;
            boomObj.getComponent("Boom").init(this, id);
            return boomObj;
        }
        // 水果
        else {
            let fruitScript = this.getFruit(type)
            if (fruitScript == null){
                console.error("can not find fruit", type)
                return null
            }
            let fruitObj=cc.instantiate(fruitScript.node);
            fruitObj.active=true;
            fruitObj.parent=this.Root;
            fruitObj.getComponent("Fruit").init(this, id);
            return fruitObj;
        }
    },

    /** 新增砍到水果時在牆上的特效 */
    showWallEffect(effects, node){
        // 亂數決定牆上特效數量
        let count = 1
        let random = GameG.MathRandom(0, 100)
        if (random > 90){
            count = 3
        }
        else if (random < 70){
            count = 2
        }

        for (let i = 0; i < count; ++i){
            let index = GameG.MathRandom(0, effects.length)
            let effect = effects[index]
            this.addWallEffect(effect, node)
        }
    },

    /** 新增牆上的特效 */
    addWallEffect(effect, node){
        if (effect == null){
            return
        }

        let bg = this.GameLayer.UIGame.bg

        let effectObj = cc.instantiate(effect);
        effectObj.active = true;
        effectObj.parent = bg;

        let wpos = GameG.GetWorldPosition(node)
        effectObj.scale = node.scale * this.EffectScale
        effectObj.angle = GameG.MathRandom(0, 360)
        
        wpos.x += GameG.MathRandom(-50, 50)
        wpos.y += GameG.MathRandom(-50, 50)
        effectObj.position = wpos;

        setTimeout(function () {
            if (effectObj != null && effectObj.parent != null){
                effectObj.destroy()
            }
        }.bind(self), 3 * 1000);        
    },
});
