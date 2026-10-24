cc.Class({

    extends:cc.Component,

    // 初始化
    init(prefabs) 
    {
        this.pools = []
        for(let i in prefabs)
        {
            this.pools[i] = []
            // 預製物
            this.pools[i].prefab = prefabs[i]
            // 父物件
            this.pools[i].parent = prefabs[i].parent
            // 物件
            this.pools[i].objs = []
        }
    },

    // 取得物件
    get(index, pos)
    {
        let node = null
        let pool = this.pools[index]
        for(let i in pool.objs)
        {
            let obj = pool.objs[i]

            // 此物件未使用
            if(obj.active == false)
            {
                node = obj
                break
            }
        }
        // 沒有找到物件
        if(node == null)
        {
            node = this.create(index)
        }
        // 設定位置
        if(pos != null)
        {
            node.position = pos
        }
        node.active = true
        return node
    },

    // 取得數量
    getCount(index)
    {
        return this.pools[index].objs.length
    },

    // 建立物件
    create(index)
    {
        let pool = this.pools[index]
        let obj = cc.instantiate(pool.prefab)
        obj.parent = pool.parent
        pool.objs.push(obj)
        return obj
    },

    // 禁用物件
    disableObj(index)
    {
        let pool = this.pools[index]
        let objs = pool.objs
        for(let i in objs)
        {
            objs[i].active = false
        }
    },

    // 銷毀物件
    destroyObj(index)
    {
        let pool = this.pools[index]
        let objs = pool.objs
        for(let i in objs)
        {
            objs[i].destroy()
        }
        this.pools[index].objs = []
    },

    // 銷毀所有物件
    destroyAllObj()
    {
        for(let i in this.pools)
        {
            this.destroyObj(i)
        }
    },

    // 播放動畫
    playAnim(index, position)
    {
        let obj = this.get(index, position)
        let anim = obj.getComponent(cc.Animation)
        if(anim != null)
        {
            anim.play()
        }
        return anim
    },

    // 播放第一個Frame動畫
    playFirstAnim(index, position)
    {
        let anim = this.playAnim(index, position)
        anim.setCurrentTime(0)
        anim.pause()
    },

    // 播放粒子
    playParticle(index, pos, targetPos, moveTime)
    {
        let node = this.get(index, pos)
        let particles = node.getComponentsInChildren(cc.ParticleSystem)
        let actions = []
        actions.push(cc.delayTime(0.3))
        actions.push(cc.callFunc(function()
        {
            node.runAction(cc.moveTo(moveTime, targetPos))
        },this))
        actions.push(cc.delayTime(moveTime))
        actions.push(cc.callFunc(function()
        {
            for(let i in particles)
            {
                particles[i].stopSystem()
            }
        },this))
        actions.push(cc.delayTime(1))
        actions.push(cc.callFunc(function()
        {
            node.active = false
        },this))
        node.runAction(cc.sequence(actions))
    }
});
