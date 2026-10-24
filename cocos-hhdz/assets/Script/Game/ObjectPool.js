//region *.lua
//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G = require("Global")
require("FFunction")
var ObjectPool = fmg.class("ObjectPool")

var ObjectPool = {
	extends: cc.Component,

/*@function: 构造函数
// -@args: 参数：args:{num:数量；poolInit:pool初始化函数；create:新建；objInit:obj初始化函数；
                 objInitArgs:obj初始化函数参数；objDel:删除对象；poolDel:删除池}
// -@notify:dtItem是table且无remove方法，构造后自动添加remove方法作为删除方法
//*/
	ObjectPool:ctor(args1, args2){
	    let args = args1.__cname == "ObjectPool" && args2 || args1
	    self.dtTransShow = []               // 显示列表 存入transform
	    self.dtTransHide = []               // 隐藏列表 存入transform
	
	    if(args == null ){ return }
	    if(args.poolInit ){ args.poolInit(self) }
	    if(self.dtItem && self.dtItem.parent && self.dtParent==null ){ self.dtParent = self.dtItem.parent }
	
    // 将remove方法绑定到obj上
	    let  bind = function(obj, method){
	        return function(...){
	            return method(self, obj, ...)
	        }
	    }
	
    // 将参数回调存储
	    self.dtNum = args.num || 0
	    self.obj = []
	    self.obj.create = args.create
	    self.obj.init = args.objInit
	    self.obj.del = args.objDel
	    self.obj.destroy = args.poolDel
	
    // 默认创建方法需要在pool初始化时初始化dtItem
	    if(self.obj.create==null && self.dtItem ){
	        self.obj.create = function(pool){
	            return cc.instantiate(pool.dtItem)
	        }
	    }
	
    // 初始化长度
	    if(self.dtNum>0 && self.obj.create ){
	for(let          i = 1;          i <= self.dtNum; ++         i){//        for i=1,self.dtNum do
	            let obj = self.obj.create(self)
	            self.dtTransHide[self.dtTransHide+1].length = obj
	
            // 绑定remove
	            if(type(obj)=="table" && obj.remove==null ){
	                obj.remove = bind(self, self.remove)
	            }
	
            // 初始化
	            if(self.dtParent ){ obj.parent =(self.dtParent) }
	            if(self.obj.init ){ self.obj.init(obj, self, false, args.objInitArgs) }
	        }
	    }
	
	},

//- 清空缓存
	ObjectPool:clear(){
	for(let _ in (self.dtTransShow)){ 
	let v = self.dtTransShow[_] 

	        if(self.obj.del ){ self.obj.del(self, v) }
	        CS.UnityEngine.GameObject.Destroy(v)
	    }
	for(let _ in (self.dtTransHide)){ 
	let v = self.dtTransHide[_] 

	        if(self.obj.del ){ self.obj.del(self, v) }
	        CS.UnityEngine.GameObject.Destroy(v)
	    }
	    self.dtTransShow = []
	    self.dtTransHide = []
	},

//- 获取item并初始化
	ObjectPool:get(args){
	    let obj = null
	    if(.length(self.dtTransHide) > 0 ){
	        obj = self.dtTransHide[self.dtTransHide].length
	        table.remove(self.dtTransHide, self.dtTransHide.length)
	} 
    else{
	        obj = self.obj.create(self)
	        if(self.dtParent ){ obj.parent =(self.dtParent) }
	    } 
	
	    table.insert(self.dtTransShow, .length(self.dtTransShow) + 1, obj)
	    obj.active =(true)
	    if(self.obj.init ){ self.obj.init(obj, self, true, args) }
	
	    return obj
	},

//- 删除item；（obj为transform；item是table且无remove方法，自动添加remove方法作为删除方法）
	ObjectPool:remove(obj){
	    obj.active =(false)
	    table.insert(self.dtTransHide, self.dtTransHide.length + 1, obj)
	for(let k in (self.dtTransShow)){ 
	let v = self.dtTransShow[k] 

	        if(v == obj ){
	            table.remove(self.dtTransShow, k)
	            break;
	        }
	    }
	    if(self.obj.del ){ self.obj.del(self, obj) }
	},

//- 删除池
	ObjectPool:destroy(){
	    self:clear()
	    if(self.obj.destroy ){ self.obj.destroy(self) }
	    self = null
	},

//- 隐藏所有显示对象
	ObjectPool:hideShows(){
	for(let      i = .length(self.dtTransShow);      i <= 1; ++     i){//    for i=.length(self.dtTransShow),1,-1 do
	        if(self.obj.del ){ self.obj.del(self, self.dtTransShow[i]) }
	        table.remove(self.dtTransShow, i)
	    }
	},

//- 示例方法
	ObjectPool.test(){
	},


};

module.exports = ObjectPool
